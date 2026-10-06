# Editing site content

Event facts and page copy live in this folder. Components should render these exports;
they should not duplicate dates, track descriptions, partner claims, or other event data.

After an edit, run `npm run build` with the development server stopped.

## Where things live

| Change | File |
|---|---|
| Event identity, opening time, venue, registration, contact, socials, home/footer/CTA copy | `event.ts` |
| Track names, broad descriptions, reach, format, order, Tracks page copy, and expanded panel `details` | `tracks.ts` |
| Three phases, sessions, and How It Works page copy | `schedule.ts` |
| Confirmed partners, booth applications, and sponsorship contact copy | `sponsors.ts` |
| Questions and cautious answers | `faq.ts` |
| Organizer, advisor, past events, R&D projects, and speakers | `team.ts` |
| Learning links and shared section copy | `resources.ts` |
| Public design assets and base-path-safe URLs | `assets.ts` |

## Interest form and registration

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

The six track cards show their broad direction, reach, delivery format, and planning
status, without display codes. Keep proposed activities clearly labelled as
possibilities; add levels, judging criteria, partners, and prerequisites only after
they are confirmed. Preserve track slugs because they are used as anchors and keys
even when the public name changes.

Never list a sponsor, speaker, or partner department based only on a conversation.
IBM Quantum, Khalifa University, and the NYU Abu Dhabi Center for Quantum and
Topological Systems currently appear in the confirmed partner list.

## Track panel details

Each track card on `/tracks/` opens a full-screen panel. It can also be opened directly
at `/tracks/#<slug>`. The panel reads `track.details`, and every field is optional:
`description`, `sponsors`, `challenges`, `tasks`, `submission`, `resources`, and
`organizer`. Empty sections are hidden. Until `challenges` is set, the panel shows
`tracksPageContent.panel.challengesPending`. Add day-of instructions by filling these
fields; no component change is needed. Sponsor and organizer logos must use a
`fallFestAssets` src.

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
