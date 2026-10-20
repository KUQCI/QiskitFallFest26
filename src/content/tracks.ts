import { fallFestAssets } from "./assets";
import { biologyTags, quantumBiologyBrief } from "./quantum-biology";
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
    logoOnDark: true,
  },
} satisfies Record<string, TrackHost>;

/**
 * Track names follow the organisers' proposal. Stable slugs are preserved so existing
 * links continue to work when titles change.
 *
 * Challenge statements, judging, submissions, resources, and dates come from the
 * organisers' track document released at the 19 October premiere. Biology uses its
 * separate, latest approved brief in `quantum-biology.ts` and the user's overrides.
 * Registration links
 * and resource URLs were not yet supplied: add them to `resources` or
 * `submission.links` when they are shared, and do not fill a gap with a guess.
 *
 * `details` feeds the expanded track panel (`/tracks/#<slug>`). Leave a field out until
 * it is confirmed; the panel hides empty sections.
 */
export const tracks: Track[] = [
  {
    slug: "first-qubit",
    title: "Quantum Foundations",
    summary:
      "For high school students: complete unfinished quantum circuits so they produce a target output or setup.",
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    details: {
      description: [
        "Reserved for high schoolers, this track introduces participants to quantum circuit design. Participants will be provided with incomplete quantum circuits, and must fill in the blanks in the circuit to achieve a certain output or setup.",
      ],
      dates: ["31 October 2026: in-person competition at Khalifa University."],
      challenge: [
        "Participants take on circuit-building challenges. \
        You will be given incomplete quantum circuits and must fill in the blanks so that each circuit achieves a given output or setup.",
        "Registration for the in-person challenge will be shared soon."
      ],
    },
  },
  {
    slug: "quantum-machine-learning",
    title: "Quantum Machine Learning",
    summary:
      "Pick a healthcare problem, build/find a classical machine learning baseline, then use quantum techniques to beat it.",
    reach: "national",
    format: "hybrid",
    status: "confirmed",
    details: {
      description: [
        "Push past conventional machine learning by bringing quantum techniques to a real healthcare problem, and show what they add.",
      ],
      challenge: [
        "Identify a specific problem within healthcare and establish a robust classical machine learning baseline to solve it.",
        "Then use quantum techniques either to improve the classical model or to develop a fully quantum model \
        that outperforms the baseline in key metrics. The quantum integration must serve a clear purpose, \
        directly addressing the limitations of the classical approach to drive measurable performance gains.",
        "Both the problem choice and problem solving approach should be justified.",
      ],
      submission: {
        how: [
          "A functional codebase.",
          "A comparative evaluation showing both the classical and the quantum model and explaining the main decisions.",
        ],
      },
      judging: [
        "Submissions are scored on the quantum model's performance relative to its classical baseline, and on the correctness, depth, and soundness of the team's chosen approach.",
      ],
    },
  },
  {
    slug: "quantum-cybersecurity",
    title: "Quantum Cybersecurity",
    summary:
      "A Quantum CTF on model extraction: query quantum machine learning models to uncover hidden details and capture flags.",
    reach: "international",
    format: "online",
    status: "confirmed",
    details: {
      description: [
        "A Capture the Flag (CTF) competition that investigates the security of quantum machine learning, focused on model extraction.",
      ],
      dates: ["30 October 2026: a standalone online CTF. Exact timings will be announced."],
      challenge: [
        "Teams interact with quantum machine learning models through provided interfaces, using the information revealed by their inputs and outputs to uncover hidden details and capture flags.",
        "The aim is to explore how access to a model's predictions can expose protected information about its internal behaviour. You may adapt existing model-stealing techniques or develop your own strategies. Each challenge specifies its objectives, access conditions, and flag submission requirements.",
      ],
      judging: [
        "The competition rewards analytical reasoning, creative problem solving, and effective extraction strategies. Teams are ranked by the total points earned from successfully captured flags.",
      ],
      submission: {
        how: ["Submit flags according to the requirements specified for each challenge."],
      },
      resourceItems: [
        "Competition platform",
        "Challenge instructions",
        "Model access interfaces",
        "Supporting guides and introductory workshops",
      ],
      resourcesNote: "Links and availability will be announced.",
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
    statusLabel: "Registration open",
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
    title: "Media with Moth",
    coverLogo: fallFestAssets.logos.mothQuantum.src,
    summary:
      "Use Moth Quantum's media engines to make images, sound, video, games, or apps, with or without code.",
    reach: "international",
    format: "online",
    status: "confirmed",
    hostedBy: [trackHosts.mothQuantum],
    details: {
      description: [
        "Create with Moth Quantum's quantum media engines: Atlas API, Tessa, Blur, and the Entanglement Shader.",
      ],
      dates: ["30 October 2026, 11:59 PM Pacific Time: submission deadline."],
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
      resourceItems: [
        "Platform access, with a Khalifa University Fall Fest code",
        "Starter guide",
        "Discord community",
        "Submission link",
      ],
      resourcesNote: "Links will be shared here.",
    },
  },
  {
    slug: "peaked-circuits",
    title: "Quantum in the Metaverse",
    summary:
      "In VR at Khalifa University's MetaHub Lab, build gate sequences that steer a qubit along a path on the Bloch sphere.",
    reach: "national",
    format: "in-person",
    status: "confirmed",
    details: {
      description: [
        "Explore quantum computing through an immersive, one-day VR experience at Khalifa University's MetaHub Lab. It connects foundational quantum concepts with hands-on problem solving.",
        "Unlike the other national tracks, there are no qualifiers: participants take on the challenge directly on the day, in scheduled sessions for groups of 12 students.",
      ],
      dates: ["30 October 2026: one-day, in-person challenge. Session timings will be announced."],
      challenge: [
        "Using provided VR headsets, you interact with an application that visualizes a single qubit on the Bloch sphere. The challenge is to construct a sequence of quantum gates that guides the qubit along a specified path.",
        "Experiment with different gates and the order you apply them in, observing how each operation changes the qubit's state and contributes to the overall result.",
      ],
      submission: {
        how: [
          "Complete the assigned quantum gate challenges within the VR application during your session, demonstrating successful gate sequences.",
        ],
      },
      judging: ["Winners are determined by completion time and the accuracy of their solutions."],
      resourceItems: [
        "VR headsets and access to the quantum visualization application, provided at the MetaHub Lab",
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
  groups: [
    { reach: "national", heading: "National" },
    { reach: "international", heading: "International" },
  ] as const,
  eyebrow: "Tracks",
  title: "Find your path into quantum",
  intro:
    "The challenges are live. Explore six tracks, from quantum fundamentals to specialized applications. Each track runs independently and has its own registration, so participants can choose the area that best matches their interests.",
  /** How national and international tracks run, from the organisers' event format table. */
  formats: {
    heading: "How the tracks run",
    items: [
      {
        reach: "national",
        label: "National tracks",
        format: "Hybrid",
        description:
          "Most national tracks combine online qualifiers with in-person finals at Khalifa University. Where qualifiers are needed, they take place before 31 October, and each track sets its own cutoff. In-person days are on 30 October, 31 October or 1 November, depending on the track. Quantum in the Metaverse runs in person on 30 October.",
      },
      {
        reach: "international",
        label: "International tracks",
        format: "Fully virtual",
        description:
          "Each track opens on 19 October and finishes by 1 November at the latest. International tracks set their own format and schedule within that window, separately from the national qualifiers and finals.",
      },
    ],
  },
  note: "Registration links and resource links for each track will be added here as they are shared.",
  /** Copy for the expandable track cards and the full-screen track panel. */
  panel: {
    openLabel: "View challenge",
    closeLabel: "Close track details",
    /** Card and panel badge for a track whose challenge has been published. */
    announcedLabel: "Challenge live",
    descriptionHeading: "About this track",
    datesHeading: "Key dates",
    sponsorsHeading: "Sponsors",
    challengesHeading: "The challenge",
    challengesPending: "Challenge details are to be announced soon.",
    judgingHeading: "How it's judged",
    tasksHeading: "What you need to do",
    submissionHeading: "What to submit",
    resourcesHeading: "Resources",
    hostedByHeading: "Hosted by",
  },
  metadataDescription:
    "Challenges for the six Qiskit Fall Fest 2026 tracks, from quantum circuit building to quantum machine learning, biology, cybersecurity, media, and VR, across hybrid, in-person, and virtual formats.",
} as const;

export type TrackPanelCopy = (typeof tracksPageContent)["panel"];
