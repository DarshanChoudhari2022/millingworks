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
    desc: 'Our lab offers prices 30%–100% lower than competitors, without compromising on quality.',
  },
  {
    Icon: Clock,
    title: 'Fast Turnaround',
    desc: 'Receive your restorations in less than 10 days.',
  },
  {
    Icon: Certificate,
    title: 'Trusted Since 1995',
    desc: 'ISO and FDA certified, our lab has been delivering excellence for nearly three decades.',
  },
  {
    Icon: DiamondsFour,
    title: 'Premium Restorations',
    desc: 'Consistently high-quality restorations and prosthetics made with the finest imported materials.',
  },
  {
    Icon: Scan,
    title: 'Cutting-Edge Technology',
    desc: 'Equipped with advanced CAD/CAM systems, 3D printing, latest milling machines and digital scanning for precision and efficiency.',
  },
  {
    Icon: Headset,
    title: 'Dedicated Support',
    desc: 'Enjoy clear communication with a dedicated Relationship Manager and direct access to the Lab Head.',
  },
  {
    Icon: Sliders,
    title: 'Tailored Solutions',
    desc: 'Customized treatment plans for each case to ensure the best clinical outcomes.',
  },
  {
    Icon: Virus,
    title: 'Comprehensive Services',
    desc: 'We offer a wide range of services, including crowns, bridges, dentures, implants, and orthodontic appliances.',
  },
] as const

/* ── Category data ────────────────────────────────────── */
const categories = [
  {
    Icon: Tooth,
    title: '1. Custom Restorations',
    eyebrow: 'Crowns · Bridges · Inlays · Onlays',
    items: [
      {
        name: 'Crowns and Bridges',
        desc: 'Fabrication of custom crowns and bridges using various materials, including porcelain, zirconia, and metal alloys.',
      },
      {
        name: 'Inlays and Onlays',
        desc: 'Precision-crafted inlays and onlays that match the tooth’s shade and fit perfectly, providing both functionality and aesthetics.',
      },
    ],
  },
  {
    Icon: Cube,
    title: '2. Implant Solutions',
    eyebrow: 'Abutments · Hybrids · Overdentures',
    items: [
      {
        name: 'Implant Supported Prosthetics',
        desc: 'Design and manufacture of full-arch restorations and individual crowns to fit on implants, tailored to each patient’s anatomy.',
      },
      {
        name: 'Overdentures and Fixed Hybrid Solutions',
        desc: 'Creation of overdentures and hybrid prosthetics that offer improved stability and comfort for implant patients.',
      },
    ],
  },
  {
    Icon: Sparkle,
    title: '3. Aesthetic Enhancements',
    eyebrow: 'Veneers · Cosmetic Bonding',
    items: [
      {
        name: 'Veneers',
        desc: 'Custom-made porcelain veneers to enhance the appearance of teeth, addressing issues like discoloration, chips, and misalignment.',
      },
      {
        name: 'Cosmetic Bonding',
        desc: 'Tailored composite resin bonding solutions for aesthetic corrections that blend seamlessly with natural teeth.',
      },
    ],
  },
  {
    Icon: GraduationCap,
    title: '4. Orthodontic Appliances',
    eyebrow: 'Retainers · Functional Devices',
    items: [
      {
        name: 'Retainers',
        desc: 'Custom-designed retainers for post-orthodontic treatment, available in both clear and traditional styles.',
      },
      {
        name: 'Functional Appliances',
        desc: 'Fabrication of devices designed to correct jaw positioning and teeth alignment, which can be adjusted throughout the treatment.',
      },
    ],
  },
  {
    Icon: Scan,
    title: '5. Digital Dentistry',
    subtitle: 'A cost effective service that we can provide to dental Labs too',
    eyebrow: 'CAD/CAM · Digital Impressions',
    items: [
      {
        name: 'CAD/CAM Technology',
        desc: 'Integration of advanced computer-aided design and manufacturing (CAD/CAM) processes for efficient, precise restoration fabrication.',
      },
      {
        name: 'Digital Impressions',
        desc: 'Utilizing digital scanning technology to capture accurate dental impressions, enhancing comfort and accuracy for patients.',
      },
    ],
  },
  {
    Icon: Factory,
    title: '6. Prosthetics',
    eyebrow: 'Full · Partial · Immediate Dentures',
    items: [
      {
        name: 'Full and Partial Dentures',
        desc: 'Tailored full and partial dentures created with high-quality materials that prioritize fit and comfort, as well as aesthetic appeal.',
      },
      {
        name: 'Immediate Dentures',
        desc: 'Offering immediate dentures that can be placed right after extraction, ensuring patients do not go without teeth.',
      },
    ],
  },
  {
    Icon: Detective,
    title: '7. Orthotic and Surgical Guides',
    eyebrow: 'Surgical Guides · Oral Appliances',
    items: [
      {
        name: 'Surgical Guides',
        desc: 'Precision surgical guides for implant placement, improving clinical outcomes through better accuracy.',
      },
      {
        name: 'Oral Appliances',
        desc: 'Development of custom oral appliances for sleep apnea/ contact sport and other conditions, enhancing patient comfort and health.',
      },
    ],
  },
  {
    Icon: MagnifyingGlass,
    title: '8. Quality Assurance and Support',
    eyebrow: 'Quality Control · Case Consultation',
    items: [
      {
        name: 'Quality Control',
        desc: 'Rigorous quality control processes to ensure that every product meets or exceeds industry standards.',
      },
      {
        name: 'Case Consultation',
        desc: 'Providing professional support and consultation for dental practices, helping them choose the best solutions for their patients.',
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
          <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
            We currently help Dental practices in the UK &amp; Ireland source dental lab services from India 
            at prices significantly lower than that of UK/Irish Labs. Our Lab is ISO and FDA certified and we 
            provide a full range of products from Crowns &amp; Veneers to Implant solutions.
          </p>
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
              Our world-class ISO, FDA certified dental lab is dedicated to providing state-of-the-art services 
              that cater to the diverse needs of dental professionals and their patients. Utilizing the latest 
              technologies and imported materials, the Labs focuses on quality, precision, and aesthetics. 
              Here is a comprehensive overview of the products offered:
            </p>
          </div>
          <div className="dl-categories-grid">
            {categories.map((category) => {
              const { Icon, title, eyebrow, items } = category
              const subtitle = 'subtitle' in category ? category.subtitle : undefined
              return (
                <article className="dl-category-card" key={title}>
                  <header className="dl-category-card__header">
                    <span className="dl-category-card__icon">
                      <Icon aria-hidden size={22} weight="duotone" />
                    </span>
                    <div>
                      <p className="dl-category-card__eyebrow">{eyebrow}</p>
                      <h3>{title}</h3>
                      {subtitle && (
                        <p className="dl-category-card__subtitle" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px', fontStyle: 'italic' }}>
                          ({subtitle})
                        </p>
                      )}
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
              )
            })}
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

      {/* ── Logistics & Materials ─────────────────────────── */}
      <section className="section shell">
        <div className="feature-grid feature-grid--two" style={{ background: 'rgba(255,255,255,0.03)', padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--white)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Truck size={24} weight="duotone" style={{ color: 'var(--lime)' }} /> Delivery Timelines
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>
              Our logistics partners such as UPS, DHL etc. assure us of a five-day door-to-door delivery anywhere in Europe.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--white)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkle size={24} weight="duotone" style={{ color: 'var(--lime)' }} /> European Quality Imports
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>
              Our labs import the best of chemicals and dental materials from Europe to give you products that meet your exact quality and aesthetic standards.
            </p>
          </div>
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
