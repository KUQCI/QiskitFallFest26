import type { Phase } from "./types";

export const formatSectionCopy = {
  "compact": {
    "eyebrow": "How it works",
    "title": "Four phases, three weeks of quantum computing",
    "lede": "From the opening premiere to national finals and international challenges, learners built, competed and shared their work.",
    "link": {
      "label": "Explore the event recap",
      "href": "/schedule/"
    }
  },
  "detailed": {
    "eyebrow": "How it works",
    "title": "From kickoff to results",
    "lede": "The Fest ran from 19 October to 7 November 2026, with national challenges and finals across 30 October–1 November and international challenges on 7 November."
  }
};

export const schedulePageContent = {
  "eyebrow": "How it works",
  "title": "How the Fest unfolded",
  "lede": "The Fest ran from 19 October to 7 November 2026, with national challenges and finals across 30 October–1 November and international challenges on 7 November.",
  "metadataDescription": "A recap of Qiskit Fall Fest 2026: opening premiere, workshops, national finals and international challenges, 19 October–7 November."
};

export const phases: Phase[] = [
  {
    "slug": "opening",
    "label": "Phase 01",
    "title": "Opening Day Premiere",
    "dateRange": "19 October 2026 · 6:00 PM",
    "summary": "The Opening Day Premiere introduced the Fest and its six tracks at Khalifa University and online on 19 October 2026.",
    "status": "confirmed",
    "sessions": [
      {
        "title": "Welcome & Fall Fest Briefing",
        "description": "The kickoff introduced the event structure and development period.",
        "status": "confirmed"
      },
      {
        "title": "Track Introductions",
        "description": "Participants explored the four national and two international tracks.",
        "status": "confirmed"
      }
    ]
  },
  {
    "slug": "hacking",
    "label": "Phase 02",
    "title": "Development Period",
    "dateRange": "19 October – 1 November 2026",
    "summary": "Participants developed projects with workshops, technical sessions and guidance. Four workshops covered cryptography, biology, quantum computing and machine learning, and circuits.",
    "status": "confirmed",
    "sessions": [
      {
        "title": "Workshops & Guidance",
        "description": "The four workshops recorded 265, 33, 336 and 173 attendees respectively.",
        "status": "confirmed"
      },
      {
        "title": "Challenge Work",
        "description": "Participants built projects and prepared competition entries across six tracks.",
        "status": "confirmed"
      },
      {
        "title": "Intermediate Submissions",
        "description": "Quantum Biology received 21 initial team proposals involving 70 participants.",
        "status": "confirmed"
      }
    ]
  },
  {
    "slug": "closing",
    "label": "Phase 03",
    "title": "Closing Showcase",
    "dateRange": "31 October – 1 November 2026",
    "summary": "The national challenges and finals took place across 30 October, 31 October and 1 November. Quantum Biology brought 6 finalist teams to its presentations; QML held its finals at KU, while Foundations and Metaverse ran in-person challenges.",
    "status": "confirmed",
    "sessions": [
      {
        "title": "Quantum Biology finals",
        "description": "Six finalist teams presented on 1 November; there were 3 winning teams.",
        "status": "confirmed"
      },
      {
        "title": "Quantum Machine Learning finals",
        "description": "The track received 21 projects from 31 participants and held finals on 31 October, with 3 winning teams.",
        "status": "confirmed"
      },
      {
        "title": "Foundations & Metaverse challenges",
        "description": "Foundations brought 109 high school students to KU on 31 October, with 3 winners. Metaverse had 5 contestants at the MetaHub Lab on 30 October.",
        "status": "confirmed"
      },
      {
        "title": "IBM Quantum speaker session",
        "description": "Dr. Ahmed Al Qatatsheh gave an online Introduction to Quantum Computing session on 31 October, attended by the High School Track (~110 students).",
        "status": "confirmed"
      }
    ]
  },
  {
    "slug": "international-challenges",
    "label": "Phase 04",
    "title": "International Challenges",
    "dateRange": "7 November 2026",
    "summary": "The international challenges concluded on 7 November. QCTF brought together 178 players; Quantum in Media received 4 submissions.",
    "status": "confirmed",
    "sessions": [
      {
        "title": "Quantum Cybersecurity CTF",
        "description": "178 players represented 45 institutions in 8 countries and captured 1,630 flags. The QCI R&D team built the platform and all challenges.",
        "status": "confirmed"
      },
      {
        "title": "Quantum in Media",
        "description": "The creative media track with Moth Quantum received 4 submissions.",
        "status": "confirmed"
      }
    ]
  }
];

const homePhaseSummaries: Record<string, string> = {
  "opening": "The premiere introduced six tracks and brought the community together on 19 October.",
  "hacking": "Four workshops recorded 265, 33, 336 and 173 attendees, alongside project development.",
  "closing": "National events included Biology’s 6 finalist teams, QML finals, 109 Foundations students and 5 Metaverse contestants.",
  "international-challenges": "QCTF recorded 178 players and 1,630 flags; Quantum in Media received 4 submissions."
};

export const homePhases: Phase[] = phases.map(phase => ({ ...phase, summary: homePhaseSummaries[phase.slug], sessions: [] }));
