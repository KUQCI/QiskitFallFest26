import { fallFestAssets } from "./assets";
import { biologyTags, quantumBiologyBrief } from "./quantum-biology";
import { cybersecurityDateLabels, quantumCybersecurityBrief } from "./quantum-cybersecurity";
import { metaverseStatusLabels, metaverseVenue, quantumMetaverseBrief } from "./quantum-metaverse";
import { foundationsStatusLabels, quantumFoundationsBrief } from "./quantum-foundations";
import { qmlDeadline, qmlDeadlineCardLabel, qmlStatusLabels, qmlSummary, quantumMachineLearningBrief } from "./quantum-machine-learning";
import { adOmics } from "./sponsors";
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
    title: "Quantum Machine Learning",
    summary: qmlSummary,
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    statusLabels: qmlStatusLabels,
    deadlineLabel: qmlDeadlineCardLabel,
    details: {
      headerSummary: qmlSummary,
      deadline: qmlDeadline,
      brief: quantumMachineLearningBrief,
    },
  },
  {
    slug: "quantum-cybersecurity",
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
    title: "Quantum Biology",
    summary:
      "Use quantum optimization to identify a four-gene panel that distinguishes lung tumour from non-cancerous tissue, and compare your approach with classical methods.",
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    statusLabels: ["Challenge live", "Submissions open"],
    tags: biologyTags,
    coverIcon: fallFestAssets.biologyVisuals.icon.src,
    hostedBy: [trackHosts.asbmb],
    banner: fallFestAssets.trackBanners.quantumBiology.src,
    details: {
      brief: quantumBiologyBrief,
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
    title: "Quantum in Media",
    coverLogo: fallFestAssets.logos.mothQuantum.src,
    summary:
      "Use Moth Quantum's media engines to make images, sound, video, games, or apps, with or without code.",
    reach: "international",
    format: "online",
    status: "confirmed",
    statusLabels: ["Challenge live"],
    deadlineLabel: "30 October · 11:59 PM Pacific Time",
    hostedBy: [trackHosts.mothQuantum],
    details: {
      overviewVisual: "media",
      description: [
        "Create with Moth Quantum's quantum media engines: Atlas API, Tessa, Blur, and the Entanglement Shader.",
      ],
      dates: ["Submission Deadline: 30 October 2026, 11:59 PM (UTC-8)"],
      submission: {
        how: ["Submit your project through the official submission form before the deadline."],
        links: [{ 
              label: "Submission Link", 
              href: "https://tally.so/r/OQDOD7" 
            }],
      },
      challenge: [
        "Use Moth's quantum media engines to process, generate, or build media applications or artifacts. Submissions are split into two tiers: projects made on the online platform, and projects that use the Atlas API in code. Pick a theme from either tier.",
      ],
      challengeThemes: [
        {
          title: "No-code themes",
          themes: [
            {
              title: "One image, one engine",
              description:
                "Run an image through a visual engine (Blur, Tessa, or another) and submit the result with the parameters used.",
            },
            {
              title: "Make it audible",
              description:
                "Use an Atlas engine for sound production. Submit an audio file (song, sample, or sound effect) with a summary of your workflow.",
            },
            {
              title: "Three dimensions",
              description:
                "Use an engine to do something three-dimensional, for example a video where the Entanglement Shader has been applied to a 3D asset.",
            },
            {
              title: "Moving image",
              description: "Use at least one engine in a video piece. Any format.",
            },
            {
              title: "Quantum game",
              description:
                "Use at least one engine in the making of a game, for example a browser game whose sprites are generated with Tessa.",
            },
            {
              title: "Daisy chain",
              description:
                "Use as many engines as possible in a single project. Measured on the number of engines and how effectively they are used.",
            },
            {
              title: "Make a VST or AU",
              description:
                "Build a music plugin using at least one engine. Submit the plugin and audio examples of it in use.",
            },
          ],
        },
        {
          title: "Code themes (Atlas API)",
          themes: [
            {
              title: "Make a web app",
              description:
                "Build a web app that calls the Atlas API. Submit a link and a short description of what it does.",
            },
            {
              title: "Quantum native 1",
              description:
                "Provide a repo of a quantum application that runs a process on some kind of media (for example a video or a game). Applications that use the Atlas API are especially welcome.",
            },
            {
              title: "Quantum native 2",
              description:
                "Provide a Python notebook showing how you used the API to build a workflow that generates some kind of media or application (for example a game).",
            },
          ],
        },
      ],
      resources: [
        { label: "Platform access", href: "https://mql.ink/khalifa" },
        { label: "Starter guide (video)", href: "https://youtu.be/LcKl6Rsg2yk?si=r2uF8eQgrBfFDMd5&t=589" },
        { label: "Discord community", href: "https://discord.gg/sDh29KsG5" },
      ],
    },
  },
  {
    slug: "peaked-circuits",
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
          { label: "Quantum Cybersecurity · 30 October", text: "Online CTF competition." },
        ],
      },
    ],
  },
  note: "Registration links and resource links for each track will be added here as they are shared.",
  /** Copy for the expandable track cards and the full-screen track panel. */
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
  },
  metadataDescription:
    "Challenges for the six Qiskit Fall Fest 2026 tracks, from quantum circuit building to quantum machine learning, biology, cybersecurity, media, and VR, across hybrid, in-person, and virtual formats.",
} as const;

export type TrackPanelCopy = (typeof tracksPageContent)["panel"];
