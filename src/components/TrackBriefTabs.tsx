"use client";

import { useEffect, useId, useRef, useState } from "react";

import { ExternalLinkIcon } from "@/components/ui/Icons";
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
      return <h4 className="pt-3 text-lg font-semibold text-fg">{block.text}</h4>;
    case "paragraph":
      return <p className="text-base leading-relaxed text-fg-muted">{block.text}</p>;
    case "note":
      return <p className="border-l-2 border-pink/60 pl-4 text-sm leading-relaxed text-fg-muted">{block.text}</p>;
    case "notice":
      return (
        <div className="space-y-2 rounded-xl border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-fg">
          {block.paragraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={cn("space-y-5 pl-5 text-base leading-relaxed text-fg-muted marker:text-pink", block.ordered ? "list-decimal" : "list-disc")}>
          {block.items.map((item) => (
            <li key={item.title}>
              <strong className="font-semibold text-fg">{item.title}</strong>{" "}{item.text}
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return <BriefTable columns={block.columns} rows={block.rows} />;
    case "releases":
      return (
        <BriefTable columns={block.columns} rows={block.items.map((item) => [
          item.label,
          item.enabled && item.href && /^https?:\/\//i.test(item.href) ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold underline underline-offset-4">
              {item.label}<ExternalLinkIcon className="h-4 w-4 shrink-0" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : <span key={item.label} className="font-medium text-fg-subtle">{item.availability}</span>,
        ])} />
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
