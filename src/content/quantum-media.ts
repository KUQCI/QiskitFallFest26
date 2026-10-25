import type { TrackBrief } from "./types";

/** Approved Moth themes and links, preserved from the published track content. */
export const mediaThemeGroups = [
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
];

export const mediaResources = [
  { label: "Platform access", href: "https://mql.ink/khalifa" },
  { label: "Starter guide (video)", href: "https://youtu.be/LcKl6Rsg2yk?si=r2uF8eQgrBfFDMd5&t=589" },
  { label: "Discord community", href: "https://discord.gg/sDh29KsG5" },
];

export const quantumMediaBrief: TrackBrief = {
  navigationLabel: "Quantum in Media challenge panels",
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Create with quantum media engines" },
        { type: "paragraph", text: "Use Moth Quantum's media engines to make images, sound, video, games, or apps, with or without code." },
        { type: "paragraph", text: "Create with Moth Quantum's quantum media engines: Atlas API, Tessa, Blur, and the Entanglement Shader." },
        { type: "track-visual", kind: "media" },
        { type: "heading", text: "Choose a tier and theme" },
        { type: "paragraph", text: "Use Moth's quantum media engines to process, generate, or build media applications or artifacts. Submissions are split into two tiers: projects made on the online platform, and projects that use the Atlas API in code. Pick a theme from either tier." },
        { type: "list", presentation: "cards", items: [
          { title: "No-code themes", text: "Explore seven themes for projects made on the online platform." },
          { title: "Code themes (Atlas API)", text: "Explore three themes for projects built with code." },
        ] },
      ],
    },
    ...mediaThemeGroups.map((group, index) => ({
      id: index === 0 ? "no-code-themes" : "code-themes",
      title: group.title,
      blocks: [
        { type: "list" as const, presentation: "cards" as const, items: group.themes.map(theme => ({ title: theme.title, text: theme.description })) },
      ],
    })),
    {
      id: "submissions-resources",
      title: "Submissions & Resources",
      blocks: [
        { type: "heading", text: "Submit your project" },
        { type: "notice", paragraphs: ["Submission deadline: 30 October 2026, 11:59 PM Pacific Time (UTC-8)."] },
        { type: "paragraph", text: "Submit your project through the official submission form before the deadline. Check your chosen theme for what to include." },
        { type: "links", items: [{ label: "Submit your project", href: "https://tally.so/r/OQDOD7" }] },
        { type: "heading", text: "Tools & support" },
        { type: "links", items: mediaResources },
      ],
    },
  ],
};
