import Link from "next/link";

import { Hero } from "@/components/Hero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FormatSection } from "@/components/sections/FormatSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { homeContent } from "@/content/event";
import { faqs } from "@/content/faq";
import { homeTrackPreviews, tracksPageContent } from "@/content/tracks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <PartnersSection compact />

      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow={homeContent.about.eyebrow} title={homeContent.about.title} />
              <div className="mt-8 hidden h-1 w-28 bg-gradient-to-r from-pink via-purple to-brand lg:block" aria-hidden="true" />
            </div>
            <div className="editorial-panel space-y-5 p-6 text-base leading-relaxed text-fg-muted sm:p-8 lg:col-span-7 lg:text-lg">
              {homeContent.about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === homeContent.about.paragraphs.length - 1 ? "text-fg" : undefined}>
                  {paragraph}
                </p>
              ))}
              <div className="pt-2">
                <Link href="/about/" className="group inline-flex min-h-11 items-center gap-2 font-semibold text-gold">
                  {homeContent.about.linkLabel}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface/25">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={homeContent.tracks.eyebrow}
              title={homeContent.tracks.title}
              lede={homeContent.tracks.lede}
            />
            <Link href="/tracks/" className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-gold transition-colors hover:border-gold">
              {homeContent.tracks.linkLabel}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {tracksPageContent.groups.map((group) => (
              <section key={group.reach} aria-labelledby={`home-tracks-${group.reach}`}>
                <h3 id={`home-tracks-${group.reach}`} className="mb-4 text-xl font-semibold text-fg">{group.heading}</h3>
                <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
                  {homeTrackPreviews.filter((track) => track.reach === group.reach).map((track) => (
                    <li key={track.slug}>
                      <Link href={`/tracks/#${track.slug}`} data-home-track={track.slug} className="group flex min-h-16 items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2 focus-visible:outline-offset-[-3px]">
                        <div className="min-w-0">
                          <h4 className="text-base font-semibold text-fg group-hover:text-gold">{track.title}</h4>
                          {track.description ? <p className="mt-1 hidden text-sm leading-relaxed text-fg-muted sm:block">{track.description}</p> : null}
                        </div>
                        <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <FormatSection />
      <ResourcesSection />

      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow={homeContent.faq.eyebrow} title={homeContent.faq.title} />
              <Link href="/faq/" className="group mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-gold">
                {homeContent.faq.linkLabel}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs.slice(0, 5)} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
