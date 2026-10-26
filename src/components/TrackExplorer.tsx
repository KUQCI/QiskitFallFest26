"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { TrackCard } from "@/components/TrackCard";
import { TrackPanel } from "@/components/TrackPanel";
import { Badge } from "@/components/ui/primitives";
import { tracksPageContent, type TrackPanelCopy } from "@/content/tracks";
import type { Track } from "@/content/types";

/**
 * The tracks grid, grouped by reach, plus its full-screen detail panel. The open track is mirrored in
 * the URL hash (`/tracks/#<slug>`) so links, including the home page's featured
 * cards, scroll to the card and open it. `replaceState` keeps Back leaving the page
 * instead of stepping through every track that was viewed. To change tracks, close the
 * panel and open another card.
 */
export function TrackExplorer({ tracks, copy }: { tracks: Track[]; copy: TrackPanelCopy }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [origin, setOrigin] = useState<DOMRect | null>(null);
  const returnFocusRef = useRef<string | null>(null);

  const open = useCallback((slug: string, rect: DOMRect | null) => {
    setOrigin(rect);
    setOpenSlug(slug);
    window.history.replaceState(null, "", `#${slug}`);
  }, []);

  const handleClosed = useCallback(() => {
    returnFocusRef.current = openSlug;
    setOpenSlug(null);
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }, [openSlug]);

  // Return focus to the card for the track that was last shown. This runs after the
  // panel unmounts, once the page behind it is no longer inert.
  useEffect(() => {
    if (openSlug || !returnFocusRef.current) return;
    document.querySelector<HTMLElement>(`[data-track-trigger="${returnFocusRef.current}"]`)?.focus();
    returnFocusRef.current = null;
  }, [openSlug]);

  // Deep links: scroll the matching card into view, then open it from there.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const openFromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (!tracks.some((track) => track.slug === slug)) return;
      const card = document.querySelector<HTMLElement>(`[data-track-card="${slug}"]`);
      if (!card) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      card.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
      clearTimeout(timer);
      timer = setTimeout(() => open(slug, card.getBoundingClientRect()), reduced ? 0 : 650);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [tracks, open]);

  const openTrack = openSlug ? tracks.find((track) => track.slug === openSlug) : undefined;

  return (
    <>
      <div className="space-y-16">
        {tracksPageContent.groups.map((group) => {
          const format = tracksPageContent.formats.items.find((item) => item.reach === group.reach);
          return (
            <section key={group.reach} aria-labelledby={`tracks-${group.reach}`}>
              <div className="mb-6 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 id={`tracks-${group.reach}`} className="text-2xl font-semibold text-fg sm:text-3xl">{group.heading}</h2>
                  {format ? <Badge tone={group.reach === "national" ? "sky" : "neutral"}>{format.format}</Badge> : null}
                </div>
                {format ? (
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-fg-muted sm:text-base">
                    {format.points.map((point) => (
                      <li key={point.label}><strong className="font-semibold text-fg">{point.label}:</strong> {point.text}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <ul className="grid gap-6 lg:grid-cols-2">
                {tracks.filter((track) => track.reach === group.reach).map((track, index) => (
                  <Reveal as="li" key={track.slug} delay={(index % 2) * 55}>
                    <TrackCard
                      track={track}
                      actionLabel={copy.openLabel}
                      expanded={openSlug === track.slug}
                      onOpen={(trigger) => open(track.slug, trigger.closest("article")?.getBoundingClientRect() ?? null)}
                    />
                  </Reveal>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {openTrack ? <TrackPanel track={openTrack} copy={copy} origin={origin} onClosed={handleClosed} /> : null}
    </>
  );
}
