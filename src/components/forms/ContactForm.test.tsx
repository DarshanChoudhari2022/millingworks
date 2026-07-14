import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { company } from '../../content/company'
import { ContactForm } from './ContactForm'

afterEach(cleanup)

describe('ContactForm', () => {
  it('shows errors for all required fields', () => {
    render(<ContactForm />)

    fireEvent.submit(screen.getByRole('button', { name: 'Prepare enquiry' }).closest('form')!)

    expect(screen.getByText('Enter your name')).toBeInTheDocument()
    expect(screen.getByText('Enter your email address')).toBeInTheDocument()
    expect(screen.getByText('Choose a service')).toBeInTheDocument()
    expect(screen.getByText('Tell us how we can help')).toBeInTheDocument()
  })

  it('rejects an invalid email address', () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Prepare enquiry' }).closest('form')!)

    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
  })

  it('prepares WhatsApp and email handoffs without claiming delivery', () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Priya Shah' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'priya@example.com' } })
    fireEvent.change(screen.getByLabelText('Service'), { target: { value: 'Full-Service Dental Lab' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Please review a crown case.' } })
    fireEvent.click(screen.getByRole('button', { name: 'Prepare enquiry' }))

    expect(screen.getByRole('heading', { name: 'Your enquiry is ready' })).toBeInTheDocument()
    expect(screen.getByText(company.phoneDisplay)).toBeInTheDocument()
    expect(screen.getByText(company.email)).toBeInTheDocument()

    const whatsapp = screen.getByRole('link', { name: 'Continue on WhatsApp' })
    expect(whatsapp).toHaveAttribute('href', expect.stringContaining(`wa.me/${company.phoneDigits}`))
    const preparedMessage = new URL(whatsapp.getAttribute('href')!).searchParams.get('text')
    expect(preparedMessage).toContain('Priya Shah')
    expect(preparedMessage).toContain('Full-Service Dental Lab')
    expect(screen.getByRole('link', { name: 'Open email' })).toHaveAttribute('href', expect.stringContaining(`mailto:${company.email}`))
    expect(screen.queryByText(/sent|delivered/i)).not.toBeInTheDocument()
  })
})
