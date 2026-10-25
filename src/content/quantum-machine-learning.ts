import type { TrackBrief, TrackBriefResource, TrackStatusLabel, TrackSubmission } from "./types";

/** Canonical instant; all QML deadline labels and Agenda dates derive from this value. */
export const qmlDeadlineAt = "2026-10-28T23:59:00+04:00";
const deadlineDate = new Date(qmlDeadlineAt);
const dateLabel = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Dubai" }).format(deadlineDate);
const shortDateLabel = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", timeZone: "Asia/Dubai" }).format(deadlineDate);
const timeLabel = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Dubai" }).format(deadlineDate);
export const qmlDeadline = { at: qmlDeadlineAt, label: `${dateLabel}, ${timeLabel} UAE time (UTC+4)` };
export const qmlDeadlineCardLabel = `Deadline: ${shortDateLabel} · ${timeLabel} UAE`;
export const qmlSummary = "Choose a healthcare problem, establish a strong classical machine learning baseline, and use quantum techniques to achieve measurable improvements.";
export const qmlFinalPresentations = {
  date: "2026-10-31",
  label: "31 October 2026",
  description: "Shortlisted individuals will be invited to give final presentations on 31 October 2026.",
};

/** Add only an approved form URL, then explicitly enable it. Never use the interest form. */
export const qmlSubmission: TrackSubmission = {
  href: "https://tally.so/r/OQDOD7",
  enabled: true,
  closed: false,
  deadline: qmlDeadline,
  label: "Submit your project",
  unavailableLabel: "Submission form coming soon",
  closedLabel: "Submissions closed",
};

/** Approved URLs only. Official challenge files remain distinct from external learning links. */
export const qmlResources: TrackBriefResource[] = [];

export const qmlStatusLabels: TrackStatusLabel[] = [
  { label: "Challenge live", tone: "purple" },
  { label: qmlSubmission.unavailableLabel, tone: "gold" },
];

export const quantumMachineLearningBrief: TrackBrief = {
  navigationLabel: "Quantum Machine Learning challenge panels",
  panels: [
    {
      id: "overview", title: "Overview", blocks: [
        { type: "heading", text: "Quantum Machine Learning for Healthcare" },
        { type: "paragraph", text: "Identify a specific healthcare problem and establish a comparable & robust classical machine learning baseline to address it." },
        { type: "paragraph", text: "Use quantum techniques to improve the classical approach or develop a quantum model that outperforms the baseline on relevant metrics. The quantum integration must serve a clear purpose, addressing a limitation of the classical approach and supporting measurable performance gains." },
        { type: "paragraph", text: "Classical baselines should be chosen comparably similar to the quantum approach, whether that's through similar data preprocessing, feature engineering, or model architectures. Deliver a functional codebase and a comparative evaluation demonstrating both approaches." },
        { type: "notice", paragraphs: ["The challenge is live. You can begin developing your project now. The submission form will be added soon.", qmlFinalPresentations.description] },
        { type: "track-visual", kind: "qml" },
        {
          type: "comparison",
          methods: [
            { title: "Classical baseline", text: "Establish reference performance on the chosen healthcare problem." },
            { title: "Quantum approach", text: "Explain and implement the quantum contribution." },
          ],
          evaluation: { title: "Shared evaluation", text: "Compare both approaches under consistent evaluation conditions." },
        },
      ],
    },
    {
      id: "challenge-evaluation", title: "Challenge & Evaluation", blocks: [
        { type: "list", ordered: true, presentation: "compact-steps", items: [
          { title: "Define the healthcare problem", text: "Explain the problem, its relevance, the data used and the intended outcome." },
          { title: "Establish a strong classical baseline", text: "Build or reproduce a suitable classical machine learning approach. Credit existing work and document its configuration and performance." },
          { title: "Develop the quantum contribution", text: "Use quantum techniques to improve the classical model or develop a quantum model. Explain why the quantum component is appropriate and which limitation it addresses." },
          { title: "Evaluate both approaches fairly", text: "Use appropriate metrics and consistent data and evaluation conditions. Present the results, improvements and limitations clearly." },
        ] },
        { type: "heading", text: "How submissions are assessed" },
        { type: "paragraph", text: "Submissions will be assessed on the quantum approach’s performance relative to its classical baseline, alongside the ingenuity, depth and soundness of the chosen problem-solving approach." },
        { type: "note", text: "Both the problem choice and problem-solving approach should be justified. Assessment also considers the correctness of the chosen approach." },
      ],
    },
    {
      id: "submissions", title: "Submissions", blocks: [
        { type: "paragraph", text: "The challenge is live, and participants may begin working now." },
        { type: "submission-control", submission: qmlSubmission },
        { type: "heading", text: "Prepare your submission" },
        { type: "list", presentation: "cards", items: [
          { title: "Functional codebase", text: "Implement the classical and quantum approaches correctly." },
          { title: "Comparative evaluation", text: "Compare both models’ results. The comparison should be thorough and well-supported." },
          { title: "Explain your approach", text: "Explain the healthcare problem, methods and purpose of the quantum integration." },
          { title: "Problem & Baseline Choice", text: "Classical baselines should be chosen comparable to the quantum approach, \
            whether that's through similar data preprocessing, feature engineering, \
            or model architectures. This goes hand in hand with explaining the purpose of the quantum integration." },
        ] },
        { type: "note", text: "Check this panel for the submission form and upload instructions." },
        { type: "heading", text: "Final presentations" },
        { type: "paragraph", text: qmlFinalPresentations.description },
      ],
    },
    {
      id: "resources-timeline", title: "Resources & Timeline", blocks: [
        { type: "heading", text: "Resources" },
        {
          type: "links",
          items: [
            { 
              label: "Introduction to Quantum Computing Reference", 
              href: "https://shorturl.at/Awu2Q" 
            }
          ]
        },
        { type: "resource-cards", items: qmlResources, sourceLabels: { official: "Official challenge resource", external: "External learning resource" } },
        { type: "heading", text: "Timeline" },
        { type: "table", presentation: "timeline", columns: ["2026 · UAE time (UTC+4)", "Milestone"], rows: [
          ["Now — Challenge live", "Choose your healthcare problem and begin developing your classical baseline and quantum approach."],
          [`${qmlDeadline.label} — Submission deadline`, "Submit your project through the official submission form before the deadline."],
          [`${qmlFinalPresentations.label} — Final presentations`, qmlFinalPresentations.description],
        ] },
        { type: "heading", text: "Track format" },
        { type: "paragraph", text: "This is a National / Hybrid track. Further presentation details will be announced." },
        { type: "note", text: "All announced times use UAE time (UTC+4)." },
      ],
    },
  ],
};
