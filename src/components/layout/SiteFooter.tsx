import { ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import { MillingWorksLogo } from '../../brand/MillingWorksLogo'
import { company } from '../../content/company'

const WHATSAPP_URL = `https://wa.me/${company.phoneDigits}?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20case%20with%20Milling%20Works.`

export function SiteFooter(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        {/* Brand column */}
        <div>
          <Link aria-label="Milling Works home" to="/">
            <MillingWorksLogo decorative inverse />
          </Link>
          <p>
            Digital-first dental production and operational support — built around
            precise handoffs and trusted partnerships across the UK and Europe.
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <p className="footer-label">Explore</p>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/dental-lab">Dental Lab</Link>
          <Link to="/record-auditing">Record Auditing</Link>
          <Link to="/faqs">FAQs</Link>
        </div>

        {/* Contact column */}
        <div>
          <p className="footer-label">Talk to us</p>
          <a href={`tel:+${company.phoneDigits}`}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <Link to="/contact">
            Start a conversation <ArrowUpRight aria-hidden size={15} />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <WhatsappLogo aria-hidden size={18} weight="fill" />
            WhatsApp us
          </a>
        </div>
      </div>

      <div className="shell site-footer__bottom">
        <small>© {new Date().getFullYear()} Milling Works. All rights reserved.</small>
        <small>Dental production partnerships, without the distance.</small>
      </div>
    </footer>
  )
}
