"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { TrackCard } from "@/components/TrackCard";
import { TrackPanel } from "@/components/TrackPanel";
import type { TrackPanelCopy } from "@/content/tracks";
import type { Track } from "@/content/types";

/**
 * The tracks grid plus its full-screen detail panel. The open track is mirrored in
 * the URL hash (`/tracks/#<slug>`) so links, including the home page's featured
 * cards, scroll to the card and open it. `replaceState` keeps Back leaving the page
 * instead of stepping through every track that was viewed.
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

  const select = useCallback((slug: string) => {
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
      <ul className="grid gap-5 md:grid-cols-2">
        {tracks.map((track, index) => (
          <Reveal as="li" key={track.slug} delay={(index % 2) * 55}>
            <TrackCard
              track={track}
              variant="planning"
              actionLabel={copy.openLabel}
              expanded={openSlug === track.slug}
              onOpen={(trigger) =>
                open(track.slug, trigger.closest("article")?.getBoundingClientRect() ?? null)
              }
            />
          </Reveal>
        ))}
      </ul>

      {openTrack ? (
        <TrackPanel
          track={openTrack}
          tracks={tracks}
          copy={copy}
          origin={origin}
          onSelect={select}
          onClosed={handleClosed}
        />
      ) : null}
    </>
  );
}
