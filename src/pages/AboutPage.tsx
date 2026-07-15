import type { JSX } from 'react'

import { trustSignals, whyMillingWorks } from '../content/expansion'
import { PageHero } from '../components/ui/PageHero'

export function AboutPage(): JSX.Element {
  return (
    <>
      <PageHero
        eyebrow="About Milling Works"
        title="Precision built on partnership"
        summary="Milling Works is a focused dental laboratory supporting crowns, bridges and implant restorations with careful review, clear communication and dependable follow-through."
        metrics={trustSignals.slice(0, 4)}
      >
        <p className="page-hero__lede">
          We work in the space between prescription and delivery, helping dental teams keep every case clear, accountable and ready for production.
        </p>
      </PageHero>

      <section className="section interior-band">
        <div className="shell interior-band__grid">
          <div>
            <p className="eyebrow">Built for dental labs</p>
            <h2>What partnership looks like at Milling Works</h2>
          </div>
          <div>
            <p>
              We keep the process practical: review the information that arrives, identify what needs clarification early and stay aligned with the lab team through to dispatch.
            </p>
            <p>
              The result is a more predictable workflow, fewer avoidable surprises and a communication style that supports the pace of modern laboratory work.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-story shell">
        <div className="about-story__intro">
          <p className="eyebrow">Why Milling Works exists</p>
          <h2>We help laboratories and practices move from open questions to clear production decisions.</h2>
        </div>
        <div className="about-story__grid">
          <p>
            Milling Works was shaped around the parts of laboratory work that matter most: accurate case review, reliable timing and straightforward communication when a restoration needs more attention.
          </p>
          <p>
            We are not trying to be everything to every practice. We are building a focused dental laboratory that supports the work between clinical teams and production teams with discipline and consistency.
          </p>
        </div>
      </section>

      <section className="section about-qualities">
        <div className="shell">
          <div className="interior-section__intro">
            <p className="eyebrow">Why teams choose us</p>
            <h2>Small details handled early. Bigger problems avoided later.</h2>
            <p>
              The aim is simple: make case handling easier, make communication clearer and give each restoration the right level of attention before it moves forward.
            </p>
          </div>
          <div className="feature-grid feature-grid--three">
            {whyMillingWorks.map((item) => (
              <article className="feature-card about-qualities__card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
