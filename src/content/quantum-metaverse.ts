import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";

/** Independent of global and other track forms. The approved URL is still needed. */
export const metaverseRegistration: TrackRegistration = {
  href: null,
  enabled: false,
  closed: false,
  opensOn: "2026-10-22",
  timeZone: "Asia/Dubai",
  label: "Register for the Metaverse Track",
  beforeLabel: "Registration opens 22 October",
  unavailableLabel: "Registration link to be announced",
  closedLabel: "Registration closed",
  note: "Limited slots. First come, first served. Slot confirmation will be sent by email.",
};

export const metaverseStatusLabels: TrackStatusLabel[] = [
  { label: "Registration opens 22 October", tone: "gold", icon: "calendar" },
  { label: "In-person challenge: 30 October", tone: "sky", icon: "flag" },
  { label: "Limited slots", tone: "purple", cardPlacement: "metadata" },
];

export const metaverseVenue = "Khalifa University, MetaHub Lab";

export const quantumMetaverseBrief: TrackBrief = {
  navigationLabel: "Quantum in the Metaverse challenge panels",
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Explore quantum computing in VR" },
        { type: "paragraph", text: "Take part in a national, single-day, in-person challenge at Khalifa University’s MetaHub Lab on 30 October 2026." },
        { type: "paragraph", text: "Using provided VR headsets, participants will arrange and apply quantum gates to guide a virtual qubit along a specified path on the Bloch sphere. The challenge explores how gate choices and their order affect the qubit’s state." },
        { type: "paragraph", text: "Performance will be assessed on completion time and accuracy." },
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
        { type: "heading", text: "Registration opens 22 October 2026" },
        { type: "paragraph", text: "Register individually using your full name, institution, email address and phone number, including country code." },
        { type: "heading", text: "Limited slots — first come, first served" },
        { type: "paragraph", text: "Slots will be allocated on a first-come, first-served basis, according to registration submission time." },
        { type: "paragraph", text: "You will receive an email confirming your slot if one is allocated to you. Session timings, check-in details and preparation instructions will also be shared through email." },
        { type: "paragraph", text: "If the registration form asks why you would like to attend, that question is optional and does not affect slot allocation." },
        { type: "registration", registration: metaverseRegistration },
        { type: "heading", text: "Physical attendance" },
        { type: "paragraph", text: "This track takes place in person at Khalifa University’s MetaHub Lab on 30 October 2026. Participants must attend at the venue." },
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
            ["22 October 2026 — Registration opens", "Register individually. Limited slots will be allocated on a first-come, first-served basis."],
            ["30 October 2026 — In-person VR challenge", "Attend your assigned session at Khalifa University’s MetaHub Lab."],
          ],
        },
        {
          type: "facts",
          items: [
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
