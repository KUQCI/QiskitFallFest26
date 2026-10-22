import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";

/** Explicitly opened by the organizer on 22 October, independently of other forms. */
export const foundationsRegistration: TrackRegistration = {
  href: "https://forms.gle/hyKcfkuXYmFnb7TE8",
  enabled: true,
  closed: false,
  opensOn: "2026-10-22",
  timeZone: "Asia/Dubai",
  label: "Register for Quantum Foundations",
  beforeLabel: "Registration opens 22 October",
  unavailableLabel: "Registration link to be announced",
  closedLabel: "Registration closed",
  note: "Limited spots. Your place is confirmed only when you receive a confirmation email.",
};

export const foundationsStatusLabels: TrackStatusLabel[] = [
  { label: "Registration open", tone: "gold", icon: "calendar" },
  { label: "In-person challenge: 31 October", tone: "sky", icon: "flag" },
  { label: "Limited spots", tone: "purple", cardPlacement: "metadata" },
];

export const quantumFoundationsBrief: TrackBrief = {
  navigationLabel: "Quantum Foundations challenge panels",
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Complete the circuit. Discover the foundations." },
        { type: "paragraph", text: "Explore quantum computing through a single-day challenge for high school students, taking place entirely in person at Khalifa University on 31 October 2026." },
        { type: "paragraph", text: "Participants will compete individually, completing unfinished quantum circuits by identifying and inserting the missing gates needed to achieve a specified target output or quantum state." },
        { type: "paragraph", text: "The challenge develops an understanding of quantum gates, circuit structure and how the order of operations affects a circuit’s behaviour." },
        { type: "notice", paragraphs: ["Registration is open. Limited spots; your place will be confirmed by email."] },
        { type: "circuit-motif" },
      ],
    },
    {
      id: "the-challenge",
      title: "The Challenge",
      blocks: [
        {
          type: "list", ordered: true, presentation: "compact-steps",
          items: [
            { title: "Understand the target", text: "Examine the incomplete circuit and the output or quantum state it is intended to produce." },
            { title: "Fill in the missing gates", text: "Identify the quantum operations needed to complete the circuit." },
            { title: "Complete the circuit", text: "Arrange the missing gates so the completed circuit meets the challenge’s specified target." },
          ],
        },
        { type: "heading", text: "Challenge instructions" },
        { type: "paragraph", text: "Detailed participation instructions, permitted tools and assessment criteria will be shared before participants begin." },
        { type: "paragraph", text: "The competition is individual and takes place entirely in person." },
      ],
    },
    {
      id: "participation-registration",
      title: "Participation & Registration",
      blocks: [
        { type: "heading", text: "For high school students" },
        { type: "paragraph", text: "Each participant should submit their own registration form." },
        { type: "paragraph", text: "Provide the requested student, school and contact details through the registration form." },
        { type: "heading", text: "Limited spots — confirmation by email" },
        { type: "registration", registration: foundationsRegistration },
        { type: "heading", text: "Physical attendance" },
        { type: "paragraph", text: "Participants must attend in person at Khalifa University on 31 October 2026. Event timings, check-in details and preparation instructions will be shared through email." },
        { type: "paragraph", text: "All announced times will use UAE time (UTC+4)." },
      ],
    },
    {
      id: "schedule-preparation",
      title: "Schedule & Preparation",
      blocks: [
        {
          type: "table", presentation: "timeline",
          columns: ["2026 · UAE time (UTC+4)", "Milestone"],
          rows: [
            ["22 October 2026 — Registration opens", "Submit an individual registration form. Places are limited, and confirmation will be sent through email."],
            ["31 October 2026 — In-person challenge", "Attend the Quantum Foundations challenge at Khalifa University."],
          ],
        },
        {
          type: "facts", columns: 2,
          items: [
            { label: "Audience", value: "High school students", icon: "students" },
            { label: "Participation", value: "Individual", icon: "users" },
            { label: "Venue", value: "Khalifa University", icon: "location" },
            { label: "Event timings", value: "To be confirmed", icon: "calendar" },
          ],
        },
        { type: "heading", text: "Before the event" },
        { type: "paragraph", text: "Check your email for your place confirmation, event timings, check-in details and preparation instructions. Any required equipment, software or accounts will be communicated before the event." },
        { type: "paragraph", text: "All announced times will use UAE time (UTC+4)." },
      ],
    },
  ],
};
