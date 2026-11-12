import type { TrackBrief } from "./types";

/** Supplied event workbook, Challenges!A2:B27. Counts are challenge rows per category. */
export const ctfCategories = [
  { title: "Quantum Circuits", count: 10, examples: ["Bit Painter", "Bell", "Grover", "Teleport"] },
  { title: "Quantum Crypto & QKD", count: 5, examples: ["Sift Happens", "Eve Was Here", "A Shor Thing"] },
  { title: "Quantum ML", count: 1, examples: ["Nightjar"] },
  { title: "Post-Quantum Crypto", count: 5, examples: ["Noisy Silence", "Volatile Ntt"] },
  { title: "Peaked Circuits", count: 5, examples: ["Little Peak", "Entanglement Wall", "Shattered Peak"] },
];

export const ctfCategoryPanel: TrackBrief["panels"][number] = {
  id: "challenge-categories",
  title: "Challenge Categories",
  blocks: [
    { type: "paragraph", text: "Hackers tackled 26 challenges across five categories, covering circuits, quantum cryptography and key distribution, machine learning, post-quantum cryptography, and Peaked Circuits." },
    { type: "list", presentation: "cards", items: ctfCategories.map(category => ({
      title: category.title,
      text: category.count === 1
        ? `1 challenge: ${category.examples[0]}.`
        : `${category.count} challenges, including ${category.examples.join(", ")}.`,
    })) },
  ],
};
