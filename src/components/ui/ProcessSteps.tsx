import { ChatCircleDots, CheckCircle, Cube, Files, Truck } from '@phosphor-icons/react'
import { useEffect, useRef, type ComponentType, type JSX } from 'react'

const steps: Array<{ title: string; copy: string; Icon: ComponentType<{ size?: number; 'aria-hidden'?: boolean }> }> = [
  { title: 'Share the case', copy: 'Send files, notes, and the delivery brief through your preferred secure workflow.', Icon: Files },
  { title: 'Confirm the plan', copy: 'We review inputs, flag questions early, and align on scope before work begins.', Icon: ChatCircleDots },
  { title: 'Design and produce', copy: 'Digital specialists move the case through a controlled, traceable production path.', Icon: Cube },
  { title: 'Quality review', copy: 'Defined checks protect consistency, accuracy, and the details specified by your team.', Icon: CheckCircle },
  { title: 'Deliver and support', copy: 'Cases are prepared for handoff with responsive support after delivery.', Icon: Truck },
]

export function ProcessSteps(): JSX.Element {
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      Array.from(list.children).forEach((child) => {
        ;(child as HTMLElement).dataset.visible = 'true'
      })
      return
    }

    // Add animation class to each step
    Array.from(list.children).forEach((child) => {
      child.classList.add('anim-fade-up')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(list.children).forEach((child) => {
              ;(child as HTMLElement).dataset.visible = 'true'
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  return (
    <ol className="process-steps" ref={listRef}>
      {steps.map(({ title, copy, Icon }, index) => (
        <li key={title}>
          <div className="process-steps__icon">
            <Icon aria-hidden size={24} />
          </div>
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </li>
      ))}
    </ol>
  )
}
