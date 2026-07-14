# Dental Laboratory Professional Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Milling Works as a focused, professional B2B dental laboratory website with separate Crowns & Bridges and Dental Implants experiences inspired by the supplied blue mobile reference.

**Architecture:** Keep the existing React/TypeScript/Vite foundation and accessible interaction primitives. Replace the current broad homepage with a compact editorial composition, add two service-detail routes driven by typed page content, and consolidate visual styling into an intentionally restrained dental design system. Preserve honest contact and chatbot handoffs without adding a backend.

**Tech Stack:** React 19, TypeScript, React Router 7, Vite 6, Phosphor Icons, Vitest, Testing Library, Playwright.

## Global Constraints

- Milling Works provides dental laboratory services only.
- The three supplied reference panels represent three separate page concepts and must never be combined into one homepage montage.
- Use blue approximately `#68A7D8`, white, mist blue, deep navy, and a restrained lime accent.
- Do not add unsupported metrics, reviews, testimonials, certifications, tolerances, compatibility, turnaround, or geographic claims.
- Do not use CSS art, handcrafted SVG assets, emoji, text-symbol icons, temporary stand-in visuals, glass cards, or decorative gradient blobs.
- Keep the core case-enquiry journey functional at 1440×900, 768×1024, and 390×844.
- Follow test-driven development for every behaviour change.

---

### Task 1: Lock the dental-lab-only route and content contract

**Files:**
- Create: `src/content/servicePages.ts`
- Modify: `src/app/routes.tsx`
- Modify: `src/components/layout/SiteHeader.tsx`
- Modify: `src/components/layout/SiteFooter.tsx`
- Modify: `src/pages/Pages.test.tsx`
- Modify: `src/app/App.test.tsx`

**Interfaces:**
- Produces: `ServicePageContent` and `servicePages: Record<'crowns-bridges' | 'dental-implants', ServicePageContent>`.
- Produces routes `/crowns-bridges` and `/dental-implants`.
- Preserves redirects from `/services` and `/record-auditing` to `/dental-lab`.

- [ ] **Step 1: Write failing route tests**

Add route assertions that render `/crowns-bridges` and `/dental-implants`, then expect unique level-one headings:

```tsx
expect(screen.getByRole('heading', { level: 1, name: /Crowns and bridges/i })).toBeInTheDocument()
expect(screen.getByRole('heading', { level: 1, name: /Implant restorations/i })).toBeInTheDocument()
```

- [ ] **Step 2: Run the focused tests and verify RED**

Run: `npm run test:run -- src/pages/Pages.test.tsx src/app/App.test.tsx`

Expected: FAIL because the two routes and headings do not exist.

- [ ] **Step 3: Add the typed content contract**

Create:

```ts
export interface ServicePageContent {
  slug: 'crowns-bridges' | 'dental-implants'
  eyebrow: string
  title: string
  introduction: string
  heroImage: string
  heroAlt: string
  offerings: readonly { title: string; description: string }[]
  workflow: readonly { title: string; description: string }[]
  ctaLabel: string
}
```

Populate only supportable process language. Do not state specific materials, systems, turnaround times, certifications, or tolerance numbers unless already confirmed by the user.

- [ ] **Step 4: Add routes and navigation**

Register `/crowns-bridges` and `/dental-implants`. Navigation order must be Home, Crowns & Bridges, Dental Implants, About, FAQs, Send a Case. Remove the generic Dental Lab navigation item while keeping `/dental-lab` as a compatibility redirect to `/crowns-bridges`.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run: `npm run test:run -- src/pages/Pages.test.tsx src/app/App.test.tsx`

Expected: PASS for the updated routing assertions.

- [ ] **Step 6: Commit**

```bash
git add src/content/servicePages.ts src/app/routes.tsx src/components/layout/SiteHeader.tsx src/components/layout/SiteFooter.tsx src/pages/Pages.test.tsx src/app/App.test.tsx
git commit -m "feat: focus navigation on dental laboratory services"
```

### Task 2: Build the shared editorial service-page system

**Files:**
- Create: `src/components/ui/EditorialHero.tsx`
- Create: `src/components/ui/ServiceDetailPage.tsx`
- Create: `src/components/ui/EditorialHero.test.tsx`
- Create: `src/pages/CrownsBridgesPage.tsx`
- Create: `src/pages/DentalImplantsPage.tsx`
- Modify: `src/app/routes.tsx`

**Interfaces:**
- `EditorialHeroProps`: `eyebrow`, `title`, `introduction`, `image`, `imageAlt`, `primaryAction`, optional `secondaryAction`, and `variant`.
- `ServiceDetailPageProps`: `{ content: ServicePageContent }`.

- [ ] **Step 1: Write a failing hero accessibility test**

```tsx
render(<EditorialHero {...props} />)
expect(screen.getByRole('heading', { level: 1, name: props.title })).toBeInTheDocument()
expect(screen.getByRole('img', { name: props.imageAlt })).toHaveAttribute('src', props.image)
expect(screen.getByRole('link', { name: 'Send a case' })).toHaveAttribute('href', '/contact')
```

- [ ] **Step 2: Verify RED**

Run: `npm run test:run -- src/components/ui/EditorialHero.test.tsx`

Expected: FAIL because `EditorialHero` does not exist.

- [ ] **Step 3: Implement `EditorialHero`**

Use semantic `<section aria-labelledby>` markup, a single `<h1>`, one real `<img>`, and standard React Router links. The `variant` may add class names only: `editorial-hero--home`, `editorial-hero--crowns`, or `editorial-hero--implants`.

- [ ] **Step 4: Implement the shared service template and thin route pages**

`CrownsBridgesPage` and `DentalImplantsPage` each select one entry from `servicePages` and pass it to `ServiceDetailPage`. The shared page renders exactly: hero, offerings, workflow, quality statement, and final CTA.

- [ ] **Step 5: Verify GREEN**

Run: `npm run test:run -- src/components/ui/EditorialHero.test.tsx src/pages/Pages.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/EditorialHero.tsx src/components/ui/ServiceDetailPage.tsx src/components/ui/EditorialHero.test.tsx src/pages/CrownsBridgesPage.tsx src/pages/DentalImplantsPage.tsx src/app/routes.tsx
git commit -m "feat: add separate crown and implant service experiences"
```

### Task 3: Replace the homepage with one focused laboratory story

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/HomePage.test.tsx`
- Modify: `src/content/services.ts`
- Delete when unused: `src/components/ui/TrustMetrics.tsx`
- Delete when unused: `src/components/ui/WhyChooseCard.tsx`
- Delete when unused: `src/content/stats.ts`
- Delete when unused: `src/content/whyChooseUs.ts`

**Interfaces:**
- Home hero uses `EditorialHero` with `variant="home"`.
- Service routes link only to `/crowns-bridges` and `/dental-implants`.

- [ ] **Step 1: Rewrite homepage tests before production code**

Assert:

```tsx
expect(screen.getByRole('heading', { level: 1, name: /Dental restorations, made with intent/i })).toBeInTheDocument()
expect(screen.getByRole('link', { name: /Explore crowns and bridges/i })).toHaveAttribute('href', '/crowns-bridges')
expect(screen.getByRole('link', { name: /Explore implant restorations/i })).toHaveAttribute('href', '/dental-implants')
expect(screen.queryByText(/311 reviews|98%|Principal Dentist|Lab Manager/i)).not.toBeInTheDocument()
```

- [ ] **Step 2: Verify RED**

Run: `npm run test:run -- src/pages/HomePage.test.tsx`

Expected: FAIL because the old montage and old copy still render.

- [ ] **Step 3: Implement the focused homepage**

Render six sections only: editorial hero, two service routes, four-step workflow, concise materials/process statement, communication-based trust statement, and final CTA. Remove testimonials, invented metrics, software-logo grids, manufacturing-capacity claims, and duplicated FAQ content from the homepage.

- [ ] **Step 4: Remove unused generic homepage modules**

Delete only files with zero remaining imports, confirmed by:

Run: `rg "TrustMetrics|WhyChooseCard|stats|whyChooseUs" src`

Expected: no production imports before deletion.

- [ ] **Step 5: Verify GREEN**

Run: `npm run test:run -- src/pages/HomePage.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A src/pages/HomePage.tsx src/pages/HomePage.test.tsx src/content/services.ts src/components/ui src/content
git commit -m "feat: replace homepage with focused dental lab story"
```

### Task 4: Apply the Precision Dental Editorial design system

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/styles/components.css`
- Modify: `src/components/layout/SiteHeader.tsx`
- Modify: `src/components/layout/SiteFooter.tsx`
- Modify: `src/brand/MillingWorksLogo.tsx`
- Modify: `src/brand/MillingWorksLogo.test.tsx`

**Interfaces:**
- CSS tokens provide `--blue-lab: #68a7d8`, `--blue-lab-deep`, `--navy`, `--mist`, `--lime`, four spacing tiers, three radii, and restrained shadow levels.
- Existing `.button`, `.shell`, `.site-header`, and `.site-footer` public class names remain available.

- [ ] **Step 1: Write failing brand and header behaviour assertions**

Test that the logo remains accessible, navigation contains the two service links, and the active service route is announced with `aria-current="page"`.

- [ ] **Step 2: Verify RED**

Run: `npm run test:run -- src/brand/MillingWorksLogo.test.tsx src/app/App.test.tsx`

Expected: at least one assertion fails against the old navigation or class contract.

- [ ] **Step 3: Replace the tokens and global typography**

Use a light display weight for hero headings, readable body weight, maximum content widths, square-to-soft radii rather than pills by default, and one lime accent. Remove animated floating/rotating/pulsing effects and generic gradient blobs.

- [ ] **Step 4: Restyle page-specific editorial heroes and layouts**

Desktop uses a single split composition with text and one dominant dental image. Mobile uses one tall blue composition per route, never a three-card carousel or horizontal montage. Preserve readable text and visible CTAs at 390px.

- [ ] **Step 5: Verify GREEN and CSS integrity**

Run: `npm run test:run -- src/brand/MillingWorksLogo.test.tsx src/app/App.test.tsx`

Run: `npm run build`

Expected: tests PASS and production build exits 0.

- [ ] **Step 6: Commit**

```bash
git add src/styles/global.css src/styles/components.css src/components/layout/SiteHeader.tsx src/components/layout/SiteFooter.tsx src/brand/MillingWorksLogo.tsx src/brand/MillingWorksLogo.test.tsx
git commit -m "style: introduce precision dental editorial system"
```

### Task 5: Align supporting pages and chatbot with the laboratory scope

**Files:**
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/FaqPage.tsx`
- Modify: `src/pages/ContactPage.tsx`
- Modify: `src/components/forms/ContactForm.tsx`
- Modify: `src/components/forms/ContactForm.test.tsx`
- Modify: `src/chatbot/chatbotData.ts`
- Modify: `src/chatbot/chatbotMachine.test.ts`
- Modify: `src/chatbot/Chatbot.test.tsx`

**Interfaces:**
- Contact service choices are exactly `Crowns & Bridges`, `Dental Implants`, and `Technical question`.
- Chatbot routes users to either service page or prepares the existing honest email/WhatsApp handoff.

- [ ] **Step 1: Write failing form and chatbot scope tests**

Assert the three service choices appear and removed topics such as record auditing or generic outsourcing do not appear.

- [ ] **Step 2: Verify RED**

Run: `npm run test:run -- src/components/forms/ContactForm.test.tsx src/chatbot/chatbotMachine.test.ts src/chatbot/Chatbot.test.tsx`

Expected: FAIL against the old choices or assistant copy.

- [ ] **Step 3: Rewrite supporting page content**

Keep statements factual and process-led. About explains whom the lab serves and how cases are handled. FAQs group case submission, restoration type, records, review, manufacture, dispatch, and support. Contact avoids fake upload success.

- [ ] **Step 4: Update chatbot and form options**

Preserve current validation and handoff utilities. Change only labels, routes, and prompts required by the dental-lab-only scope.

- [ ] **Step 5: Verify GREEN**

Run: `npm run test:run -- src/components/forms/ContactForm.test.tsx src/chatbot/chatbotMachine.test.ts src/chatbot/Chatbot.test.tsx src/pages/Pages.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/pages/AboutPage.tsx src/pages/FaqPage.tsx src/pages/ContactPage.tsx src/components/forms/ContactForm.tsx src/components/forms/ContactForm.test.tsx src/chatbot
git commit -m "feat: align enquiries and support with dental lab scope"
```

### Task 6: Produce and place original page-specific imagery

**Files:**
- Create: `src/assets/home-lab-hero.webp`
- Create: `src/assets/crowns-hero.webp`
- Create: `src/assets/implants-hero.webp`
- Modify: `src/content/servicePages.ts`
- Modify: `src/pages/HomePage.tsx`

**Interfaces:**
- Each page consumes exactly one page-specific hero asset with descriptive alt text.

- [ ] **Step 1: Measure final image slots**

Record desktop and mobile rendered dimensions for the home, crown, and implant hero media slots before generating assets. Target focal points must remain visible at both aspect ratios.

- [ ] **Step 2: Generate three original raster assets**

Create separate, text-free dental images matching the reference palette and realism: one laboratory restoration scene, one crown restoration composition, and one implant restoration composition. Do not reproduce SmileLab branding, clinicians, review badges, or exact compositions.

- [ ] **Step 3: Inspect each asset**

Open every generated file and reject assets with distorted teeth, tools, hands, anatomy, embedded text, watermarks, or mismatched blue lighting.

- [ ] **Step 4: Place and crop assets responsively**

Use `<img>` elements with `object-fit` and page-specific `object-position`. Do not replace assets with CSS drawings or background gradients.

- [ ] **Step 5: Verify asset loading**

Run: `npm run build`

Expected: all three assets are emitted under `dist/assets` and build exits 0.

- [ ] **Step 6: Commit**

```bash
git add src/assets/home-lab-hero.webp src/assets/crowns-hero.webp src/assets/implants-hero.webp src/content/servicePages.ts src/pages/HomePage.tsx
git commit -m "feat: add original dental laboratory hero imagery"
```

### Task 7: Responsive E2E coverage and visual QA

**Files:**
- Modify: `e2e/site.spec.ts`
- Modify: `e2e/design-qa.spec.ts`
- Modify: `e2e/contact.spec.ts`
- Modify: `e2e/chatbot.spec.ts`
- Modify: `design-qa.md`
- Create: `evidence/professional-redesign/01-home-desktop.png`
- Create: `evidence/professional-redesign/02-home-mobile.png`
- Create: `evidence/professional-redesign/03-crowns-mobile.png`
- Create: `evidence/professional-redesign/04-implants-mobile.png`
- Create: `evidence/professional-redesign/05-contact-mobile.png`

**Interfaces:**
- The final routes and primary interactions are tested at desktop and mobile viewports.

- [ ] **Step 1: Write failing E2E expectations**

Cover navigation from Home to both service pages, opening/closing the mobile menu, opening the chatbot, choosing a dental service, validating the contact form, and verifying no horizontal overflow at 390px.

- [ ] **Step 2: Verify RED**

Run: `npm run test:e2e`

Expected: new assertions fail before final responsive fixes.

- [ ] **Step 3: Fix only observed E2E and responsive failures**

Use the failing test or captured screenshot to drive each change. Do not add unrelated polish.

- [ ] **Step 4: Capture and inspect the five required screenshots**

Capture the current implementation at 1440×900 and 390×844. Open each saved screenshot before accepting it. Reject screenshots showing loading states, clipped images, wrong routes, hidden CTAs, or browser chrome.

- [ ] **Step 5: Complete the design comparison**

Compare the supplied reference and current screenshots at matching mobile scale. Evaluate blue shade, type weight and scale, white space, image prominence, organic silhouette, CTA placement, and separation of the three page concepts. Fix every P0, P1, and P2 issue. Set `design-qa.md` to `final result: passed` only after re-capture confirms the fixes.

- [ ] **Step 6: Run the complete verification gate**

Run:

```bash
npm run test:run
npm run test:e2e
npm run build
git diff --check
git status --short
```

Expected: all unit tests PASS, all E2E tests PASS, build exits 0, `git diff --check` reports no whitespace errors, and only intended redesign files are modified.

- [ ] **Step 7: Commit**

```bash
git add e2e design-qa.md evidence/professional-redesign src
git commit -m "test: verify professional dental lab redesign"
```

### Task 8: Final review and repository handoff

**Files:**
- Review: all files changed since commit `c691229`

**Interfaces:**
- Produces a clean branch ready to push to `origin`.

- [ ] **Step 1: Review requirement coverage**

Confirm dental-lab-only scope, separate Home/Crowns/Implants experiences, restrained blue design, honest content, responsive behaviour, and functional enquiry paths.

- [ ] **Step 2: Review the final diff**

Run: `git diff c691229...HEAD --stat` and `git log --oneline c691229..HEAD`.

Expected: only redesign implementation, tests, assets, QA evidence, and documentation appear.

- [ ] **Step 3: Re-run the complete verification gate immediately before push**

Run: `npm run test:run && npm run test:e2e && npm run build` using the platform-appropriate command separator.

Expected: exit 0 with no failures.

- [ ] **Step 4: Push**

Run: `git push origin codex/milling-works-site:main`

Expected: remote `main` advances to the final verified commit.
