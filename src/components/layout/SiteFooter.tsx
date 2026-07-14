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
            Precision CAD/CAM dental milling centre and digital dental laboratory — delivering
            quality crowns, bridges, implant restorations and prosthetics to UK and European
            dental practices.
          </p>
          <div className="footer-hours">
            <Clock size={14} aria-hidden />
            <span>{company.workingHours}</span>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="footer-label">Services</p>
          <Link to="/dental-lab">Dental Lab</Link>
          <Link to="/record-auditing">Record Auditing</Link>
          <Link to="/services">All Services</Link>
          <Link to="/about">About Us</Link>
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

        {/* Legal column */}
        <div>
          <p className="footer-label">Legal</p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="/gdpr">GDPR Statement</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </div>

      <div className="shell site-footer__bottom">
        <small>© {new Date().getFullYear()} Milling Works. All rights reserved.</small>
        <small>
          Precision dental milling centre · Digital dental laboratory · Crown and bridge
          laboratory · Dental production services
        </small>
      </div>
    </footer>
  )
}
