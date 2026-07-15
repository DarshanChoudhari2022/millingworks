import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { useSearchParams } from 'react-router-dom'

import contactImage from '../assets/hero-center-lab.webp'
import { ContactForm, enquiryTypes } from '../components/forms/ContactForm'
import { company } from '../content/company'

export function ContactPage(): JSX.Element {
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service') ?? ''
  const defaultService = enquiryTypes.includes(requestedService as typeof enquiryTypes[number]) ? requestedService : ''

  return (
    <section className="contact-experience" aria-labelledby="contact-heading">
      <img className="contact-experience__background" src={contactImage} alt="" />
      <div className="contact-experience__overlay" />
      <div className="shell contact-experience__grid">
        <aside className="contact-experience__details">
          <p className="eyebrow">Milling Works support</p>
          <h1 id="contact-heading">Contact <span>Us</span></h1>
          <p>Need production support, a technical discussion or a dental record audit? Share what you already have and our team will review the requirement with you.</p>
          <address>
            <a href={`tel:+${company.phoneDigits}`}><Phone aria-hidden size={22} />{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}><EnvelopeSimple aria-hidden size={22} />{company.email}</a>
            <span><MapPin aria-hidden size={22} />{company.address}</span>
          </address>
        </aside>
        <div className="contact-experience__form">
          <ContactForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  )
}
