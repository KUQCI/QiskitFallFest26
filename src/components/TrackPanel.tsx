"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Badge } from "@/components/ui/primitives";
import { TrackBriefTabs } from "@/components/TrackBriefTabs";
import { TrackCover, TrackFacts, trackAccentStyle } from "@/components/TrackCard";
import { TrackStatusBadge } from "@/components/TrackStatusBadge";
import { CloseIcon, ExternalLinkIcon, UsersIcon } from "@/components/ui/Icons";
import type { TrackPanelCopy } from "@/content/tracks";
import type { Track, TrackHost, TrackLink, TrackOrganization } from "@/content/types";
import { cn, formatLabel, reachLabel } from "@/lib/utils";

const EASE_OUT = "cubic-bezier(0.32, 0.72, 0, 1)";
const EASE_IN = "cubic-bezier(0.65, 0, 0.35, 1)";
const OPEN_MS = 420;
const CLOSE_MS = 300;
const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Resolve when an animation finishes, or after `ms` plus a margin. Animations do not
 * advance in a background tab, so nothing may depend on `finished` alone.
 */
function settle(animation: Animation, ms: number) {
  return Promise.race([
    animation.finished.catch(() => undefined),
    new Promise((resolve) => setTimeout(resolve, ms + 150)),
  ]);
}

/**
 * Track details in a drawer that slides in from the right. Every track uses the same
 * header (cover band, chips, title, summary, facts) above its published brief. Traps
 * focus, locks page scroll, and closes on Esc, backdrop click, or the close button.
 * Motion is transform/opacity only and is skipped entirely under reduced motion.
 */
export function TrackPanel({
  track,
  copy,
  onClosed,
}: {
  track: Track;
  copy: TrackPanelCopy;
  /** Called once the close animation has finished. */
  onClosed: () => void;
}) {
  const titleId = useId();
  const shellRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const backdrop = backdropRef.current;
    if (!shell || !backdrop || prefersReducedMotion()) return;
    const animations = [
      backdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: OPEN_MS, easing: "ease-out" }),
      shell.animate([{ transform: "translate3d(100%, 0, 0)" }, { transform: "none" }], { duration: OPEN_MS, easing: EASE_OUT }),
    ];
    // Cancel on cleanup so a re-run (React StrictMode in development) starts cleanly.
    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  // Initial focus, scroll lock, and inert page behind the dialog.
  useEffect(() => {
    shellRef.current?.focus({ preventScroll: true });

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousPadding = root.style.paddingRight;
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;

    const background = Array.from(
      document.querySelectorAll<HTMLElement>("body > header, body > main, body > footer, body > a"),
    );
    background.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPadding;
      background.forEach((el) => el.removeAttribute("inert"));
    };
  }, []);

  const close = useCallback(async () => {
    if (closingRef.current) return;
    closingRef.current = true;

    const shell = shellRef.current;
    const backdrop = backdropRef.current;
    if (shell && backdrop && !prefersReducedMotion()) {
      // If the drawer is still opening, continue from where it is now.
      const currentTransform = getComputedStyle(shell).transform;
      const currentBackdrop = getComputedStyle(backdrop).opacity;
      [shell, backdrop].forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
      backdrop.animate([{ opacity: currentBackdrop }, { opacity: 0 }], { duration: CLOSE_MS, easing: "ease-in", fill: "forwards" });
      const slide = shell.animate(
        [{ transform: currentTransform === "none" ? "none" : currentTransform }, { transform: "translate3d(100%, 0, 0)" }],
        { duration: CLOSE_MS, easing: EASE_IN, fill: "forwards" },
      );
      await settle(slide, CLOSE_MS);
    }
    onClosed();
  }, [onClosed]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      void close();
      return;
    }
    if (event.key !== "Tab") return;

    // Keep keyboard focus inside the dialog.
    const shell = shellRef.current;
    if (!shell) return;
    const focusable = Array.from(shell.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || active === shell)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  const details = track.details ?? {};
  const participation = track.participationLabel ?? track.teamSizeLabel;
  // Hosts with only a name are already shown as labels in the header.
  const profiledHosts = (track.hostedBy ?? []).filter((host) => host.logo || host.about?.length || host.links?.length);
  const hostProfiles = [...profiledHosts, ...(details.hostPartners ?? [])];

  return createPortal(
    <div className="fixed inset-0 z-[80]">
      <div
        ref={backdropRef}
        aria-hidden="true"
        className="track-panel-backdrop absolute inset-0"
        onClick={() => void close()}
      />

      <div
        ref={shellRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        style={trackAccentStyle(track)}
        className="track-panel track-drawer absolute inset-y-0 right-0 flex w-full flex-col overflow-clip outline-none sm:w-[calc(100%-3rem)] lg:w-[min(85vw,96rem)]"
      >
        <div data-drawer-scroll className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <header className="relative">
            <TrackCover track={track} className="h-24 sm:h-28 lg:h-40" priority />
            <div aria-hidden="true" className="track-cover-accent" />
            <button
              type="button"
              onClick={() => void close()}
              aria-label={copy.closeLabel}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-surface text-fg transition-colors hover:border-gold hover:text-gold sm:right-6"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="max-w-5xl px-5 pb-6 pt-5 sm:px-8 sm:pb-8 lg:px-12 lg:pb-10 lg:pt-7">
              <div className="flex flex-wrap gap-2">
                {track.statusLabels?.map((status) => <TrackStatusBadge key={typeof status === "string" ? status : status.label} status={status} />)}
                {track.reach ? <Badge tone="sky">{reachLabel(track.reach)}</Badge> : null}
                {track.format ? <Badge tone="neutral">{track.formatDisplayLabel ?? formatLabel(track.format)}</Badge> : null}
                {participation ? <Badge tone="purple"><UsersIcon className="h-3.5 w-3.5 shrink-0" />{participation}</Badge> : null}
              </div>
              <h2 id={titleId} className="mt-4 text-3xl font-semibold leading-tight text-fg sm:text-4xl lg:text-5xl">
                {track.title}
              </h2>
              {track.subtitle ? <p className="mt-1.5 text-sm font-semibold text-purple">{track.subtitle}</p> : null}
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg-muted lg:text-lg">{details.headerSummary ?? track.summary}</p>
              <TrackFacts track={track} className="mt-5" />
            </div>
          </header>

          {details.brief ? (
            <TrackBriefTabs
              key={track.slug}
              brief={details.brief}
              hostProfiles={hostProfiles.length ? <HostProfiles hosts={hostProfiles} heading={copy.hostedByHeading} /> : null}
            />
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function HostProfiles({ hosts, heading }: { hosts: TrackHost[]; heading: string }) {
  return (
    <section>
      <h3 className="font-mono text-2xs uppercase tracking-[0.22em] text-gold sm:text-xs">{heading}</h3>
      <div className="mt-4 space-y-4">
        {hosts.map((host) => (
          <div key={host.name} className={cn("card flex flex-col gap-6 p-5 sm:p-6", host.contribution && "sm:flex-row sm:items-center")}>
            {host.logo ? (
              <div className={cn("w-full shrink-0", host.contribution ? "sm:w-40" : "sm:w-56")}><OrganizationTile organization={host} /></div>
            ) : null}
            <div className="min-w-0 space-y-3">
              <p className="text-lg font-semibold text-fg">{host.name}</p>
              {host.contribution ? <p className="text-sm leading-relaxed text-fg-muted">{host.contribution}</p> : null}
              {host.about?.map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-fg-muted">{paragraph}</p>)}
              {host.links?.length ? <LinkList links={host.links} /> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LinkList({ links }: { links: TrackLink[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 font-semibold text-gold"
          >
            {link.label}
            <ExternalLinkIcon className="h-4 w-4 shrink-0" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Logo on a neutral plate when supplied, otherwise the organization's name. */
function OrganizationTile({ organization }: { organization: TrackOrganization }) {
  const plate = (
    <span className={cn("logo-plate relative flex h-24 w-full items-center justify-center overflow-hidden px-5", organization.logoOnDark && "logo-plate-dark")}>
      {organization.logo ? (
        <Image
          src={organization.logo}
          alt={`${organization.name} logo`}
          fill
          sizes="(max-width: 639px) 90vw, 240px"
          className="object-contain p-4"
        />
      ) : (
        <span className="text-center text-base font-semibold text-logo-ink">{organization.name}</span>
      )}
    </span>
  );

  if (!organization.url) return plate;
  return (
    <a
      href={organization.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${organization.name} (opens in a new tab)`}
      className="block min-h-11 rounded-[14px]"
    >
      {plate}
    </a>
  );
}
