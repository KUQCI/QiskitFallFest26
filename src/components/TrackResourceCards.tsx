import { ExternalLinkIcon } from "@/components/ui/Icons";
import type { TrackBriefResource } from "@/content/types";

export function TrackResourceCards({ items, sourceLabels }: {
  items: TrackBriefResource[];
  sourceLabels: Record<TrackBriefResource["source"], string>;
}) {
  const resources = items.filter(item => {
    try { const url = new URL(item.href); return url.protocol === "https:" || url.protocol === "http:"; }
    catch { return false; }
  });
  if (!resources.length) return null;
  return <ul className="grid gap-3 sm:grid-cols-2">
    {resources.map(item => <li key={item.href} className="biology-detail-card">
      <p className="font-mono text-2xs uppercase tracking-wider text-purple">{sourceLabels[item.source]} · {item.type}</p>
      <h4 className="mt-3 font-semibold text-fg">{item.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold underline underline-offset-4">
        {item.actionLabel}<ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
      </a>
    </li>)}
  </ul>;
}
