import { CheckCircle, Cube, Factory, MagnifyingGlass, Truck } from '@phosphor-icons/react'
import type { JSX } from 'react'

import { PageHero } from '../components/ui/PageHero'

const workflow = [
  ['Review', 'Case files and prescriptions are reviewed before work begins.', MagnifyingGlass],
  ['Manufacture', 'The agreed restoration moves through the appropriate digital or conventional workflow.', Factory],
  ['Quality control', 'The case is checked against the prescription and agreed client requirements.', CheckCircle],
  ['Delivery', 'Dispatch and delivery expectations are confirmed for the case and destination.', Truck],
] as const

export function DentalLabPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="Dental production" title="Full-Service Dental Lab" summary="Restorative and implant case support connecting review, manufacture, quality control, and delivery through a clear workflow." metrics={[{ value: '4', label: 'connected workflow stages' }, { value: '1', label: 'clear case handoff' }]} />
      <section className="section shell interior-section">
        <div className="interior-section__intro">
          <p className="eyebrow">Restorative scope</p>
          <h2>Crowns, veneers, bridges, and implant solutions</h2>
          <p>Digital workflows support case review and production planning, with materials considered against the prescription and intended restoration.</p>
        </div>
        <div className="feature-grid feature-grid--three">
          {['Crowns and veneers', 'Bridges', 'Implant solutions'].map((title) => (
            <article className="feature-card" key={title}><Cube aria-hidden size={32} /><h3>{title}</h3><p>Case-specific review, material discussion, and production support based on the agreed requirements.</p></article>
          ))}
        </div>
      </section>
      <section className="section interior-band">
        <div className="shell">
          <div className="interior-section__intro"><p className="eyebrow">Digital workflow</p><h2>From review to delivery</h2></div>
          <ol className="workflow-grid">
            {workflow.map(([title, copy, Icon]) => <li key={title}><Icon aria-hidden size={28} /><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
        </div>
      </section>
    </>
  )
}
