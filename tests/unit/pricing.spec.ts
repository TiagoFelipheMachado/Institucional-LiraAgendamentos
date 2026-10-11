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
  })

  it('Lira Start: R$ 69,90/mês, only monthly billing, no annual option', () => {
    const start = getPlanById('start')
    expect(start.monthlyPrice).toBe(69.9)
    expect(start.billingOptions).toEqual(['monthly'])
    expect(start.annualTotal).toBeNull()
  })

  it('Lira Start: 1st-month coupon (15% off) matches the documented R$ 59,42', () => {
    const start = getPlanById('start')
    expect(start.firstMonthDiscountPercent).toBe(15)
    expect(start.firstMonthPrice).toBe(59.42)
    // Sanity check: the documented promo price must actually equal a 15% discount,
    // not just a number that happens to be close to it.
    expect(roundToCents(start.monthlyPrice! * 0.85)).toBe(start.firstMonthPrice)
  })

  it('Lira Plus: R$ 99,90/mês with both monthly and annual billing', () => {
    const plus = getPlanById('plus')
    expect(plus.monthlyPrice).toBe(99.9)
    expect(plus.billingOptions).toEqual(['monthly', 'annual'])
  })

  it('Lira Plus: 1st-month coupon (15% off) matches the documented R$ 84,92', () => {
    const plus = getPlanById('plus')
    expect(plus.firstMonthPrice).toBe(84.92)
    expect(roundToCents(plus.monthlyPrice! * 0.85)).toBe(plus.firstMonthPrice)
  })

  it('Lira Plus: annual total (R$ 959,04) matches 12x the documented R$ 79,92/mês equivalent (20% off)', () => {
    const plus = getPlanById('plus')
    expect(plus.annualMonthlyEquivalent).toBe(79.92)
    expect(plus.annualTotal).toBe(959.04)
    expect(roundToCents(plus.monthlyPrice! * 0.8)).toBe(plus.annualMonthlyEquivalent)
    expect(roundToCents(plus.annualMonthlyEquivalent! * 12)).toBe(plus.annualTotal)
  })

  it('Lira Vega: annual-only, R$ 1.343,04/ano equivalent to R$ 111,92/mês (20% off)', () => {
    const vega = getPlanById('vega')
    expect(vega.billingOptions).toEqual(['annual'])
    expect(vega.monthlyPrice).toBeNull()
    expect(vega.annualMonthlyEquivalent).toBe(111.92)
    expect(vega.annualTotal).toBe(1343.04)
    expect(roundToCents(vega.annualMonthlyEquivalent! * 12)).toBe(vega.annualTotal)
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
