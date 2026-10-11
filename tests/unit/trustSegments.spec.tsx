import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraTrustSegments } from '@/components/lira/TrustSegments'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

describe('LiraTrustSegments strip (TDD)', () => {
  it('renders a muted segment strip with a neutral heading (no fabricated customer/partner claim)', () => {
    const html = renderToString(<LiraTrustSegments />)
    expect(html).toMatch(/segmentos|feito para|pensado para/i)
    expect(html).not.toMatch(/confiam|clientes ativos|empresas atendidas/i)
  })

  it('lists the real Lira segments, not fabricated third-party company names', () => {
    const html = renderToString(<LiraTrustSegments />)
    ;['Barbearia', 'Salão de Beleza', 'Clínica de Estética'].forEach((seg) =>
      expect(html).toContain(seg)
    )
  })

  it('uses no <img> — no third-party logos, matching the design system icon-only rule', () => {
    const html = renderToString(<LiraTrustSegments />)
    expect(html).not.toContain('<img')
  })

  it('is placed on the landing page', () => {
    const html = renderToString(<LiraLandingPage />)
    const matches = html.match(/Barbearia/g) || []
    // Appears once in LiraNiches already; this asserts LiraTrustSegments adds a second occurrence.
    expect(matches.length).toBeGreaterThanOrEqual(2)
  })
})
