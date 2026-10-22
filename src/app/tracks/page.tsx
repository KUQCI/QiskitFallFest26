import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { TrackExplorer } from "@/components/TrackExplorer";
import { CtaSection } from "@/components/sections/CtaSection";
import { Badge, Container, Section } from "@/components/ui/primitives";
import { tracks, tracksPageContent } from "@/content/tracks";

export const metadata: Metadata = {
  title: tracksPageContent.eyebrow,
  description: tracksPageContent.metadataDescription,
};

export default function TracksPage() {
  return (
    <>
      <PageHeader
        art="tracks"
        eyebrow={tracksPageContent.eyebrow}
        title={tracksPageContent.title}
        lede={tracksPageContent.intro}
      />

      <Section>
        <Container>
          <section aria-labelledby="track-formats-heading" className="mb-12">
            <h2
              id="track-formats-heading"
              className="font-mono text-2xs uppercase tracking-[0.22em] text-gold sm:text-xs"
            >
              {tracksPageContent.formats.heading}
            </h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {tracksPageContent.formats.items.map((item) => (
                <li key={item.reach} className="card p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-fg">{item.label}</h3>
                    <Badge tone={item.reach === "national" ? "sky" : "neutral"}>{item.format}</Badge>
                  </div>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-fg-muted marker:text-purple sm:text-base">
                    {item.points.map(point => (
                      <li key={point.label}><strong className="font-semibold text-fg">{point.label}:</strong>{" "}{point.text}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <TrackExplorer tracks={tracks} copy={tracksPageContent.panel} />

          <p className="mt-10 max-w-3xl border-l-2 border-pink/60 pl-4 text-sm leading-relaxed text-fg-muted sm:text-base">
            {tracksPageContent.note}
          </p>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
