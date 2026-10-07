import { fallFestAssets } from "./assets";
import type { Track, TrackHost } from "./types";

/**
 * Organizations a track can be "Hosted by". Tracks pick from this list via `hostedBy`.
 * Add a host only once it has agreed to be named. QCI and NYUAD are the overall
 * organisers and are deliberately not listed per track.
 */
export const trackHosts = {
  asbmb: {
    name: "ASBMB Student Chapter at Khalifa University",
    label: "ASBMB",
    logo: fallFestAssets.logos.asbmbKu.src,
    about: [
      "We're the ASBMB Student Chapter at Khalifa University, part of a larger international society dedicated to advancing biochemistry and molecular biology. Our purpose is simple: expose students to the field through real networking opportunities, connecting them with researchers, postgraduates, and industry professionals so they can see where this field can actually take them.",
    ],
  },
  mothQuantum: {
    name: "Moth Quantum",
    url: "https://mothquantum.com/",
  },
} satisfies Record<string, TrackHost>;

/**
 * Track names follow the organisers' proposal. Challenges, prerequisites, and judging
 * details remain unpublished while each track is developed. Stable slugs are preserved
 * so existing links continue to work when titles change.
 *
 * `details.description` is a temporary, challenge-focused overview approved by the
 * organisers; expect it to be edited as each track is finalised.
 *
 * `details` feeds the expanded track panel (`/tracks/#<slug>`). Leave a field out until
 * it is confirmed; the panel hides empty sections and shows the shared challenge notice.
 */
export const tracks: Track[] = [
  {
    slug: "first-qubit",
    title: "Quantum Foundations",
    summary:
      "Build a foundation in quantum computing and Qiskit through core concepts and hands-on exploration.",
    reach: "national",
    format: "hybrid",
    status: "planning",
    details: {
      description: [
        "An introduction to quantum computing through basic quantum concepts and simple circuit building. The challenges test introductory understanding, for example by asking you to complete partially finished notebooks.",
      ],
    },
  },
  {
    slug: "quantum-machine-learning",
    title: "Quantum Machine Learning",
    summary:
      "Explore the intersection of quantum computing and machine learning, including how quantum and classical approaches can work together.",
    reach: "national",
    format: "hybrid",
    status: "planning",
    details: {
      description: [
        "The challenges connect quantum machine learning with classical machine learning, with the emphasis on the quantum side: what quantum models add, and how quantum and classical parts work together on a problem.",
      ],
    },
  },
  {
    slug: "quantum-cybersecurity",
    title: "Quantum Cybersecurity",
    summary:
      "A quantum cybersecurity capture-the-flag, exploring cryptography and the opportunities and challenges created by quantum technologies.",
    reach: "national",
    format: "hybrid",
    status: "planning",
    details: {
      description: [
        "A quantum capture-the-flag (CTF) competition. You solve cybersecurity challenges built around quantum technologies and cryptography, first in an online qualifier CTF and then in a final CTF challenge.",
      ],
    },
  },
  {
    slug: "chemistry-drug-discovery",
    title: "Quantum Biology",
    summary:
      "Explore potential applications of quantum computing across biology, chemistry, and the life sciences.",
    reach: "national",
    format: "hybrid",
    status: "planning",
    hostedBy: [trackHosts.asbmb],
    details: {
      description: [
        "This track combines quantum machine learning with disease identification at the microscopic level. The challenge is being developed with the ASBMB Student Chapter at Khalifa University.",
      ],
    },
  },
  {
    slug: "quantum-media",
    title: "Quantum Entertainment",
    summary:
      "Explore quantum computing through media and creative communication, bringing quantum ideas to a wider audience.",
    reach: "international",
    format: "online",
    status: "planning",
    hostedBy: [trackHosts.mothQuantum],
    details: {
      description: [
        "A quantum entertainment challenge built on Moth Quantum's latest platform, using quantum computing in creative work and bringing quantum ideas to a wider audience.",
      ],
    },
  },
  {
    slug: "peaked-circuits",
    title: "Quantum in the Metaverse",
    summary:
      "An in-person, challenge-based track held at the KU Metaverse Hub on Friday, 30 October. There are no qualifiers.",
    reach: "national",
    format: "in-person",
    status: "planning",
    details: {
      description: [
        "A challenge-based track that runs in person at the KU Metaverse Hub on Friday, 30 October 2026.",
        "Unlike the other national tracks, there are no qualifiers: participants take on the challenge directly on the day.",
      ],
    },
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
    descriptionHeading: "About this track",
    sponsorsHeading: "Sponsors",
    challengesHeading: "Challenges",
    challengesPending: "Challenge details are to be announced soon.",
    tasksHeading: "What you need to do",
    submissionHeading: "How to submit",
    resourcesHeading: "Resources",
    hostedByHeading: "Hosted by",
  },
  metadataDescription:
    "Explore the six planning-stage Qiskit Fall Fest tracks, from quantum computing foundations to specialized applications, across hybrid, in-person, and virtual formats.",
} as const;

export type TrackPanelCopy = (typeof tracksPageContent)["panel"];
