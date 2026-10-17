import { describe, it, expect } from 'vitest'
import { LIRA_PRICING_PLANS, roundToCents, getPlanById } from '@/utilities/lira/pricing'

describe('Lira pricing plans (TDD)', () => {
  it('exposes exactly the 3 official plans with stable ids', () => {
    expect(LIRA_PRICING_PLANS.map((p) => p.id)).toEqual(['essencial', 'avancado', 'profissional'])
  })

  it('marks exactly one plan as popular (Avançado)', () => {
    const popular = LIRA_PRICING_PLANS.filter((p) => p.popular)
    expect(popular).toHaveLength(1)
    expect(popular[0].id).toBe('avancado')
  })

  it('Essencial: R$ 99,86/mês and R$ 60,12/mês on annual (saving R$ 38,74/mês)', () => {
    const plan = getPlanById('essencial')
    expect(plan.monthlyPrice).toBe(99.86)
    expect(plan.annualPricePerMonth).toBe(60.12)
    expect(plan.annualSavingsPerMonth).toBe(38.74)
    expect(plan.annualTotal).toBe(721.45)
    expect(plan.features.whatsappMonthly).toBe('50 mensagens WhatsApp/mês')
    expect(plan.features.whatsappAnnual).toBe('200 mensagens WhatsApp/mês')
  })

  it('Avançado: R$ 178,43/mês and R$ 107,42/mês on annual (saving R$ 71,01/mês)', () => {
    const plan = getPlanById('avancado')
    expect(plan.monthlyPrice).toBe(178.43)
    expect(plan.annualPricePerMonth).toBe(107.42)
    expect(plan.annualSavingsPerMonth).toBe(71.01)
    expect(plan.annualTotal).toBe(1289.05)
    expect(plan.features.whatsappMonthly).toBe('100 mensagens WhatsApp/mês')
    expect(plan.features.whatsappAnnual).toBe('400 mensagens WhatsApp/mês')
  })

  it('Profissional: R$ 311,29/mês and R$ 187,40/mês on annual (saving R$ 123,89/mês)', () => {
    const plan = getPlanById('profissional')
    expect(plan.monthlyPrice).toBe(311.29)
    expect(plan.annualPricePerMonth).toBe(187.40)
    expect(plan.annualSavingsPerMonth).toBe(123.89)
    expect(plan.annualTotal).toBe(2248.81)
    expect(plan.features.whatsappMonthly).toBe('200 mensagens WhatsApp/mês')
    expect(plan.features.whatsappAnnual).toBe('800 mensagens WhatsApp/mês')
  })

  it('roundToCents rounds to the nearest cent like currency math requires', () => {
    expect(roundToCents(59.415)).toBe(59.42)
    expect(roundToCents(10)).toBe(10)
    expect(roundToCents(10.005)).toBeCloseTo(10.01, 2)
  })

  it('getPlanById throws for an unknown plan id instead of returning undefined silently', () => {
    // @ts-expect-error deliberate invalid id to assert runtime safety
    expect(() => getPlanById('enterprise')).toThrow()
  })
})
