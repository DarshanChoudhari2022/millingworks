import {
  ArrowsClockwise,
  Chats,
  Crown,
  LockKey,
  Rocket,
  ShieldCheck,
  UserCircle,
  UsersThree,
} from '@phosphor-icons/react'
import type { ComponentType, JSX } from 'react'

import type { Differentiator } from '../../content/whyChooseUs'

const iconMap: Record<string, ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  'digital-first': ArrowsClockwise,
  'uk-communication': Chats,
  'experienced-technicians': UsersThree,
  'strict-qc': ShieldCheck,
  'fast-turnaround': Rocket,
  'implant-expertise': Crown,
  'secure-data': LockKey,
  'dedicated-manager': UserCircle,
}

export function WhyChooseCard({
  item,
  index,
}: {
  item: Differentiator
  index: number
}): JSX.Element {
  const Icon = iconMap[item.id] ?? ShieldCheck

  return (
    <article className="why-card">
      <div className="why-card__icon" aria-hidden>
        <Icon size={24} />
      </div>
      <span className="why-card__number">0{index + 1}</span>
      <h3 className="why-card__title">{item.title}</h3>
      <p className="why-card__desc">{item.description}</p>
    </article>
  )
}
