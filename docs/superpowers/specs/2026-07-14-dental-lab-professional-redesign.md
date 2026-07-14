# Milling Works Dental Laboratory — Professional UI Redesign

## Objective

Reposition Milling Works as a focused B2B dental laboratory and replace the current broad, AI-generic marketing interface with a restrained, credible, design-led website. The supplied three-panel SmileLab reference is visual inspiration for colour, typography, image scale, and organic mobile-card silhouettes. Each panel represents a separate page concept; the three panels must never appear together as one homepage hero.

## Business Scope

Milling Works provides dental laboratory services only. Remove record auditing, generic outsourcing, unrelated international business services, and any navigation or copy that suggests a broader company offering.

Primary audiences:

- Dental practices submitting crown, bridge, veneer, and implant cases.
- Dental laboratories seeking a production partner.
- Dentists and technicians evaluating materials, compatibility, workflow, and turnaround.

Primary conversion: submit or discuss a dental case.

Secondary conversion: contact the laboratory for technical guidance.

## Design Direction

The selected direction is **Precision Dental Editorial**.

The experience should feel like a specialist dental manufacturing partner: calm, exact, modern, and human. It should not resemble a generic SaaS landing page or an automatically assembled component library.

### Visual language

- Primary blue: approximately `#68A7D8`, adjusted only when contrast requires a darker tone.
- Supporting colours: white, mist blue, deep navy, and a restrained lime accent.
- Use a light, modern grotesk-style display face with large, controlled headings. Body text should remain highly readable and neutral.
- Use generous negative space, measured alignment, and a limited number of strong visual moments.
- Organic upper card contours may echo the supplied reference, but every page must remain clearly original to Milling Works.
- Use real raster dental assets for restoration imagery and people. Do not draw teeth, crowns, implants, backgrounds, or logos with CSS or handcrafted SVG.
- Use the existing icon library only where an icon materially improves comprehension.

### Explicit anti-patterns

- No three-column mobile-screen montage on the homepage.
- No unsupported percentages, review counts, tolerances, certifications, turnaround promises, or compatibility claims.
- No invented testimonials or named clinicians.
- No excessive pill buttons, gradient blobs, floating badges, glass cards, or decorative animation.
- No repeated card grids that restate the same information.
- No vague headings such as “Everything you need to know” when a precise heading is possible.
- No emoji, text-symbol icons, placeholder artwork, or visually fake assets.

## Information Architecture

### Global navigation

- Home
- Crowns & Bridges
- Dental Implants
- About
- FAQs
- Send a Case

The header remains compact and visually quiet. “Send a Case” is the single emphasized action.

### Home

Purpose: explain the laboratory proposition and route visitors to the correct service.

Sections:

1. Focused hero using the central “restore your smile” visual idea, rewritten for a B2B laboratory audience.
2. Two service routes: Crowns & Bridges and Dental Implants.
3. Concise digital workflow: send files, review, manufacture, quality check, dispatch.
4. Materials overview limited to confirmed laboratory offerings.
5. Trust section based on process transparency and communication, not invented statistics.
6. Final case-submission CTA.

### Crowns & Bridges

Purpose: present crown and bridge production as its own service journey.

Sections:

1. Dedicated crown hero inspired by the right reference panel.
2. Restoration types and confirmed materials.
3. Case requirements and digital submission steps.
4. Quality-control approach.
5. Send-a-case CTA.

### Dental Implants

Purpose: explain implant restoration capability without mixing it into the homepage hero.

Sections:

1. Dedicated implant hero inspired by the left reference panel.
2. Supported implant restoration types.
3. Required records and submission workflow.
4. Technical review and manufacturing process.
5. Discuss-an-implant-case CTA.

### About

Purpose: establish credibility through the company’s operating approach, not generic brand statements.

Sections:

1. Who Milling Works serves.
2. How the laboratory works with practices and partner labs.
3. Quality, communication, and case ownership principles.
4. Contact CTA.

### FAQs

Group questions by case submission, materials, implants, turnaround, delivery, and support. Answers must distinguish confirmed facts from items that require a case review.

### Send a Case

Provide a short, structured enquiry form and honest WhatsApp/email handoffs. Do not claim that a case or file was uploaded unless a real backend exists.

## Component Strategy

- Retain the existing React, TypeScript, Vite, routing, form, and chatbot foundations where they remain useful.
- Replace the current homepage composition with page-specific hero and content modules.
- Create one shared editorial hero system with page-specific variants rather than duplicating full layouts.
- Create a service-detail template shared by Crowns & Bridges and Dental Implants, while allowing unique imagery and content.
- Keep the existing accessible header, accordion, form validation, focus management, and route scroll behaviour when compatible with the new design.
- Simplify or remove components whose only purpose is decorative repetition.

## Chatbot

The chatbot remains available but is reframed as a laboratory case assistant. It can:

- Route visitors to crowns/bridges or implant information.
- Collect basic case context.
- Prepare an email or WhatsApp enquiry.
- Clearly state that no file or message has been submitted until the visitor completes the external handoff.

## Responsive Behaviour

- Desktop: one strong editorial composition, not simulated phone screens.
- Tablet: preserve headline scale and image prominence while reducing decorative cropping.
- Mobile: each page becomes its own tall, single-screen-inspired composition based on the supplied reference. Service pages must never be combined into a horizontal three-screen montage.
- Ensure no horizontal overflow, clipped restoration imagery, or off-screen CTAs at 390px width.
- Keep interactive targets at least 44px and maintain visible keyboard focus.

## Content Rules

- Use concise B2B dental language.
- Prefer specific nouns and actions over promotional adjectives.
- Do not claim UK/Europe reach, named software compatibility, material availability, certifications, production capacity, or turnaround until confirmed.
- When business facts are unavailable, use neutral process language or mark the point for business confirmation outside the public UI.

## Testing and Acceptance

- Update unit tests to match the approved information architecture and copy.
- Verify all routes, navigation, chatbot paths, form validation, and handoff links.
- Test desktop at 1440×900, tablet at 768×1024, and mobile at 390×844.
- Compare the coded pages against the supplied reference for colour, typographic scale, spacing, image prominence, and mobile silhouette—without reproducing its branding or combining its panels.
- Run production build, unit tests, and E2E tests.
- Complete design QA with `design-qa.md` reporting `final result: passed` before handoff.

## Success Criteria

- A client immediately understands that Milling Works is a dental laboratory.
- The homepage has one clear hero and two clear service routes.
- Crowns & Bridges and Dental Implants have separate, complete pages.
- The UI looks intentionally art-directed rather than assembled from generic cards.
- Every public claim is credible and supportable.
- The core case-enquiry journey works on desktop and mobile.
