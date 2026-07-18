import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'

import { App } from '../app/App'

afterEach(cleanup)

const pages = [
  ['/about', 'Precision built on partnership', 'Built for dental labs'],
  ['/crowns-bridges', 'Crowns and bridges, made with intent', 'Restorations for everyday clinical work'],
  ['/dental-implants', 'Implant restorations, carefully resolved', 'A considered route from records to restoration'],
  ['/faqs', 'Frequently Asked Questions', 'How do we decide which dental laboratory functions to outsource?'],
  ['/contact', 'Contact Us', 'Need production support, a technical discussion or a dental record audit? Share what you already have and our team will review the requirement with you.'],
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

  it('redirects /services to the full-service dental lab page', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Production support across the complete case journey' })).toBeInTheDocument()
  })

 
  it('uses native buttons and exposes accordion state', () => {
    render(
      <MemoryRouter initialEntries={['/faqs']}>
        <App />
      </MemoryRouter>,
    )

    const question = screen.getByRole('button', { name: 'How do we decide which dental laboratory functions to outsource?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(question).toHaveAttribute('aria-controls')

    fireEvent.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/It is best to outsource functions that are repetitive/)).toBeVisible()
  })
})
