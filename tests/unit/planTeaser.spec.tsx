import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraPlanTeaser } from '@/components/lira/PlanTeaser'

describe('LiraPlanTeaser component (TDD)', () => {
  it('renders the headline with "Um plano para cada tamanho de negócio."', () => {
    const html = renderToString(<LiraPlanTeaser />)
    expect(html).toContain('Um plano para cada')
    expect(html).toContain('tamanho de')
    expect(html).toContain('negócio')
  })

  it('renders the subtitle with starting price R$ 69,90/mês', () => {
    const html = renderToString(<LiraPlanTeaser />)
    expect(html).toContain('Do profissional solo à rede com mais de 100 colaboradores')
    expect(html).toContain('R$ 69,90/mês')
    expect(html).toContain('cresce junto com o seu negócio')
  })

  it('renders the CTA button linking to #planos', () => {
    const html = renderToString(<LiraPlanTeaser />)
    expect(html).toContain('Comparar todos os planos')
    expect(html).toContain('href="#planos"')
  })
})
