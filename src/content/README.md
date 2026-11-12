# Editing site content

## Results and recap

The Fest has concluded. `results.ts` holds the organizer-supplied headline, workshop
attendance and track results. Every track starts with a Results panel; `resultLine`
also appears on its card and homepage preview. Challenge panels are archived context,
not invitations to register. `event.concluded` makes the Finished state deterministic
for the static export, and all registration/submission configurations remain closed.
Corrected QCTF totals exclude duplicate correct submissions: 2,561 flag submissions,
comprising 1,630 correct and 931 incorrect (64% correct). Display the organizer's wording:
“1,630 flags captured · 931 failed submissions out of 2,561 (64% correct)”.
Use `quantum.club@ku.ac.ae` and QCI Instagram `ku.qci`. Partner social links retain
their own identities. Preserve the original QCI logo and previously removed sections.
The main QCI `/events` page is managed outside this repository.

Event facts and page copy live in this folder. Components should render these exports;
they should not duplicate dates, track descriptions, partner claims, or other event data.

Keep the homepage introduction concise: `event.intro` covers audience and duration;
`homeContent.heroHighlights` lists activities and `heroShowcase` gives the closing
showcase dates and participation format. The About paragraphs explain the global series,
PLUS edition and QCI's purpose without repeating activities. Track-format summaries use
labelled `points` for qualifiers, in-person dates and independent international schedules.
The homepage How It Works section uses short `homePhaseSummaries` in `schedule.ts`
and links to `/schedule/`. Keep the full `phases` summaries and sessions on that page;
shortening the homepage preview must not remove those details or change phase dates.
Keep the homepage track list compact: canonical names and groups come from `tracks`,
with short `homeTrackDescriptions` teasers in `tracks.ts`. Names and result lines remain
visible on narrow screens. Full cards, artwork and challenge panels stay on `/tracks/`.

After an edit, run `npm run build` with the development server stopped.

## Where things live

| Change | File |
|---|---|
| Event identity, opening time, venue, registration, contact, socials, home/footer/CTA copy | `event.ts` |
| Track names, broad descriptions, reach, format, order, Tracks page copy, and expanded panel `details` | `tracks.ts` |
| Published Quantum Biology brief, six panels, and participant resource/form release flags | `quantum-biology.ts` |
| Quantum Capture the Flag (QCTF) archived brief and closed registration configuration | `quantum-cybersecurity.ts` |
| Verified QCTF categories, challenge counts and examples | `ctf-categories.ts` |
| Quantum in the Metaverse four-panel brief, venue, date labels and independent registration controls | `quantum-metaverse.ts` |
| Quantum Foundations four-panel brief, high-school audience, date labels and independent registration controls | `quantum-foundations.ts` |
| Quantum Machine Learning four-panel healthcare brief, exact deadline, submission controls and approved resources | `quantum-machine-learning.ts` |
| Four phases, sessions, and How It Works page copy | `schedule.ts` |
| Agenda milestones, week-calendar lanes, category filters, time-zone notes and track links | `agenda.ts` |
| Confirmed partners, booth applications, and sponsorship contact copy | `sponsors.ts` |
| Questions and cautious answers | `faq.ts` |
| Organizer, faculty advisors, past events, R&D projects, and speakers | `team.ts` |
| Learning links and shared section copy | `resources.ts` |
| Public design assets and base-path-safe URLs | `assets.ts` |
| Organizer-supplied headline, workshop attendance and track outcomes | `results.ts` |
| Labels for decorative track animations; no challenge rules or measured results | `track-visuals.ts` |

The Faculty Advisors section is temporarily removed from the About page at the organizer's
request. The advisor content remains in `team.ts` for later use; do not restore it unless asked.
The shared learning Resources and registration CTA sections appear on Home only.
Do not add `ResourcesSection` or `CtaSection` to the other pages.

## Interest form and registration

The Agenda page at `/agenda/` replaces the standalone Partners page in navigation.
Keep organiser and technical-sponsor logos on the homepage. `/sponsors/` forwards to
the Agenda with a static-host-compatible meta refresh and a normal fallback link.
The Agenda lists published milestones, not an invented daily running order. Keep
unknown session hours unlisted. QML's submission milestone derives from its canonical
28 October 2026, 11:59 PM UAE time (UTC+4) deadline.
The Media submission deadline is in Pacific Time; other announced times use UAE time.
When an approved track milestone changes, update its Agenda entry to match. Registration
opening dates for Cybersecurity, Metaverse and Foundations read their track settings.
Agenda links open the track details; they never enable an unreleased form.

The Agenda is a horizontally scrolling week-by-week calendar (`agendaCalendar` in
`agenda.ts`), from 19 October to 8 November, with one column per day. Each track is a
bar in its `accent` colour, running from its first to its last milestone. Event-wide
items sit on a "Qiskit Fall Fest 2026" bar across the whole range. Bars that overlap in
time are packed into separate lanes stacked on top of each other, so blocks never
overlap. New milestones need only an `agendaItems` entry; spans and lanes are derived.

Selecting any block opens `AgendaDialog` with its details; there is no inline details
card. Workshops add topics, speakers, registration and resources. Other milestones show
an overview, when & where, and their track-panel or premiere link; unknown times and
venues are omitted, and each time string carries its own zone. Native modal inertness,
focus trapping/restoration, scroll locking and reduced-motion transitions are preserved.
A track link closes the dialog before navigating; do not stack dialogs.

Add workshops to `agendaItems` with `kind: "workshop"`, an ISO `date`, `title`,
event/track `context`, and confirmed `time` and `venue` (including online platform).
Keep descriptions brief and optional. The optional `workshop` object supports
`speakers: [{ name, title?, organization?, profileUrl? }]`, `organizers`, short `topics`, and
`certificates: true` only when confirmed. Omitted details render no placeholders.
Workshop registration lives in `workshop.registration: { href, enabled, closed }`.
An approved HTTP(S) URL and `enabled: true` are required for an active Register for this
workshop action; `closed: true` overrides both. Otherwise show the non-clickable pending
state. Keep registration separate from track/global forms. Optional `resources` and
`joiningLink` contain only approved public URLs; a Teams joining link is never registration.
For a workshop created with `trackItem`, its existing `/tracks/#...` href supplies the
View related track action. No URL means no fake button.
An approved speaker `profileUrl` makes their name a link that opens in a new tab.
Workshop branding uses `workshop.branding: [{ name, logo }]` with canonical asset paths.
The supplied `cybersecurity-club.png` belongs to the Cryptography workshop alongside QCI,
with readable organizer text retained. Only inner branding floats by 2px; pause it on hover,
focus and interaction, and disable motion under reduced motion. Card controls stay still.
The user removed the Introduction to Qiskit and Quantum Computing workshop from the
Agenda; do not restore that entry or its speaker details without a new request.
Cryptography in the Quantum Era remains on 24 October 2026, 8–9 PM UAE time (GMT+4),
online on Microsoft Teams, organized by QCI × Cybersecurity Club, with certificates.
Its approved registration URL is `https://forms.gle/cSh5o9JDtdcB7oLv8`, shown as
Register for workshop. Its speaker name and Teams joining URL remain unconfirmed.
The poster supplies its topics.

The AD-OMICS biology and data workshop remains on 26 October 2026 at 5:30 PM UAE time.
Programming the Future is a separate QCI-only workshop on 27 October 2026, 8:00–9:30 PM
UAE time (GMT+4), online on Microsoft Teams, introducing quantum computing and quantum
machine learning. Its poster confirms four topics and certificates. Its approved registration
form is enabled at `https://forms.gle/m3VbCpWPVt8aMaFV8`; the speaker and Teams joining
URL remain unconfirmed. Both schedules live in `workshops.ts` and feed
the agenda and Biology timeline. Do not combine these into one workshop on 26 October.

Quantum Biology has independent release controls in `biologyReleases`. To publish a
participant resource or form, supply its approved `href` and set `enabled: true`.
Both are required; calendar dates never activate links. The user has explicitly approved
and enabled the Biology registration/initial-proposal form at `https://forms.gle/WLmXeHMbmCTj92tb9`.
Submitting the one-page PDF proposal is registration for this track, due 25 October 2026,
11:59 PM UAE time (GMT+4), defined in `biologyProposalDeadline` and displayed on the card, popup and agenda.
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
initial proposal deadline as 25 October 2026, 11:59 PM UAE time (GMT+4), and supplied explicit wording requiring
QAOA with flexible library choice (Qiskit is an example). Preserve that wording and
the reproducibility requirement. Existing track identity and approved host social links remain.
The supplied Biology SVGs are decorative explanations alongside the approved copy.
Do not import the scoring-weight or journey graphics: they contain unapproved weights,
old dates, participant/finalist counts and format restrictions. Visual styling lives
in `TrackBriefTabs`, `BiologyArtwork` and `globals.css`; list and timeline presentation does not change rules.
`BiologyArtwork` adapts the supplied SVG geometry to theme tokens and animates individual
elements. Keep illustrations after their explanatory copy, retain reduced-motion support,
and keep the compact popup header so the selected panel has room to scroll. The track
directory groups international tracks before national tracks, with uniform card spacing.
How It Works includes Phase 04, International Challenges, on 7 November: the online
Cybersecurity CTF and Quantum in Media. Omit the Media submission deadline from How It
Works and its homepage preview; keep it on the Media track and Agenda. Keep CTF hours unconfirmed.
Track status chips are opt-in through `statusLabels`. Biology shows
"Challenge live" and "Submissions open"; QML shows "Challenge live" and "Submission
form coming soon". Media also shows its approved "Challenge live" status. Cybersecurity uses the user's approved
registration and CTF date badges, with separate gold and sky tones. Metaverse uses its
registration/challenge date labels and 20-slot limit. Foundations shows Registration
open, its 31 October challenge date and Limited spots notice. Leave the remaining tracks'
status chips unset until the user supplies their individual updates. A confirmed track
never adds a chip by itself.

Cybersecurity's newer approved content is in `quantum-cybersecurity.ts`, with four
panels inside the same modal: Overview, How It Works, Participation & Registration,
and Schedule & Preparation. Registration opened 23 October 2026 and the online CTF
took place on 7 November. Its visible name is Quantum Capture the Flag (QCTF); keep the
`quantum-cybersecurity` slug and existing panel IDs. Its Challenge Categories panel uses
the supplied workbook's Challenges!A2:B27: Quantum Circuits (10), Quantum Crypto & QKD (5),
Quantum ML (1), Post-Quantum Crypto (5), and Peaked Circuits (5). The workbook was read
only for category names, counts and example challenge titles; retain the organizer's corrected
2,561 submissions and existing published participation totals. Do not publish personal data
or named winners from the workbook. `showRunningBadge: false` hides Still running on the CTF card
and popup while retaining its Finished state after the end date. Registration and team
rules stay unchanged. The organizer approved and enabled the independent form at
`https://forms.gle/qc2R6mHAjuy6dCUD6`. The UAE calendar
date is an additional guard, not a guessed opening hour. Without both an approved URL
and release flag the action remains unavailable, including after 23 October. Keep
`competitionPlatform` separate and unset until supplied. The global interest form must
never register someone for this track. Do not add Biology rules to Cybersecurity.

Metaverse's approved four-panel brief is in `quantum-metaverse.ts`, preserving the
`peaked-circuits` slug. It is National, In person, with individual registration.
Registration opens 22 October 2026; the VR challenge is at Khalifa University's
MetaHub Lab on 30 October, 9:00 AM–12:00 PM UAE time (UTC+4), shared with the agenda
through `metaverseTime`. The approved capacity is 20 slots only, displayed
through `metaverseCapacity` and `metaverseCapacityLabel`. Groups of 12 are scheduled
sessions, not teams or total capacity.
Slots are first come, first served by registration submission time, with organizer
confirmation by email. The organizer approved and enabled `metaverseRegistration` at
`https://forms.gle/HK3r1hHCkkPUmG956`; registration is open.
The UAE calendar date is an additional guard. Set `closed: true` to show Registration
closed and remove the link regardless of the date, URL or release flag. Keep the
limited-slot/email-confirmation note beside the registration action in every state.
No booking system, automated emails, capacity counters or invented session hours.

Foundations uses `quantum-foundations.ts`, preserving the `first-qubit` slug and
Quantum Foundations / High School Track identity. It is National and entirely
In person at Khalifa University, with individual participation for high school students.
The user explicitly opened registration on 22 October 2026, replacing the previous
23 October opening date. The approved form is `https://forms.gle/hyKcfkuXYmFnb7TE8`,
with `enabled: true`; the challenge remains on 31 October. Keep the UAE date guard
and `closed: true` override. A form submission alone does not confirm a place:
participants must receive a confirmation email.
Keep the limited-spots/email-confirmation note beside the action in every state.
An allocation policy has not been confirmed: do not copy Metaverse's first-come rule.
The circuit motif is decorative, with no actual gate choices, target or solution.
Keep event timings unconfirmed; do not invent hours, rooms, deadlines, capacity,
scoring rules, mandatory software/laptops, prizes or further eligibility restrictions.

The newer premiere HTML supplies visual references only, never replacement challenge
copy. `TrackVisual` and `track-visuals/draw.ts` adapt its circuit, model comparison,
Bloch sphere, CTF challenge/clue/flag flow and media pixel field. The Foundations circuit keeps its
missing gates hidden, while the CTF contains no actual flags or challenge data.
QML retains its original animated graphical comparison alongside the balanced
classical/quantum workflow and shared evaluation strip. Its caption makes clear that
the graphic is illustrative, not measured results. Canvases read the existing theme tokens, pause offscreen and in hidden tabs,
and render a complete static frame under reduced motion. Biology is unchanged.

QML's newer approved four-panel brief is in `quantum-machine-learning.ts`. It remains
National / Hybrid with a healthcare theme and a live challenge. The canonical deadline
is `2026-10-28T23:59:00+04:00`; card, popup, timeline, Agenda and submission controls
derive from it. No QML submission URL or resource URLs have been supplied. Set
`qmlSubmission.href` to the approved URL and `enabled: true` to activate the form before
the deadline. `closed: true` or reaching the exact deadline shows Submissions closed.
An invalid or missing URL never links to the general interest form. Add approved resources
to `qmlResources` with descriptive titles, source (official/external), types and action labels.
Invalid URLs are omitted; an empty array renders no fake cards or download controls.
Preserve the approved challenge and evaluation, including correctness and justification.
Shortlisted individuals will be invited to final presentations on 31 October 2026.
Keep that milestone consistent in Overview, Submissions, the timeline and Agenda.
No fixed algorithm, framework, dataset, team size or scoring weights. Presentation
hours, venue and further logistics remain unconfirmed.

Quantum in Media (stable slug `quantum-media`) is hosted by Moth Quantum. Its challenge
is live, with a submission deadline of 7 November 2026, 11:59 PM Pacific Time.
Its brief in `quantum-media.ts` uses four panels: Overview, No-code themes,
Code themes (Atlas API), and Submissions & Resources. Preserve all seven no-code and
three code themes verbatim, the media animation, and the clickable platform/video/Discord links.
The approved submission form is `https://tally.so/r/OQDOD7`.
The new supplied `moth-lockup.svg` is the canonical
Moth logo, shown on white plates in the track and technical sponsors.

Each track runs its own registration, so the shared `RegisterButton` has two stages:

| Stage | Field | Button |
|---|---|---|
| Per-track registration (current) | `event.registrationTracksHref` | `event.registrationOpensLabel` ("Tracks"), linking to the tracks page |
| Single event-wide registration | `event.registrationUrl` | Register (external) |

The old "Get notified" interest-form stage has been removed. `registrationOpensLabel`
lives in `event.ts`, not `homeContent`, because the header and homepage CTA share it
and the label has to read the same on all of them. The CTA section shows
`registrationNote` beneath the button until `registrationUrl` is set.

## Statuses and content honesty

- `confirmed`: agreed and safe to announce.
- `planning`: the direction exists, while details are still being developed.
- `tentative`: a proposed programme detail that may change.
- `tba`: no publishable detail yet.

The six track cards show a challenge summary, reach, delivery format, and explicitly
approved `statusLabels`, which can be strings or date badges with a tone and icon.
Biology uses its dedicated seven-tab popup; Cybersecurity, Metaverse, Foundations and
QML use their newer four-panel briefs. Media retains the organisers' track document and user updates.
Add levels, partners, prerequisites, and
links only after they are confirmed. Preserve track slugs because they are used as
anchors and keys even when the public name changes.

Never list a sponsor, speaker, or partner department based only on a conversation.
IBM Quantum, Khalifa University, and the NYU Abu Dhabi Center for Quantum and
Topological Systems currently appear in the confirmed partner list.

## Track panel details

Each track card on `/tracks/` opens a full-screen panel that grows out of the card. It can also be
opened directly at `/tracks/#<slug>`. Every card and panel uses the same layout: a cover
band (the host's `banner` when supplied, otherwise a tint of the track's `accent`), status
chips, title, summary, then venue, deadline and hosts. The panel body is the track's
published `details.brief`, shown as tabs. `accent` must differ between tracks, because
the agenda calendar colour-codes each track with it.

The tracks page also shows `tracksPageContent.formats`, the national and international
competition formats. To change tracks, visitors close the panel and
open another card.

"Hosted by" labels come from `track.hostedBy`, which picks entries from `trackHosts`.
A host with a logo or About Us text also gets a "Hosted by" section in the panel, below
the challenges. Biology shows its host profile in the separate Hosts tab instead.
"Supported by" labels come from `track.supportedBy`. Quantum Africa supports Quantum
Machine Learning and is also listed with the homepage technical sponsors.
Sponsor and host logos must use a `fallFestAssets` src.

## Assets

Put supplied event media in `public/fall-fest-assets/`, then register it in `assets.ts`.
Use the exported `src` instead of a bare `/fall-fest-assets/...` URL. The helper adds
the GitHub Pages base path at build time and URL-encodes filenames containing spaces.

The original CR2/JPG event photos are preserved. Pages should use the web derivatives
`hackathon.jpg` and `bootcamp-web.jpg`. Partner displays should use
`ibm-quantum-wordmark.png` and the appropriate Khalifa University logo.

## Adding speakers or projects

The Speakers and Mentors section and its announcement placeholder are removed from
the About page at the organizer's request. The `speakers` array is retained for later use;
do not restore the section unless asked. Add a `Speaker` only
after the person has agreed to be named. R&D cards use verified existing links; omit a
link rather than guessing a project URL.

Type definitions in `types.ts` make deliberately unconfirmed fields optional. If
something is not known, omission is safer than placeholder specificity.
