import type { WorkshopRegistration } from "@/content/agenda";

export function isWorkshopUrl(href: string | null | undefined): href is string {
  if (!href) return false;
  try { return ["http:", "https:"].includes(new URL(href).protocol); }
  catch { return false; }
}

export function resolveWorkshopRegistration(registration: WorkshopRegistration | undefined) {
  if (registration?.closed) return { status: "closed" as const, href: null };
  if (registration?.enabled && isWorkshopUrl(registration.href)) {
    return { status: "open" as const, href: registration.href };
  }
  return { status: "pending" as const, href: null };
}
