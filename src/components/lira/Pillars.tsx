import React from 'react'
import Link from 'next/link'

export const LiraPillars: React.FC = () => {
  const challenges = [
    {
      stepNumber: '1',
      category: 'DENTRO DA LEI',
      title: 'Fique dentro da lei e evite grandes problemas',
      desc: 'Garanta uma operação estruturada e transparente para a sua barbearia ou clínica de estética. Com o Lira, o fluxo de agendamentos, o controle de comissões e o repasse para os profissionais ficam devidamente organizados, trazendo segurança e conformidade para o seu negócio.',
      solutionTag: 'Conformidade e Recepção:',
      solution:
        'Operação estruturada com registro transparente de repasses e recepção livre de atritos para focar no acolhimento presencial.',
    },
    {
      stepNumber: '2',
      category: 'MENOS IMPOSTO',
      title: 'Controle financeiro inteligente e sem dor de cabeça',
      desc: 'Tenha uma visão clara do faturamento do seu estabelecimento. O Lira Agendamentos ajuda a separar a produção bruta, acompanhar comissões em aberto e calcular taxas de repasse automaticamente, permitindo um fechamento de caixa rápido e automatizado.',
      solutionTag: 'Divisão Clara e Redução de Perdas:',
      solution:
        'Separação automática da cota-parte, combate a faltas com sinal Pix e comissões calculadas em tempo real.',
    },
    {
      stepNumber: '3',
      category: 'PROTEÇÃO',
      title: 'Dados organizados: proteção operacional e financeira',
      desc: 'Mantenha o cadastro de clientes, o histórico de visitas, o catálogo de serviços e o controle de colaboradores centralizados em uma plataforma moderna com interface em Modo Dark e 100% responsiva para computadores e celulares. Se precisar de relatórios e dados do desempenho da equipe, eles estarão prontos.',
      solutionTag: 'Plataforma Centralizada:',
      solution:
        'Histórico seguro, controle de colaboradores e relatórios completos em 1 clique para auditoria e gestão.',
    },
  ]

  const howItWorksSteps = [
    {
      step: '1',
      title: 'Página Pública e Agendamento Online',
      desc: 'Seus clientes acessam um link exclusivo com o slug do seu estabelecimento e marcam horários em poucos cliques pelo celular através de um fluxo simples: escolha do serviço → do profissional → da data e horário → confirmação dos dados.',
    },
    {
      step: '2',
      title: 'Central de Atendimento (Chatwoot)',
      desc: 'Centralize as conversas do WhatsApp em uma fila organizada onde sua equipe pode assumir, responder e alternar facilmente entre a Inteligência Artificial e o atendimento humano na mesma tela.',
      linkText: 'Conhecer central e fluxo de IA →',
      linkHref: '#fluxo-ia',
    },
    {
      step: '3',
      title: 'Gestão de Equipe e Comissões Automatizadas',
      desc: 'Acompanhe o painel financeiro em tempo real com gráficos de faturamento por profissional, controle de agendamentos confirmados e cálculo automático de repasses e comissões.',
    },
    {
      step: '4',
      title: 'Fechamento de Caixa Rápido',
      desc: 'Verifique o volume de atendimentos e a produção bruta do dia ou do mês com poucos cliques, eliminando o uso de planilhas manuais e o retrabalho operacional.',
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
        {/* Top Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.15] mb-5">
            Menos imposto,{' '}
            <span className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
              dentro da lei
            </span>{' '}
            — e no automático.
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal max-w-3xl mx-auto">
            O Lira Agendamentos foi desenvolvido para otimizar a gestão financeira e o agendamento do seu estabelecimento, eliminando as horas perdidas no WhatsApp respondendo mensagens manuais, combatendo as faltas de clientes (no-shows) e organizando a rotina da sua equipe sem planilhas confusas.
          </p>
        </div>

        {/* 3 Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto mb-20 sm:mb-24">
          {challenges.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] hover:border-cyan-500/50 dark:hover:border-[#00D3F2]/40 rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
            >
              {/* Top ambient hover glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#00D3F2]/[0.03] rounded-full blur-xl pointer-events-none" />

              <div>
                {/* Number Badge + Category */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F] text-cyan-700 dark:text-[#00D3F2] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {card.stepNumber}
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-[#9A9DA3] uppercase font-semibold">
                    {card.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-[22px] font-semibold text-neutral-900 dark:text-white mb-3 tracking-[-0.02em] leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-neutral-600 dark:text-[#9A9DA3] text-[14px] sm:text-[15px] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Resolution Block */}
              <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-[#1A1C24]">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-[#53EAFD] block mb-1.5">
                  {card.solutionTag}
                </span>
                <p className="text-[13px] text-neutral-500 dark:text-[#8A8F99] leading-relaxed font-normal">
                  {card.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Como funciona? Section */}
        <div className="max-w-6xl mx-auto pt-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#00D3F2]" />
              <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-cyan-800 dark:text-[#CEFAFE]">
                COMO FUNCIONA
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-neutral-900 dark:text-[#E5E2E3] mb-3">
              Fluxo prático e inteligente para sua equipe
            </h3>
            <p className="text-neutral-600 dark:text-[#9A9DA3] text-sm sm:text-base leading-relaxed">
              Elimine o retrabalho manual e foque na excelência do acolhimento presencial
            </p>
          </div>

          {/* 4 Steps Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] hover:border-cyan-500/50 dark:hover:border-[#00D3F2]/40 rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
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

                  <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal pl-11">
                    {step.desc}
                  </p>
                </div>

                {step.linkText && step.linkHref && (
                  <div className="pt-4 pl-11">
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

          {/* Centralized Call to Action Button - Site Standard */}
          <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
            <Link
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.15)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_4px_24px_rgba(255,255,255,0.18)] transition-all active:scale-[0.98]"
            >
              Quero o Lira no meu negócio
            </Link>
          </div>
        </div>

        {/* Bottom Operational Note / Disclaimer */}
        <div className="pt-8 border-t border-neutral-200 dark:border-[#1A1B1D]">
          <p className="text-[12px] text-neutral-500 dark:text-[#8A8F99] text-center max-w-4xl mx-auto leading-relaxed font-normal">
            O Lira Agendamentos centraliza a recepção, a agenda dos profissionais, a cobrança de sinal antecipado e o comissionamento automático. Sem planilhas manuais e sem retrabalho, liberando sua equipe para focar no atendimento presencial com excelência.
          </p>
        </div>
      </div>
    </section>
  )
}
