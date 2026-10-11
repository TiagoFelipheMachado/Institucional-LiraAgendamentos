import React from 'react'
import { Icon } from './Icon'

interface Niche {
  name: string
  icon: string
}

const NICHES: Niche[] = [
  { name: 'Barbearia', icon: 'content_cut' },
  { name: 'Salão de Beleza', icon: 'styler' },
  { name: 'Clínica de Estética', icon: 'spa' },
  { name: 'Podologia', icon: 'healing' },
  { name: 'Manicure e Pedicure', icon: 'clean_hands' },
  { name: 'Sobrancelhas e Cílios', icon: 'visibility' },
]

export const LiraNiches: React.FC = () => {
  return (
    <section id="nichos" className="py-20 md:py-28 bg-[#070708] border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9034F3]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              FEITO PARA O SEU NEGÓCIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Nichos atendidos
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3]">
            Cada segmento tem sua própria rotina de agenda — o Lira se adapta a ela.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {NICHES.map((niche) => (
            <div
              key={niche.name}
              className="bg-[#0E1A1E]/60 border border-[#14454F] rounded-[20px] p-6 flex flex-col items-start gap-4 hover:border-[#00D3F2]/40 transition-all"
            >
              <span className="w-11 h-11 rounded-[12px] bg-[#053345] border border-[#14454F] flex items-center justify-center text-[#53EAFD]">
                <Icon name={niche.icon} size={22} />
              </span>
              <h3 className="text-[15px] font-semibold text-white tracking-[-0.01em]">
                {niche.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
