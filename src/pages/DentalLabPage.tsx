import {
  Certificate,
  ChatCircleText,
  CheckCircle,
  Clock,
  CurrencyDollar,
  Cube,
  Detective,
  DiamondsFour,
  Factory,
  GraduationCap,
  Headset,
  MagnifyingGlass,
  Microscope,
  Scan,
  Sliders,
  Sparkle,
  Tooth,
  Truck,
  Virus,
} from '@phosphor-icons/react'
import type { JSX } from 'react'

import { PageHero } from '../components/ui/PageHero'

/* ── USP data ─────────────────────────────────────────── */
const usps = [
  {
    Icon: CurrencyDollar,
    title: 'Unbeatable Pricing',
    desc: 'Prices 30–100% lower than competitors without compromising quality.',
  },
  {
    Icon: Clock,
    title: 'Fast Turnaround',
    desc: 'Receive completed restorations in less than 10 working days.',
  },
  {
    Icon: Certificate,
    title: 'Trusted Since 1995',
    desc: 'ISO and FDA certified, delivering excellence for nearly three decades.',
  },
  {
    Icon: DiamondsFour,
    title: 'Premium Restorations',
    desc: 'Consistently high quality using the finest European-imported materials.',
  },
  {
    Icon: Scan,
    title: 'Cutting-Edge Technology',
    desc: 'Advanced CAD/CAM, 3D printing, and digital scanning for precision.',
  },
  {
    Icon: Headset,
    title: 'Dedicated Support',
    desc: 'Relationship Manager and direct access to the Lab Head for every case.',
  },
  {
    Icon: Sliders,
    title: 'Tailored Solutions',
    desc: 'Customised treatment plans for each case to ensure the best clinical outcomes.',
  },
  {
    Icon: Virus,
    title: 'Comprehensive Services',
    desc: 'Crowns, bridges, dentures, implants, orthodontic appliances — all in one lab.',
  },
] as const

/* ── Category data ────────────────────────────────────── */
const categories = [
  {
    Icon: Tooth,
    title: 'Custom Restorations',
    eyebrow: 'Crowns · Bridges · Inlays · Onlays',
    items: [
      {
        name: 'Crowns & Bridges',
        desc: 'Fabrication of custom crowns and bridges using porcelain, zirconia, and metal alloys, matched precisely to the prescription.',
      },
      {
        name: 'Inlays & Onlays',
        desc: 'Precision inlays and onlays to restore damaged teeth while conserving maximum healthy tooth structure.',
      },
    ],
  },
  {
    Icon: Cube,
    title: 'Implant Solutions',
    eyebrow: 'Abutments · Hybrids · Overdentures',
    items: [
      {
        name: 'Implant Supported Prosthetics',
        desc: 'Custom abutments, screw-retained crowns, and multi-unit implant bridges engineered for long-term stability.',
      },
      {
        name: 'Overdentures & Fixed Hybrids',
        desc: 'Fully-fixed hybrid arches and removable overdentures providing comfort and function for full-arch restorations.',
      },
    ],
  },
  {
    Icon: Sparkle,
    title: 'Aesthetic Enhancements',
    eyebrow: 'Veneers · Cosmetic Bonding',
    items: [
      {
        name: 'Veneers',
        desc: 'E-max and zirconia veneers crafted for high-end aesthetics, delivering natural translucency and exceptional strength.',
      },
      {
        name: 'Cosmetic Bonding',
        desc: 'High-precision composite restorations for minimally invasive smile improvements with natural-looking results.',
      },
    ],
  },
  {
    Icon: GraduationCap,
    title: 'Orthodontic Appliances',
    eyebrow: 'Retainers · Functional Devices',
    items: [
      {
        name: 'Retainers',
        desc: 'Essix, Hawley, and fixed retainers designed for post-treatment retention with comfortable, accurate fit.',
      },
      {
        name: 'Functional Appliances',
        desc: 'Devices designed to correct jaw positioning and teeth alignment, adjustable throughout the course of treatment.',
      },
    ],
  },
  {
    Icon: Scan,
    title: 'Digital Dentistry',
    eyebrow: 'CAD/CAM · Digital Impressions',
    items: [
      {
        name: 'CAD/CAM Technology',
        desc: 'Fully-digitised design and milling workflow eliminating manual errors and ensuring sub-micron precision in every restoration.',
      },
      {
        name: 'Digital Impressions',
        desc: 'Seamless integration with intraoral scanner files from 3Shape, iTero, Medit, and other leading systems.',
      },
    ],
  },
  {
    Icon: Factory,
    title: 'Prosthetics',
    eyebrow: 'Full · Partial · Immediate Dentures',
    items: [
      {
        name: 'Full & Partial Dentures',
        desc: 'Acrylic, chrome cobalt, and flexible dentures manufactured to achieve optimal fit, function, and aesthetics.',
      },
      {
        name: 'Immediate Dentures',
        desc: 'Temporary and immediate-placement prosthetics allowing patients to leave the chair with a functional smile.',
      },
    ],
  },
  {
    Icon: Detective,
    title: 'Orthotic & Surgical Guides',
    eyebrow: 'Surgical Guides · Oral Appliances',
    items: [
      {
        name: 'Surgical Guides',
        desc: 'Guided surgery templates for accurate implant placement, reducing operative time and improving predictability.',
      },
      {
        name: 'Oral Appliances',
        desc: 'Nightguards, occlusal splints, and anti-snoring devices fabricated for comfort and long-term wear.',
      },
    ],
  },
  {
    Icon: MagnifyingGlass,
    title: 'Quality Assurance & Support',
    eyebrow: 'Quality Control · Case Consultation',
    items: [
      {
        name: 'Multi-Stage Quality Control',
        desc: 'Every case checked at multiple stages against the digital prescription before dispatch — zero compromise on specification.',
      },
      {
        name: 'Case Consultation',
        desc: 'Direct consultation with your dedicated Relationship Manager and the Lab Head for complex or high-stakes cases.',
      },
    ],
  },
] as const

/* ── Workflow stages ──────────────────────────────────── */
const workflow = [
  ['Review', 'Case files and prescriptions reviewed before work begins.', MagnifyingGlass],
  ['Manufacture', 'Digital or conventional workflow selected per restoration type.', Factory],
  ['Quality Control', 'Multi-stage check against prescription and client requirements.', CheckCircle],
  ['Delivery', 'Dispatched with confirmed timelines — typically under 10 days.', Truck],
] as const

/* ── Standards strip ──────────────────────────────────── */
const standards = [
  { label: 'ISO Certified', detail: 'International standards for every case' },
  { label: 'FDA Registered', detail: 'Compliant with regulatory requirements' },
  { label: 'European Materials', detail: 'Finest chemicals and ceramics imported from Europe' },
  { label: 'UK/EU/Irish Standards', detail: 'All products meet applicable regional standards' },
]

export function DentalLabPage(): JSX.Element {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="Full-service dental production"
        title="Full-Service Dental Lab"
        summary="Custom restorations, implant solutions, aesthetics, orthotics, and digital dentistry — every case reviewed, manufactured, quality-checked, and delivered within 10 working days."
        metrics={[
          { value: '10', label: 'days or less turnaround' },
          { value: '8', label: 'clinical service categories' },
          { value: '30+', label: 'years of certified excellence' },
        ]}
      />

      {/* ── USPs grid ─────────────────────────────────────── */}
      <section className="section shell interior-section">
        <div className="interior-section__intro">
          <p className="eyebrow">Why Milling Works</p>
          <h2>Built for clinical excellence, designed for your practice</h2>
          <p>
            Everything we do is shaped around one goal — giving you restorations that fit first time,
            every time, at a price that makes sense for your practice.
          </p>
        </div>
        <div className="dl-usp-grid">
          {usps.map(({ Icon, title, desc }) => (
            <article className="dl-usp-card" key={title}>
              <span className="dl-usp-card__icon">
                <Icon aria-hidden size={26} weight="duotone" />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Category sections ─────────────────────────────── */}
      <section className="section interior-band">
        <div className="shell">
          <div className="interior-section__intro">
            <p className="eyebrow">Clinical scope</p>
            <h2>Eight categories. One trusted lab.</h2>
            <p>
              From a single crown to a full-arch fixed hybrid, every case type is handled through
              structured workflows with the same exacting standards.
            </p>
          </div>
          <div className="dl-categories-grid">
            {categories.map(({ Icon, title, eyebrow, items }) => (
              <article className="dl-category-card" key={title}>
                <header className="dl-category-card__header">
                  <span className="dl-category-card__icon">
                    <Icon aria-hidden size={22} weight="duotone" />
                  </span>
                  <div>
                    <p className="dl-category-card__eyebrow">{eyebrow}</p>
                    <h3>{title}</h3>
                  </div>
                </header>
                <ul className="dl-category-card__items">
                  {items.map(({ name, desc }) => (
                    <li key={name}>
                      <strong>{name}</strong>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards / Materials banner ───────────────────── */}
      <section className="section shell">
        <div className="dl-standards-strip">
          {standards.map(({ label, detail }) => (
            <div className="dl-standards-strip__item" key={label}>
              <Microscope aria-hidden size={20} weight="duotone" />
              <div>
                <strong>{label}</strong>
                <span>{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Workflow stages ───────────────────────────────── */}
      <section className="section interior-band">
        <div className="shell">
          <div className="interior-section__intro">
            <p className="eyebrow">Our process</p>
            <h2>Review to delivery — every step structured</h2>
          </div>
          <ol className="workflow-grid">
            {workflow.map(([title, copy, Icon]) => (
              <li key={title}>
                <Icon aria-hidden size={28} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="section shell">
        <div className="dl-cta-band">
          <div className="dl-cta-band__copy">
            <p className="eyebrow">Get started</p>
            <h2>Send your first case today</h2>
            <p>
              Talk to your dedicated Relationship Manager or consult directly with the Lab Head —
              no hold music, no generic ticketing system. Just clinical expertise, immediately.
            </p>
          </div>
          <div className="dl-cta-band__actions">
            <a className="button" href="/contact">
              <ChatCircleText aria-hidden size={20} />
              Book a consultation
            </a>
            <a className="button button--ghost" href="tel:8390998088">
              Call 8390998088
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
