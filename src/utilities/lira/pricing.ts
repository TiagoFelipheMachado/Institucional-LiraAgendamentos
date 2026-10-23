export type BillingCycle = 'annual' | 'monthly'

/** Sistema (app). Roda em HashRouter: rotas internas vão depois de `/#`. */
export const LIRA_APP_URL = 'https://app.liragenda.com.br'

/** Checkout no sistema; o preço é calculado lá a partir do nome do plano. */
export function checkoutUrl(plan: PricingPlan, cycle: BillingCycle): string {
  const params = new URLSearchParams({ plan: plan.name, period: cycle })
  return `${LIRA_APP_URL}/#/checkout?${params}`
}

export const TRIAL_SIGNUP_URL = `${LIRA_APP_URL}/#/register`

export interface PricingPlan {
  id: 'start' | 'plus' | 'vega' | 'essencial' | 'avancado' | 'profissional'
  name: string
  audience: string
  monthlyPrice: number
  annualPricePerMonth: number
  annualSavingsPerMonth: number
  annualDiscountPercent: number
  annualTotal: number
  popular?: boolean
  recommendedBadge?: string
  conditionText: string
  savingsPill: string
  couponText: string
  features: string[]
}

/**
 * Rounds to the nearest cent.
 */
export function roundToCents(value: number): number {
  return Math.round(value * 100) / 100
}

/**
 * Official Lira pricing plans without artificial restrictions
 * (no GAIA credits, no message limits, no customer limits).
 * Categorized by operational capabilities and business size.
 */
export const LIRA_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    name: 'Lira Start',
    audience: 'Ideal para: Profissionais autônomos',
    monthlyPrice: 69.90,
    annualPricePerMonth: 55.92,
    annualSavingsPerMonth: 13.98,
    annualDiscountPercent: 20,
    annualTotal: 671.04,
    popular: false,
    conditionText: 'Plano Anual equivalente a R$ 55,92 / mês (20% off)',
    savingsPill: 'PLANO ANUAL: R$ 55,92 / MÊS',
    couponText: 'ECONOMIZE 20% NO ANUAL',
    features: [
      'Agendamento online automatizado',
      'Confirmação via WhatsApp IA',
      'Integração Pix integrada',
      'Cadastro de serviços e clientes',
      'Suporte via chat',
    ],
  },
  {
    id: 'plus',
    name: 'Lira Plus',
    audience: 'Ideal para: Equipes e barbearias estruturadas',
    monthlyPrice: 99.90,
    annualPricePerMonth: 79.92,
    annualSavingsPerMonth: 19.98,
    annualDiscountPercent: 20,
    annualTotal: 959.04,
    popular: true,
    recommendedBadge: 'Plano Recomendado',
    conditionText: 'Plano Anual equivalente a R$ 79,92 / mês (20% off)',
    savingsPill: 'PLANO ANUAL: R$ 79,92 / MÊS',
    couponText: 'ECONOMIZE 20% NO ANUAL',
    features: [
      'Tudo do plano Start',
      'Agenda para múltiplos profissionais',
      'Central de Atendimento via chat',
      'Antecipação de comissão via maquininha',
      'Relatórios financeiros avançados',
    ],
  },
  {
    id: 'vega',
    name: 'Lira Vega',
    audience: 'Ideal para: Redes e múltiplas unidades/filiais',
    monthlyPrice: 139.90,
    annualPricePerMonth: 111.92,
    annualSavingsPerMonth: 27.98,
    annualDiscountPercent: 20,
    annualTotal: 1343.04,
    popular: false,
    conditionText: 'Plano Anual equivalente a R$ 111,92 / mês (20% off)',
    savingsPill: 'PLANO ANUAL: R$ 111,92 / MÊS',
    couponText: 'ECONOMIZE 20% NO ANUAL',
    features: [
      'Tudo do plano Plus',
      'Gestão de múltiplas unidades / filiais',
      'API dedicada e relatórios customizados',
      'Integração WordPress white-label',
      'Gerente de conta exclusivo',
    ],
  },
]

/**
 * Formats a value as BRL currency string (e.g. "R$ 69,90").
 */
export function formatBRLWithCents(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Resolves a plan by id, supporting both new ids (start, plus, vega)
 * and legacy aliases (essencial, avancado, profissional).
 */
export function getPlanById(id: PricingPlan['id'] | string): PricingPlan {
  const normalizedId =
    id === 'essencial' ? 'start' : id === 'avancado' ? 'plus' : id === 'profissional' ? 'vega' : id
  const plan = LIRA_PRICING_PLANS.find((p) => p.id === normalizedId)
  if (!plan) {
    throw new Error(`Unknown Lira pricing plan id: "${id}"`)
  }
  return plan
}
