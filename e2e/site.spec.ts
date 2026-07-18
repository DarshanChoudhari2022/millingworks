import { expect, test, type Page } from '@playwright/test'

const routes = [
  '/',
  '/about',
  '/crowns-bridges',
  '/dental-implants',
  '/dental-lab',
  
  '/faqs',
  '/contact',
  '/route-that-does-not-exist',
] as const

function collectRuntimeProblems(page: Page) {
  const problems: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') problems.push(`console: ${message.text()}`)
  })
  page.on('pageerror', (error) => problems.push(`page: ${error.message}`))
  page.on('response', (response) => {
    if (response.url().startsWith('http://127.0.0.1:4173') && response.status() >= 400) {
      problems.push(`asset: ${response.status()} ${response.url()}`)
    }
  })
  return problems
}

for (const route of routes) {
  test(`${route} has one page heading and the shared chrome`, async ({ page }) => {
    const problems = collectRuntimeProblems(page)
    await page.goto(route)

    const header = page.locator('header.site-header')
    const footer = page.locator('footer.site-footer')
    const pageHeading = page.getByRole('heading', { level: 1 })

    await expect(header).toBeVisible()
    await expect(page.getByRole('main')).toBeVisible()
    await expect(pageHeading).toHaveCount(1)
    await expect(pageHeading).toBeVisible()
    await expect(footer).toBeVisible()
    await expect(header.getByRole('link', { name: 'Milling Works home' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Milling Works home' })).toBeVisible()
    expect(problems).toEqual([])
  })
}

for (const width of [390, 768, 1440]) {
  for (const route of routes) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 390 ? 844 : width === 768 ? 1024 : 900 })
      await page.goto(route)
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    })
  }
}

test('mobile navigation opens and follows a link using only the keyboard', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Milling Works home' }).first()).toBeFocused()
  await page.keyboard.press('Tab')

  const menuButton = page.locator('button[aria-controls="site-navigation"]')
  await expect(menuButton).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Home', exact: true })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'About', exact: true })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Full-Service Dental Lab', exact: true })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/full-service-dental-lab$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Production support')
})

test('mobile menu closes after navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Full-Service Dental Lab', exact: true }).click()
  await expect(page).toHaveURL(/\/full-service-dental-lab$/)
  await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false')
})

test('mobile service pages keep editorial media within the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/dental-implants')
  await expect(page.locator('.editorial-hero__media img')).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
