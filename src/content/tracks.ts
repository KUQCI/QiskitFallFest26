import type { Track } from "./types";

/**
 * Broad track directions, reach, and delivery format only. Challenges, prerequisites,
 * partners, and judging details remain intentionally unpublished while each track is developed.
 * Stable slugs and codes are preserved from the original data.
 */
export const tracks: Track[] = [
  {
    slug: "first-qubit",
    code: "INTRO-05",
    title: "Quantum Computing Foundations",
    summary:
      "Build a foundation in quantum computing and Qiskit through core concepts and hands-on exploration.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "quantum-machine-learning",
    code: "QML-01",
    title: "Quantum Machine Learning",
    summary:
      "Explore the intersection of quantum computing and machine learning, including how quantum and classical approaches can work together.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "quantum-cybersecurity",
    code: "SEC-02",
    title: "Quantum CTF",
    summary:
      "A quantum cybersecurity capture-the-flag, exploring cryptography and the opportunities and challenges created by quantum technologies.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "chemistry-drug-discovery",
    code: "CHEM-03",
    title: "Quantum Computing & Biology",
    summary:
      "Explore potential applications of quantum computing across biology, chemistry, and the life sciences.",
    reach: "national",
    format: "hybrid",
    status: "planning",
  },
  {
    slug: "quantum-media",
    code: "MEDIA-07",
    title: "Quantum Media",
    summary:
      "Explore quantum computing through media and creative communication, bringing quantum ideas to a wider audience.",
    reach: "international",
    format: "online",
    status: "planning",
  },
  {
    slug: "peaked-circuits",
    code: "PEAK-08",
    title: "Peaked Circuits",
    summary:
      "Explore peaked quantum circuits, where a hidden output stands out from the rest, and the challenge of uncovering it.",
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
  metadataDescription:
    "Explore the six planning-stage Qiskit Fall Fest tracks, from quantum computing foundations to specialized applications, across national hybrid and international virtual formats.",
} as const;
