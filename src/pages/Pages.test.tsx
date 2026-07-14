import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'

import { App } from '../app/App'

afterEach(cleanup)

const pages = [
  ['/about', 'Precision built on partnership', 'Meet the people behind Milling Works'],
  ['/services', 'Services that fit your workflow', 'Dental Design Support'],
  ['/dental-lab', 'Full-Service Dental Lab', 'From review to delivery'],
  ['/record-auditing', 'Record Auditing', 'Clear findings, configured checks'],
  ['/faqs', 'Frequently Asked Questions', 'Who does Milling Works support?'],
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

  it('uses native buttons and exposes accordion state', () => {
    render(
      <MemoryRouter initialEntries={['/faqs']}>
        <App />
      </MemoryRouter>,
    )

    const question = screen.getByRole('button', { name: 'Who does Milling Works support?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(question).toHaveAttribute('aria-controls')

    fireEvent.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/We support dentists, dental practices/)).toBeVisible()
  })
})
