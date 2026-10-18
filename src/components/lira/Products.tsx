import React from 'react'

interface Professional {
  initials: string
  avatarBg: string
  name: string
  role: string
  producao: string
  atendimentos: number
  comissao: string
}

const professionals: Professional[] = [
  {
    initials: 'VA',
    avatarBg: 'bg-[#2563EB]',
    name: 'Vitoria',
    role: 'Esteticista • 30% de taxa',
    producao: 'R$ 2940.00',
    atendimentos: 3,
    comissao: 'R$ 882.00',
  },
  {
    initials: 'VA',
    avatarBg: 'bg-[#2563EB]',
    name: 'Vanessa',
    role: 'Estilista de cílios • 30% de taxa',
    producao: 'R$ 980.00',
    atendimentos: 1,
    comissao: 'R$ 294.00',
  },
  {
    initials: 'CO',
    avatarBg: 'bg-[#0284C7]',
    name: 'Cabelereiro',
    role: 'Kaio • 30% de taxa',
    producao: 'R$ 80.00',
    atendimentos: 1,
    comissao: 'R$ 24.00',
  },
  {
    initials: 'EA',
    avatarBg: 'bg-[#2563EB]',
    name: 'Erika',
    role: 'Estilista de cílios • 30% de taxa',
    producao: 'R$ 60.00',
    atendimentos: 2,
    comissao: 'R$ 18.00',
  },
  {
    initials: 'MO',
    avatarBg: 'bg-[#2563EB]',
    name: 'Marcelo',
    role: '33 3 3333-3333 • 30% de taxa',
    producao: 'R$ 45.00',
    atendimentos: 1,
    comissao: 'R$ 13.50',
  },
  {
    initials: 'LZ',
    avatarBg: 'bg-[#2563EB]',
    name: 'Luiz',
    role: 'Cabelereiro • 30% de taxa',
    producao: 'R$ 0.00',
    atendimentos: 0,
    comissao: 'R$ 0.00',
  },
]

export const LiraProducts: React.FC = () => {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] text-neutral-900 dark:text-[#E5E2E3] relative overflow-hidden transition-colors duration-200">
      {/* Anchor alias for existing links */}
      <div id="financeiro-repasse" className="scroll-mt-24" />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-bl from-cyan-500/[0.04] dark:from-[#00D3F2]/[0.03] via-emerald-500/[0.03] dark:via-[#34D399]/[0.02] to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.12] mb-6">
              Transforme dados <br />
              em lucro real<span className="text-cyan-600 dark:text-[#53EAFD]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal max-w-md">
              Diga adeus a planilhas confusas e discussões no fechamento. O Lira calcula a divisão exata entre casa e equipe com segurança jurídica total na Lei do Salão Parceiro.
            </p>
          </div>

          {/* Right Column: Financial Dashboard */}
          <div className="lg:col-span-7 w-full">
            <div className="space-y-5">
              
              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                
                {/* Metric 1 */}
                <div className="bg-neutral-50 dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] text-neutral-900 dark:text-white rounded-2xl p-4 sm:p-5 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-[#9A9DA3] uppercase font-semibold block">
                      PRODUÇÃO BRUTA
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-[#00D3F2] tracking-tight block mt-1.5 mb-2.5">
                      R$ 4.105,00
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white dark:bg-[#141620] border border-neutral-200 dark:border-[#1E202C] text-[10px] font-mono text-neutral-600 dark:text-[#9A9DA3] w-fit shadow-xs">
                    <span className="text-cyan-600 dark:text-[#53EAFD]">↗</span>
                    <span>Atendimentos no período</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-neutral-50 dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] text-neutral-900 dark:text-white rounded-2xl p-4 sm:p-5 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-[#9A9DA3] uppercase font-semibold block">
                      COMISSÃO DEVIDA TOTAL
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-[#34D399] tracking-tight block mt-1.5 mb-2.5">
                      R$ 1.231,50
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 dark:text-[#9A9DA3] block">
                    Total a repassar para a equipe
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="bg-neutral-50 dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] text-neutral-900 dark:text-white rounded-2xl p-4 sm:p-5 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-[#9A9DA3] uppercase font-semibold block">
                      TAXA DE REPASSE
                    </span>
                    <div className="flex items-baseline mt-1.5 mb-2.5">
                      <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        30.0%
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-[#9A9DA3] ml-2">
                        média mensal
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-[#181A24] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 dark:from-[#00D3F2] dark:to-[#34D399] h-full w-[30%] rounded-full" />
                  </div>
                </div>

              </div>

              {/* 6 Professional Breakdown Rows */}
              <div className="space-y-2">
                {professionals.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-50 dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] hover:border-neutral-300 dark:hover:border-[#282B38] hover:bg-white dark:hover:bg-[#111218] text-neutral-900 dark:text-white rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 shadow-sm dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center justify-between gap-3 sm:gap-4 transition-all group cursor-default"
                  >
                    {/* Left: Avatar + Name & Role */}
                    <div className="flex items-center gap-3 min-w-[130px] sm:min-w-[190px] truncate">
                      <div className={`w-8 sm:w-9 h-8 sm:h-9 rounded-xl ${p.avatarBg} text-white font-mono text-[11px] font-bold flex items-center justify-center shrink-0 shadow-sm`}>
                        {p.initials}
                      </div>
                      <div className="truncate">
                        <span className="text-[13px] sm:text-[14px] font-semibold text-neutral-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-[#CEFAFE] transition-colors block leading-tight truncate">
                          {p.name}
                        </span>
                        <span className="text-[11px] text-neutral-500 dark:text-[#9A9DA3] leading-tight block truncate mt-0.5">
                          {p.role}
                        </span>
                      </div>
                    </div>

                    {/* Middle-Left: Produção */}
                    <div className="text-right hidden sm:block">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 dark:text-[#6B7280] block">
                        PRODUÇÃO
                      </span>
                      <span className="text-[12px] sm:text-[13px] font-mono font-medium text-neutral-800 dark:text-white block mt-0.5">
                        {p.producao}
                      </span>
                    </div>

                    {/* Middle-Right: Atendimentos */}
                    <div className="text-right hidden sm:block">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 dark:text-[#6B7280] block">
                        ATENDIMENTOS
                      </span>
                      <span className="text-[12px] sm:text-[13px] font-mono font-medium text-neutral-800 dark:text-white block mt-0.5">
                        {p.atendimentos}
                      </span>
                    </div>

                    {/* Right: Comissão Devida */}
                    <div className="text-right">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 dark:text-[#6B7280] block">
                        COMISSÃO DEVIDA
                      </span>
                      <span className="text-[13px] sm:text-[14px] font-mono font-bold text-emerald-600 dark:text-[#34D399] block mt-0.5">
                        {p.comissao}
                      </span>
                    </div>

                    {/* Arrow Chevron */}
                    <span className="text-neutral-400 group-hover:text-neutral-900 dark:text-[#6B7280] dark:group-hover:text-white transition-colors text-base pl-1">
                      ›
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
