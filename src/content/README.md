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
| Three phases, sessions, and How It Works page copy | `schedule.ts` |
| Confirmed partners, booth applications, and sponsorship contact copy | `sponsors.ts` |
| Questions and cautious answers | `faq.ts` |
| Organizer, advisor, past events, R&D projects, and speakers | `team.ts` |
| Learning links and shared section copy | `resources.ts` |
| Public design assets and base-path-safe URLs | `assets.ts` |

## Interest form and registration

Quantum Biology has independent release controls in `biologyReleases`. To publish a
participant resource or form, supply its approved `href` and set `enabled: true`.
Both are required; calendar dates never activate links. Registration shows non-clickable
"Opens 20 October" text; resource availability is "To be confirmed". Keep datasets, hidden tests, private organizer
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

The six track cards show a one-line challenge summary, reach, delivery format, and
status. A track-specific `statusLabel` takes priority; otherwise a `confirmed` track
shows the `panel.announcedLabel` badge. Biology uses its dedicated approved brief and
seven-tab popup; the other tracks use the organisers' track document.
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
