import { event } from "./event";
import { foundationsRegistration } from "./quantum-foundations";
import { qmlDeadline, qmlFinalPresentations } from "./quantum-machine-learning";
import { metaverseCapacityLabel, metaverseRegistration, metaverseTime } from "./quantum-metaverse";
import { cybersecurityLinks } from "./quantum-cybersecurity";
import { tracks } from "./tracks";
import { fallFestAssets } from "./assets";

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
}
export interface AgendaDay { date: string; day: string; month: string; items: AgendaItem[] }

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
  lede: "Registration, workshops, challenge days and submission deadlines — find the dates that matter to your track.",
  metadataDescription: "The Qiskit Fall Fest 2026 agenda: published registration dates, workshops, track challenges and submission deadlines from 19 October to 1 November.",
  timezoneNote: "Times are UAE time (UTC+4), except the Quantum in Media submission deadline, which uses Pacific Time.",
  programmeNote: "This agenda lists published milestones. Detailed session timings and the full daily programme will be added as confirmed.",
  filterLabel: "Filter agenda",
  timelineLabel: "Fall Fest milestones, 2026",
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
  return { ...item, context: track.title, href: `/tracks/#${slug}`, actionLabel: "Track details" };
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
    id: "biology-proposal", date: "2026-10-24", kind: "deadline", title: "Initial proposals due",
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
    id: "biology-workshops", date: "2026-10-26", kind: "workshop", title: "Biology and quantum computing workshops",
    description: "AD-OMICS and quantum computing workshops. Access details and session timings are to be confirmed.",
    workshop: {
      registration: { href: null, enabled: false, closed: false },
      branding: [{ name: "AD-OMICS", logo: fallFestAssets.logos.adOmics.src }],
    },
  }),
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

export const agendaDays: AgendaDay[] = [...new Set(agendaItems.map(item => item.date))].sort().map(date => ({
  date, day: String(Number(date.slice(8))),
  month: new Intl.DateTimeFormat("en-GB", { month: "long", timeZone: "Asia/Dubai" }).format(new Date(`${date}T12:00:00+04:00`)),
  items: agendaItems.filter(item => item.date === date),
}));

export const agendaPendingTracks = tracks.filter(track => !agendaItems.some(item => item.href === `/tracks/#${track.slug}`)).map(track => ({ title: track.title, href: `/tracks/#${track.slug}` }));
