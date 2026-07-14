import { company } from '../content/company'

export function createWhatsAppUrl(message: string): string {
  const query = new URLSearchParams({ text: message })

  return `https://wa.me/${company.phoneDigits}?${query.toString()}`
}

export function createEmailUrl(subject: string, body: string): string {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
