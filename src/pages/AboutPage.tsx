import { Handshake, UsersThree } from '@phosphor-icons/react'
import type { JSX } from 'react'

import { company } from '../content/company'
import { PageHero } from '../components/ui/PageHero'

export function AboutPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="About Milling Works" title="Precision built on partnership" summary="Milling Works brings dental production, digital support, and operational services together around clear communication and dependable handoffs." />
      <section className="section shell interior-section">
        <div className="interior-section__intro">
          <p className="eyebrow">The team</p>
          <h2>Meet the people behind Milling Works</h2>
          <p>Every engagement starts with a practical understanding of the work, the workflow, and the people relying on both.</p>
        </div>
        <div className="feature-grid feature-grid--two">
          {company.contacts.map((name, index) => (
            <article className="feature-card" key={name}>
              {index === 0 ? <UsersThree aria-hidden size={32} /> : <Handshake aria-hidden size={32} />}
              <h3>{name}</h3>
              <p>Client contact at Milling Works, helping teams define requirements, coordinate handoffs, and keep work moving clearly.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section interior-band">
        <div className="shell interior-band__grid">
          <div>
            <p className="eyebrow">Built for the work between teams</p>
            <h2>About Milling Works</h2>
          </div>
          <p>Our approach connects review, production support, quality control, reporting, and delivery without adding unsupported promises to the process.</p>
        </div>
      </section>
    </>
  )
}
