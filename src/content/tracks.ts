import type { Track } from "./types";

/**
 * Broad track directions, reach, and delivery format only. Challenges, prerequisites,
 * partners, and judging details remain intentionally unpublished while each track is developed.
 * Stable slugs are preserved so existing links continue to work when titles change.
 *
 * `details` feeds the expanded track panel (`/tracks/#<slug>`). Leave a field out until
 * it is confirmed; the panel hides empty sections and shows the shared challenge notice.
 */
export const tracks: Track[] = [
  {
    slug: "first-qubit",
    title: "Quantum Computing Foundations",
    summary:
      "Build a foundation in quantum computing and Qiskit through core concepts and hands-on exploration.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "quantum-machine-learning",
    title: "Quantum Machine Learning",
    summary:
      "Explore the intersection of quantum computing and machine learning, including how quantum and classical approaches can work together.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "quantum-cybersecurity",
    title: "Quantum CTF",
    summary:
      "A quantum cybersecurity capture-the-flag, exploring cryptography and the opportunities and challenges created by quantum technologies.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "chemistry-drug-discovery",
    title: "Quantum Computing & Biology",
    summary:
      "Explore potential applications of quantum computing across biology, chemistry, and the life sciences.",
    reach: "national",
    format: "hybrid",
    status: "planning",
    details: {
      // Logo and About Us text to be added once the chapter supplies them.
      organizer: { name: "ASBMB Student Chapter" },
    },
  },
  {
    slug: "quantum-media",
    title: "Quantum in Entertainment",
    summary:
      "Explore quantum computing through media and creative communication, bringing quantum ideas to a wider audience.",
    reach: "international",
    format: "online",
    status: "planning",
  },
  {
    slug: "peaked-circuits",
    title: "Quantum in the Metaverse",
    summary:
      "Design simple quantum algorithms and visualize their results in interactive virtual worlds. Possible projects include shaping a world with quantum-generated randomness or exploring quantum search in a game, supported by workshops and starter materials for beginners.",
    reach: "international",
    format: "online",
    status: "planning",
  },
];

export const featuredTrackSlugs = [
  "first-qubit",
  "quantum-machine-learning",
  "quantum-cybersecurity",
  "chemistry-drug-discovery",
] as const;

export const tracksPageContent = {
  eyebrow: "Tracks",
  title: "Find your path into quantum",
  intro:
    "Explore tracks ranging from quantum fundamentals to specialized applications. Each track runs independently, so participants can choose the area that best matches their interests.",
  note:
    "Note: Track details are currently in development, with challenges and full information to be announced soon.",
  /** Copy for the expandable track cards and the full-screen track panel. */
  panel: {
    openLabel: "View track details",
    closeLabel: "Close track details",
    switcherLabel: "All tracks",
    descriptionHeading: "About this track",
    sponsorsHeading: "Sponsors",
    challengesHeading: "Challenges",
    challengesPending: "Challenge details are to be announced soon.",
    tasksHeading: "What you need to do",
    submissionHeading: "How to submit",
    resourcesHeading: "Resources",
    organizerHeading: "Organized by",
  },
  metadataDescription:
    "Explore the six planning-stage Qiskit Fall Fest tracks, from quantum computing foundations to specialized applications, across national hybrid and international virtual formats.",
} as const;

export type TrackPanelCopy = (typeof tracksPageContent)["panel"];
