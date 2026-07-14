import {
  ArrowRight,
  ChatCircleDots,
  Factory,
  GlobeHemisphereWest,
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
import { FaqAccordionSection } from '../components/ui/FaqAccordionSection'
import { MaterialCard } from '../components/ui/MaterialCard'
import { ProcessSteps } from '../components/ui/ProcessSteps'
import { SectionIntro } from '../components/ui/SectionIntro'
import { ServiceCard } from '../components/ui/ServiceCard'
import { TechGrid } from '../components/ui/TechGrid'
import { TrustMetrics } from '../components/ui/TrustMetrics'
import { WhyChooseCard } from '../components/ui/WhyChooseCard'
import { materials } from '../content/materials'
import { services } from '../content/services'
import { differentiators } from '../content/whyChooseUs'

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
          1. HERO — Stronger Value Proposition
      ══════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
        <div className="hero-glow hero-glow--3" />

        {/* Top tagline */}
        <p className="hero-tagline">
          <span className="hero-tagline__eyebrow">

          </span>
        </p>

        <div className="hero-cards-container">

          {/* ── Card 1: Primary hero card ── */}
          <div className="hero-panel hero-card hero-card--primary">
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
            </div>

            <div className="hero-card__content">
              <p className="hero-card__eyebrow-label">CAD/CAM Dental Milling Centre</p>
              <h1 id="hero-title" className="hero-card__title">
                Precision<br />Dental<br />Milling
              </h1>
              <p className="hero-card__subtitle">
                High-quality crowns, bridges, implant restorations and digital dental production
                with rapid turnaround and rigorous quality control.
              </p>
            </div>

            <div className="hero-card__main-image-wrap">
              <img
                alt="Dental technicians working on precision CAD/CAM restorations"
                className="hero-card__main-image"
                src={centerLab}
              />
            </div>

            {/* Rotating consultation badge */}
            <Link to="/contact" className="rotating-badge-btn" aria-label="Book a Consultation">
              <svg className="rotating-badge-btn__text" viewBox="0 0 100 100" aria-hidden>
                <path d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" id="textPath" />
                <text className="rotating-badge-btn__textpath">
                  <textPath href="#textPath">GET A QUOTE • BOOK CONSULTATION • </textPath>
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
                Precision implant prosthetics — custom abutments, screw-retained crowns, bridges
                and full arch restorations across all major systems.
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
                  <span className="hero-metric__number">25K+</span>
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
                Every crown designed for fit, durability, and a confident clinical outcome — in
                zirconia, E.max, or hybrid ceramic.
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
          2. TRUST METRICS — Animated Counters
      ══════════════════════════════════════ */}
      <TrustMetrics />

      {/* ══════════════════════════════════════
          3. SERVICES
      ══════════════════════════════════════ */}
      <section className="section shell services-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Dental production services"
            title="Choose the help your practice needs"
          >
            From precision dental milling and CAD design to record auditing and practice outsourcing
            — start with one service and scale as you grow.
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
          4. WHY CHOOSE MILLING WORKS
      ══════════════════════════════════════ */}
      <section className="section shell why-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Why dental practices choose us"
            title="Eight reasons Milling Works is different"
          >
            We combine digital-first dental manufacturing with UK-hours communication,
            experienced technicians and strict quality control — built for practices
            that won't compromise.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll stagger className="why-grid" threshold={0.1}>
          {differentiators.map((item, index) => (
            <WhyChooseCard key={item.id} item={item} index={index} />
          ))}
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          5. DIGITAL WORKFLOW (Enhanced Process)
      ══════════════════════════════════════ */}
      <section className="section process-section">
        <div className="shell">
          <AnimateOnScroll>
            <SectionIntro
              eyebrow="Our digital dental workflow"
              title="Upload STL → Design → Review → Mill → QC → Ship"
            >
              Every case follows a traceable, six-step digital workflow — so your team always
              knows what's happening and what comes next. Precision dental milling with full
              visibility.
            </SectionIntro>
          </AnimateOnScroll>
          <ProcessSteps />
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. MATERIALS
      ══════════════════════════════════════ */}
      <section className="section shell materials-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Premium dental materials"
            title="Seven materials for every clinical need"
          >
            From ultra-strong zirconia crowns and translucent E.max veneers to titanium implant
            components and biocompatible PEEK frameworks — we mill the materials that matter.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll stagger className="materials-grid" threshold={0.1}>
          {materials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          7. TECHNOLOGY & SOFTWARE
      ══════════════════════════════════════ */}
      <section className="section tech-section">
        <div className="shell">
          <AnimateOnScroll>
            <SectionIntro
              eyebrow="Compatible technology stack"
              title="Works with your scanners and software"
            >
              We integrate with all major dental CAD software and intraoral scanners. Send us
              STL files from any compatible system — Exocad, 3Shape, Medit, iTero, Sirona
              and more.
            </SectionIntro>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <TechGrid />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. MANUFACTURING CAPABILITY
      ══════════════════════════════════════ */}
      <section className="section shell capability-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Manufacturing capability"
            title="Built for precision at scale"
          >
            Our dental milling centre combines advanced 5-axis CNC technology with experienced
            technicians and rigorous quality control — delivering consistent, accurate
            restorations every day.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="capability-grid">
            <div className="capability-card">
              <Factory size={28} aria-hidden className="capability-card__icon" />
              <h3>Production Capacity</h3>
              <ul>
                <li>Multiple 5-axis CNC milling machines</li>
                <li>High-volume daily case capacity</li>
                <li>Dedicated implant production line</li>
                <li>Same-day rush production available</li>
              </ul>
            </div>
            <div className="capability-card">
              <GlobeHemisphereWest size={28} aria-hidden className="capability-card__icon" />
              <h3>Technical Expertise</h3>
              <ul>
                <li>Experienced dental CAD/CAM technicians</li>
                <li>Specialist implant restoration team</li>
                <li>Continuous professional development</li>
                <li>Cross-trained on all material systems</li>
              </ul>
            </div>
            <div className="capability-card">
              <SealCheck size={28} aria-hidden className="capability-card__icon" />
              <h3>Quality Assurance</h3>
              <ul>
                <li>±20μm accuracy tolerance</li>
                <li>Multi-point QC inspection protocol</li>
                <li>Digital fit verification before dispatch</li>
                <li>ISO-standard processes throughout</li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          9. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="section shell testimonial-section" aria-labelledby="testimonials-title">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="From practices like yours"
            title="What our dental partners say"
          >
            Real feedback from dental practices and laboratories across the UK and Europe.
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

          <blockquote className="testimonial-card">
            <p>
              "We outsource all our zirconia and implant work to Milling Works. The quality
              is consistent, the digital workflow is seamless, and our patients notice the
              difference. Highly recommend."
            </p>
            <footer>
              <strong>Associate Dentist</strong>
              <span>Multi-Site Practice · London, UK</span>
            </footer>
          </blockquote>
        </AnimateOnScroll>

        {/* Mid-page CTA */}
        <AnimateOnScroll>
          <div className="mid-cta">
            <p className="mid-cta__copy">
              Ready to simplify your dental production workflow?
            </p>
            <div className="mid-cta__buttons">
              <Link to="/contact" className="button button--accent">
                Get a Quote <ArrowRight aria-hidden size={18} />
              </Link>
              <Link to="/contact#upload" className="button button--light">
                Upload STL Files <ArrowRight aria-hidden size={18} />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          10. FAQs
      ══════════════════════════════════════ */}
      <section className="section shell faq-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Frequently asked questions"
            title="Everything you need to know"
          >
            Quick answers about our dental milling services, materials, turnaround times,
            scanner compatibility and digital workflows.
          </SectionIntro>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <FaqAccordionSection />
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════
          11. CLOSING CTA — Multi-Action
      ══════════════════════════════════════ */}
      <div className="shell cta-wrap">
        <AnimateOnScroll>
          <CallToAction />
        </AnimateOnScroll>
      </div>
    </>
  )
}
