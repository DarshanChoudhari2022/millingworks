import { ArrowRight } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import { services } from '../content/services'
import { PageHero } from '../components/ui/PageHero'

export function ServicesPage(): JSX.Element {
  return (
    <>
      <PageHero eyebrow="Capabilities" title="Services that fit your workflow" summary="From laboratory cases to record review and flexible operational support, choose the scope that matches how your team works." />
      <section className="section shell interior-section">
        <div className="service-list">
          {services.map((service, index) => (
            <article id={service.id} className="service-list__item" key={service.id}>
              <p className="service-card__number">0{index + 1}</p>
              <div>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <Link to={service.href}>Explore this service <ArrowRight aria-hidden size={19} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
