import { event } from "./event";
import { biologyProposalDeadline } from "./quantum-biology";
import { foundationsRegistration } from "./quantum-foundations";
import { qmlDeadline, qmlFinalPresentations } from "./quantum-machine-learning";
import { metaverseCapacityLabel, metaverseRegistration, metaverseTime } from "./quantum-metaverse";
import { cybersecurityLinks } from "./quantum-cybersecurity";
import { tracks } from "./tracks";
import { fallFestAssets } from "./assets";
import { adOmicsWorkshop, quantumComputingWorkshop } from "./workshops";
import type { TrackAccent } from "./types";

export interface WorkshopRegistration {
  href: string | null;
  enabled: boolean;
  closed: boolean;
}
export interface WorkshopBrand {
  name: string;
  logo: string;
}

export type AgendaKind = "registration" | "workshop" | "event" | "deadline";
export interface AgendaWorkshop {
  speakers?: { name: string; title?: string; organization?: string; profileUrl?: string }[];
  organizers?: string;
  topics?: string[];
  certificates?: boolean;
  branding?: WorkshopBrand[];
  registration?: WorkshopRegistration;
  resources?: { label: string; href: string; description?: string }[];
  /** Supply only a joining URL approved for public display, distinct from registration. */
  joiningLink?: { label: string; href: string };
  audience?: string;
  preparation?: string[];
}
export interface AgendaWorkshopLabels {
  speaker: string;
  speakers: string;
  organizers: string;
  topics: string;
  certificates: string;
}
export interface AgendaItem {
  id: string;
  date: string;
  kind: AgendaKind;
  title: string;
  context: string;
  description?: string;
  time?: string;
  venue?: string;
  href?: string;
  actionLabel?: string;
  external?: boolean;
  workshop?: AgendaWorkshop;
  /** Set for track milestones; event-wide items have none. */
  trackSlug?: string;
}

export const workshopDialogCopy = {
  label: "Workshop",
  openLabel: "View workshop details",
  closeLabel: "Close workshop details",
  detailsLabel: "Workshop details",
  aboutHeading: "About the workshop",
  topicsHeading: "Topics covered",
  audienceHeading: "Audience",
  preparationHeading: "Preparation",
  sessionHeading: "Session details",
  dateLabel: "Date",
  timeLabel: "Time",
  timezoneLabel: "Time zone",
  timezone: "UAE time (UTC+4)",
  venueLabel: "Platform / venue",
  unconfirmedLabel: "To be confirmed",
  registrationHeading: "Registration & resources",
  registerLabel: "Register for this workshop",
  pendingLabel: "Registration link coming soon",
  closedLabel: "Registration closed",
  resourcesHeading: "Resources",
  joiningHeading: "Joining information",
  relatedTrackLabel: "View related track",
} as const;
export type WorkshopDialogCopy = typeof workshopDialogCopy;

export const agendaPageContent = {
  eyebrow: event.dateLabel,
  title: "Agenda",
  lede: "Registration, workshops, challenge days and submission deadlines, laid out week by week. Each track has its own colour.",
  metadataDescription: "The Qiskit Fall Fest 2026 agenda: published registration dates, workshops, track challenges and submission deadlines from 19 October to 1 November.",
  timezoneNote: "Times are UAE time (UTC+4), except the Quantum in Media submission deadline, which uses Pacific Time.",
  programmeNote: "This agenda lists published milestones. Detailed session timings and the full daily programme will be added as confirmed.",
  filterLabel: "Filter agenda",
  timelineLabel: "Fall Fest week calendar, 19 October to 1 November 2026",
  weeksLabel: "Jump to week",
  legendLabel: "Track colours",
  festLabel: "Qiskit Fall Fest 2026",
  detailsLabel: "Selected date",
  detailsHint: "Select a block in the calendar to see its details.",
  scrollHint: "Scroll sideways to see every day.",
  resultsLabel: "milestones",
  categories: [
    { id: "all", label: "All dates" },
    { id: "registration", label: "Registration" },
    { id: "workshop", label: "Workshops" },
    { id: "event", label: "Events & challenges" },
    { id: "deadline", label: "Submission deadlines" },
  ],
  kindLabels: { registration: "Registration", workshop: "Workshop", event: "Event / challenge", deadline: "Submission deadline" },
  workshopLabels: {
    speaker: "Speaker", speakers: "Speakers", organizers: "Organized by",
    topics: "Workshop topics", certificates: "Certificates provided",
  },
  moreTitle: "Explore your track",
  pendingTitle: "More dates to come",
  pendingDescription: "Dates for these tracks have not yet been published. Check the track for its latest details.",
  pendingActionLabel: "Track details",
  moreDescription: "Each track has its own registration, format and participation requirements. Open the track for its complete challenge brief and latest details.",
  tracksLabel: "View all tracks",
  formatLabel: "How the Fest works",
  legacyLabel: "View the agenda",
} as const;

function trackItem(slug: string, item: Omit<AgendaItem, "context" | "href" | "actionLabel">): AgendaItem {
  const track = tracks.find(candidate => candidate.slug === slug);
  if (!track) throw new Error(`Unknown agenda track: ${slug}`);
  return { ...item, context: track.title, href: `/tracks/#${slug}`, actionLabel: "Track details", trackSlug: slug };
}

/** Published milestones only; unknown session hours and running orders stay omitted. */
export const agendaItems: AgendaItem[] = [
  {
    id: "premiere", date: "2026-10-19", kind: "event", title: "Opening Day Premiere", context: event.name,
    description: "Introduction to the Fall Fest, its challenge tracks and the two weeks ahead.",
    time: "6:00 PM · UAE time", venue: "Khalifa University · also online",
    href: event.premiereUrl, actionLabel: event.premiereLabel, external: true,
  },
  trackItem("chemistry-drug-discovery", {
    id: "biology-registration", date: "2026-10-20", kind: "registration", title: "Registration opens",
    description: "Submit your one-page proposal through the initial-submission form to register for Quantum Biology.",
  }),
  trackItem("quantum-cybersecurity", {
    id: "cybersecurity-registration", date: cybersecurityLinks.registration.opensOn, kind: "registration", title: "Registration opens",
    description: "Enter individually or in a team of up to four. Only the team lead submits the form for a team.",
  }),
  trackItem("peaked-circuits", {
    id: "metaverse-registration", date: metaverseRegistration.opensOn, kind: "registration", title: "Individual registration opens",
    description: `${metaverseCapacityLabel}. Slots are allocated first come, first served by registration submission time, with confirmation by email.`,
  }),
  trackItem("first-qubit", {
    id: "foundations-registration", date: foundationsRegistration.opensOn, kind: "registration", title: "Individual registration opens",
    description: "Registration is open for high school students. Limited spots; your place is confirmed by email.",
  }),
  trackItem("chemistry-drug-discovery", {
    id: "biology-proposal", date: biologyProposalDeadline.at.slice(0, 10), kind: "deadline", title: "Initial proposals due",
    time: "11:59 PM · UAE time (GMT+4)",
    description: "Submit one PDF page at registration. Semifinalists will be selected to continue.",
  }),
  {
    id: "quantum-cryptography-workshop", date: "2026-10-24", kind: "workshop",
    title: "Cryptography in the Quantum Era", context: event.name,
    description: "An introduction to classical and quantum cryptography.",
    time: "8–9 PM · UAE time (GMT+4)", venue: "Online · Microsoft Teams",
    workshop: {
      registration: { href: "https://forms.gle/cSh5o9JDtdcB7oLv8", enabled: true, closed: false },
      organizers: "Quantum Computing Initiative × Cybersecurity Club",
      branding: [
        { name: "Quantum Computing Initiative", logo: fallFestAssets.logos.qciLogoFit.src },
        { name: "Khalifa University Cybersecurity Club", logo: fallFestAssets.logos.cybersecurityClub.src },
      ],
      topics: ["Classical ciphers & RSA", "The quantum threat", "Quantum key distribution", "Post-quantum cryptography"],
      certificates: true,
    },
  },
  trackItem("chemistry-drug-discovery", {
    id: "biology-workshops", date: adOmicsWorkshop.date, kind: "workshop", title: adOmicsWorkshop.title,
    time: adOmicsWorkshop.time,
    description: "A biology and data workshop with AD-OMICS. Access details are to be confirmed.",
    workshop: {
      registration: { href: null, enabled: false, closed: false },
      organizers: "AD-OMICS",
      branding: [{ name: "AD-OMICS", logo: fallFestAssets.logos.adOmics.src }],
    },
  }),
  {
    id: "quantum-computing-ml-workshop", date: quantumComputingWorkshop.date, kind: "workshop",
    title: quantumComputingWorkshop.title, context: event.name,
    description: quantumComputingWorkshop.description,
    time: quantumComputingWorkshop.time, venue: quantumComputingWorkshop.venue,
    workshop: {
      registration: { href: "https://forms.gle/m3VbCpWPVt8aMaFV8", enabled: true, closed: false },
      organizers: quantumComputingWorkshop.organizer,
      branding: [{ name: quantumComputingWorkshop.organizer, logo: fallFestAssets.logos.qciLogoFit.src }],
      topics: quantumComputingWorkshop.topics,
      certificates: true,
    },
  },
  trackItem("chemistry-drug-discovery", {
    id: "biology-submission", date: "2026-10-28", kind: "deadline", title: "Final submissions due",
    description: "Finalist selection follows the final-submission stage. Submission platform and format details are to be confirmed.",
  }),
  trackItem("quantum-machine-learning", {
    id: "qml-submission", date: qmlDeadline.at.slice(0, 10), kind: "deadline", title: "Submission deadline",
    description: "Prepare a functional codebase and comparative evaluation of the classical and quantum approaches. The submission form will be added soon.",
    time: qmlDeadline.label,
  }),
  trackItem("peaked-circuits", {
    id: "metaverse-challenge", date: "2026-10-30", kind: "event", title: "In-person VR challenge",
    time: metaverseTime,
    description: "Attend your assigned session. VR headsets are provided; participants are arranged into sessions of 12.",
    venue: "Khalifa University, MetaHub Lab",
  }),
  trackItem("quantum-cybersecurity", {
    id: "cybersecurity-ctf", date: "2026-10-30", kind: "event", title: "Online CTF competition",
    description: "A single-day quantum machine learning model-extraction competition. Timings and platform access will be shared by email.", venue: "Online",
  }),
  trackItem("quantum-media", {
    id: "media-submission", date: "2026-10-30", kind: "deadline", title: "Submission deadline",
    description: "Submission details will be shared soon. This deadline uses Pacific Time.", time: "11:59 PM · Pacific Time",
  }),
  trackItem("first-qubit", {
    id: "foundations-challenge", date: "2026-10-31", kind: "event", title: "In-person circuit challenge",
    description: "An individual challenge for high school students. Event timings, check-in details and preparation instructions will be shared by email.", venue: "Khalifa University",
  }),
  trackItem("quantum-machine-learning", {
    id: "qml-presentations", date: qmlFinalPresentations.date, kind: "event", title: "Final presentations",
    description: qmlFinalPresentations.description,
  }),
  trackItem("chemistry-drug-discovery", {
    id: "biology-presentations", date: "2026-11-01", kind: "event", title: "Finalist presentations",
    description: "Shortlisted teams present their work to a judging panel on campus. Presentation timings and materials are to be confirmed.", venue: "Khalifa University",
  }),
];

export const agendaPendingTracks = tracks.filter(track => !agendaItems.some(item => item.href === `/tracks/#${track.slug}`)).map(track => ({ title: track.title, href: `/tracks/#${track.slug}` }));

/* ---------- Week calendar ---------- */

export type AgendaAccent = TrackAccent | "lavender";

export interface AgendaCalendarDay {
  date: string;
  weekday: string;
  day: string;
  month: string;
  weekStart: boolean;
  weekend: boolean;
}

/** A horizontal bar on the calendar: a track's first-to-last milestone, or the whole Fest. */
export interface AgendaSpan {
  id: string;
  label: string;
  accent: AgendaAccent;
  href?: string;
  /** Column indexes into `agendaCalendar.days`, inclusive. */
  start: number;
  end: number;
  items: AgendaItem[];
}

const DAY_MS = 86_400_000;
const calendarStart = "2026-10-19";
const calendarEnd = "2026-11-01";
const dayIndex = (date: string) => Math.round((Date.parse(`${date}T12:00:00Z`) - Date.parse(`${calendarStart}T12:00:00Z`)) / DAY_MS);
const dubai = (options: Intl.DateTimeFormatOptions, date: string) =>
  new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "Asia/Dubai" }).format(new Date(`${date}T12:00:00+04:00`));

const calendarDays: AgendaCalendarDay[] = Array.from({ length: dayIndex(calendarEnd) + 1 }, (_, index) => {
  const date = new Date(Date.parse(`${calendarStart}T12:00:00Z`) + index * DAY_MS).toISOString().slice(0, 10);
  const weekday = dubai({ weekday: "short" }, date);
  return {
    date, weekday,
    day: String(Number(date.slice(8))),
    month: dubai({ month: "short" }, date),
    weekStart: weekday === "Mon",
    weekend: weekday === "Sat" || weekday === "Sun",
  };
});

const trackSpans: AgendaSpan[] = tracks.flatMap(track => {
  const items = agendaItems.filter(item => item.trackSlug === track.slug);
  if (!items.length) return [];
  const indexes = items.map(item => dayIndex(item.date));
  return [{ id: track.slug, label: track.title, accent: track.accent, href: `/tracks/#${track.slug}`, start: Math.min(...indexes), end: Math.max(...indexes), items }];
});

const festSpan: AgendaSpan = {
  id: "fall-fest", label: agendaPageContent.festLabel, accent: "lavender",
  start: 0, end: calendarDays.length - 1,
  items: agendaItems.filter(item => !item.trackSlug),
};

/**
 * Pack spans into lanes, first fit by start date, so bars never overlap: spans whose
 * dates overlap sit in separate lanes stacked on top of each other, as all-day events
 * do in a calendar app. The event-wide span always takes the first lane.
 */
function packLanes(spans: AgendaSpan[]) {
  const lanes: AgendaSpan[][] = [];
  for (const span of [...spans].sort((a, b) => a.start - b.start || b.end - a.end)) {
    const lane = lanes.find(candidate => candidate.every(other => span.start > other.end || span.end < other.start));
    if (lane) lane.push(span);
    else lanes.push([span]);
  }
  return lanes;
}

export const agendaCalendar = {
  days: calendarDays,
  weeks: [0, 7].map(start => ({
    start,
    label: `${calendarDays[start].day} ${calendarDays[start].month} – ${calendarDays[start + 6].day} ${calendarDays[start + 6].month}`,
  })),
  lanes: [[festSpan], ...packLanes(trackSpans)],
};
export type AgendaCalendar = typeof agendaCalendar;
