import { expect, test } from '@playwright/test'

test('in-app pathname navigation resets a scrolled page to the top', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500)
  await page.locator('header').getByRole('link', { name: 'About', exact: true }).click()
  await expect(page).toHaveURL(/\/about$/)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThanOrEqual(1)
})

test('home workflow hash link reveals the workflow', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'See how we work' }).click()
  await expect(page).toHaveURL(/#workflow$/)
  await expect(page.locator('#workflow')).toBeInViewport()
})
