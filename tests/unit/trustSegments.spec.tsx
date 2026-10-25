import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraTrustSegments } from '@/components/lira/TrustSegments'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

describe('LiraTrustSegments strip (TDD)', () => {
  it('renders the partner trust strip with heading', () => {
    const html = renderToString(<LiraTrustSegments />)
    expect(html).toContain('PARCEIROS QUE CONFIAM NO LIRA')
  })

  it('renders the real partner logo assets and Google rating with 5 filled stars', () => {
    const html = renderToString(<LiraTrustSegments />)
    expect(html).toContain('/parceiro-1-for-light.png')
    expect(html).toContain('/parceiro-1-for-dark.png')
    expect(html).toContain('5,0')
    expect(html).toContain('Google')
    // 5 filled stars
    const filledMatches = html.match(/&#x27;FILL&#x27; 1/g) || []
    expect(filledMatches.length).toBe(5)
  })

  it('is placed on the landing page', () => {
    const html = renderToString(<LiraLandingPage />)
    expect(html).toContain('PARCEIROS QUE CONFIAM NO LIRA')
  })
})
