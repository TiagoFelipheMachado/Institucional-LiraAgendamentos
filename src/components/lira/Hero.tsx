import React from 'react'
import Link from 'next/link'
import { HeroDashboardMockup } from './HeroDashboardMockup'

export const LiraHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-[#070708] transition-colors duration-200">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: copy + CTAs */}
          <div className="text-center lg:text-left">
            {/* Top Tag / Pill — provided asset (real Lira fact: 20% off on annual plans, see Pricing). */}
            {/* eslint-disable-next-line @next/next/no-img-element -- static provided asset */}
            <img
              src="/hero-badge-link.svg"
              alt="20% OFF — pague menos na primeira mensalidade, mês ou ano"
              className="inline-block dark:hidden h-auto mb-6"
              style={{ width: 423, maxWidth: '100%' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- static dark-mode asset */}
            <img
              src="/hero-badge-link-dark.svg"
              alt="20% OFF — pague menos na primeira mensalidade, mês ou ano"
              className="hidden dark:inline-block h-auto mb-6"
              style={{ width: 423, maxWidth: '100%' }}
            />

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.12] mb-5 sm:mb-6">
              Cadeiras ocupadas.
              <br />
              Finanças no verde.
              <br />
              Clientes que{' '}
              <span className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
                voltam sempre.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] max-w-xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed">
              Plataforma completa de agendamento online, comissões automáticas, IA no WhatsApp e clube de assinaturas. Menos tempo na recepção, mais previsibilidade no seu caixa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.15)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_4px_24px_rgba(255,255,255,0.18)] transition-all active:scale-[0.98]"
              >
                Fazer teste grátis 14 dias
              </Link>

              <Link
                href="#planos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 dark:bg-[#1A1B1D]/80 dark:text-[#E5E2E3] dark:border-[#14454F] dark:hover:bg-[#1A1B1D] dark:hover:border-[#00D3F2]/60 transition-all active:scale-[0.98]"
              >
                Conhecer Planos disponíveis
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1.5 text-[13px] text-neutral-500 dark:text-[#9A9DA3]">
              <span>Inicie seu teste sem cartão de crédito</span>
              <span className="text-neutral-300 dark:text-[#14454F]">·</span>
              <span>Cancele quando quiser</span>
              <span className="text-neutral-300 dark:text-[#14454F]">·</span>
              <span>Suporte disponível 24h</span>
            </div>
          </div>

          {/* Right: interactive dashboard mockup created in code */}
          <HeroDashboardMockup />
        </div>
      </div>
    </section>
  )
}
