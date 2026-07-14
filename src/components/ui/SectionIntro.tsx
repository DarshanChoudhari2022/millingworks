import type { JSX, ReactNode } from 'react'

interface SectionIntroProps {
  eyebrow: string
  title: string
  children: ReactNode
  inverse?: boolean
}

export function SectionIntro({ eyebrow, title, children, inverse = false }: SectionIntroProps): JSX.Element {
  return (
    <div className={`section-intro${inverse ? ' section-intro--inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
