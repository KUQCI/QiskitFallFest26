"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { AgendaDialog } from "@/components/AgendaDialog";
import { trackAccentStyle } from "@/components/TrackCard";
import type { AgendaCalendar as Calendar, AgendaDialogCopy, AgendaItem, AgendaKind, AgendaWorkshopLabels } from "@/content/agenda";
import { cn } from "@/lib/utils";

/** Today's date in UAE time as YYYY-MM-DD, read on the client so the static export stays deterministic. */
function todayInDubai() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dubai" }).format(new Date());
}

/**
 * The agenda as a horizontally scrolling two-week calendar. Each day is a column. Each
 * track is a colour-coded bar from its first to its last milestone, with the milestones
 * placed on their day. Bars that overlap in time sit in separate lanes (packed in
 * agenda.ts) so nothing overlaps on screen. Selecting any block opens its details dialog.
 */
export function AgendaCalendar({ calendar, categories, kindLabels, workshopLabels, dialogCopy, copy }: {
  calendar: Calendar;
  categories: readonly { id: "all" | AgendaKind; label: string }[];
  kindLabels: Record<AgendaKind, string>;
  workshopLabels: AgendaWorkshopLabels;
  dialogCopy: AgendaDialogCopy;
  copy: {
    filterLabel: string; timelineLabel: string; resultsLabel: string; weeksLabel: string;
    legendLabel: string; selectHint: string; scrollHint: string;
  };
}) {
  const router = useRouter();
  const { days, weeks, lanes } = calendar;
  const spans = lanes.flat();
  const allItems = spans.flatMap(span => span.items);
  const [filter, setFilter] = useState<"all" | AgendaKind>("all");
  const [today, setToday] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<AgendaItem | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const visible = (item: AgendaItem) => filter === "all" || item.kind === filter;
  const count = allItems.filter(visible).length;
  const column = (date: string) => days.findIndex(day => day.date === date);

  const scrollToDay = useCallback((index: number, smooth = true) => {
    const scroller = scrollerRef.current;
    const head = scroller?.querySelector<HTMLElement>(`[data-day-index="${index}"]`);
    if (!scroller || !head) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const left = head.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft;
    scroller.scrollTo({ left, behavior: smooth && !reduced ? "smooth" : "auto" });
  }, []);

  // Open on the current week.
  useEffect(() => {
    const now = todayInDubai();
    setToday(now);
    const index = column(now);
    if (index >= 0) scrollToDay(index >= 7 ? 7 : 0, false);
    // Only on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDialogClosed = useCallback((destination?: string) => {
    setOpenItem(null);
    // Release the dialog's scroll lock before opening a track on its own page.
    requestAnimationFrame(() => {
      if (destination) router.push(destination);
      else if (triggerRef.current?.isConnected) triggerRef.current.focus({ preventScroll: true });
    });
  }, [router]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label={copy.filterLabel} className="flex gap-2 overflow-x-auto pb-1">
          {categories.map(category => (
            <button key={category.id} type="button" aria-pressed={filter === category.id} onClick={() => setFilter(category.id)} className={cn(
              "min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              filter === category.id ? "border-gold/50 bg-gold/10 text-gold" : "border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg",
            )}>{category.label}</button>
          ))}
        </div>
        <div role="group" aria-label={copy.weeksLabel} className="flex shrink-0 gap-2">
          {weeks.map(week => (
            <button key={week.start} type="button" onClick={() => scrollToDay(week.start)} className="min-h-11 whitespace-nowrap rounded-full border border-border-strong px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-gold hover:text-gold">
              {week.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <p role="status" className="text-sm text-fg-subtle">{count} {copy.resultsLabel} · {copy.selectHint}</p>
        <ul aria-label={copy.legendLabel} className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-fg-muted">
          {spans.map(span => (
            <li key={span.id} className="flex items-center gap-2" style={trackAccentStyle({ accent: span.accent })}>
              <span aria-hidden="true" className="agenda-swatch" />{span.label}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label={copy.timelineLabel}
        tabIndex={0}
        className="card mt-5 overflow-x-auto overscroll-x-contain focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <div className="agenda-calendar" style={{ "--agenda-days": days.length } as React.CSSProperties}>
          {/* Day headers, then full-height column backgrounds behind every lane. */}
          {days.map((day, index) => (
            <div key={day.date} data-day-index={index} data-week-start={day.weekStart} data-today={day.date === today}
              className="agenda-day-head border-b border-border" style={{ gridColumn: index + 1, gridRow: 1 }}>
              <p className="font-mono text-2xs uppercase tracking-wider text-fg-subtle">{day.weekday}</p>
              <p className="mt-0.5 flex items-baseline gap-1.5">
                <span className={cn("text-xl font-semibold", day.date === today ? "text-gold" : "text-fg")}>{day.day}</span>
                <span className="text-xs text-fg-muted">{day.month}</span>
              </p>
            </div>
          ))}
          {days.map((day, index) => (
            <div key={`col-${day.date}`} aria-hidden="true" data-weekend={day.weekend} data-today={day.date === today}
              className="agenda-day-col" style={{ gridColumn: index + 1, gridRow: `2 / span ${lanes.length}` }} />
          ))}

          {lanes.map((lane, laneIndex) => lane.map(span => (
            <div key={span.id} style={{ ...trackAccentStyle({ accent: span.accent }), gridColumn: `${span.start + 1} / ${span.end + 2}`, gridRow: laneIndex + 2 }}
              className="relative z-[1] mx-1 my-1.5 grid grid-cols-subgrid content-start">
              <div className="agenda-span col-span-full px-2.5 py-1.5">
                <p className="sticky left-3 inline-flex max-w-full items-center gap-2 truncate text-xs font-semibold text-fg">
                  {span.href ? <Link href={span.href} className="truncate hover:underline">{span.label}</Link> : span.label}
                </p>
              </div>
              <div className="col-span-full grid grid-flow-row-dense grid-cols-subgrid gap-y-1.5 pt-1.5">
                {span.items.filter(visible).map(item => (
                  <button
                    key={item.id}
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={openItem?.id === item.id}
                    aria-label={`${item.title}, ${item.context}, ${days[column(item.date)].weekday} ${days[column(item.date)].day} ${days[column(item.date)].month}`}
                    onClick={event => { triggerRef.current = event.currentTarget; setOpenItem(item); }}
                    style={{ gridColumn: column(item.date) - span.start + 1 }}
                    className="agenda-event mx-0.5 min-h-11 px-2.5 py-2 text-left"
                  >
                    <span className="block font-mono text-[0.625rem] uppercase tracking-wider text-fg-muted">{kindLabels[item.kind]}</span>
                    <span className="mt-0.5 block text-[0.8125rem] font-semibold leading-snug text-fg">{item.title}</span>
                    {item.time ? <span className="mt-1 block text-[0.6875rem] leading-snug text-fg-muted">{item.time}</span> : null}
                  </button>
                ))}
              </div>
            </div>
          )))}
        </div>
      </div>
      <p className="mt-2 text-xs text-fg-subtle sm:hidden">{copy.scrollHint}</p>

      {openItem ? <AgendaDialog key={openItem.id} item={openItem} kindLabel={kindLabels[openItem.kind]} labels={workshopLabels} copy={dialogCopy} onClosed={handleDialogClosed} /> : null}
    </div>
  );
}
