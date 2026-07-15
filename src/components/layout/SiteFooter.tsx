import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import { MillingWorksLogo } from '../../brand/MillingWorksLogo'

export function SiteFooter(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand-only">
          <Link aria-label="Milling Works home" to="/">
            <MillingWorksLogo decorative inverse />
          </Link>
        </div>
        <small>
          Powered by{' '}
          <a href="https://bracketdex.com" target="_blank" rel="noreferrer">
            bracketdex.com
          </a>
        </small>
      </div>
    </footer>
  )
}
