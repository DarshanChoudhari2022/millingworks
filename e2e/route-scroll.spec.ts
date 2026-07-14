import { expect, test } from '@playwright/test'

test('in-app pathname navigation resets a scrolled page to the top', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500)

  await page.locator('footer').getByRole('link', { name: 'About', exact: true }).click()

  await expect(page).toHaveURL(/\/about$/)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThanOrEqual(1)
})

for (const sectionId of ['dental-design-support', 'practice-outsourcing']) {
  test(`in-app hash navigation reveals the ${sectionId} service`, async ({ page }) => {
    await page.goto('/')

    await page.locator(`a[href="/services#${sectionId}"]`).click()

    await expect(page).toHaveURL(new RegExp(`/services#${sectionId}$`))
    await expect(page.locator(`#${sectionId}`)).toBeInViewport()
  })
}
