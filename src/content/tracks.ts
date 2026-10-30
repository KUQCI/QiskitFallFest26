import { fallFestAssets } from "./assets";
import { biologyProposalDeadline, biologyProposalDeadlineCardLabel, biologyTags, quantumBiologyBrief } from "./quantum-biology";
import { cybersecurityDateLabels, quantumCybersecurityBrief } from "./quantum-cybersecurity";
import { metaverseStatusLabels, metaverseVenue, quantumMetaverseBrief } from "./quantum-metaverse";
import { foundationsStatusLabels, quantumFoundationsBrief } from "./quantum-foundations";
import { qmlDeadline, qmlDeadlineCardLabel, qmlStatusLabels, qmlSummary, quantumMachineLearningBrief } from "./quantum-machine-learning";
import { quantumMediaBrief } from "./quantum-media";
import { adOmics, quantumAfrica } from "./sponsors";
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
    links: [
      { label: "Instagram", href: "https://www.instagram.com/ku.asbmb/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/american-society-of-biochemistry-and-molecular-biology-asbmb-at-ku/",
      },
    ],
  },
  mothQuantum: {
    name: "Moth Quantum",
    url: "https://mothquantum.com/",
    logo: fallFestAssets.logos.mothQuantum.src,
    logoOnDark: false,
  },
} satisfies Record<string, TrackHost>;

/**
 * Track names follow the organisers' proposal. Stable slugs are preserved so existing
 * links continue to work when titles change.
 *
 * Challenge statements, judging, submissions, resources, and dates come from the
 * organisers' track document released at the 19 October premiere. Biology uses its
 * separate, latest approved brief in `quantum-biology.ts` and the user's overrides.
 * Cybersecurity, Metaverse and Foundations use their newer approved four-panel
 * briefs and independent registration controls. Other resource and submission links go in
 * `resources` or `submission.links` only when supplied; never fill a gap with a guess.
 *
 * `details` feeds the expanded track panel (`/tracks/#<slug>`). Leave a field out until
 * it is confirmed; the panel hides empty sections.
 */
export const tracks: Track[] = [
  {
    slug: "first-qubit",
    accent: "sky",
    title: "Quantum Foundations",
    subtitle: "High School Track",
    summary:
      "Complete unfinished quantum circuits by filling in the missing gates to achieve a specified target output or quantum state.",
    reach: "national",
    format: "in-person",
    participationLabel: "Individual",
    venueLabel: "Khalifa University",
    status: "confirmed",
    statusLabels: foundationsStatusLabels,
    details: {
      brief: quantumFoundationsBrief,
    },
  },
  {
    slug: "quantum-machine-learning",
    accent: "purple",
    title: "Quantum Machine Learning",
    summary: qmlSummary,
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    statusLabels: qmlStatusLabels,
    deadlineLabel: qmlDeadlineCardLabel,
    sponsoredBy: [quantumAfrica],
    details: {
      headerSummary: qmlSummary,
      deadline: qmlDeadline,
      brief: quantumMachineLearningBrief,
    },
  },
  {
    slug: "quantum-cybersecurity",
    accent: "orange",
    title: "Quantum Cybersecurity",
    summary:
      "Query quantum machine learning models, uncover protected information and capture flags in an online model-extraction competition.",
    reach: "international",
    format: "online",
    formatDisplayLabel: "Online",
    teamSizeLabel: "1–4 participants",
    status: "confirmed",
    statusLabels: cybersecurityDateLabels,
    details: {
      brief: quantumCybersecurityBrief,
    },
  },
  {
    slug: "chemistry-drug-discovery",
    accent: "teal",
    title: "Quantum Biology",
    summary:
      "Use quantum optimization to identify a four-gene panel that distinguishes lung tumour from non-cancerous tissue, and compare your approach with classical methods.",
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    statusLabels: ["Challenge live", "Submissions open"],
    deadlineLabel: biologyProposalDeadlineCardLabel,
    tags: biologyTags,
    coverIcon: fallFestAssets.biologyVisuals.icon.src,
    hostedBy: [trackHosts.asbmb],
    banner: fallFestAssets.trackBanners.quantumBiology.src,
    details: {
      brief: quantumBiologyBrief,
      deadline: biologyProposalDeadline,
      hostPartners: [{
        name: adOmics.name,
        logo: adOmics.logo,
        url: adOmics.url,
        contribution: "Workshop partner · Biology and data",
      }],
    },
  },
  {
    slug: "quantum-media",
    accent: "pink",
    title: "Quantum in Media",
    coverLogo: fallFestAssets.logos.mothQuantum.src,
    summary:
      "Use Moth Quantum's media engines to make images, sound, video, games, or apps, with or without code.",
    reach: "international",
    format: "online",
    status: "confirmed",
    statusLabels: ["Challenge live"],
    deadlineLabel: "1st Novemeber · 11:59 PM Pacific Time",
    hostedBy: [trackHosts.mothQuantum],
    details: {
      brief: quantumMediaBrief,
    },
  },
  {
    slug: "peaked-circuits",
    accent: "gold",
    title: "Quantum in the Metaverse",
    summary:
      "Use VR to arrange quantum gates and guide a virtual qubit along a path on the Bloch sphere. Compete on completion time and accuracy.",
    reach: "national",
    format: "in-person",
    participationLabel: "Individual",
    venueLabel: metaverseVenue,
    status: "confirmed",
    statusLabels: metaverseStatusLabels,
    details: {
      brief: quantumMetaverseBrief,
    },
  },
];

/** Short homepage teasers; full challenge descriptions remain on the Tracks page. */
const homeTrackDescriptions: Record<string, string> = {
  "first-qubit": "Fill in missing gates",
  "quantum-machine-learning": "Quantum ML for healthcare",
  "chemistry-drug-discovery": "Find a four-gene panel",
  "peaked-circuits": "Quantum gates in VR",
  "quantum-cybersecurity": "Quantum model extraction",
  "quantum-media": "Create with Moth Quantum",
};

export const homeTrackPreviews = tracks.map(({ slug, title, reach }) => ({
  slug, title, reach, description: homeTrackDescriptions[slug],
}));

export const featuredTrackSlugs = [
  "first-qubit",
  "quantum-machine-learning",
  "quantum-cybersecurity",
  "chemistry-drug-discovery",
] as const;

export const tracksPageContent = {
  groups: [
    { reach: "national", heading: "National" },
    { reach: "international", heading: "International" },
  ] as const,
  eyebrow: "Tracks",
  title: "Find your path into quantum",
  intro:
    "Explore six independent tracks, from quantum fundamentals to specialized applications. Choose a challenge and check its registration and competition dates.",
  /** How national and international tracks run, from the organisers' event format table. */
  formats: {
    heading: "How the tracks run",
    items: [
      {
        reach: "national",
        label: "National tracks",
        format: "Hybrid & in person",
        points: [
          { label: "Qualifiers", text: "Before 31 October where required; each track sets its cutoff." },
          { label: "In-person days", text: "30 or 31 October, or 1 November, depending on the track." },
          { label: "Quantum in the Metaverse · 30 October 2026", text: "Single-day challenge at Khalifa University’s MetaHub Lab, with individual registration and scheduled sessions." },
          { label: "Quantum Foundations · 31 October 2026", text: "Entirely in person at Khalifa University." },
        ],
      },
      {
        reach: "international",
        label: "International tracks",
        format: "Fully virtual",
        points: [
          { label: "Schedules", text: "Track-specific registration and competition dates, separate from national qualifiers and finals." },
          { label: "Quantum Cybersecurity · 1 November", text: "Online CTF competition." },
        ],
      },
    ],
  },
  note: "Registration links and resource links for each track will be added here as they are shared.",
  /** Copy for the track cards and the full-screen track panel. */
  panel: {
    openLabel: "View challenge",
    closeLabel: "Close track details",
    descriptionHeading: "About this track",
    datesHeading: "Key dates",
    sponsorsHeading: "Sponsors",
    challengesHeading: "The challenge",
    challengesPending: "Challenge details are to be announced soon.",
    judgingHeading: "How it's judged",
    tasksHeading: "What you need to do",
    submissionHeading: "Submission instructions",
    resourcesHeading: "Resources",
    hostedByHeading: "Hosted by",
    sponsoredByHeading: "Sponsored by",
  },
  metadataDescription:
    "Challenges for the six Qiskit Fall Fest 2026 tracks, from quantum circuit building to quantum machine learning, biology, cybersecurity, media, and VR, across hybrid, in-person, and virtual formats.",
} as const;

export type TrackPanelCopy = (typeof tracksPageContent)["panel"];
