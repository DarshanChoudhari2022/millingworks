import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { App } from '../app/App'

afterEach(cleanup)

describe('HomePage', () => {
  it('presents one focused laboratory story and two separate service routes', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)

    expect(screen.getByRole('heading', { level: 1, name: 'Dental restorations, made with intent' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore crowns and bridges' })).toHaveAttribute('href', '/crowns-bridges')
    expect(screen.getByRole('link', { name: 'Explore implant restorations' })).toHaveAttribute('href', '/dental-implants')
    expect(screen.queryByText(/311 reviews|98%|Principal Dentist|Lab Manager/i)).not.toBeInTheDocument()
  })

  it('exposes a keyboard-operable mobile navigation toggle', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveAccessibleName('Close menu')
  })

  it('contains only one level-one heading', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })
})
