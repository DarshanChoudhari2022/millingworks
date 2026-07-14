import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import type { JSX } from 'react'

import { ContactForm } from '../components/forms/ContactForm'
import { PageHero } from '../components/ui/PageHero'
import { company } from '../content/company'

export function ContactPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="Contact Milling Works" title="Start a conversation" summary="Share the service, timing, and context you have. We will review the scope and continue with you through WhatsApp or email." />
      <section className="section shell contact-layout">
        <aside className="contact-details">
          <p className="eyebrow">Contact details</p>
          <h2>Tell us what you need</h2>
          <p>Preparing the form creates a handoff for your chosen app. You can review everything before continuing.</p>
          <address>
            <a href={`tel:+${company.phoneDigits}`}><Phone aria-hidden size={22} />{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}><EnvelopeSimple aria-hidden size={22} />{company.email}</a>
            <span><MapPin aria-hidden size={22} />{company.address}</span>
          </address>
        </aside>
        <ContactForm />
      </section>
    </>
  )
}
