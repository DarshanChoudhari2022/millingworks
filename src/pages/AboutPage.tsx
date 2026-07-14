import { Handshake, UsersThree } from '@phosphor-icons/react'
import type { JSX } from 'react'

import { company } from '../content/company'
import { PageHero } from '../components/ui/PageHero'

export function AboutPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="About Milling Works" title="Precision built on partnership" summary="Milling Works brings dental production, digital support, and operational services together around clear communication and dependable handoffs." />

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
