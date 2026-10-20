import { Badge } from "@/components/ui/primitives";
import { CalendarIcon, FlagIcon } from "@/components/ui/Icons";
import type { TrackStatusLabel } from "@/content/types";

export function TrackStatusBadge({ status, tone = "purple" }: {
  status: string | TrackStatusLabel;
  tone?: "purple" | "neutral";
}) {
  if (typeof status === "string") return <Badge tone={tone}>{status}</Badge>;
  const Icon = status.icon === "calendar" ? CalendarIcon : status.icon === "flag" ? FlagIcon : null;
  return <Badge tone={status.tone} className="track-date-badge">{Icon ? <Icon className="h-3.5 w-3.5 shrink-0" /> : null}{status.label}</Badge>;
}
