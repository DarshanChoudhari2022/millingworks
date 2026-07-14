import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'

import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { Chatbot } from '../../chatbot/Chatbot'

export function SiteLayout(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content"><Outlet /></main>
      <SiteFooter />
      <WhatsAppButton />
      <Chatbot />
    </>
  )
}
