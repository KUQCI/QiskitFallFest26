/** Canonical event details shared by every route. */
export const event = {
  name: "Qiskit Fall Fest 2026",
  host: "Quantum Computing Initiative",
  hostShort: "QCI",
  university: "Khalifa University",
  tagline: "19 October – 1 November 2026",
  intro:
    "Two weeks of quantum computing. Built with IBM Quantum, this Qiskit Fall Fest is open to learners at every level. Participants will take on challenge tracks and coding competitions, join hands-on workshops and technical talks, connect with mentors, and build real projects. The Fall Fest begins on 19 October and ends on 1 November, culminating in a two-day closing showcase on 31 October and 1 November at Khalifa University, with the wider international quantum community joining online.",

  /** Confirmed opening session in Gulf Standard Time (UTC+04:00). */
  countdownTarget: "2026-10-19T18:00:00+04:00",
  openingDateLabel: "19 October 2026 · 6:00 PM",
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
   * Stage one: the live Google form people fill in before registration opens.
   *
   * The field keeps the name of the artifact it points at — the form is titled
   * "Qiskit Fall Fest '26 - Interest Form" on Google's side. The public CTA says
   * "Get notified" instead, because that is the reason most people will click it.
   * The note below carries the honest part: it is a short form, not a mail signup,
   * so nobody arrives expecting a single email box. It is not registration, and the
   * public copy must not describe it as registration.
   */
  interestFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScpoVvWppEMD47LRmtDzaPRb7f9Hq_MVnWkmYdp59OeAJvlZA/viewform" as
      | string
      | null,
  interestFormNote:
    "Fill in the short form to be notified the moment registration opens. It also asks which tracks interest you, so the programme can be built around the answers.",

  /**
   * Shown on every sign-up control while `registrationUrl` is null. Confirmed date.
   * This lives here rather than in `homeContent` because the CTA section renders on
   * five routes, so the status has to read the same everywhere.
   */
  registrationOpensLabel: "Registration Opens October 10th",

  /** Stage two: real registration. Setting this takes over every CTA from the interest form. */
  registrationUrl: null as string | null,
  registrationNote: "Registration opens 10th October. Track details will be announced here first.",
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
  about: {
    eyebrow: "What this is",
    title: "A Qiskit Fall Fest, Built Bigger",
    paragraphs: [
      "The Qiskit Fall Fest is IBM Quantum’s annual global event series, with each event hosted by an approved institution as part of the wider IBM Quantum ecosystem.",
      "At Khalifa University, QCI has been selected to host a PLUS Qiskit Fall Fest, featuring expanded IBM Quantum support. Over two weeks, participants will take on challenge tracks, workshops, technical talks, mentorship, and project work, culminating in closing showcases.",
      "The event supports QCI’s broader goal of helping build a more connected quantum computing ecosystem across the UAE and beyond.",
    ],
    linkLabel: "More about QCI",
  },
  tracks: {
    eyebrow: "Tracks",
    title: "Choose where to explore",
    lede:
      "Whether you’re new to quantum computing or want to explore specialized applications, there’s a track for you. Track details are currently in development, with more information coming soon.",
    linkLabel: "All tracks",
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
