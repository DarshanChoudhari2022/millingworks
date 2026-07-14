import { type JSX, type ReactNode, useEffect, useRef } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  /** CSS class applied to the wrapper element */
  className?: string
  /** The animation CSS class name */
  animClass?: string
  /** Threshold 0–1 for how much of the element must be visible */
  threshold?: number
  /**
   * When true, applies animation to each direct child individually
   * for a staggered entrance effect.
   */
  stagger?: boolean
}

/**
 * Lightweight scroll-reveal wrapper.
 *
 * When `stagger` is false (default): adds `animClass` + `data-visible="true"`
 * to the wrapper div when it scrolls into view.
 *
 * When `stagger` is true: adds `animClass` to each direct child and then
 * sets `data-visible="true"` on all of them when the container enters view.
 * CSS uses `transition-delay` on nth-child to create the cascade.
 *
 * Respects `prefers-reduced-motion`.
 */
export function AnimateOnScroll({
  children,
  className = '',
  animClass = 'anim-fade-up',
  threshold = 0.15,
  stagger = false,
}: AnimateOnScrollProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (stagger) {
      if (prefersReduced) return // children already visible by CSS override

      Array.from(el.children).forEach((child) => child.classList.add(animClass))

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            Array.from(el.children).forEach((child) => {
              ;(child as HTMLElement).dataset.visible = 'true'
            })
            observer.disconnect()
          }
        },
        { threshold },
      )
      observer.observe(el)
      return () => observer.disconnect()
    }

    // Single-element mode
    if (prefersReduced) return

    el.classList.add(animClass)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true'
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [animClass, stagger, threshold])

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}
