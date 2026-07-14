import type { JSX } from 'react'

import { Accordion } from '../components/ui/Accordion'
import { faqs } from '../content/faqs'
import { PageHero } from '../components/ui/PageHero'

export function FaqPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="Useful answers" title="Frequently Asked Questions" summary="Straightforward information about services, cases, turnaround, quality, privacy, auditing, and pricing." />
      <section className="section shell faq-layout">
        <div><p className="eyebrow">What to expect</p><h2>Questions before the first handoff</h2><p>Open a question for more detail. If your scope is different, contact the team and we will review it with you.</p></div>
        <Accordion items={faqs} />
      </section>
    </>
  )
}
