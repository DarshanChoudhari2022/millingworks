import { CheckCircle, Cpu, Gauge, Headset, ShieldCheck, Tooth, UsersThree, WifiHigh } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { whyMillingWorks } from '../../content/expansion'

const icons = [Cpu, Headset, UsersThree, CheckCircle, Gauge, Tooth, ShieldCheck, WifiHigh] as const

export function WhyMillingWorks(): JSX.Element {
  return <div className="why-milling-grid">{whyMillingWorks.map((reason, index) => {
    const Icon = icons[index]
    return <article key={reason.title}><Icon aria-hidden size={25} /><h3>{reason.title}</h3><p>{reason.description}</p></article>
  })}</div>
}
