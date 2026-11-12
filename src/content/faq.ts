import type { FaqItem } from "./types";

export const faqPageContent = {
  "eyebrow": "FAQ",
  "title": "Questions about the Fest",
  "lede": "Qiskit Fall Fest 2026 concluded on 7 November. Here are the results, participation figures and a recap of how the event ran.",
  "contactTitle": "Still have a question?",
  "contactDescription": "Contact the organizing team with questions about the event or its results.",
  "contactActionLabel": "Ask a question",
  "metadataDescription": "Qiskit Fall Fest 2026 results and FAQ: participation, workshops, track formats and finals."
} as const;

export const faqs: FaqItem[] = [
  {
    "category": "The Fest",
    "question": "How many people took part?",
    "answer": "The Fest recorded 1,204 participations (1,200+) across workshops and tracks, with 850 unique participants (850+). 76 institutions took part: 49 universities and 27 schools, across 14 countries. In total, 1,249 unique people registered or took part, with 91 institutions and 16 countries involved. About half of participants came from outside Khalifa University, and 242 people took part in two or more events."
  },
  {
    "category": "The Fest",
    "question": "When did the Fall Fest take place?",
    "answer": "The Fest ran from 19 October to 7 November 2026. The Opening Day Premiere was on 19 October, the closing showcase on 31 October–1 November, and the international challenges on 7 November."
  },
  {
    "category": "Getting started",
    "question": "Is registration still open?",
    "answer": "No. The Fall Fest has concluded, and registration and submissions are closed. The track results and archived challenge briefs remain available."
  },
  {
    "category": "Getting started",
    "question": "Did participants need prior quantum experience?",
    "answer": "The tracks covered both introductory and specialized applications. Quantum Foundations introduced 109 high school students to quantum circuits, and the workshops covered cryptography, biology, quantum computing and machine learning."
  },
  {
    "category": "Format",
    "question": "What workshops and speaker sessions were held?",
    "answer": "Four workshops were held: Cryptography in the Quantum Era (265 attendees), Quantum Biology with AD-OMICS (33), Programming the Future (336), and Quantum Circuit Breakers (173). Dr. Ahmed Al Qatatsheh from IBM Quantum also gave an online Introduction to Quantum Computing session to the High School Track (~110 students)."
  },
  {
    "category": "Eligibility",
    "question": "Did participants have to be Khalifa University students?",
    "answer": "No. About half of participants came from outside Khalifa University. Participants represented 76 institutions and 14 countries."
  },
  {
    "category": "Format",
    "question": "How did national and international tracks differ?",
    "answer": "The four national tracks were Foundations, Machine Learning, Biology and Metaverse, with in-person challenges or finals at Khalifa University. The two international tracks, Quantum Capture the Flag (QCTF) and Quantum in Media, were online."
  },
  {
    "category": "Getting started",
    "question": "Did participants compete individually or in teams?",
    "answer": "Formats varied by track. Foundations and Metaverse were individual challenges. QML received 13 individual and 8 team projects; Biology received 21 initial team proposals. QCTF hackers competed as 57 teams and 52 solo entrants."
  },
  {
    "category": "Format",
    "question": "What happened at the finals?",
    "answer": "QML held its finals at KU on 31 October and had 3 winning teams. Six Biology finalist teams presented on 1 November, with 3 winning teams. Foundations held its circuit competition on 31 October and had 3 winners."
  },
  {
    "category": "The Fest",
    "question": "What is the Qiskit Fall Fest?",
    "answer": "Qiskit Fall Fest is IBM Quantum’s annual global event series. This PLUS edition was organized by the Quantum Computing Initiative at Khalifa University."
  },
  {
    "category": "The Fest",
    "question": "Where can I find the track results?",
    "answer": "Open any track on the Tracks page. Its Results panel appears first, followed by the archived challenge brief."
  }
];
