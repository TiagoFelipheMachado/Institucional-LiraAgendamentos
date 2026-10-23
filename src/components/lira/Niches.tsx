import React from 'react'
import Link from 'next/link'
import { Icon } from './Icon'
import { SEGMENTS } from './siteContent'

export const LiraNiches: React.FC = () => {
  return (
    <section id="nichos" className="py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-[#0E1A1E] border border-purple-200 dark:border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-[#9034F3]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-purple-800 dark:text-[#CEFAFE]">
              FEITO PARA O SEU NEGÓCIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-4">
            Nichos atendidos
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3]">
            Cada segmento tem sua própria rotina de agenda — o Lira se adapta a ela.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {SEGMENTS.map((niche) => (
            <Link
              key={niche.slug}
              href={`/segmentos/${niche.slug}`}
              className="bg-neutral-50 dark:bg-[#0E1A1E]/60 border border-neutral-200 dark:border-[#14454F] rounded-[20px] p-6 flex flex-col items-start gap-4 hover:border-cyan-400 dark:hover:border-[#00D3F2]/40 shadow-xs hover:shadow-md transition-all"
            >
              <span className="w-11 h-11 rounded-[12px] bg-cyan-50 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F] flex items-center justify-center text-cyan-700 dark:text-[#53EAFD]">
                <Icon name={niche.icon} size={22} />
              </span>
              <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white tracking-[-0.01em]">
                {niche.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
