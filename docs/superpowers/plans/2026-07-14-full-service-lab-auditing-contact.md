# Full-Service Lab, Auditing, and Contact Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved Full-Service Dental Lab and Dental Record Auditing pages, verified trust/SEO content, and NVistas-inspired Contact experience without changing unrelated Milling Works pages.

**Architecture:** Add typed expansion content, two focused route components, route-aware metadata, and scoped CSS classes that reuse the existing design system. Preserve the current crown/bridge, implant, About, FAQ, chatbot, handoff, and logo implementations.

**Tech Stack:** React 19, TypeScript, React Router, Vite, Phosphor Icons, existing CSS architecture.

## Global Constraints

- Modify only approved navigation, footer, new service pages, SEO support, Contact page/form option, and scoped styles.
- Preserve the client-approved Milling Works visual system and all unrelated page implementations.
- Publish only the client-confirmed metrics and compliance claims.
- Use original Milling Works wording; do not copy NVistas text or purple styling.
- Reuse existing real imagery and icon library; add no dependencies.
- Keep the Contact form as a truthful WhatsApp/email handoff and never claim backend delivery.
- The user explicitly waived new test-case creation; verify through the existing unit/build/E2E suites and visual inspection.

---

### Task 1: Canonical Expansion Content and Navigation

**Files:**
- Create: `src/content/expansion.ts`
- Modify: `src/app/routes.tsx`
- Modify: `src/components/layout/SiteHeader.tsx`
- Modify: `src/components/layout/SiteFooter.tsx`

**Interfaces:**
- Produces: `trustSignals`, `whyMillingWorks`, `labCapabilities`, `auditBenefits`, `auditWorkflow`, `expansionNavigation`.

- [ ] Add the six confirmed trust signals exactly once in `expansion.ts`.
- [ ] Add the eight approved Why Milling Works reasons.
- [ ] Add eight full-service capability groups and the auditing benefits/workflow.
- [ ] Update primary navigation to Home, Full-Service Dental Lab, Dental Record Auditing, About, FAQs, and Contact Us.
- [ ] Rename footer `Talk to us` to `Contact Us` and add links to both new pages.
- [ ] Add `/full-service-dental-lab` and replace the `/record-auditing` redirect with a real route.
- [ ] Commit with `feat: add dental service expansion routes`.

### Task 2: Shared Expansion Components and Full-Service Page

**Files:**
- Create: `src/components/ui/TrustSignalStrip.tsx`
- Create: `src/components/ui/WhyMillingWorks.tsx`
- Create: `src/components/ui/ServiceWorkflow.tsx`
- Create: `src/pages/FullServiceDentalLabPage.tsx`

**Interfaces:**
- Consumes typed arrays from `src/content/expansion.ts`.
- Produces reusable trust, differentiation, workflow, and capability presentation.

- [ ] Build semantic, accessible trust and differentiation components.
- [ ] Build the full-service hero using the existing `hero-center-lab.webp` asset.
- [ ] Add overview, metrics, Why Milling Works, capability groups, workflow, and Contact CTA.
- [ ] Link crown/bridge and implant groups to the existing focused pages.
- [ ] Use the existing spacing, button, heading, colour, and rounded-section language.
- [ ] Commit with `feat: add full-service dental lab page`.

### Task 3: Dental Record Auditing Page

**Files:**
- Create: `src/pages/DentalRecordAuditingPage.tsx`

**Interfaces:**
- Consumes `auditBenefits`, `auditWorkflow`, and confirmed compliance content.

- [ ] Build the auditing hero using an existing Milling Works dental image.
- [ ] Add overview, benefits, regular-audit rationale, secure workflow, compliance/trust, disclaimer, and Contact CTA.
- [ ] Use original wording and avoid unconfirmed audit frequency or sample-size claims.
- [ ] Link the CTA to `/contact?service=Dental%20Record%20Auditing`.
- [ ] Commit with `feat: add dental record auditing page`.

### Task 4: Route Metadata and SEO

**Files:**
- Create: `src/content/routeMetadata.ts`
- Create: `src/components/seo/RouteMetadata.tsx`
- Modify: `src/pages/FullServiceDentalLabPage.tsx`
- Modify: `src/pages/DentalRecordAuditingPage.tsx`

**Interfaces:**
- Produces `RouteMetadata` props for title, description, canonical path, keywords, and JSON-LD.

- [ ] Add unique page titles, descriptions, canonical URLs, Open Graph data, and Service JSON-LD.
- [ ] Use keywords naturally in visible headings/copy; add no hidden keyword blocks.
- [ ] Restore prior document metadata when a route unmounts.
- [ ] Commit with `feat: add service page metadata`.

### Task 5: Contact Experience

**Files:**
- Modify: `src/pages/ContactPage.tsx`
- Modify: `src/components/forms/ContactForm.tsx`
- Modify: `src/styles/components.css`

**Interfaces:**
- Preserves existing `ContactForm` handoff behaviour.
- Adds `Dental Record Auditing` to the enquiry options and query-string preselection.

- [ ] Replace the separate hero/layout with one full-width contact composition using `hero-center-lab.webp`.
- [ ] Add a readable navy/blue image overlay, left contact details, and right pale form surface.
- [ ] Preserve phone, email, address, validation, WhatsApp/email handoff, and unsent-state language.
- [ ] Add auditing as an enquiry option and support `?service=` preselection.
- [ ] Stack the layout cleanly on mobile with no horizontal overflow.
- [ ] Commit with `feat: redesign contact experience`.

### Task 6: Scoped Visual Polish and Verification

**Files:**
- Modify: `src/styles/components.css`
- Modify: `src/styles/global.css` only if a shared token is required.
- Modify: `design-qa.md`

**Interfaces:**
- Consumes only the new scoped class names from Tasks 2–5.

- [ ] Style the new pages with existing blue/navy/white/lime tokens and editorial typography.
- [ ] Ensure WCAG AA contrast, focus visibility, 44px targets, reduced motion, and responsive image crops.
- [ ] Run `npm run test:run`, `npm run build`, `npm run test:e2e`, and `git diff --check` without adding new test cases.
- [ ] Capture desktop/mobile Full-Service, Auditing, and Contact pages.
- [ ] Compare against supplied/reference captures and fix every P0/P1/P2 issue.
- [ ] Update `design-qa.md` so it ends with `final result: passed`.
- [ ] Commit with `style: polish service expansion pages`.
