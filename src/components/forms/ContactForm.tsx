import { ArrowUpRight, EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react'
import { useState, type FormEvent, type JSX } from 'react'

import { company } from '../../content/company'
import { services } from '../../content/services'
import { createEmailUrl, createWhatsAppUrl } from '../../lib/handoffs'

interface ContactFormProps {
  defaultService?: string
}

interface FormValues {
  name: string
  email: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Enter your name'
  if (!values.email.trim()) errors.email = 'Enter your email address'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address'
  if (!values.service) errors.service = 'Choose a service'
  if (!values.message.trim()) errors.message = 'Tell us how we can help'
  return errors
}

export function ContactForm({ defaultService = '' }: ContactFormProps): JSX.Element {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', service: defaultService, message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [handoff, setHandoff] = useState<{ whatsapp: string; email: string } | null>(null)

  const update = (field: keyof FormValues, value: string) => {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    setErrors((current) => {
      if (!Object.prototype.hasOwnProperty.call(current, field)) return current

      const fieldError = validate(nextValues)[field]
      if (fieldError) return { ...current, [field]: fieldError }

      const nextErrors = { ...current }
      delete nextErrors[field]
      return nextErrors
    })
    setHandoff(null)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const body = `Name: ${values.name}\nEmail: ${values.email}\nService: ${values.service}\n\n${values.message}`
    setHandoff({
      whatsapp: createWhatsAppUrl(`Milling Works enquiry\n\n${body}`),
      email: createEmailUrl(`Milling Works enquiry: ${values.service}`, body),
    })
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <p className="contact-form__guidance">All fields are required.</p>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" required value={values.name} onChange={(event) => update('name', event.target.value)} aria-describedby={errors.name ? 'contact-name-error' : undefined} aria-invalid={Boolean(errors.name)} />
        {errors.name && <p id="contact-name-error" className="form-error" role="alert">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" required value={values.email} onChange={(event) => update('email', event.target.value)} aria-describedby={errors.email ? 'contact-email-error' : undefined} aria-invalid={Boolean(errors.email)} />
        {errors.email && <p id="contact-email-error" className="form-error" role="alert">{errors.email}</p>}
      </div>
      <div className="form-field contact-form__wide">
        <label htmlFor="contact-service">Service</label>
        <select id="contact-service" required value={values.service} onChange={(event) => update('service', event.target.value)} aria-describedby={errors.service ? 'contact-service-error' : undefined} aria-invalid={Boolean(errors.service)}>
          <option value="">Select a service</option>
          {services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
        </select>
        {errors.service && <p id="contact-service-error" className="form-error" role="alert">{errors.service}</p>}
      </div>
      <div className="form-field contact-form__wide">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" rows={6} required value={values.message} onChange={(event) => update('message', event.target.value)} aria-describedby={errors.message ? 'contact-message-error' : undefined} aria-invalid={Boolean(errors.message)} />
        {errors.message && <p id="contact-message-error" className="form-error" role="alert">{errors.message}</p>}
      </div>
      <button className="button contact-form__submit" type="submit">Prepare enquiry <ArrowUpRight aria-hidden size={20} /></button>
      {handoff && (
        <section className="contact-handoff" aria-live="polite">
          <h2>Your enquiry is ready</h2>
          <p>Choose how you would like to continue. Your details will open in the selected app for you to review.</p>
          <div className="contact-handoff__links">
            <a className="button" href={handoff.whatsapp} target="_blank" rel="noreferrer">Continue on WhatsApp <WhatsappLogo aria-hidden size={20} /></a>
            <a className="button button--light" href={handoff.email}>Open email <EnvelopeSimple aria-hidden size={20} /></a>
          </div>
          <p className="contact-handoff__details"><span>{company.phoneDisplay}</span><span>{company.email}</span></p>
        </section>
      )}
    </form>
  )
}
