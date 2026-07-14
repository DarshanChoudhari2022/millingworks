export interface Differentiator {
  id: string
  title: string
  description: string
}

export const differentiators: Differentiator[] = [
  {
    id: 'digital-first',
    title: 'Digital-First Workflow',
    description:
      'Every case flows through a fully digital pipeline — from STL upload through CAD design and 5-axis milling to final QC — eliminating manual errors and ensuring traceability.',
  },
  {
    id: 'uk-communication',
    title: 'UK-Hours Communication',
    description:
      'Your team reaches us during UK working hours. Urgent queries get a same-day response. We structure communication around your schedule, not ours.',
  },
  {
    id: 'experienced-technicians',
    title: 'Experienced Technicians',
    description:
      'Our dental technicians bring years of hands-on experience across crowns, bridges, implant restorations and full arch cases — ensuring clinical precision in every restoration.',
  },
  {
    id: 'strict-qc',
    title: 'Strict Quality Control',
    description:
      'Every case passes defined acceptance checks before it leaves us. If it doesn\'t meet your spec, we resolve it before delivery — not after. Multi-point QC is standard.',
  },
  {
    id: 'fast-turnaround',
    title: 'Fast Turnaround',
    description:
      '48-hour standard turnaround on most cases. Rush production available for urgent clinical needs. We confirm delivery timelines upfront — no surprises.',
  },
  {
    id: 'implant-expertise',
    title: 'Implant Expertise',
    description:
      'Specialised in implant-supported restorations including custom abutments, screw-retained crowns, implant bridges and full arch prosthetics across all major implant systems.',
  },
  {
    id: 'secure-data',
    title: 'Secure Data Handling',
    description:
      'GDPR-compliant workflows with signed data-processing agreements and NDAs as standard. Patient data and case files are handled within documented, secure processes.',
  },
  {
    id: 'dedicated-manager',
    title: 'Dedicated Account Manager',
    description:
      'Every practice gets a single point of contact who knows your preferences, case history and clinical requirements — no call centres, no repeating yourself.',
  },
]
