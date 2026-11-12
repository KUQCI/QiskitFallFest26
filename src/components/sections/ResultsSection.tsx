import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { recapCopy, workshopResults } from "@/content/results";

export function ResultsSection() {
  return <Section className="border-t border-border" id="results">
    <Container>
      <SectionHeading eyebrow={recapCopy.eyebrow} title={recapCopy.title} lede={recapCopy.lede} />
      <div className="mt-8 grid gap-5">
        {recapCopy.reach.map(item => <article key={item.title} className="card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-fg">{item.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-fg-muted">{item.text}</p>
        </article>)}
      </div>
      <h3 className="mt-12 text-2xl font-semibold text-fg">{recapCopy.workshopsTitle}</h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-fg-muted">{recapCopy.workshopsDescription}</p>
      <ul className="mt-6 grid gap-5 md:grid-cols-2">
        {workshopResults.map(item => <li key={item.id} className="card p-6 sm:p-8">
          <p className="font-mono text-xs leading-relaxed text-sky">{item.date} 2026 · {item.time}</p>
          <h4 className="mt-3 text-xl font-semibold text-fg">{item.title}</h4>
          <p className="mt-3 font-mono text-xl font-semibold text-gold">{item.attendance}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.description}</p>
        </li>)}
      </ul>
    </Container>
  </Section>;
}
