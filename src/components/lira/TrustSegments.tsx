import React from 'react'

import { Icon } from './Icon'

export const LiraTrustSegments: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#070708] py-12 md:py-16 border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.08em] text-neutral-500 dark:text-[#9A9DA3] mb-8">
          PARCEIROS QUE CONFIAM NO LIRA
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10">
          <div className="p-2.5 px-5 rounded-2xl bg-[#0B0C10] border border-neutral-800 shadow-xs dark:bg-transparent dark:p-0 dark:border-0 dark:shadow-none flex items-center justify-center">
            <img 
              src="/parceiro-1.png" 
              alt="Parceiro Barber El Patron" 
              className="h-16 md:h-20 w-auto object-contain dark:mix-blend-lighten"
            />
          </div>
          {/* Adicione mais tags <img> aqui conforme novos parceiros entrarem */}
        </div>

        <div className="w-full max-w-3xl border-t border-neutral-200 dark:border-[#1A1B1D] pt-6 flex justify-center text-[13px] text-neutral-600 dark:text-[#9A9DA3]">
          <a 
            href="https://www.google.com.br/maps/place/Barbearia+El+Patron+Borda+do+campo/@-25.5379723,-49.0878366,16z/data=!4m17!1m8!3m7!1s0x94dcf55c4dd62c1d:0xc8d7a30490c5081e!2sBarbearia+El+Patron+Borda+do+campo!8m2!3d-25.5380735!4d-49.0877362!10e5!16s%2Fg%2F11q8vv93rn!3m7!1s0x94dcf55c4dd62c1d:0xc8d7a30490c5081e!8m2!3d-25.5380735!4d-49.0877362!9m1!1b1!16s%2Fg%2F11q8vv93rn?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center gap-3 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer group"
          >
            <div className="flex items-center text-[#E5B542] group-hover:scale-105 transition-transform">
              <Icon name="star" size={16} />
              <Icon name="star" size={16} />
              <Icon name="star" size={16} />
              <Icon name="star" size={16} />
              <Icon name="star" size={16} />
            </div>
            <div className="flex items-center gap-2">
              <strong className="text-neutral-900 dark:text-white font-medium">5,0</strong>
              <span>· Excelentes avaliações</span>
              <span className="hidden sm:inline">· Google</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
