'use client'

import React, { useState } from 'react'
import { calculateNoShowRoi, formatBRL } from '@/utilities/lira/roi'

export const LiraRoiCalculator: React.FC = () => {
  const [appointments, setAppointments] = useState<number>(250)
  const [ticket, setTicket] = useState<number>(85)
  const [noShowRate, setNoShowRate] = useState<number>(22)

  const roi = calculateNoShowRoi({
    monthlyAppointments: appointments,
    averageTicket: ticket,
    currentNoShowRatePercent: noShowRate,
  })

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-white dark:bg-[#070708] border-t border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#0E1A1E] border border-emerald-200 dark:border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#34E5A0]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-emerald-800 dark:text-[#CEFAFE]">
              CALCULADORA DE RETORNO SOBRE O SINAL PIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-4">
            Quanto o seu salão deixa de perder com o Lira?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3]">
            Salões perdem em média de 20% a 30% dos horários por clientes que não comparecem. O Lira
            cobra automaticamente o sinal via Pix e reduz o no-show comprovadamente em{' '}
            <strong className="text-emerald-600 dark:text-[#34E5A0] font-semibold">-68%</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-neutral-50 dark:bg-[#0E1A1E] border border-neutral-200 dark:border-[#14454F] rounded-[20px] p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="appointments-input"
                  className="text-[14px] font-medium text-neutral-800 dark:text-[#E5E2E3]"
                >
                  Agendamentos por mês
                </label>
                <span className="text-[14px] font-mono font-semibold text-cyan-600 dark:text-[#00D3F2]">
                  {appointments} atendimentos
                </span>
              </div>
              <input
                id="appointments-input"
                type="range"
                min="30"
                max="1000"
                step="10"
                value={appointments}
                onChange={(e) => setAppointments(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-[#1A1B1D] rounded-lg appearance-none cursor-pointer accent-[#00D3F2]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 dark:text-[#9A9DA3] font-mono mt-1">
                <span>30</span>
                <span>500</span>
                <span>1.000+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="ticket-input" className="text-[14px] font-medium text-neutral-800 dark:text-[#E5E2E3]">
                  Ticket médio por serviço
                </label>
                <span className="text-[14px] font-mono font-semibold text-emerald-600 dark:text-[#34E5A0]">
                  {formatBRL(ticket)}
                </span>
              </div>
              <input
                id="ticket-input"
                type="range"
                min="30"
                max="400"
                step="5"
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-[#1A1B1D] rounded-lg appearance-none cursor-pointer accent-[#34E5A0]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 dark:text-[#9A9DA3] font-mono mt-1">
                <span>R$ 30</span>
                <span>R$ 200</span>
                <span>R$ 400</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="noshow-input" className="text-[14px] font-medium text-neutral-800 dark:text-[#E5E2E3]">
                  Taxa estimada de No-Show sem sinal
                </label>
                <span className="text-[14px] font-mono font-semibold text-rose-600 dark:text-[#FF4D6D]">
                  {noShowRate}% de faltas
                </span>
              </div>
              <input
                id="noshow-input"
                type="range"
                min="5"
                max="45"
                step="1"
                value={noShowRate}
                onChange={(e) => setNoShowRate(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-[#1A1B1D] rounded-lg appearance-none cursor-pointer accent-[#FF4D6D]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 dark:text-[#9A9DA3] font-mono mt-1">
                <span>5% (Mínimo)</span>
                <span>20% (Média)</span>
                <span>45% (Crítico)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 dark:border-[#14454F]/60 flex items-center justify-between text-[13px] text-neutral-600 dark:text-[#9A9DA3]">
              <span>Métrica real de sistema:</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-emerald-600 dark:text-[#34E5A0] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#34E5A0]" />
                -68% de no-show comprovado
              </span>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-white dark:bg-[#0B0F19] border border-neutral-200 dark:border-[#14454F] rounded-[20px] p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-[#1A1B1D]">
              <span className="text-[12px] font-mono text-neutral-500 dark:text-[#9A9DA3] uppercase tracking-[0.08em]">
                PREJUÍZO ATUAL (SEM O LIRA)
              </span>
              <span className="text-[14px] font-mono text-rose-600 dark:text-[#FF4D6D] font-semibold">
                {formatBRL(roi.monthlyLossWithoutLira)}/mês
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[12px] font-mono text-neutral-500 dark:text-[#9A9DA3] uppercase tracking-[0.08em] block mb-1">
                  HORÁRIOS SALVOS PELO SINAL PIX
                </span>
                <div className="text-3xl font-semibold font-mono text-cyan-600 dark:text-[#53EAFD]">
                  +{roi.recoveredAppointmentsMonthly} atendimentos
                  <span className="text-sm font-normal text-neutral-500 dark:text-[#9A9DA3] ml-2">/mês recuperados</span>
                </div>
              </div>

              <div>
                <span className="text-[12px] font-mono text-neutral-500 dark:text-[#9A9DA3] uppercase tracking-[0.08em] block mb-1">
                  FATURAMENTO EXTRA RECUPERADO POR MÊS
                </span>
                <div className="text-4xl font-semibold font-mono text-emerald-600 dark:text-[#34E5A0]">
                  {formatBRL(roi.recoveredRevenueMonthly)}
                </div>
              </div>

              <div className="p-4 rounded-[12px] bg-cyan-50/70 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#00D3F2]/30">
                <span className="text-[11px] font-mono text-cyan-800 dark:text-[#CEFAFE] uppercase tracking-[0.08em] block mb-0.5 font-semibold">
                  TOTAL RECUPERADO POR ANO
                </span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-900 dark:text-white">
                  {formatBRL(roi.recoveredRevenueAnnual)}
                </div>
                <p className="text-[12px] text-neutral-600 dark:text-[#9A9DA3] mt-1">
                  Valor direto no caixa do salão apenas transformando intenção em compromisso financeiro.
                </p>
              </div>
            </div>

            <a
              href="#contato"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 min-h-[44px] rounded-[12px] text-[14px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_2px_16px_rgba(0,0,0,0.1)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_2px_16px_rgba(255,255,255,0.12)] transition-all"
            >
              Parar de perder dinheiro agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
