import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'

import { App } from '../app/App'

afterEach(cleanup)

const pages = [
  ['/about', 'Precision built on partnership', 'Meet the people behind Milling Works'],
  ['/dental-lab', 'Full-Service Dental Lab', 'Eight categories. One trusted lab.'],
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

  it('redirects /services to /dental-lab', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Full-Service Dental Lab' })).toBeInTheDocument()
  })

  it('redirects /record-auditing to /dental-lab', () => {
    render(
      <MemoryRouter initialEntries={['/record-auditing']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Full-Service Dental Lab' })).toBeInTheDocument()
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
    expect(screen.getByText(/Milling Works is a digital dental milling centre/)).toBeVisible()
  })
})
