# Milling Works Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a production-ready, responsive, multi-page Milling Works B2B dental website with original branding, reference-faithful visual styling, contact handoffs, and a deterministic chatbot.

**Architecture:** A Vite React application uses React Router for route-based pages and focused reusable components for the site shell, branded sections, forms, and chatbot. Shared business content lives in typed local data modules, while all form and chatbot handoffs are generated locally as WhatsApp or `mailto:` URLs without falsely reporting backend delivery.

**Tech Stack:** React 19, TypeScript, Vite, React Router, Lucide React, CSS, Vitest, Testing Library, Playwright

## Global Constraints

- Brand name: **Milling Works**.
- Contacts: Akash Gaurav and Arjun Rana.
- Phone and WhatsApp: **+91 83909 98058**.
- Email: **sales@millingworks.com**.
- Address: **Building B, Office 317, Surawalla Mark Plazzo, S. No. 27, Mulshi, Hinjawadi, Pune 411057, India**.
- Use original Milling Works copy and assets; do not reproduce Nvistas wording, SmileLab branding, or third-party proprietary images.
- The homepage must follow the approved reference-faithful direction: soft mint-to-lime background, three overlapping rounded blue panels, oversized white type, glossy dental imagery, subtle technical line work, and lime calls to action.
- The frontend must never claim that an enquiry was delivered; it only prepares WhatsApp or email handoffs.
- Every route and interactive control must work with keyboard navigation, visible focus, semantic markup, and reduced-motion preferences.

---

### Task 1: Application Foundation and Routing

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/app/App.tsx`
- Create: `src/app/routes.tsx`
- Create: `src/pages/PlaceholderPage.tsx`
- Create: `src/pages/NotFoundPage.tsx`
- Create: `src/test/setup.ts`
- Create: `src/app/App.test.tsx`

**Interfaces:**
- Produces: `App(): JSX.Element`, `appRoutes: RouteObject[]`, and working routes `/`, `/about`, `/services`, `/dental-lab`, `/record-auditing`, `/faqs`, `/contact`, and `*`.

- [ ] **Step 1: Bootstrap dependencies and scripts**

Create `package.json` with scripts `dev`, `build`, `preview`, `test`, `test:run`, and `test:e2e`; dependencies `react`, `react-dom`, `react-router-dom`, and `lucide-react`; dev dependencies for TypeScript, Vite, Vitest, jsdom, Testing Library, and Playwright. Run `npm install`.

Run: `npm install`
Expected: exit code 0 and `package-lock.json` created.

- [ ] **Step 2: Write the failing route test**

In `src/app/App.test.tsx`, render `App` through `MemoryRouter` and assert that `/about` exposes a heading named `About Milling Works`, while an unknown route exposes `Page not found` and a `Back to home` link.

Run: `npm run test:run -- src/app/App.test.tsx`
Expected: FAIL because `App` and routes do not exist.

- [ ] **Step 3: Implement the minimal app and route table**

Implement `appRoutes` with lazy-ready page elements and a temporary `PlaceholderPage` accepting `{ title: string }`. Implement `NotFoundPage` with a home link. Mount `RouterProvider` in `main.tsx` and import the global stylesheet that Task 3 will create.

- [ ] **Step 4: Verify the route test and production compile**

Run: `npm run test:run -- src/app/App.test.tsx`
Expected: PASS with two assertions.

Run: `npm run build`
Expected: Vite completes without TypeScript or bundling errors.

- [ ] **Step 5: Commit the foundation**

Run: `git add package.json package-lock.json vite.config.ts tsconfig*.json index.html src && git commit -m "feat: scaffold Milling Works site"`

---

### Task 2: Brand Mark, Shared Content, and Handoff Utilities

**Files:**
- Create: `src/brand/MillingWorksLogo.tsx`
- Create: `src/brand/MillingWorksLogo.test.tsx`
- Create: `src/content/company.ts`
- Create: `src/content/services.ts`
- Create: `src/content/faqs.ts`
- Create: `src/lib/handoffs.ts`
- Create: `src/lib/handoffs.test.ts`

**Interfaces:**
- Produces: `MillingWorksLogo({ compact?, inverse? }): JSX.Element`.
- Produces: `company` with `name`, `contacts`, `phoneDisplay`, `phoneDigits`, `email`, and `address`.
- Produces: `services: Service[]` and `faqs: FaqItem[]`.
- Produces: `createWhatsAppUrl(message: string): string` and `createEmailUrl(subject: string, body: string): string`.

- [ ] **Step 1: Write failing brand and handoff tests**

Assert the logo has accessible name `Milling Works home`, contains an SVG title `Milling Works MW tooth mark`, and renders the full brand name unless `compact` is true. Assert `createWhatsAppUrl('Dental lab quote')` returns a URL beginning `https://wa.me/918390998058?text=` and that decoded text equals the input. Assert the email URL begins `mailto:sales@millingworks.com?` and includes encoded subject and body.

Run: `npm run test:run -- src/brand/MillingWorksLogo.test.tsx src/lib/handoffs.test.ts`
Expected: FAIL because the modules do not exist.

- [ ] **Step 2: Implement the original MW tooth mark**

Build the mark as inline SVG paths: an outer tooth silhouette in blue, an internal continuous `M`/`W` monogram in lime, and a wordmark in text outside the SVG. Use `currentColor`-compatible classes rather than rasterized text so the mark remains crisp and themeable.

- [ ] **Step 3: Implement exact shared business data**

Define typed data for the four service families: Full-Service Dental Lab, Record Auditing, Dental Design Support, and Practice Outsourcing. Define FAQ groups for Services, Digital Cases, Turnaround & Delivery, Quality, Privacy, Auditing, and Pricing. Do not claim ISO, FDA, GDPR, HIQA, or CQC certification; describe compliance checks as configurable to client requirements.

- [ ] **Step 4: Implement safe handoff utilities**

Use `URLSearchParams` for WhatsApp text and encode `mailto:` subject/body values with `encodeURIComponent`. Treat these functions as URL preparation only; no delivery status is returned.

- [ ] **Step 5: Run tests and commit**

Run: `npm run test:run -- src/brand/MillingWorksLogo.test.tsx src/lib/handoffs.test.ts`
Expected: PASS.

Run: `git add src/brand src/content src/lib && git commit -m "feat: add Milling Works brand and content model"`

---

### Task 3: Responsive Site Shell and Reference-Faithful Homepage

**Files:**
- Create: `src/styles/global.css`
- Create: `src/styles/components.css`
- Create: `src/components/layout/SiteHeader.tsx`
- Create: `src/components/layout/SiteFooter.tsx`
- Create: `src/components/layout/SiteLayout.tsx`
- Create: `src/components/ui/SectionIntro.tsx`
- Create: `src/components/ui/ServiceCard.tsx`
- Create: `src/components/ui/ProcessSteps.tsx`
- Create: `src/components/ui/CallToAction.tsx`
- Create: `src/components/ui/WhatsAppButton.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/HomePage.test.tsx`
- Create: `src/assets/hero-tooth.webp`
- Modify: `src/app/routes.tsx`

**Interfaces:**
- Consumes: `MillingWorksLogo`, `services`, `company`, and `createWhatsAppUrl` from Task 2.
- Produces: `SiteLayout` with header, `Outlet`, footer, floating WhatsApp control, and a reserved chatbot layer.
- Produces: `HomePage(): JSX.Element`.

- [ ] **Step 1: Write the failing homepage behavior test**

Render `/` and assert headings `Precision Behind Every Smile`, `Dental Implants`, and `Dental Crowns`; links `Send a Case` and `Book a Consultation`; service card headings; and a WhatsApp link whose `href` targets the confirmed number. Toggle the mobile menu and assert `aria-expanded` changes from `false` to `true`.

Run: `npm run test:run -- src/pages/HomePage.test.tsx`
Expected: FAIL because the homepage and shell do not exist.

- [ ] **Step 2: Create the hero dental asset**

Use the built-in image generation workflow with this production prompt:

```text
Use case: product-mockup
Asset type: transparent-ready website hero dental object
Primary request: a premium glossy ceramic molar mounted on a precision titanium dental implant abutment, centered and isolated
Style/medium: high-end photorealistic 3D dental product render
Composition/framing: full object visible, generous padding, straight-on three-quarter view
Lighting/mood: bright clinical studio lighting with polished highlights
Scene/backdrop: perfectly flat solid #00ff00 chroma-key background
Constraints: medically plausible proportions; no text; no logo; no people; no cast shadow; no reflection; do not use green on the subject
```

Remove the chroma key with the installed imagegen helper, validate transparent corners and clean edges, and save the final file as `src/assets/hero-tooth.webp`.

- [ ] **Step 3: Implement tokens and site shell**

Define CSS custom properties for navy, sky blue, lime, mint, white, muted text, radii, shadows, layout width, and fluid type. Add a skip link, sticky header, desktop navigation, keyboard-operable mobile menu, footer, floating WhatsApp button, focus-visible styles, and a reduced-motion media query.

- [ ] **Step 4: Implement the three-panel homepage hero**

Create left `Dental Implants`, center `Precision Behind Every Smile`, and right `Dental Crowns` panels. Use original copy, the generated tooth render, CSS technical-line overlays, lime circular CTAs, and responsive transformations that become a vertical card stack below 860px.

- [ ] **Step 5: Add the full homepage narrative**

Add service overview, five-step digital workflow, quality/confidentiality proof, UK/Europe support, representative trust statements without fabricated customer names, and closing consultation CTA.

- [ ] **Step 6: Run tests, build, and commit**

Run: `npm run test:run -- src/pages/HomePage.test.tsx`
Expected: PASS.

Run: `npm run build`
Expected: PASS with generated assets emitted.

Run: `git add src && git commit -m "feat: build reference-faithful Milling Works homepage"`

---

### Task 4: Interior Pages, FAQ, and Contact Form

**Files:**
- Create: `src/components/ui/PageHero.tsx`
- Create: `src/components/ui/Accordion.tsx`
- Create: `src/components/forms/ContactForm.tsx`
- Create: `src/components/forms/ContactForm.test.tsx`
- Create: `src/pages/AboutPage.tsx`
- Create: `src/pages/ServicesPage.tsx`
- Create: `src/pages/DentalLabPage.tsx`
- Create: `src/pages/RecordAuditingPage.tsx`
- Create: `src/pages/FaqPage.tsx`
- Create: `src/pages/ContactPage.tsx`
- Create: `src/pages/Pages.test.tsx`
- Modify: `src/app/routes.tsx`
- Modify: `src/styles/components.css`

**Interfaces:**
- Consumes: shared `company`, `services`, `faqs`, `PageHero`, and handoff utilities.
- Produces: `ContactForm({ defaultService? }): JSX.Element` and all final route page components.

- [ ] **Step 1: Write failing interior-page and form tests**

For each route, assert its unique H1 and at least one route-specific section. For the contact form, submit empty fields and assert visible errors for name, email, service, and message; enter an invalid email and assert `Enter a valid email address`; enter valid data and assert the resulting WhatsApp link includes the person's name and selected service.

Run: `npm run test:run -- src/pages/Pages.test.tsx src/components/forms/ContactForm.test.tsx`
Expected: FAIL because final pages and form do not exist.

- [ ] **Step 2: Implement reusable interior-page components**

Build `PageHero` with eyebrow, H1, summary, optional metrics, and blue organic background. Build `Accordion` as buttons with `aria-expanded`, `aria-controls`, and keyboard-native behavior.

- [ ] **Step 3: Implement all content pages**

Use the approved information architecture and shared data. Include Akash Gaurav and Arjun Rana on About. Cover crowns, veneers, bridges, implant solutions, digital workflows, materials, review, manufacture, quality control, and delivery on Dental Lab. Cover records, X-rays, completeness, consistency, confidentiality, reports, and configurable client checks on Record Auditing.

- [ ] **Step 4: Implement honest contact handoff**

Validate required fields and email format. On valid input, show `Your enquiry is ready` with `Continue on WhatsApp` and `Open email` links plus the confirmed phone and email. Preserve all entered content and never display `sent`, `delivered`, or equivalent backend-success language.

- [ ] **Step 5: Run tests, build, and commit**

Run: `npm run test:run -- src/pages/Pages.test.tsx src/components/forms/ContactForm.test.tsx`
Expected: PASS.

Run: `npm run build`
Expected: PASS.

Run: `git add src && git commit -m "feat: add Milling Works service and contact pages"`

---

### Task 5: Guided Chatbot and Lead Capture

**Files:**
- Create: `src/chatbot/chatbotData.ts`
- Create: `src/chatbot/chatbotMachine.ts`
- Create: `src/chatbot/chatbotMachine.test.ts`
- Create: `src/chatbot/Chatbot.tsx`
- Create: `src/chatbot/Chatbot.test.tsx`
- Modify: `src/components/layout/SiteLayout.tsx`
- Modify: `src/styles/components.css`

**Interfaces:**
- Produces: `ChatState`, `ChatAction`, and `chatReducer(state: ChatState, action: ChatAction): ChatState`.
- Produces: `Chatbot(): JSX.Element`, mounted once inside `SiteLayout`.
- Consumes: `createWhatsAppUrl`, `createEmailUrl`, and shared service/contact data.

- [ ] **Step 1: Write failing reducer tests**

Assert initial state opens at the menu; selecting `dental-lab` shows the dental lab answer and next actions; `back` returns to menu; `start-lead` begins name capture; name/contact/service/message actions retain values; `complete-lead` reaches handoff; `reset` clears personal data.

Run: `npm run test:run -- src/chatbot/chatbotMachine.test.ts`
Expected: FAIL because the reducer does not exist.

- [ ] **Step 2: Implement deterministic chatbot data and reducer**

Add prepared paths for dental lab, record auditing, digital case submission, turnaround and delivery, pricing and quotations, and direct contact. Ensure every answer offers either another topic, `Back to menu`, or `Talk to a person`.

- [ ] **Step 3: Write failing widget interaction tests**

Assert the launcher has accessible name `Open Milling Works assistant`; opening moves focus to the dialog heading; Escape closes it and returns focus to the launcher; choosing dental lab displays its answer; completing lead capture exposes WhatsApp/email links; minimizing preserves the conversation; resetting clears it.

Run: `npm run test:run -- src/chatbot/Chatbot.test.tsx`
Expected: FAIL because the widget does not exist.

- [ ] **Step 4: Implement the accessible chatbot widget**

Build the floating launcher, dialog, message history, quick replies, lead form steps, progress/status text, close/minimize controls, and handoff actions. Use a polite live region only for newly appended assistant messages. Position the widget so it does not overlap the WhatsApp control or mobile navigation.

- [ ] **Step 5: Run chatbot tests and commit**

Run: `npm run test:run -- src/chatbot/chatbotMachine.test.ts src/chatbot/Chatbot.test.tsx`
Expected: PASS.

Run: `git add src/chatbot src/components/layout/SiteLayout.tsx src/styles/components.css && git commit -m "feat: add guided dental services chatbot"`

---

### Task 6: Browser Verification, Accessibility, and Final Polish

**Files:**
- Create: `playwright.config.ts`
- Create: `e2e/site.spec.ts`
- Create: `e2e/chatbot.spec.ts`
- Create: `e2e/contact.spec.ts`
- Modify: `src/styles/global.css`
- Modify: `src/styles/components.css`
- Modify: affected components found during verification
- Create: `README.md`

**Interfaces:**
- Consumes: the complete application.
- Produces: repeatable browser checks for routing, responsive layout, chatbot, and contact handoffs.

- [ ] **Step 1: Write end-to-end route and responsive tests**

In `site.spec.ts`, visit all seven routes plus an unknown route, assert one visible H1 per page, assert header/footer visibility, test the mobile menu at 390×844, and assert no horizontal overflow at 390px, 768px, and 1440px.

- [ ] **Step 2: Write end-to-end chatbot and contact tests**

In `chatbot.spec.ts`, open the assistant, follow Dental Lab, return to menu, complete lead capture, and assert the WhatsApp URL includes `918390998058`. In `contact.spec.ts`, verify invalid fields are announced and valid data creates WhatsApp and email links without displaying `sent` or `delivered`.

- [ ] **Step 3: Run the browser suite and fix defects**

Run: `npx playwright install chromium`
Expected: Chromium installs successfully.

Run: `npm run test:e2e`
Expected: all route, responsive, chatbot, and contact tests pass.

- [ ] **Step 4: Perform visual QA in a real browser**

Run: `npm run dev -- --host 127.0.0.1`

Inspect the homepage and every interior page at 1440×900, 768×1024, and 390×844. Compare the homepage with the supplied reference for three-panel hierarchy, blue panel shape, oversized typography, tooth prominence, mint background, and lime CTA accents. Check clipping, wrapping, sticky-header behavior, chatbot/WhatsApp overlap, hover/focus states, and reduced motion. Fix every observed defect before continuing.

- [ ] **Step 5: Run the complete verification suite**

Run: `npm run test:run`
Expected: all unit and component tests pass.

Run: `npm run test:e2e`
Expected: all Playwright tests pass.

Run: `npm run build`
Expected: production build succeeds without warnings that affect runtime.

Check the browser console on Home, Dental Lab, Contact, and the chatbot flow.
Expected: no uncaught errors or failed local asset requests.

- [ ] **Step 6: Document and commit the verified result**

Create `README.md` with project purpose, confirmed contact data, `npm install`, `npm run dev`, `npm run test:run`, `npm run test:e2e`, and `npm run build` instructions. State clearly that enquiries hand off to WhatsApp/email and no backend is included.

Run: `git add README.md playwright.config.ts e2e src && git commit -m "test: verify responsive Milling Works website"`

## Completion Checklist

- [ ] All seven intended routes and the not-found route work.
- [ ] Original MW tooth logo appears in header and footer.
- [ ] Confirmed contacts and address match the specification everywhere.
- [ ] Homepage matches the approved reference-faithful direction.
- [ ] Guided chatbot works on every route and prepares honest WhatsApp/email handoffs.
- [ ] Contact form validation preserves user input and never claims backend delivery.
- [ ] Unit, component, Playwright, production-build, responsive, keyboard, and console checks pass.
