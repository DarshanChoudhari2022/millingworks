import { ArrowRight } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

interface EditorialHeroProps {
  eyebrow: string; title: string; introduction: string; image: string; imageAlt: string
  variant: 'home' | 'crowns' | 'implants' | 'services' | 'audit'
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function EditorialHero({ eyebrow, title, introduction, image, imageAlt, variant,
  primaryAction = { label: 'Send a case', href: '/contact' }, secondaryAction }: EditorialHeroProps): JSX.Element {
  const titleId = `editorial-hero-${variant}`
  return (
    <section className={`editorial-hero editorial-hero--${variant}`} aria-labelledby={titleId}>
      <div className="editorial-hero__grid">
        <div className="editorial-hero__copy">
          <p className="editorial-hero__eyebrow">{eyebrow}</p>
          <h1 id={titleId}>{title}</h1>
          <p className="editorial-hero__intro">{introduction}</p>
          <div className="editorial-hero__actions">
            <Link className="button button--ink" to={primaryAction.href}>{primaryAction.label} <ArrowRight aria-hidden size={18} /></Link>
            {secondaryAction ? <Link className="text-link" to={secondaryAction.href}>{secondaryAction.label}</Link> : null}
          </div>
        </div>
        <div className="editorial-hero__media"><img src={image} alt={imageAlt} /></div>
      </div>
    </section>
  )
}
