"use client";

import Link from "next/link";
import { useCallback, useId, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { WorkshopBranding } from "@/components/WorkshopBranding";
import { WorkshopDetails } from "@/components/WorkshopDetails";
import { ArrowRightIcon, CalendarIcon, CloseIcon, ExternalLinkIcon, MapPinIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/primitives";
import type { AgendaDialogCopy, AgendaItem, AgendaKind, AgendaWorkshopLabels } from "@/content/agenda";
import { isWorkshopUrl, resolveWorkshopRegistration } from "@/lib/workshop-registration";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const agendaKindTone = (kind: AgendaKind) => (kind === "deadline" ? "gold" : kind === "registration" ? "sky" : kind === "workshop" ? "purple" : "neutral");

/**
 * Details for any agenda block. Workshops add topics, speakers, registration and resources;
 * other milestones show their overview, timing and track or premiere link. Native modal
 * supplies background inertness; page scrolling and exit motion are managed here.
 */
export function AgendaDialog({ item, kindLabel, labels, copy, onClosed }: {
  item: AgendaItem;
  kindLabel: string;
  labels: AgendaWorkshopLabels;
  copy: AgendaDialogCopy;
  onClosed: (destination?: string) => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const alive = useRef(false);
  const closing = useRef(false);
  const animations = useRef<Animation[]>([]);
  const isWorkshop = item.kind === "workshop";
  const workshop = item.workshop ?? {};
  const registration = resolveWorkshopRegistration(workshop.registration);
  const date = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Dubai" }).format(new Date(`${item.date}T12:00:00+04:00`));
  const resources = workshop.resources?.filter(resource => isWorkshopUrl(resource.href)) ?? [];
  const internalLink = item.href && !item.external ? item.href : null;

  // Workshops always list time and venue (unconfirmed if unknown); other milestones omit
  // unknown fields, and their time strings carry their own zone (Media uses Pacific Time).
  const sessionRows: [string, string][] = isWorkshop
    ? [[copy.dateLabel, date], [copy.timeLabel, item.time ?? copy.unconfirmedLabel], [copy.timezoneLabel, copy.timezone], [copy.venueLabel, item.venue ?? copy.unconfirmedLabel]]
    : [[copy.dateLabel, date], ...(item.time ? [[copy.timeLabel, item.time] as [string, string]] : []), ...(item.venue ? [[copy.venueLabel, item.venue] as [string, string]] : [])];

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    alive.current = true;
    closing.current = false;
    const root = document.documentElement;
    const overflow = root.style.overflow, padding = root.style.paddingRight;
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    if (!reducedMotion()) animations.current.push(dialog.animate([
      { opacity: 0, transform: "translate3d(0, 16px, 0) scale(.98)" },
      { opacity: 1, transform: "none" },
    ], { duration: 280, easing: "cubic-bezier(.16,1,.3,1)" }));
    return () => {
      alive.current = false;
      animations.current.forEach(animation => animation.cancel());
      animations.current = [];
      dialog.close();
      root.style.overflow = overflow;
      root.style.paddingRight = padding;
    };
  }, []);

  const close = useCallback(async (destination?: string) => {
    const dialog = dialogRef.current;
    if (!dialog || closing.current) return;
    closing.current = true;
    if (!reducedMotion()) {
      const style = getComputedStyle(dialog);
      const from = { opacity: style.opacity, transform: style.transform };
      animations.current.forEach(animation => animation.cancel());
      const animation = dialog.animate([from, { opacity: 0, transform: "translate3d(0, 12px, 0) scale(.98)" }], { duration: 200, easing: "ease-in", fill: "forwards" });
      animations.current = [animation];
      dialog.dataset.closing = "true";
      let timer: ReturnType<typeof setTimeout> | undefined;
      await Promise.race([animation.finished.catch(() => undefined), new Promise(resolve => { timer = setTimeout(resolve, 350); })]);
      clearTimeout(timer);
    }
    if (!alive.current) return;
    dialog.close();
    onClosed(destination);
  }, [onClosed]);

  function trapFocus(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const controls = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')).filter(element => element.getClientRects().length);
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  }

  // Internal links (track panels) close the dialog before navigating; do not stack dialogs.
  const internalAction = (label: string) => internalLink ? <Link href={internalLink} onClick={event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); void close(internalLink);
  }} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold underline underline-offset-4">{label}<ArrowRightIcon className="h-4 w-4" /></Link> : null;

  return createPortal(
    <dialog ref={dialogRef} id="agenda-dialog" aria-labelledby={titleId} aria-modal="true" className="workshop-dialog track-panel" onKeyDown={trapFocus}
      onCancel={event => { event.preventDefault(); void close(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) void close();
      }}>
      <header className="relative shrink-0 border-b border-border px-5 py-4 pr-18 sm:px-8 sm:pr-20">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Badge tone={agendaKindTone(item.kind)}>{kindLabel}</Badge>
          <p className="text-sm font-semibold text-fg-muted">{item.context}</p>
        </div>
        <h2 id={titleId} className="mt-2 text-xl font-semibold leading-tight text-fg sm:text-2xl">{item.title}</h2>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-relaxed">
          <p className="flex items-start gap-2 text-gold"><CalendarIcon className="h-4 w-4 shrink-0" /><time className="whitespace-nowrap" dateTime={item.date}>{date}</time></p>
          {item.time ? <p className="text-gold">{item.time}</p> : null}
          {item.venue ? <p className="flex items-start gap-2 text-fg-muted"><MapPinIcon className="h-4 w-4 shrink-0" />{item.venue}</p> : null}
        </div>
        {workshop.branding?.length ? <div className="mt-3"><WorkshopBranding items={workshop.branding} compact /></div> : null}
        <button ref={closeRef} type="button" aria-label={copy.closeLabel} onClick={() => void close()} className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-fg transition-colors hover:border-gold hover:text-gold sm:right-6"><CloseIcon className="h-5 w-5" /></button>
      </header>
      <div role="region" aria-label={copy.detailsLabel} tabIndex={0} className="min-h-0 flex-1 overflow-y-auto overscroll-contain focus-visible:outline-offset-[-4px]" data-workshop-scroll>
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-6 [overflow-wrap:anywhere] sm:px-8 sm:py-8">
          {item.description || workshop.topics?.length || workshop.audience || workshop.preparation?.length ? <section aria-labelledby={`${titleId}-about`}>
            <h3 id={`${titleId}-about`} className="biology-section-heading text-lg font-semibold text-fg">{isWorkshop ? copy.aboutHeading : copy.overviewHeading}</h3>
            {item.description ? <p className="mt-4 text-base leading-relaxed text-fg-muted">{item.description}</p> : null}
            {workshop.topics?.length ? <div className="mt-5">
              <h4 className="text-sm font-semibold text-fg">{copy.topicsHeading}</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">{workshop.topics.map(topic => <li key={topic} className="biology-detail-card text-sm leading-relaxed text-fg-muted">{topic}</li>)}</ul>
            </div> : null}
            {workshop.audience ? <p className="mt-4 text-sm leading-relaxed text-fg-muted"><strong className="text-fg">{copy.audienceHeading}:</strong> {workshop.audience}</p> : null}
            {workshop.preparation?.length ? <div className="mt-4"><h4 className="font-semibold text-fg">{copy.preparationHeading}</h4><ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted">{workshop.preparation.map(text => <li key={text}>{text}</li>)}</ul></div> : null}
          </section> : null}
          <section aria-labelledby={`${titleId}-session`}>
            <h3 id={`${titleId}-session`} className="biology-section-heading text-lg font-semibold text-fg">{isWorkshop ? copy.sessionHeading : copy.whenHeading}</h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {sessionRows.map(([label, value]) => <div key={label} className="biology-detail-card"><dt className="text-xs text-fg-subtle">{label}</dt><dd className="mt-1 text-sm font-semibold leading-relaxed text-fg">{value}</dd></div>)}
            </dl>
            {isWorkshop ? <WorkshopDetails workshop={workshop} labels={labels} showTopics={false} linkProfiles /> : null}
          </section>
          {isWorkshop ? <section aria-labelledby={`${titleId}-registration`}>
            <h3 id={`${titleId}-registration`} className="biology-section-heading text-lg font-semibold text-fg">{copy.registrationHeading}</h3>
            <div className="biology-registration mt-4">
              {registration.href ? <a href={registration.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-on-gold transition-colors hover:bg-gold-strong">
                {copy.registerLabel}<ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
              </a> : <p role="status" className="text-sm font-semibold text-fg">{registration.status === "closed" ? copy.closedLabel : copy.pendingLabel}</p>}
            </div>
            {resources.length ? <div className="mt-5"><h4 className="font-semibold text-fg">{copy.resourcesHeading}</h4><ul className="mt-2 space-y-2">{resources.map(resource => <li key={resource.href}><a href={resource.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold underline underline-offset-4">{resource.label}<ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span></a>{resource.description ? <p className="text-sm leading-relaxed text-fg-muted">{resource.description}</p> : null}</li>)}</ul></div> : null}
            {workshop.joiningLink && isWorkshopUrl(workshop.joiningLink.href) ? <div className="mt-5"><h4 className="font-semibold text-fg">{copy.joiningHeading}</h4><a href={workshop.joiningLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold underline underline-offset-4">{workshop.joiningLink.label}<ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span></a></div> : null}
            {internalLink?.startsWith("/tracks/#") ? <div className="mt-5">{internalAction(copy.relatedTrackLabel)}</div> : null}
          </section> : item.href ? <section aria-labelledby={`${titleId}-next`}>
            <h3 id={`${titleId}-next`} className="biology-section-heading text-lg font-semibold text-fg">{copy.nextHeading}</h3>
            <div className="mt-4">
              {item.external ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-on-gold transition-colors hover:bg-gold-strong">
                {item.actionLabel}<ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
              </a> : internalAction(item.actionLabel ?? copy.relatedTrackLabel)}
            </div>
          </section> : null}
        </div>
      </div>
    </dialog>, document.body,
  );
}
