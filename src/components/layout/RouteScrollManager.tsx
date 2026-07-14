import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function RouteScrollManager(): null {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    const behavior: ScrollBehavior = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth'

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' })
        return
      }
    }

    window.scrollTo({ behavior, left: 0, top: 0 })
  }, [hash, pathname])

  return null
}
