import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { company } from '../../content/company'
import { ContactForm } from './ContactForm'

afterEach(cleanup)

describe('ContactForm', () => {
  it('visibly and semantically identifies every required control', () => {
    render(<ContactForm />)

    expect(screen.getByText('All fields are required.')).toBeVisible()
    for (const label of ['Name', 'Email', 'Service', 'Message']) {
      expect(screen.getByLabelText(label)).toBeRequired()
    }
  })

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

  it('clears only the edited field error and aria-invalid state', () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Prepare enquiry' }))
    const name = screen.getByLabelText('Name')
    const email = screen.getByLabelText('Email')

    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(email).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(name, { target: { value: 'Priya Shah' } })

    expect(screen.queryByText('Enter your name')).not.toBeInTheDocument()
    expect(name).toHaveAttribute('aria-invalid', 'false')
    expect(screen.getByText('Enter your email address')).toBeVisible()
    expect(email).toHaveAttribute('aria-invalid', 'true')
  })

  it('revalidates an edited field while retaining errors on other fields', () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Prepare enquiry' }))
    const email = screen.getByLabelText('Email')

    fireEvent.change(email, { target: { value: 'not-an-email' } })

    expect(screen.getByText('Enter a valid email address')).toBeVisible()
    expect(email).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Enter your name')).toBeVisible()
  })

  it('prepares WhatsApp and email handoffs without claiming delivery', () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Priya Shah' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'priya@example.com' } })
    fireEvent.change(screen.getByLabelText('Service'), { target: { value: 'Crowns & Bridges' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Please review a crown case.' } })
    fireEvent.click(screen.getByRole('button', { name: 'Prepare enquiry' }))

    expect(screen.getByRole('heading', { name: 'Your enquiry is ready' })).toBeInTheDocument()
    expect(screen.getByText(company.phoneDisplay)).toBeInTheDocument()
    expect(screen.getByText(company.email)).toBeInTheDocument()

    const whatsapp = screen.getByRole('link', { name: 'Continue on WhatsApp' })
    expect(whatsapp).toHaveAttribute('href', expect.stringContaining(`wa.me/${company.phoneDigits}`))
    const preparedMessage = new URL(whatsapp.getAttribute('href')!).searchParams.get('text')
    expect(preparedMessage).toContain('Priya Shah')
    expect(preparedMessage).toContain('Crowns & Bridges')
    expect(screen.getByRole('link', { name: 'Open email' })).toHaveAttribute('href', expect.stringContaining(`mailto:${company.email}`))
    expect(screen.queryByText(/sent|delivered/i)).not.toBeInTheDocument()
  })
})
