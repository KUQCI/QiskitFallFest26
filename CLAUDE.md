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
- All six tracks' challenges have been published (`status: "confirmed"`). The tracks
  use the organisers' "Fall Fest '26 Tracks" document except where the user's newer
  approved briefs below override it; keep their published
  challenge statements, dates, judging, submissions, resources and Moth Quantum themes.
- Quantum Biology's challenge brief is published with six challenge panels and a separate Hosts tab in
  `src/content/quantum-biology.ts`. The Hosts tab uses the supplied ASBMB description,
  logo and approved social links. The newer
  `qiskit bio track website details (1) (1).pdf` is the sole source for challenge content:
  scoring metrics, rubric weights, classifier settings, final-submission formats and
  external-data policy remain unconfirmed. Preserve the user's overrides: the initial
  proposal deadline is confirmed as **24 October 2026**. QAOA is required; any suitable
  quantum computing library may be used, with Qiskit as an example only. Preserve the
  user's exact implementation and reproducibility wording. Visual references do not
  authorize added rules, rubric weights, participant counts, or submission formats.
  Do not retain extra rules, release dates or logistical promises from the older handoff.
  Registration opens 20 October through the initial-submission form, now explicitly
  approved and enabled at `https://forms.gle/WLmXeHMbmCTj92tb9`. Submitting the proposal
  registers the team for Biology. It must be one PDF page, include participant names
  and team name, and briefly cover the challenge, approach, checks and work plan.
  Keep the user's supplied instructions. The form takes a viewable cloud link to the PDF.
  Teams of 3–4 remain encouraged; the user will update the form to match that wording.
  Resources, including the dataset and starter notebook, go to shortlisted candidates
  after initial submissions. Resource links stay disabled until approved URLs and explicit
  release flags are supplied; dates alone do not enable them. Do not publish the handoff
  PDF, datasets, private organizer files, hidden tests, or reference solutions.
  National tracks include hybrid competitions and entirely in-person challenges.
  Quantum Foundations uses the user's newer four-panel `quantum-foundations.ts` brief,
  preserving the `first-qubit` slug. It is the High School Track: National, In person,
  individual participation at Khalifa University on 31 October 2026. Registration
  opens 23 October 2026; its independent approved form URL remains unset. Require
  that UAE date, an explicit release flag and an approved URL; support `closed: true`.
  Keep Limited spots and email confirmation clear. Do not copy Metaverse's first-come
  allocation policy or invent equipment requirements, assessment rules, hours, prizes,
  deadlines, total capacity, specific rooms or additional eligibility restrictions.
  Quantum in the Metaverse uses the user's newer four-panel `quantum-metaverse.ts`
  brief: National, In person, individual registration opening 22 October 2026 and a
  single-day VR challenge at Khalifa University's MetaHub Lab on 30 October. Groups
  of 12 are scheduled sessions, not teams or total capacity. Slots are allocated first
  come, first served by submission time, with organizer confirmation by email.
  Its independent registration URL remains unset. Require an approved URL, explicit
  release flag and UAE opening date; `closed: true` overrides them all. Preserve the
  limited-slot note beside the action. Do not invent hours, deadlines, capacity,
  prizes, prerequisites or required laptops. Quantum Cybersecurity uses the user's newer four-panel
  brief in `src/content/quantum-cybersecurity.ts`, overriding the older track document.
  It is international and online, for 1–4 participants. Registration opens 22 October
  2026; the CTF is on 30 October. Its form and platform URLs are independent of global
  registration and remain unset. A form needs an approved URL, an explicit release flag
  and the opening date to be reached in UAE time; the date alone never enables it.
  Do not invent an opening hour, competition hours, deadline, prizes or eligibility rules.
  International tracks
  are virtual. Each track has its own registration. For tracks other than Biology,
  publish only details present in that track document or the user's explicit updates. Registration and resource URLs
  were not supplied; do not invent them. Track names follow the organisers' proposal.
  National tracks have in-person days on 30 October, 31 October or 1 November, with
  Quantum in the Metaverse at the MetaHub Lab on 30 October and Quantum Foundations
  at Khalifa University on 31 October. The international
  Quantum Cybersecurity CTF runs online on 30 October.
- Per-track hosts come from `trackHosts` in `src/content/tracks.ts` and are shown as
  "Hosted by" labels. Confirmed so far: ASBMB Student Chapter at Khalifa University
  (Quantum Biology) and Moth Quantum (Quantum in Media). QCI and NYUAD are the
  overall organisers and are not added to individual tracks.
- Quantum in Media preserves the `quantum-media` slug and Moth's approved themes and
  clickable resources. The challenge is live. Submissions are due 30 October 2026,
  11:59 PM Pacific Time; submission details will be shared soon. Use the supplied
  `moth-lockup.svg` on white logo plates, including the technical sponsor display.
- The supplied premiere HTML is a visual reference only; its dates, rules, framework
  restrictions and challenge text are outdated. `TrackVisual` adapts its five animated
  illustrations with theme tokens, responsive canvases, reduced-motion stills and
  pausing offscreen/in background tabs. Foundations gates stay hidden; CTF shows no
  flag values or private model data. QML's comparison is explicitly illustrative.
  Keep Biology artwork and content unchanged.
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
