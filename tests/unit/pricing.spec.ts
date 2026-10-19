import { describe, it, expect } from 'vitest'
import { LIRA_PRICING_PLANS, roundToCents, getPlanById } from '@/utilities/lira/pricing'

describe('Lira pricing plans (TDD)', () => {
  it('exposes exactly the 3 official plans with stable ids', () => {
    expect(LIRA_PRICING_PLANS.map((p) => p.id)).toEqual(['start', 'plus', 'vega'])
  })

  it('marks exactly one plan as popular (Lira Plus)', () => {
    const popular = LIRA_PRICING_PLANS.filter((p) => p.popular)
    expect(popular).toHaveLength(1)
    expect(popular[0].id).toBe('plus')
    expect(popular[0].name).toBe('Lira Plus')
  })

  it('Lira Start: R$ 69,90/mês and R$ 55,92/mês on annual (saving R$ 13,98/mês, 20% off)', () => {
    const plan = getPlanById('start')
    expect(plan.name).toBe('Lira Start')
    expect(plan.monthlyPrice).toBe(69.90)
    expect(plan.annualPricePerMonth).toBe(55.92)
    expect(plan.annualSavingsPerMonth).toBe(13.98)
    expect(plan.annualTotal).toBe(671.04)
    expect(plan.conditionText).toContain('1º mês por R$ 59,42')
    expect(plan.features).toContain('Agendamento online automatizado')
    expect(plan.features).toContain('Confirmação via WhatsApp IA')
    expect(plan.features).toContain('Integração Pix integrada')
    expect(plan.features).toContain('Cadastro de serviços e clientes')
    expect(plan.features).toContain('Suporte via chat')
  })

  it('Lira Plus: R$ 99,90/mês and R$ 79,92/mês on annual (saving R$ 19,98/mês, 20% off)', () => {
    const plan = getPlanById('plus')
    expect(plan.name).toBe('Lira Plus')
    expect(plan.monthlyPrice).toBe(99.90)
    expect(plan.annualPricePerMonth).toBe(79.92)
    expect(plan.annualSavingsPerMonth).toBe(19.98)
    expect(plan.annualTotal).toBe(959.04)
    expect(plan.conditionText).toContain('Plano Anual equivalente a R$ 79,92 / mês (20% off)')
    expect(plan.features).toContain('Tudo do plano Start')
    expect(plan.features).toContain('Agenda para múltiplos profissionais')
    expect(plan.features).toContain('Central de Atendimento via chat')
    expect(plan.features).toContain('Antecipação de comissão via maquininha')
    expect(plan.features).toContain('Relatórios financeiros avançados')
  })

  it('Lira Vega: R$ 139,90/mês and R$ 111,92/mês on annual (saving R$ 27,98/mês, 20% off)', () => {
    const plan = getPlanById('vega')
    expect(plan.name).toBe('Lira Vega')
    expect(plan.monthlyPrice).toBe(139.90)
    expect(plan.annualPricePerMonth).toBe(111.92)
    expect(plan.annualSavingsPerMonth).toBe(27.98)
    expect(plan.annualTotal).toBe(1343.04)
    expect(plan.conditionText).toContain('Plano Anual equivalente a R$ 111,92 / mês (20% off)')
    expect(plan.features).toContain('Tudo do plano Plus')
    expect(plan.features).toContain('Gestão de múltiplas unidades / filiais')
    expect(plan.features).toContain('API dedicada e relatórios customizados')
    expect(plan.features).toContain('Integração WordPress white-label')
    expect(plan.features).toContain('Gerente de conta exclusivo')
  })

  it('roundToCents rounds to the nearest cent like currency math requires', () => {
    expect(roundToCents(59.415)).toBe(59.42)
    expect(roundToCents(10)).toBe(10)
    expect(roundToCents(10.005)).toBeCloseTo(10.01, 2)
  })

  it('getPlanById resolves aliases (essencial -> start, avancado -> plus, profissional -> vega)', () => {
    expect(getPlanById('essencial').name).toBe('Lira Start')
    expect(getPlanById('avancado').name).toBe('Lira Plus')
    expect(getPlanById('profissional').name).toBe('Lira Vega')
  })

  it('getPlanById throws for an unknown plan id instead of returning undefined silently', () => {
    // @ts-expect-error deliberate invalid id to assert runtime safety
    expect(() => getPlanById('enterprise')).toThrow()
  })
})
