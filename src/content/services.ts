export interface Service {
  id: string
  title: string
  summary: string
  features: readonly string[]
  href: string
}

export const services: Service[] = [
  {
    id: 'dental-lab',
    title: 'Full-Service Dental Lab',
    summary:
      'Digital and conventional laboratory support for restorative and implant cases, from review through quality control and delivery.',
    features: [
      'Crowns, veneers, and bridges',
      'Implant solutions',
      'Digital case workflows',
    ],
    href: '/dental-lab',
  },
  {
    id: 'record-auditing',
    title: 'Record Auditing',
    summary:
      'Structured reviews of dental records and X-rays for completeness, consistency, and checks configured to each client’s requirements.',
    features: [
      'Record and X-ray review',
      'Configurable client checks',
      'Structured audit reports',
    ],
    href: '/record-auditing',
  },
  {
    id: 'dental-design-support',
    title: 'Dental Design Support',
    summary:
      'Flexible digital design capacity that helps practices and laboratory partners move cases through production efficiently.',
    features: [
      'Restorative design support',
      'Digital file review',
      'Collaborative revisions',
    ],
    href: '/services#dental-design-support',
  },
  {
    id: 'practice-outsourcing',
    title: 'Practice Outsourcing',
    summary:
      'Reliable operational support for repeatable practice workflows, tailored to the processes and service levels your team needs.',
    features: [
      'Documented workflows',
      'Scalable team support',
      'Clear handoffs and reporting',
    ],
    href: '/services#practice-outsourcing',
  },
]
