import { ArrowDownRight, ArrowRight, GlobeHemisphereWest, LockKey, SealCheck } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import centerLab from '../assets/hero-center-lab.png'
import crowns from '../assets/hero-crowns.png'
import implant from '../assets/hero-implant.png'
import mintGrid from '../assets/hero-mint-grid.png'
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
        <img alt="" className="hero__grid" src={mintGrid} />
        <div className="hero-panel hero-panel--primary">
          <p className="hero-panel__kicker">Digital dental production</p>
          <h1 id="hero-title">Precision Behind Every Smile</h1>
          <p>Reliable laboratory, design, auditing, and outsourced workflow support—all aligned around your standards.</p>
          <Link className="button button--light" to="/contact">Send a Case <ArrowRight aria-hidden size={20} /></Link>
          <img alt="Dental technician working in a digital laboratory" src={centerLab} />
        </div>
        <div className="hero-panel hero-panel--implant">
          <p className="hero-panel__kicker">Implant solutions</p>
          <h2>Dental Implants</h2>
          <p>Digitally coordinated restorations with precision at the connection.</p>
          <img alt="Precision dental implant restoration" src={implant} />
          <Link aria-label="Explore dental implant solutions" className="round-link" to="/dental-lab"><ArrowDownRight aria-hidden size={28} /></Link>
        </div>
        <div className="hero-panel hero-panel--crowns">
          <p className="hero-panel__kicker">Restorative craft</p>
          <h2>Dental Crowns</h2>
          <p>Carefully finished ceramic restorations designed for confident delivery.</p>
          <img alt="Premium ceramic dental crowns" src={crowns} />
          <Link aria-label="Explore dental crown solutions" className="round-link" to="/dental-lab"><ArrowDownRight aria-hidden size={28} /></Link>
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
