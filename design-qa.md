# Milling Works Design QA

## Evidence

- Source visual truth: `C:/Users/choud/AppData/Local/Temp/codex-clipboard-a2e4c703-34dc-40a8-861a-1b523af3b813.png`
- Desktop implementation: `C:/Users/choud/Documents/MillingWorks/.worktrees/milling-works-site/evidence/design-qa/home-desktop-1440x900.png`
- Mobile implementation: `C:/Users/choud/Documents/MillingWorks/.worktrees/milling-works-site/evidence/design-qa/home-mobile-390x844.png`
- Full-view comparison: `C:/Users/choud/Documents/MillingWorks/.worktrees/milling-works-site/evidence/design-qa/desktop-side-by-side.png`
- Focused comparison: `C:/Users/choud/Documents/MillingWorks/.worktrees/milling-works-site/evidence/design-qa/center-panel-focused.png`
- Interaction evidence: `C:/Users/choud/Documents/MillingWorks/.worktrees/milling-works-site/evidence/design-qa/chatbot-mobile-open.png`
- Desktop viewport/state: 1440×900, homepage, initial state
- Mobile viewport/state: 390×844, homepage initial state and assistant open

## Findings — Iteration 1

- [P1] Hero card proportions and central artwork do not yet match the approved reference.
  - Location: homepage hero, `.hero-panel--primary` and `.hero-panel--primary > img`.
  - Evidence: the source uses a narrow, tall central card with the three technicians visibly placed between the headline and the full tooth. The implementation uses a wide, shallow card; the technicians are cropped out in the desktop viewport and most of the lower implant base is below the crop.
  - Impact: this materially changes the above-the-fold hierarchy and removes the reference's most distinctive visual story.
  - Fix: make the central card approximately 40% of the desktop hero width, increase its height, reduce the headline scale slightly, and render the complete central asset with `object-fit: contain` at a taller height so the technicians remain visible.

- [P2] Side panels are materially darker and more saturated than the source.
  - Location: `.hero-panel--implant`, `.hero-panel--crowns`, color tokens.
  - Evidence: the source side panels are a soft laboratory sky blue while the implementation uses the same saturated royal blue family as the central card.
  - Impact: the three-card depth hierarchy flattens and the result feels more promotional than clinical.
  - Fix: add a softer blue token close to the source and apply it to side panels while retaining a deeper blue for the central panel.

- [P2] Floating mobile controls obscure a meaningful portion of the next hero card.
  - Location: mobile homepage at 390×844, WhatsApp and assistant launchers.
  - Evidence: both 54–58px controls sit side by side over the `Dental Implants` card at the viewport bottom.
  - Impact: the persistent actions compete with card content and reduce perceived polish.
  - Fix: reduce both controls to approximately 48px on small screens and stack them vertically along the right edge so they occupy one narrow column.

## Required Fidelity Surfaces

- Fonts and typography: Manrope/DM Sans is directionally appropriate, but the desktop hero headline is larger and denser than the source; P1 fix required.
- Spacing and layout rhythm: overall hero padding and rounded-panel language are strong; card proportions require P1 correction.
- Colors and visual tokens: mint background and lime calls to action are faithful; side-panel blue requires P2 correction.
- Image quality and asset fidelity: all visible custom dental imagery is real raster artwork and remains sharp after WebP optimization; central crop requires P1 correction.
- Copy and content: original Milling Works copy is coherent and avoids copied SmileLab/Nvistas wording.
- Icons and interaction states: Phosphor icons are consistent; mobile floating-control placement requires P2 correction.
- Accessibility: DOM/heading order, menu semantics, contact errors, chatbot focus, and reduced-motion behavior are covered and verified.

## Primary Interactions Tested in In-App Browser

- Mobile menu open/close and navigation exposure
- Guided assistant open state, topic menu, close/minimize controls
- Contact form required-field validation and announced error state
- No uncaught browser-console or local-asset failures were found by the committed browser suite

## Comparison History

- Iteration 1: identified one P1 hero-composition mismatch and two P2 color/mobile-control mismatches. Fixes pending.

final result: blocked
