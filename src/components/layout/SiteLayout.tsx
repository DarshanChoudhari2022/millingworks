import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'

import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function SiteLayout(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content"><Outlet /></main>
      <SiteFooter />
      <WhatsAppButton />
      <div aria-hidden className="chatbot-layer" data-chatbot-layer="reserved" />
    </>
  )
}
