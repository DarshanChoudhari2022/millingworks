export type FaqGroup =
  | 'Outsourcing'
  | 'Our Facilities'
  | 'Pricing'
  | 'Case Submission'
  | 'Payments'
  | 'Sampling'

export interface FaqItem { group: FaqGroup; question: string; answer: string }

export const faqs: FaqItem[] = [
  /* ── Outsourcing ─────────────────────────────────────────────────────── */
  {
    group: 'Outsourcing',
    question: 'How do we decide which dental laboratory functions to outsource?',
    answer:
      'It is best to outsource functions that are repetitive, standardised or represent a significant cost saving. Dental milling, digital design, model work and case administration are strong candidates. If the task is rule-based and does not require a clinician\'s in-chair judgement, it is usually a good fit for a laboratory partner.',
  },
  {
    group: 'Outsourcing',
    question: 'Why choose a laboratory partner in India rather than closer to home?',
    answer:
      'Competitive salaries, a large pool of qualified English-speaking dental technicians, reliable high-speed internet and low infrastructure costs combine to deliver savings of 50–70 % compared with equivalent local provision. The talent pool has grown considerably, with institutions producing internationally trained dental technologists.',
  },
  {
    group: 'Outsourcing',
    question: 'How do you ensure compliance with British standards and regulations?',
    answer:
      'All patient data is handled under GDPR guidelines. The laboratory prepares restorations and documentation but does not amend clinical records. Technicians work in a supervised, closed-office environment. Devices capable of photography are excluded from the workspace and internet access is restricted to the platforms required for the case.',
  },
  {
    group: 'Outsourcing',
    question: 'What other capabilities and skill sets can you provide?',
    answer:
      'Beyond milling and prosthetics we can source people with skills in digital design, implant planning, case administration and accounting. If you have a specific requirement and a budget in mind, we will identify the right candidate for your practice.',
  },

  /* ── Our Facilities ──────────────────────────────────────────────────── */
  {
    group: 'Our Facilities',
    question: 'What is the working environment like for your technicians?',
    answer:
      'All facilities are air-conditioned and located in registered commercial premises. Every workstation is equipped with professional-grade hardware, fast internet and the necessary laboratory software. Hot beverages, mineral drinking water and daily cleaning are provided. A dedicated manager oversees each account and is available every working day.',
  },
  {
    group: 'Our Facilities',
    question: 'Can we have a dedicated team working solely for our practice?',
    answer:
      'For a team of four or more we can arrange either a fully dedicated office or a separately cordoned area that is not accessible to other clients. This ensures complete confidentiality and a working environment tailored to your practice standards.',
  },

  /* ── Pricing ─────────────────────────────────────────────────────────── */
  {
    group: 'Pricing',
    question: 'How are we assured of transparency in pricing?',
    answer:
      'Salaries can be paid directly by the practice where applicable. Seat rent, equipment and any third-party costs are disclosed upfront and itemised. A nominal management fee is added separately, so you can see exactly what each component of the service costs.',
  },
  {
    group: 'Pricing',
    question: 'What would be the approximate cost of a dedicated arrangement?',
    answer:
      'Rates reduce as team size grows: four seats at £250 per seat, up to six at £230, up to ten at £215, up to twenty at £200, and teams of over twenty at £180 per seat. Contact the team for a tailored quotation based on your specific requirements.',
  },

  /* ── Case Submission ─────────────────────────────────────────────────── */
  {
    group: 'Case Submission',
    question: 'How long does door-to-door delivery take?',
    answer:
      'For most standard restorations we allow two working days to manufacture and up to five days for delivery to your practice. Complex cases or implant-retained work may require a different schedule, which is agreed at the time of case acceptance.',
  },
  {
    group: 'Case Submission',
    question: 'What communication channels are available?',
    answer:
      'Each practice is assigned a dedicated client-servicing contact. You will also have direct access to the laboratory by phone, email and video call so that case queries are resolved quickly without intermediaries.',
  },
  {
    group: 'Case Submission',
    question: 'How do we send case work to the laboratory?',
    answer:
      'We work digitally. Scans and digital prescriptions are submitted by email or through the agreed secure channel. We do not require physical impressions for milling cases. Digital wax-ups and design files can also be shared for review before production begins.',
  },

  /* ── Payments ────────────────────────────────────────────────────────── */
  {
    group: 'Payments',
    question: 'How do we pay for completed cases?',
    answer:
      'We offer 30-day credit terms. Payment is made through any standard legal banking channel. Invoices are itemised per case so that records are straightforward to reconcile against your own accounts.',
  },
  {
    group: 'Payments',
    question: 'What happens if we do not use a completed restoration?',
    answer:
      'You are not charged for any product you choose not to use, provided it is returned in original condition to our store in Belfast. Please contact us before returning so we can confirm the procedure and arrange receipt.',
  },

  /* ── Sampling ────────────────────────────────────────────────────────── */
  {
    group: 'Sampling',
    question: 'Can we trial the service before committing to a regular arrangement?',
    answer:
      'Yes. We allow a no-obligation sampling period of up to £400 in case value. If you choose not to continue after the trial, simply return the products to our store in Belfast and no further charge applies. This gives you a clear picture of quality, timeline and communication before any ongoing commitment.',
  },
]