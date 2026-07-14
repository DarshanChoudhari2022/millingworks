import { ArrowRight, LockKey, ShieldCheck } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import auditHero from '../assets/hero-mint-grid.webp'
import { RouteMetadata } from '../components/seo/RouteMetadata'
import { EditorialHero } from '../components/ui/EditorialHero'
import { ServiceWorkflow } from '../components/ui/ServiceWorkflow'
import { auditBenefits, auditWorkflow } from '../content/expansion'
import { auditingMetadata } from '../content/routeMetadata'

export function DentalRecordAuditingPage(): JSX.Element {
  return <>
    <RouteMetadata metadata={auditingMetadata} />
    <EditorialHero
      eyebrow="Dental record auditing"
      title="Clearer records. Stronger clinical governance."
      introduction="Structured dental record and X-ray auditing support delivered through GDPR, HIQA and CQC-compliant workflows for dental businesses in the UK and Europe."
      image={auditHero}
      imageAlt="Secure digital pattern representing structured dental record review"
      variant="audit"
      primaryAction={{ label: 'Discuss an auditing requirement', href: '/contact?service=Dental%20Record%20Auditing' }}
      secondaryAction={{ label: 'See the audit workflow', href: '#audit-workflow' }}
    />

    <section className="expansion-overview shell" aria-labelledby="audit-overview">
      <div><p className="eyebrow">Structured review support</p><h2 id="audit-overview">Make documentation quality easier to see.</h2></div>
      <p>Milling Works provides operational dental record auditing designed to surface gaps, recurring themes and improvement opportunities. The review scope can include dental records and related X-ray documentation, with structured findings prepared for your team.</p>
    </section>

    <section className="audit-benefits shell" aria-labelledby="audit-benefits-heading">
      <div className="expansion-heading"><p className="eyebrow">Your benefits</p><h2 id="audit-benefits-heading">A clearer view of records, risks and recurring themes.</h2></div>
      <div className="audit-benefits__list">{auditBenefits.map((benefit, index) => <article key={benefit.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div>
    </section>

    <section className="audit-rationale"><div className="shell audit-rationale__grid"><div><p className="eyebrow">Why regular auditing matters</p><h2>Turn documentation review into practical improvement.</h2></div><div><p>Periodic review helps teams assess completeness, consistency, follow-up information and the clarity of clinical documentation. A structured audit can reveal patterns that are difficult to see case by case.</p><p>Findings are presented as operational evidence for discussion, training and improvement planning—not as a substitute for professional judgement.</p></div></div></section>

    <section className="workflow-band" id="audit-workflow" aria-labelledby="audit-workflow-heading"><div className="shell workflow-band__inner"><div><p className="eyebrow">Secure audit workflow</p><h2 id="audit-workflow-heading">A defined route for sensitive information.</h2></div><ServiceWorkflow items={auditWorkflow} /></div></section>

    <section className="audit-compliance shell" aria-labelledby="audit-compliance-heading"><div><p className="eyebrow">Compliance and trust</p><h2 id="audit-compliance-heading">Review support built around responsible handling.</h2></div><div className="audit-compliance__points"><article><ShieldCheck aria-hidden size={30} /><h3>Compliance-aware process</h3><p>GDPR, HIQA and CQC-compliant workflows shape how the agreed audit is handled.</p></article><article><LockKey aria-hidden size={30} /><h3>Secure data handling</h3><p>Transfer routes, access and scope are agreed before records are shared.</p></article></div></section>

    <aside className="audit-disclaimer shell"><strong>Important:</strong> Milling Works' auditing support provides operational review and structured findings. It does not replace legal advice, regulatory guidance, diagnosis or independent clinical judgement.</aside>

    <section className="expansion-closing"><div className="shell"><p>Ready to define an audit scope?</p><h2>Start with the records and outcome you need.</h2><Link className="button button--lime" to="/contact?service=Dental%20Record%20Auditing">Contact Us <ArrowRight aria-hidden size={18} /></Link></div></section>
  </>
}
