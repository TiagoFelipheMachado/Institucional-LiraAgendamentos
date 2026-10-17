export type BillingCycle = 'annual' | 'monthly'

export interface PricingPlanFeatures {
  professionals: string
  whatsappMonthly: string
  whatsappAnnual: string
  simultaneousAppointments: string
  clients: string
  linkText: string
  aiCredits: string
}

export interface PricingPlan {
  id: 'essencial' | 'avancado' | 'profissional'
  name: string
  audience: string
  monthlyPrice: number
  annualPricePerMonth: number
  annualSavingsPerMonth: number
  annualDiscountPercent: number
  annualTotal: number
  popular?: boolean
  recommendedBadge?: string
  savingsPill: string
  couponText: string
  features: PricingPlanFeatures
}

/**
 * Rounds to the nearest cent.
 */
export function roundToCents(value: number): number {
  return Math.round(value * 100) / 100
}

/**
 * Plans matching the reference layout (Essencial, Avançado, Profissional)
 * with monthly and annual discount interactions.
 */
export const LIRA_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    audience: 'Controle e gestão essencial para o dia a dia de sua empresa',
    monthlyPrice: 99.86,
    annualPricePerMonth: 60.12,
    annualSavingsPerMonth: 38.74,
    annualDiscountPercent: 40,
    annualTotal: 721.45,
    popular: false,
    savingsPill: 'ECONOMIZE R$ 38,74 AO MÊS',
    couponText: 'CUPOM: BEMVINDO',
    features: {
      professionals: '2 profissionais cadastrados',
      whatsappMonthly: '50 mensagens WhatsApp/mês',
      whatsappAnnual: '200 mensagens WhatsApp/mês',
      simultaneousAppointments: '4 agendamentos simultâneos',
      clients: '2000 clientes cadastrados',
      linkText: 'Link de agend. Seu Logo + Lira',
      aiCredits: 'Até 200 créditos GAIA (IA)',
    },
  },
  {
    id: 'avancado',
    name: 'Avançado',
    audience: 'Agilize o crescimento de sua empresa com a Lira',
    monthlyPrice: 178.43,
    annualPricePerMonth: 107.42,
    annualSavingsPerMonth: 71.01,
    annualDiscountPercent: 40,
    annualTotal: 1289.05,
    popular: true,
    recommendedBadge: 'Plano Recomendado',
    savingsPill: 'ECONOMIZE R$ 71,01 AO MÊS',
    couponText: 'CUPOM: BEMVINDO',
    features: {
      professionals: '6 profissionais cadastrados',
      whatsappMonthly: '100 mensagens WhatsApp/mês',
      whatsappAnnual: '400 mensagens WhatsApp/mês',
      simultaneousAppointments: '12 agendamentos simultâneos',
      clients: '5000 clientes cadastrados',
      linkText: 'Link de agendamento com seu logo',
      aiCredits: 'Até 400 créditos GAIA (IA)',
    },
  },
  {
    id: 'profissional',
    name: 'Profissional',
    audience: 'Total controle de sua empresa e produtividade',
    monthlyPrice: 311.29,
    annualPricePerMonth: 187.40,
    annualSavingsPerMonth: 123.89,
    annualDiscountPercent: 40,
    annualTotal: 2248.81,
    popular: false,
    savingsPill: 'ECONOMIZE R$ 123,89 AO MÊS',
    couponText: 'CUPOM: BEMVINDO',
    features: {
      professionals: '15 profissionais cadastrados',
      whatsappMonthly: '200 mensagens WhatsApp/mês',
      whatsappAnnual: '800 mensagens WhatsApp/mês',
      simultaneousAppointments: '30 agendamentos simultâneos',
      clients: 'Clientes Ilimitados',
      linkText: 'Link de agendamento com seu logo',
      aiCredits: 'Até 800 créditos GAIA (IA)',
    },
  },
]

/**
 * Formats a value as BRL currency string (e.g. "R$ 99,86").
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
