import { describe, expect, it } from 'vitest'

import documentHtml from '../../index.html?raw'

describe('document metadata', () => {
  it('links the real Milling Works favicon derivative', () => {
    expect(documentHtml).toContain('<link rel="icon" type="image/png" href="/favicon.png" />')
  })
})
