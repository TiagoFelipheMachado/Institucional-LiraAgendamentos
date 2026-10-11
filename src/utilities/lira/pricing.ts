export type BillingCycle = 'monthly' | 'annual'

export interface PricingPlan {
  id: 'start' | 'plus' | 'vega'
  name: string
  audience: string
  monthlyPrice: number | null
  firstMonthDiscountPercent: number | null
  firstMonthPrice: number | null
  annualTotal: number | null
  annualMonthlyEquivalent: number | null
  annualDiscountPercent: number | null
  billingOptions: BillingCycle[]
  popular: boolean
  couponNote: string | null
}

/**
 * Rounds to the nearest cent — plain float math (e.g. 69.9 * 0.85) can land on
 * values like 59.414999999999996, which must never leak into a displayed price.
 */
export function roundToCents(value: number): number {
  return Math.round(value * 100) / 100
}

/**
 * Official plans from the Lira Agendamentos sales sheet. Prices are the
 * literal documented values (not derived from a formula) so a change on the
 * sales side can't silently drift from what ships here — the accompanying
 * test suite instead verifies these literals are internally consistent
 * (e.g. that the 15%/20% discounts actually produce the documented prices).
 */
export const LIRA_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    name: 'Lira Start',
    audience: 'Ideal para autônomos',
    monthlyPrice: 69.9,
    firstMonthDiscountPercent: 15,
    firstMonthPrice: 59.42,
    annualTotal: null,
    annualMonthlyEquivalent: null,
    annualDiscountPercent: null,
    billingOptions: ['monthly'],
    popular: false,
    couponNote: 'Cupons Bem-vindo 1 a 10: 15% de desconto no 1º mês.',
  },
  {
    id: 'plus',
    name: 'Lira Plus',
    audience: 'Para equipes',
    monthlyPrice: 99.9,
    firstMonthDiscountPercent: 15,
    firstMonthPrice: 84.92,
    annualTotal: 959.04,
    annualMonthlyEquivalent: 79.92,
    annualDiscountPercent: 20,
    billingOptions: ['monthly', 'annual'],
    popular: true,
    couponNote: 'Cupons Bem-vindo 1 a 10: 15% de desconto no 1º mês do plano mensal.',
  },
  {
    id: 'vega',
    name: 'Lira Vega',
    audience: 'Para redes e filiais',
    monthlyPrice: null,
    firstMonthDiscountPercent: null,
    firstMonthPrice: null,
    annualTotal: 1343.04,
    annualMonthlyEquivalent: 111.92,
    annualDiscountPercent: 20,
    billingOptions: ['annual'],
    popular: false,
    couponNote: null,
  },
]

/**
 * Formats a value as BRL with cents always shown — unlike
 * `formatBRL` in roi.ts (which intentionally rounds to whole reais for the
 * ROI calculator), pricing must never hide the exact promotional cents.
 */
export function formatBRLWithCents(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function getPlanById(id: PricingPlan['id']): PricingPlan {
  const plan = LIRA_PRICING_PLANS.find((p) => p.id === id)
  if (!plan) {
    throw new Error(`Unknown Lira pricing plan id: "${id}"`)
  }
  return plan
}
