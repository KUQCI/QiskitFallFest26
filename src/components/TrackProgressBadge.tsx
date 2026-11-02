"use client";

import { Badge } from "@/components/ui/primitives";
import { tracksPageContent } from "@/content/tracks";
import { isTrackOver, useNow } from "@/lib/track-progress";

/** "Finished" or "Still running", from the track's end date (none means still running). Renders nothing until the clock is known. */
export function TrackProgressBadge({ endsAt }: { endsAt?: string }) {
  const now = useNow();
  if (!now) return null;
  const { finishedLabel, runningLabel } = tracksPageContent.progress;
  return isTrackOver(endsAt, now)
    ? <Badge tone="neutral">{finishedLabel}</Badge>
    : <Badge tone="gold">{runningLabel}</Badge>;
}
