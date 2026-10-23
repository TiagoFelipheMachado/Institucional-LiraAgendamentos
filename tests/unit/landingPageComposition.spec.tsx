import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

describe('LiraLandingPage composition (TDD)', () => {
  it('renders every section of the institutional site in the expected order', () => {
    const html = renderToString(<LiraLandingPage />)

    const sectionIds = ['desafios', 'primeiros-passos', 'faq', 'contato']
    const positions = sectionIds.map((id) => html.indexOf(`id="${id}"`))

    positions.forEach((pos, i) => {
      expect(pos, `section #${sectionIds[i]} should be present`).toBeGreaterThan(-1)
    })

    for (let i = 1; i < positions.length; i++) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1])
    }
  })

  it('links to the institutional sub-pages instead of embedding them', () => {
    const html = renderToString(<LiraLandingPage />)
    ;['/funcionalidades', '/segmentos', '/planos', '/sobre'].forEach((href) => expect(html).toContain(`href="${href}"`))
    expect(html).not.toContain('id="planos"')
  })

  it('includes the hero slogan and footer in the same page', () => {
    const html = renderToString(<LiraLandingPage />)
    expect(html).toContain('Cadeiras ocupadas')
    expect(html).toContain('Todos os direitos reservados')
  })
})
