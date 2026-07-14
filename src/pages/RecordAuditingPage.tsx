import { FileText, LockKey, SlidersHorizontal } from '@phosphor-icons/react'
import type { JSX } from 'react'

import { PageHero } from '../components/ui/PageHero'

export function RecordAuditingPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="Operational review" title="Record Auditing" summary="Structured review of dental records and X-rays for completeness, consistency, and checks configured to your organisation's requirements." />
      <section className="section shell interior-section">
        <div className="interior-section__intro"><p className="eyebrow">Audit scope</p><h2>Clear findings, configured checks</h2><p>Audits are shaped around the records, review criteria, and reporting format agreed with each client.</p></div>
        <div className="feature-grid feature-grid--three">
          <article className="feature-card"><FileText aria-hidden size={32} /><h3>Records and X-rays</h3><p>Review for completeness, consistency, and documentation against the configured checks.</p></article>
          <article className="feature-card"><SlidersHorizontal aria-hidden size={32} /><h3>Structured reports</h3><p>Findings are organised into a practical report aligned with the agreed review scope.</p></article>
          <article className="feature-card"><LockKey aria-hidden size={32} /><h3>Confidential handling</h3><p>Access and secure handling expectations are agreed before the engagement begins.</p></article>
        </div>
      </section>
      <section className="section interior-band"><div className="shell interior-band__grid"><h2>Checks configured for your team.</h2><p>Client requirements guide the review rather than a fixed, one-size-fits-all checklist. Scope, volume, timing, and reporting needs are confirmed before work begins.</p></div></section>
    </>
  )
}
