# CLAUDE.md — Qiskit Fall Fest 2026 site

Website for Qiskit Fall Fest 2026, organized by the Quantum Computing Initiative
at Khalifa University as part of IBM Quantum’s annual global event series.

## Confirmed timing

- **19 October 2026 at 6:00 PM UAE time (UTC+04:00)** — opening session and countdown target
- **31 October – 1 November 2026** — closing showcases (the Fall Fest ends 1 November)
- **10 October 2026** — team target for the site to be live

Never restore a previous unconfirmed closing date or regional-superlative claim.
The middle phase is the “development period”, not a “challenge period”.

## Stack

Next.js 15 (App Router), React 19, TypeScript, and Tailwind v4 with a static export
(`output: "export"`). The development server runs on port 4321. There is no backend,
CMS, or database.

Tailwind and `@tailwindcss/postcss` are pinned to the same exact version. Do not loosen
the versions: incompatible `@tailwindcss/oxide` versions can break the scanner.

## Content architecture

**Components do not own event data. Content lives in `src/content/`.**

Dates, names, public descriptions, page headings, partner details, links, and CTA copy
must be editable without opening a component. Shared components consume shared content
exports. See `src/content/README.md` for the file map.

## Content honesty

- Never list a sponsor, speaker, department, or partner that has not agreed in writing.
- Use `confirmed`, `planning`, `tentative`, and `tba` accurately.
- All six tracks' challenges have been published (`status: "confirmed"`). The other
  five tracks use the organisers' "Fall Fest '26 Tracks" document; keep their published
  challenge statements, dates, judging, submissions, resources and Moth Quantum themes.
- Quantum Biology's challenge brief is published with six challenge panels and a separate Hosts tab in
  `src/content/quantum-biology.ts`. The Hosts tab uses the supplied ASBMB description,
  logo and approved social links. The newer
  `qiskit bio track website details (1) (1).pdf` is the sole source for challenge content:
  scoring metrics, rubric weights, classifier settings, submission requirements and
  external-data policy remain unconfirmed. Preserve the user's overrides: the initial
  proposal deadline is confirmed as **24 October 2026**. QAOA is required; any suitable
  quantum computing library may be used, with Qiskit as an example only. Preserve the
  user's exact implementation and reproducibility wording. Visual references do not
  authorize added rules, rubric weights, participant counts, or submission formats.
  Do not retain extra rules, release dates or logistical promises from the older handoff.
  Only registration is dated 20 October; resource availability is to be confirmed.
  Its resources and registration remain disabled until an approved URL and explicit release
  flag are supplied; the date alone does not enable them. Do not publish the handoff
  PDF, datasets, private organizer files, hidden tests, or reference solutions.
  National tracks are hybrid, except
  Quantum in the Metaverse (national, in person at the KU Metaverse Hub on Friday
  30 October 2026, no qualifiers). Quantum Cybersecurity is international and virtual,
  with a single online CTF and no qualifier or separate final round. International tracks
  are virtual. Each track has its own registration. For tracks other than Biology,
  publish only details present in that track document. Registration and resource URLs
  were not supplied; do not invent them. Track names follow the organisers' proposal.
  National tracks have in-person days on 30 October, 31 October or 1 November, with
  Quantum in the Metaverse at the MetaHub Lab on 30 October. The international
  Quantum Cybersecurity CTF runs online on 30 October.
- Per-track hosts come from `trackHosts` in `src/content/tracks.ts` and are shown as
  "Hosted by" labels. Confirmed so far: ASBMB Student Chapter at Khalifa University
  (Quantum Biology) and Moth Quantum (Media with Moth). QCI and NYUAD are the
  overall organisers and are not added to individual tracks.
- Do not invent attendance numbers, eligibility rules, team rules, workloads, closing
  dates, speaker formats, or selection processes.
- Keep the empty `speakers` array until people agree to be announced.
- Where a format or session time is unknown, omit the optional field.

## Public links and contact

- QCI: `https://qcinit.tech/`
- Contact: `quantum.club@ku.ac.ae`
- LinkedIn: `https://www.linkedin.com/company/ku-qci/`
- Instagram: `https://www.instagram.com/ku.qci/?hl=en`
- GitHub: `https://github.com/KUQCI`
- WhatsApp: `https://chat.whatsapp.com/Cc4OqqKTKbnLaBDJuqCQkG`

These values are canonical in `src/content/event.ts`; components should not duplicate them.

## Static assets and GitHub Pages

GitHub Pages may serve the site under a repository base path. Do not use a bare public
URL such as `/fall-fest-assets/image.png`. Use `fallFestAssets` or `withBasePath` from
`src/content/assets.ts`; `next.config.ts` exposes the resolved base path as
`NEXT_PUBLIC_BASE_PATH` during the build.

Use web-safe event-photo derivatives in pages while preserving the supplied originals:

- `hackathon.jpg` (original: `hackathon image.CR2`)
- `bootcamp-web.jpg` (original: `Bootcamp.JPG`)
- `ibm-quantum-wordmark.png` for the cropped partner wordmark

## Design system

Tokens live in `src/app/globals.css`. Never hardcode a color in a component. Use
`color-mix(in srgb, var(--c-token) N%, transparent)` for translucent values.

Both themes must have zero WCAG AA contrast failures. Maintain visible keyboard focus,
44×44 px mobile targets, meaningful alternative text, scalable type, and information
that does not rely on color alone.

## Motion and custom pointer

Motion may use `transform` and `opacity`, and must switch off under
`prefers-reduced-motion` with content remaining visible. The custom Bloch pointer must
also respect reduced motion, fine-pointer capability, keyboard use, and mobile/touch.
Never hide the native cursor unless the replacement is active and safe.

`Reveal` has a failsafe because `IntersectionObserver` may not fire in background tabs.
Do not make content permanently dependent on an animation callback.

## Gotchas

- Two display utilities on one element resolve by stylesheet order, not class order.
  Wrap the element when responsive visibility conflicts with a component’s own display.
- Do not run `npm run build` while `npm run dev` is running. Both write `.next`, which
  can produce misleading static-worker or `/_not-found` failures.

## Verification before completion

```bash
npm run build
```

Then check all six routes in dark and light themes at 375, 768, and 1280 px. Confirm no
console errors, horizontal overflow, missing base-path assets, inaccessible controls, or
legacy event claims. Test keyboard navigation and reduced motion.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
