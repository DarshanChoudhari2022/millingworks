import { WhatsappLogo } from '@phosphor-icons/react'
import type { JSX } from 'react'

import { createWhatsAppUrl } from '../../lib/handoffs'

export function WhatsAppButton(): JSX.Element {
  return (
    <a
      aria-label="Chat with Milling Works on WhatsApp"
      className="whatsapp-button"
      href={createWhatsAppUrl('I would like to discuss a case with Milling Works.')}
      rel="noreferrer"
      target="_blank"
    >
      <WhatsappLogo aria-hidden size={26} weight="fill" />
    </a>
  )
}
