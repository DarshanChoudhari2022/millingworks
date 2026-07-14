import { ArrowUpRight, Check } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import type { Service } from '../../content/services'

export function ServiceCard({ service, index }: { service: Service; index: number }): JSX.Element {
  return (
    <article className="service-card">
      <p className="service-card__number">0{index + 1}</p>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul>{service.features.map((feature) => <li key={feature}><Check aria-hidden size={18} weight="bold" />{feature}</li>)}</ul>
      <Link to={service.href}>Explore service <ArrowUpRight aria-hidden size={18} /></Link>
    </article>
  )
}
