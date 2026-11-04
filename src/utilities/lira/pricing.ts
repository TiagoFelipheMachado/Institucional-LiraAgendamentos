export type BillingCycle = 'annual' | 'monthly'

/** Sistema (app). Roda em HashRouter: rotas internas vão depois de `/#`. */
export const LIRA_APP_URL = 'https://app.liragenda.com.br'

/** Checkout no sistema; o preço é calculado lá a partir do nome do plano. */
export function checkoutUrl(plan: PricingPlan, cycle: BillingCycle): string {
  if (plan.customCheckoutUrl) return plan.customCheckoutUrl
  const params = new URLSearchParams({ plan: plan.name, period: cycle })
  return `${LIRA_APP_URL}/#/checkout?${params}`
}

export const TRIAL_SIGNUP_URL = `${LIRA_APP_URL}/#/register`

export const LOGIN_URL = `${LIRA_APP_URL}/#/login`

export const INSTAGRAM_URL = 'https://www.instagram.com/liragendaoficial/'

export const WHATSAPP_DISPLAY = '(41) 98877-0854'
export const WHATSAPP_URL =
  'https://wa.me/5541988770854?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Lira%20Agendamentos!'

export interface PricingPlan {
  id: 'start' | 'plus' | 'vega' | 'essencial' | 'avancado' | 'profissional' | (string & {})
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
  customCheckoutUrl?: string
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
      'Agendamento Online Automatizado',
      'Integração Pix Integrada',
      'Cadastro de Serviços e Clientes',
      'Suporte via Chat',
      'Gestão e Visualização de Comissões',
      'Repasse Automatizado de Comissões',
      'Portal de Solicitações dos Colaboradores',
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
      'Confirmação via WhatsApp IA',
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


export interface RawPayloadPlan {
  id?: string | null
  name: string
  audience?: string | null
  monthlyPrice: number
  annualPricePerMonth?: number | null
  annualDiscountPercent?: number | null
  popular?: boolean | null
  recommendedBadge?: string | null
  conditionText?: string | null
  savingsPill?: string | null
  couponText?: string | null
  customCheckoutUrl?: string | null
  features?: Array<{ feature?: string } | string> | null
}

export function buildPricingPlan(raw: RawPayloadPlan, defaultDiscount = 20): PricingPlan {
  const discount =
    raw.annualDiscountPercent !== undefined && raw.annualDiscountPercent !== null
      ? Number(raw.annualDiscountPercent)
      : defaultDiscount
  const monthlyPrice = Number(raw.monthlyPrice) || 0
  const annualPricePerMonth =
    raw.annualPricePerMonth && Number(raw.annualPricePerMonth) > 0
      ? Number(raw.annualPricePerMonth)
      : roundToCents(monthlyPrice * (1 - discount / 100))
  const annualSavingsPerMonth = roundToCents(monthlyPrice - annualPricePerMonth)
  const annualTotal = roundToCents(annualPricePerMonth * 12)

  const formattedAnnualMonthly = formatBRLWithCents(annualPricePerMonth)

  const featuresList = (raw.features || [])
    .map((f) => (typeof f === 'string' ? f : f?.feature))
    .filter((f): f is string => Boolean(f))

  const planId = (raw.id || raw.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')) as PricingPlan['id']

  return {
    id: planId,
    name: raw.name,
    audience: raw.audience || '',
    monthlyPrice,
    annualPricePerMonth,
    annualSavingsPerMonth,
    annualDiscountPercent: discount,
    annualTotal,
    popular: Boolean(raw.popular),
    recommendedBadge: raw.recommendedBadge || 'Plano Recomendado',
    conditionText:
      raw.conditionText ||
      `Plano Anual equivalente a ${formattedAnnualMonthly} / mês (${discount}% off)`,
    savingsPill:
      raw.savingsPill || `PLANO ANUAL: ${formattedAnnualMonthly.toUpperCase()} / MÊS`,
    couponText: raw.couponText || `ECONOMIZE ${discount}% NO ANUAL`,
    features: featuresList,
    ...(raw.customCheckoutUrl ? { customCheckoutUrl: raw.customCheckoutUrl } : {}),
  }
}
