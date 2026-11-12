import type { TrackBrief, TrackRegistration, TrackStatusLabel } from "./types";
import { resultsPanel } from "./results";

export const metaverseRegistration: TrackRegistration = {
  "href": "https://forms.gle/HK3r1hHCkkPUmG956",
  "enabled": false,
  "closed": true,
  "opensOn": "2026-10-22",
  "timeZone": "Asia/Dubai",
  "label": "Register for the Metaverse Track",
  "beforeLabel": "Registration closed",
  "unavailableLabel": "Registration closed",
  "closedLabel": "Registration closed"
};

export const metaverseStatusLabels: TrackStatusLabel[] = [];

export const metaverseVenue = "Khalifa University, MetaHub Lab";

export const metaverseTime = "9:00 AM–12:00 PM · UAE time (UTC+4)";

export const quantumMetaverseBrief: TrackBrief = {
  "navigationLabel": "Quantum in the Metaverse challenge panels",
  "panels": [
  resultsPanel("peaked-circuits"),
  {
    "id": "overview",
    "title": "Overview",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Quantum in the Metaverse took place at Khalifa University’s MetaHub Lab on 30 October 2026, from 9:00 AM to 12:00 PM UAE time (UTC+4)."
      },
      {
        "type": "paragraph",
        "text": "Using provided VR headsets, contestants arranged and applied quantum gates to guide a virtual qubit along a specified path on the Bloch sphere. The challenge explored how gate choices and their order affected the qubit’s state."
      },
      {
        "type": "paragraph",
        "text": "Performance was assessed on completion time and accuracy."
      },
      {
        "type": "track-visual",
        "kind": "bloch"
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
            "title": "Enter the VR experience",
            "text": "Contestants used provided VR headsets to interact with the quantum computing application."
          },
          {
            "title": "Arrange and apply quantum gates",
            "text": "Contestants chose gate sequences to guide a virtual qubit along the specified path on the Bloch sphere."
          },
          {
            "title": "Complete the challenge",
            "text": "Contestants worked toward the target path, balancing accuracy and completion time."
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
          "Registration is closed. The track has finished."
        ]
      },
      {
        "type": "paragraph",
        "text": "Five contestants took part individually in person at the MetaHub Lab."
      }
    ]
  },
  {
    "id": "venue-schedule",
    "title": "Venue & Schedule",
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
            "30 October 2026",
            "9:00 AM–12:00 PM · UAE time (UTC+4) · In-person VR challenge at Khalifa University, MetaHub Lab."
          ]
        ]
      },
      {
        "type": "facts",
        "columns": 2,
        "items": [
          {
            "label": "Contestants",
            "value": "5",
            "icon": "users"
          },
          {
            "label": "Venue",
            "value": "Khalifa University, MetaHub Lab",
            "icon": "location"
          },
          {
            "label": "Equipment",
            "value": "VR headsets",
            "icon": "headset"
          },
          {
            "label": "Format",
            "value": "Individual · In person",
            "icon": "users"
          }
        ]
      }
    ]
  }
]
};
