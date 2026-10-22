"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { WorkshopDialog } from "@/components/WorkshopDialog";
import { WorkshopBranding } from "@/components/WorkshopBranding";
import { WorkshopDetails } from "@/components/WorkshopDetails";
import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon, MapPinIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/primitives";
import type { AgendaDay, AgendaItem, AgendaKind, AgendaWorkshopLabels, WorkshopDialogCopy } from "@/content/agenda";
import { cn } from "@/lib/utils";

export function AgendaTimeline({ days, categories, kindLabels, workshopLabels, dialogCopy, filterLabel, timelineLabel, resultsLabel }: {
  days: AgendaDay[];
  categories: readonly { id: "all" | AgendaKind; label: string }[];
  kindLabels: Record<AgendaKind, string>;
  workshopLabels: AgendaWorkshopLabels;
  dialogCopy: WorkshopDialogCopy;
  filterLabel: string;
  timelineLabel: string;
  resultsLabel: string;
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<"all" | AgendaKind>("all");
  const [workshop, setWorkshop] = useState<AgendaItem | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const visibleDays = days.map(day => ({ ...day, items: day.items.filter(item => selected === "all" || item.kind === selected) })).filter(day => day.items.length);
  const count = visibleDays.reduce((total, day) => total + day.items.length, 0);
  const handleClosed = useCallback((destination?: string) => {
    setWorkshop(null);
    // Release the dialog's scroll lock before opening a track on its own page.
    requestAnimationFrame(() => {
      if (destination) router.push(destination);
      else if (triggerRef.current?.isConnected) triggerRef.current.focus({ preventScroll: true });
    });
  }, [router]);

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
              {day.items.map(item => {
                const isWorkshop = item.kind === "workshop";
                const titleId = `agenda-title-${item.id}`;
                const contextId = `agenda-context-${item.id}`;
                return <li key={item.id}>
                  <article className="agenda-card relative isolate" data-agenda-item={item.id}>
                    <div className="agenda-card-surface card p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p id={contextId} className="text-sm font-semibold text-fg-muted">{item.context}</p>
                        <Badge tone={item.kind === "deadline" ? "gold" : item.kind === "registration" ? "sky" : isWorkshop ? "purple" : "neutral"}>{kindLabels[item.kind]}</Badge>
                      </div>
                      {isWorkshop && item.workshop?.branding?.length ? <div className="mt-4"><WorkshopBranding items={item.workshop.branding} compact floating /></div> : null}
                      <h3 id={titleId} className="mt-3 text-xl font-semibold text-fg">{item.title}</h3>
                      {item.description ? <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">{item.description}</p> : null}
                      {item.time || item.venue ? <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {item.time ? <p className="flex items-start gap-2 font-semibold text-gold"><CalendarIcon className="mt-0.5 h-4 w-4 shrink-0" />{item.time}</p> : null}
                        {item.venue ? <p className="flex items-start gap-2 text-fg-muted"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />{item.venue}</p> : null}
                      </div> : null}
                      {item.workshop ? <WorkshopDetails workshop={item.workshop} labels={workshopLabels} /> : null}
                      {isWorkshop || item.href ? <p aria-hidden="true" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold">
                        {isWorkshop ? dialogCopy.openLabel : item.actionLabel}
                        {!isWorkshop && item.external ? <ExternalLinkIcon className="h-4 w-4" /> : <ArrowRightIcon className="h-4 w-4" />}
                      </p> : null}
                    </div>
                    {isWorkshop ? <button type="button" data-agenda-trigger={item.id} aria-labelledby={`${titleId} ${contextId}`} aria-haspopup="dialog" aria-expanded={workshop?.id === item.id} aria-controls={workshop?.id === item.id ? "agenda-workshop-dialog" : undefined}
                      className="agenda-card-control absolute inset-0 z-10 cursor-pointer rounded-[14px]" onClick={event => { triggerRef.current = event.currentTarget; setWorkshop(item); }} />
                    : item.href ? <Link href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-labelledby={`${titleId} ${contextId}`} aria-describedby={item.external ? `${titleId}-external` : undefined} className="agenda-card-control absolute inset-0 z-10 rounded-[14px]">
                      {item.external ? <span id={`${titleId}-external`} className="sr-only">Opens in a new tab</span> : null}
                    </Link> : null}
                  </article>
                </li>;
              })}
            </ul>
          </section>
        ))}
      </div>
      {workshop ? <WorkshopDialog key={workshop.id} item={workshop} labels={workshopLabels} copy={dialogCopy} onClosed={handleClosed} /> : null}
    </div>
  );
}
