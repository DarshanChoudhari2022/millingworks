import { ArrowRight, ChatCircleDots, FileArrowUp, Phone } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

export function CallToAction(): JSX.Element {
  return (
    <section className="closing-cta">
      <div className="closing-cta__content">
        <p className="eyebrow">Ready to get started?</p>
        <h2>Bring your next case to Milling Works.</h2>
        <p className="closing-cta__sub">
          Whether you need a single crown or a full production partnership, we're here to help.
        </p>
      </div>
      <div className="closing-cta__actions">
        <Link className="button button--accent" to="/contact">
          Get a Quote <ArrowRight aria-hidden size={18} />
        </Link>
        <Link className="button button--light" to="/contact#upload">
          <FileArrowUp aria-hidden size={18} /> Upload STL Files
        </Link>
        <Link className="button button--light" to="/contact">
          <ChatCircleDots aria-hidden size={18} /> Send Your Case
        </Link>
        <a className="button button--light" href="tel:+918390998088">
          <Phone aria-hidden size={18} /> Speak to a Specialist
        </a>
      </div>
    </section>
  )
}
