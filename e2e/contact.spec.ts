import { expect, test } from '@playwright/test'

test('contact validation is announced and preserves entered values', async ({ page }) => {
  await page.goto('/contact')
  await page.getByLabel('Name').fill('Priya Shah')
  await page.getByLabel('Email').fill('not-an-email')
  await page.getByRole('button', { name: 'Prepare enquiry' }).click()

  const alerts = page.getByRole('alert')
  await expect(alerts).toHaveCount(3)
  await expect(alerts).toContainText([
    'Enter a valid email address',
    'Choose a service',
    'Tell us how we can help',
  ])
  await expect(page.getByLabel('Name')).toHaveValue('Priya Shah')
  await expect(page.getByLabel('Email')).toHaveValue('not-an-email')
})

test('valid contact details create reviewable WhatsApp and email handoffs without delivery claims', async ({ page }) => {
  await page.goto('/contact')
  await page.getByLabel('Name').fill('Priya Shah')
  await page.getByLabel('Email').fill('priya@example.com')
  await page.getByLabel('Service').selectOption({ label: 'Full-Service Dental Lab' })
  await page.getByLabel('Message').fill('Please review a crown case.')
  await page.getByRole('button', { name: 'Prepare enquiry' }).click()

  const handoff = page.locator('.contact-handoff')
  await expect(handoff).toBeVisible()
  await expect(handoff.getByRole('link', { name: 'Continue on WhatsApp' })).toHaveAttribute('href', /918390998058/)
  await expect(handoff.getByRole('link', { name: 'Open email' })).toHaveAttribute('href', /^mailto:/)
  await expect(handoff).not.toContainText(/\b(?:sent|delivered)\b/i)
})
