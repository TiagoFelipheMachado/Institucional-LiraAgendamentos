import React from 'react'

export const LiraAIFlow: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Entrada',
      desc: 'Mensagem no WhatsApp chega pela Evolution API e espelha no Chatwoot instantaneamente.',
    },
    {
      num: '2',
      title: 'Compreensão',
      desc: 'n8n orquestra o LLM, que extrai data, serviço solicitado e profissional preferido.',
    },
    {
      num: '3',
      title: 'Ação e Cobrança',
      desc: 'A API trava o horário na grade e devolve o link Pix de sinal dentro da conversa.',
    },
    {
      num: '4',
      title: 'Transbordo Humano',
      desc: 'O bot silencia de forma suave e um atendente assume pelo Chatwoot com contexto 100% preservado.',
    },
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-neutral-50/70 dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-cyan-800 dark:text-[#CEFAFE]">
              AUTOMAÇÃO INTELIGENTE & WHATSAPP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-4">
            Conversa com a IA e transbordo humano
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3]">
            O cliente agenda naturalmente pelo WhatsApp. A IA cuida da qualificação e cobrança do
            sinal, e o seu atendente entra apenas nos momentos estratégicos.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white dark:bg-[#0E1A1E]/80 border border-neutral-200 dark:border-[#14454F] rounded-[16px] p-6 relative group hover:border-cyan-400 dark:hover:border-[#00D3F2]/50 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 dark:bg-[#00D3F2]/20 dark:border-[#00D3F2]/50 dark:text-[#53EAFD] font-mono font-semibold text-xs flex items-center justify-center">
                  {step.num}
                </span>
                <h4 className="text-base font-semibold text-neutral-900 dark:text-white">{step.title}</h4>
              </div>
              <p className="text-[13px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp Interaction Simulator from Design Section 13 */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-[#0B0F19] border border-neutral-200 dark:border-[#14454F] rounded-[24px] overflow-hidden shadow-md dark:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
          {/* Header of WhatsApp Chat */}
          <div className="px-6 py-4 bg-neutral-100 dark:bg-[#070708] border-b border-neutral-200 dark:border-[#14454F] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9034F3] to-[#00D3F2] flex items-center justify-center text-white font-semibold text-sm">
                LA
              </div>
              <div>
                <div className="text-[14px] font-semibold text-neutral-900 dark:text-white">Lira IA • Atendimento</div>
                <div className="text-[11px] text-emerald-600 dark:text-[#34E5A0] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#34E5A0]" />
                  Online • Evolution API + Chatwoot
                </div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-cyan-800 dark:text-[#CEFAFE] px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F]">
              IA ATIVA
            </span>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-4 bg-neutral-50/80 dark:bg-[#070708]/60">
            {/* Customer Message */}
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-[16px] rounded-tl-[4px] bg-white dark:bg-[#1A1B1D] border border-neutral-200 dark:border-white/5 p-3.5 text-[14px] text-neutral-800 dark:text-[#E5E2E3] shadow-xs">
                <p>Tem horário pra corte amanhã de tarde?</p>
                <span className="text-[10px] font-mono text-neutral-400 dark:text-[#9A9DA3] block text-right mt-1">
                  14:22
                </span>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-[16px] rounded-tr-[4px] bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] p-3.5 text-[14px] text-neutral-900 dark:text-white shadow-xs">
                <p>Tenho 14:00 e 16:30 com o Rafael. Qual prefere?</p>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-[#53EAFD] block text-right mt-1">
                  14:22 • IA
                </span>
              </div>
            </div>

            {/* Customer Choice */}
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-[16px] rounded-tl-[4px] bg-white dark:bg-[#1A1B1D] border border-neutral-200 dark:border-white/5 p-3.5 text-[14px] text-neutral-800 dark:text-[#E5E2E3] shadow-xs">
                <p>16:30 tá perfeito!</p>
                <span className="text-[10px] font-mono text-neutral-400 dark:text-[#9A9DA3] block text-right mt-1">
                  14:23
                </span>
              </div>
            </div>

            {/* Lock Slot & Pix Signal */}
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-[16px] rounded-tr-[4px] bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] p-4 text-[13px] text-neutral-900 dark:text-white space-y-2 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-cyan-200 dark:border-[#14454F]/50">
                  <span className="font-mono text-cyan-800 dark:text-[#CEFAFE] text-[11px] uppercase font-semibold">
                    HORÁRIO TRAVADO
                  </span>
                  <span className="text-amber-700 dark:text-[#FFE17D] font-mono text-[11px]">Expira em 30 min</span>
                </div>
                <p>
                  Perfeito! Horário pré-reservado: <strong>Amanhã às 16:30 com Rafael</strong>.
                </p>
                <div className="p-2.5 rounded-[8px] bg-white dark:bg-[#070708] border border-cyan-200 dark:border-[#14454F] font-mono text-[12px] flex items-center justify-between">
                  <span className="text-emerald-600 dark:text-[#34E5A0]">Sinal Pix: R$ 30,00</span>
                  <span className="text-cyan-600 dark:text-[#00D3F2] underline cursor-pointer">Copiar Pix Copia e Cola</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-[#53EAFD] block text-right">
                  14:23 • IA
                </span>
              </div>
            </div>

            {/* System Rule Notice from Section 13 */}
            <div className="py-2 flex items-center justify-center">
              <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F] text-[11px] font-mono text-cyan-800 dark:text-[#53EAFD]">
                ATENDENTE ASSUMIU A CONVERSA COM CONTEXTO PRESERVADO
              </span>
            </div>

            <div className="text-center text-[12px] font-mono text-neutral-500 dark:text-[#9A9DA3] pt-2">
              * O estado é sempre dito do ponto de vista do salão:{' '}
              <span className="text-amber-700 dark:text-[#FFE17D] font-semibold">AGUARDANDO SINAL</span> (nunca
              PENDING_PAYMENT)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
