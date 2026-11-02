import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";

/** Approved registration form, independent of the event interest form and competition platform. */
export const cybersecurityLinks = {
  registration: {
    href: "https://forms.gle/qc2R6mHAjuy6dCUD6",
    enabled: true,
    opensOn: "2026-10-23",
    timeZone: "Asia/Dubai",
    label: "Register for the CTF",
    beforeLabel: "Registration opens 23 October",
    unavailableLabel: "Registration link to be announced",
  } satisfies TrackRegistration,
  competitionPlatform: null as string | null,
};

export const cybersecurityDateLabels: TrackStatusLabel[] = [
  { label: "Registration open", tone: "gold", icon: "calendar" },
  { label: "CTF challenge: 7 November", tone: "sky", icon: "flag" },
];

export const quantumCybersecurityBrief: TrackBrief = {
  navigationLabel: "Quantum Cybersecurity challenge panels",
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Quantum Cybersecurity CTF" },
        { type: "paragraph", text: "Join an online Capture the Flag competition focused on quantum cybersecurity and quantum cryptography on 7 November 2026." },
        { type: "paragraph", text: "Investigate security and cryptography challenges, work through clues and capture flags. Challenge instructions and platform access will be shared before the competition." },
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
            { title: "Access the challenges", text: "Use the organizer-provided platform to explore the quantum cybersecurity and quantum cryptography challenges." },
            { title: "Investigate and solve", text: "Analyse each challenge and its clues, then develop a solution individually or with your team." },
            { title: "Capture flags and earn points", text: "Submit the flags you find through the competition platform to earn points." },
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
        { type: "notice", hideWhenOver: true, paragraphs: ["Registration is open. Register using the track form below."] },
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
            ["7 November 2026 — Online CTF competition", "Quantum cybersecurity and quantum cryptography challenges. Participate online, individually or with your team."],
          ],
        },
        { type: "heading", text: "Before the competition" },
        { type: "paragraph", text: "Competition start and end times, platform access, software requirements and preparation instructions will be shared through email. All announced times will use UAE time (UTC+4)." },
      ],
    },
  ],
};
