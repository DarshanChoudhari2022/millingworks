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
      'Every case reviewed against your spec, produced digitally, and quality-checked before delivery. Crowns, veneers, bridges, and implant work — consistent output, every time.',
    features: [
      'Fewer remakes — cases checked against spec before dispatch',
      'Consistent results across crowns, veneers, bridges & implants',
    ],
    href: '/dental-lab',
  },
  {
    id: 'record-auditing',
    title: 'Record Auditing',
    summary:
      'Structured reviews of dental records and X-rays, configured to your requirements — so compliance gaps are caught before they become problems.',
    features: [
      'Compliance gaps identified before they escalate',
      'Clear audit reports your team can act on immediately',
    ],
    href: '/record-auditing',
  },
  {
    id: 'dental-design-support',
    title: 'Dental Design Support',
    summary:
      'On-demand digital design capacity that keeps your cases moving — without adding headcount or delays to your existing workflow.',
    features: [
      'Cases move faster with flexible, scalable design support',
      'Fewer revision cycles — feedback handled within the workflow',
    ],
    href: '/services#dental-design-support',
  },
  {
    id: 'practice-outsourcing',
    title: 'Practice Outsourcing',
    summary:
      'Repeatable practice workflows handled by a structured, accountable remote team — freeing your staff to focus on patients, not paperwork.',
    features: [
      'Your team spends less time on admin, more time on care',
      'Predictable output, clear handoffs, no surprises',
    ],
    href: '/services#practice-outsourcing',
  },
]
