"use client";

import { Badge } from "@/components/ui/primitives";
import { tracksPageContent } from "@/content/tracks";
import { event } from "@/content/event";
import { isTrackOver, useNow } from "@/lib/track-progress";

/** End-date status. Future events can hide the running badge without losing the Finished state. */
export function TrackProgressBadge({ endsAt, showRunning = true }: { endsAt?: string; showRunning?: boolean }) {
  const now = useNow();
  if (!now && !event.concluded) return null;
  const { finishedLabel, runningLabel } = tracksPageContent.progress;
  return isTrackOver(endsAt, now)
    ? <Badge tone="neutral">{finishedLabel}</Badge>
    : showRunning ? <Badge tone="gold">{runningLabel}</Badge> : null;
}
