# Design QA — Professional Dental Laboratory Redesign

## Visual target

- Source: `C:/Users/choud/Pictures/Screenshots/Screenshot 2026-07-14 122238.png`
- Target qualities: soft laboratory blue, light oversized typography, white restoration imagery, generous negative space, organic mobile-card silhouette, and three clearly separate screen concepts.
- Brand and content are original to Milling Works; SmileLab branding, clinicians, reviews, metrics, and exact compositions were not reproduced.

## Captured implementation

- Desktop home: `evidence/professional-redesign/01-home-desktop.png`
- Mobile home: `evidence/professional-redesign/02-home-mobile.png`
- Mobile crowns: `evidence/professional-redesign/03-crowns-mobile.png`
- Mobile implants: `evidence/professional-redesign/04-implants-mobile.png`

## Comparison findings

### P0

None.

### P1

- Resolved: the original homepage combined three simulated mobile panels. The redesign now uses one homepage hero and moves crowns and implants to separate routes.
- Resolved: mobile workflow titles collided with their descriptions. The mobile workflow now uses a single-column text layout with clear spacing.
- Resolved: broad outsourcing, auditing, invented reviews, percentages, certifications, production tolerances, and turnaround claims were removed from the public experience.

### P2

- Resolved: the previous purple palette was replaced by a measured laboratory blue (`#68A7D8`), deep navy, white, mist, and a restrained lime accent.
- Resolved: heavy display weights, repeated rounded cards, animated glow decoration, pill-heavy actions, and the multi-panel hero were replaced by light editorial typography and fewer sections.
- Resolved: footer links to unimplemented legal and careers routes were removed.
- Resolved: Crowns & Bridges and Dental Implants now have distinct page imagery, copy, workflows, and CTAs.

### P3 follow-up ideas

- Replace the current generated restoration imagery when the client supplies verified product photography from the working laboratory.
- Confirm the exact material list, delivery expectations, certifications, and implant-system compatibility before adding any technical detail.

## Responsive acceptance

- 1440×900: single editorial hero, dominant restoration image, clear service routing.
- 768×1024: layouts reflow without horizontal overflow.
- 390×844: each route uses its own tall blue composition; hero image and CTA remain visible; no mixed three-panel montage.
- Mobile navigation, chatbot, contact handoff, keyboard focus, and route scrolling are covered by Playwright.

final result: passed
