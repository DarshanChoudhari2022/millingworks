# Milling Works Full-Service Lab, Record Auditing, and Contact Redesign

**Date:** 2026-07-14  
**Status:** Approved design direction  
**Reference pages:** NVistas Full Service Dental Labs and Auditing Dental Records  
**Visual reference:** supplied NVistas Contact screenshot

## Objective

Extend the client-approved Milling Works website at commit `251ec01` with three coordinated improvements:

1. A full-service dental laboratory page inspired by the structure of the NVistas reference but rewritten for Milling Works.
2. A dental record auditing page inspired by the NVistas reference but rewritten for Milling Works.
3. A redesigned Contact page matching the supplied split contact layout while retaining Milling Works branding and its truthful WhatsApp/email handoff behaviour.

The existing visual system remains the source of truth: soft laboratory blue, navy, white, restrained lime, light oversized typography, rounded editorial compositions, MW tooth logo, existing navigation behaviour, chatbot, and responsive patterns.

## Confirmed Claims

The client explicitly confirmed that the following claims may be published as facts:

- 15+ years of experience
- 25,000+ cases delivered
- 98% accuracy
- 99% on-time delivery
- UK and Europe coverage
- ISO certified
- GDPR, HIQA, and CQC-compliant dental record auditing

These values must be centralized in one content module and reused wherever displayed. No additional certification, performance, turnaround, staffing, country-count, technician-count, or client-retention figures may be invented.

The requested trust-signal categories `number of technicians`, `countries served`, and `client retention` do not have confirmed numeric values. The design will not fabricate them. Their themes may appear in qualitative copy, such as experienced technicians, UK and Europe coverage, and long-term laboratory partnerships.

## Information Architecture

Primary navigation:

1. Home
2. Full-Service Dental Lab
3. Dental Record Auditing
4. About
5. FAQs
6. Contact Us

Routes:

- `/full-service-dental-lab` — new full-service overview.
- `/record-auditing` — real auditing page replacing the current redirect.
- `/contact` — redesigned contact experience.
- `/crowns-bridges` and `/dental-implants` — retained as focused detail pages and linked from the full-service page.

The header's primary action and footer contact link will use `Contact Us`. The footer heading `Talk to us` becomes `Contact Us`.

## Full-Service Dental Lab Page

### Page purpose

Present Milling Works as a full-service B2B production partner for dental laboratories and dental businesses in the UK and Europe. The page borrows the reference's long-form information rhythm but uses Milling Works' own layouts, colours, copy, assets, and interaction patterns.

### Page structure

1. **Hero**
   - Eyebrow: `Full-service dental laboratory`
   - H1: `Production support across the complete case journey`
   - Short B2B introduction
   - CTA: `Discuss your requirements`

2. **Overview and trust metrics**
   - Concise description of laboratory production support
   - Six verified metrics presented with clear labels and no exaggerated animation:
     - 15+ years of experience
     - 25,000+ cases delivered
     - 98% accuracy
     - 99% on-time delivery
     - UK and Europe coverage
     - ISO certified

3. **Why Milling Works?**
   - Digital-first workflow
   - UK-focused communication
   - Experienced technicians
   - Strict quality control
   - Fast, case-agreed turnaround
   - Implant expertise
   - Secure data handling
   - Clear production support

   `Fast turnaround` must not introduce a new guaranteed number. It will explain that timing is confirmed after case review.

4. **Production capabilities**
   - Custom restorations: crowns, bridges, inlays, and onlays
   - Implant solutions: individual and multi-unit implant restorations
   - Aesthetic restorations: veneers and related restorative work
   - Orthodontic appliances: retainers and functional appliances
   - Digital dentistry: digital case intake and CAD/CAM-led workflows
   - Removable prosthetics: full and partial dentures
   - Surgical and oral appliances: guides and case-specific appliances
   - Quality assurance and support: production checks and technical communication

   Each category uses concise original wording. Links to the existing crown/bridge and implant detail pages are included where appropriate.

5. **Production workflow**
   - Share case requirements
   - Technical review
   - Confirm scope and timing
   - Production and quality control
   - Dispatch and handoff

6. **Closing CTA**
   - Direct visitors to the redesigned Contact page.

### SEO

Natural, readable use of:

- full-service dental lab
- dental laboratory services UK
- dental lab partner Europe
- digital dental laboratory
- crown and bridge laboratory
- implant restoration laboratory
- dental lab quality control
- dental laboratory outsourcing

SEO keywords must appear in useful headings, metadata, introductions, image alternative text, and supporting copy. Hidden keyword lists and repetitive keyword stuffing are prohibited.

The route receives a unique document title, meta description, canonical URL, Open Graph title/description, and JSON-LD `Service` data identifying Milling Works as the provider.

## Dental Record Auditing Page

### Page purpose

Explain a secure, structured auditing service for dental records and related documentation. The page is an operational B2B service description, not legal or clinical advice.

### Page structure

1. **Hero**
   - Eyebrow: `Dental record auditing`
   - H1: `Clearer records. Stronger clinical governance.`
   - CTA: `Discuss an auditing requirement`

2. **Auditing overview**
   - Review of dental records and X-ray documentation
   - Qualified, experienced review support
   - Secure handling and structured reporting

3. **Benefits**
   - More consistent documentation
   - Reduced record gaps and avoidable errors
   - Stronger compliance visibility
   - Better internal communication
   - Training-needs identification
   - Trend identification
   - Operational efficiency

4. **Why regular auditing matters**
   - Explain periodic review, evidence quality, completeness, follow-up information, and improvement planning.
   - Do not copy NVistas' unverified audit sample-size or frequency claims.

5. **Secure auditing workflow**
   - Define scope
   - Agree secure transfer route
   - Review supplied records
   - Produce findings and themes
   - Discuss actions and follow-up

6. **Compliance and trust**
   - GDPR, HIQA, and CQC-compliant process
   - Secure data handling
   - Experienced reviewers
   - UK-focused communication

7. **Disclaimer**
   - Auditing support provides operational review and structured findings.
   - It does not replace legal advice, regulatory guidance, diagnosis, or independent clinical judgement.

8. **Closing CTA**
   - Direct to Contact with auditing selected as the enquiry type.

### SEO

Natural use of:

- dental record auditing
- dental records audit UK
- dental compliance audit
- dental X-ray record review
- GDPR dental records
- CQC dental audit support
- HIQA dental record auditing
- outsourced dental record audit

The route receives unique metadata, canonical URL, Open Graph data, and JSON-LD `Service` data.

## Contact Page Redesign

### Visual composition

The page will follow the supplied NVistas contact reference while remaining visibly part of Milling Works:

- Full-width dental laboratory background using an existing real Milling Works image.
- Navy/blue image treatment with sufficient text contrast.
- Left column: `Contact Us`, concise support copy, phone, email, address, and direct-contact icons from the existing Phosphor library.
- Right column: pale translucent form surface with clear labels and the existing validated contact fields.
- Desktop uses a balanced two-column composition.
- Mobile becomes a single readable column with contact information before the form.

No new gradients, CSS-drawn imagery, fake send state, decorative glass effects, or copied NVistas branding will be introduced.

### Form behaviour

The existing handoff model remains:

- Validate required fields.
- Prepare WhatsApp and email links.
- Clearly state that nothing has been sent.
- Let the visitor review the message in their selected application.

The form does not claim backend delivery. `Dental Record Auditing` is added as an enquiry option.

## Shared Trust and SEO Content

Create typed content modules for:

- confirmed trust metrics;
- Why Milling Works reasons;
- full-service capability categories;
- auditing benefits and workflow;
- route metadata.

Shared content avoids numeric drift between pages and keeps claims testable.

Route-aware document metadata will update on navigation. JSON-LD will be rendered per service route without duplicating or contradicting visible copy.

## Components

Create or adapt focused components:

- `TrustSignalStrip` — verified metrics only.
- `WhyMillingWorks` — eight differentiated reasons.
- `ServiceCapabilitySections` — alternating full-service categories.
- `AuditBenefits` — auditing outcomes.
- `ServiceWorkflow` — reusable numbered workflow.
- `ContactExperience` — split background/contact/form composition.
- `RouteMetadata` — title, description, canonical, Open Graph, and JSON-LD management.

Use existing `EditorialHero`, buttons, logo, chatbot, icons, form validation, handoff utilities, and responsive tokens where suitable.

## Accessibility and Responsive Behaviour

- One H1 per route and logical heading hierarchy.
- WCAG AA contrast for body text and controls.
- 44px minimum touch targets where practical.
- Visible focus styles and keyboard-accessible navigation/form/chatbot.
- Meaningful image alternative text; decorative imagery uses empty alternative text.
- Reduced-motion support remains intact.
- No horizontal overflow at 320px, 390px, 768px, 1024px, and desktop widths.
- Contact background image retains a meaningful crop without hiding required information.

## Testing and Verification

Implementation acceptance requires:

1. Unit tests for navigation, routes, confirmed metrics, Why Milling Works reasons, capability groups, auditing content, enquiry options, and metadata.
2. Guardrail tests preventing numeric drift and unconfirmed certification/performance claims.
3. Contact tests for required fields, auditing option, honest handoff state, and message contents.
4. End-to-end tests for both new routes, deep links, navigation, Contact layout, mobile menu, CTA journeys, chatbot coexistence, and legacy `/record-auditing` replacement.
5. SEO checks for unique title, description, canonical, Open Graph, and JSON-LD on both new service pages.
6. Production build, complete unit suite, complete E2E suite, `git diff --check`, and clean working tree.
7. Desktop and mobile visual captures compared with the supplied Contact reference, NVistas source captures, and the approved Milling Works design.
8. `design-qa.md` ending with `final result: passed` after every P0, P1, and P2 issue is fixed.

## Completion Criteria

The work is complete when:

- `Contact Us` replaces `Talk to us` in the footer.
- The new navigation and both new pages are live and responsive.
- The Full-Service Dental Lab page contains the verified trust metrics, eight Why Milling Works reasons, production categories, workflow, SEO metadata, and CTA.
- The Dental Record Auditing page contains the confirmed compliance claims, original benefits/workflow copy, disclaimer, SEO metadata, and CTA.
- Contact visually follows the supplied reference while preserving Milling Works branding and truthful form behaviour.
- No NVistas wording or purple styling is copied verbatim.
- No unconfirmed number, certification, regulatory, material, or turnaround claim is introduced.
- Automated, build, SEO, accessibility-oriented, interaction, and visual QA checks pass.
