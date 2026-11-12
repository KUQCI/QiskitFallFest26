import type { TrackBrief, TrackReleaseLink } from "./types";
import { fallFestAssets } from "./assets";
import { resultsPanel } from "./results";

export const biologyProposalDeadline = {
  "at": "2026-10-25T23:59:00+04:00",
  "label": "25 October 2026, 11:59 PM UAE time (GMT+4)"
};

export const biologyProposalDeadlineCardLabel = "Proposal deadline: 25 October · 11:59 PM UAE time (GMT+4)";

export const biologyReleases: Record<string, TrackReleaseLink> = {
  "statement": {
    "label": "Full challenge task statement",
    "href": null,
    "enabled": false,
    "availability": "Archived challenge resource; no public download linked"
  },
  "dataset": {
    "label": "Prepared data package",
    "href": null,
    "enabled": false,
    "availability": "Archived challenge resource; no public download linked"
  },
  "notebooks": {
    "label": "Starter notebook",
    "href": null,
    "enabled": false,
    "availability": "Archived challenge resource; no public download linked"
  },
  "registration": {
    "label": "Register & submit proposal",
    "href": "https://forms.gle/WLmXeHMbmCTj92tb9",
    "enabled": false,
    "availability": "Closed"
  }
};

export const biologyTags = [
  "Interdisciplinary teams"
];

export const quantumBiologyBrief: TrackBrief = {
  "navigationLabel": "Quantum Biology challenge panels",
  "tags": [
    "Interdisciplinary teams"
  ],
  "highlights": [
    {
      "value": "4 genes",
      "label": "Selected panel"
    },
    {
      "value": "25 October",
      "label": "Initial proposal"
    },
    {
      "value": "28 October",
      "label": "Final submission"
    },
    {
      "value": "1 November",
      "label": "Final presentations"
    }
  ],
  "panels": [
  resultsPanel("chemistry-drug-discovery"),
  {
    "id": "overview",
    "title": "Overview",
    "blocks": [
      {
        "type": "heading",
        "text": "Four genes. One challenge."
      },
      {
        "type": "paragraph",
        "text": "Could just four genes help distinguish cancerous lung tissue from non-cancerous tissue? That is the question at the heart of this challenge."
      },
      {
        "type": "paragraph",
        "text": "This challenge focused on lung adenocarcinoma (LUAD). Cancer can change how active different genes are, leaving biological clues that researchers can investigate. These clues can serve as biomarkers: measurable indicators that tell us something about health or disease. Participants studied gene expression—how active particular genes are—to look for patterns associated with cancer."
      },
      {
        "type": "visual",
        "src": fallFestAssets.biologyVisuals.lung.src,
        "motion": "float"
      },
      {
        "type": "heading",
        "text": "Why look for these genes?"
      },
      {
        "type": "paragraph",
        "text": "Imagine trying to recognize a song from just a few notes. Similarly, researchers want to know whether a few carefully chosen genes carry enough information to help identify cancerous tissue. Finding these genes can help us understand how cancerous and non-cancerous tissue differ and identify useful clues for future research."
      },
      {
        "type": "visual",
        "src": fallFestAssets.biologyVisuals.notes.src,
        "motion": "wave"
      },
      {
        "type": "paragraph",
        "text": "The challenge asked participants to select four genes whose combined activity helps distinguish cancerous from non-cancerous lung samples. A gene might look promising on its own, but the real question is what it contributes to the group. If two genes tell you almost the same thing, including both may add little value. Participants were asked to search for a combination in which the genes provide useful, complementary clues."
      },
      {
        "type": "visual",
        "src": fallFestAssets.biologyVisuals.complementary.src
      },
      {
        "type": "heading",
        "text": "Where do machine learning and quantum computing come in?"
      },
      {
        "type": "paragraph",
        "text": "Choosing the right combination is a search problem: which four genes work best together? Machine learning helps assess how well a chosen set identifies cancerous and non-cancerous samples. Quantum optimization offers another way to search for that set. Participants were asked to turn gene selection into a mathematical scoring problem, solve it using a quantum approach, and compare the results fairly with classical methods."
      },
      {
        "type": "paragraph",
        "text": "The goal was twofold: identify promising genes that help distinguish cancerous from non-cancerous tissue, and investigate how effectively quantum and classical approaches can find them. Along the way, participants were asked to consider both what the genes reveal biologically and how accurately, consistently, and efficiently your methods perform. The brief did not require proof of quantum superiority."
      },
      {
        "type": "heading",
        "text": "Participation"
      },
      {
        "type": "paragraph",
        "text": "The brief welcomed students from all majors, including biology, medicine, health sciences, computer science and engineering."
      },
      {
        "type": "paragraph",
        "text": "The brief encouraged teams of 3–4 students from different majors, ideally including at least one member with a background in biological or health sciences and one with a computer science or technical background."
      },
      {
        "type": "visual",
        "src": fallFestAssets.biologyVisuals.team.src
      },
      {
        "type": "heading",
        "text": "At a glance"
      },
      {
        "type": "table",
        "columns": [
          "Item",
          "Details"
        ],
        "rows": [
          [
            "Host",
            "ASBMB"
          ],
          [
            "Initial proposal",
            "25 October 2026, 11:59 PM UAE time (GMT+4)"
          ],
          [
            "AD-OMICS workshop",
            "26 October 2026 · 5:30 PM · UAE time (GMT+4)"
          ],
          [
            "Quantum computing & machine learning workshop",
            "27 October 2026 · 8:00–9:30 PM · UAE time (GMT+4)"
          ],
          [
            "Final submission",
            "28 October 2026"
          ],
          [
            "Final presentations",
            "1 November 2026, on campus at Khalifa University"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Initial proposal stage"
      },
      {
        "type": "heading",
        "text": "Background reading"
      },
      {
        "type": "links",
        "items": [
          {
            "label": "Broad Institute: LUAD biomarkers, drug targets and risk factors",
            "href": "https://www.broadinstitute.org/news/study-finds-biomarkers-drug-targets-risk-factors-most-common-form-lung-cancer"
          },
          {
            "label": "Herbst, Morgensztern and Boshoff: The biology and management of non-small cell lung cancer",
            "href": "https://doi.org/10.1038/nature25183"
          },
          {
            "label": "National Cancer Institute: What is a biomarker?",
            "href": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/biomarker"
          }
        ]
      }
    ]
  },
  {
    "id": "challenge",
    "title": "Challenge",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The challenge was to build a minimal biomarker panel: a set of exactly four genes that helps distinguish cancerous from non-cancerous lung samples."
      },
      {
        "type": "visual",
        "src": fallFestAssets.biologyVisuals.pipeline.src
      },
      {
        "type": "list",
        "ordered": true,
        "presentation": "steps",
        "items": [
          {
            "title": "Define what makes a good panel.",
            "text": "The brief asked teams to create a scoring formula that rewards informative genes, discourages genes that repeat the same information, and enforces the four-gene requirement. The brief specified expressing this as a Quadratic Unconstrained Binary Optimization (QUBO) problem—a mathematical formulation in which each gene is either selected or left out."
          },
          {
            "title": "Implement a quantum approach.",
            "text": "The brief asked teams to implement the Quantum Approximate Optimization Algorithm (QAOA) using a quantum computing library of your choice, such as Qiskit. QAOA was required, while the choice of library was flexible. The brief requested an explanation of the circuit design, optimizer settings and how the quantum outputs map to the selected genes."
          },
          {
            "title": "Build a classical comparison.",
            "text": "The brief asked teams to apply at least one classical selection method, such as greedy selection, LASSO, mRMR, or exact search."
          },
          {
            "title": "Compare and interpret your results.",
            "text": "The brief asked teams to assess how effectively the approaches find useful panels, and explain what your selected genes might tell us about cancerous and non-cancerous tissue."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "No prior biology or quantum computing background was required. Workshops covered biology, data, quantum computing and quantum machine learning."
      },
      {
        "type": "heading",
        "text": "Technical requirements and rules"
      },
      {
        "type": "list",
        "presentation": "cards",
        "items": [
          {
            "title": "Four-gene panel:",
            "text": "The brief asked teams to select exactly four genes from the provided candidate list."
          },
          {
            "title": "Development data:",
            "text": "The brief asked teams to use only the supplied training and validation splits to develop and tune your method. The hidden test set remains with the organizers."
          },
          {
            "title": "Classical comparison:",
            "text": "The brief asked teams to include at least one classical method for comparison."
          },
          {
            "title": "Shared classifier:",
            "text": "The brief asked teams to use the organizers’ fixed scoring classifier; do not replace or modify it."
          },
          {
            "title": "Reproducibility:",
            "text": "The brief asked teams to report your random seeds and method settings so your results can be reproduced."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Quantum simulators were sufficient; real quantum hardware was optional."
      },
      {
        "type": "heading",
        "text": "Optional extensions"
      },
      {
        "type": "list",
        "presentation": "cards",
        "items": [
          {
            "title": "Noise sensitivity:",
            "text": "How do errors similar to those on real quantum hardware affect the selected panels?"
          },
          {
            "title": "Panel stability:",
            "text": "Does your method choose similar genes when the training data is slightly resampled?"
          },
          {
            "title": "Scaling:",
            "text": "How does your approach perform with a larger candidate-gene pool, if provided or approved by the organizers?"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "These investigations can strengthen your formulation, comparison, and interpretation."
      }
    ]
  },
  {
    "id": "data-resources",
    "title": "Data & Resources",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The archived data specification described sample-level gene expression profiles derived from single-cell RNA sequencing; participants did not need to process individual cells."
      },
      {
        "type": "heading",
        "text": "The challenge specification described a prepared sample-level gene expression dataset and starter notebook for shortlisted candidates, with training and validation splits. The notebook covered data loading, QUBO construction, a classical baseline and the scoring function."
      },
      {
        "type": "paragraph",
        "text": "The challenge specification described a prepared sample-level gene expression dataset and starter notebook for shortlisted candidates, with training and validation splits. The notebook covered data loading, QUBO construction, a classical baseline and the scoring function."
      },
      {
        "type": "paragraph",
        "text": "The data specification combined measurements into sample-level gene expression profiles. The brief asked teams to work with a table of gene activity in each sample, without processing individual cells."
      },
      {
        "type": "visual",
        "src": fallFestAssets.biologyVisuals.data.src
      },
      {
        "type": "list",
        "presentation": "cards",
        "items": [
          {
            "title": "Gene expression:",
            "text": "A cleaned gene expression table."
          },
          {
            "title": "Candidate genes:",
            "text": "A fixed list of candidate genes from which to choose your four-gene panel."
          },
          {
            "title": "Training set:",
            "text": "Labels identifying cancerous and non-cancerous samples, for developing your approach."
          },
          {
            "title": "Validation set:",
            "text": "Also labelled, for checking and refining your approach."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "The data specification reserved a separate hidden test set for final evaluation. This allows your panel to be assessed on samples you have not used during development. All samples from the same patient were required to remain in the same data split, helping prevent patient-specific information from leaking into evaluation."
      },
      {
        "type": "heading",
        "text": "Development data requirements"
      },
      {
        "type": "paragraph",
        "text": "Use only the supplied training and validation splits to develop and tune your method. The hidden test set remains with the organizers."
      },
      {
        "type": "heading",
        "text": "Starter materials and support"
      },
      {
        "type": "paragraph",
        "text": "The challenge specification described a prepared sample-level gene expression dataset and starter notebook for shortlisted candidates, with training and validation splits. The notebook covered data loading, QUBO construction, a classical baseline and the scoring function."
      }
    ]
  },
  {
    "id": "evaluation",
    "title": "Evaluation",
    "blocks": [
      {
        "type": "paragraph",
        "text": "A strong solution should combine a useful gene panel with a clear, reproducible comparison of quantum and classical methods."
      },
      {
        "type": "paragraph",
        "text": "The brief specified a fixed classifier to evaluate selected panels. A classifier is a model that uses the selected genes’ activity levels to predict whether a sample is cancerous or non-cancerous. Using the same classifier for everyone makes the panels easier to compare fairly."
      },
      {
        "type": "heading",
        "text": "Evaluation and comparison"
      },
      {
        "type": "list",
        "presentation": "cards",
        "items": [
          {
            "title": "Predictive performance:",
            "text": "How well does your panel distinguish cancerous from non-cancerous samples?"
          },
          {
            "title": "Search quality:",
            "text": "How often does each method find the best panel under your scoring formula?"
          },
          {
            "title": "Consistency:",
            "text": "Do results remain similar across repeated runs with different random seeds?"
          },
          {
            "title": "Computing resources:",
            "text": "How much runtime does each method require? For the quantum approach, also report circuit executions and measurement counts, known as shots."
          },
          {
            "title": "Constraint satisfaction:",
            "text": "How often does the quantum approach return exactly four genes?"
          },
          {
            "title": "Biological interpretation:",
            "text": "What is known about your selected genes, and how might that help explain your results?"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Use the same candidate genes across methods and keep computing budgets comparable. Use the same scoring formula where possible, and explain any differences. Include a random-selection baseline to show whether your approach improves on choosing genes at random."
      },
      {
        "type": "heading",
        "text": "What the brief asked for"
      },
      {
        "type": "list",
        "presentation": "cards",
        "items": [
          {
            "title": "Build something that works:",
            "text": "The brief asked teams to submit clear, reproducible code that selects a valid four-gene panel."
          },
          {
            "title": "Understand the methods:",
            "text": "The brief asked teams to explain your quantum approach and compare it fairly with classical alternatives."
          },
          {
            "title": "Explain the biology:",
            "text": "The brief asked teams to show what your selected genes mean, what the data reveals, and why the genes are useful together."
          },
          {
            "title": "Support your conclusions:",
            "text": "The brief asked teams to use evidence, repeat your experiments, and acknowledge limitations."
          },
          {
            "title": "Tell a clear story:",
            "text": "The brief asked teams to connect the challenge, your decisions, and your results."
          }
        ]
      },
      {
        "type": "notice",
        "paragraphs": [
          "The brief did not require proof of quantum superiority. A careful comparison and a well-supported biological explanation matter more than an exaggerated claim."
        ]
      }
    ]
  },
  {
    "id": "submissions",
    "title": "Submissions",
    "blocks": [
      {
        "type": "notice",
        "paragraphs": [
          "Registration and submissions are closed."
        ]
      },
      {
        "type": "paragraph",
        "text": "Teams registered by submitting a one-page PDF proposal by 25 October 2026, 11:59 PM UAE time (GMT+4). The proposal covered the challenge, approach, checks and work plan."
      },
      {
        "type": "paragraph",
        "text": "The final-submission brief requested four selected genes, reproducible code or notebooks, a results summary and biological interpretation. Final submissions closed on 28 October."
      },
      {
        "type": "paragraph",
        "text": "Six finalist teams presented at Khalifa University on 1 November; there were 3 winning teams."
      }
    ]
  },
  {
    "id": "timeline-support",
    "title": "Timeline & Support",
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
            "19 October",
            "Opening Day Premiere"
          ],
          [
            "25 October",
            "Initial proposals closed; 21 team proposals and 70 participants."
          ],
          [
            "26 October · 5:30 PM UAE time (GMT+4)",
            "AD-OMICS workshop; 33 attendees."
          ],
          [
            "27 October · 8–9:30 PM UAE time (GMT+4)",
            "Programming the Future workshop; 336 attendees."
          ],
          [
            "28 October",
            "Final submissions closed."
          ],
          [
            "1 November",
            "Six finalist teams presented at Khalifa University; 3 winning teams."
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Contact"
      },
      {
        "type": "links",
        "items": [
          {
            "label": "quantum.club@ku.ac.ae",
            "href": "mailto:quantum.club@ku.ac.ae"
          }
        ]
      }
    ]
  },
  {
    "id": "hosts",
    "title": "Hosts",
    "blocks": [],
    "showHosts": true
  }
]
};
