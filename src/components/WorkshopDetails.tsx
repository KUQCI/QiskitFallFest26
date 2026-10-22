import { ExternalLinkIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/primitives";
import type { AgendaWorkshop, AgendaWorkshopLabels } from "@/content/agenda";
import { isWorkshopUrl } from "@/lib/workshop-registration";

export function WorkshopDetails({ workshop, labels, linkProfiles = false, showTopics = true }: {
  workshop: AgendaWorkshop;
  labels: AgendaWorkshopLabels;
  linkProfiles?: boolean;
  showTopics?: boolean;
}) {
  const speakers = workshop.speakers ?? [];
  if (!speakers.length && !workshop.organizers && !(showTopics && workshop.topics?.length) && !workshop.certificates) return null;
  return <div className="mt-4 space-y-4 border-t border-border pt-4">
    {speakers.length || workshop.organizers ? <dl className="grid gap-4 text-sm sm:grid-cols-2">
      {speakers.length ? <div>
        <dt className="text-xs text-fg-subtle">{speakers.length === 1 ? labels.speaker : labels.speakers}</dt>
        <dd className="mt-1 space-y-2">
          {speakers.map(speaker => <div key={speaker.name}>
            {linkProfiles && isWorkshopUrl(speaker.profileUrl) ? <a href={speaker.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold underline underline-offset-4">
              {speaker.name}<ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
            </a> : <p className="font-semibold text-fg">{speaker.name}</p>}
            {speaker.title || speaker.organization ? <p className="mt-0.5 leading-relaxed text-fg-muted">{[speaker.title, speaker.organization].filter(Boolean).join(" · ")}</p> : null}
          </div>)}
        </dd>
      </div> : null}
      {workshop.organizers ? <div className={!speakers.length ? "sm:col-span-2" : undefined}>
        <dt className="text-xs text-fg-subtle">{labels.organizers}</dt>
        <dd className="mt-1 font-semibold leading-relaxed text-fg">{workshop.organizers}</dd>
      </div> : null}
    </dl> : null}
    {showTopics && workshop.topics?.length ? <ul aria-label={labels.topics} className="flex flex-wrap gap-2">
      {workshop.topics.map(topic => <li key={topic} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs leading-relaxed text-fg-muted">{topic}</li>)}
    </ul> : null}
    {workshop.certificates ? <Badge tone="gold">{labels.certificates}</Badge> : null}
  </div>;
}
