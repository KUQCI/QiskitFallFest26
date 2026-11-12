import type { TrackBrief, TrackBriefBlock } from "./types";

/** Organizer-supplied post-event figures. Participations are not unique people. */
export const headlineResults = [
  { value: "1,200+", label: "Participations", detail: "1,204 attendances across workshops and tracks" },
  { value: "850+", label: "Unique participants", detail: "850 people took part" },
  { value: "76", label: "Institutions", detail: "49 universities and 27 schools took part" },
  { value: "14", label: "Countries", detail: "Countries represented in participation" },
  { value: "6", label: "Competition tracks", detail: "4 national and 2 international" },
  { value: "4", label: "Workshops", detail: "Plus an IBM Quantum speaker session" },
];

export const recapCopy = {
  eyebrow: "Fall Fest 2026 · Results",
  title: "Three weeks of learning and building",
  lede: "From 19 October to 7 November, learners joined workshops, built projects and competed across six quantum computing tracks.",
  reach: [
    { title: "A wider community", text: "1,249 unique people registered or took part. In total, 91 institutions and 16 countries were involved." },
  ],
  workshopsTitle: "Workshops & speaker session",
  workshopsDescription: "Four workshops and an IBM Quantum session connected the fundamentals with cryptography, biology, machine learning and circuits.",
};

export const workshopResults = [
  { id: "quantum-cryptography-workshop", title: "Cryptography in the Quantum Era", date: "24 October", time: "8–9 PM · UAE time (GMT+4)", attendance: "265 attendees", description: "With the KU Cybersecurity Club." },
  { id: "biology-workshops", title: "Quantum Biology workshop", date: "26 October", time: "5:30 PM · UAE time (GMT+4)", attendance: "33 attendees", description: "With AD-OMICS." },
  { id: "quantum-computing-ml-workshop", title: "Programming the Future", date: "27 October", time: "8–9:30 PM · UAE time (GMT+4)", attendance: "336 attendees", description: "An introduction to quantum computing and quantum machine learning." },
  { id: "quantum-circuit-breakers-workshop", title: "Quantum Circuit Breakers", date: "29 October", time: "8–9:30 PM · UAE time (GMT+4)", attendance: "173 attendees", description: "A quantum circuits workshop." },
  { id: "ibm-quantum-speaker-session", title: "Introduction to Quantum Computing", date: "31 October", time: "12:00–12:30 PM · UAE time (GMT+4)", attendance: "~110 students", description: "Online speaker session with Dr. Ahmed Al Qatatsheh, IBM Quantum, attended by the High School Track." },
];

type TrackResult = { line: string; blocks: TrackBriefBlock[] };
export const trackResults: Record<string, TrackResult> = {
  "quantum-cybersecurity": {
    line: "178 hackers · 45 institutions · 8 countries · 1,630 flags",
    blocks: [
      { type: "paragraph", text: "QCTF took place online on 7 November 2026. 178 hackers competed as 57 teams and 52 solo entrants, representing 45 institutions in 8 countries." },
      { type: "facts", columns: 2, items: [
        { label: "Hackers", value: "178", icon: "users" },
        { label: "Institutions", value: "45", icon: "students" },
        { label: "Countries", value: "8", icon: "location" },
        { label: "Flags captured", value: "1,630", icon: "users" },
      ] },
      { type: "paragraph", text: "1,630 flags captured · 931 failed submissions out of 2,561 (64% correct)" },
      { type: "note", text: "Flag submission totals exclude duplicate correct submissions." },
      { type: "table", columns: ["Competition totals", "Result"], rows: [
        ["Registrations", "106"], ["Teams", "57"], ["Solo entrants", "52"],
        ["Challenges", "26 across 5 categories"], ["Flag submissions", "2,561"],
        ["Correct submissions", "1,630 (64%)"], ["Failed submissions", "931"],
        ["Entries that scored", "84"], ["Entries that cleared every challenge", "28"],
      ] },
      { type: "paragraph", text: "The platform and all challenges were built by the QCI R&D team." },
      { type: "note", text: "To our knowledge, the first dedicated student-led quantum CTF in the UAE." },
    ],
  },
  "quantum-media": {
    line: "4 submissions",
    blocks: [
      { type: "facts", columns: 2, items: [{ label: "Submissions", value: "4", icon: "users" }, { label: "Partner", value: "Moth Quantum", icon: "location" }] },
      { type: "paragraph", text: "Quantum in Media received 4 submissions, using Moth Quantum’s media engines to explore creative applications of quantum computing." },
    ],
  },
  "first-qubit": {
    line: "109 students · 12 schools · 3 winners",
    blocks: [
      { type: "facts", columns: 2, items: [
        { label: "High school students", value: "109", icon: "students" }, { label: "Schools", value: "12", icon: "location" },
        { label: "Registered", value: "234", icon: "users" }, { label: "Winners", value: "3", icon: "users" },
      ] },
      { type: "paragraph", text: "The 109 high school students competed individually in a live, hackathon-style quantum circuit competition at Khalifa University on 31 October. Three winners were chosen from the competition. The track was entirely student-led and used custom learning platforms." },
      { type: "paragraph", text: "Students also attended the online Introduction to Quantum Computing session with Dr. Ahmed Al Qatatsheh from IBM Quantum." },
    ],
  },
  "quantum-machine-learning": {
    line: "21 projects · 31 participants",
    blocks: [
      { type: "facts", columns: 2, items: [
        { label: "Projects", value: "21", icon: "users" }, { label: "Participants", value: "31", icon: "users" },
        { label: "Individual projects", value: "13", icon: "users" }, { label: "Team projects", value: "8", icon: "users" },
      ] },
      { type: "paragraph", text: "Supported by Quantum Africa, the track held its finals at Khalifa University on 31 October. There were 3 winning teams." },
    ],
  },
  "chemistry-drug-discovery": {
    line: "21 teams · 70 participants · 6 finalists",
    blocks: [
      { type: "facts", columns: 2, items: [
        { label: "Initial team proposals", value: "21", icon: "users" }, { label: "Participants", value: "70", icon: "users" },
        { label: "Finalist teams", value: "6", icon: "users" }, { label: "Winning teams", value: "3", icon: "users" },
      ] },
      { type: "paragraph", text: "Hosted by ASBMB with AD-OMICS, Quantum Biology brought 6 finalist teams to the presentations on 1 November." },
    ],
  },
  "peaked-circuits": {
    line: "5 contestants",
    blocks: [
      { type: "facts", columns: 2, items: [{ label: "Contestants", value: "5", icon: "users" }, { label: "Venue", value: "MetaHub Lab", icon: "location" }] },
      { type: "paragraph", text: "Five contestants explored quantum computing in VR at Khalifa University’s MetaHub Lab on 30 October 2026." },
    ],
  },
};

export function resultsPanel(slug: string): TrackBrief["panels"][number] {
  return { id: "results", title: "Results", blocks: trackResults[slug].blocks };
}
