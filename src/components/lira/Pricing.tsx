'use client'

import React, { useState } from 'react'
import {
  LIRA_PRICING_PLANS,
  formatBRLWithCents,
  type BillingCycle,
  type PricingPlan,
} from '@/utilities/lira/pricing'
import { Icon } from './Icon'

function PricingCard({ plan, isAnnual }: { plan: PricingPlan; isAnnual: boolean }) {
  const isPurple = plan.popular

  return (
    <div
      data-plan-id={plan.id}
      data-popular={plan.popular ? 'true' : 'false'}
      className={`rounded-2xl p-6 sm:p-7 flex flex-col transition-all relative ${
        isPurple
          ? 'bg-[#8A4BFF] text-white shadow-xl shadow-purple-500/20 border border-purple-400/30 lg:-translate-y-2.5 z-10'
          : 'bg-white dark:bg-[#111215] border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-sm hover:shadow-md'
      }`}
    >
      {/* Top Banner for Recommended (Plano Recomendado) */}
      {isPurple && (
        <div className="text-center pb-2">
          <span className="text-xs font-bold tracking-wider uppercase text-white/90">
            {plan.recommendedBadge || 'Plano Recomendado'}
          </span>
        </div>
      )}

      {/* Top Savings Pill (Visible when Annual) */}
      {isAnnual && (
        <div className="mb-3 flex items-start">
          <div
            className={`flex items-start gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold leading-tight ${
              isPurple
                ? 'bg-white/15 border border-white/25 text-white'
                : 'bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300'
            }`}
          >
            <Icon
              name="local_offer"
              size={14}
              className={`mt-0.5 shrink-0 ${isPurple ? 'text-white' : 'text-sky-600 dark:text-sky-300'}`}
            />
            <div>
              <p>{plan.savingsPill}</p>
              <p
                className={
                  isPurple
                    ? 'text-white/80 font-normal text-[10px]'
                    : 'text-sky-600/80 dark:text-sky-400/80 font-normal text-[10px]'
                }
              >
                {plan.couponText}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Title & Description */}
      <h3
        className={`text-2xl font-bold tracking-tight ${
          isPurple ? 'text-white' : 'text-neutral-900 dark:text-white'
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`text-xs mt-1.5 min-h-[34px] leading-relaxed ${
          isPurple ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'
        }`}
      >
        {plan.audience}
      </p>

      {/* Price section */}
      <div className="my-5 min-h-[72px]">
        {isAnnual ? (
          <div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className={`line-through text-xs font-mono font-medium ${
                  isPurple ? 'text-white/60' : 'text-neutral-400'
                }`}
              >
                {formatBRLWithCents(plan.monthlyPrice)}
              </span>
              <span
                className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                  isPurple ? 'text-white' : 'text-[#1D72FE] dark:text-[#38BDF8]'
                }`}
              >
                {formatBRLWithCents(plan.annualPricePerMonth)}
              </span>
              <span
                className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                  isPurple ? 'bg-[#5B21B6] text-white' : 'bg-[#1D72FE] text-white'
                }`}
              >
                -{plan.annualDiscountPercent}%
              </span>
            </div>
            <p
              className={`text-xs mt-0.5 ${
                isPurple ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              por mês
            </p>
            <p
              className={`text-[11px] font-mono mt-1 ${
                isPurple ? 'text-white/70' : 'text-neutral-400 dark:text-neutral-500'
              }`}
            >
              * {formatBRLWithCents(plan.annualTotal)} / ano (Em até 12x no cartão)
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                  isPurple ? 'text-white' : 'text-[#1D72FE] dark:text-[#38BDF8]'
                }`}
              >
                {formatBRLWithCents(plan.monthlyPrice)}
              </span>
            </div>
            <p
              className={`text-xs mt-0.5 ${
                isPurple ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              por mês
            </p>
          </div>
        )}
      </div>

      {/* Feature list */}
      <div className="space-y-2.5 text-xs sm:text-[13px] my-4 pt-4 border-t border-black/5 dark:border-white/10">
        <p className={`font-semibold ${isPurple ? 'text-white' : 'text-neutral-800 dark:text-neutral-200'}`}>
          {plan.features.professionals}
        </p>

        {/* WhatsApp pill */}
        <div>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isPurple
                ? 'bg-[#22C55E] text-white shadow-sm'
                : 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
            }`}
          >
            <Icon
              name="chat"
              size={13}
              className={isPurple ? 'text-white' : 'text-emerald-600 dark:text-emerald-300'}
            />
            {isAnnual ? plan.features.whatsappAnnual : plan.features.whatsappMonthly}
          </span>
        </div>

        <p className={isPurple ? 'text-white/90' : 'text-neutral-700 dark:text-neutral-300'}>
          {plan.features.simultaneousAppointments}
        </p>

        <p className={`font-semibold ${isPurple ? 'text-white' : 'text-neutral-800 dark:text-neutral-200'}`}>
          {plan.features.clients}
        </p>

        <p className={isPurple ? 'text-white/90' : 'text-neutral-700 dark:text-neutral-300'}>
          {plan.features.linkText}
        </p>

        {/* AI credits pill */}
        <div>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isPurple
                ? 'bg-white/20 border border-white/30 text-white'
                : 'bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300'
            }`}
          >
            <Icon
              name="auto_awesome"
              size={13}
              className={isPurple ? 'text-white' : 'text-purple-600 dark:text-purple-300'}
            />
            {plan.features.aiCredits}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-auto pt-6">
        <a
          href="#contato"
          className={`w-full py-3 px-6 rounded-full font-semibold text-sm transition-all text-center block ${
            isPurple
              ? 'bg-[#581C87] hover:bg-[#4A1472] text-white shadow-lg shadow-purple-950/30'
              : 'border-2 border-[#1D72FE] text-[#1D72FE] hover:bg-[#1D72FE] hover:text-white dark:border-[#38BDF8] dark:text-[#38BDF8] dark:hover:bg-[#38BDF8] dark:hover:text-black'
          }`}
        >
          Contratar Plano
        </a>

        <a
          href="#contato"
          className={`text-xs text-center mt-3 block font-medium transition-colors ${
            isPurple
              ? 'text-white/90 hover:text-white underline-offset-2 hover:underline'
              : 'text-[#1D72FE] dark:text-[#38BDF8] hover:underline'
          }`}
        >
          Continuar meu teste grátis
        </a>
      </div>
    </div>
  )
}

export const LiraPricing: React.FC = () => {
  const [cycle, setCycle] = useState<BillingCycle>('annual')
  const isAnnual = cycle === 'annual'

  return (
    <section id="planos" className="py-16 md:py-24 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main card modal wrapper */}
        <div className="bg-white dark:bg-[#0C0D0F] rounded-3xl p-6 sm:p-10 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-xl max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
              Conheça os planos
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Está gostando de utilizar nosso sistema? Assine um plano e desbloqueie todas as funcionalidades:
            </p>
          </div>

          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-center gap-4 mb-10 select-none">
            <button
              type="button"
              onClick={() => setCycle('annual')}
              className="text-right cursor-pointer outline-none focus:outline-none"
            >
              <span
                className={`text-sm sm:text-[15px] font-bold block leading-tight transition-colors ${
                  isAnnual ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                plano anual
              </span>
              <span
                className={`block text-[11px] font-semibold leading-tight mt-0.5 transition-opacity ${
                  isAnnual ? 'text-neutral-700 dark:text-neutral-300 opacity-100' : 'text-neutral-400 dark:text-neutral-500 opacity-75'
                }`}
              >
                economize até 40%
              </span>
            </button>

            {/* Switch pill */}
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              aria-label="Alternar entre plano anual e mensal"
              onClick={() => setCycle((prev) => (prev === 'annual' ? 'monthly' : 'annual'))}
              className={`relative rounded-full cursor-pointer transition-colors duration-200 shrink-0 ${
                isAnnual
                  ? 'bg-[#1B2432] dark:bg-[#1D72FE]'
                  : 'bg-neutral-300 dark:bg-neutral-700'
              }`}
              style={{
                width: '56px',
                height: '30px',
                padding: 0,
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
            >
              <span
                className="block rounded-full bg-white pointer-events-none"
                style={{
                  width: '22px',
                  height: '22px',
                  position: 'absolute',
                  top: '50%',
                  left: isAnnual ? '4px' : '30px',
                  transform: 'translateY(-50%)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.25)',
                  transition: 'left 200ms ease-in-out',
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => setCycle('monthly')}
              className="text-left cursor-pointer outline-none focus:outline-none"
            >
              <span
                className={`text-sm sm:text-[15px] font-bold block leading-tight transition-colors ${
                  !isAnnual ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                plano mensal
              </span>
            </button>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {LIRA_PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
