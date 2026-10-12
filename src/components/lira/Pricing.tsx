'use client'

import React, { useState } from 'react'
import {
  LIRA_PRICING_PLANS,
  formatBRLWithCents,
  type BillingCycle,
  type PricingPlan,
} from '@/utilities/lira/pricing'
import { Icon } from './Icon'

function PriceDisplay({ plan, cycle }: { plan: PricingPlan; cycle: BillingCycle }) {
  const showsAnnual = cycle === 'annual' && plan.billingOptions.includes('annual')
  const showsMonthly = cycle === 'monthly' && plan.billingOptions.includes('monthly')

  if (showsAnnual) {
    return (
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-semibold font-mono text-neutral-900 dark:text-white">
            {formatBRLWithCents(plan.annualMonthlyEquivalent!)}
          </span>
          <span className="text-[13px] text-neutral-500 dark:text-[#9A9DA3]">/mês</span>
        </div>
        <p className="text-[12px] font-mono text-emerald-600 dark:text-[#34E5A0] mt-1 font-medium">
          {formatBRLWithCents(plan.annualTotal!)}/ano · {plan.annualDiscountPercent}% off
        </p>
      </div>
    )
  }

  if (showsMonthly) {
    return (
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-semibold font-mono text-neutral-900 dark:text-white">
            {formatBRLWithCents(plan.monthlyPrice!)}
          </span>
          <span className="text-[13px] text-neutral-500 dark:text-[#9A9DA3]">/mês</span>
        </div>
        {plan.firstMonthPrice && (
          <p className="text-[12px] font-mono text-emerald-600 dark:text-[#34E5A0] mt-1 font-medium">
            {formatBRLWithCents(plan.firstMonthPrice)} no 1º mês · {plan.firstMonthDiscountPercent}% off
          </p>
        )}
      </div>
    )
  }

  // Plan doesn't offer the currently selected cycle — show its only cycle instead.
  const fallbackCycle: BillingCycle = plan.billingOptions[0]
  return <PriceDisplay plan={plan} cycle={fallbackCycle} />
}

export const LiraPricing: React.FC = () => {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')
  const isAnnual = cycle === 'annual'

  return (
    <section id="planos" className="py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0092B8] dark:bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-cyan-800 dark:text-[#CEFAFE]">
              PLANOS E PREÇOS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-4">
            Um plano para cada tamanho de operação
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3]">
            Do autônomo à rede com múltiplas filiais — comece pequeno e migre de plano quando
            precisar.
          </p>
        </div>

        {/* Billing cycle toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-[13px] font-medium transition-colors ${!isAnnual ? 'text-neutral-900 dark:text-white font-semibold' : 'text-neutral-500 dark:text-[#9A9DA3]'}`}>
            Mensal
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Alternar para cobrança anual"
            onClick={() => setCycle(isAnnual ? 'monthly' : 'annual')}
            className={`relative w-12 h-7 rounded-full border transition-colors ${
              isAnnual ? 'bg-cyan-100 dark:bg-[#00D3F2]/20 border-cyan-500 dark:border-[#00D3F2]' : 'bg-neutral-200 dark:bg-[#1A1B1D] border-neutral-300 dark:border-[#14454F]'
            }`}
          >
            <span
              className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all ${
                isAnnual ? 'left-6 bg-cyan-600 dark:bg-[#00D3F2]' : 'left-1 bg-neutral-400 dark:bg-[#9A9DA3]'
              }`}
            />
          </button>
          <span className={`text-[13px] font-medium transition-colors ${isAnnual ? 'text-neutral-900 dark:text-white font-semibold' : 'text-neutral-500 dark:text-[#9A9DA3]'}`}>
            Anual
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-[#05281E]/60 border border-emerald-200 dark:border-[#0D593E] text-emerald-800 dark:text-[#A3F3D0]">
            economize até 20%
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {LIRA_PRICING_PLANS.map((plan) => {
            const monthlyOnly =
              plan.billingOptions.length === 1 && plan.billingOptions[0] === 'monthly'
            const annualOnly =
              plan.billingOptions.length === 1 && plan.billingOptions[0] === 'annual'

            return (
              <div
                key={plan.id}
                data-plan-id={plan.id}
                data-popular={plan.popular}
                className={`flex flex-col rounded-[20px] p-7 transition-all ${
                  plan.popular
                    ? 'bg-cyan-50/50 dark:bg-[#0E1A1E] border-2 border-cyan-500 dark:border-[#00D3F2] shadow-lg dark:shadow-[0_0_40px_rgba(0,211,242,0.15)] md:scale-[1.03]'
                    : 'bg-neutral-50 dark:bg-[#0E1A1E]/60 border border-neutral-200 dark:border-[#14454F] hover:border-cyan-500/40 dark:hover:border-[#00D3F2]/40'
                }`}
              >
                {plan.popular && (
                  <span className="self-start mb-4 text-[10px] font-mono tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-cyan-600 dark:bg-[#00D3F2] text-white dark:text-[#070708] font-semibold">
                    Mais popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-[-0.02em]">{plan.name}</h3>
                <p className="text-[13px] text-neutral-600 dark:text-[#9A9DA3] mb-6">{plan.audience}</p>

                <div className="mb-6 min-h-[64px]">
                  <PriceDisplay plan={plan} cycle={cycle} />
                  {monthlyOnly && (
                    <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-neutral-500 dark:text-[#9A9DA3] mt-2">
                      Somente mensal
                    </p>
                  )}
                  {annualOnly && (
                    <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-neutral-500 dark:text-[#9A9DA3] mt-2">
                      Somente anual
                    </p>
                  )}
                </div>

                <a
                  href="#contato"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-[12px] text-[14px] font-semibold transition-all active:scale-[0.98] mt-auto ${
                    plan.popular
                      ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-md dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_2px_16px_rgba(255,255,255,0.15)]'
                      : 'bg-white dark:bg-[#1A1B1D] text-neutral-900 dark:text-white border border-neutral-300 dark:border-[#14454F] hover:border-cyan-500 dark:hover:border-[#00D3F2]/60 hover:bg-neutral-50 dark:hover:bg-[#1F2023]'
                  }`}
                >
                  {plan.firstMonthPrice ? 'Começar com teste grátis' : 'Assinar agora'}
                </a>

                {plan.couponNote && (
                  <p className="text-[11px] text-neutral-500 dark:text-[#9A9DA3] mt-3 text-center">{plan.couponNote}</p>
                )}
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-[12px] bg-neutral-50 dark:bg-[#0E1A1E]/60 border border-neutral-200 dark:border-[#14454F] flex items-start gap-3">
          <Icon name="local_offer" className="text-cyan-600 dark:text-[#00D3F2] shrink-0 mt-0.5" size={18} />
          <p className="text-[12px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
            Condição de lançamento: cupons <strong className="text-neutral-900 dark:text-white">Bem-vindo 1 a 10</strong>{' '}
            dão 15% de desconto no 1º mês dos planos mensais. Planos anuais têm 20% de desconto
            aplicado direto na cobrança do período.
          </p>
        </div>
      </div>
    </section>
  )
}
