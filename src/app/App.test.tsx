import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { App } from './App'

describe('application routes', () => {
  it('renders the about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: 'About Milling Works' }),
    ).toBeInTheDocument()
  })

  it('renders a not-found page for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/missing']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: 'Page not found' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute(
      'href',
      '/',
    )
  })
})
