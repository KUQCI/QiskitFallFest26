/** Canonical event details shared by every route. */
export const event = {
  name: "Qiskit Fall Fest 2026",
  host: "Quantum Computing Initiative",
  hostShort: "QCI",
  university: "Khalifa University",
  tagline: "19 October – 1 November 2026",
  intro:
    "Two weeks of quantum computing for learners at every level.",

  /** Confirmed opening session in Gulf Standard Time (UTC+04:00). */
  countdownTarget: "2026-10-19T18:00:00+04:00",
  openingDateLabel: "19 October 2026 · 6:00 PM",
  premiereUrl: "https://www.youtube.com/live/1h3hqHFWAvs?si=8703JbLk1sDLQpHr",
  premiereLabel: "Watch the premiere",
  dateLabel: "19 October – 1 November 2026",
  closingDateLabel: "31 October – 1 November 2026",

  venue: {
    name: "Khalifa University",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    detail: "Main Campus",
    mapUrl: "https://maps.google.com/?q=Khalifa+University+Abu+Dhabi",
  },

  /**
   * Label of every sign-up control while `registrationUrl` is null. It links to
   * `registrationTracksHref`, because each track runs its own registration. This lives
   * here rather than in `homeContent` because the CTA section renders on five routes,
   * so the label has to read the same everywhere.
   */
  registrationOpensLabel: "Registration varies by track",
  registrationTracksHref: "/tracks/",

  /** A single event-wide registration. Setting this takes over every CTA. */
  registrationUrl: null as string | null,
  registrationNote: "Each track has its own registration. Open a track for its registration details.",
  contactEmail: "quantum.club@ku.ac.ae",

  socials: {
    website: "https://qcinit.tech/",
    instagram: "https://www.instagram.com/ku.qci/?hl=en",
    linkedin: "https://www.linkedin.com/company/ku-qci/",
    github: "https://github.com/KUQCI",
    whatsapp: "https://chat.whatsapp.com/Cc4OqqKTKbnLaBDJuqCQkG",
  },

  organizations: {
    ibmQuantum: "https://www.ibm.com/quantum",
    khalifaUniversity: "https://www.ku.ac.ae",
    qci: "https://qcinit.tech/",
  },

  /** Honest, descriptive facts rather than attendance or regional-superlative claims. */
  stats: [
    { value: "Multiple", label: "Tracks", detail: "Foundations through applications" },
    { value: "2", label: "Weeks", detail: "Development period" },
    { value: "Hybrid", label: "Format", detail: "Varies by phase and track" },
  ],
} as const;

export const homeContent = {
  heroOwner: "Khalifa University\nQuantum Computing Initiative's",
  /** The full hero heading is rendered as text in the shared heading typeface. */
  heroTitle: { brand: "IBM", lead: "Qiskit", rest: "Fall Fest 2026" },
  heroHighlights: [
    "Challenge tracks, coding competitions and real projects",
    "Hands-on workshops, technical talks and mentorship",
  ],
  heroShowcase: {
    label: "Two-day closing showcase",
    dates: event.closingDateLabel,
    detail: "At Khalifa University, with the international quantum community joining online.",
  },
  about: {
    eyebrow: "What this is",
    title: "A Qiskit Fall Fest, Built Bigger",
    paragraphs: [
      "The Qiskit Fall Fest is IBM Quantum’s annual global event series, hosted by approved institutions across its ecosystem.",
      "QCI was selected to host this PLUS edition at Khalifa University, with expanded IBM Quantum support.",
      "It supports QCI’s goal of building a more connected quantum computing ecosystem across the UAE and beyond.",
    ],
    linkLabel: "More about QCI",
  },
  tracks: {
    eyebrow: "Tracks",
    title: "Choose where to explore",
    lede:
      "Find your challenge. Visit the Tracks page for full briefs, dates and registration details.",
    linkLabel: "View all tracks",
  },
  faq: {
    eyebrow: "Questions",
    title: "The ones people actually ask",
    linkLabel: "Read all questions",
  },
} as const;

const sharedCta = {
  heading: "You don’t need prior quantum experience to start",
  body:
    "Whether you’re discovering quantum computing for the first time or looking to explore a new application, the Fall Fest is designed to welcome a range of backgrounds and experience levels.",
} as const;

export const ctaCopy = {
  default: {
    eyebrow: "19 October – 1 November 2026 · Khalifa University",
    ...sharedCta,
    note: event.registrationNote,
  },
  opening: {
    eyebrow: "19 October 2026 · 6:00 PM · Khalifa University",
    ...sharedCta,
    note: event.registrationNote,
  },
} as const;

export const footerContent = {
  description:
    "Hosted by the Quantum Computing Initiative at Khalifa University as part of IBM Quantum’s annual global Qiskit Fall Fest event series.",
  copyright:
    "© 2026 Quantum Computing Initiative, Khalifa University. All rights reserved.",
  disclaimer:
    "Qiskit and IBM Quantum are trademarks of International Business Machines Corporation. This event is independently organized and hosted by the Quantum Computing Initiative at Khalifa University as part of the Qiskit Fall Fest event series.",
} as const;

export type EventConfig = typeof event;
