import type { JSX, ReactNode } from 'react'

import heroGrid from '../../assets/hero-mint-grid.webp'

interface Metric {
  value: string
  label: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  summary: string
  metrics?: readonly Metric[]
  children?: ReactNode
  className?: string
}

export function PageHero({ eyebrow, title, summary, metrics, children, className }: PageHeroProps): JSX.Element {
  return (
    <header className={className ? `page-hero ${className}` : 'page-hero'}>
      <img className="page-hero__grid" src={heroGrid} alt="" />
      <div className="shell page-hero__inner">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          {children}
        </div>
        {metrics && (
          <dl className="page-hero__metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </header>
  )
}
