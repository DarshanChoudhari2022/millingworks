import type { JSX } from 'react'

import { Accordion } from '../components/ui/Accordion'
import { faqs } from '../content/faqs'
import type { FaqGroup } from '../content/faqs'
import { PageHero } from '../components/ui/PageHero'

const groupOrder: FaqGroup[] = [
  'Outsourcing',
  'Our Facilities',
  'Pricing',
  'Case Submission',
  'Payments',
  'Sampling',
]

const groupDescriptions: Record<FaqGroup, string> = {
  'Outsourcing': 'Questions about outsourcing laboratory functions, our approach and compliance with UK standards.',
  'Our Facilities': 'Information about working environments, team structure and dedicated arrangements.',
  'Pricing': 'How our pricing works and what to expect for seat and resource costs.',
  'Case Submission': 'Delivery timelines, communication channels and how to send digital case work.',
  'Payments': 'Credit terms, invoicing and our policy on unused restorations.',
  'Sampling': 'Our no-obligation trial policy before committing to an ongoing arrangement.',
}

export function FaqPage(): JSX.Element {
  const grouped = groupOrder.map((group) => ({
    group,
    description: groupDescriptions[group],
    items: faqs.filter((f) => f.group === group),
  })).filter((g) => g.items.length > 0)

  return (
    <>
      <PageHero
        className="page-hero--faq"
        eyebrow="Useful answers"
        title="Frequently Asked Questions"
        summary="Straightforward information about outsourcing, laboratory services, case submission, delivery and pricing."
      />
      {grouped.map(({ group, description, items }) => (
        <section key={group} className="section shell faq-layout">
          <div>
            <p className="eyebrow">{group}</p>
            <h2>{group}</h2>
            <p>{description}</p>
          </div>
          <Accordion items={items} />
        </section>
      ))}
    </>
  )
}
