import type { TrackBrief, TrackStatusLabel } from "./types";
import { resultsPanel } from "./results";
import { ctfCategoryPanel } from "./ctf-categories";

export const cybersecurityLinks = {
  "registration": {
    "href": "https://forms.gle/qc2R6mHAjuy6dCUD6",
    "enabled": false,
    "opensOn": "2026-10-23",
    "timeZone": "Asia/Dubai",
    "label": "Register for the CTF",
    "beforeLabel": "Registration closed",
    "unavailableLabel": "Registration closed",
    "closed": true,
    "closedLabel": "Registration closed"
  },
  "competitionPlatform": null
};

export const cybersecurityDateLabels: TrackStatusLabel[] = [];

export const quantumCybersecurityBrief: TrackBrief = {
  "navigationLabel": "Quantum Capture the Flag (QCTF) challenge panels",
  "panels": [
  resultsPanel("quantum-cybersecurity"),
  ctfCategoryPanel,
  {
    "id": "overview",
    "title": "Overview",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Quantum Capture the Flag (QCTF) was an online competition held on 7 November 2026, spanning quantum circuits, cryptography, machine learning and Peaked Circuits challenges."
      },
      {
        "type": "paragraph",
        "text": "Hackers solved challenges, worked through clues and captured flags. The QCI R&D team built the platform and all 26 challenges across five categories, highlighted in the Challenge Categories panel."
      },
      {
        "type": "track-visual",
        "kind": "ctf"
      }
    ]
  },
  {
    "id": "how-it-works",
    "title": "How It Works",
    "blocks": [
      {
        "type": "list",
        "ordered": true,
        "presentation": "compact-steps",
        "items": [
          {
            "title": "Explore the challenges",
            "text": "Hackers explored challenges across all five categories on the QCI-built platform."
          },
          {
            "title": "Investigate and solve",
            "text": "Hackers analysed each challenge and its clues, working individually or as a team."
          },
          {
            "title": "Capture flags and earn points",
            "text": "Hackers submitted flags through the platform. Entries were ranked by points and time."
          }
        ]
      }
    ]
  },
  {
    "id": "participation-registration",
    "title": "Participation",
    "blocks": [
      {
        "type": "notice",
        "paragraphs": [
          "Registration is closed. The competition has finished."
        ]
      },
      {
        "type": "paragraph",
        "text": "Participation was individual or in teams of up to four, including the team lead. Only the team lead submitted the registration form for a team."
      },
      {
        "type": "paragraph",
        "text": "178 hackers competed as 57 teams and 52 solo entrants, from 45 institutions in 8 countries."
      }
    ]
  },
  {
    "id": "schedule-preparation",
    "title": "Event timeline",
    "blocks": [
      {
        "type": "table",
        "presentation": "timeline",
        "columns": [
          "2026",
          "Milestone"
        ],
        "rows": [
          [
            "7 November 2026",
            "Online competition spanning quantum circuits, quantum cryptography and QKD, quantum ML, post-quantum cryptography, and Peaked Circuits."
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The competition platform and all challenges were built by the QCI R&D team."
      }
    ]
  }
]
};
