/** Shared, presentation-agnostic types for the site content. */

/** How firm a public detail is. */
export type Status = "confirmed" | "planning" | "tentative" | "tba";

/** A delivery format is optional until it has been agreed. */
export type Format = "in-person" | "online" | "hybrid";

/** Who a track is open to: participants in the UAE, or anyone internationally. */
export type Reach = "national" | "international";

/** A difficulty level is optional until track prerequisites have been agreed. */
export type Level = "beginner" | "intermediate" | "advanced" | "all-levels";

/** Colour token that identifies a track on its card, drawer and the agenda calendar. */
export type TrackAccent = "sky" | "purple" | "orange" | "teal" | "pink" | "gold";

export interface Track {
  /** Stable internal anchor. Preserve this when a visible track name changes. */
  slug: string;
  title: string;
  /** Each track uses a different accent so the agenda calendar can tell them apart. */
  accent: TrackAccent;
  subtitle?: string;
  summary: string;
  description?: string;
  level?: Level;
  reach?: Reach;
  format?: Format;
  /** Optional approved wording without changing other tracks' format labels. */
  formatDisplayLabel?: string;
  teamSizeLabel?: string;
  participationLabel?: string;
  venueLabel?: string;
  deadlineLabel?: string;
  status: Status;
  /** Explicitly approved status chips. Omit until that track's labels are agreed. */
  statusLabels?: (string | TrackStatusLabel)[];
  /** Approved descriptive chips, shown on the card and published brief. */
  tags?: string[];
  /** Decorative artwork and host branding in the card/popup cover. */
  coverIcon?: string;
  coverLogo?: string;
  partner?: string;
  highlights?: string[];
  /**
   * Organizations hosting this track, picked from `trackHosts` in `tracks.ts`. Shown as
   * "Hosted by" labels on the card and panel, with logo and About Us in the panel.
   */
  hostedBy?: TrackHost[];
  /**
   * Decorative image behind the top of the card and panel header, supplied by the
   * track's host. Use a `fallFestAssets` src so the GitHub Pages base path is applied.
   */
  banner?: string;
  /** Content for the expanded track panel. Every field is optional; empty sections are hidden. */
  details?: TrackDetails;
}

export interface TrackStatusLabel {
  label: string;
  tone: "gold" | "sky" | "purple";
  icon?: "calendar" | "flag";
  /** Keep descriptive availability beside the card's category/format chips. */
  cardPlacement?: "metadata";
}

export interface TrackLink {
  label: string;
  href: string;
}

/** A sponsor or host shown inside a track panel. Logo falls back to the name. */
export interface TrackOrganization {
  name: string;
  /** Use a `fallFestAssets` src so the GitHub Pages base path is applied. */
  logo?: string;
  logoOnDark?: boolean;
  url?: string;
}

export interface TrackHost extends TrackOrganization {
  /** Approved contribution shown beside a partner's profile. */
  contribution?: string;
  /** Short name for the label chip, e.g. "ASBMB". Falls back to `name`. */
  label?: string;
  /** "About us" paragraphs supplied by the host. */
  about?: string[];
  /** The host's own public links (social, website), listed under its About Us. */
  links?: TrackLink[];
}

/** One named option inside a challenge theme group, e.g. "Make it audible". */
export interface TrackChallengeTheme {
  title: string;
  description: string;
}

/** A set of challenge themes, e.g. Moth Quantum's "No-code" and "Code" tiers. */
export interface TrackChallengeThemeGroup {
  title: string;
  themes: TrackChallengeTheme[];
}

/**
 * Expanded panel content. Add only details that are confirmed in writing. Until
 * `challenge` or `challengeThemes` is set, the panel shows the shared "to be announced"
 * notice instead.
 */
export interface TrackDetails {
  /** Optional compact popup introduction and approved deadline callout. */
  headerSummary?: string;
  deadline?: { at: string; label: string };
  /** Decorative overview artwork; it never supplies challenge rules. */
  overviewVisual?: TrackVisualKind;
  /** Profiles in Hosts, without adding partners to the track's Hosted by labels. */
  hostPartners?: TrackHost[];
  /** Published brief with one navigable panel visible at a time. */
  brief?: TrackBrief;
  /** Overview paragraphs. Falls back to the track summary when omitted. */
  description?: string[];
  /** Confirmed track dates and deadlines, one line each. Omit unknown dates. */
  dates?: string[];
  /** Only organizations that have agreed in writing to sponsor this track. */
  sponsors?: TrackOrganization[];
  /** The problem statement, as paragraphs. */
  challenge?: string[];
  /** Named challenge options participants choose from, grouped by tier. */
  challengeThemes?: TrackChallengeThemeGroup[];
  /** How submissions are evaluated, as published by the track organisers. */
  judging?: string[];
  /** What participants need to do. */
  tasks?: string[];
  submission?: {
    where?: string;
    how?: string[];
    links?: TrackLink[];
  };
  resources?: TrackLink[];
  /**
   * Resources that are confirmed but have no public link yet. Shown as a plain list,
   * followed by `resourcesNote`. Move an item into `resources` once its URL is shared.
   */
  resourceItems?: string[];
  resourcesNote?: string;
}

/** A resource stays unavailable until an approved URL and explicit release flag exist. */
export interface TrackReleaseLink {
  label: string;
  href: string | null;
  enabled: boolean;
  availability: string;
}

/** Date is an earliest-day guard; enabled confirms the organizer has opened the form. */
export interface TrackRegistration {
  href: string | null;
  enabled: boolean;
  opensOn: string;
  timeZone: string;
  label: string;
  beforeLabel: string;
  unavailableLabel: string;
  /** Closure overrides the URL, release flag and opening date. */
  closed?: boolean;
  closedLabel?: string;
  note?: string;
}

/** A submission form has independent release and closure controls and an exact deadline. */
export interface TrackSubmission {
  href: string | null;
  enabled: boolean;
  closed: boolean;
  deadline: { at: string; label: string };
  label: string;
  unavailableLabel: string;
  closedLabel: string;
}

export interface TrackBriefResource {
  title: string;
  description: string;
  type: string;
  source: "official" | "external";
  href: string;
  actionLabel: string;
}

export type TrackBriefBlock =
  | { type: "paragraph" | "heading" | "note"; text: string; presentation?: "spotlight" }
  | { type: "notice"; paragraphs: string[] }
  | { type: "list"; ordered?: boolean; presentation?: "cards" | "steps" | "compact-steps"; items: { title: string; text: string }[] }
  | { type: "table"; presentation?: "timeline"; columns: string[]; rows: string[][] }
  | { type: "visual"; src: string; motion?: "float" | "wave" }
  | { type: "circuit-motif" }
  | { type: "track-visual"; kind: TrackVisualKind }
  | { type: "releases"; presentation?: "cta"; columns: [string, string]; items: TrackReleaseLink[] }
  | { type: "registration"; registration: TrackRegistration }
  | { type: "submission-control"; submission: TrackSubmission }
  | { type: "comparison"; methods: { title: string; text: string }[]; evaluation: { title: string; text: string } }
  | { type: "resource-cards"; items: TrackBriefResource[]; sourceLabels: { official: string; external: string } }
  | { type: "facts"; columns?: 2 | 3; items: { label: string; value: string; icon: "location" | "headset" | "users" | "students" | "calendar" }[] }
  | { type: "links"; items: TrackLink[] };

export type TrackVisualKind = "circuit" | "qml" | "bloch" | "ctf" | "media";

export interface TrackBrief {
  navigationLabel: string;
  tags?: string[];
  highlights?: { value: string; label: string }[];
  panels: { id: string; title: string; blocks: TrackBriefBlock[]; showHosts?: boolean }[];
}

export interface Session {
  title: string;
  description: string;
  /** Omit rather than guessing an unconfirmed time or delivery format. */
  time?: string;
  format?: Format;
  status?: Status;
}

export interface Phase {
  slug: string;
  label: string;
  title: string;
  dateRange: string;
  summary: string;
  status: Status;
  sessions: Session[];
}

export interface Speaker {
  name: string;
  role: string;
  organization: string;
  photo?: string;
  bio?: string;
  status: Status;
}

export interface Partner {
  name: string;
  logo?: string;
  logoOnDark?: boolean;
  url?: string;
  kind: string;
  status: Status;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus?: string;
}

export interface ResourceLink {
  title: string;
  description: string;
  url: string;
  group: "qiskit" | "learn" | "qci";
}

export interface PastEvent {
  title: string;
  meta: string;
  description: string;
  image: string;
  alt: string;
}

export interface ResearchProjectLink {
  label: string;
  url: string;
}

export interface ResearchProject {
  name: string;
  description: string;
  badge?: string;
  links: ResearchProjectLink[];
}

export interface PartnerReason {
  title: string;
  description: string;
}
