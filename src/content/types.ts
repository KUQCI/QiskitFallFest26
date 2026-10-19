/** Shared, presentation-agnostic types for the site content. */

/** How firm a public detail is. */
export type Status = "confirmed" | "planning" | "tentative" | "tba";

/** A delivery format is optional until it has been agreed. */
export type Format = "in-person" | "online" | "hybrid";

/** Who a track is open to: participants in the UAE, or anyone internationally. */
export type Reach = "national" | "international";

/** A difficulty level is optional until track prerequisites have been agreed. */
export type Level = "beginner" | "intermediate" | "advanced" | "all-levels";

export interface Track {
  /** Stable internal anchor. Preserve this when a visible track name changes. */
  slug: string;
  title: string;
  summary: string;
  description?: string;
  level?: Level;
  reach?: Reach;
  format?: Format;
  status: Status;
  /** Optional published status text for a track with a released challenge brief. */
  statusLabel?: string;
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

export interface TrackLink {
  label: string;
  href: string;
}

/** A sponsor or host shown inside a track panel. Logo falls back to the name. */
export interface TrackOrganization {
  name: string;
  /** Use a `fallFestAssets` src so the GitHub Pages base path is applied. */
  logo?: string;
  url?: string;
}

export interface TrackHost extends TrackOrganization {
  /** Short name for the label chip, e.g. "ASBMB". Falls back to `name`. */
  label?: string;
  /** "About us" paragraphs supplied by the host. */
  about?: string[];
  /** The host's own public links (social, website), listed under its About Us. */
  links?: TrackLink[];
}

/**
 * Expanded panel content. Add only details that are confirmed in writing. Until
 * `challenges` is set, the panel shows the shared "to be announced" notice instead.
 */
export interface TrackDetails {
  /** Published brief with one navigable panel visible at a time. */
  brief?: TrackBrief;
  /** Overview paragraphs. Falls back to the track summary when omitted. */
  description?: string[];
  /** Only organizations that have agreed in writing to sponsor this track. */
  sponsors?: TrackOrganization[];
  challenges?: string[];
  /** What participants need to do. */
  tasks?: string[];
  submission?: {
    where?: string;
    how?: string[];
    links?: TrackLink[];
  };
  resources?: TrackLink[];
}

/** A resource stays unavailable until an approved URL and explicit release flag exist. */
export interface TrackReleaseLink {
  label: string;
  href: string | null;
  enabled: boolean;
  availability: string;
}

export type TrackBriefBlock =
  | { type: "paragraph" | "heading" | "note"; text: string }
  | { type: "notice"; paragraphs: string[] }
  | { type: "list"; ordered?: boolean; items: { title: string; text: string }[] }
  | { type: "table"; columns: string[]; rows: string[][] }
  | { type: "releases"; columns: [string, string]; items: TrackReleaseLink[] }
  | { type: "links"; items: TrackLink[] };

export interface TrackBrief {
  navigationLabel: string;
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
