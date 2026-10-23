import React from 'react'
import Link from 'next/link'

export const LiraPillars: React.FC = () => {
  const howItWorksSteps = [
    {
      step: '1',
      title: 'Link Personalizado de Agendamento',
      desc: 'Seus clientes acessam um link exclusivo com a identidade visual do seu espaço e concluem o agendamento em poucos toques pelo celular: serviço → especialista → horário ideal → confirmação.',
    },
    {
      step: '2',
      title: 'Central Integrada de Mensagens (WhatsApp)',
      desc: 'Centralize conversas em uma fila de atendimento inteligente, onde a IA tira dúvidas e agenda horários automaticamente, com alternância imediata para a sua equipe.',
      linkText: 'Conhecer central e fluxo de IA →',
      linkHref: '/funcionalidades/atendimento-ia',
    },
    {
      step: '3',
      title: 'Rateio Automático de Comissões',
      desc: 'Monitore a produção individual e o faturamento geral em tempo real, com relatórios transparentes que facilitam o repasse aos profissionais.',
    },
    {
      step: '4',
      title: 'Fechamento de Caixa sem Retrabalho',
      desc: 'Finalize o expediente com um clique: apure volume de clientes, entradas via Pix e lucro líquido sem perder horas com cálculos manuais.',
    },
  ]

  return (
    <section
      id="pilares"
      className="py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] text-neutral-900 dark:text-[#E5E2E3] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient glow matching Lira site standard */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Como funciona / Fluxo Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-neutral-900 dark:text-[#E5E2E3] mb-3">
              Fluxo prático e inteligente para sua equipe
            </h2>
            <p className="text-neutral-600 dark:text-[#9A9DA3] text-sm sm:text-base leading-relaxed">
              Elimine o retrabalho manual e foque na excelência do acolhimento presencial
            </p>
          </div>

          {/* 4 Steps Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] hover:border-cyan-500/50 dark:hover:border-[#00D3F2]/40 rounded-[20px] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F] text-cyan-700 dark:text-[#53EAFD] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white tracking-[-0.01em]">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal pl-0 sm:pl-11">
                    {step.desc}
                  </p>
                </div>

                {step.linkText && step.linkHref && (
                  <div className="pt-3 sm:pt-4 pl-0 sm:pl-11">
                    <Link
                      href={step.linkHref}
                      className="text-xs font-semibold text-cyan-700 dark:text-[#53EAFD] hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      {step.linkText}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Operational Note directly under the 4 cards */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
            <p className="text-[13px] sm:text-[14px] text-neutral-500 dark:text-[#8A8F99] leading-relaxed font-normal">
              O Lira Agendamentos centraliza a recepção, a agenda dos profissionais, a cobrança de sinal antecipado e o comissionamento automático. Sem planilhas manuais e sem retrabalho, liberando sua equipe para focar no atendimento presencial com excelência.
            </p>
          </div>

          {/* Centralized Call to Action Button - Site Standard */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.15)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_4px_24px_rgba(255,255,255,0.18)] transition-all active:scale-[0.98]"
            >
              Quero o Lira no meu negócio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
