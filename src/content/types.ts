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
  partner?: string;
  highlights?: string[];
  /** Content for the expanded track panel. Every field is optional; empty sections are hidden. */
  details?: TrackDetails;
}

export interface TrackLink {
  label: string;
  href: string;
}

/** A sponsor or organizer shown inside a track panel. Logo falls back to the name. */
export interface TrackOrganization {
  name: string;
  /** Use a `fallFestAssets` src so the GitHub Pages base path is applied. */
  logo?: string;
  url?: string;
}

export interface TrackOrganizer extends TrackOrganization {
  /** "About us" paragraphs supplied by the organizing group. */
  about?: string[];
}

/**
 * Expanded panel content. Add only details that are confirmed in writing. Until
 * `challenges` is set, the panel shows the shared "to be announced" notice instead.
 */
export interface TrackDetails {
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
  organizer?: TrackOrganizer;
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
