import type { TrackSubmission } from "@/content/types";

/** Only explicitly released, valid HTTP(S) links can open before the exact deadline. */
export function resolveTrackSubmission(submission: TrackSubmission, now: Date | null) {
  const deadline = Date.parse(submission.deadline.at);
  if (submission.closed || (now && now.getTime() >= deadline)) {
    return { label: submission.closedLabel, href: null };
  }
  if (now && Number.isFinite(deadline) && submission.enabled && submission.href) {
    try {
      const url = new URL(submission.href);
      if (url.protocol === "https:" || url.protocol === "http:") return { label: submission.label, href: submission.href };
    } catch { /* An invalid URL remains unavailable. */ }
  }
  return { label: submission.unavailableLabel, href: null };
}
