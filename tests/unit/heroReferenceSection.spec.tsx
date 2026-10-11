import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraHero } from '@/components/lira/Hero'

describe('LiraHero — Section_01 reference replication (TDD)', () => {
  it('replicates the exact headline, subtitle and both CTAs from the reference', () => {
    const html = renderToString(<LiraHero />)
    expect(html).toMatch(/Agenda cheia\.?/)
    expect(html).toMatch(/Caixa em dia\.?/)
    expect(html).toMatch(/voltam/i)
    expect(html).toContain('Clube de Assinaturas')
    expect(html).toContain('Fazer teste grátis 14 dias')
    expect(html).toContain('Conhecer Planos disponíveis')
    expect(html).toContain('min-h-[44px]')
  })

  it('renders the provided promo badge asset instead of the hand-built "Novidade" pill', () => {
    const html = renderToString(<LiraHero />)
    expect(html).toContain('/hero-badge-link.svg')
    expect(html).toMatch(/alt="[^"]+"/)
    expect(html).not.toMatch(/Lei do Sal[aã]o Parceiro/i)
  })

  it('shows the guarantee trust row without any fabricated business-metrics claim', () => {
    const html = renderToString(<LiraHero />)
    expect(html).toContain('Faça o teste sem registrar nenhuma forma de pagamento')
    expect(html).toContain('Cancele quando quiser')
    expect(html).toContain('Suporte disponível 24h')
    expect(html).not.toMatch(/negócios ativos/i)
  })

  it('renders the provided Agendamento/Assistente Virtual visual as a static asset, replacing the hand-built KPI/Agenda-de-hoje mockup', () => {
    const html = renderToString(<LiraHero />)
    expect(html).toContain('/hero-visual-mockups.svg')
    expect(html).toMatch(/alt="[^"]+"/)
    // The old hand-built composition should be gone now that the asset replaces it.
    expect(html).not.toMatch(/Agenda de hoje/i)
    expect(html).not.toMatch(/Receita recorrente/i)
    expect(html).not.toMatch(/agenda no caderninho/i)
  })
})
