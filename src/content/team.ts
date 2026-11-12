import { fallFestAssets } from "./assets";
import type { PastEvent, ResearchProject, Speaker, TeamMember } from "./types";

export const aboutContent = {
  organizersEyebrow: "About Us",
  organizersTitle: "About the Organizers",
  organizersSubtitle: "Quantum Computing Initiative",
  organizersDescription:
    "A student-led quantum computing community at Khalifa University focused on making the field more accessible and connecting students with research, industry, and opportunities to build. Through workshops, technical projects, open-source work, and events like Qiskit Fall Fest, we aim to contribute to a more connected quantum ecosystem across the UAE and beyond.",
  facultyAdvisorsEyebrow: "Faculty guidance",
  facultyAdvisorsTitle: "Faculty Advisors",
  pastEventsEyebrow: "Past events",
  pastEventsTitle: "What we’ve already built",
  pastEventsDescription:
    "A glimpse at some of the events QCI has organised at Khalifa University.",
  researchEyebrow: "Research & development",
  researchTitle: "What we’re building",
  researchDescription: "A selection of open-source and research projects from QCI.",
  speakersEyebrow: "Speakers & mentors",
  speakersTitle: "Speakers and mentors",
  speakersDescription:
    "The Fest included four workshops and an IBM Quantum speaker session.",
  speakersEmptyTitle: "Speaker and mentor archive",
  speakersEmptyDescription:
    "The completed programme is recorded in the Agenda.",
  moreFromQciLabel: "More from QCI",
  exploreProjectsLabel: "Explore QCI projects",
  followAnnouncementsLabel: "Follow for announcements",
  metadataDescription:
    "Meet the Quantum Computing Initiative at Khalifa University and explore past events and open-source projects.",
} as const;

/** Faculty advisors presented together, without ranking or profile links. */
export const facultyAdvisors = [
  {
    name: "Prof. Ibrahim Elfadel",
    bio: "Professor of Computer and Information Engineering at Khalifa University and faculty advisor to the Quantum Computing Initiative.",
  },
  {
    name: "Prof. Omar Alhussein",
    bio: "Assistant Professor of Computer Science at Khalifa University and faculty advisor to the Quantum Computing Initiative.",
  },
] as const;

export const pastEvents: PastEvent[] = [
  {
    title: "Qiskit Fall Fest 2026 (PLUS edition)",
    meta: "19 October – 7 November 2026 · Khalifa University & online",
    description: "1,200+ participations, 850+ unique participants and 76 institutions took part across six competition tracks, four workshops and an IBM Quantum speaker session, representing 14 countries.",
    image: fallFestAssets.hero.withoutTitleWeb.src,
    alt: "Qiskit Fall Fest 2026 artwork",
  },
  {
    title: "Introductory Quantum Hackathon",
    meta: "January 2026 · Khalifa University",
    description:
      "A week-long team challenge introducing students to quantum computing through workshops and tracks in Quantum AI and quantum cybersecurity.",
    image: fallFestAssets.pastEvents.hackathon.src,
    alt: "Participants at the Introductory Quantum Hackathon at Khalifa University",
  },
  {
    title: "IEEE Open Silicon Initiative Chip Design Bootcamp",
    meta: "April 2026 · Khalifa University",
    description:
      "A two-day hands-on bootcamp exploring open-source chip design, VLSI, reversible logic, and hardware concepts relevant to quantum computing.",
    image: fallFestAssets.pastEvents.bootcamp.src,
    alt: "Participants at the IEEE Open Silicon Initiative Chip Design Bootcamp",
  },
];

export const researchProjects: ResearchProject[] = [
  {
    name: "quantum-learn",
    description:
      "An open-source quantum machine learning library that simplifies hybrid QML workflows across Qiskit and PennyLane. Now listed as a community-maintained project in the Qiskit ecosystem.",
    badge: "Qiskit ecosystem",
    links: [{ label: "GitHub", url: "https://github.com/KUQCI/quantum-learn" }],
  },
  {
    name: "QML Molecular Atomization Energy",
    description:
      "A research project exploring quantum machine learning for molecular atomization-energy prediction using QM7 and variational quantum circuits.",
    links: [],
  },
  {
    name: "Quantum Circuit Visualizer",
    description: "A lightweight tool for visualizing and analyzing quantum circuits.",
    links: [],
  },
];

/** Add entries only after each speaker has agreed to be announced. */
export const speakers: Speaker[] = [];

/** @deprecated The organizing-team directory is intentionally not published. */
export const organizingTeam: TeamMember[] = [];
