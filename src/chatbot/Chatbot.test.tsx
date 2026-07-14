import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { company } from '../content/company'
import { Chatbot } from './Chatbot'

afterEach(cleanup)

function openAssistant() {
  const launcher = screen.getByRole('button', { name: 'Open Milling Works assistant' })
  fireEvent.click(launcher)
  return launcher
}

function completeLeadCapture() {
  fireEvent.click(screen.getByRole('button', { name: 'Talk to a person' }))
  fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Priya Shah' } })
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  fireEvent.change(screen.getByLabelText('Phone or email'), { target: { value: 'priya@example.com' } })
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  fireEvent.change(screen.getByLabelText('Service'), { target: { value: 'Full-Service Dental Lab' } })
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  fireEvent.change(screen.getByLabelText('How can we help?'), { target: { value: 'Please review a crown case.' } })
  fireEvent.click(screen.getByRole('button', { name: 'Prepare handoff' }))
}

describe('Chatbot', () => {
  it('opens from an accessible launcher and focuses the dialog heading', () => {
    render(<Chatbot />)

    expect(screen.getByRole('button', { name: 'Open Milling Works assistant' })).toBeVisible()
    openAssistant()

    const heading = screen.getByRole('heading', { name: 'Milling Works assistant' })
    expect(screen.getByRole('dialog', { name: 'Milling Works assistant' })).toBeVisible()
    expect(heading).toHaveFocus()
  })

  it('closes on Escape and returns focus to the launcher', () => {
    render(<Chatbot />)
    const launcher = openAssistant()

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(launcher).toHaveFocus()
  })

  it('keeps reverse keyboard navigation inside the dialog from its heading', () => {
    render(<Chatbot />)
    openAssistant()

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Tab', shiftKey: true })

    expect(screen.getByRole('button', { name: 'Talk to a person' })).toHaveFocus()
  })

  it('shows the prepared dental lab answer with recovery actions', () => {
    render(<Chatbot />)
    openAssistant()

    fireEvent.click(screen.getByRole('button', { name: 'Dental lab services' }))

    expect(screen.getByText(/how can we help\? choose a topic/i)).toBeVisible()
    expect(screen.getByText('Dental lab services', { selector: 'p' })).toBeVisible()
    expect(screen.getByText(/digital and conventional laboratory support/i)).toBeVisible()
    expect(screen.getByRole('button', { name: 'Back to menu' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'Talk to a person' })).toBeVisible()
  })

  it('prepares honest WhatsApp and email handoffs from retained lead details', () => {
    render(<Chatbot />)
    openAssistant()
    completeLeadCapture()

    const whatsapp = screen.getByRole('link', { name: 'Continue on WhatsApp' })
    expect(whatsapp).toHaveAttribute('href', expect.stringContaining(`wa.me/${company.phoneDigits}`))
    expect(new URL(whatsapp.getAttribute('href')!).searchParams.get('text')).toContain('Priya Shah')
    expect(screen.getByRole('link', { name: 'Open email' })).toHaveAttribute('href', expect.stringContaining(`mailto:${company.email}`))
    expect(screen.getByText(/nothing has been sent/i)).toBeVisible()
    expect(screen.queryByText(/delivered/i)).not.toBeInTheDocument()
  })

  it('preserves the conversation while minimized', () => {
    render(<Chatbot />)
    openAssistant()
    fireEvent.click(screen.getByRole('button', { name: 'Dental lab services' }))

    fireEvent.click(screen.getByRole('button', { name: 'Minimize assistant' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Resume Milling Works assistant' }))

    expect(screen.getByText(/digital and conventional laboratory support/i)).toBeVisible()
  })

  it('resets the assistant and clears personal data', () => {
    render(<Chatbot />)
    openAssistant()
    completeLeadCapture()

    fireEvent.click(screen.getByRole('button', { name: 'Start over' }))
    expect(screen.getByRole('button', { name: 'Dental lab services' })).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Talk to a person' }))

    expect(screen.getByLabelText('Your name')).toHaveValue('')
    expect(screen.queryByDisplayValue('priya@example.com')).not.toBeInTheDocument()
  })
})
