import { List, X } from '@phosphor-icons/react'
import { useEffect, useState, type JSX } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { MillingWorksLogo } from '../../brand/MillingWorksLogo'

const navigation = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Dental Lab', '/dental-lab'],
  ['Record Auditing', '/record-auditing'],
  ['FAQs', '/faqs'],
] as const

export function SiteHeader(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <Link aria-label="Milling Works home" className="site-header__brand" to="/">
          <MillingWorksLogo decorative />
        </Link>

        <button
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden size={22} /> : <List aria-hidden size={22} />}
        </button>

        <nav
          aria-label="Primary navigation"
          className={`site-navigation${menuOpen ? ' site-navigation--open' : ''}`}
          id="site-navigation"
        >
          {navigation.map(([label, href]) => (
            <NavLink key={href} onClick={() => setMenuOpen(false)} to={href}>
              {label}
            </NavLink>
          ))}
          <Link className="button button--compact button--accent" onClick={() => setMenuOpen(false)} to="/contact">
            Send a Case
          </Link>
        </nav>
      </div>
    </header>
  )
}
