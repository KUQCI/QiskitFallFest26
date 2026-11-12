import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";
import { resultsPanel } from "./results";

export const foundationsRegistration: TrackRegistration = {
  "href": "https://forms.gle/hyKcfkuXYmFnb7TE8",
  "enabled": false,
  "closed": true,
  "opensOn": "2026-10-22",
  "timeZone": "Asia/Dubai",
  "label": "Register for Quantum Foundations",
  "beforeLabel": "Registration closed",
  "unavailableLabel": "Registration closed",
  "closedLabel": "Registration closed"
};

export const foundationsStatusLabels: TrackStatusLabel[] = [];

export const quantumFoundationsBrief: TrackBrief = {
  "navigationLabel": "Quantum Foundations challenge panels",
  "panels": [
  resultsPanel("first-qubit"),
  {
    "id": "overview",
    "title": "Overview",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Quantum Foundations was a single-day, in-person challenge for high school students at Khalifa University on 31 October 2026."
      },
      {
        "type": "paragraph",
        "text": "Participants competed individually, completing unfinished quantum circuits by identifying and inserting the missing gates needed to achieve a specified target output or quantum state."
      },
      {
        "type": "paragraph",
        "text": "The challenge explored quantum gates, circuit structure and how the order of operations affected a circuit’s behaviour."
      },
      {
        "type": "circuit-motif"
      }
    ]
  },
  {
    "id": "the-challenge",
    "title": "The Challenge",
    "blocks": [
      {
        "type": "list",
        "ordered": true,
        "presentation": "compact-steps",
        "items": [
          {
            "title": "Understand the target",
            "text": "Students examined an incomplete circuit and its intended output or quantum state."
          },
          {
            "title": "Fill in the missing gates",
            "text": "Students identified the quantum operations needed to complete the circuit."
          },
          {
            "title": "Complete the circuit",
            "text": "Students arranged the missing gates to meet the specified target."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "The entirely student-led track used custom learning platforms and a live hackathon-style quantum circuit competition."
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
          "Registration is closed. The track has finished."
        ]
      },
      {
        "type": "paragraph",
        "text": "Participation was individual and open to high school students. 234 registered, and 109 students from 12 schools competed in person. Three winners were chosen from the competition."
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
            "31 October 2026",
            "The in-person Quantum Foundations competition took place at Khalifa University."
          ],
          [
            "31 October · 12:00–12:30 PM UAE time (GMT+4)",
            "The High School Track attended the online IBM Quantum speaker session with Dr. Ahmed Al Qatatsheh."
          ]
        ]
      }
    ]
  }
]
};
