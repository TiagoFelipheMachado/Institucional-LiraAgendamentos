import React from 'react'
import { StatusBadge } from './StatusBadge'

export const LiraMetricsPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#070708] border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#53EAFD] block mb-2">
            INTERFACE & DADOS EM TEMPO REAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3]">
            O painel de quem opera no balcão
          </h2>
          <p className="text-base text-[#9A9DA3] mt-2">
            Superfície de dado #0B0F19 com neutro frio, priorizando leitura rápida entre um atendimento e o próximo.
          </p>
        </div>

        {/* Live Interface Card Mockup */}
        <div className="bg-[#0B0F19] border border-[#14454F] rounded-[24px] p-6 sm:p-8 shadow-[0_12px_48px_rgba(0,0,0,0.6)]">
          {/* Top 4 KPI Metrics from Design Section 08 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {/* KPI 1 */}
            <div className="bg-[#070708]/80 border border-[#14454F]/70 rounded-[16px] p-4 sm:p-5">
              <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-[#9A9DA3] block mb-1">
                FATURADO HOJE
              </span>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#34E5A0] mb-1">
                R$ 4.105
              </div>
              <span className="text-[12px] font-mono text-[#34E5A0] flex items-center gap-1">
                <span>+12%</span>
                <span className="text-[#9A9DA3]">vs. ontem</span>
              </span>
            </div>

            {/* KPI 2 */}
            <div className="bg-[#070708]/80 border border-[#14454F]/70 rounded-[16px] p-4 sm:p-5">
              <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-[#9A9DA3] block mb-1">
                SINAIS PENDENTES
              </span>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#FFE17D] mb-1">
                3
              </div>
              <span className="text-[12px] font-mono text-[#FFE17D]">expira em 30 min</span>
            </div>

            {/* KPI 3 */}
            <div className="bg-[#070708]/80 border border-[#14454F]/70 rounded-[16px] p-4 sm:p-5">
              <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-[#9A9DA3] block mb-1">
                ATENDIMENTOS
              </span>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#53EAFD] mb-1">
                17
              </div>
              <span className="text-[12px] font-mono text-[#9A9DA3]">4 profissionais</span>
            </div>

            {/* KPI 4 */}
            <div className="bg-[#070708]/80 border border-[#14454F]/70 rounded-[16px] p-4 sm:p-5">
              <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-[#9A9DA3] block mb-1">
                NO SHOW
              </span>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#FF4D6D] mb-1">
                1
              </div>
              <span className="text-[12px] font-mono text-[#34E5A0] font-semibold">
                −68% desde o sinal
              </span>
            </div>
          </div>

          {/* Table of bookings from section 08 */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-[#14454F]/60 text-[11px] font-mono uppercase tracking-[0.08em] text-[#9A9DA3]">
                  <th className="pb-3 font-normal">HORA</th>
                  <th className="pb-3 font-normal">CLIENTE</th>
                  <th className="pb-3 font-normal">SERVIÇO</th>
                  <th className="pb-3 font-normal">STATUS</th>
                  <th className="pb-3 font-normal text-right">VALOR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#14454F]/30 font-normal">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-mono text-[#E5E2E3]">09:00</td>
                  <td className="py-3.5 font-medium text-white">Marina Alves</td>
                  <td className="py-3.5 text-[#9A9DA3]">Corte + barba</td>
                  <td className="py-3.5">
                    <StatusBadge status="confirmado" />
                  </td>
                  <td className="py-3.5 font-mono text-[#34E5A0] text-right font-medium">R$ 120</td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-mono text-[#E5E2E3]">10:30</td>
                  <td className="py-3.5 font-medium text-white">Diego Ramos</td>
                  <td className="py-3.5 text-[#9A9DA3]">Sobrancelha</td>
                  <td className="py-3.5">
                    <StatusBadge status="aguardando" />
                  </td>
                  <td className="py-3.5 font-mono text-[#34E5A0] text-right font-medium">R$ 60</td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-mono text-[#E5E2E3]">11:15</td>
                  <td className="py-3.5 font-medium text-white">Camila Souza</td>
                  <td className="py-3.5 text-[#9A9DA3]">Limpeza de pele</td>
                  <td className="py-3.5">
                    <StatusBadge status="concluido" />
                  </td>
                  <td className="py-3.5 font-mono text-[#34E5A0] text-right font-medium">R$ 240</td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-mono text-[#E5E2E3]">14:00</td>
                  <td className="py-3.5 font-medium text-white">Bruno Lima</td>
                  <td className="py-3.5 text-[#9A9DA3]">Corte social</td>
                  <td className="py-3.5">
                    <StatusBadge status="noshow" />
                  </td>
                  <td className="py-3.5 font-mono text-[#34E5A0] text-right font-medium">R$ 80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
