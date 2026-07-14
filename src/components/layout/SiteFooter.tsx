import { ArrowUpRight } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import { MillingWorksLogo } from '../../brand/MillingWorksLogo'
import { company } from '../../content/company'

export function SiteFooter(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link aria-label="Milling Works home" to="/"><MillingWorksLogo decorative inverse /></Link>
          <p>Digital-first dental production and operational support, built around precise handoffs.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div>
          <p className="footer-label">Talk to us</p>
          <a href={`tel:+${company.phoneDigits}`}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <Link to="/contact">Start a conversation <ArrowUpRight aria-hidden size={16} /></Link>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <small>© {new Date().getFullYear()} Milling Works. All rights reserved.</small>
        <small>Dental production partnerships, without the distance.</small>
      </div>
    </footer>
  )
}
