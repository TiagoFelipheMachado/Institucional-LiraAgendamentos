import React from 'react'
import Link from 'next/link'

export const LiraPlanTeaser: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] text-neutral-900 dark:text-[#E5E2E3] overflow-hidden transition-colors duration-200">
      {/* Background ambient glow matching Lira site standard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.15] mb-5 sm:mb-6 max-w-3xl">
          Um plano para cada{' '}
          <span className="inline-block italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent pr-1">
            tamanho de negócio.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
          Do profissional solo à rede com mais de 100 colaboradores: comece a partir de R$ 69,90/mês no plano anual e impulsione sua operação com tecnologia que cresce junto com o seu negócio.
        </p>

        {/* CTA Button following Lira Primary Site CTA rules */}
        <Link
          href="/planos"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 min-h-[44px] rounded-[14px] text-[15px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_4px_24px_rgba(255,255,255,0.18)] transition-all duration-200 active:scale-[0.98] group"
        >
          <span>Comparar todos os planos</span>
          <span
            className="material-symbols-rounded text-neutral-400 group-hover:text-white dark:text-neutral-500 dark:group-hover:text-[#070708] group-hover:translate-x-1 transition-all"
            style={{ fontSize: '18px' }}
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </Link>

        {/* Assurance / Trust Microcopy */}
        <div className="mt-4 flex items-center justify-center">
          <Link
            href="#contato"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-50 hover:bg-cyan-100 dark:bg-[#00D3F2]/10 dark:hover:bg-[#00D3F2]/20 border border-cyan-200 dark:border-[#00D3F2]/30 text-sm sm:text-[15px] font-semibold text-cyan-800 dark:text-[#53EAFD] transition-colors"
          >
            <span>Faça o teste de 14 dias</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

