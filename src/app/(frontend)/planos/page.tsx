import type { Metadata } from 'next'
import React from 'react'
import { LiraSitePage, LiraPageHero } from '@/components/lira/SitePage'
import { LiraPricing } from '@/components/lira/Pricing'
import { LiraRoiCalculator } from '@/components/lira/RoiCalculator'
import { LiraFAQ } from '@/components/lira/FAQ'
import { getPlansData } from '@/utilities/lira/getPlansData'

const description =
  'Planos a partir de R$ 69,90/mês no plano anual, com 14 dias de teste grátis, sem taxa de adesão e sem fidelidade.'

export const metadata: Metadata = {
  title: 'Planos e Preços | Lira Agendamentos',
  description,
  openGraph: {
    title: 'Planos e Preços | Lira Agendamentos',
    description,
    images: [{ url: '/website-template-OG.webp' }],
  },
}

export default async function PlanosPage() {
  const { plans, title, subtitle, annualDiscountPercent } = await getPlansData()

  return (
    <LiraSitePage>
      <LiraPageHero
        breadcrumb={[{ label: 'Planos' }]}
        eyebrow="Planos e preços"
        title="Um plano para cada"
        highlight="tamanho de negócio."
        description={description}
      />
      <LiraPricing
        initialPlans={plans}
        title={title}
        subtitle={subtitle}
        annualDiscountPercent={annualDiscountPercent}
      />
      <LiraRoiCalculator />
      <LiraFAQ />
    </LiraSitePage>
  )
}
