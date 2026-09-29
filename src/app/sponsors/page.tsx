import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { ArrowRightIcon, MailIcon } from "@/components/ui/Icons";
import { event } from "@/content/event";
import { boothContent, partnerReasons, partnersPageContent } from "@/content/sponsors";

export const metadata: Metadata = {
  title: "Partners",
  description: partnersPageContent.metadataDescription,
};

export default function SponsorsPage() {
  const boothHref =
    boothContent.applicationUrl ??
    `mailto:${event.contactEmail}?subject=${encodeURIComponent(`${event.name} booth application`)}`;

  return (
    <>
      <PageHeader
        art="partners"
        eyebrow={partnersPageContent.eyebrow}
        title={partnersPageContent.title}
        lede={partnersPageContent.lede}
      />

      <PartnersSection />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={partnersPageContent.reasonsEyebrow}
            title={partnersPageContent.reasonsTitle}
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {partnerReasons.map((reason, index) => (
              <Reveal as="li" key={reason.title} delay={index * 70}>
                <article className="card h-full p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-fg">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface/25">
        <Container>
          <SectionHeading eyebrow={boothContent.eyebrow} title={boothContent.title} />

          <Reveal>
            <article className="card mt-12 max-w-4xl p-7 sm:p-10">
              <p className="max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">
                {boothContent.description}
              </p>
              <ul className="mt-8 grid gap-5 sm:grid-cols-3">
                {boothContent.benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <h3 className="text-base font-semibold text-fg">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{benefit.description}</p>
                  </li>
                ))}
              </ul>
              <a
                href={boothHref}
                {...(boothContent.applicationUrl
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group mt-9 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-on-gold transition-colors hover:bg-gold-strong"
              >
                {boothContent.actionLabel}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="card mx-auto max-w-3xl p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold text-fg sm:text-3xl">
              {partnersPageContent.contactTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
              {partnersPageContent.contactDescription}
            </p>
            <a
              href={`mailto:${event.contactEmail}?subject=${encodeURIComponent(
                `${event.name} sponsorship`,
              )}`}
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-on-gold transition-colors hover:bg-gold-strong"
            >
              <MailIcon className="h-4.5 w-4.5" />
              {partnersPageContent.contactActionLabel}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
