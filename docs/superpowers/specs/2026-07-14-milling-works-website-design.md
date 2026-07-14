# Milling Works Website Design

Date: 2026-07-14  
Status: Approved design

## Objective

Create a polished, responsive, multi-page B2B website for Milling Works, a Pune-based dental outsourcing and laboratory company serving dental practices, with emphasis on the UK and European market. The visual direction should closely echo the composition and energy of the supplied blue dental reference while using original Milling Works branding, assets, layouts, and rewritten content.

## Brand

The brand name is **Milling Works**. The primary mark combines the letters **M** and **W** into a professional tooth silhouette. It must remain legible at navigation, favicon, footer, document, and social-avatar sizes.

The tone is precise, modern, trustworthy, technically capable, and easy to work with. Copy should speak to dentists, dental practices, laboratory partners, and procurement or operations teams. It must not copy Nvistas wording verbatim or reuse SmileLab branding.

### Contact details

- Contacts: Akash Gaurav and Arjun Rana
- Phone and WhatsApp: +91 83909 98058
- Email: sales@millingworks.com
- Address: Building B, Office 317, Surawalla Mark Plazzo, S. No. 27, Mulshi, Hinjawadi, Pune 411057, India

## Visual Direction

The approved direction is **A — Reference-faithful**.

The homepage opens with a soft mint-to-lime background and a composition of three overlapping, rounded blue panels. It uses oversized white typography, glossy dental imagery, subtle technical line work, and bright lime circular calls to action. The central panel carries the primary Milling Works promise. Side panels introduce dental implants and crowns.

The visual system extends across interior pages through:

- Sky and laboratory blues with deep navy body text
- Soft mint backgrounds and white clinical content surfaces
- Acid-lime highlights for primary actions and status details
- Large, tightly spaced display typography
- Rounded and organically curved containers
- Dental-grid and CAD-inspired line details
- Restrained shadows, motion, and hover depth

All artwork will be original. The design may follow the reference's overall spatial rhythm, but will not reproduce third-party branding or proprietary images.

## Information Architecture

### Home

- Three-panel hero with the main promise, implant capability, and crown capability
- Core service overview
- Digital-to-delivery workflow
- Quality and compliance proof points
- UK and European practice support message
- Testimonials or representative trust statements
- Consultation and case-submission calls to action

### About

- Company introduction
- Founders and contacts: Akash Gaurav and Arjun Rana
- Mission and working principles
- Pune operations and international support
- Quality, confidentiality, and partnership approach

### Services

- Service hub for dental laboratory work, record auditing, dental design support, and business-process outsourcing
- Clear links into detailed service pages
- Engagement model and next steps

### Dental Lab

- Crowns, veneers, bridges, implant solutions, and digital workflows
- Materials and production overview without unsupported certification claims
- Case submission, review, manufacture, quality control, and delivery process
- Request-a-quote and send-a-case actions

### Record Auditing

- Dental record and X-ray review
- Completeness, consistency, documentation, and configurable compliance checks
- Confidential handling and structured reports
- Scope, workflow, turnaround discussion, and consultation action

### FAQs

- Services and eligibility
- Digital case files and case submission
- Shipping and turnaround
- Quality control and remakes
- Privacy and confidentiality
- Pricing and quotations
- Auditing deliverables

### Contact

- Confirmed phone, WhatsApp, email, and Pune address
- Contact form with name, email, phone, service, and message
- Map/location treatment
- Direct consultation and case-submission actions

## Global Navigation

The desktop header is sticky and includes the logo, Home, About, Services, Dental Lab, Record Auditing, FAQs, and Contact. **Send a Case** and **Book a Consultation** are the principal actions. Mobile uses a keyboard-accessible menu with the same destinations.

The footer repeats the main service links, contact details, business address, and service-region message. A floating WhatsApp action appears site-wide without obscuring the chatbot or essential controls.

## Chatbot

The site-wide chatbot is a deterministic guided assistant with prepared answers and lead capture. It does not require an external AI API or backend.

### Supported paths

- Explore dental lab services
- Ask about record auditing
- Understand digital case submission
- Ask about turnaround and delivery
- Ask about pricing and quotations
- Contact Milling Works

### Lead handoff

The assistant may collect name, preferred contact method, service interest, and a short message. It then generates a prefilled WhatsApp link or email enquiry. It must clearly state when the user is being transferred to WhatsApp or email and must never falsely claim that a message has already been delivered.

The widget must support keyboard navigation, focus management, readable status updates, close/minimize controls, and mobile-safe positioning.

## Technical Architecture

The project will use React with Vite and route-based pages. Reusable components will cover the header, footer, page hero, service cards, process steps, calls to action, contact form, WhatsApp action, and chatbot.

Services, FAQs, contact details, and chatbot answers will be held in structured local data so common information stays consistent. The build is frontend-only. Contact and chatbot submissions hand off through WhatsApp or the user's email application unless a backend is added in a future phase.

The site must be responsive across modern desktop, tablet, and mobile browsers. It will respect reduced-motion preferences and use semantic HTML, visible focus treatment, meaningful alternative text, accessible labels, and sufficient contrast.

## Error Handling

- Navigation must provide a clear not-found state for unknown paths.
- Forms validate required fields and email format before handoff.
- Handoff failures keep the entered content visible and offer the confirmed phone and email as fallbacks.
- Missing decorative imagery must not hide essential text or calls to action.
- The chatbot must always provide a return-to-menu path and a direct human-contact option.

## Verification

Verification must include:

- Production build succeeds without errors
- Every navigation route and primary call to action works
- Desktop and mobile layouts are visually inspected
- Header, mobile menu, forms, chatbot, WhatsApp, and email handoffs are exercised
- Keyboard navigation and visible focus are checked
- Reduced-motion behavior is checked
- Browser console is checked for runtime errors
- Content is checked against the confirmed contact details
- Homepage is visually compared with the approved direction and supplied reference

## Acceptance Criteria

The work is complete when the full multi-page site is implemented, the original MW tooth mark is present throughout, all confirmed contact details are correct, the guided chatbot works on every page, contact handoffs are honest and functional, the production build passes, and the desktop/mobile visual result matches the approved reference-faithful direction.
