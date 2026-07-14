export interface Service {
  id: string
  title: string
  summary: string
  features: readonly string[]
  href: string
}

export const services: Service[] = [
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    summary: 'Laboratory support for crown, bridge and related restorative cases.',
    features: ['Case information reviewed before production', 'Clear route through production and final checks'],
    href: '/crowns-bridges',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    summary: 'A collaborative laboratory workflow for implant restoration cases.',
    features: ['Early review of available records', 'Case-specific communication before production'],
    href: '/dental-implants',
  },
  {
    id: 'technical-question',
    title: 'Technical question',
    summary: 'Discuss records, requirements or the appropriate submission route.',
    features: ['Start with the information already available', 'Prepare an email or WhatsApp enquiry'],
    href: '/contact',
  },
]
