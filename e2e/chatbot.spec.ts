import { expect, test } from '@playwright/test'

test('assistant supports topic exploration and prepares an honest WhatsApp handoff', async ({ page }) => {
  const runtimeProblems: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') runtimeProblems.push(`console: ${message.text()}`)
  })
  page.on('pageerror', (error) => runtimeProblems.push(`page: ${error.message}`))
  page.on('response', (response) => {
    if (response.url().startsWith('http://127.0.0.1:4173') && response.status() >= 400) {
      runtimeProblems.push(`asset: ${response.status()} ${response.url()}`)
    }
  })
  await page.goto('/dental-lab')
  await page.getByRole('button', { name: 'Open Milling Works assistant' }).click()

  const dialog = page.getByRole('dialog', { name: 'Milling Works assistant' })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Dental Lab' }).click()
  await expect(dialog).toContainText('Dental lab services')
  await dialog.getByRole('button', { name: 'Back to menu' }).click()
  await dialog.getByRole('button', { name: 'Talk to a person' }).click()

  await dialog.getByRole('textbox', { name: 'Your name' }).fill('Priya Shah')
  await dialog.getByRole('button', { name: 'Continue' }).click()
  await dialog.getByRole('textbox', { name: 'Phone or email' }).fill('priya@example.com')
  await dialog.getByRole('button', { name: 'Continue' }).click()
  await dialog.getByRole('combobox', { name: 'Service' }).selectOption({ label: 'Full-Service Dental Lab' })
  await dialog.getByRole('button', { name: 'Continue' }).click()
  await dialog.getByRole('textbox', { name: 'How can we help?' }).fill('Please review a crown case.')
  await dialog.getByRole('button', { name: 'Prepare handoff' }).click()

  await expect(dialog).toContainText('Nothing has been sent')
  const whatsapp = dialog.getByRole('link', { name: 'Continue on WhatsApp' })
  await expect(whatsapp).toHaveAttribute('href', /918390998058/)
  await expect(dialog.getByRole('link', { name: 'Open email' })).toHaveAttribute('href', /^mailto:/)
  expect(runtimeProblems).toEqual([])
})

test('Escape closes the assistant and restores focus to its launcher', async ({ page }) => {
  await page.goto('/')
  const launcher = page.getByRole('button', { name: 'Open Milling Works assistant' })
  await launcher.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Resume Milling Works assistant' })).toBeFocused()
})
