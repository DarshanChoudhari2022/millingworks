import { ChatCircleDots, CheckCircle, Cube, Files, Package, Truck } from '@phosphor-icons/react'
import { useEffect, useRef, type ComponentType, type JSX } from 'react'

const steps: Array<{ title: string; copy: string; Icon: ComponentType<{ size?: number; 'aria-hidden'?: boolean }> }> = [
  { title: 'Upload STL', copy: 'Send your digital impression files through our secure portal or email — STL, PLY, OBJ all accepted.', Icon: Files },
  { title: 'Design', copy: 'Our CAD specialists design the restoration in Exocad or 3Shape, following your prescription and preferences.', Icon: ChatCircleDots },
  { title: 'Review', copy: 'You receive a digital preview for approval before any material is cut. Changes are handled within the workflow.', Icon: CheckCircle },
  { title: 'Mill', copy: 'Precision 5-axis CNC milling in your chosen material — zirconia, E.max, PMMA, titanium, CoCr or PEEK.', Icon: Cube },
  { title: 'Quality check', copy: 'Multi-point QC including marginal fit, shade matching, occlusion and final visual inspection against your spec.', Icon: Package },
  { title: 'Ship', copy: 'Tracked, insured delivery to your practice. Cases packaged to dental industry standards with full documentation.', Icon: Truck },
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
