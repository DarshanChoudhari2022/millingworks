import { ArrowUpRight, Clock, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
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
            A focused dental laboratory for crowns, bridges and implant restorations, built
            around careful review and clear case communication.
          </p>
          <div className="footer-hours">
            <Clock size={14} aria-hidden />
            <span>{company.workingHours}</span>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="footer-label">Our Work</p>
          <Link to="/full-service-dental-lab">Full-Service Dental Lab</Link>
          <Link to="/record-auditing">Dental Record Auditing</Link>
          <Link to="/crowns-bridges">Crowns &amp; Bridges</Link>
          <Link to="/dental-implants">Implant Restorations</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faqs">FAQs</Link>
        </div>

        {/* Contact column */}
        <div>
          <p className="footer-label">Contact Us</p>
          <a href={`tel:+${company.phoneDigits}`}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <Link to="/contact">
            Contact Us <ArrowUpRight aria-hidden size={15} />
          </Link>
          <div className="footer-social">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <WhatsappLogo aria-hidden size={18} weight="fill" />
              WhatsApp
            </a>
            <a
              href={company.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-linkedin"
              aria-label="Follow on LinkedIn"
            >
              <LinkedinLogo aria-hidden size={18} weight="fill" />
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div className="shell site-footer__bottom">
        <small>© {new Date().getFullYear()} Milling Works. All rights reserved.</small>
        <small>
          Crown and bridge laboratory · Implant restoration support · Dental laboratory services
        </small>
      </div>
    </footer>
  )
}
