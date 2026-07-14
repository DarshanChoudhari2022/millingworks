import { ArrowRight } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import { Accordion } from './Accordion'
import { faqs } from '../../content/faqs'

/** Show the first 10 FAQs on the homepage with a link to the full FAQ page */
export function FaqAccordionSection(): JSX.Element {
  const homeFaqs = faqs.slice(0, 10)

  return (
    <div className="faq-home">
      <div className="faq-home__list">
        {homeFaqs.map((faq) => (
          <Accordion key={faq.question} title={faq.question}>
            <p>{faq.answer}</p>
          </Accordion>
        ))}
      </div>
      <Link to="/faqs" className="faq-home__link">
        View all FAQs <ArrowRight aria-hidden size={16} />
      </Link>
    </div>
  )
}
