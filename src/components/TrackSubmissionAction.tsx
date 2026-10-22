"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, CalendarIcon } from "@/components/ui/Icons";
import type { TrackSubmission } from "@/content/types";
import { resolveTrackSubmission } from "@/lib/track-submission";

export function TrackSubmissionAction({ submission }: { submission: TrackSubmission }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const refresh = () => {
      clearTimeout(timer);
      const current = new Date();
      setNow(current);
      const remaining = Date.parse(submission.deadline.at) - current.getTime();
      timer = setTimeout(refresh, remaining > 0 ? Math.min(60_000, remaining) : 60_000);
    };
    refresh();
    window.addEventListener("focus", refresh);
    return () => { clearTimeout(timer); window.removeEventListener("focus", refresh); };
  }, [submission.deadline.at]);
  const state = resolveTrackSubmission(submission, now);
  return (
    <div className="biology-registration space-y-4">
      <p role="status" className="text-base font-semibold text-fg">{state.label}</p>
      <p className="flex items-start gap-2 text-sm leading-relaxed text-gold">
        <CalendarIcon className="mt-0.5 h-5 w-5 shrink-0" />
        <span>Submission deadline: <time dateTime={submission.deadline.at}>{submission.deadline.label}</time></span>
      </p>
      {state.href ? <a href={state.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-on-gold transition-colors hover:bg-gold-strong">
        {state.label}<ArrowRightIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
      </a> : null}
    </div>
  );
}
