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
- Iteration 2: changed the primary panel from 50% to approximately 40% of the desktop hero, increased its height to about 680px, reduced headline density, and changed the central image to a taller contained presentation. The complete implant base and all three technicians are now visible. Side panels now use a softer laboratory blue, and the 390px floating controls are 48px and vertically stacked. Post-fix browser evidence: `evidence/design-qa/home-desktop-iteration-2-iab.png`, `evidence/design-qa/home-mobile-iteration-2.png`, and `evidence/design-qa/desktop-side-by-side-iteration-2.png`.
- Final verification: in-app pathname and service-anchor navigation, side-panel small-copy contrast, and the real-mark favicon were added to the automated coverage. Unit 41/41, full E2E 46/46, and production build passed; service anchors also clear the sticky header.

## Final Findings

- P0/P1/P2: none remaining.
- P3: the miniature technicians sit slightly behind the supporting copy and CTA rather than in a fully separate visual band. This is acceptable because the figures remain visible, the main conversion action stays readable, and the reference's central narrative and hierarchy are preserved.

## Final Fidelity Assessment

- Fonts and typography: passed. The revised hero scale is close to the source and remains readable at desktop and mobile sizes.
- Spacing and layout rhythm: passed. Tall centre-card dominance, side-card overlap, rounded geometry, and responsive stacking are preserved.
- Colors and visual tokens: passed. Mint/lime framing and softer blue side panels now match the approved art direction.
- Image quality and asset fidelity: passed. Original generated raster assets remain sharp, correctly masked, and fully represented after WebP optimization.
- Copy and content: passed. Milling Works copy is original, coherent, and appropriate for a B2B dental audience.
- Icons and interactions: passed. Phosphor icon treatment is consistent; mobile persistent controls no longer obscure a broad content area.
- Accessibility and responsiveness: passed. Browser tests cover keyboard navigation, focus restoration, announced validation, reduced-motion behavior, horizontal overflow, and all target routes.

final result: passed
