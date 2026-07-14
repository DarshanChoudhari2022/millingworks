import { expect, test } from '@playwright/test'

test('desktop homepage uses one editorial hero with one dominant image', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  const hero = page.locator('.editorial-hero')
  await expect(hero).toBeVisible()
  await expect(hero.getByRole('heading', { level: 1 })).toHaveText('Dental restorations, made with intent')
  await expect(hero.getByRole('img')).toHaveCount(1)
  const color = await hero.evaluate((node) => getComputedStyle(node).backgroundColor)
  expect(color).toBe('rgb(104, 167, 216)')
})

test('three reference concepts remain separate routes', async ({ page }) => {
  for (const [route, heading] of [
    ['/', 'Dental restorations, made with intent'],
    ['/crowns-bridges', 'Crowns and bridges, made with intent'],
    ['/dental-implants', 'Implant restorations, carefully resolved'],
  ] as const) {
    await page.goto(route)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    await expect(page.locator('.editorial-hero')).toHaveCount(1)
  }
})

test('mobile editorial hero keeps its CTA and image inside the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.locator('.editorial-hero')).toBeVisible()
  await expect(page.locator('.editorial-hero').getByRole('link', { name: 'Send a case' })).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('mobile floating actions form one compact right-side column', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const boxes = await Promise.all([page.locator('.whatsapp-button').boundingBox(), page.locator('.chatbot__launcher').boundingBox()])
  for (const box of boxes) { expect(box).not.toBeNull(); expect(box!.width).toBeLessThanOrEqual(48) }
})
