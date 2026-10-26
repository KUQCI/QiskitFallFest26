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

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_IN = "cubic-bezier(0.7, 0, 0.84, 0)";
/** Fast start, long soft landing, so the card visibly travels and then settles. */
const EASE_EXPAND = "cubic-bezier(0.32, 0.72, 0, 1)";
const EASE_COLLAPSE = "cubic-bezier(0.65, 0, 0.35, 1)";
const EXPAND_MS = 620;
const COLLAPSE_MS = 460;
const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Transform that makes a box laid out at `to` appear at `from` (FLIP, origin top-left). */
function flipTransform(from: DOMRect, to: DOMRect) {
  const dx = from.left - to.left;
  const dy = from.top - to.top;
  const sx = from.width / to.width;
  const sy = from.height / to.height;
  return `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;
}

function isInViewport(rect: DOMRect) {
  return rect.bottom > 0 && rect.top < window.innerHeight && rect.width > 0;
}

/** Hide a track card while the panel stands in for it (see `[data-track-hidden]`). */
function hideCard(slug: string) {
  const card = document.querySelector(`[data-track-card="${slug}"]`);
  card?.setAttribute("data-track-hidden", "");
  return card;
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
 * Full-screen track details. Grows out of the card it was opened from, traps focus,
 * locks page scroll, and closes on Esc, backdrop click, or the close button. Every
 * track uses the same header (cover band, chips, title, summary, facts) above its
 * published brief. Motion is transform/opacity only and is skipped under reduced motion.
 */
export function TrackPanel({
  track,
  copy,
  origin,
  onClosed,
}: {
  track: Track;
  copy: TrackPanelCopy;
  /** Bounding box of the card the panel was opened from, for the grow animation. */
  origin: DOMRect | null;
  /** Called once the close animation has finished. */
  onClosed: () => void;
}) {
  const titleId = useId();
  const shellRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  // Open: the card itself appears to grow into the panel. The shell starts exactly on
  // the card's box (fully opaque, contents hidden), the real card is hidden underneath
  // so there is only one rectangle, and the contents fade in once the box has filled
  // most of the screen.
  useLayoutEffect(() => {
    const shell = shellRef.current;
    const backdrop = backdropRef.current;
    const inner = innerRef.current;
    if (!shell || !backdrop || !inner || prefersReducedMotion()) return;

    const animations: Animation[] = [];
    let card: Element | null = null;

    animations.push(
      backdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, easing: "ease-out" }),
    );

    const target = shell.getBoundingClientRect();
    if (origin && isInViewport(origin)) {
      card = hideCard(track.slug);
      const grow = shell.animate(
        [{ transform: flipTransform(origin, target) }, { transform: "none" }],
        { duration: EXPAND_MS, easing: EASE_EXPAND },
      );
      animations.push(grow);
      settle(grow, EXPAND_MS).then(() => card?.removeAttribute("data-track-hidden"));
    } else {
      animations.push(
        shell.animate(
          [
            { transform: "translate3d(0, 24px, 0) scale(0.97)", opacity: 0 },
            { transform: "none", opacity: 1 },
          ],
          { duration: 420, easing: EASE_OUT },
        ),
      );
    }

    animations.push(
      inner.animate(
        [
          { opacity: 0, transform: "translate3d(0, 10px, 0)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 300, delay: EXPAND_MS * 0.5, easing: EASE_OUT, fill: "backwards" },
      ),
    );

    // Cancel on cleanup so a re-run (React StrictMode in development) measures the
    // panel's real box instead of a box that is already mid-animation.
    return () => {
      animations.forEach((animation) => animation.cancel());
      card?.removeAttribute("data-track-hidden");
    };
    // Only on mount: origin is captured at open time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const inner = innerRef.current;
    let card: Element | null = null;
    if (shell && backdrop && inner && !prefersReducedMotion()) {
      // If the panel is still opening, continue from where it is now rather than
      // jumping to full size first: capture the live values, then stop the open motion.
      const currentTransform = getComputedStyle(shell).transform;
      const currentOpacity = getComputedStyle(inner).opacity;
      const currentBackdrop = getComputedStyle(backdrop).opacity;
      [shell, inner, backdrop].forEach((el) => el.getAnimations().forEach((a) => a.cancel()));

      const to = document.querySelector(`[data-track-card="${track.slug}"]`)?.getBoundingClientRect();
      const from = shell.getBoundingClientRect();
      const start = currentTransform === "none" ? "none" : currentTransform;
      const shrinkToCard = Boolean(to && isInViewport(to));
      // Hide the real card so the shrinking box lands in its place rather than on top of it.
      if (shrinkToCard) card = hideCard(track.slug);

      inner.animate([{ opacity: currentOpacity }, { opacity: 0 }], { duration: 150, fill: "forwards" });
      backdrop.animate([{ opacity: currentBackdrop }, { opacity: 0 }], {
        duration: 380,
        delay: 120,
        easing: "ease-in",
        fill: "forwards",
      });
      const shrink =
        to && shrinkToCard
          ? shell.animate([{ transform: start }, { transform: flipTransform(to, from) }], {
              duration: COLLAPSE_MS,
              delay: 120,
              easing: EASE_COLLAPSE,
              fill: "forwards",
            })
          : shell.animate(
              [
                { transform: "none", opacity: 1 },
                { transform: "translate3d(0, 24px, 0) scale(0.97)", opacity: 0 },
              ],
              { duration: 280, easing: EASE_IN, fill: "forwards" },
            );
      await settle(shrink, COLLAPSE_MS + 120);
    }
    card?.removeAttribute("data-track-hidden");
    onClosed();
  }, [track.slug, onClosed]);

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
        style={{ ...trackAccentStyle(track), transformOrigin: "0 0" }}
        className="track-panel absolute inset-0 flex flex-col overflow-clip outline-none sm:inset-x-0 sm:inset-y-6 sm:mx-auto sm:w-[min(80rem,calc(100%-3rem))] lg:inset-y-10"
      >
        <div ref={innerRef} data-panel-scroll className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
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
