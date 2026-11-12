import type { TrackBrief, TrackStatusLabel, TrackBriefResource, TrackSubmission } from "./types";
import { resultsPanel } from "./results";

export const qmlDeadlineAt = "2026-10-28T23:59:00+04:00";

export const qmlDeadline = {
  "at": "2026-10-28T23:59:00+04:00",
  "label": "28 October 2026, 11:59 PM (UTC+4)"
};

export const qmlDeadlineCardLabel = "Deadline: 28 October · 11:59 PM";

export const qmlFinalPresentations = {
  "date": "2026-10-31",
  "label": "31 October 2026",
  "description": "The finals took place at Khalifa University on 31 October 2026, with 3 winning teams."
};

export const qmlSubmission: TrackSubmission = {
  "href": "https://tally.so/r/OQDOD7",
  "enabled": false,
  "closed": true,
  "deadline": {
    "at": "2026-10-28T23:59:00+04:00",
    "label": "28 October 2026, 11:59 PM (UTC+4)"
  },
  "label": "Submit your project",
  "unavailableLabel": "Submissions closed",
  "closedLabel": "Submissions closed"
};

export const qmlResources: TrackBriefResource[] = [];

export const qmlSummary = "Participants compared classical and quantum machine learning approaches to a healthcare problem.";

export const qmlStatusLabels: TrackStatusLabel[] = [];

export const quantumMachineLearningBrief: TrackBrief = {
  "navigationLabel": "Quantum Machine Learning challenge panels",
  "panels": [
  resultsPanel("quantum-machine-learning"),
  {
    "id": "overview",
    "title": "Overview",
    "blocks": [
      {
        "type": "heading",
        "text": "Quantum Machine Learning for Healthcare"
      },
      {
        "type": "paragraph",
        "text": "Participants identified a healthcare problem and established a comparable, robust classical machine learning baseline."
      },
      {
        "type": "paragraph",
        "text": "The brief asked participants to improve the classical approach with quantum techniques or develop a quantum model that rivalled or outperformed the baseline on relevant metrics. The quantum integration had to serve a clear purpose, addressing a limitation of the classical approach and supporting measurable performance gains."
      },
      {
        "type": "paragraph",
        "text": "Classical baselines were required to be chosen comparably similar to the quantum approach, whether that's through similar data preprocessing, feature engineering, or model architectures. The required deliverables were a functional codebase and comparative evaluation of both approaches."
      },
      {
        "type": "track-visual",
        "kind": "qml"
      },
      {
        "type": "comparison",
        "methods": [
          {
            "title": "Classical baseline",
            "text": "Establish reference performance on the chosen healthcare problem."
          },
          {
            "title": "Quantum approach",
            "text": "Explain and implement the quantum contribution."
          }
        ],
        "evaluation": {
          "title": "Shared evaluation",
          "text": "Compare both approaches under consistent evaluation conditions."
        }
      }
    ]
  },
  {
    "id": "challenge-evaluation",
    "title": "Challenge & Evaluation",
    "blocks": [
      {
        "type": "list",
        "ordered": true,
        "presentation": "compact-steps",
        "items": [
          {
            "title": "Define the healthcare problem",
            "text": "The brief required participants to explain the problem, its relevance, the data used and the intended outcome."
          },
          {
            "title": "Establish a strong classical baseline",
            "text": "The brief required participants to build or reproduce a suitable classical machine learning approach. Credit existing work and document its configuration and performance."
          },
          {
            "title": "Develop the quantum contribution",
            "text": "The brief required participants to use quantum techniques to improve the classical model or develop a competing quantum model. Explain why the quantum component is appropriate and which limitation it addresses."
          },
          {
            "title": "Evaluate both approaches fairly",
            "text": "The brief required participants to use appropriate metrics and consistent data and evaluation conditions. Present the results, improvements and limitations clearly."
          }
        ]
      },
      {
        "type": "heading",
        "text": "How submissions are assessed"
      },
      {
        "type": "paragraph",
        "text": "The brief specified assessment of the quantum approach’s performance relative to its classical baseline, alongside the ingenuity, depth and soundness of the chosen problem-solving approach. While the quantum approach did not have to beat the classical approach on all metrics, it had to offer a unique advantage without sacrificing other aspects of performance."
      },
      {
        "type": "note",
        "text": "Both the problem choice and problem-solving approach should be justified. Assessment also considers the correctness of the chosen approach."
      }
    ]
  },
  {
    "id": "submissions",
    "title": "Submissions",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The required final submission was a GitHub repository featuring all the code. All explanation or analysis was required in a README file."
      },
      {
        "type": "notice",
        "paragraphs": [
          "Submissions are closed. The track has finished."
        ]
      },
      {
        "type": "heading",
        "text": "Submission Guidelines"
      },
      {
        "type": "list",
        "presentation": "cards",
        "items": [
          {
            "title": "Functional codebase",
            "text": "The brief required participants to implement the classical and quantum approaches correctly. Teams had the freedom to choose their preferred implementation stack."
          },
          {
            "title": "Comparative evaluation",
            "text": "The brief required participants to compare both models’ results. The comparison had to be thorough and well-supported. Emphasize the core comparison metrics, involving both classical machine learning performance but also quantum resource/efficiency metrics."
          },
          {
            "title": "Explain your approach",
            "text": "The brief required participants to explain the healthcare problem, methods and purpose of the quantum integration, focusing on the advantages and limitations. Include explanations of any tradeoffs between other aspects of performance and the proposed advantage."
          },
          {
            "title": "Problem & Baseline Choice",
            "text": "The brief required participants to classical baselines were required to be chosen comparable to the quantum approach, whether that's through similar data preprocessing, feature engineering, or model architectures. This went hand in hand with explaining the purpose of the quantum integration."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Final presentations"
      },
      {
        "type": "paragraph",
        "text": "The finals took place at Khalifa University on 31 October 2026, with 3 winning teams."
      }
    ]
  },
  {
    "id": "resources-timeline",
    "title": "Resources & Timeline",
    "blocks": [
      {
        "type": "heading",
        "text": "Resources"
      },
      {
        "type": "links",
        "items": [
          {
            "label": "Introduction to Quantum Computing Reference",
            "href": "https://shorturl.at/Awu2Q"
          }
        ]
      },
      {
        "type": "resource-cards",
        "items": [],
        "sourceLabels": {
          "official": "Official challenge resource",
          "external": "External learning resource"
        }
      },
      {
        "type": "heading",
        "text": "Timeline"
      },
      {
        "type": "table",
        "presentation": "timeline",
        "columns": [
          "2026",
          "Milestone"
        ],
        "rows": [
          [
            "28 October 2026",
            "Final submissions closed."
          ],
          [
            "31 October 2026",
            "Finals at Khalifa University; 3 winning teams."
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Track format"
      },
      {
        "type": "paragraph",
        "text": "This was a National / Hybrid track supported by Quantum Africa."
      }
    ]
  }
]
};
