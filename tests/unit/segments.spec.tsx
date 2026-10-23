import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraSegments, SEGMENT_ITEMS } from '@/components/lira/Segments'

describe('LiraSegments section (TDD)', () => {
  it('renders with id="segmentos" and cards linking to each segment page', () => {
    const html = renderToString(<LiraSegments />)
    expect(html).toContain('id="segmentos"')
    expect(html).toContain('href="/segmentos/barbearia"')
  })

  it('renders the headline with "Feito para o seu negócio."', () => {
    const html = renderToString(<LiraSegments />)
    expect(html).toContain('Feito para o')
    expect(html).toContain('seu')
    expect(html).toContain('negócio.')
    expect(html).toContain('SEGMENTOS')
  })

  it('renders all 3 segment cards with images, descriptions and CTAs', () => {
    const html = renderToString(<LiraSegments />)
    expect(SEGMENT_ITEMS).toHaveLength(3)

    SEGMENT_ITEMS.forEach((item) => {
      expect(html).toContain(item.title)
      expect(html).toContain(item.description)
      expect(html).toContain(item.ctaText.replace(/&/g, '&amp;'))
      expect(html).toContain(item.image)
    })

    expect(html).not.toContain('Podologia')
    expect(html).not.toContain('Esmalteria')
    expect(html).not.toContain('Sobrancelhas e cílios')
  })

  it('renders the "Outro segmento?" footer with contact link', () => {
    const html = renderToString(<LiraSegments />)
    expect(html).toContain('Outro segmento?')
    expect(html).toContain('O Lira também atende spas')
    expect(html).toContain('Falar com nosso time')
  })
})
