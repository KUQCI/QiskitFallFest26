import type { TrackRegistration } from "@/content/types";

/** Never infer an opening hour or release a form just because a calendar date arrives. */
export function resolveTrackRegistration(registration: TrackRegistration, now: Date | null) {
  if (registration.closed) return { label: registration.closedLabel ?? registration.unavailableLabel, href: null };
  if (!now) return { label: registration.beforeLabel, href: null };
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: registration.timeZone, year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => parts.find(item => item.type === type)?.value;
  const today = `${part("year")}-${part("month")}-${part("day")}`;
  if (today < registration.opensOn) return { label: registration.beforeLabel, href: null };
  if (registration.enabled && registration.href && /^https?:\/\//i.test(registration.href)) {
    return { label: registration.label, href: registration.href };
  }
  return { label: registration.unavailableLabel, href: null };
}
