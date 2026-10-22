import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";

/** Independent of the event interest form and the competition platform. No URLs supplied yet. */
export const cybersecurityLinks = {
  registration: {
    href: null,
    enabled: false,
    opensOn: "2026-10-23",
    timeZone: "Asia/Dubai",
    label: "Register for the CTF",
    beforeLabel: "Registration opens 23 October",
    unavailableLabel: "Registration link to be announced",
  } satisfies TrackRegistration,
  competitionPlatform: null as string | null,
};

export const cybersecurityDateLabels: TrackStatusLabel[] = [
  { label: "Registration opens 23 October", tone: "gold", icon: "calendar" },
  { label: "CTF challenge: 30 October", tone: "sky", icon: "flag" },
];

export const quantumCybersecurityBrief: TrackBrief = {
  navigationLabel: "Quantum Cybersecurity challenge panels",
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Quantum Cybersecurity CTF" },
        { type: "paragraph", text: "Investigate the security of quantum machine learning through a series of model-extraction challenges in an online Capture the Flag competition." },
        { type: "paragraph", text: "Teams will interact with trained quantum models through black-box interfaces that accept inputs and return classification labels or probabilities, while internal parameters remain hidden. The challenge is to analyse what these outputs reveal, uncover protected information and complete defined extraction objectives." },
        { type: "paragraph", text: "Participants may adapt existing model-extraction techniques or develop their own strategies. The competition rewards effective querying, analytical reasoning and a practical understanding of how model predictions can expose information about internal behaviour." },
        { type: "track-visual", kind: "ctf" },
      ],
    },
    {
      id: "how-it-works",
      title: "How It Works",
      blocks: [
        {
          type: "list",
          ordered: true,
          presentation: "compact-steps",
          items: [
            { title: "Query the model", text: "Submit inputs to the organizer-provided interface and examine the model’s responses." },
            { title: "Investigate the outputs", text: "Develop strategies to recover the information required by each challenge." },
            { title: "Capture flags and earn points", text: "Successfully completing extraction objectives and submitting the required information unlocks flags and earns points." },
          ],
        },
        { type: "heading", text: "Scoring" },
        { type: "paragraph", text: "Teams are ranked by the total points earned through successfully captured flags and time. Challenge specific objectives, submission instructions and scoring rules will be provided when the competition opens." },
      ],
    },
    {
      id: "participation-registration",
      title: "Participation & Registration",
      blocks: [
        { type: "heading", text: "Participate individually or as a team" },
        { type: "paragraph", text: "Enter individually or in a team of up to four people, including the team lead. Only the team lead needs to submit the registration form on behalf of the team." },
        { type: "notice", paragraphs: ["Registration opens 23 October 2026."] },
        { type: "paragraph", text: "Prepare your team name, team size, the team lead’s contact details and institution, and the names, email addresses and institutions of any additional members." },
        { type: "paragraph", text: "Competition timings, platform access and preparation instructions will be shared through email. All announced times will use UAE time (UTC+4)." },
        { type: "registration", registration: cybersecurityLinks.registration },
      ],
    },
    {
      id: "schedule-preparation",
      title: "Schedule & Preparation",
      blocks: [
        {
          type: "table",
          presentation: "timeline",
          columns: ["2026 · UAE time (UTC+4)", "Milestone"],
          rows: [
            ["23 October 2026 — Registration opens", "The team lead submits one registration form for the team."],
            ["30 October 2026 — Online CTF competition", "A single-day competition featuring quantum machine learning model-extraction challenges."],
          ],
        },
        { type: "heading", text: "Before the competition" },
        { type: "paragraph", text: "Competition start and end times, platform access, software requirements and preparation instructions will be shared through email. All announced times will use UAE time (UTC+4)." },
      ],
    },
  ],
};
