"use client";

import { useEffect, useId, useRef, useState } from "react";

import { ExternalLinkIcon, SparkIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/primitives";
import { BiologyArtwork } from "@/components/BiologyArtwork";
import type { TrackBrief, TrackBriefBlock } from "@/content/types";
import { cn } from "@/lib/utils";

/** A track's published brief, inside the existing modal and focus trap. */
export function TrackBriefTabs({
  brief,
  hostProfiles,
}: {
  brief: TrackBrief;
  hostProfiles?: React.ReactNode;
}) {
  const id = useId();
  const [selected, setSelected] = useState(0);
  const [vertical, setVertical] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const panel = brief.panels[selected];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setVertical(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
    tabRefs.current[selected]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [selected]);

  function navigate(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = brief.panels.length - 1;
    else if (event.key === (vertical ? "ArrowDown" : "ArrowRight")) next = (index + 1) % brief.panels.length;
    else if (event.key === (vertical ? "ArrowUp" : "ArrowLeft")) next = (index - 1 + brief.panels.length) % brief.panels.length;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col md:flex-row">
      <div className="min-h-0 shrink-0 border-b border-border bg-surface md:w-48 md:overflow-y-auto md:border-b-0 md:border-r">
        <div
          role="tablist"
          aria-label={brief.navigationLabel}
          aria-orientation={vertical ? "vertical" : "horizontal"}
          className="flex gap-1 overflow-x-auto p-3 md:flex-col md:overflow-x-visible md:p-4"
        >
          {brief.panels.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`${id}-tab-${item.id}`}
              aria-controls={`${id}-panel-${item.id}`}
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => navigate(event, index)}
              className={cn(
                "min-h-11 shrink-0 rounded-lg border px-3 py-2.5 text-left text-sm font-semibold whitespace-nowrap transition-colors md:whitespace-normal",
                selected === index
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-transparent text-fg-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div ref={contentRef} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain">
        {brief.panels.map((item, index) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`${id}-panel-${item.id}`}
            aria-labelledby={`${id}-tab-${item.id}`}
            hidden={selected !== index}
            tabIndex={selected === index ? 0 : -1}
            className="mx-auto max-w-3xl space-y-5 px-5 py-6 [overflow-wrap:anywhere] focus-visible:outline-offset-[-4px] sm:px-8 sm:py-8"
          >
            {selected === index ? <>
              <h3 className="text-2xl font-semibold text-fg">{panel.title}</h3>
              {panel.id === "overview" ? <>
                {brief.tags?.length ? <div className="flex flex-wrap gap-2">{brief.tags.map(tag => <Badge key={tag} tone="purple">{tag}</Badge>)}</div> : null}
                {brief.highlights?.length ? (
                  <dl className="biology-highlights grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {brief.highlights.map(item => (
                      <div key={item.label} className="biology-highlight">
                        <dt className="text-xs leading-relaxed text-fg-muted">{item.label}</dt>
                        <dd className="mt-2 text-xl font-semibold tracking-tight text-gold">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </> : null}
              {panel.blocks.map((block, blockIndex) => <BriefBlock key={blockIndex} block={block} />)}
              {panel.showHosts ? hostProfiles : null}
            </> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function BriefBlock({ block }: { block: TrackBriefBlock }) {
  switch (block.type) {
    case "heading":
      return <h4 className="biology-section-heading pt-4 text-lg font-semibold text-fg">{block.text}</h4>;
    case "paragraph":
      return block.presentation === "spotlight" ? (
        <div className="biology-award"><BiologyGlyph index={6} /><p className="text-base leading-relaxed text-fg">{block.text}</p></div>
      ) : <p className="text-base leading-relaxed text-fg-muted">{block.text}</p>;
    case "note":
      return <p className="border-l-2 border-pink/60 pl-4 text-sm leading-relaxed text-fg-muted">{block.text}</p>;
    case "notice":
      return (
        <div className="biology-notice flex items-start gap-3 text-sm leading-relaxed text-fg">
          <SparkIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div className="space-y-2">{block.paragraphs.map((text) => <p key={text}>{text}</p>)}</div>
        </div>
      );
    case "visual":
      return (
        <figure aria-hidden="true" className={cn("biology-visual", block.motion && `biology-visual--${block.motion}`)}>
          <BiologyArtwork src={block.src} />
        </figure>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={cn(
          block.presentation ? "grid gap-4 sm:grid-cols-2" : "space-y-5 pl-5 text-base leading-relaxed text-fg-muted marker:text-pink",
          !block.presentation && (block.ordered ? "list-decimal" : "list-disc"),
        )}>
          {block.items.map((item, index) => (
            <li key={item.title} className={block.presentation ? "biology-detail-card" : undefined}>
              {block.presentation ? <>
                {block.presentation === "steps" ? <span aria-hidden="true" className="biology-step-number">{String(index + 1).padStart(2, "0")}</span> : <BiologyGlyph index={index} />}
                <strong className="mt-4 block text-base font-semibold text-fg">{item.title}</strong>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.text}</p>
              </> : <><strong className="font-semibold text-fg">{item.title}</strong>{" "}{item.text}</>}
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return block.presentation === "timeline" ? (
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-wider text-fg-subtle">{block.columns[0]}</p>
          <ol className="biology-timeline" aria-label={block.columns.join(" · ")}>
            {block.rows.map(row => (
              <li key={row[0]}>
                <span className="biology-timeline-dot" aria-hidden="true" />
                <p className="font-mono text-sm font-semibold text-gold">{row[0]}</p>
                <p className="mt-2 text-base leading-relaxed text-fg-muted">{row[1]}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : <BriefTable columns={block.columns} rows={block.rows} />;
    case "releases":
      return (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {block.items.map((item, index) => (
            <li key={item.label} className="biology-detail-card">
              <BiologyGlyph index={index} />
              {item.enabled && item.href && /^https?:\/\//i.test(item.href) ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-gold underline underline-offset-4">
                  {item.label}<ExternalLinkIcon className="h-4 w-4 shrink-0" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : <><p className="mt-4 font-semibold text-fg">{item.label}</p><p className="mt-2 text-sm text-fg-subtle">{item.availability}</p></>}
            </li>
          ))}
        </ul>
      );
    case "links":
      return (
        <ul className="space-y-2">
          {block.items.map((link) => (
            <li key={link.href}>
              <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold underline underline-offset-4">
                {link.label}
                {!link.href.startsWith("mailto:") ? <><ExternalLinkIcon className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span></> : null}
              </a>
            </li>
          ))}
        </ul>
      );
  }
}

function BiologyGlyph({ index }: { index: number }) {
  const colors = ["text-purple", "text-sky", "text-pink", "text-gold"];
  return (
    <span aria-hidden="true" className={cn("biology-detail-icon", colors[index % colors.length])}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        {index === 6 ? <><path d="M7 3h10v6a5 5 0 0 1-10 0V3ZM9 20h6M12 14v6M7 5H3v3a4 4 0 0 0 4 4M17 5h4v3a4 4 0 0 1-4 4" /></> :
          index % 6 === 0 ? <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 9h16M4 14h16M10 4v16M15 4v16" /></> :
          index % 6 === 1 ? <><path d="m6 6 12 2-2 11-11-2Z" /><circle cx="6" cy="6" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="16" cy="19" r="2" /><circle cx="5" cy="17" r="2" /><path d="m6 6 10 13M5 17 18 8" /></> :
          index % 6 === 2 ? <><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" /><circle cx="12" cy="12" r="2" /></> :
          index % 6 === 3 ? <>{[[7,7],[17,7],[7,17],[17,17]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />)}</> :
          index % 6 === 4 ? <><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6m-15-11 3 3 5-6" /></> :
          <><path d="M3 19h18M6 15V9M12 15V4M18 15v-4" /></>}
      </svg>
    </span>
  );
}

function BriefTable({ columns, rows }: { columns: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full table-fixed text-left text-sm leading-relaxed">
        <thead className="bg-surface-2 text-fg">
          <tr>{columns.map((column, index) => (
            <th key={column} scope="col" className={cn("px-3 py-3 align-top font-semibold", columns.length === 3 && index === 1 && "w-20 whitespace-nowrap", index === 0 && "w-[34%]")}>{column}</th>
          ))}</tr>
        </thead>
        <tbody className="divide-y divide-border text-fg-muted">
          {rows.map((row, index) => (
            <tr key={index} className="even:bg-surface/60">
              {row.map((cell, cellIndex) => cellIndex === 0 ? (
                <th key={cellIndex} scope="row" className="px-3 py-3 align-top font-medium text-fg">{cell}</th>
              ) : <td key={cellIndex} className="px-3 py-3 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
