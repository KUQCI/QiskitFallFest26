import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";

export const metaverseCapacity = 20;
export const metaverseCapacityLabel = `${metaverseCapacity} slots only`;

/** Independent of global and other track forms. Explicitly opened by the organizer. */
export const metaverseRegistration: TrackRegistration = {
  href: "https://forms.gle/HK3r1hHCkkPUmG956",
  enabled: true,
  closed: false,
  opensOn: "2026-10-22",
  timeZone: "Asia/Dubai",
  label: "Register for the Metaverse Track",
  beforeLabel: "Registration opens 22 October",
  unavailableLabel: "Registration link to be announced",
  closedLabel: "Registration closed",
  note: `${metaverseCapacityLabel}. First come, first served. Slot confirmation will be sent by email.`,
};

export const metaverseStatusLabels: TrackStatusLabel[] = [
  { label: "Registration open", tone: "gold", icon: "calendar" },
  { label: "In-person challenge: 30 October", tone: "sky", icon: "flag" },
  { label: metaverseCapacityLabel, tone: "purple", cardPlacement: "metadata" },
];

export const metaverseVenue = "Khalifa University, MetaHub Lab";
export const metaverseTime = "9:00 AM–12:00 PM · UAE time (UTC+4)";

export const quantumMetaverseBrief: TrackBrief = {
  navigationLabel: "Quantum in the Metaverse challenge panels",
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Explore quantum computing in VR" },
        { type: "paragraph", text: `Take part in a national, single-day, in-person challenge at Khalifa University’s MetaHub Lab on 30 October 2026. ${metaverseTime}.` },
        { type: "paragraph", text: "Using provided VR headsets, participants will arrange and apply quantum gates to guide a virtual qubit along a specified path on the Bloch sphere. The challenge explores how gate choices and their order affect the qubit’s state." },
        { type: "paragraph", text: "Performance will be assessed on completion time and accuracy." },
        { type: "notice", paragraphs: [`${metaverseCapacityLabel}. Slots are first come, first served, with confirmation by email.`] },
        { type: "track-visual", kind: "bloch" },
      ],
    },
    {
      id: "how-it-works",
      title: "How It Works",
      blocks: [
        {
          type: "list", ordered: true, presentation: "compact-steps",
          items: [
            { title: "Enter the VR experience", text: "Use a provided VR headset to interact with the quantum computing application." },
            { title: "Arrange and apply quantum gates", text: "Choose gate sequences that guide the virtual qubit along the specified path on the Bloch sphere." },
            { title: "Complete the challenge", text: "Work toward the target path, balancing accuracy and completion time." },
          ],
        },
        { type: "heading", text: "Assessment" },
        { type: "paragraph", text: "Winners will be determined by completion time and accuracy. Detailed challenge instructions and scoring rules will be explained before participants begin." },
        { type: "heading", text: "Session format" },
        { type: "paragraph", text: "Participants will be organized into sessions of 12. Registration is individual." },
      ],
    },
    {
      id: "participation-registration",
      title: "Participation & Registration",
      blocks: [
        { type: "heading", text: "Registration open" },
        { type: "paragraph", text: "Register individually using your full name, institution, email address and phone number, including country code." },
        { type: "heading", text: `${metaverseCapacityLabel} — first come, first served` },
        { type: "paragraph", text: "Slots will be allocated on a first-come, first-served basis, according to registration submission time." },
        { type: "paragraph", text: "You will receive an email confirming your slot if one is allocated to you. Session timings, check-in details and preparation instructions will also be shared through email." },
        { type: "paragraph", text: "If the registration form asks why you would like to attend, that question is optional and does not affect slot allocation." },
        { type: "registration", registration: metaverseRegistration },
        { type: "heading", text: "Physical attendance" },
        { type: "paragraph", text: `This track takes place in person at Khalifa University’s MetaHub Lab on 30 October 2026. ${metaverseTime}. Participants must attend at the venue for their assigned session.` },
      ],
    },
    {
      id: "venue-schedule",
      title: "Venue & Schedule",
      blocks: [
        {
          type: "table", presentation: "timeline",
          columns: ["2026 · UAE time (UTC+4)", "Milestone"],
          rows: [
            ["22 October 2026 — Registration opens", `Register individually. ${metaverseCapacity} competitor slots will be allocated on a first-come, first-served basis.`],
            ["30 October 2026 — In-person VR challenge", `${metaverseTime}. Attend your assigned session at Khalifa University’s MetaHub Lab.`],
          ],
        },
        {
          type: "facts",
          columns: 2,
          items: [
            { label: "Capacity", value: metaverseCapacityLabel, icon: "users" },
            { label: "Venue", value: metaverseVenue, icon: "location" },
            { label: "Equipment", value: "VR headsets provided", icon: "headset" },
            { label: "Session arrangement", value: "Groups of 12 participants", icon: "users" },
          ],
        },
        { type: "heading", text: "Before your visit" },
        { type: "paragraph", text: "Check your email for your slot confirmation, assigned session, check-in details and preparation instructions. All announced times will use UAE time (UTC+4)." },
      ],
    },
  ],
};
