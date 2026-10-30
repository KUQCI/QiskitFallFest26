import Image from "next/image";

import { Badge } from "@/components/ui/primitives";
import { TrackCoverMark } from "@/components/TrackCoverMark";
import { TrackStatusBadge } from "@/components/TrackStatusBadge";
import { ArrowRightIcon, CalendarIcon, MapPinIcon, UsersIcon } from "@/components/ui/Icons";
import { tracksPageContent } from "@/content/tracks";
import type { Track, TrackStatusLabel } from "@/content/types";
import { cn, formatLabel, reachLabel } from "@/lib/utils";

const statusKey = (status: string | TrackStatusLabel) => (typeof status === "string" ? status : status.label);
const isMetadataStatus = (status: string | TrackStatusLabel) => typeof status !== "string" && status.cardPlacement === "metadata";

/** Inline style that hands a track's accent token to `.track-cover`, `.agenda-*` etc. */
export function trackAccentStyle({ accent }: { accent: Track["accent"] | "lavender" }) {
  return { "--track-accent": `var(--c-${accent})` } as React.CSSProperties;
}

/** The cover band shared by track cards and the panel header. */
export function TrackCover({ track, className, priority }: { track: Track; className?: string; priority?: boolean }) {
  return (
    <div aria-hidden="true" className={cn("track-cover", className)}>
      {track.banner ? (
        <Image src={track.banner} alt="" fill priority={priority} sizes="(max-width: 767px) 100vw, 44rem" className="-z-10 object-cover opacity-55" />
      ) : null}
      {track.coverIcon || track.coverLogo ? (
        <div className="absolute bottom-4 left-6">
          <TrackCoverMark icon={track.coverIcon} logo={track.coverLogo} />
        </div>
      ) : null}
    </div>
  );
}

/**
 * A track summary that opens the track's full-screen panel. Every track uses the same
 * layout, top to bottom: cover band, status chips, title, summary, key facts, then
 * reach/format/participation tags. The title button carries the control and a stretched
 * pseudo-element makes the whole card clickable without nesting block content in it.
 */
export function TrackCard({
  track,
  onOpen,
  actionLabel,
  expanded,
}: {
  track: Track;
  onOpen: (trigger: HTMLButtonElement) => void;
  actionLabel: string;
  expanded?: boolean;
}) {
  const participation = track.participationLabel ?? track.teamSizeLabel;
  const statuses = track.statusLabels?.filter((status) => !isMetadataStatus(status)) ?? [];
  const metadataStatuses = track.statusLabels?.filter(isMetadataStatus) ?? [];

  return (
    <article
      id={track.slug}
      data-track-card={track.slug}
      style={trackAccentStyle(track)}
      className="card card-interactive group relative isolate flex h-full scroll-mt-28 flex-col overflow-hidden"
    >
      <TrackCover track={track} className="h-28 sm:h-32" />
      <div aria-hidden="true" className="track-cover-accent" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {statuses.length ? (
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => <TrackStatusBadge key={statusKey(status)} status={status} />)}
          </div>
        ) : null}

        <h3 className="mt-4 text-2xl font-semibold leading-tight text-fg sm:text-[1.75rem]">
          <button
            type="button"
            data-track-trigger={track.slug}
            aria-haspopup="dialog"
            aria-expanded={expanded ?? false}
            onClick={(event) => onOpen(event.currentTarget)}
            className="text-left after:absolute after:inset-0 after:rounded-[14px] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-gold"
          >
            {track.title}
          </button>
        </h3>
        {track.subtitle ? <p className="mt-1.5 text-sm font-semibold text-purple">{track.subtitle}</p> : null}
        <p className="mt-4 text-base leading-relaxed text-fg-muted">{track.summary}</p>

        <TrackFacts track={track} className="mt-6" />

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2 border-t border-border pt-5">
            {track.reach ? <Badge tone="sky">{reachLabel(track.reach)}</Badge> : null}
            {track.format ? <Badge tone="neutral">{track.formatDisplayLabel ?? formatLabel(track.format)}</Badge> : null}
            {participation ? <Badge tone="purple"><UsersIcon className="h-3.5 w-3.5 shrink-0" />{participation}</Badge> : null}
            {metadataStatuses.map((status) => <TrackStatusBadge key={statusKey(status)} status={status} />)}
            {track.tags?.map((tag) => <Badge key={tag} tone="neutral">{tag}</Badge>)}
          </div>
          <span aria-hidden="true" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
            {actionLabel}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Venue, deadline, hosts and sponsors, in that order, wherever a track has them. */
export function TrackFacts({ track, className }: { track: Track; className?: string }) {
  if (!track.venueLabel && !track.deadlineLabel && !track.hostedBy?.length && !track.sponsoredBy?.length) return null;
  return (
    <ul className={cn("space-y-2.5 text-sm leading-relaxed", className)}>
      {track.venueLabel ? (
        <li className="flex items-start gap-2.5 text-fg-muted"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle" />{track.venueLabel}</li>
      ) : null}
      {track.deadlineLabel ? (
        <li className="flex items-start gap-2.5 font-semibold text-gold"><CalendarIcon className="mt-0.5 h-4 w-4 shrink-0" />{track.deadlineLabel}</li>
      ) : null}
      {track.hostedBy?.length ? (
        <li className="flex flex-wrap items-center gap-2 text-fg-muted">
          {tracksPageContent.panel.hostedByHeading}
          {track.hostedBy.map((host) => <Badge key={host.name} tone="gold">{host.label ?? host.name}</Badge>)}
        </li>
      ) : null}
      {track.sponsoredBy?.length ? (
        <li className="flex flex-wrap items-center gap-2 text-fg-muted">
          {tracksPageContent.panel.sponsoredByHeading}
          {track.sponsoredBy.map((sponsor) => <Badge key={sponsor.name} tone="gold">{sponsor.name}</Badge>)}
        </li>
      ) : null}
    </ul>
  );
}
