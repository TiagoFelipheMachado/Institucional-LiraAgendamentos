import React from 'react'
import Link from 'next/link'

export const LiraHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070708]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#9034F3]/15 via-[#00D3F2]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: copy + CTAs */}
          <div className="text-center lg:text-left">
            {/* Top Tag / Pill — provided asset (real Lira fact: 20% off on annual plans, see Pricing). */}
            {/* eslint-disable-next-line @next/next/no-img-element -- static provided asset */}
            <img
              src="/hero-badge-link.svg"
              alt="20% OFF — pague menos na primeira mensalidade, mês ou ano"
              className="inline-block h-auto mb-6"
              style={{ width: 423, maxWidth: '100%' }}
            />

            <h1 className="text-4xl sm:text-6xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#E5E2E3] leading-[1.1] mb-6">
              Agenda cheia.
              <br />
              Caixa em dia.
              <br />
              Clientes que{' '}
              <span className="italic bg-gradient-to-r from-white via-[#CEFAFE] to-[#00D3F2] bg-clip-text text-transparent">
                voltam.
              </span>
            </h1>

            <p className="text-lg text-[#9A9DA3] max-w-xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed">
              Agendamento, financeiro, WhatsApp e assinaturas em um só lugar. Desbloqueie a infinita gestão de sua agenda.
            </p>

            {/* CTAs: Design rule kept consistent with the rest of the Lira site
                (BRANCO É O CTA DO SITE) rather than the reference's blue/purple
                solid button, so this section doesn't clash with every other CTA
                already shipped across the page. */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-semibold bg-white text-[#070708] hover:bg-neutral-100 transition-all shadow-[0_4px_24px_rgba(255,255,255,0.18)] active:scale-[0.98]"
              >
                Fazer teste grátis 14 dias
              </Link>

              <Link
                href="#planos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-medium text-[#E5E2E3] bg-[#1A1B1D]/80 hover:bg-[#1A1B1D] border border-[#14454F] hover:border-[#00D3F2]/60 transition-all active:scale-[0.98]"
              >
                Conhecer Planos disponíveis
              </Link>
            </div>

            {/* Trust row — guarantee line only, no business-metrics claim. */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1.5 text-[13px] text-[#9A9DA3]">
              <span>Faça o teste sem registrar nenhuma forma de pagamento</span>
              <span className="text-[#14454F]">·</span>
              <span>Cancele quando quiser</span>
              <span className="text-[#14454F]">·</span>
              <span>Suporte disponível 24h</span>
            </div>
          </div>

          {/* Right: product mockup — provided asset (Agendamento + Assistente
              Virtual), swapped in for the previous hand-built KPI/Agenda-de-hoje
              composition. */}
          <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full">
            {/* eslint-disable-next-line @next/next/no-img-element -- static provided asset */}
            <img
              src="/hero-visual-mockups.svg"
              alt="Mockup do widget de Agendamento e do Assistente Virtual do Lira"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
