import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/Icons";
import { event } from "@/content/event";
import { cn } from "@/lib/utils";

/**
 * The single sign-up control used everywhere on the site.
 *
 * Two stages, driven by `src/content/event.ts`:
 *
 * 1. Registration open → a single external Register link.
 * 2. Otherwise         → the "registration varies by track" label, linking to the
 *    tracks page, where each track carries its own registration.
 */
export function RegisterButton({
  size = "md",
  variant = "primary",
  className,
  /** Overrides the link's label. Each stage names itself when this is omitted. */
  label,
}: {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  label?: string;
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm sm:text-base",
    lg: "px-7 py-3.5 text-base sm:text-lg",
  };

  const variants = {
    primary: "glow-cta bg-gold text-on-gold hover:bg-gold-strong",
    outline: "border border-border-strong bg-transparent text-fg hover:border-gold hover:text-gold",
  };

  const classes = cn(
    // `whitespace-nowrap` keeps each pill's label on one line. The CTA rows wrap to a new
    // line instead, which reads better than breaking the label in half.
    "group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200",
    sizes[size],
    variants[variant],
    className,
  );
  const arrow = <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />;

  if (event.registrationUrl) {
    return (
      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className={classes}>
        {label ?? "Register"}
        {/* The link leaves the site, which a sighted user infers from context but a screen reader user does not. */}
        <span className="sr-only"> (opens in a new tab)</span>
        {arrow}
      </a>
    );
  }

  return (
    <Link href={event.registrationTracksHref} className={classes}>
      {label ?? event.registrationOpensLabel}
      {arrow}
    </Link>
  );
}
