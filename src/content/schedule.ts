import type { Phase } from "./types";

export const formatSectionCopy = {
  compact: {
    eyebrow: "How it works",
    title: "Four phases, from kickoff to final challenges",
    lede:
      "Get started, build and present, then finish with the international challenges on 7 November.",
    link: { label: "View How It Works", href: "/schedule/" },
  },
  detailed: {
    eyebrow: "How it works",
    title: "Four phases, from kickoff to international challenges",
    lede:
      "The Fall Fest begins with an opening session, followed by development and closing showcases on 31 October and 1 November. International challenges round out the Fest on 7 November with Quantum Cybersecurity and Quantum in Media.",
  },
} as const;

export const schedulePageContent = {
  eyebrow: "How it works",
  title: "What happens, and when",
  lede:
    "The Fall Fest runs from 19 October to 7 November across four phases: the opening premiere, development, closing showcases, and international challenges.",
  countdownLabel: "Fall Fest begins",
  metadataDescription:
    "How Qiskit Fall Fest 2026 works: opening on 19 October, development, closing showcases on 31 October and 1 November, and international challenges on 7 November.",
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
      "Participants work on their track challenges over the development period, with workshops, technical sessions, mentorship, and other guidance from organizers and track partners. Some tracks may include intermediate submissions or shortlisting ahead of the closing showcase. Quantum in the Metaverse runs as a single-day, in-person challenge at Khalifa University’s MetaHub Lab on 30 October 2026. Quantum Foundations takes place entirely in person at Khalifa University on 31 October 2026, with individual participation for high school students.",
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
      "The development period concludes with project showcases, coding competitions, and final track activities. Participants present their work, compete in challenges, and come together for the announcement of track winners.",
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
        title: "Winner Announcements",
        description:
          "Winners of the closing showcase tracks and competitions are announced.",
        status: "confirmed",
      },
    ],
  },
  {
    slug: "international-challenges",
    label: "Phase 04",
    title: "International Challenges",
    dateRange: "7 November 2026",
    summary:
      "Explore the international tracks online through the Quantum Cybersecurity CTF and Quantum in Media. See each track for its participation and submission details.",
    status: "confirmed",
    sessions: [
      {
        title: "Quantum Cybersecurity CTF",
        description: "An online Capture the Flag competition focused on quantum cybersecurity and quantum cryptography. Competition timings and platform access will be shared by email.",
        format: "online",
        status: "confirmed",
      },
      {
        title: "Quantum in Media",
        description: "Create images, sound, video, games or apps with Moth Quantum’s media engines. See the track page for submission details.",
        format: "online",
        status: "confirmed",
      },
    ],
  },
];

/** Homepage previews only; the full summaries and session details remain above. */
const homePhaseSummaries: Record<string, string> = {
  opening: "Get to know the Fest and its tracks at Khalifa University or online.",
  hacking: "Work on your track challenge with workshops and mentors. In-person track days start on 30 October.",
  closing: "Project presentations, coding competitions and track winner announcements.",
  "international-challenges": "Explore the online Quantum Cybersecurity CTF and Quantum in Media tracks.",
};

export const homePhases: Phase[] = phases.map(({ slug, label, title, dateRange, summary, status }) => ({
  slug,
  label,
  title,
  dateRange,
  summary: homePhaseSummaries[slug] ?? summary,
  status,
  sessions: [],
}));
