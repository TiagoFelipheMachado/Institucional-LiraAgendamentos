import React from 'react'
import Link from 'next/link'

export const LiraPlanTeaser: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-[#FAF7FD] dark:bg-[#0B0A10] border-b border-neutral-200/80 dark:border-[#1A1824] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.2] mb-5 sm:mb-6">
          Um plano para cada{' '}
          <span className="font-serif italic font-normal text-purple-600 dark:text-purple-400">
            tamanho de
          </span>
          <br className="hidden sm:inline" />{' '}
          <span className="font-serif italic font-normal text-purple-600 dark:text-purple-400">
            negócio
          </span>
          .
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-[17px] text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
          Do profissional solo à rede com mais de 100 colaboradores: começa em R$ 69,90/mês no plano anual e cresce junto com o seu negócio.
        </p>

        {/* CTA Button */}
        <Link
          href="#planos"
          className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm sm:text-base shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 active:scale-[0.98]"
        >
          Comparar todos os planos
        </Link>
      </div>
    </section>
  )
}
