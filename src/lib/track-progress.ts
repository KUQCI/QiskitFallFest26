"use client";

import { useEffect, useState } from "react";

/** The current time, read on the client so the static export stays deterministic. Null until mounted. */
export function useNow() {
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
  return now;
}

/** A track with no end date, or before the clock is known, is never reported as over. */
export function isTrackOver(endsAt: string | undefined, now: Date | null) {
  return Boolean(endsAt && now && now.getTime() >= Date.parse(endsAt));
}
