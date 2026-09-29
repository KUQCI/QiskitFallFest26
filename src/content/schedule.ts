import type { Phase } from "./types";

export const formatSectionCopy = {
  compact: {
    eyebrow: "How it works",
    title: "Three phases, two weeks of building",
    lede:
      "The Fall Fest begins with an opening session, followed by two weeks of development and presentation, and concludes with closing showcases on 31 October and 1 November where participants present their work and winners are announced.",
  },
  detailed: {
    eyebrow: "How it works",
    title: "Three phases, from kickoff to showcase",
    lede:
      "The Fall Fest begins with an opening session, followed by two weeks of development and presentation, and concludes with closing showcases on 31 October and 1 November where participants present their work and winners are announced.",
  },
} as const;

export const schedulePageContent = {
  eyebrow: "How it works",
  title: "What happens, and when",
  lede:
    "The Fall Fest runs from 19 October to 1 November across three phases: an opening premiere, a two-week development period, and closing showcases.",
  countdownLabel: "Fall Fest begins",
  metadataDescription:
    "How Qiskit Fall Fest 2026 works: an opening premiere on 19 October, a two-week development period, and closing showcases on 31 October and 1 November.",
} as const;

export const phases: Phase[] = [
  {
    slug: "opening",
    label: "Phase 01",
    title: "Opening Day Premiere",
    dateRange: "19 October 2026 · 6:00 PM",
    summary:
      "A hybrid kickoff session at Khalifa University, also available online internationally. Participants will be introduced to the Fall Fest, the challenge tracks, and what to expect during the two weeks ahead.",
    status: "confirmed",
    sessions: [
      {
        title: "Welcome & Fall Fest Briefing",
        description:
          "An introduction to the Qiskit Fall Fest, the event structure, and the two-week development period.",
        format: "hybrid",
        status: "confirmed",
      },
      {
        title: "Track Introductions",
        description:
          "An overview of the different challenge tracks and the areas participants will be able to explore.",
        format: "hybrid",
        status: "confirmed",
      },
    ],
  },
  {
    slug: "hacking",
    label: "Phase 02",
    title: "Development Period",
    dateRange: "From Opening Day to the closing showcase",
    summary:
      "Participants work on their track challenges over the development period, with workshops, technical sessions, mentorship, and other guidance from organizers and track partners. Some tracks may include intermediate submissions or shortlisting ahead of the closing showcase.",
    status: "confirmed",
    sessions: [
      {
        title: "Challenge Work",
        description:
          "Participants develop their projects and work toward the requirements of their chosen track.",
        status: "confirmed",
      },
      {
        title: "Workshops & Guidance",
        description:
          "Tracks may include workshops, technical sessions, mentorship, and other support throughout the development period.",
        status: "confirmed",
      },
      {
        title: "Intermediate Submissions",
        description:
          "Some tracks may include an intermediate submission or shortlisting stage before the closing showcase.",
        status: "confirmed",
      },
    ],
  },
  {
    slug: "closing",
    label: "Phase 03",
    title: "Closing Showcase",
    dateRange: "31 October – 1 November 2026",
    summary:
      "The development period concludes with project showcases, coding competitions, industry showcase and networking, and final track activities. Participants present their work, compete in challenges, and come together for the announcement of track winners.",
    status: "confirmed",
    sessions: [
      {
        title: "Project Showcases",
        description:
          "Participants present and demo their completed projects in the format appropriate to their track.",
        status: "confirmed",
      },
      {
        title: "Coding Competitions",
        description:
          "Participants put their skills to the test through live coding challenges and competitions.",
        status: "confirmed",
      },
      {
        title: "Industry Showcase and Networking",
        description:
          "Participants connect with industry partners, researchers, and members of the wider quantum community while exploring projects, ideas, and opportunities across the ecosystem.",
        status: "confirmed",
      },
      {
        title: "Winner Announcements",
        description:
          "Track and competition winners are announced as the Fall Fest comes to a close.",
        status: "confirmed",
      },
    ],
  },
];

export const homePhases: Phase[] = phases.map(({ slug, label, title, dateRange, summary, status }) => ({
  slug,
  label,
  title,
  dateRange,
  summary,
  status,
  sessions: [],
}));
