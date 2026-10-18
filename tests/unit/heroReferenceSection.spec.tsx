import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraHero } from '@/components/lira/Hero'

describe('LiraHero — Section_01 reference replication (TDD)', () => {
  it('replicates the exact headline, subtitle and both CTAs from the reference', () => {
    const html = renderToString(<LiraHero />)
    expect(html).toMatch(/Cadeiras ocupadas|Agenda cheia/i)
    expect(html).toMatch(/Finanças no verde|Caixa em dia/i)
    expect(html).toMatch(/voltam/i)
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
    expect(html).toContain('Inicie seu teste sem cartão de crédito')
    expect(html).toContain('Cancele quando quiser')
    expect(html).toContain('Suporte disponível 24h')
    expect(html).not.toMatch(/negócios ativos/i)
  })

  it('renders the dashboard agenda mockup in code, showing available balance and next appointments', () => {
    const html = renderToString(<LiraHero />)
    expect(html).toContain('SALDO DISPONÍVEL')
    expect(html).toContain('R$ 14.820,00')
    expect(html).toContain('AGENDAMENTOS HOJE')
    expect(html).toContain('12')
    expect(html).toContain('Próximos Horários')
    expect(html).toContain('Ana Clara')
    expect(html).toContain('Beatriz Silva')
    expect(html).toContain('Carla Santos')
  })
})
