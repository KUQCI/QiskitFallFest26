import { ArrowRightIcon } from "@/components/ui/Icons";
import { event } from "@/content/event";
import { cn } from "@/lib/utils";

/** Shared premiere recording link for the opening-session panels. */
export function PremiereLink({ className }: { className?: string }) {
  return (
    <a
      href={event.premiereUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/20", className)}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M8 5v14l11-7Z" /></svg>
      {event.premiereLabel}
      <ArrowRightIcon className="h-4 w-4" />
    </a>
  );
}
