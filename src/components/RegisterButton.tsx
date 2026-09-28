import { ArrowRightIcon } from "@/components/ui/Icons";
import { event } from "@/content/event";
import { cn } from "@/lib/utils";

/**
 * The single sign-up control used everywhere on the site.
 *
 * Three stages, driven entirely by the two URLs in src/content/event.ts:
 *
 * 1. Registration open  → a single Register link.
 * 2. Interest form open → the "registration opens soon" status, followed by a
 *    Get notified link so people have somewhere to go after reading the status.
 * 3. Neither open       → the status on its own.
 *
 * Stage two deliberately keeps the status visible rather than replacing it. The Google
 * form is an interest form, not registration, and pairing the two makes that difference
 * legible instead of implying that submitting it secures a place.
 */
export function RegisterButton({
  size = "md",
  variant = "primary",
  className,
  /** Overrides the active link's label. Each stage names itself when this is omitted. */
  label,
  /**
   * Text of the status pill. Defaults to the shared event label so every control on
   * every route says the same thing; a caller only passes this to override one spot.
   */
  unavailableLabel = event.registrationOpensLabel,
  /**
   * Render the status alongside the interest-form link. The compact header opts out:
   * it sits beside the nav with no room for two pills, and the status is already
   * stated on the pages the header links to.
   */
  showStatus = true,
}: {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  label?: string;
  unavailableLabel?: string;
  showStatus?: boolean;
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

  const base = cn(
    // `whitespace-nowrap` keeps each pill's label on one line. The CTA rows wrap to a new
    // line instead, which reads better than breaking the status label in half.
    "group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200",
    sizes[size],
    className,
  );

  const status = (
    <span className={cn(base, "cursor-default border border-border bg-surface-2 text-fg-subtle")}>
      <span aria-hidden="true" className="inline-flex h-2 w-2 rounded-full bg-gold" />
      {unavailableLabel}
    </span>
  );

  const link = (href: string, text: string) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-gate="X"
      className={cn(base, variants[variant])}
    >
      {text}
      {/* The link leaves the site, which a sighted user infers from context but a screen reader user does not. */}
      <span className="sr-only"> (opens in a new tab)</span>
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );

  if (event.registrationUrl) {
    return link(event.registrationUrl, label ?? "Register");
  }

  if (!event.interestFormUrl) {
    return status;
  }

  const interest = link(event.interestFormUrl, label ?? "Get notified");

  if (!showStatus) {
    return interest;
  }

  return (
    // `contents` keeps both children as direct flex items of whatever row the page
    // already lays out, so the CTA cluster wraps and aligns exactly as it did before.
    <span className="contents">
      {status}
      {interest}
    </span>
  );
}
