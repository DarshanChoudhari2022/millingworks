import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import homeHero from '../assets/hero-center-lab.webp'
import { RouteMetadata } from '../components/seo/RouteMetadata'
import { EditorialHero } from '../components/ui/EditorialHero'
import { ServiceWorkflow } from '../components/ui/ServiceWorkflow'
import { TrustSignalStrip } from '../components/ui/TrustSignalStrip'
import { WhyMillingWorks } from '../components/ui/WhyMillingWorks'
import { labCapabilities, productionWorkflow } from '../content/expansion'
import { fullServiceMetadata } from '../content/routeMetadata'

export function FullServiceDentalLabPage(): JSX.Element {
  return <>
    <RouteMetadata metadata={fullServiceMetadata} />
    <EditorialHero
      eyebrow="Full-service dental laboratory"
      title="Production support across the complete case journey"
      introduction="An ISO-certified digital dental laboratory supporting partners across the UK and Europe with restorative production, implant expertise, clear communication and strict quality control."
      image={homeHero}
      imageAlt="Milling Works dental laboratory technicians supporting digital restoration production"
      variant="services"
      primaryAction={{ label: 'Discuss your requirements', href: '/contact?service=Full-Service%20Dental%20Lab' }}
      secondaryAction={{ label: 'Explore capabilities', href: '#capabilities' }}
    />

    <section className="expansion-overview shell" aria-labelledby="full-service-overview">
      <div><p className="eyebrow">Dental laboratory outsourcing</p><h2 id="full-service-overview">One partner. A wider production capability.</h2></div>
      <p>Milling Works combines digital-first workflows with experienced technicians and direct UK-focused communication. From crown and bridge production to implant restorations, removable prosthetics and appliance requirements, every case starts with a proper technical review.</p>
    </section>

    <section className="trust-signals shell" aria-labelledby="trust-signals-heading">
      <p className="eyebrow" id="trust-signals-heading">Verified trust signals</p>
      <TrustSignalStrip />
    </section>

    <section className="why-milling shell" aria-labelledby="why-milling-heading">
      <div className="expansion-heading"><p className="eyebrow">Why Milling Works?</p><h2 id="why-milling-heading">Built differently for dependable laboratory partnerships.</h2></div>
      <WhyMillingWorks />
    </section>

    <section className="capability-sections" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="shell expansion-heading"><p className="eyebrow">Full-service capability</p><h2 id="capabilities-heading">Dental laboratory services for the cases your team handles.</h2></div>
      {labCapabilities.map((capability, index) => <article className={`capability-band${index % 2 ? ' capability-band--navy' : ''}`} key={capability.title}>
        <div className="shell capability-band__grid"><span>{capability.number}</span><div><h3>{capability.title}</h3><p>{capability.summary}</p>{capability.href ? <Link to={capability.href}>View focused capability <ArrowUpRight aria-hidden size={17} /></Link> : null}</div><ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </article>)}
    </section>

    <section className="workflow-band" aria-labelledby="full-service-workflow">
      <div className="shell workflow-band__inner"><div><p className="eyebrow">A visible production route</p><h2 id="full-service-workflow">From requirement to handoff.</h2></div><ServiceWorkflow items={productionWorkflow} /></div>
    </section>

    <section className="expansion-closing"><div className="shell"><p>Looking for a full-service dental lab partner?</p><h2>Start with your production requirements.</h2><Link className="button button--lime" to="/contact?service=Full-Service%20Dental%20Lab">Contact Us <ArrowRight aria-hidden size={18} /></Link></div></section>
  </>
}
