import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraHowItWorks } from '@/components/lira/HowItWorks'

describe('LiraHowItWorks section (TDD)', () => {
  it('renders the section with id="primeiros-passos" and the 4 steps in order', () => {
    const html = renderToString(<LiraHowItWorks />)
    expect(html).toContain('id="primeiros-passos"')

    const steps = ['Setup Personalizado', 'Ativação', 'Agendamento Autônomo', 'Fechamento Simplificado']
    const positions = steps.map((s) => html.indexOf(s))
    positions.forEach((pos, i) => expect(pos, `step "${steps[i]}" present`).toBeGreaterThan(-1))
    for (let i = 1; i < positions.length; i++) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1])
    }
  })
})
