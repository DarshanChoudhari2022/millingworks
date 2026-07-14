import type { JSX } from 'react'
import { PageHero } from '../components/ui/PageHero'

export function AboutPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="About Milling Works" title="Precision built on partnership" summary="Milling Works is a focused dental laboratory for crowns, bridges and implant restorations, working with practices and partner laboratories through clear case communication." />

      <section className="section interior-band">
        <div className="shell interior-band__grid">
          <div>
            <p className="eyebrow">Built for the work between teams</p>
            <h2>About Milling Works</h2>
          </div>
          <p>Every case begins with the prescription and available records. We review what has been supplied, resolve questions early and keep the laboratory process visible through to dispatch.</p>
        </div>
      </section>
    </>
  )
}
