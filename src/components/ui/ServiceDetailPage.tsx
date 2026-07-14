import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import type { ServicePageContent } from '../../content/servicePages'
import { EditorialHero } from './EditorialHero'

export function ServiceDetailPage({ content }: { content: ServicePageContent }): JSX.Element {
  const crowns = content.slug === 'crowns-bridges'
  return <>
    <EditorialHero eyebrow={content.eyebrow} image={content.heroImage} imageAlt={content.heroAlt}
      introduction={content.introduction} title={content.title} variant={crowns ? 'crowns' : 'implants'} />
    <section className="editorial-section shell" aria-labelledby={`${content.slug}-offerings`}>
      <div className="editorial-section__heading"><p className="eyebrow">Laboratory support</p>
        <h2 id={`${content.slug}-offerings`}>{crowns ? 'Restorations for everyday clinical work' : 'Support for considered implant cases'}</h2></div>
      <div className="editorial-list">{content.offerings.map((item, index) => <article key={item.title}>
        <span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </section>
    <section className="workflow-band" aria-labelledby={`${content.slug}-workflow`}><div className="shell workflow-band__inner">
      <div><p className="eyebrow">How the case moves</p><h2 id={`${content.slug}-workflow`}>{crowns ? 'A clear route from records to restoration' : 'A considered route from records to restoration'}</h2></div>
      <ol>{content.workflow.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
    </div></section>
    <section className="service-closing shell"><p>Have a case that needs a closer look?</p><h2>Start with the records you already have.</h2>
      <Link className="button button--lime" to="/contact">{content.ctaLabel}</Link></section>
  </>
}
