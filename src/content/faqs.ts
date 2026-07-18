export type FaqGroup =
  | 'About Our Lab'
  | 'Delivery & Communication'
  | 'Case Submission'
  | 'Payments'
  | 'Replacements & Sampling'

export interface FaqItem { group: FaqGroup; question: string; answer: string }

export const faqs: FaqItem[] = [
  /* ── About Our Lab ───────────────────────────────────────────────────── */
  {
    group: 'About Our Lab',
    question: 'How established is MillingWorks and what quality certifications does it hold?',
    answer:
      'MillingWorks has been operating since 1995, giving us over three decades of dental manufacturing experience. We work with a team of around 90 skilled technicians and hold ISO 13485, CDSO and FDA certifications — ensuring our production processes meet internationally recognised quality and safety standards.',
  },

  /* ── Delivery & Communication ─────────────────────────────────────────── */
  {
    group: 'Delivery & Communication',
    question: 'How long does door-to-door delivery take?',
    answer:
      'In most cases we allow two working days for manufacturing and up to five days for delivery to your practice. Complex or implant-retained cases may require a slightly different schedule, which is agreed with you at the time of case acceptance.',
  },
  {
    group: 'Delivery & Communication',
    question: 'What communication channels are available?',
    answer:
      'Every client is assigned a dedicated client-servicing representative for day-to-day queries. You will also have direct access to the laboratory team via phone, email and video call, so case questions are resolved promptly without going through unnecessary intermediaries.',
  },

  /* ── Case Submission ─────────────────────────────────────────────────── */
  {
    group: 'Case Submission',
    question: 'How do we send case work to MillingWorks?',
    answer:
      'We operate entirely digitally — physical impressions are no longer required. Intraoral scans and digital prescriptions can be emailed directly to the laboratory. We also provide digital wax-ups for your review and approval before production begins, keeping the workflow fast and transparent.',
  },

  /* ── Payments ────────────────────────────────────────────────────────── */
  {
    group: 'Payments',
    question: 'How do we pay for completed cases?',
    answer:
      'We offer 30-day credit terms, giving your practice flexibility to manage cash flow. Payment is accepted through any standard legal banking channel, and invoices are itemised per case for straightforward reconciliation against your own accounts.',
  },

  /* ── Replacements & Sampling ─────────────────────────────────────────── */
  {
    group: 'Replacements & Sampling',
    question: 'What is the policy if we do not use a completed restoration?',
    answer:
      'You will not be charged for any product you choose not to use. Simply return it in its original condition to our store and no charge will apply. Please get in touch with us before returning so we can confirm the process and arrange receipt.',
  },
  {
    group: 'Replacements & Sampling',
    question: 'Can we trial MillingWorks before committing to a regular arrangement?',
    answer:
      'Absolutely. We offer a no-obligation sampling period covering up to £400 in case value. If you decide not to continue after the trial, just return the products to our store — no further charge applies. The sampling period gives you a clear, hands-on impression of our quality, turnaround times and communication before making any longer-term commitment.',
  },
]