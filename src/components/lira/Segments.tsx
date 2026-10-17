import React from 'react'
import Link from 'next/link'

export interface SegmentItem {
  id: string
  title: string
  description: string
  ctaText: string
  image: string
}

export const SEGMENT_ITEMS: SegmentItem[] = [
  {
    id: 'barbearia',
    title: 'Barbearia',
    description: 'Assinatura de corte + barba e agenda sem buraco.',
    ctaText: 'Ver solução para barbearias',
    image: '/segmentos/barbearia.jpg',
  },
  {
    id: 'salao-de-beleza',
    title: 'Salão de beleza',
    description: 'Todas as cadeiras, comissões e estoque sob controle.',
    ctaText: 'Ver solução para salões de beleza',
    image: '/segmentos/salao.jpg',
  },
  {
    id: 'clinica-de-estetica',
    title: 'Clínica de estética',
    description: 'Pacotes de sessões, antes e depois e agenda impecável.',
    ctaText: 'Ver solução para clínicas de estética',
    image: '/segmentos/estetica.jpg',
  },
  {
    id: 'podologia',
    title: 'Podologia',
    description: 'Retornos recorrentes e prontuário com foto de evolução.',
    ctaText: 'Ver solução para podologia',
    image: '/segmentos/podologia.jpg',
  },
  {
    id: 'esmalteria',
    title: 'Esmalteria',
    description: 'Alta rotatividade sem fila e clientes da semana fidelizadas.',
    ctaText: 'Ver solução para esmalterias',
    image: '/segmentos/esmalteria.jpg',
  },
  {
    id: 'sobrancelhas-e-cilios',
    title: 'Sobrancelhas e cílios',
    description: 'Retorno de manutenção agendado e recorrência que vira faturamento.',
    ctaText: 'Ver solução para studios de sobrancelhas & cílios',
    image: '/segmentos/cilios.jpg',
  },
]

export const LiraSegments: React.FC = () => {
  return (
    <section
      id="segmentos"
      className="relative py-20 md:py-28 bg-[#F6F8FA] dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200 scroll-mt-20"
    >
      {/* Invisible anchor target for legacy #nichos links */}
      <span id="nichos" className="absolute -top-24 left-0 pointer-events-none opacity-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section — Left aligned matching layout reference */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-[13px] font-bold font-mono tracking-[0.1em] uppercase text-purple-600 dark:text-purple-400 mb-3">
            SEGMENTOS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-4">
            Feito para o <span className="font-serif italic font-normal text-purple-600 dark:text-purple-400">seu</span> negócio.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl font-normal">
            Cada segmento tem seu ritmo. O Lira se adapta ao seu — com funcionalidades, números de mercado e planos de assinatura pensados para a sua realidade.
          </p>
        </div>

        {/* 6 Segment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SEGMENT_ITEMS.map((item) => (
            <Link
              key={item.id}
              href="#contato"
              className="group relative rounded-[24px] overflow-hidden aspect-[4/5] min-h-[380px] sm:min-h-[420px] bg-neutral-900 shadow-sm hover:shadow-2xl hover:shadow-purple-900/20 border border-neutral-200/40 dark:border-white/10 transition-all duration-300 flex flex-col justify-end"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-55% to-transparent pointer-events-none transition-opacity duration-300 group-hover:via-black/60" />

              {/* Card Bottom Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-200/90 leading-snug mb-5 font-normal max-w-xs">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-white/95 group-hover:text-purple-300 transition-colors">
                  <span>{item.ctaText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Note / Footer */}
        <div className="mt-12 sm:mt-14 text-left text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
          <strong className="font-semibold text-neutral-900 dark:text-white">Outro segmento?</strong>{' '}
          <span>O Lira também atende spas, estúdios de tatuagem, clínicas e outros negócios que vivem de agenda.</span>{' '}
          <Link
            href="#contato"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold underline underline-offset-4 ml-1 inline-flex items-center gap-1"
          >
            Falar com nosso time →
          </Link>
        </div>
      </div>
    </section>
  )
}
