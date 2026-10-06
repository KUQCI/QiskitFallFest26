import Link from "next/link";

import { Badge } from "@/components/ui/primitives";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { Track } from "@/content/types";
import { cn, formatLabel, reachLabel, statusLabel } from "@/lib/utils";

/**
 * A deliberately honest track summary. Until challenges are final, cards show only
 * their broad direction, reach, delivery format, and a planning-state label.
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
  const badgeLabel = statusLabel(track.status) ?? "Planning phase";
  const interactive = Boolean(href || onOpen);
  const stretched =
    "text-left after:absolute after:inset-0 after:rounded-[14px] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-gold";

  return (
    <article
      id={track.slug}
      data-track-card={track.slug}
      className={cn(
        "card group relative flex h-full scroll-mt-28 flex-col overflow-hidden p-6",
        planning && "sm:p-8",
        interactive && "card-interactive",
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink to-transparent opacity-60"
      />

      <div className="flex justify-end">
        <Badge tone={planning ? "purple" : "neutral"}>
          {badgeLabel}
        </Badge>
      </div>

      <h3 className={cn("mt-4 font-semibold text-fg", planning ? "text-2xl" : "text-xl")}>
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
      <p className="mt-3 text-sm leading-relaxed text-fg-muted">{track.summary}</p>

      {track.reach || track.format ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {track.reach ? <Badge tone="sky">{reachLabel(track.reach)}</Badge> : null}
          {track.format ? <Badge tone="neutral">{formatLabel(track.format)}</Badge> : null}
        </div>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
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
