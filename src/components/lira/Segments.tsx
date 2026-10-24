import React from 'react'
import Link from 'next/link'

export interface SegmentItem {
  id: string
  title: string
  tagline?: string
  description: string
  ctaText: string
  image: string
}

export const SEGMENT_ITEMS: SegmentItem[] = [
  {
    id: 'barbearia',
    title: 'Barbearia',
    tagline: 'Assinatura de corte + barba e agenda sem buraco.',
    description:
      'Focado em estabelecimentos de alto volume com ciclos rápidos de atendimento e foco em zerar as faltas (no-shows) com agendamento instantâneo via WhatsApp e link.',
    ctaText: 'Ver solução para barbearias',
    image: '/segmentos/barbearia.jpg',
  },
  {
    id: 'salao-de-beleza',
    title: 'Salão de beleza',
    tagline: 'Todas as cadeiras, comissões e estoque sob controle.',
    description:
      'Organização completa para equipes de múltiplos profissionais, permitindo controle detalhado de faturamento bruto, relatórios de repasses e gestão eficiente da escala diária ou mensal.',
    ctaText: 'Ver solução para salões de beleza',
    image: '/segmentos/salao.jpg',
  },
  {
    id: 'clinica-de-estetica',
    title: 'Clínica de estética',
    tagline: 'Pacotes de sessões, antes e depois e agenda impecável.',
    description:
      'Focado em estabelecimentos com ticket médio mais alto e foco em ROI por horário, garantindo total segurança operacional e controle financeiro automatizado.',
    ctaText: 'Ver solução para clínicas de estética',
    image: '/segmentos/estetica.jpg',
  },
]

export const LiraSegments: React.FC = () => {
  return (
    <section
      id="segmentos"
      className="relative py-20 md:py-28 bg-[#F6F8FA] dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section — Left aligned matching layout reference */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-[13px] font-bold font-mono tracking-[0.1em] uppercase text-cyan-600 dark:text-[#53EAFD] mb-3">
            SEGMENTOS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.15] mb-4">
            Feito para o{' '}
            <span className="inline box-decoration-clone pr-2 bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
              seu
            </span>{' '}
            negócio.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#9A9DA3] leading-relaxed max-w-2xl font-normal">
            Cada segmento tem o seu ritmo, e o Lira Agendamentos se adapta exatamente à sua realidade operacional — com funcionalidades específicas, números de mercado e planos pensados para o seu tipo de estabelecimento.
          </p>
        </div>

        {/* 3 Segment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {SEGMENT_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/segmentos/${item.id}`}
              className="group relative rounded-[24px] overflow-hidden min-h-[420px] sm:min-h-[460px] bg-neutral-900 shadow-sm hover:shadow-2xl hover:shadow-cyan-950/30 border border-neutral-200/40 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-end"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-65% to-transparent pointer-events-none transition-opacity duration-300 group-hover:via-black/70" />

              {/* Card Bottom Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight tracking-tight">
                  {item.title}
                </h3>
                {item.tagline && (
                  <p className="text-xs sm:text-[13px] font-medium text-cyan-300 dark:text-[#53EAFD] mb-2.5 leading-snug">
                    {item.tagline}
                  </p>
                )}
                <p className="text-xs sm:text-[13px] text-neutral-200/90 leading-relaxed mb-5 font-normal">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-white/95 group-hover:text-cyan-300 dark:group-hover:text-[#53EAFD] transition-colors">
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
        <div className="mt-12 sm:mt-14 text-left text-xs sm:text-sm text-neutral-600 dark:text-[#9A9DA3]">
          <strong className="font-semibold text-neutral-900 dark:text-white">Outro segmento?</strong>{' '}
          <span>O Lira também atende spas, estúdios de tatuagem, clínicas e outros negócios que vivem de agenda.</span>{' '}
          <Link
            href="#contato"
            className="text-cyan-600 dark:text-[#00D3F2] hover:text-cyan-700 dark:hover:text-[#53EAFD] font-semibold underline underline-offset-4 ml-1 inline-flex items-center gap-1"
          >
            Falar com nosso time →
          </Link>
        </div>
      </div>
    </section>
  )
}
