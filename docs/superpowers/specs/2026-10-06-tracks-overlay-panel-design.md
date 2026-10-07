# Tracks overlay panel — design

Branch: `feat/tracks-expandable`

## Goal

Each track on `/tracks` remains a compact overview card. Activating a card opens a
near-full-screen panel holding that track's full details. Before the Fall Fest, the panel
shows the confirmed track information. On the day, a separate content-only branch adds
participant instructions without component changes.

## Behaviour

- **Overlay panel.** Clicking a card opens a modal panel that covers about 90% of the
  viewport on desktop and the full screen below `sm`. The page behind it is dimmed and does
  not scroll. Panel content scrolls inside the panel. The panel animates out of the card's
  position using only `transform` and `opacity`. Under `prefers-reduced-motion`, it opens
  without animation.
- **Close.** Use the ✕ button, `Esc`, or a backdrop click. Focus returns to the card that
  opened the panel.
- **Changing tracks.** There is no switcher inside the panel. Close it (✕, `Esc`, or a
  click outside) and open another card. Removed on 2026-10-07 at the user's request.
- **Shareable links.** An open panel sets the URL hash to the track slug, for example
  `/tracks#quantum-cybersecurity`. Loading `/tracks` with a valid slug hash scrolls to
  that card and opens its panel. Closing the panel clears the hash. History uses
  `replaceState`, so the Back button leaves the page rather than walking through tracks.
  Existing slugs do not change.
- **Home page.** The four featured cards link to `/tracks#<slug>`. The tracks page then
  scrolls to the card and opens the panel automatically.

## Content model (`src/content/`)

`Track` gains one optional `details` object (`TrackDetails` in `types.ts`). Every field
is optional. The panel renders a section only when it has content. No placeholders.

| Field | Panel section |
|---|---|
| `description` | About this track. Falls back to `summary` |
| `sponsors` | Sponsors: a logo on a neutral plate, or the name when there is no logo. Agreed in writing only |
| `challenges` | Challenges. When empty, shows "Challenge details are to be announced soon." |
| `tasks` | What you need to do |
| `submission` (`where`, `how`, `links`) | How to submit |
| `resources` | Resources |
| `track.hostedBy` (from `trackHosts`) | "Hosted by" labels on the card and panel header, plus a "Hosted by" section (logo and About Us) below the challenges |

Headings and labels live in `tracksPageContent.panel`.

## Components

- `TrackCard`: existing card, now a button-like trigger on `/tracks`. The home `preview`
  variant becomes a link to `/tracks#<slug>`.
- `TrackPanel` (new, client): dialog markup, focus trap, `Esc`/backdrop close,
  section rendering.
- `TrackExplorer` (new, client): owns the open slug, hash sync, scroll-to-card on load,
  and renders the grid plus the panel. `tracks/page.tsx` stays a server component that
  passes content in.

## Accessibility

`role="dialog"`, `aria-modal`, labelled by the track title. Focus moves into the panel on
open and stays trapped there until close. All targets are at least 44×44 px on mobile. Cards
remain readable with JavaScript disabled, but they do not expand without it. Colours come
only from tokens, and both themes must pass AA.

## Out of scope

Day-of instruction content (separate branch), new routes per track, CMS or backend.

## Verification

`npm run build`. Check all six routes in dark and light themes at 375, 768, and 1280 px.
Test hash deep links from the home page, keyboard-only open, switch, and close, reduced
motion, and that the console has no errors or horizontal overflow.

## Pending input

- Moth Quantum logo and link (currently a name-only label).
- Further track sponsors confirmed in writing.
- Final track descriptions to replace the temporary ones.
