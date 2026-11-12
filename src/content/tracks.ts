import { fallFestAssets } from "./assets";
import { biologyProposalDeadline, biologyProposalDeadlineCardLabel, biologyTags, quantumBiologyBrief } from "./quantum-biology";
import { cybersecurityDateLabels, quantumCybersecurityBrief } from "./quantum-cybersecurity";
import { metaverseStatusLabels, metaverseVenue, quantumMetaverseBrief } from "./quantum-metaverse";
import { foundationsStatusLabels, quantumFoundationsBrief } from "./quantum-foundations";
import { qmlDeadline, qmlDeadlineCardLabel, qmlStatusLabels, qmlSummary, quantumMachineLearningBrief } from "./quantum-machine-learning";
import { quantumMediaBrief } from "./quantum-media";
import { trackResults } from "./results";
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
const trackDefinitions: Track[] = [
  {
    slug: "first-qubit",
    accent: "sky",
    title: "Quantum Foundations",
    subtitle: "High School Track",
    summary:
      "High school students completed unfinished quantum circuits by identifying missing gates to achieve a target output or quantum state.",
    reach: "national",
    format: "in-person",
    participationLabel: "Individual",
    venueLabel: "Khalifa University",
    status: "confirmed",
    statusLabels: foundationsStatusLabels,
    endsAt: "2026-10-31T23:59:59+04:00",
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
    endsAt: "2026-10-31T23:59:59+04:00",
    supportedBy: [quantumAfrica],
    details: {
      headerSummary: qmlSummary,
      deadline: qmlDeadline,
      brief: quantumMachineLearningBrief,
    },
  },
  {
    slug: "quantum-cybersecurity",
    accent: "orange",
    title: "Quantum Capture the Flag (QCTF)",
    summary:
      "Hackers tackled 26 quantum challenges across five categories in an online Capture the Flag competition on 7 November.",
    reach: "international",
    format: "online",
    formatDisplayLabel: "Online",
    teamSizeLabel: "1–4 participants",
    status: "confirmed",
    statusLabels: cybersecurityDateLabels,
    showRunningBadge: false,
    endsAt: "2026-11-07T23:59:59+04:00",
    details: {
      brief: quantumCybersecurityBrief,
    },
  },
  {
    slug: "chemistry-drug-discovery",
    accent: "teal",
    title: "Quantum Biology",
    summary:
      "Teams explored four-gene panels for distinguishing lung tumour from non-cancerous tissue, comparing quantum and classical approaches.",
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    statusLabels: [],
    deadlineLabel: biologyProposalDeadlineCardLabel,
    endsAt: "2026-11-01T23:59:59+04:00",
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
      "Participants created media with Moth Quantum's engines, exploring images, sound, video, games and apps.",
    reach: "international",
    format: "online",
    status: "confirmed",
    statusLabels: [],
    deadlineLabel: "7 November · 11:59 PM Pacific Time",
    endsAt: "2026-11-07T23:59:00-08:00",
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
      "Contestants used VR to arrange quantum gates and guide a qubit along a Bloch-sphere path, balancing time and accuracy.",
    reach: "national",
    format: "in-person",
    participationLabel: "Individual",
    venueLabel: metaverseVenue,
    status: "confirmed",
    statusLabels: metaverseStatusLabels,
    endsAt: "2026-10-30T12:00:00+04:00",
    details: {
      brief: quantumMetaverseBrief,
    },
  },
];

export const tracks: Track[] = trackDefinitions.map(track => ({
  ...track,
  statusLabels: [],
  deadlineLabel: undefined,
  resultLine: trackResults[track.slug].line,
  details: track.details ? { ...track.details, deadline: undefined } : undefined,
}));

/** Short homepage teasers; full challenge descriptions remain on the Tracks page. */
const homeTrackDescriptions: Record<string, string> = {
  "first-qubit": "Fill in missing gates",
  "quantum-machine-learning": "Quantum ML for healthcare",
  "chemistry-drug-discovery": "Find a four-gene panel",
  "peaked-circuits": "Quantum gates in VR",
  "quantum-cybersecurity": "26 challenges across five categories",
  "quantum-media": "Create with Moth Quantum",
};

export const homeTrackPreviews = tracks.map(({ slug, title, reach, endsAt, showRunningBadge, resultLine }) => ({
  slug, title, reach, endsAt, showRunningBadge, resultLine, description: homeTrackDescriptions[slug],
}));

export const featuredTrackSlugs = [
  "first-qubit",
  "quantum-machine-learning",
  "quantum-cybersecurity",
  "chemistry-drug-discovery",
] as const;

export const tracksPageContent = {
  groups: [
    { reach: "international", heading: "International" },
    { reach: "national", heading: "National" },
  ] as const,
  eyebrow: "Tracks",
  title: "Six tracks. Six sets of results.",
  intro:
    "Explore the outcomes of four national and two international tracks. Each finished track includes its results and archived challenge brief.",
  /** How national and international tracks run, from the organisers' event format table. */
  formats: {
    heading: "How the tracks ran",
    items: [
      {
        reach: "national",
        label: "National tracks",
        format: "Hybrid & in person",
        points: [
          { label: "Qualifiers", text: "Tracks used their own proposal, submission and shortlisting stages ahead of the finals." },
          { label: "In-person days", text: "Challenges and finals were held on 30 and 31 October and 1 November." },
          { label: "Quantum in the Metaverse · 30 October 2026", text: "Five contestants took part in the VR challenge at Khalifa University’s MetaHub Lab." },
          { label: "Quantum Foundations · 31 October 2026", text: "109 high school students competed in person at Khalifa University." },
        ],
      },
      {
        reach: "international",
        label: "International tracks",
        format: "Fully virtual",
        points: [
          { label: "Schedules", text: "The online international challenges concluded on 7 November, following the national finals." },
          { label: "Quantum Capture the Flag (QCTF) · 7 November", text: "Online CTF competition with 178 hackers from 45 institutions in 8 countries." },
        ],
      },
    ],
  },
  note: "All six tracks have finished. Their results, challenge briefs and public learning links remain available.",
  /** Finished / Still running state, derived from each track's `endsAt`. */
  progress: {
    finishedLabel: "Finished",
    runningLabel: "Still running",
    runningHeading: "Upcoming & open tracks",
    allFinished: "All six tracks have finished. Explore their results and archived challenge briefs.",
    panelNotice: "This track has finished. Registration and submissions are closed. Results are shown first; the challenge brief remains for reference.",
    registrationClosedLabel: "Registration closed",
  },
  /** Copy for the track cards and the full-screen track panel. */
  panel: {
    openLabel: "View challenge",
    closeLabel: "Close track details",
    descriptionHeading: "About this track",
    datesHeading: "Key dates",
    sponsorsHeading: "Sponsors",
    challengesHeading: "The challenge",
    challengesPending: "The archived challenge brief is available in the track panels.",
    judgingHeading: "How it's judged",
    tasksHeading: "What you need to do",
    submissionHeading: "Submission instructions",
    resourcesHeading: "Resources",
    hostedByHeading: "Hosted by",
    supportedByHeading: "Supported by",
  },
  metadataDescription:
    "Challenges for the six Qiskit Fall Fest 2026 tracks, from quantum circuit building to quantum machine learning, biology, cybersecurity, media, and VR, across hybrid, in-person, and virtual formats.",
} as const;

export type TrackPanelCopy = (typeof tracksPageContent)["panel"];
