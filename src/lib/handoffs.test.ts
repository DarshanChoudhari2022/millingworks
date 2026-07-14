import { createEmailUrl, createWhatsAppUrl } from './handoffs'
import { describe, expect, it } from 'vitest'

describe('handoff URL utilities', () => {
  it('prepares a WhatsApp handoff with the supplied message', () => {
    const url = createWhatsAppUrl('Dental lab quote')

    expect(url).toMatch(/^https:\/\/wa\.me\/918390998088\?text=/)
    expect(new URL(url).searchParams.get('text')).toBe('Dental lab quote')
  })

  it('prepares an email handoff with encoded subject and body', () => {
    const url = createEmailUrl('New case & quote', 'Patient name: José')

    expect(url).toMatch(/^mailto:sales@millingworks\.com\?/)
    expect(url).toContain(`subject=${encodeURIComponent('New case & quote')}`)
    expect(url).toContain(`body=${encodeURIComponent('Patient name: José')}`)
  })
})
