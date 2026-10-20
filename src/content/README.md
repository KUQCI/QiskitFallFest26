# Editing site content

Event facts and page copy live in this folder. Components should render these exports;
they should not duplicate dates, track descriptions, partner claims, or other event data.

After an edit, run `npm run build` with the development server stopped.

## Where things live

| Change | File |
|---|---|
| Event identity, opening time, venue, registration, contact, socials, home/footer/CTA copy | `event.ts` |
| Track names, broad descriptions, reach, format, order, Tracks page copy, and expanded panel `details` | `tracks.ts` |
| Published Quantum Biology brief, six panels, and participant resource/form release flags | `quantum-biology.ts` |
| Quantum Cybersecurity four-panel brief, date labels, independent registration and platform configuration | `quantum-cybersecurity.ts` |
| Quantum in the Metaverse four-panel brief, venue, date labels and independent registration controls | `quantum-metaverse.ts` |
| Quantum Foundations four-panel brief, high-school audience, date labels and independent registration controls | `quantum-foundations.ts` |
| Three phases, sessions, and How It Works page copy | `schedule.ts` |
| Confirmed partners, booth applications, and sponsorship contact copy | `sponsors.ts` |
| Questions and cautious answers | `faq.ts` |
| Organizer, advisor, past events, R&D projects, and speakers | `team.ts` |
| Learning links and shared section copy | `resources.ts` |
| Public design assets and base-path-safe URLs | `assets.ts` |
| Labels for decorative track animations; no challenge rules or measured results | `track-visuals.ts` |

## Interest form and registration

Quantum Biology has independent release controls in `biologyReleases`. To publish a
participant resource or form, supply its approved `href` and set `enabled: true`.
Both are required; calendar dates never activate links. The user has explicitly approved
and enabled the Biology registration/initial-proposal form at `https://forms.gle/WLmXeHMbmCTj92tb9`.
Submitting the one-page PDF proposal is registration for this track, due 24 October 2026.
Include participant names, team name and the four supplied proposal points. The form
accepts a viewable cloud link to the PDF. Teams of 3–4 remain encouraged; the user will
update the form's team-size requirement. Resources go to shortlisted candidates after
initial submissions; their public links remain disabled. Keep datasets, hidden tests, private organizer
files, reference solutions, and the implementation handoff PDF out of public assets.
The published brief is rendered as six challenge tabs plus a dedicated Hosts tab inside
the existing track modal. The Hosts tab uses the previously supplied ASBMB description,
logo and approved social links; the profile is not repeated under Overview.
The Hosts panel also shows AD-OMICS as "Workshop partner · Biology and data", with
its linked logo. This partner profile does not change the track's Hosted by label.
The newer Biology website-details document is the sole source for challenge content.
Do not add older handoff rules, material-release dates, form types, classifier parameters,
rubric weights or submission requirements absent from it. The user has confirmed the
initial proposal deadline as 24 October 2026 and supplied explicit wording requiring
QAOA with flexible library choice (Qiskit is an example). Preserve that wording and
the reproducibility requirement. Existing track identity and approved host social links remain.
The supplied Biology SVGs are decorative explanations alongside the approved copy.
Do not import the scoring-weight or journey graphics: they contain unapproved weights,
old dates, participant/finalist counts and format restrictions. Visual styling lives
in `TrackBriefTabs`, `BiologyArtwork` and `globals.css`; list and timeline presentation does not change rules.
`BiologyArtwork` adapts the supplied SVG geometry to theme tokens and animates individual
elements. Keep illustrations after their explanatory copy, retain reduced-motion support,
and keep the compact popup header so the selected panel has room to scroll. The track
directory groups national tracks before international tracks, with uniform card spacing.
Track status chips are opt-in through `statusLabels`. Only Biology currently shows
"Challenge live" and "Submissions open". Cybersecurity now uses the user's approved
registration and CTF date badges, with separate gold and sky tones. Metaverse uses its
registration/challenge date labels and Limited slots notice. Foundations uses its own
23 October registration / 31 October challenge dates and Limited spots notice. Leave the remaining tracks'
status chips unset until the user supplies their individual updates. A confirmed track
never adds a chip by itself.

Cybersecurity's newer approved content is in `quantum-cybersecurity.ts`, with four
panels inside the same modal: Overview, How It Works, Participation & Registration,
and Schedule & Preparation. Registration opens 22 October 2026 and the online CTF
takes place on 30 October. Set `cybersecurityLinks.registration.href` to the approved
form and `enabled: true` only when registration has actually opened. The UAE calendar
date is an additional guard, not a guessed opening hour. Without both an approved URL
and release flag the action remains unavailable, including after 22 October. Keep
`competitionPlatform` separate and unset until supplied. The global interest form must
never register someone for this track. Do not add Biology rules to Cybersecurity.

Metaverse's approved four-panel brief is in `quantum-metaverse.ts`, preserving the
`peaked-circuits` slug. It is National, In person, with individual registration.
Registration opens 22 October 2026; the VR challenge is at Khalifa University's
MetaHub Lab on 30 October. Groups of 12 are scheduled sessions, not teams or capacity.
Slots are first come, first served by registration submission time, with organizer
confirmation by email. No form URL has been supplied. Set `metaverseRegistration.href`
to the approved form and `enabled: true` only when registration is actually open.
The UAE calendar date is an additional guard. Set `closed: true` to show Registration
closed and remove the link regardless of the date, URL or release flag. Keep the
limited-slot/email-confirmation note beside the registration action in every state.
No booking system, automated emails, capacity counters or invented session hours.

Foundations uses `quantum-foundations.ts`, preserving the `first-qubit` slug and
Quantum Foundations / High School Track identity. It is National and entirely
In person at Khalifa University, with individual participation for high school students.
Registration opens 23 October 2026; the challenge takes place on 31 October. Set
`foundationsRegistration.href` to the approved form and `enabled: true` only when
registration has actually opened. The UAE date guards against early release, while
`closed: true` overrides the URL, date and release flag. No form URL has been supplied.
Keep the limited-spots/email-confirmation note beside the action in every state.
An allocation policy has not been confirmed: do not copy Metaverse's first-come rule.
The circuit motif is decorative, with no actual gate choices, target or solution.
Keep event timings unconfirmed; do not invent hours, rooms, deadlines, capacity,
scoring rules, mandatory software/laptops, prizes or further eligibility restrictions.

The newer premiere HTML supplies visual references only, never replacement challenge
copy. `TrackVisual` and `track-visuals/draw.ts` adapt its circuit, model comparison,
Bloch sphere, CTF query flow and media pixel field. The Foundations circuit keeps its
missing gates hidden, while the CTF contains no actual flags or challenge data.
QML's comparison carries an illustration caption rather than presenting benchmark
results. Canvases read the existing theme tokens, pause offscreen and in hidden tabs,
and render a complete static frame under reduced motion. Biology is unchanged.

Quantum in Media (stable slug `quantum-media`) is hosted by Moth Quantum. Its challenge
is live, with a submission deadline of 30 October 2026, 11:59 PM Pacific Time.
Submission details will be shared soon. Preserve the published themes and clickable
platform/video/Discord links. The new supplied `moth-lockup.svg` is the canonical
Moth logo, shown on white plates in the track and technical sponsors.

Sign-up runs in two stages, and the shared control resolves the furthest stage that is
actually open so the button label never overstates what the link does.

| Stage | Field | Button label |
|---|---|---|
| Interest form open | `event.interestFormUrl` | Get notified |
| Registration open | `event.registrationUrl` | Register |
| Neither set | — | `event.registrationOpensLabel` (not a link) |

`registrationOpensLabel` is the status text shown while registration is closed. It
lives in `event.ts`, not `homeContent`, because the CTA section renders on five routes
and the status has to read the same on all of them. `RegisterButton` uses it as the
default for `unavailableLabel`, so changing the date is a single edit.

`registrationUrl` wins when both are set, so opening real registration is a one-line
change and needs no edit to the interest form fields:

```ts
registrationUrl: "https://example.com/registration",
```

Keep `interestFormNote` and `registrationNote` accurate alongside the URLs. The CTA
section shows `interestFormNote` while the interest form is the active stage, and drops
the note entirely once registration is open.

The field is named after the artifact it points at: the Google form is titled
"Interest Form". The CTA says "Get notified" because that is why most people click it.
Keep `interestFormNote` saying that a short form sits behind the button, so the label
does not promise a one-field mail signup.

It is not registration, so do not relabel it as registration, and do not reword the FAQ
answers that say registration information will be published before registration opens.

## Statuses and content honesty

- `confirmed`: agreed and safe to announce.
- `planning`: the direction exists, while details are still being developed.
- `tentative`: a proposed programme detail that may change.
- `tba`: no publishable detail yet.

The six track cards show a challenge summary, reach, delivery format, and explicitly
approved `statusLabels`, which can be strings or date badges with a tone and icon.
Biology uses its dedicated seven-tab popup; Cybersecurity, Metaverse and Foundations use their
newer four-panel briefs. The other tracks use the organisers' track document.
Add levels, partners, prerequisites, and
links only after they are confirmed. Preserve track slugs because they are used as
anchors and keys even when the public name changes.

Never list a sponsor, speaker, or partner department based only on a conversation.
IBM Quantum, Khalifa University, and the NYU Abu Dhabi Center for Quantum and
Topological Systems currently appear in the confirmed partner list.

## Track panel details

Each track card on `/tracks/` opens a full-screen panel. It can also be opened directly
at `/tracks/#<slug>`. The panel reads `track.details`, and every field is optional:
`brief` (the published tabbed brief), `description`, `dates`, `sponsors`, `challenge` (paragraphs), `challengeThemes`
(named options grouped by tier), `tasks`, `submission`, `judging`, `resources`
(links), `resourceItems` (confirmed resources without a public link yet), and
`resourcesNote`. Empty sections are hidden. Until `challenge` or `challengeThemes` is
set, the panel shows `tracksPageContent.panel.challengesPending`. When a registration
or resource URL is shared, move the item from `resourceItems` into `resources` or
`submission.links`; no component change is needed.

The tracks page also shows `tracksPageContent.formats`, the national and international
competition formats. To change tracks, visitors close the panel and
open another card.

"Hosted by" labels come from `track.hostedBy`, which picks entries from `trackHosts`.
A host with a logo or About Us text also gets a "Hosted by" section in the panel, below
the challenges. Biology shows its host profile in the separate Hosts tab instead.
Sponsor and host logos must use a `fallFestAssets` src.

## Assets

Put supplied event media in `public/fall-fest-assets/`, then register it in `assets.ts`.
Use the exported `src` instead of a bare `/fall-fest-assets/...` URL. The helper adds
the GitHub Pages base path at build time and URL-encodes filenames containing spaces.

The original CR2/JPG event photos are preserved. Pages should use the web derivatives
`hackathon.jpg` and `bootcamp-web.jpg`. Partner displays should use
`ibm-quantum-wordmark.png` and the appropriate Khalifa University logo.

## Adding speakers or projects

The empty `speakers` array creates an honest announcement state. Add a `Speaker` only
after the person has agreed to be named. R&D cards use verified existing links; omit a
link rather than guessing a project URL.

Type definitions in `types.ts` make deliberately unconfirmed fields optional. If
something is not known, omission is safer than placeholder specificity.
