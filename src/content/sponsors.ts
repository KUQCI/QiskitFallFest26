import { fallFestAssets } from "./assets";
import type { Partner, PartnerReason } from "./types";

/** Only organisations with a confirmed, public role belong here. */
export const partners: Partner[] = [
  {
    name: "IBM Quantum",
    kind: "IBM Quantum",
    url: "https://www.ibm.com/quantum",
    logo: fallFestAssets.logos.ibmQuantumWordmark.src,
    status: "confirmed",
  },
  {
    name: "Khalifa University",
    kind: "Khalifa University",
    url: "https://www.ku.ac.ae",
    logo: fallFestAssets.logos.khalifaUniversityTransparent.src,
    status: "confirmed",
  },
  {
    name: "NYU Abu Dhabi Center for Quantum and Topological Systems",
    kind: "Supporter",
    url: "https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/cqts.html",
    logo: fallFestAssets.logos.nyuadCqts.src,
    status: "confirmed",
  },
];

export const partnersIntro =
  "The Qiskit Fall Fest is IBM Quantum’s annual global event series. This PLUS edition is organised by the Quantum Computing Initiative at Khalifa University.";

export const partnerReasons: PartnerReason[] = [
  {
    title: "Shape a challenge or support a track",
    description:
      "Bring a real problem into the Fall Fest, help shape a challenge, or support participants through mentorship, workshops, resources, compute, or funding. Partners can contribute in the way that best fits their expertise.",
  },
  {
    title: "Connect with emerging quantum talent",
    description:
      "Engage directly with students building across different areas of quantum computing. See how participants approach real problems, share expertise during the development period, and meet the teams behind the projects.",
  },
  {
    title: "Visibility & ecosystem connection",
    description:
      "Partners can be recognised across the event and connect with students, researchers, and other organisations during the closing showcase. The partnership also offers a way to contribute directly to the growth of the UAE’s quantum computing ecosystem.",
  },
];

/** Booth applications replace sponsorship packages for now. */
export const boothContent = {
  eyebrow: "Booths",
  title: "Want a booth at the Fall Fest?",
  description:
    "Showcase your organisation, research, or products to Fall Fest participants and the wider quantum community. Apply for a booth and the organizing team will follow up with next steps.",
  benefits: [
    {
      title: "Visibility",
      description: "Be seen by students, researchers, and organisations taking part in the Fall Fest.",
    },
    {
      title: "Ecosystem connection",
      description: "Connect with industry partners, researchers, and the wider UAE quantum computing community.",
    },
    {
      title: "Emerging quantum talent",
      description: "Meet participants and the teams behind the projects built during the Fall Fest.",
    },
  ],
  /** Mirrors the acknowledgement applicants make on the form. */
  provisions:
    "Tables and booths are provided. You bring your own materials, products, equipment, and other supplies.",
  actionLabel: "Apply now",
  /** Booth registration form. Until it is set, the button opens an email to the organizing team. */
  applicationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdC5XOteOenz_B8T5wYHQPVfvwVlrhQ6Htpa5mZBCe2BXeSiw/viewform" as
      | string
      | null,
} as const;

export const partnersPageContent = {
  eyebrow: "Partners",
  title: "Build the ecosystem with us",
  lede:
    "Bring your challenges, expertise, and ideas to the Fall Fest. Support participants throughout the development period, then join us at the closing showcase to meet the teams, explore their projects, and connect with other industry partners, researchers, and the wider quantum community.",
  reasonsEyebrow: "Why partner with us",
  reasonsTitle: "What a partnership actually gets you",
  contactTitle: "Want to sponsor the Fall Fest?",
  contactDescription:
    "Contact the organizing team. Tell us about what you or your organisation works on and how you’d like to get involved, and we’ll work with you on a sponsorship or partnership that fits your goals and the needs of the Fall Fest.",
  contactActionLabel: "Contact the organizing team",
  metadataDescription:
    "Partner with Qiskit Fall Fest 2026 through challenges, mentorship, resources, sponsorship, or a booth at the Fall Fest at Khalifa University.",
} as const;

/** @deprecated Academic partner claims are intentionally removed. */
export const academicPartners: Partner[] = [];
