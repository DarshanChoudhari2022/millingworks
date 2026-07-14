import { ArrowDownRight, ArrowRight, GlobeHemisphereWest, List, LockKey, SealCheck } from '@phosphor-icons/react'
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

const proofPoints = [
  { title: 'Quality at every handoff', copy: 'Defined reviews and clear acceptance criteria help protect case consistency.', Icon: SealCheck },
  { title: 'Confidential by design', copy: 'Client information and case materials are handled within documented workflows.', Icon: LockKey },
  { title: 'Built for distributed teams', copy: 'Responsive coordination supports practices and partners across the UK and Europe.', Icon: GlobeHemisphereWest },
] as const

export function HomePage(): JSX.Element {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-title">
        {/* Background glows */}
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
        <div className="hero-glow hero-glow--3" />

        {/* Top tagline */}
        <p className="hero-tagline">
          <span className="hero-tagline__eyebrow">Digital Dental Production &nbsp;·&nbsp; Precision Behind Every Smile</span>
        </p>

        <div className="hero-cards-container">

          {/* Card 1: Dental Implants */}
          <Link
            to="/dental-lab"
            aria-label="Explore dental implant solutions"
            className="hero-panel hero-card hero-card--implant"
          >
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
              <span className="hero-card__menu-btn"><List size={20} aria-hidden /></span>
            </div>

            <div className="hero-card__content">
              <h2 className="hero-card__title">Dental<br />Implants</h2>
              <p className="hero-card__copy">
                Implant solutions delivered with precision and long-term consistency.
              </p>
            </div>

            <img alt="Precision dental implant restoration" className="hero-card__image hero-card__image--implant" src={implant} />

            <div className="hero-card__footer">
              <div className="hero-card__badge hero-card__badge--loyal">
                <SealCheck weight="fill" size={15} className="hero-card__badge-icon" aria-hidden />
                <span>98% loyal dental patients</span>
              </div>
              <div className="hero-card__avatars">
                <div className="avatar-stack">
                  <img alt="Smiling patient profiles" src={avatarGroup} className="avatar-stack__image" />
                  <span className="avatar-stack__label">+2k</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Primary — Restore Your True Smile */}
          <div className="hero-panel hero-card hero-card--primary">
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
              <button className="hero-card__menu-btn" aria-label="Menu"><List size={20} aria-hidden /></button>
            </div>

            <div className="hero-card__content">
              <h1 id="hero-title" className="hero-card__title">Restore Your<br />True Smile</h1>
            </div>

            <div className="hero-card__main-image-wrap">
              <img alt="Dental technicians working on precision restorations" className="hero-card__main-image" src={centerLab} />
            </div>

            {/* Circular rotating consultation badge */}
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

          {/* Card 3: Dental Crowns */}
          <Link
            to="/dental-lab"
            aria-label="Explore dental crown solutions"
            className="hero-panel hero-card hero-card--crowns"
          >
            <div className="hero-card__header">
              <span className="hero-card__brand">Milling Works</span>
              <span className="hero-card__menu-btn"><List size={20} aria-hidden /></span>
            </div>

            <div className="hero-card__content">
              <h2 className="hero-card__title">Dental<br />Crowns</h2>
              <p className="hero-card__copy">
                Every crown designed for durability, function, and a confident smile.
              </p>
            </div>

            <img alt="Premium ceramic dental crowns" className="hero-card__image hero-card__image--crowns" src={crowns} />

            <div className="hero-card__footer">
              <div className="doctor-card">
                <img alt="Dr. Reed" src={drReed} className="doctor-card__avatar" />
                <div className="doctor-card__info">
                  <span className="doctor-card__name">Dr. Reed</span>
                  <span className="doctor-card__experience">3+ Years Experience</span>
                </div>
              </div>

              <div className="hero-card__rating">
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="star-rating__star" aria-hidden>★</span>
                  ))}
                </div>
                <span className="hero-card__reviews-count">311 reviews</span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ── Services ─────────────────────────── */}
      <section className="section shell services-section">
        <AnimateOnScroll>
          <SectionIntro
            eyebrow="Connected expertise"
            title="One partner across the digital workflow"
          >
            Choose the support your team needs today, then scale without rebuilding
            the relationship or the process.
          </SectionIntro>
        </AnimateOnScroll>
        <AnimateOnScroll stagger className="service-grid" threshold={0.1}>
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.id} service={service} />
          ))}
        </AnimateOnScroll>
      </section>

      {/* ── Process ──────────────────────────── */}
      <section className="section process-section">
        <div className="shell">
          <AnimateOnScroll>
            <SectionIntro eyebrow="A clear path from file to finish" title="Five steps. No mystery.">
              Every engagement follows visible checkpoints, so your team always knows what happens next.
            </SectionIntro>
          </AnimateOnScroll>
          <ProcessSteps />
        </div>
      </section>

      {/* ── Proof ────────────────────────────── */}
      <section className="section shell proof-section">
        <AnimateOnScroll>
          <SectionIntro eyebrow="The standard behind the work" title="Confidence is built into the process">
            Practical controls, direct communication, and accountable handoffs protect the
            quality of every engagement.
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

      {/* ── Support band ─────────────────────── */}
      <section className="support-band">
        <div className="shell support-band__inner">
          <AnimateOnScroll>
            <>
              <p className="eyebrow">Support without borders</p>
              <h2>Made in Pune. Connected to the UK and Europe.</h2>
              <p>Structured digital handoffs and responsive communication make distance feel remarkably small.</p>
              <div className="trust-statements" aria-label="Partnership principles">
                <span>Clear expectations</span>
                <span>Responsive coordination</span>
                <span>Scalable capacity</span>
              </div>
            </>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────── */}
      <div className="shell cta-wrap">
        <AnimateOnScroll>
          <CallToAction />
        </AnimateOnScroll>
      </div>
    </>
  )
}
