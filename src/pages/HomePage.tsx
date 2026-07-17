import { ArrowRight, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import homeHero from '../assets/hero-center-lab.webp'
import crownsHero from '../assets/hero-crowns.webp'
import implantsHero from '../assets/hero-implant.webp'
import { ContactForm } from '../components/forms/ContactForm'
import { EditorialHero } from '../components/ui/EditorialHero'
import { FaqAccordionSection } from '../components/ui/FaqAccordionSection'
import { company } from '../content/company'

const workflow = [
  ['01', 'Share the case', 'Send the prescription and available records.'],
  ['02', 'Review together', 'Questions are resolved before laboratory work starts.'],
  ['03', 'Produce and finish', 'The case follows the agreed production and finishing route.'],
  ['04', 'Check and dispatch', 'Completed work is reviewed against the case information.'],
] as const

const onboardingSteps = [
  {
    title: 'Try our service at no cost',
    points: [
      'Share up to 5 samples for a pilot run.',
      'We process the samples and share expected timelines.',
      'Timeline can vary based on case type and volume.',
      'Complete a quality check before moving ahead.',
      'Proceed only when you are fully satisfied.',
    ],
  },
  {
    title: 'Billing and invoicing',
    points: [
      'Work is managed in 30-day cycles.',
      'Rate card is shared at the start of the cycle.',
      'Invoice is shared at month-end.',
      'Payment can be completed within the next 30 days.',
    ],
  },
  {
    title: 'Audit review',
    points: [
      'Audit-related pages can be removed or hidden as needed.',
      'We align visibility with your internal process and compliance needs.',
    ],
  },
  {
    title: 'Image updates',
    points: [
      'Keep website visuals simple and clean.',
      'Hide specific photos or replace them on request.',
    ],
  },
] as const

export function HomePage(): JSX.Element {
  return (
    <>
      <EditorialHero
        eyebrow="Milling Works dental laboratory"
        title="Dental restorations, made with intent"
        introduction="A focused laboratory partner for crowns, bridges and implant restorations with careful case review and clear communication from the outset."
        image={homeHero}
        imageAlt="Dental laboratory technicians working on a restoration"
        variant="home"
        primaryAction={{ label: 'Send a case', href: '/contact' }}
        secondaryAction={{ label: 'See how we work', href: '#workflow' }}
      />

      <section className="service-routes shell" aria-labelledby="service-routes-title">
        <div className="service-routes__intro">
          <p className="eyebrow">Two focused services</p>
          <h2 id="service-routes-title">Choose the route that fits your case.</h2>
        </div>
        <div className="service-routes__grid">
          <Link aria-label="Explore crowns and bridges" className="service-route service-route--crowns" to="/crowns-bridges">
            <div>
              <span>01</span>
              <p>Crown and bridge laboratory</p>
              <h3>Crowns &amp;<br />bridges</h3>
              <strong>Explore crowns and bridges <ArrowRight aria-hidden size={18} /></strong>
            </div>
            <img src={crownsHero} alt="Dental crown restoration" />
          </Link>
          <Link aria-label="Explore implant restorations" className="service-route service-route--implants" to="/dental-implants">
            <div>
              <span>02</span>
              <p>Implant laboratory support</p>
              <h3>Dental<br />implants</h3>
              <strong>Explore implant restorations <ArrowRight aria-hidden size={18} /></strong>
            </div>
            <img src={implantsHero} alt="Dental implant restoration" />
          </Link>
        </div>
      </section>

      <section className="home-workflow" id="workflow" aria-labelledby="home-workflow-title">
        <div className="shell home-workflow__inner">
          <div className="home-workflow__heading">
            <p className="eyebrow">A visible process</p>
            <h2 id="home-workflow-title">Every case starts with a proper review.</h2>
          </div>
          <ol>
            {workflow.map(([number, title, copy]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-principles shell" aria-labelledby="principles-title">
        <p className="eyebrow">What matters in the laboratory</p>
        <h2 id="principles-title">Fewer promises. Better case communication.</h2>
        <div>
          <p>We keep the conversation centred on the prescription, the available records and the requirements of the individual restoration.</p>
          <p>Where a case needs clarification, the right time to raise it is before production not after the work is complete.</p>
        </div>
      </section>

      <section className="home-onboard-trial shell" aria-labelledby="home-onboard-trial-title">
        <p className="eyebrow">Sampling · Pilot · No Cost</p>
        <h2 id="home-onboard-trial-title">Onboard Trial</h2>
        <p>Start with baby steps. Try our service at no cost and evaluate quality before committing to full monthly work.</p>

        <div className="home-onboard-trial__grid">
          {onboardingSteps.map((step, index) => (
            <article key={step.title} className="home-onboard-trial__card" aria-labelledby={`onboarding-step-${index + 1}`}>
              <p className="home-onboard-trial__step">Step {index + 1}</p>
              <h3 id={`onboarding-step-${index + 1}`}>{step.title}</h3>
              <ul>
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-faq shell" aria-labelledby="home-faq-title">
        <div className="home-faq__intro">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="home-faq-title">FAQs</h2>
          <p>Quick answers on services, sampling, timelines, billing and case handoff.</p>
        </div>
        <FaqAccordionSection />
      </section>

      <section className="home-contact shell" aria-labelledby="home-contact-title">
        <div className="home-contact__intro">
          <p className="eyebrow">Contact the laboratory</p>
          <h2 id="home-contact-title">Contact Info</h2>
          <p>
            Need assistance or have a question? We're here to provide support and review any enquiry you may have. Whether it's a case request, partnership opportunity or general feedback, feel free to connect with us.
          </p>
          <address className="home-contact__details">
            <a href={`tel:+${company.phoneDigits}`}><Phone aria-hidden size={20} />{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}><EnvelopeSimple aria-hidden size={20} />{company.email}</a>
            <span><MapPin aria-hidden size={20} />{company.address}</span>
          </address>
        </div>
        <div className="home-contact__form">
          <ContactForm />
        </div>
      </section>

    </>
  )
}
