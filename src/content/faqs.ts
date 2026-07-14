export type FaqGroup =
  | 'Services'
  | 'Digital Cases'
  | 'Turnaround & Delivery'
  | 'Quality'
  | 'Privacy'
  | 'Auditing'
  | 'Pricing'

export interface FaqItem {
  group: FaqGroup
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    group: 'Services',
    question: 'Who does Milling Works support?',
    answer:
      'We support dentists, dental practices, laboratory partners, and operations teams with laboratory, design, auditing, and outsourced workflow services.',
  },
  {
    group: 'Digital Cases',
    question: 'Which digital case files can I submit?',
    answer:
      'Share the files and prescription available for your case. Our team will review them and confirm compatibility or request anything missing before work begins.',
  },
  {
    group: 'Turnaround & Delivery',
    question: 'How long will my case take?',
    answer:
      'Turnaround depends on the restoration, materials, review needs, and destination. We confirm the expected schedule when the case scope is agreed.',
  },
  {
    group: 'Quality',
    question: 'How are cases checked before delivery?',
    answer:
      'Cases move through documented review and quality-control stages based on the agreed prescription and client requirements before dispatch.',
  },
  {
    group: 'Privacy',
    question: 'How is confidential information handled?',
    answer:
      'We limit case information to what is needed for the work and agree secure handling and access expectations with each client before engagement.',
  },
  {
    group: 'Auditing',
    question: 'What does a record audit include?',
    answer:
      'Audits can review records and X-rays for completeness, consistency, documentation, and checks configured to your organisation’s requirements, with findings returned in a structured report.',
  },
  {
    group: 'Pricing',
    question: 'How do I request pricing?',
    answer:
      'Contact us with the service, expected volume, and timing you need. We will review the scope and prepare a quotation rather than applying a one-size-fits-all price.',
  },
]
