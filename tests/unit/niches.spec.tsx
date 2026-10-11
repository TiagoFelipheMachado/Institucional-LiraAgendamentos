import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraNiches } from '@/components/lira/Niches'

describe('LiraNiches section (TDD)', () => {
  it('renders the section with id="nichos" and the 6 documented niches', () => {
    const html = renderToString(<LiraNiches />)
    expect(html).toContain('id="nichos"')
    ;[
      'Barbearia',
      'Salão de Beleza',
      'Clínica de Estética',
      'Podologia',
      'Manicure e Pedicure',
      'Sobrancelhas e Cílios',
    ].forEach((niche) => expect(html).toContain(niche))
  })

  it('uses only Material Symbols Rounded icons, never <img> or emoji, per the design system', () => {
    const html = renderToString(<LiraNiches />)
    expect(html).not.toContain('<img')
    expect(html).toContain('material-symbols-rounded')
  })
})
