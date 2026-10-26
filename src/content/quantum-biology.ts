import type { TrackBrief, TrackReleaseLink } from "./types";
import { fallFestAssets } from "./assets";
import { adOmicsWorkshop, quantumComputingWorkshop } from "./workshops";

// "qiskit bio track website details (1) (1).pdf" is the sole source for challenge
// information. Do not retain additional facts or rules from the earlier handoff.
// Keep the six challenge panels, the separate Hosts tab and explicit release controls.
// User overrides: proposal deadline is 25 October, 11:59 PM UAE time (GMT+4); QAOA required with flexible library choice;
// Qiskit is an example only; use the user's implementation and reproducibility wording;
// use the supplied host profile/social links and asbmbclub@ku.ac.ae contact.
// Initial proposal submission is registration: one PDF page, using the approved form.
// Resources are shared with shortlisted candidates after initial submissions.
// Teams of 3–4 remain encouraged; the user will update the form's team-size wording.
// This contains no datasets, private organizer material, or reference solution.
// A date never enables a resource: supply its approved URL AND set enabled to true.
const pendingRelease = (label: string, availability = "To be confirmed"): TrackReleaseLink => ({
  label,
  href: null,
  enabled: false,
  availability,
});

export const biologyProposalDeadline = {
  at: "2026-10-25T23:59:00+04:00",
  label: "25 October 2026, 11:59 PM UAE time (GMT+4)",
};
export const biologyProposalDeadlineCardLabel = "Proposal deadline: 25 October · 11:59 PM UAE time (GMT+4)";

export const biologyReleases = {
  statement: pendingRelease("Full challenge task statement", "Shared with shortlisted candidates after initial submissions"),
  dataset: pendingRelease("Prepared data package", "Shared with shortlisted candidates after initial submissions"),
  notebooks: pendingRelease("Starter notebook", "Shared with shortlisted candidates after initial submissions"),
  registration: {
    label: "Register & submit proposal",
    href: "https://forms.gle/WLmXeHMbmCTj92tb9",
    enabled: true,
    availability: `One PDF page · Due ${biologyProposalDeadline.label}`,
  },
} satisfies Record<string, TrackReleaseLink>;

export const biologyTags = ["Teams of 3–4", "All majors", "No experience needed"];

export const quantumBiologyBrief: TrackBrief = {
  navigationLabel: "Quantum Biology challenge panels",
  tags: biologyTags,
  highlights: [
    { value: "4 genes", label: "Selected panel" },
    { value: "25 October", label: "Initial proposal" },
    { value: "28 October", label: "Final submission" },
    { value: "1 November", label: "Final presentations" },
  ],
  panels: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { type: "heading", text: "Four genes. One challenge." },
        { type: "paragraph", text: "Could just four genes help distinguish cancerous lung tissue from non-cancerous tissue? That is the question at the heart of this challenge." },
        { type: "paragraph", text: "This challenge focuses on lung adenocarcinoma (LUAD). Cancer can change how active different genes are, leaving biological clues that researchers can investigate. These clues can serve as biomarkers: measurable indicators that tell us something about health or disease. You will study gene expression—how active particular genes are—to look for patterns associated with cancer." },
        { type: "visual", src: fallFestAssets.biologyVisuals.lung.src, motion: "float" },
        { type: "heading", text: "Why look for these genes?" },
        { type: "paragraph", text: "Imagine trying to recognize a song from just a few notes. Similarly, researchers want to know whether a few carefully chosen genes carry enough information to help identify cancerous tissue. Finding these genes can help us understand how cancerous and non-cancerous tissue differ and identify useful clues for future research." },
        { type: "visual", src: fallFestAssets.biologyVisuals.notes.src, motion: "wave" },
        { type: "paragraph", text: "Your challenge is to select four genes whose combined activity helps distinguish cancerous from non-cancerous lung samples. A gene might look promising on its own, but the real question is what it contributes to the group. If two genes tell you almost the same thing, including both may add little value. You will search for a combination in which the genes provide useful, complementary clues." },
        { type: "visual", src: fallFestAssets.biologyVisuals.complementary.src },
        { type: "heading", text: "Where do machine learning and quantum computing come in?" },
        { type: "paragraph", text: "Choosing the right combination is a search problem: which four genes work best together? Machine learning helps assess how well a chosen set identifies cancerous and non-cancerous samples. Quantum optimization offers another way to search for that set. You will turn gene selection into a mathematical scoring problem, solve it using a quantum approach, and compare the results fairly with classical methods." },
        { type: "paragraph", text: "Your goal is twofold: identify promising genes that help distinguish cancerous from non-cancerous tissue, and investigate how effectively quantum and classical approaches can find them. Along the way, you will consider both what the genes reveal biologically and how accurately, consistently, and efficiently your methods perform. You do not need to prove that quantum is better to do well." },
        { type: "heading", text: "Who can join?" },
        { type: "paragraph", text: "Students from all majors are welcome! Whether you study biology, medicine, health sciences, computer science, engineering, or something entirely different, you can contribute." },
        { type: "paragraph", text: "We encourage teams of 3–4 students from different majors, ideally including at least one member with a background in biological or health sciences and one with a computer science or technical background." },
        { type: "paragraph", text: "New to biology or computing? Don’t let that stop you. We’ll provide an AD-OMICS biology and data workshop, alongside QCI’s introduction to quantum computing and quantum machine learning. You don’t need to arrive as an expert in both—come ready to learn and collaborate." },
        { type: "visual", src: fallFestAssets.biologyVisuals.team.src },
        { type: "heading", text: "At a glance" },
        { type: "table", columns: ["Item", "Details"], rows: [
          ["Host", "ASBMB"],
          ["Registration", "Your initial proposal submission registers you for this track."],
          ["Initial proposal", biologyProposalDeadline.label],
          ["AD-OMICS workshop", `${adOmicsWorkshop.dateLabel} · ${adOmicsWorkshop.time}`],
          ["Quantum computing & machine learning workshop", `${quantumComputingWorkshop.dateLabel} · ${quantumComputingWorkshop.time}`],
          ["Final submission", "28 October 2026"],
          ["Final presentations", "1 November 2026, on campus at Khalifa University"],
        ] },
        { type: "heading", text: "Registration & initial proposal" },
        { type: "paragraph", text: `Submit your one-page proposal through the initial-submission form to register for the Quantum Biology track. Initial proposals are due no later than ${biologyProposalDeadline.label}. Semifinalists will be selected to continue.` },
        { type: "releases", presentation: "cta", columns: ["Registration & initial submission", "Deadline"], items: [biologyReleases.registration] },
        { type: "heading", text: "Background reading" },
        { type: "links", items: [
          { label: "Broad Institute: LUAD biomarkers, drug targets and risk factors", href: "https://www.broadinstitute.org/news/study-finds-biomarkers-drug-targets-risk-factors-most-common-form-lung-cancer" },
          { label: "Herbst, Morgensztern and Boshoff: The biology and management of non-small cell lung cancer", href: "https://doi.org/10.1038/nature25183" },
          { label: "National Cancer Institute: What is a biomarker?", href: "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/biomarker" },
        ] },
      ],
    },
    {
      id: "challenge",
      title: "Challenge",
      blocks: [
        { type: "paragraph", text: "Your mission is to build a minimal biomarker panel: a set of exactly four genes that helps distinguish cancerous from non-cancerous lung samples." },
        { type: "visual", src: fallFestAssets.biologyVisuals.pipeline.src },
        { type: "list", ordered: true, presentation: "steps", items: [
          { title: "Define what makes a good panel.", text: "Create a scoring formula that rewards informative genes, discourages genes that repeat the same information, and enforces the four-gene requirement. You will express this as a Quadratic Unconstrained Binary Optimization (QUBO) problem—a mathematical formulation in which each gene is either selected or left out." },
          { title: "Implement a quantum approach.", text: "Implement the Quantum Approximate Optimization Algorithm (QAOA) using a quantum computing library of your choice, such as Qiskit. QAOA is required, while the choice of library is flexible. Explain your circuit design, optimizer settings and how the quantum outputs map to the selected genes." },
          { title: "Build a classical comparison.", text: "Apply at least one classical selection method, such as greedy selection, LASSO, mRMR, or exact search." },
          { title: "Compare and interpret your results.", text: "Assess how effectively the approaches find useful panels, and explain what your selected genes might tell us about cancerous and non-cancerous tissue." },
        ] },
        { type: "paragraph", text: "No prior biology or quantum computing background is required. Workshops, starter materials, and mentors will help you get started." },
        { type: "heading", text: "Technical requirements and rules" },
        { type: "list", presentation: "cards", items: [
          { title: "Four-gene panel:", text: "Select exactly four genes from the provided candidate list." },
          { title: "Development data:", text: "Use only the supplied training and validation splits to develop and tune your method. The hidden test set remains with the organizers." },
          { title: "Classical comparison:", text: "Include at least one classical method for comparison." },
          { title: "Shared classifier:", text: "Use the organizers’ fixed scoring classifier; do not replace or modify it." },
          { title: "Reproducibility:", text: "Report your random seeds and method settings so your results can be reproduced." },
        ] },
        { type: "paragraph", text: "Quantum simulators are sufficient for this challenge. Real quantum hardware is optional. Hardware access arrangements and usage limits are to be confirmed." },
        { type: "heading", text: "Optional extensions" },
        { type: "list", presentation: "cards", items: [
          { title: "Noise sensitivity:", text: "How do errors similar to those on real quantum hardware affect the selected panels?" },
          { title: "Panel stability:", text: "Does your method choose similar genes when the training data is slightly resampled?" },
          { title: "Scaling:", text: "How does your approach perform with a larger candidate-gene pool, if provided or approved by the organizers?" },
        ] },
        { type: "paragraph", text: "These investigations can strengthen your formulation, comparison, and interpretation." },
      ],
    },
    {
      id: "data-resources",
      title: "Data & Resources",
      blocks: [
        { type: "notice", paragraphs: ["Resources, including the prepared dataset and starter notebook, will be provided to shortlisted candidates after initial submissions.", "Workshop access details and the mentor contact channel are to be confirmed."] },
        { type: "heading", text: "What you will receive" },
        { type: "paragraph", text: "Shortlisted candidates will receive a prepared dataset based on single-cell RNA sequencing, a technique that measures gene activity in individual cells." },
        { type: "paragraph", text: "To make the data easier to work with, the organizers have combined these measurements into sample-level gene expression profiles. You will work with a table showing how active each gene is in each sample—you do not need to process individual cells yourself." },
        { type: "visual", src: fallFestAssets.biologyVisuals.data.src },
        { type: "list", presentation: "cards", items: [
          { title: "Gene expression:", text: "A cleaned gene expression table." },
          { title: "Candidate genes:", text: "A fixed list of candidate genes from which to choose your four-gene panel." },
          { title: "Training set:", text: "Labels identifying cancerous and non-cancerous samples, for developing your approach." },
          { title: "Validation set:", text: "Also labelled, for checking and refining your approach." },
        ] },
        { type: "paragraph", text: "The organizers will keep a separate hidden test set for final evaluation. This allows your panel to be assessed on samples you have not used during development. All samples from the same patient will remain in the same data split, helping prevent patient-specific information from leaking into evaluation." },
        { type: "heading", text: "How to use the data" },
        { type: "paragraph", text: "Use only the supplied training and validation splits to develop and tune your method. The hidden test set remains with the organizers." },
        { type: "paragraph", text: "The policy on external datasets is to be confirmed." },
        { type: "heading", text: "Starter materials and support" },
        { type: "paragraph", text: "After initial submissions, shortlisted candidates will receive the full challenge task statement, the prepared data package, and a starter notebook covering data loading, QUBO construction, a classical baseline, and the scoring function. Workshops will introduce biology and data, quantum computing and quantum machine learning, with mentor support during the development period." },
        { type: "heading", text: "Resources" },
        { type: "releases", columns: ["Resource", "Availability"], items: [biologyReleases.statement, biologyReleases.dataset, biologyReleases.notebooks] },
      ],
    },
    {
      id: "evaluation",
      title: "Evaluation",
      blocks: [
        { type: "paragraph", text: "A strong solution should combine a useful gene panel with a clear, reproducible comparison of quantum and classical methods." },
        { type: "paragraph", text: "The organizers will use a fixed classifier to evaluate selected panels. A classifier is a model that uses the selected genes’ activity levels to predict whether a sample is cancerous or non-cancerous. Using the same classifier for everyone makes the panels easier to compare fairly." },
        { type: "notice", paragraphs: ["The final performance metric, judging rubric, and scoring weights are to be confirmed."] },
        { type: "heading", text: "Evaluation and comparison" },
        { type: "list", presentation: "cards", items: [
          { title: "Predictive performance:", text: "How well does your panel distinguish cancerous from non-cancerous samples?" },
          { title: "Search quality:", text: "How often does each method find the best panel under your scoring formula?" },
          { title: "Consistency:", text: "Do results remain similar across repeated runs with different random seeds?" },
          { title: "Computing resources:", text: "How much runtime does each method require? For the quantum approach, also report circuit executions and measurement counts, known as shots." },
          { title: "Constraint satisfaction:", text: "How often does the quantum approach return exactly four genes?" },
          { title: "Biological interpretation:", text: "What is known about your selected genes, and how might that help explain your results?" },
        ] },
        { type: "paragraph", text: "Use the same candidate genes across methods and keep computing budgets comparable. Use the same scoring formula where possible, and explain any differences. Include a random-selection baseline to show whether your approach improves on choosing genes at random." },
        { type: "heading", text: "What makes a strong submission?" },
        { type: "list", presentation: "cards", items: [
          { title: "Build something that works:", text: "Submit clear, reproducible code that selects a valid four-gene panel." },
          { title: "Understand the methods:", text: "Explain your quantum approach and compare it fairly with classical alternatives." },
          { title: "Explain the biology:", text: "Show what your selected genes mean, what the data reveals, and why the genes are useful together." },
          { title: "Support your conclusions:", text: "Use evidence, repeat your experiments, and acknowledge limitations." },
          { title: "Tell a clear story:", text: "Connect the challenge, your decisions, and your results." },
        ] },
        { type: "notice", paragraphs: ["You do not need to prove that quantum is better to do well. A careful comparison and a well-supported biological explanation matter more than an exaggerated claim."] },
      ],
    },
    {
      id: "submissions",
      title: "Submissions",
      blocks: [
        { type: "notice", paragraphs: ["Your initial proposal submission is your registration for the Quantum Biology track."] },
        { type: "heading", text: "Initial proposal - due 25 October 2026" },
        { type: "paragraph", text: `Submit your one-page proposal at registration, no later than ${biologyProposalDeadline.label}. Semifinalists will be selected to continue.` },
        { type: "paragraph", text: "Keep it short: one PDF page. Include your names and team name and cover these four points, briefly:" },
        { type: "list", ordered: true, presentation: "steps", items: [
          { title: "The challenge", text: "What you want to achieve, and why a small gene panel could identify cancerous tissue." },
          { title: "Your approach", text: "How you’d choose useful genes, where quantum optimization fits, and how you’d compare it to a classical method." },
          { title: "Your checks", text: "How you’d assess whether your panel works, and investigate what the selected genes mean biologically." },
          { title: "Your work plan", text: "Your contribution or team responsibilities, main steps, and what you hope to learn in the workshops." },
        ] },
        { type: "releases", presentation: "cta", columns: ["Registration & initial submission", "Deadline"], items: [biologyReleases.registration] },
        { type: "note", text: "The form asks for a link to your PDF. Upload it to cloud storage, allow anyone with the link to view it, and check that it opens without requesting access." },
        { type: "paragraph", text: "Resources, including the prepared dataset and starter notebook, will be provided to shortlisted candidates after initial submissions." },
        { type: "heading", text: "Final submission - due 28 October 2026" },
        { type: "paragraph", text: "Your work should make it clear which genes you selected, how you selected them, and what your results show." },
        { type: "notice", paragraphs: ["Proposed final-submission checklist — final requirements to be confirmed."] },
        { type: "list", presentation: "cards", items: [
          { title: "Selected genes:", text: "Your selected four genes, with identifiers matching the provided dataset." },
          { title: "Code or notebook:", text: "Include the QUBO formulation, quantum method, and classical comparison." },
          { title: "Results summary:", text: "Cover predictive performance, repeated runs, and computing resources." },
          { title: "Biological explanation:", text: "A short explanation of the selected genes and their possible biological relevance." },
          { title: "Reproducibility requirements:", text: "Provide runnable code, dependency versions, backend details, execution settings and instructions sufficient to reproduce your results." },
        ] },
        { type: "paragraph", text: "Final-submission platform, file formats, naming requirements, and length limits are to be confirmed." },
        { type: "heading", text: "Finalist presentations - 1 November 2026" },
        { type: "paragraph", text: "Shortlisted teams will present their work to a judging panel on campus at Khalifa University. Presentation duration, required materials, and any remote participation arrangements are to be confirmed." },
      ],
    },
    {
      id: "timeline-support",
      title: "Timeline & Support",
      blocks: [
        { type: "table", presentation: "timeline", columns: ["Date (2026)", "Milestone"], rows: [
          ["19 October, 6:00 PM", "Premiere: Introduction to the event and biology track."],
          ["20 October", "Registration opens through the initial-submission form: Submit your one-page proposal to register."],
          [biologyProposalDeadline.label, "Initial proposals due; semifinalists will be selected to continue."],
          [`${adOmicsWorkshop.dateLabel} · ${adOmicsWorkshop.time}`, "AD-OMICS biology and data workshop."],
          [`${quantumComputingWorkshop.dateLabel} · ${quantumComputingWorkshop.time}`, `${quantumComputingWorkshop.title}: Introduction to quantum computing and quantum machine learning, by ${quantumComputingWorkshop.organizer}. ${quantumComputingWorkshop.venue}.`],
          ["28 October", "Final submissions due; finalist selection follows."],
          ["1 November", "On-campus final presentations at Khalifa University."],
        ] },
        { type: "note", text: "Resources, including the prepared dataset and starter notebook, will be provided to shortlisted candidates after initial submissions." },
        { type: "heading", text: "Workshops and support" },
        { type: "paragraph", text: "The AD-OMICS biology workshop will introduce the disease context, dataset and interpretation of gene expression. QCI’s Programming the Future workshop introduces quantum computing and quantum machine learning. Starter materials and mentor support will help teams develop their approach." },
        { type: "paragraph", text: "Workshop access details and the mentor contact channel are to be confirmed. No prior expertise in both biology and quantum computing is assumed." },
        { type: "heading", text: "Contact" },
        { type: "links", items: [
          { label: "asbmbclub@ku.ac.ae", href: "mailto:asbmbclub@ku.ac.ae" },
        ] },
        { type: "heading", text: "Cash prizes" },
        { type: "paragraph", presentation: "spotlight", text: "Make it to the finalist stage for a chance to win cash prizes! Prize amounts and award details will be announced soon." },
      ],
    },
    {
      id: "hosts",
      title: "Hosts",
      blocks: [],
      showHosts: true,
    },
  ],
};
