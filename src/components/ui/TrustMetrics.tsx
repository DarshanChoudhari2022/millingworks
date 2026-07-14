import { useEffect, useRef, useState, type JSX } from 'react'

import { trustStats } from '../../content/stats'

function useCountUp(target: number, duration = 2000, trigger = false): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])

  return count
}

function formatNumber(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toLocaleString('en-GB', { maximumFractionDigits: 0 })}K`
  }
  return value.toLocaleString('en-GB')
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, visible)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="trust-metrics__stat" ref={ref}>
      <span className="trust-metrics__value">
        {value >= 1000 ? formatNumber(count) : count}
        {suffix}
      </span>
      <span className="trust-metrics__label">{label}</span>
    </div>
  )
}

export function TrustMetrics(): JSX.Element {
  return (
    <section className="trust-metrics" aria-label="Trust metrics">
      <div className="shell trust-metrics__grid">
        {trustStats.map((stat) => (
          <StatItem key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
