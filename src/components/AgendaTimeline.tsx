"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon, MapPinIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/primitives";
import type { AgendaDay, AgendaKind, AgendaWorkshop, AgendaWorkshopLabels } from "@/content/agenda";
import { cn } from "@/lib/utils";

export function AgendaTimeline({ days, categories, kindLabels, workshopLabels, filterLabel, timelineLabel, resultsLabel }: {
  days: AgendaDay[];
  categories: readonly { id: "all" | AgendaKind; label: string }[];
  kindLabels: Record<AgendaKind, string>;
  workshopLabels: AgendaWorkshopLabels;
  filterLabel: string;
  timelineLabel: string;
  resultsLabel: string;
}) {
  const [selected, setSelected] = useState<"all" | AgendaKind>("all");
  const visibleDays = days.map(day => ({ ...day, items: day.items.filter(item => selected === "all" || item.kind === selected) })).filter(day => day.items.length);
  const count = visibleDays.reduce((total, day) => total + day.items.length, 0);
  return (
    <div>
      <div role="group" aria-label={filterLabel} className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(category => (
          <button key={category.id} type="button" aria-pressed={selected === category.id} onClick={() => setSelected(category.id)} className={cn(
            "min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
            selected === category.id ? "border-gold/50 bg-gold/10 text-gold" : "border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg",
          )}>{category.label}</button>
        ))}
      </div>
      <p role="status" className="mt-4 text-sm text-fg-subtle">{count} {resultsLabel}</p>
      <div aria-label={timelineLabel} className="mt-8 space-y-9 sm:space-y-12">
        {visibleDays.map(day => (
          <section key={day.date} aria-labelledby={`agenda-${day.date}`} className="grid gap-4 md:grid-cols-[8rem_1fr] md:gap-8">
            <h2 id={`agenda-${day.date}`} aria-label={`${day.day} ${day.month} ${day.date.slice(0, 4)}`} className="border-l-2 border-purple pl-4 md:border-l-0 md:pl-0">
              <time dateTime={day.date} className="flex items-baseline gap-2 md:flex-col md:gap-0">
                <span className="text-3xl font-semibold text-gold md:text-5xl">{day.day}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{day.month} {day.date.slice(0, 4)}</span>
              </time>
            </h2>
            <ul className="grid gap-4">
              {day.items.map(item => (
                <li key={item.id}>
                  <article className="card p-5 sm:p-6" data-agenda-item={item.id}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-fg-muted">{item.context}</p>
                      <Badge tone={item.kind === "deadline" ? "gold" : item.kind === "registration" ? "sky" : item.kind === "workshop" ? "purple" : "neutral"}>{kindLabels[item.kind]}</Badge>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-fg">{item.title}</h3>
                    {item.description ? <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">{item.description}</p> : null}
                    {item.time || item.venue ? <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      {item.time ? <p className="flex items-start gap-2 font-semibold text-gold"><CalendarIcon className="mt-0.5 h-4 w-4 shrink-0" />{item.time}</p> : null}
                      {item.venue ? <p className="flex items-start gap-2 text-fg-muted"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />{item.venue}</p> : null}
                    </div> : null}
                    {item.workshop ? <WorkshopDetails workshop={item.workshop} labels={workshopLabels} /> : null}
                    {item.href && item.actionLabel ? <Link href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold underline-offset-4 hover:underline">
                      {item.actionLabel}<span className="sr-only"> — {item.context}{item.external ? " (opens in a new tab)" : ""}</span>
                      {item.external ? <ExternalLinkIcon className="h-4 w-4" /> : <ArrowRightIcon className="h-4 w-4" />}
                    </Link> : null}
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function WorkshopDetails({ workshop, labels }: { workshop: AgendaWorkshop; labels: AgendaWorkshopLabels }) {
  const speakers = workshop.speakers ?? [];
  if (!speakers.length && !workshop.organizers && !workshop.topics?.length && !workshop.certificates) return null;
  return (
    <div className="mt-4 space-y-4 border-t border-border pt-4">
      {speakers.length || workshop.organizers ? <dl className="grid gap-4 text-sm sm:grid-cols-2">
        {speakers.length ? <div>
          <dt className="text-xs text-fg-subtle">{speakers.length === 1 ? labels.speaker : labels.speakers}</dt>
          <dd className="mt-1 space-y-2">
            {speakers.map(speaker => <div key={speaker.name}>
              {speaker.profileUrl && /^https?:\/\//i.test(speaker.profileUrl) ? (
                <a href={speaker.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold underline underline-offset-4">
                  {speaker.name}<ExternalLinkIcon className="h-4 w-4 shrink-0" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : <p className="font-semibold text-fg">{speaker.name}</p>}
              {speaker.title || speaker.organization ? <p className="mt-0.5 leading-relaxed text-fg-muted">{[speaker.title, speaker.organization].filter(Boolean).join(" · ")}</p> : null}
            </div>)}
          </dd>
        </div> : null}
        {workshop.organizers ? <div className={!speakers.length ? "sm:col-span-2" : undefined}>
          <dt className="text-xs text-fg-subtle">{labels.organizers}</dt>
          <dd className="mt-1 font-semibold leading-relaxed text-fg">{workshop.organizers}</dd>
        </div> : null}
      </dl> : null}
      {workshop.topics?.length ? <ul aria-label={labels.topics} className="flex flex-wrap gap-2">
        {workshop.topics.map(topic => <li key={topic} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs leading-relaxed text-fg-muted">{topic}</li>)}
      </ul> : null}
      {workshop.certificates ? <Badge tone="gold">{labels.certificates}</Badge> : null}
    </div>
  );
}
