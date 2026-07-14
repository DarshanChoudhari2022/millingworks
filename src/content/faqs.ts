export type FaqGroup =
  | 'Services'
  | 'Digital Cases'
  | 'Turnaround & Delivery'
  | 'Quality'
  | 'Privacy'
  | 'Pricing'
  | 'Materials'
  | 'Compatibility'

export interface FaqItem {
  group: FaqGroup
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    group: 'Services',
    question: 'What does Milling Works do?',
    answer:
      'Milling Works is a digital dental milling centre and laboratory. We produce crowns, bridges, veneers, inlays/onlays, implant restorations, and full arch prosthetics for dental practices and labs across the UK and Europe.',
  },
  {
    group: 'Digital Cases',
    question: 'What file formats do you accept?',
    answer:
      'We accept STL, PLY, OBJ, and DCM files from all major intraoral scanners and CAD systems. If your scanner exports in a proprietary format, contact us and we\'ll confirm compatibility.',
  },
  {
    group: 'Compatibility',
    question: 'Do you support iTero scans?',
    answer:
      'Yes. We accept iTero exports directly. Simply export your scan as an STL file and upload it through our secure case portal or email it to our team.',
  },
  {
    group: 'Turnaround & Delivery',
    question: 'What is your standard turnaround time?',
    answer:
      'Our standard turnaround is 48 hours for most single-unit restorations. Complex cases such as full arch restorations or implant frameworks may require 5–7 working days. We confirm the expected schedule when the case scope is agreed.',
  },
  {
    group: 'Turnaround & Delivery',
    question: 'Do you ship internationally?',
    answer:
      'Yes. We ship across the UK and Europe with tracked, insured delivery. International shipping to other regions is available on request. Cases are packaged to dental industry standards for safe transit.',
  },
  {
    group: 'Digital Cases',
    question: 'How do I send cases to Milling Works?',
    answer:
      'You can upload STL files through our secure digital portal, send them via email, or use any major case management platform. We\'ll set up your preferred workflow during onboarding.',
  },
  {
    group: 'Materials',
    question: 'What materials do you work with?',
    answer:
      'We mill and process zirconia, lithium disilicate (E.max), PMMA, titanium, cobalt-chrome (CoCr), PEEK, and hybrid ceramics. Material selection is guided by clinical requirements and your prescription.',
  },
  {
    group: 'Services',
    question: 'Can you handle implant cases?',
    answer:
      'Absolutely. Implant restorations are a core speciality — including custom abutments, screw-retained crowns, implant bridges, and full arch prosthetics. We work with all major implant systems.',
  },
  {
    group: 'Turnaround & Delivery',
    question: 'Do you offer rush production?',
    answer:
      'Yes. Rush and same-day production is available for urgent clinical needs, subject to case complexity and material availability. Contact us to confirm availability and any applicable surcharge.',
  },
  {
    group: 'Quality',
    question: 'How are remakes handled?',
    answer:
      'If a case doesn\'t meet the agreed specification, we investigate the root cause, produce a replacement at no additional cost, and implement corrective measures to prevent recurrence. Remakes are fast-tracked through production.',
  },
  {
    group: 'Compatibility',
    question: 'What scanners are compatible with your workflow?',
    answer:
      'We are compatible with all major intraoral scanners including iTero, Medit, 3Shape TRIOS, CEREC/Sirona, Planmeca, and Carestream. Any scanner that exports open STL files can integrate with our digital workflow.',
  },
  {
    group: 'Quality',
    question: 'How are cases checked before delivery?',
    answer:
      'Cases move through documented review and quality-control stages based on the agreed prescription and client requirements before dispatch. This includes digital design review, marginal fit verification, shade matching, and final visual inspection.',
  },
  {
    group: 'Privacy',
    question: 'How is confidential information handled?',
    answer:
      'We limit case information to what is needed for the work and agree secure handling and access expectations with each client before engagement. We sign data-processing agreements and NDAs as standard — GDPR-compliant from day one.',
  },
  {
    group: 'Pricing',
    question: 'How do I request pricing?',
    answer:
      'Contact us with the case type, expected volume, and timing you need. We will review the scope and prepare a quotation rather than applying a one-size-fits-all price. Volume pricing is available for practices with consistent caseloads.',
  },
]
