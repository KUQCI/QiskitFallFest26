import type { Metadata } from "next";
import Link from "next/link";
import { AgendaCalendar } from "@/components/AgendaCalendar";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Container, Section } from "@/components/ui/primitives";
import { agendaCalendar, agendaPendingTracks, agendaPageContent as copy, agendaDialogCopy } from "@/content/agenda";

export const metadata: Metadata = { title: copy.title, description: copy.metadataDescription };

export default function AgendaPage() {
  return (
    <>
      <PageHeader compact art="partners" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
      <Container className="py-8 sm:py-12">
        <div className="mb-8 border-l-2 border-purple pl-4 sm:mb-10">
          <p className="text-sm leading-relaxed text-fg-muted">{copy.timezoneNote}</p>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">{copy.programmeNote}</p>
        </div>
        <AgendaCalendar calendar={agendaCalendar} categories={copy.categories} kindLabels={copy.kindLabels} workshopLabels={copy.workshopLabels} dialogCopy={agendaDialogCopy} copy={copy} />
        {agendaPendingTracks.length ? <section className="mt-12 border-t border-border pt-8" aria-labelledby="agenda-pending">
          <h2 id="agenda-pending" className="text-xl font-semibold text-fg">{copy.pendingTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">{copy.pendingDescription}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {agendaPendingTracks.map(track => <li key={track.href} className="card p-5">
              <h3 className="font-semibold text-fg">{track.title}</h3>
              <Link href={track.href} className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold hover:underline">{copy.pendingActionLabel}<span className="sr-only"> — {track.title}</span><ArrowRightIcon className="h-4 w-4" /></Link>
            </li>)}
          </ul>
        </section> : null}
      </Container>
      <Section className="border-t border-border bg-surface/25">
        <Container>
          <h2 className="text-2xl font-semibold text-fg sm:text-3xl">{copy.moreTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">{copy.moreDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/tracks/" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-on-gold hover:bg-gold-strong">{copy.tracksLabel}<ArrowRightIcon className="h-4 w-4" /></Link>
            <Link href="/schedule/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-fg hover:border-gold hover:text-gold">{copy.formatLabel}<ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
