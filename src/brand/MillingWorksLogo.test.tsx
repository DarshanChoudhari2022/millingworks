import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MillingWorksLogo } from './MillingWorksLogo'

describe('MillingWorksLogo', () => {
  it('renders an accessible mark and the full brand name by default', () => {
    render(<MillingWorksLogo />)

    expect(screen.getByLabelText('Milling Works home')).toBeInTheDocument()
    expect(
      screen.getByTitle('Milling Works MW tooth mark'),
    ).toBeInTheDocument()
    expect(screen.getByText('Milling Works')).toBeInTheDocument()
  })

  it('hides the full brand name in compact mode', () => {
    const { container } = render(<MillingWorksLogo compact />)

    expect(within(container).queryByText('Milling Works')).not.toBeInTheDocument()
  })

  it('exposes inverse styling for dark backgrounds', () => {
    const { container } = render(<MillingWorksLogo inverse />)

    expect(within(container).getByLabelText('Milling Works home')).toHaveAttribute(
      'data-inverse',
      'true',
    )
  })
})
