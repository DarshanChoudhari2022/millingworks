import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'

import { App } from '../app/App'

afterEach(cleanup)

const pages = [
  ['/about', 'Precision built on partnership', 'Built for the work between teams'],
  ['/crowns-bridges', 'Crowns and bridges, made with intent', 'Restorations for everyday clinical work'],
  ['/dental-implants', 'Implant restorations, carefully resolved', 'A considered route from records to restoration'],
  ['/faqs', 'Frequently Asked Questions', 'What does Milling Works do?'],
  ['/contact', 'Start a conversation', 'Tell us what you need'],
] as const

describe('interior pages', () => {
  for (const [path, heading, section] of pages) {
    it(`renders ${path} with its unique content`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      )

      expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
      expect(screen.getByText(section)).toBeInTheDocument()
    })
  }

  it('redirects /services to crowns and bridges', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Crowns and bridges, made with intent' })).toBeInTheDocument()
  })

  it('redirects removed services to crowns and bridges', () => {
    render(
      <MemoryRouter initialEntries={['/record-auditing']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Crowns and bridges, made with intent' })).toBeInTheDocument()
  })

  it('uses native buttons and exposes accordion state', () => {
    render(
      <MemoryRouter initialEntries={['/faqs']}>
        <App />
      </MemoryRouter>,
    )

    const question = screen.getByRole('button', { name: 'What does Milling Works do?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(question).toHaveAttribute('aria-controls')

    fireEvent.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Milling Works is a dental laboratory focused on crowns/)).toBeVisible()
  })
})
