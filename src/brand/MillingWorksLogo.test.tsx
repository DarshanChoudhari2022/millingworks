import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MillingWorksLogo } from './MillingWorksLogo'

describe('MillingWorksLogo', () => {
  it('renders an accessible mark and the full brand name by default', () => {
    const { container } = render(<MillingWorksLogo />)

    const logo = screen.getByRole('img', { name: 'Milling Works home' })

    expect(logo).toBeInTheDocument()
    expect(
      within(logo).getByTitle('Milling Works MW tooth mark'),
    ).toBeInTheDocument()
    expect(screen.getByText('Milling Works')).toBeInTheDocument()

    const mark = container.querySelector('img')
    expect(mark).toHaveAttribute(
      'src',
      expect.stringContaining('milling-works-mark.png'),
    )
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('hides the full brand name in compact mode', () => {
    const { container } = render(<MillingWorksLogo compact />)

    expect(
      within(container).getByRole('img', { name: 'Milling Works home' }),
    ).toBeInTheDocument()
    expect(within(container).queryByText('Milling Works')).not.toBeInTheDocument()
  })

  it('exposes inverse styling for dark backgrounds', () => {
    const { container } = render(<MillingWorksLogo inverse />)

    expect(
      within(container).getByRole('img', { name: 'Milling Works home' }),
    ).toHaveAttribute('data-inverse', 'true')
  })

  it('can be decorative when a parent link already supplies the accessible name', () => {
    const { container } = render(
      <a aria-label="Milling Works home" href="/">
        <MillingWorksLogo decorative />
      </a>,
    )

    expect(within(container).getByRole('link', { name: 'Milling Works home' })).toBeInTheDocument()
    expect(within(container).queryByRole('img', { name: 'Milling Works home' })).not.toBeInTheDocument()
  })
})
