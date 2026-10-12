import React from 'react'
import Link from 'next/link'

export const LiraPillars: React.FC = () => {
  const challenges = [
    {
      stepNumber: '1',
      category: 'RECEPÇÃO & ATENDIMENTO',
      title: 'Atenção Dividida',
      desc: 'Sua recepção se divide entre atender pacientes presencialmente, responder o WhatsApp e atender ligações. O resultado? Espera longa e pacientes insatisfeitos.',
      solutionTag: 'Como o Lira resolve:',
      solution:
        'A Amanda IA atende e agenda 24/7 no WhatsApp, permitindo que sua recepção dedique 100% da atenção ao paciente presencial.',
    },
    {
      stepNumber: '2',
      category: 'AGENDA & NO-SHOWS',
      title: 'Cancelamentos de Última Hora',
      desc: 'Pacientes que não aparecem (no-shows) e desmarcam em cima da hora criam buracos na agenda e prejuízos diretos para os profissionais.',
      solutionTag: 'Como o Lira resolve:',
      solution:
        'Cobrança de sinal prévio via Pix e lembretes automáticos na véspera reduzem as faltas em até 85%, blindando o faturamento da equipe.',
    },
    {
      stepNumber: '3',
      category: 'FINANCEIRO & REPASSES',
      title: 'Fechamento Manual',
      desc: 'No fim do mês, calcular repasses, comissões e conciliar pagamentos toma horas preciosas da gestão, sujeitas a erros humanos.',
      solutionTag: 'Como o Lira resolve:',
      solution:
        'Cálculo automático de comissões por profissional, taxas da casa e conciliação em 1 clique no final do dia ou do mês.',
    },
  ]

  const howItWorksSteps = [
    {
      step: '1',
      title: 'Formalize o atendimento com a Amanda IA',
      desc: 'Conecte seu WhatsApp via QR Code em 2 minutos. A IA aprende seus procedimentos, durações e profissionais para responder com linguagem humanizada.',
      linkText: 'Conhecer fluxo da IA →',
      linkHref: '#fluxo-ia',
    },
    {
      step: '2',
      title: 'Defina regras de sinal e comissões',
      desc: 'Configure o sinal via Pix para confirmação antecipada de horários e a taxa ou comissão de cada profissional parceiro da clínica.',
    },
    {
      step: '3',
      title: 'Agendamentos e confirmações no automático',
      desc: 'O paciente escolhe o horário, paga o sinal Pix e o sistema bloqueia a vaga na hora. Notificações automáticas avisam paciente e profissional.',
    },
    {
      step: '4',
      title: 'Deixe o mês fechar sozinho',
      desc: 'No dia que você escolher, as comissões de cada profissional e o saldo líquido da casa saem prontos. O painel mostra tudo sem refazer contas.',
    },
  ]

  return (
    <section
      id="pilares"
      className="py-20 md:py-28 lg:py-32 bg-[#080D1A] text-slate-100 border-b border-slate-800/80 relative overflow-hidden"
    >
      {/* Background ambient glow matching Image 2 */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#6366F1]/15 via-[#8B5CF6]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#00D3F2]/08 via-[#6366F1]/05 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Section */}
        <div className="max-w-4xl mb-14 sm:mb-18">
          {/* Badge / Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6366F1] text-white text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(99,102,241,0.35)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>✦ Solução Completa · Lira Sistema</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-bold tracking-[-0.03em] text-white leading-[1.15] mb-5">
            Operating rhythm,{' '}
            <span className="text-[#A855F7] italic font-serif font-normal">
              simplified
            </span>{' '}
            — the architecture of a focused team.
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            O Lira resolve os três maiores gargalos que drenam o faturamento da sua clínica ou salão: recepção sobrecarregada, cancelamentos de última hora e fechamento financeiro complexo. Cada profissional recebe o que é seu, a agenda roda cheia e tudo fica registrado. Sem planilha e sem refazer contas todo mês.
          </p>
        </div>

        {/* 3 Top Cards Grid (Image 2 style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto mb-16 sm:mb-20">
          {challenges.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#111A2E]/90 border border-slate-800/90 hover:border-[#6366F1]/40 rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_40px_rgba(99,102,241,0.12)] group relative overflow-hidden"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#6366F1]/[0.03] rounded-full blur-xl pointer-events-none" />

              <div>
                {/* Number Badge + Category */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-6 h-6 rounded-full bg-[#6366F1] text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                    {card.stepNumber}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-300 uppercase">
                    {card.category}
                  </span>
                </div>

                {/* Card Title (Preserved exactly) */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white mb-3 tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Card Description (Preserved exactly) */}
                <p className="text-slate-300 text-[14px] sm:text-[15px] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Added Resolution Block (Enhancing without altering original text) */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A855F7] block mb-1.5">
                  {card.solutionTag}
                </span>
                <p className="text-[13px] text-slate-400 leading-relaxed font-normal">
                  {card.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower Section: 2 Columns (Comparison Card + How It Works & CTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: White High-Contrast Practical Breakdown Card */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-[24px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-slate-200/80">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              Na prática, num mês do seu negócio
            </h3>

            {/* Financial Rows */}
            <div className="space-y-2.5 text-sm pb-6 border-b border-slate-100">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600 font-normal">Faturamento médio da clínica / salão</span>
                <span className="font-bold text-slate-900 text-base">R$ 35.000</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600 font-normal">Cota-parte dos profissionais</span>
                <span className="font-bold text-slate-900 text-base">R$ 20.000</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600 font-normal">Cota-parte do estabelecimento</span>
                <span className="font-bold text-slate-900 text-base">R$ 15.000</span>
              </div>
            </div>

            {/* Comparison Cards: ANTES vs DEPOIS */}
            <div className="grid grid-cols-2 gap-3.5 my-6">
              {/* Card Antes */}
              <div className="bg-slate-100/90 rounded-2xl p-4 flex flex-col justify-between border border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  CENÁRIO MANUAL
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight block">
                  R$ 4.200
                </span>
                <span className="text-[11px] text-slate-500 leading-tight block mt-1">
                  perdidos em faltas (12% no-show) e horas gastas calculando comissões
                </span>
              </div>

              {/* Card Depois (Purple Highlight) */}
              <div className="bg-[#FAF5FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">
                  COM O LIRA
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#6D28D9] tracking-tight block">
                  R$ 900
                </span>
                <span className="text-[11px] text-[#7C3AED] leading-tight block mt-1">
                  taxa de no-show cai para &lt; 2% com sinal Pix obrigatório
                </span>
              </div>
            </div>

            {/* Detailed Numbered Items */}
            <div className="space-y-3.5 mb-6">
              <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#6366F1] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Agenda blindada com sinal Pix</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      O paciente paga o sinal de reserva para garantir o horário, eliminando faltas de surpresa.
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#6366F1] shrink-0 whitespace-nowrap">
                  + R$ 3.300
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#6366F1] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Tempo economizado da equipe</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Recepção focada no atendimento presencial e fechamento financeiro em menos de 3 minutos.
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#6366F1] shrink-0 whitespace-nowrap">
                  + 35h livres
                </span>
              </div>
            </div>

            {/* Bottom Purple Banner */}
            <div className="bg-[#6366F1] text-white rounded-2xl p-4.5 sm:p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-200 block">
                  Ganho duplo: fica no caixa do negócio
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight block">
                  R$ 3.300 + 35h por mês
                </span>
              </div>
            </div>

            {/* Disclaimer text */}
            <p className="text-[11px] text-slate-400 mt-4 leading-relaxed font-normal">
              Exemplo ilustrativo baseado no fluxo padrão de clínicas de estética, consultórios de saúde e salões parceiros que ativam cobrança de sinal e automação no Lira.
            </p>
          </div>

          {/* Right Column: "Como funciona ↓" Workflow & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            <div>
              {/* Handwritten/Serif Style Accent Subtitle */}
              <div className="mb-6">
                <span className="text-[#A855F7] font-serif italic text-2xl font-normal tracking-wide">
                  Como funciona ↓
                </span>
              </div>

              {/* 4 Steps List */}
              <div className="space-y-6 sm:space-y-7">
                {howItWorksSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full border border-purple-500/40 bg-purple-950/40 text-purple-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:border-purple-400 group-hover:bg-[#6366F1] group-hover:text-white transition-all">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                      {step.linkText && step.linkHref && (
                        <div className="pt-1">
                          <Link
                            href={step.linkHref}
                            className="text-xs font-semibold text-[#A855F7] hover:text-[#C084FC] inline-flex items-center gap-1 transition-colors"
                          >
                            {step.linkText}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 sm:pt-10">
              <Link
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition-all active:scale-[0.98]"
              >
                Quero o Lira no meu negócio
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Operational Note / Disclaimer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80">
          <p className="text-[12px] text-slate-400 text-center max-w-4xl mx-auto leading-relaxed font-normal">
            O Lira Agendamentos centraliza a recepção, a agenda dos profissionais, a cobrança de sinal antecipado e o comissionamento automático. Sem planilhas manuais e sem retrabalho, liberando sua equipe para focar no atendimento presencial com excelência.
          </p>
        </div>
      </div>
    </section>
  )
}
