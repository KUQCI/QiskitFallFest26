import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { TrackExplorer } from "@/components/TrackExplorer";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container, Section } from "@/components/ui/primitives";
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
