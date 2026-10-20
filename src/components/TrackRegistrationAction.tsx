"use client";

import { useEffect, useState } from "react";

import { ArrowRightIcon, CalendarIcon } from "@/components/ui/Icons";
import type { TrackRegistration } from "@/content/types";
import { resolveTrackRegistration } from "@/lib/track-registration";
import { cn } from "@/lib/utils";

export function TrackRegistrationAction({ registration }: { registration: TrackRegistration }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const refresh = () => setNow(new Date());
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    window.addEventListener("focus", refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
    };
  }, []);
  const state = resolveTrackRegistration(registration, now);
  return (
    <div className={cn("biology-registration flex gap-3", registration.note ? "flex-col items-start" : "items-center")} role="status">
      <div className="flex min-w-0 items-center gap-3">
        <CalendarIcon className="h-5 w-5 shrink-0 text-gold" />
        {state.href ? (
          <a href={state.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-on-gold transition-colors hover:bg-gold-strong">
            {state.label}<ArrowRightIcon className="h-4 w-4 shrink-0" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : <p className="text-sm font-semibold text-fg">{state.label}</p>}
      </div>
      {registration.note ? <p className="text-sm leading-relaxed text-fg-muted">{registration.note}</p> : null}
    </div>
  );
}
