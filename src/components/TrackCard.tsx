import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/primitives";
import { TrackCoverMark } from "@/components/TrackCoverMark";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { tracksPageContent } from "@/content/tracks";
import type { Track } from "@/content/types";
import { cn, formatLabel, reachLabel } from "@/lib/utils";

/**
 * A short track summary: the challenge in one line, reach, delivery format, and a
 * explicitly approved status chips. The full challenge lives in the track panel.
 *
 * Pass `href` to make the whole card a link (home page), or `onOpen` to make it open
 * the track panel (tracks page). The title carries the control and a stretched
 * pseudo-element makes the full card clickable without nesting block content in it.
 */
export function TrackCard({
  track,
  variant = "preview",
  href,
  onOpen,
  actionLabel,
  expanded,
}: {
  track: Track;
  variant?: "preview" | "planning";
  href?: string;
  onOpen?: (trigger: HTMLButtonElement) => void;
  actionLabel?: string;
  expanded?: boolean;
}) {
  const planning = variant === "planning";
  const interactive = Boolean(href || onOpen);
  const stretched =
    "text-left after:absolute after:inset-0 after:rounded-[14px] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-gold";

  return (
    <article
      id={track.slug}
      data-track-card={track.slug}
      className={cn(
        "card track-summary-card group relative isolate flex h-full scroll-mt-28 flex-col overflow-hidden p-6",
        interactive && "card-interactive",
        track.coverIcon && "biology-track-card",
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink to-transparent opacity-60"
      />

      {/* Badge, title, and summary. With a banner, the image shares this block's grid cell,
          so it always covers exactly this text (however it wraps) and fades out below it.
          Grid stacking rather than absolute positioning keeps the stretched title link
          sized to the whole card. */}
      <div className={cn("grid", track.banner && "-mx-6 -mt-6")}>
        {track.banner ? (
          <span aria-hidden="true" className="track-banner-behind pointer-events-none relative -z-10 [grid-area:1/1]">
            <Image src={track.banner} alt="" fill sizes="(max-width: 767px) 100vw, 560px" className="object-cover" />
          </span>
        ) : null}
        <div
          className={cn(
            "[grid-area:1/1]",
            // Re-apply the card padding inside the full-bleed block. Its overlay blends
            // into the card surface without adding a taller hero area.
            track.banner && "px-6 pt-6",
          )}
        >
          <div className="track-card-masthead flex items-center justify-between gap-3">
            <TrackCoverMark icon={track.coverIcon} logo={track.coverLogo} logoAlt={`${track.hostedBy?.[0]?.name ?? track.title} logo`} />
            {track.statusLabels?.length ? (
              <div className="track-status-badges ml-auto flex flex-wrap justify-end gap-1.5">
                {track.statusLabels.map((label) => (
                  <span key={label} className={cn("inline-flex rounded-full", track.banner && "bg-surface")}>
                    <Badge tone={planning ? "purple" : "neutral"}>{label}</Badge>
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <h3 className={cn("mt-4 font-semibold", track.banner ? "text-on-image" : "text-fg", planning ? "text-2xl" : "text-xl")}>
            {href ? (
              <Link href={href} className={stretched}>
                {track.title}
              </Link>
            ) : onOpen ? (
              <button
                type="button"
                data-track-trigger={track.slug}
                aria-haspopup="dialog"
                aria-expanded={expanded ?? false}
                onClick={(event) => onOpen(event.currentTarget)}
                className={stretched}
              >
                {track.title}
              </button>
            ) : (
              track.title
            )}
          </h3>
          <p className={cn("mt-3 text-sm leading-relaxed", track.banner ? "text-on-image" : "text-fg-muted")}>
            {track.summary}
          </p>
        </div>
      </div>

      {track.hostedBy?.length ? (
        <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-fg-muted">
          {tracksPageContent.panel.hostedByHeading}{" "}
          {track.hostedBy.map((host) => (
            <Badge key={host.name} tone="gold">
              {host.label ?? host.name}
            </Badge>
          ))}
        </p>
      ) : null}

      {track.reach || track.format || track.tags?.length ? (
        <div className="track-card-tags mt-4 flex flex-wrap gap-2">
          {track.reach ? <Badge tone="sky">{reachLabel(track.reach)}</Badge> : null}
          {track.format ? <Badge tone="neutral">{formatLabel(track.format)}</Badge> : null}
          {track.tags?.map((tag) => <Badge key={tag} tone="purple">{tag}</Badge>)}
        </div>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <span aria-hidden="true" className="block h-px w-12 bg-pink transition-[width] duration-300 group-hover:w-20" />
        {interactive && actionLabel ? (
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.16em] text-gold"
          >
            {actionLabel}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </article>
  );
}
