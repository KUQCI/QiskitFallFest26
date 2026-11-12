import { event } from "./event";
import { biologyProposalDeadline } from "./quantum-biology";
import { foundationsRegistration } from "./quantum-foundations";
import { qmlDeadline, qmlFinalPresentations } from "./quantum-machine-learning";
import { metaverseRegistration, metaverseTime } from "./quantum-metaverse";
import { cybersecurityLinks } from "./quantum-cybersecurity";
import { tracks } from "./tracks";
import { fallFestAssets } from "./assets";
import { adOmicsWorkshop, quantumComputingWorkshop } from "./workshops";
import { workshopResults } from "./results";
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
  attendance?: string;
}

/** Copy for the details dialog every agenda block opens; workshops use the extra sections. */
export const agendaDialogCopy = {
  closeLabel: "Close details",
  detailsLabel: "Agenda details",
  aboutHeading: "About the workshop",
  overviewHeading: "Overview",
  whenHeading: "When & where",
  nextHeading: "Explore the recap",
  topicsHeading: "Topics covered",
  audienceHeading: "Audience",
  preparationHeading: "Preparation",
  sessionHeading: "Session details",
  dateLabel: "Date",
  timeLabel: "Time",
  timezoneLabel: "Time zone",
  timezone: "UAE time (UTC+4)",
  venueLabel: "Platform / venue",
  unconfirmedLabel: "Not recorded",
  registrationHeading: "Registration & resources",
  registerLabel: "Register for this workshop",
  pendingLabel: "Registration closed",
  closedLabel: "Registration closed",
  resourcesHeading: "Resources",
  joiningHeading: "Joining information",
  relatedTrackLabel: "View related track",
} as const;
export type AgendaDialogCopy = typeof agendaDialogCopy;

export const agendaPageContent = {
  eyebrow: event.dateLabel,
  title: "Agenda",
  lede: "The completed programme: workshops, speaker sessions, challenge days and finals, laid out week by week. Each track has its own colour.",
  metadataDescription: "The Qiskit Fall Fest 2026 agenda: published registration dates, workshops, track challenges and submission deadlines from 19 October to 7 November.",
  timezoneNote: "Times are UAE time (UTC+4), except the Quantum in Media submission deadline, which uses Pacific Time.",
  programmeNote: "The Fall Fest concluded on 7 November 2026. Select a milestone for its recorded details and results.",
  filterLabel: "Filter agenda",
  timelineLabel: "Fall Fest week calendar, 19 October to 8 November 2026",
  weeksLabel: "Jump to week",
  legendLabel: "Track colours",
  festLabel: "Qiskit Fall Fest 2026",
  selectHint: "Select a block to see its details.",
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
  moreTitle: "Explore the track results",
  pendingTitle: "More dates to come",
  pendingDescription: "Dates for these tracks have not yet been published. Check the track for its latest details.",
  pendingActionLabel: "Track details",
  moreDescription: "All six tracks have finished. Explore their results and archived challenge briefs.",
  tracksLabel: "View all tracks",
  formatLabel: "How the Fest unfolded",
  legacyLabel: "View the agenda",
} as const;

function trackItem(slug: string, item: Omit<AgendaItem, "context" | "href" | "actionLabel">): AgendaItem {
  const track = tracks.find(candidate => candidate.slug === slug);
  if (!track) throw new Error(`Unknown agenda track: ${slug}`);
  return { ...item, context: track.title, href: `/tracks/#${slug}`, actionLabel: "Track details", trackSlug: slug };
}

/** Published milestones only; unknown session hours and running orders stay omitted. */
const agendaMilestones: AgendaItem[] = [
  {
    id: "premiere", date: "2026-10-19", kind: "event", title: "Opening Day Premiere", context: event.name,
    description: "The premiere introduced the Fall Fest and its six tracks.",
    time: "6:00 PM · UAE time", venue: "Khalifa University · also online",
    href: event.premiereUrl, actionLabel: event.premiereLabel, external: true,
  },
  trackItem("chemistry-drug-discovery", {
    id: "biology-registration", date: "2026-10-20", kind: "registration", title: "Registration opened",
    description: "Teams registered by submitting an initial one-page proposal. The track received 21 proposals and involved 70 participants.",
  }),
  trackItem("quantum-cybersecurity", {
    id: "cybersecurity-registration", date: cybersecurityLinks.registration.opensOn, kind: "registration", title: "Registration opened",
    description: "Registration allowed individual entrants and teams of up to four; only the lead registered for a team.",
  }),
  trackItem("peaked-circuits", {
    id: "metaverse-registration", date: metaverseRegistration.opensOn, kind: "registration", title: "Individual registration opened",
    description: "Registration was individual. Five contestants took part at the MetaHub Lab.",
  }),
  trackItem("first-qubit", {
    id: "foundations-registration", date: foundationsRegistration.opensOn, kind: "registration", title: "Individual registration opened",
    description: "234 high school students registered; 109 students from 12 schools competed, and 3 winners were chosen.",
  }),
  trackItem("chemistry-drug-discovery", {
    id: "biology-proposal", date: biologyProposalDeadline.at.slice(0, 10), kind: "deadline", title: "Initial proposals due",
    time: "11:59 PM · UAE time (GMT+4)",
    description: "The initial proposal stage closed with 21 team proposals and 70 participants.",
  }),
  {
    id: "quantum-cryptography-workshop", date: "2026-10-24", kind: "workshop",
    title: "Cryptography in the Quantum Era", context: event.name,
    description: "An introduction to classical and quantum cryptography.",
    time: "8–9 PM · UAE time (GMT+4)", venue: "Online · Microsoft Teams",
    workshop: {
      registration: { href: "https://forms.gle/cSh5o9JDtdcB7oLv8", enabled: true, closed: true },
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
    description: "A biology and data workshop with AD-OMICS.",
    workshop: {
      registration: { href: null, enabled: false, closed: true },
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
      registration: { href: "https://forms.gle/m3VbCpWPVt8aMaFV8", enabled: true, closed: true },
      organizers: quantumComputingWorkshop.organizer,
      branding: [{ name: quantumComputingWorkshop.organizer, logo: fallFestAssets.logos.qciLogoFit.src }],
      topics: quantumComputingWorkshop.topics,
      certificates: true,
    },
  },
  trackItem("chemistry-drug-discovery", {
    id: "biology-submission", date: "2026-10-28", kind: "deadline", title: "Final submissions due",
    description: "The final submission stage preceded presentations by 6 finalist teams on 1 November.",
  }),
  trackItem("quantum-machine-learning", {
    id: "qml-submission", date: qmlDeadline.at.slice(0, 10), kind: "deadline", title: "Submission deadline",
    description: "The track received 21 projects from 31 participants, comparing classical and quantum approaches.",
    time: qmlDeadline.label,
  }),
  {
    id: "quantum-circuit-breakers-workshop", date: "2026-10-29", kind: "workshop",
    title: "Quantum Circuit Breakers", context: event.name,
    time: "8–9:30 PM · UAE time (GMT+4)",
    description: "A quantum circuits workshop.",
    workshop: {
      registration: { href: null, enabled: false, closed: true },
    },
  },
  trackItem("peaked-circuits", {
    id: "metaverse-challenge", date: "2026-10-30", kind: "event", title: "In-person VR challenge",
    time: metaverseTime,
    description: "Five contestants explored quantum gates and the Bloch sphere using VR headsets.",
    venue: "Khalifa University, MetaHub Lab",
  }),
  trackItem("quantum-cybersecurity", {
    id: "cybersecurity-ctf", date: "2026-11-07", kind: "event", title: "Online CTF competition",
    description: "178 hackers from 45 institutions in 8 countries tackled 26 challenges across 5 categories and captured 1,630 flags.", venue: "Online",
  }),
  trackItem("quantum-media", {
    id: "media-submission", date: "2026-11-07", kind: "deadline", title: "Submission deadline",
    description: "Quantum in Media received 4 submissions. The recorded deadline used Pacific Time.", time: "11:59 PM · Pacific Time",
  }),
  {
    id: "ibm-quantum-speaker-session", date: "2026-10-31", kind: "event",
    title: "Introduction to Quantum Computing", context: event.name,
    time: "12:00–12:30 PM · UAE time (GMT+4)", venue: "Online",
    description: "Speaker session with Dr. Ahmed Al Qatatsheh, IBM Quantum, attended by the High School Track (~110 students).",
  },
  trackItem("first-qubit", {
    id: "foundations-challenge", date: "2026-10-31", kind: "event", title: "In-person circuit challenge",
    description: "109 high school students from 12 schools competed individually in a live quantum circuit competition using custom learning platforms. Three winners were chosen.", venue: "Khalifa University",
  }),
  trackItem("quantum-machine-learning", {
    id: "qml-presentations", date: qmlFinalPresentations.date, kind: "event", title: "Final presentations",
    description: qmlFinalPresentations.description,
  }),
  trackItem("chemistry-drug-discovery", {
    id: "biology-presentations", date: "2026-11-01", kind: "event", title: "Finalist presentations",
    description: "Six finalist teams presented at Khalifa University. There were 3 winning teams.", venue: "Khalifa University",
  }),
];

export const agendaItems: AgendaItem[] = agendaMilestones.map(item => ({ ...item, attendance: workshopResults.find(result => result.id === item.id)?.attendance }));

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
  endsAt?: string;
  /** Column indexes into `agendaCalendar.days`, inclusive. */
  start: number;
  end: number;
  items: AgendaItem[];
}

const DAY_MS = 86_400_000;
const calendarStart = "2026-10-19";
const calendarEnd = "2026-11-08";
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
  return [{ id: track.slug, label: track.title, accent: track.accent, href: `/tracks/#${track.slug}`, endsAt: track.endsAt, start: Math.min(...indexes), end: Math.max(...indexes), items }];
});

const festSpan: AgendaSpan = {
  id: "fall-fest", label: agendaPageContent.festLabel, accent: "lavender",
  start: 0, end: Math.max(...agendaItems.map(item => dayIndex(item.date))),
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
  weeks: [0, 7, 14].map(start => ({
    start,
    label: `${calendarDays[start].day} ${calendarDays[start].month} – ${calendarDays[start + 6].day} ${calendarDays[start + 6].month}`,
  })),
  lanes: [[festSpan], ...packLanes(trackSpans)],
};
export type AgendaCalendar = typeof agendaCalendar;
