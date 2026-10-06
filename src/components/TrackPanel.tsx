"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Badge } from "@/components/ui/primitives";
import { CloseIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import type { TrackPanelCopy } from "@/content/tracks";
import type { Track, TrackLink, TrackOrganization } from "@/content/types";
import { cn, formatLabel, reachLabel, statusLabel } from "@/lib/utils";

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_IN = "cubic-bezier(0.7, 0, 0.84, 0)";
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

/**
 * Full-screen track details. Grows out of the card it was opened from, traps focus,
 * locks page scroll, and closes on Esc, backdrop click, or the close button.
 * Motion is transform/opacity only and is skipped entirely under reduced motion.
 */
export function TrackPanel({
  track,
  tracks,
  copy,
  origin,
  onSelect,
  onClosed,
}: {
  track: Track;
  tracks: Track[];
  copy: TrackPanelCopy;
  /** Bounding box of the card the panel was opened from, for the grow animation. */
  origin: DOMRect | null;
  onSelect: (slug: string) => void;
  /** Called once the close animation has finished. */
  onClosed: () => void;
}) {
  const titleId = useId();
  const shellRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);
  const firstSlugRef = useRef(track.slug);

  // Open: grow the shell from the card, fade the backdrop, then lift the content in.
  useLayoutEffect(() => {
    const shell = shellRef.current;
    const backdrop = backdropRef.current;
    const content = contentRef.current;
    if (!shell || !backdrop || !content || prefersReducedMotion()) return;

    backdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: "ease-out" });

    const target = shell.getBoundingClientRect();
    if (origin && isInViewport(origin)) {
      shell.animate(
        [
          { transform: flipTransform(origin, target), opacity: 0.6 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 560, easing: EASE_OUT },
      );
    } else {
      shell.animate(
        [
          { transform: "translate3d(0, 24px, 0) scale(0.97)", opacity: 0 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 420, easing: EASE_OUT },
      );
    }

    content.animate(
      [
        { opacity: 0, transform: "translate3d(0, 16px, 0)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 420, delay: 240, easing: EASE_OUT, fill: "backwards" },
    );
    // Only on mount (origin is captured at open time); later track switches use the
    // crossfade below.
  }, []);

  // Keep the active track visible in the horizontally scrolling switcher on small screens.
  useEffect(() => {
    shellRef.current
      ?.querySelector('nav [aria-current="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [track.slug]);

  // Switching tracks inside the panel: reset scroll and crossfade the new content.
  useEffect(() => {
    if (track.slug === firstSlugRef.current) return;
    firstSlugRef.current = track.slug;
    scrollRef.current?.scrollTo({ top: 0 });
    if (prefersReducedMotion()) return;
    contentRef.current?.animate(
      [
        { opacity: 0, transform: "translate3d(0, 10px, 0)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 320, easing: EASE_OUT },
    );
  }, [track.slug]);

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
    const content = contentRef.current;
    if (shell && backdrop && content && !prefersReducedMotion()) {
      const card = document.querySelector(`[data-track-card="${track.slug}"]`);
      const to = card?.getBoundingClientRect();
      const from = shell.getBoundingClientRect();
      const animations = [
        content.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, fill: "forwards" }),
        backdrop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 360, fill: "forwards" }),
        to && isInViewport(to)
          ? shell.animate(
              [
                { transform: "none", opacity: 1 },
                { transform: flipTransform(to, from), opacity: 0 },
              ],
              { duration: 400, easing: EASE_IN, fill: "forwards" },
            )
          : shell.animate(
              [
                { transform: "none", opacity: 1 },
                { transform: "translate3d(0, 24px, 0) scale(0.97)", opacity: 0 },
              ],
              { duration: 280, easing: EASE_IN, fill: "forwards" },
            ),
      ];
      // Failsafe: animations do not advance in a background tab, so never let the
      // dialog depend on `finished` resolving.
      await Promise.race([
        Promise.all(animations.map((animation) => animation.finished)).catch(() => undefined),
        new Promise((resolve) => setTimeout(resolve, 500)),
      ]);
    }
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
  const description = details.description?.length ? details.description : [track.summary];
  const badge = statusLabel(track.status);

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
        style={{ transformOrigin: "0 0" }}
        className="track-panel absolute inset-0 flex flex-col overflow-hidden outline-none sm:inset-x-0 sm:inset-y-6 sm:mx-auto sm:w-[min(72rem,calc(100%-3rem))] lg:inset-y-10"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink to-transparent opacity-70"
        />

        <header className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 sm:py-6">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              {badge ? <Badge tone="purple">{badge}</Badge> : null}
              {track.reach ? <Badge tone="sky">{reachLabel(track.reach)}</Badge> : null}
              {track.format ? <Badge tone="neutral">{formatLabel(track.format)}</Badge> : null}
            </div>
            <h2 id={titleId} className="mt-3 text-2xl font-semibold text-fg sm:text-3xl lg:text-4xl">
              {track.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => void close()}
            aria-label={copy.closeLabel}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-fg transition-colors hover:border-gold hover:text-gold"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <nav
            aria-label={copy.switcherLabel}
            className="shrink-0 border-b border-border lg:w-64 lg:overflow-y-auto lg:border-r lg:border-b-0"
          >
            <p className="hidden px-6 pt-6 font-mono text-2xs uppercase tracking-[0.22em] text-fg-subtle lg:block">
              {copy.switcherLabel}
            </p>
            <ul className="track-switcher flex gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-4 lg:py-3">
              {tracks.map((item) => {
                const active = item.slug === track.slug;
                return (
                  <li key={item.slug} className="shrink-0">
                    <button
                      type="button"
                      aria-current={active ? "true" : undefined}
                      onClick={() => onSelect(item.slug)}
                      className={cn(
                        "track-switch inline-flex min-h-11 w-full items-center whitespace-nowrap rounded-full border px-4 text-left text-sm transition-colors lg:whitespace-normal lg:rounded-xl lg:py-2",
                        active ? "font-semibold text-fg" : "text-fg-muted hover:text-fg",
                      )}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div ref={contentRef} className="mx-auto max-w-3xl space-y-12 px-5 py-8 sm:px-8 sm:py-10">
              <PanelSection heading={copy.descriptionHeading}>
                <div className="space-y-4 text-base leading-relaxed text-fg-muted sm:text-lg">
                  {description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </PanelSection>

              {details.sponsors?.length ? (
                <PanelSection heading={copy.sponsorsHeading}>
                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {details.sponsors.map((sponsor) => (
                      <li key={sponsor.name}>
                        <OrganizationTile organization={sponsor} />
                      </li>
                    ))}
                  </ul>
                </PanelSection>
              ) : null}

              <PanelSection heading={copy.challengesHeading}>
                {details.challenges?.length ? (
                  <BulletList items={details.challenges} />
                ) : (
                  <p className="track-notice pl-4 text-base leading-relaxed text-fg sm:text-lg">
                    {copy.challengesPending}
                  </p>
                )}
              </PanelSection>

              {details.tasks?.length ? (
                <PanelSection heading={copy.tasksHeading}>
                  <BulletList items={details.tasks} ordered />
                </PanelSection>
              ) : null}

              {details.submission &&
              (details.submission.where || details.submission.how?.length || details.submission.links?.length) ? (
                <PanelSection heading={copy.submissionHeading}>
                  <div className="space-y-4">
                    {details.submission.where ? (
                      <p className="text-base leading-relaxed text-fg">{details.submission.where}</p>
                    ) : null}
                    {details.submission.how?.length ? <BulletList items={details.submission.how} ordered /> : null}
                    {details.submission.links?.length ? <LinkList links={details.submission.links} /> : null}
                  </div>
                </PanelSection>
              ) : null}

              {details.resources?.length ? (
                <PanelSection heading={copy.resourcesHeading}>
                  <LinkList links={details.resources} />
                </PanelSection>
              ) : null}

              {details.organizer ? (
                <PanelSection heading={copy.organizerHeading}>
                  <div className="card flex flex-col gap-6 p-5 sm:flex-row sm:items-start sm:p-6">
                    {details.organizer.logo ? (
                      <div className="w-full shrink-0 sm:w-48">
                        <OrganizationTile organization={details.organizer} />
                      </div>
                    ) : null}
                    <div className="min-w-0 space-y-3">
                      <p className="text-lg font-semibold text-fg">{details.organizer.name}</p>
                      {details.organizer.about?.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-relaxed text-fg-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </PanelSection>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function PanelSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="font-mono text-2xs uppercase tracking-[0.22em] text-gold sm:text-xs">{heading}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "space-y-2 pl-5 text-base leading-relaxed text-fg-muted marker:text-pink",
        ordered ? "list-decimal" : "list-disc",
      )}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
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
    <span className="logo-plate relative flex h-24 w-full items-center justify-center overflow-hidden px-5">
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
