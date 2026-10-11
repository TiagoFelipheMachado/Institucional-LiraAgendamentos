import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraFeatureHighlights } from '@/components/lira/FeatureHighlights'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

const EXPECTED_PILLS = [
  'Agenda online inteligente',
  'Lembretes automáticos',
  'WhatsApp com IA',
  'Financeiro e comissões',
]

describe('LiraFeatureHighlights pill bar (TDD)', () => {
  it('renders exactly the 4 official Lira features as pills', () => {
    const html = renderToString(<LiraFeatureHighlights />)
    EXPECTED_PILLS.forEach((label) => expect(html).toContain(label))
  })

  it('no longer renders the GAIA pill (removed on request)', () => {
    const html = renderToString(<LiraFeatureHighlights />)
    expect(html).not.toMatch(/GAIA/i)
  })

  it('uses only Material Symbols icons (no emoji/photos), matching the design system', () => {
    const html = renderToString(<LiraFeatureHighlights />)
    expect(html).toContain('material-symbols-rounded')
    expect(html).not.toContain('<img')
  })

  it('follows the established dark pill styling (dark surface + subtle cyan-toned border), not the reference\'s light theme', () => {
    const html = renderToString(<LiraFeatureHighlights />)
    expect(html).toContain('#0E1A1E')
    expect(html).toContain('#14454F')
    expect(html).not.toMatch(/#EFF3FA/) // the reference's light pill background
  })

  it('is placed on the landing page right after the Hero', () => {
    const html = renderToString(<LiraLandingPage />)
    const featurePos = html.indexOf('Agenda online inteligente')
    const challengesPos = html.indexOf('id="desafios"')
    expect(featurePos).toBeGreaterThan(-1)
    expect(challengesPos).toBeGreaterThan(-1)
    expect(featurePos).toBeLessThan(challengesPos)
  })
})
