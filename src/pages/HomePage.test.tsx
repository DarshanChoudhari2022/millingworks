import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'

import { App } from '../app/App'
import { company } from '../content/company'
import { services } from '../content/services'

afterEach(cleanup)

describe('HomePage', () => {
  it('presents the complete homepage and its primary handoffs', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: 'Precision Behind Every Smile' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Dental Implants' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Dental Crowns' }),
    ).toBeInTheDocument()

    for (const service of services) {
      expect(
        screen.getByRole('heading', { name: service.title }),
      ).toBeInTheDocument()
    }

    for (const link of screen.getAllByRole('link', { name: 'Send a Case' })) {
      expect(link).toHaveAttribute('href', '/contact')
    }
    expect(
      screen.getByRole('link', { name: 'Book a Consultation' }),
    ).toHaveAttribute('href', '/contact')

    const whatsappLink = screen.getByRole('link', {
      name: /chat with milling works on whatsapp/i,
    })
    expect(whatsappLink).toHaveAttribute(
      'href',
      expect.stringContaining(`wa.me/${company.phoneDigits}`),
    )
  })

  it('exposes a keyboard-operable mobile navigation toggle', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveAccessibleName('Close menu')
  })

  it('places the primary hero content before the supporting panels in DOM order', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    const primaryPanel = screen
      .getByRole('heading', { name: 'Precision Behind Every Smile' })
      .closest('.hero-panel')
    const implantPanel = screen
      .getByRole('heading', { name: 'Dental Implants' })
      .closest('.hero-panel')
    const primaryLink = screen.getAllByRole('link', { name: 'Send a Case' })[1]
    const implantLink = screen.getByRole('link', {
      name: 'Explore dental implant solutions',
    })

    expect(primaryPanel).not.toBeNull()
    expect(implantPanel).not.toBeNull()
    expect(
      primaryPanel!.compareDocumentPosition(implantPanel!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      primaryLink.compareDocumentPosition(implantLink) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
