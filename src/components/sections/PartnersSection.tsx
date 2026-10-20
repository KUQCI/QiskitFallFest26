import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { partners, partnersIntro, partnersSectionContent, technicalSponsors } from "@/content/sponsors";
import type { Partner } from "@/content/types";
import { cn } from "@/lib/utils";

export function PartnersSection({ compact = false }: { compact?: boolean }) {
  const confirmed = partners.filter((partner) => partner.status === "confirmed");
  const confirmedTechnicalSponsors = technicalSponsors.filter((partner) => partner.status === "confirmed");

  return (
    <Section className="border-y border-border bg-surface/25">
      <Container>
        <SectionHeading
          eyebrow={partnersSectionContent.eyebrow}
          title={partnersSectionContent.organizersTitle}
          lede={partnersIntro}
        />

        <PartnerLogoGrid items={confirmed} compact={compact} />

        {confirmedTechnicalSponsors.length ? (
          <div className="mt-14 border-t border-border pt-12 sm:mt-16 sm:pt-14">
            <SectionHeading title={partnersSectionContent.technicalSponsorsTitle} />
            <PartnerLogoGrid items={confirmedTechnicalSponsors} compact={compact} />
          </div>
        ) : null}
      </Container>
    </Section>
  );
}

function PartnerLogoGrid({ items, compact }: { items: Partner[]; compact: boolean }) {
  return (
    <div
      className={cn(
        "mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
        !compact && "lg:mt-12",
      )}
    >
      {items.map((partner, index) => (
        <Reveal key={partner.name} delay={index * 60}>
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${partner.name} (opens in a new tab)`}
            className="card card-interactive group flex min-h-44 items-center justify-center p-5 sm:p-7"
          >
            <span className={cn("logo-plate relative flex h-28 w-full items-center justify-center overflow-hidden px-7 py-5", partner.logoOnDark && "logo-plate-dark")}>
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw"
                  className="object-contain p-5"
                />
              ) : (
                <span className="text-xl font-semibold text-logo-ink">{partner.name}</span>
              )}
            </span>
            <ExternalLinkIcon className="ml-3 h-4 w-4 shrink-0 text-fg-subtle transition-colors group-hover:text-gold" />
          </a>
        </Reveal>
      ))}
    </div>
  );
}
