import {
  ArrowUpRight,
  Buildings,
  ChartBar,
  Check,
  Cpu,
  Wrench,
} from '@phosphor-icons/react'
import type { ComponentType, JSX } from 'react'
import { Link } from 'react-router-dom'

import type { Service } from '../../content/services'

const iconMap: Record<string, ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  'dental-lab': Cpu,
  'record-auditing': ChartBar,
  'dental-design-support': Wrench,
  'practice-outsourcing': Buildings,
}

export function ServiceCard({ service, index }: { service: Service; index: number }): JSX.Element {
  const Icon = iconMap[service.id] ?? Cpu

  return (
    <article className="service-card">
      {/* Icon badge */}
      <div className="service-card__icon" aria-hidden>
        <Icon size={24} />
      </div>

      <p className="service-card__number">0{index + 1}</p>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>

      <ul>
        {service.features.map((feature) => (
          <li key={feature}>
            <Check aria-hidden size={14} weight="bold" />
            {feature}
          </li>
        ))}
      </ul>

      <Link to={service.href}>
        Explore service <ArrowUpRight aria-hidden size={17} />
      </Link>
    </article>
  )
}
