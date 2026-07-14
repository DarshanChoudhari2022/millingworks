import { expect, test } from '@playwright/test'

test('desktop hero preserves a narrow tall primary panel and complete central artwork', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  const hero = page.locator('.hero')
  const primary = page.locator('.hero-panel--primary')
  const centralImage = primary.locator(':scope > img')
  const [heroBox, primaryBox, imageBox] = await Promise.all([
    hero.boundingBox(),
    primary.boundingBox(),
    centralImage.boundingBox(),
  ])
  expect(heroBox).not.toBeNull()
  expect(primaryBox).not.toBeNull()
  expect(imageBox).not.toBeNull()

  const widthRatio = primaryBox!.width / heroBox!.width
  expect(widthRatio).toBeGreaterThanOrEqual(0.36)
  expect(widthRatio).toBeLessThanOrEqual(0.44)
  expect(primaryBox!.height).toBeGreaterThanOrEqual(660)

  await expect(centralImage).toHaveCSS('object-fit', 'contain')
  expect(imageBox!.height / primaryBox!.height).toBeGreaterThanOrEqual(0.56)
  expect(imageBox!.y).toBeLessThanOrEqual(primaryBox!.y + primaryBox!.height * 0.45)
})

test('desktop side panels use a softer, de-emphasized blue', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  const colors = await page.locator('.hero-panel').evaluateAll((panels) =>
    panels.map((panel) => getComputedStyle(panel).backgroundColor),
  )
  const [primary, implant, crowns] = colors
  expect(implant).toBe(crowns)
  expect(implant).not.toBe(primary)
  expect(relativeLuminance(implant) - relativeLuminance(primary)).toBeGreaterThanOrEqual(0.06)
})

test('mobile floating actions form one compact right-side column', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const [whatsapp, assistant] = await Promise.all([
    page.locator('.whatsapp-button').boundingBox(),
    page.locator('.chatbot__launcher').boundingBox(),
  ])
  expect(whatsapp).not.toBeNull()
  expect(assistant).not.toBeNull()

  for (const control of [whatsapp!, assistant!]) {
    expect(control.width).toBeLessThanOrEqual(48)
    expect(control.height).toBeLessThanOrEqual(48)
  }
  expect(Math.abs((whatsapp!.x + whatsapp!.width) - (assistant!.x + assistant!.width))).toBeLessThanOrEqual(2)

  const upper = whatsapp!.y < assistant!.y ? whatsapp! : assistant!
  const lower = upper === whatsapp ? assistant! : whatsapp!
  expect(lower.y - (upper.y + upper.height)).toBeGreaterThanOrEqual(8)
})

function relativeLuminance(cssColor: string): number {
  const channels = cssColor.match(/[\d.]+/g)?.slice(0, 3).map(Number)
  if (!channels || channels.length !== 3) throw new Error(`Unsupported CSS color: ${cssColor}`)
  const [red, green, blue] = channels.map((channel) => {
    const value = channel / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}
