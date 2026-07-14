import { ArrowDownRight, ArrowRight, GlobeHemisphereWest, List, LockKey, SealCheck } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import avatarGroup from '../assets/avatar-group.webp'
import centerLab from '../assets/hero-center-lab.webp'
import crowns from '../assets/hero-crowns.webp'
import drReed from '../assets/dr-reed.webp'
import implant from '../assets/hero-implant.webp'
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
      <section className="hero" aria-labelledby="hero-title">
        {/* Background Decorative Glows */}
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
        
        <div className="hero-cards-container">
          
          {/* Card 2: Restore Your True Smile */}
          <div className="hero-panel hero-card hero-card--primary">
            <div className="hero-card__header">
              <span className="hero-card__brand">SmileLab</span>
              <button className="hero-card__menu-btn" aria-label="Menu"><List size={22} /></button>
            </div>
            
            <div className="hero-card__content">
              <h1 id="hero-title" className="hero-card__title">Restore Your<br />True Smile</h1>
            </div>
            
            <div className="hero-card__main-image-wrap">
              <img alt="Dental technicians working on a giant white tooth" className="hero-card__main-image" src={centerLab} />
            </div>
            
            {/* Circular Consultation Button */}
            <Link to="/contact" className="rotating-badge-btn" aria-label="Book a Consultation">
              <svg className="rotating-badge-btn__text" viewBox="0 0 100 100">
                <path d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" id="textPath" />
                <text className="rotating-badge-btn__textpath">
                  <textPath href="#textPath">BOOK YOUR CONSULTATION • BOOK YOUR CONSULTATION • </textPath>
                </text>
              </svg>
              <div className="rotating-badge-btn__center">
                <ArrowRight size={22} className="rotating-badge-btn__arrow" />
              </div>
            </Link>
          </div>

          {/* Card 1: Dental Implants */}
          <Link to="/dental-lab" aria-label="Explore dental implant solutions" className="hero-panel hero-card hero-card--implant">
            <div className="hero-card__header">
              <span className="hero-card__brand">SmileLab</span>
              <span className="hero-card__menu-btn"><List size={22} /></span>
            </div>
            
            <div className="hero-card__content">
              <h2 className="hero-card__title">Dental<br />Implants</h2>
              <p className="hero-card__copy">
                Dental implants are our core expertise, performed with precision and long-term care.
              </p>
            </div>
            
            <img alt="Precision dental implant restoration" className="hero-card__image hero-card__image--implant" src={implant} />
            
            <div className="hero-card__footer">
              <div className="hero-card__badge hero-card__badge--loyal">
                <SealCheck weight="fill" size={16} className="hero-card__badge-icon" />
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

          {/* Card 3: Dental Crowns */}
          <Link to="/dental-lab" aria-label="Explore dental crown solutions" className="hero-panel hero-card hero-card--crowns">
            <div className="hero-card__header">
              <span className="hero-card__brand">SmileLab</span>
              <span className="hero-card__menu-btn"><List size={22} /></span>
            </div>
            
            <div className="hero-card__content">
              <h2 className="hero-card__title">Dental<br />Crowns</h2>
              <p className="hero-card__copy">
                Every dental crown is carefully designed for durability, function, and a confident smile.
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
                    <span key={s} className="star-rating__star">★</span>
                  ))}
                </div>
                <span className="hero-card__reviews-count">311 reviews</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section shell services-section">
        <SectionIntro eyebrow="Connected expertise" title="One partner across the digital workflow">
          Choose the support your team needs today, then scale without rebuilding the relationship or the process.
        </SectionIntro>
        <div className="service-grid">
          {services.map((service, index) => <ServiceCard index={index} key={service.id} service={service} />)}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionIntro eyebrow="A clear path from file to finish" title="Five steps. No mystery.">
            Every engagement follows visible checkpoints, so your team always knows what happens next.
          </SectionIntro>
          <ProcessSteps />
        </div>
      </section>

      <section className="section shell proof-section">
        <SectionIntro eyebrow="The standard behind the work" title="Confidence is built into the process">
          Practical controls, direct communication, and accountable handoffs protect the quality of every engagement.
        </SectionIntro>
        <div className="proof-grid">
          {proofPoints.map(({ title, copy, Icon }) => (
            <article key={title}><Icon aria-hidden size={31} /><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="support-band">
        <div className="shell support-band__inner">
          <p className="eyebrow">Support without borders</p>
          <h2>Made in Pune. Connected to the UK and Europe.</h2>
          <p>Structured digital handoffs and responsive communication make distance feel remarkably small.</p>
          <div className="trust-statements" aria-label="Partnership principles">
            <span>Clear expectations</span><span>Responsive coordination</span><span>Scalable capacity</span>
          </div>
        </div>
      </section>

      <div className="shell cta-wrap"><CallToAction /></div>
    </>
  )
}
