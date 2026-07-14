import { ArrowRight } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

export function CallToAction(): JSX.Element {
  return (
    <section className="closing-cta">
      <div>
        <p className="eyebrow">A better production rhythm</p>
        <h2>Bring your next case to Milling Works.</h2>
      </div>
      <Link className="button button--light" to="/contact">Book a Consultation <ArrowRight aria-hidden size={20} /></Link>
    </section>
  )
}
