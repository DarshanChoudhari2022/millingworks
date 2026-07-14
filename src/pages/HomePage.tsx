import {
  ArrowRight,
  ChatCircleDots,
  GlobeHemisphereWest,
  LockKey,
  SealCheck,
  ShieldCheck,
  Timer,
} from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import avatarGroup from '../assets/avatar-group.webp'
import centerLab from '../assets/hero-center-lab.webp'
import crowns from '../assets/hero-crowns.webp'
import drReed from '../assets/dr-reed.webp'
import implant from '../assets/hero-implant.webp'
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll'
import { CallToAction } from '../components/ui/CallToAction'
import { ProcessSteps } from '../components/ui/ProcessSteps'
import { SectionIntro } from '../components/ui/SectionIntro'
import { ServiceCard } from '../components/ui/ServiceCard'
import { services } from '../content/services'

/* ── Proof points ─────────────────────────────────────── */
const proofPoints = [
  {
    title: 'Fewer remakes. Higher consistency.',
    copy: 'Every case passes defined acceptance checks before it leaves us. If it doesn\'t meet your spec, we resolve it before delivery — not after.',
    Icon: SealCheck,
  },
  {
    title: 'GDPR-safe from day one.',
    copy: 'Patient data and case files are handled within documented, compliant workflows. We sign data-processing agreements and NDAs as standard — no chasing required.',
    Icon: LockKey,
  },
  {
    title: 'UK-hours support. Zero time-zone friction.',
    copy: 'Your team reaches us during UK working hours. Urgent queries get a same-day response. We structure communication around your schedule, not ours.',
    Icon: GlobeHemisphereWest,
  },
] as const

/* ── Trust strip items ────────────────────────────────── */
const trustItems = [
  { label: '48hr standard turnaround', Icon: Timer },
  { label: 'UK-hours communication', Icon: ChatCircleDots },
  { label: 'GDPR-compliant data handling', Icon: ShieldCheck },
  { label: 'ISO-standard quality checks', Icon: SealCheck },
] as const

export function HomePage(): JSX.Element {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
        <div className="hero-glow hero-glow--3" />

        {/* Top tagline */}
        <p className="hero-tagline">
          <span className="hero-tagline__eyebrow">
            Digital Dental Production &nbsp;·&nbsp; Serving UK &amp; European Practices
          </span>
        </p>

        <div className="hero-cards-container">

          {/* ── Card 1: Primary hero card ── */}
          <div className="hero-panel hero-card hero-card--primary">
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
            </div>

            <div className="hero-card__content">
              <p className="hero-card__eyebrow-label">For UK &amp; European dental practices</p>
              <h1 id="hero-title" className="hero-card__title">
                Precision<br />Dental<br />Production
              </h1>
              <p className="hero-card__subtitle">
                Quality lab work. On time. Every case.
              </p>
            </div>

            <div className="hero-card__main-image-wrap">
              <img
                alt="Dental technicians working on precision restorations"
                className="hero-card__main-image"
                src={centerLab}
              />
            </div>

            {/* Rotating consultation badge */}
            <Link to="/contact" className="rotating-badge-btn" aria-label="Book a Consultation">
              <svg className="rotating-badge-btn__text" viewBox="0 0 100 100" aria-hidden>
                <path d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" id="textPath" />
                <text className="rotating-badge-btn__textpath">
                  <textPath href="#textPath">BOOK YOUR CONSULTATION • BOOK YOUR CONSULTATION • </textPath>
                </text>
              </svg>
              <div className="rotating-badge-btn__center">
                <ArrowRight size={21} className="rotating-badge-btn__arrow" aria-hidden />
              </div>
            </Link>
          </div>

          {/* ── Card 2: Implant Solutions + Stats ── */}
          <Link
            to="/dental-lab"
            aria-label="Explore dental implant solutions"
            className="hero-panel hero-card hero-card--implant"
          >
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
            </div>

            <div className="hero-card__content">
              <h2 className="hero-card__title">Implant<br />Solutions</h2>
              <p className="hero-card__copy">
                Precision implant work reviewed against your spec — delivered on time.
              </p>
            </div>

            <img
              alt="Precision dental implant restoration component"
              className="hero-card__image hero-card__image--implant"
              src={implant}
            />

            {/* Scannable metric blocks */}
            <div className="hero-card__footer">
              <div className="hero-metric-grid">
                <div className="hero-metric">
                  <span className="hero-metric__number">98%</span>
                  <span className="hero-metric__label">Case accuracy rate</span>
                </div>
                <div className="hero-metric">
                  <span className="hero-metric__number">2,000+</span>
                  <span className="hero-metric__label">Cases delivered</span>
                </div>
              </div>
              <div className="hero-metric-pill">
                <Timer size={13} aria-hidden weight="bold" />
                48hr standard turnaround
              </div>
            </div>
          </Link>

          {/* ── Card 3: Dental Crowns ── */}
          <Link
            to="/dental-lab"
            aria-label="Explore dental crown solutions"
            className="hero-panel hero-card hero-card--crowns"
          >
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
            </div>

            <div className="hero-card__content">
              <h2 className="hero-card__title">Dental<br />Crowns</h2>
              <p className="hero-card__copy">
                Every crown designed for fit, durability, and a confident clinical outcome.
              </p>
            </div>

            <img
              alt="Premium ceramic dental crowns"
              className="hero-card__image hero-card__image--crowns"
              src={crowns}
            />

            <div className="hero-card__footer">
              <div className="doctor-card">
                <img alt="Dr. Reed, dental specialist" src={drReed} className="doctor-card__avatar" />
                <div className="doctor-card__info">
                  <span className="doctor-card__name">Dr. Reed</span>
                  <span className="doctor-card__experience">Lead Restorative Specialist</span>
                </div>
              </div>
              <div className="hero-card__rating">
                <div className="star-rating" aria-label="5 stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="star-rating__star" aria-hidden>★</span>
                  ))}
                </div>
                <span className="hero-card__reviews-count">311 cases reviewed</span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section className="section shell services-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Four ways we support your practice"
            title="Choose the help your team actually needs"
          >
            Start with one service. Add more as you grow. The relationship stays the same —
            no rebuilding, no extra onboarding.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll stagger className="service-grid" threshold={0.1}>
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.id} service={service} />
          ))}
        </AnimateOnScroll>

        {/* Trust microcopy strip */}
        <AnimateOnScroll threshold={0.2}>
          <div className="trust-strip" role="list" aria-label="Quality and compliance commitments">
            {trustItems.map(({ label, Icon }) => (
              <div key={label} className="trust-strip__item" role="listitem">
                <Icon size={15} aria-hidden weight="bold" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className="section process-section">
        <div className="shell">
          <AnimateOnScroll>
            <SectionIntro eyebrow="A clear path from file to finish" title="Five steps. No mystery.">
              Every engagement follows visible checkpoints — so your team always knows
              what's happening and what comes next.
            </SectionIntro>
          </AnimateOnScroll>
          <ProcessSteps />
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="section shell testimonial-section" aria-labelledby="testimonials-title">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="From practices like yours"
            title="What our partners say"
          >
            Anonymised snapshots from dental practices and labs across the UK.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll stagger className="testimonial-grid" threshold={0.1}>
          <blockquote className="testimonial-card">
            <p>
              "Since partnering with Milling Works, our crown remakes have dropped
              significantly. Cases come back accurate and on time — it's changed how
              we plan our clinical schedule."
            </p>
            <footer>
              <strong>Principal Dentist</strong>
              <span>Private Practice · Hampshire, UK</span>
            </footer>
          </blockquote>

          <blockquote className="testimonial-card">
            <p>
              "The record auditing flagged gaps we didn't know existed. Clear reports,
              fast turnaround, and they're always reachable during UK hours. Exactly what
              we needed from a remote production partner."
            </p>
            <footer>
              <strong>Lab Manager</strong>
              <span>Dental Laboratory · Birmingham, UK</span>
            </footer>
          </blockquote>
        </AnimateOnScroll>

        {/* Mid-page CTA */}
        <AnimateOnScroll>
          <div className="mid-cta">
            <p className="mid-cta__copy">
              Ready to simplify your dental production workflow?
            </p>
            <Link to="/contact" className="button button--accent">
              Book a Consultation <ArrowRight aria-hidden size={18} />
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          PROOF / TRUST
      ══════════════════════════════════════ */}
      <section className="section shell proof-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Built for UK &amp; European practices"
            title="Standards your patients — and regulators — would approve"
          >
            Practical controls, compliant data handling, and direct UK-hours communication
            are built into every engagement — not bolt-ons.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll stagger className="proof-grid" threshold={0.15}>
          {proofPoints.map(({ title, copy, Icon }) => (
            <article key={title}>
              <div className="proof-grid__icon-wrap" aria-hidden>
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          SUPPORT BAND
      ══════════════════════════════════════ */}
      <section className="support-band">
        <div className="shell support-band__inner">
          <AnimateOnScroll>
            <>
              <p className="eyebrow">Support without borders</p>
              <h2>Made in Pune. Connected to the UK and Europe.</h2>
              <p>
                A 48-hour standard turnaround, UK-hours communication, and structured
                digital handoffs make distance feel remarkably small.
              </p>
              <div className="trust-statements" aria-label="Partnership commitments">
                <span>48hr Standard Turnaround</span>
                <span>UK-Hours Support</span>
                <span>GDPR-Compliant</span>
                <span>Scalable Capacity</span>
              </div>
            </>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════ */}
      <div className="shell cta-wrap">
        <AnimateOnScroll>
          <CallToAction />
        </AnimateOnScroll>
      </div>
    </>
  )
}
