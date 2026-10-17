import React from 'react'

interface Step {
  step: string
  badge: string
  title: string
  desc: string
  tags: string[]
  link?: {
    label: string
    href: string
  }
}

const STEPS: Step[] = [
  {
    step: '01',
    badge: 'CONFIGURAÇÃO',
    title: 'Setup e Regras do Estabelecimento',
    desc: 'Cadastre sua equipe, serviços e horários em poucos minutos. Defina a exigência de sinal via Pix para confirmar reservas e configure as regras de comissão dos profissionais.',
    tags: ['Agenda por Profissional', 'Sinal via Pix', 'Cálculo de Comissões', 'Prevenção de Conflitos'],
  },
  {
    step: '02',
    badge: 'WHATSAPP COM IA',
    title: 'Recepcionista Virtual 24 Horas',
    desc: 'A inteligência artificial atende seus clientes no WhatsApp com conversação natural: identifica o serviço, confere a agenda em tempo real e marca o horário — mesmo de portas fechadas.',
    tags: ['Atendimento 24/7', 'Conversação Natural', 'Atendimento Híbrido', 'Sem Espera'],
  },
  {
    step: '03',
    badge: 'RESERVA & PIX',
    title: 'Sinal via Pix e Bloqueio em Tempo Real',
    desc: 'O cliente garante o horário com pagamento antecipado do sinal via Pix. O sistema valida e bloqueia a vaga instantaneamente, eliminando conflitos de horários e reduzindo o no-show.',
    tags: ['Redução de Faltas', 'Sinal Antecipado Pix', 'Zero Horários Duplicados', 'Lembretes Automáticos'],
  },
  {
    step: '04',
    badge: 'GESTÃO & REPASSES',
    title: 'Atendimento Concluído e Comissões',
    desc: 'Ao finalizar o serviço, o Lira calcula automaticamente a comissão de cada profissional e o lucro da casa. Gestão completa do estabelecimento e modelo white-label para agências.',
    tags: ['Comissões Automáticas', 'Relatórios em Tempo Real', 'Gestão Multi-unidade', 'Modelo White-Label'],
    link: {
      label: 'TESTAR 14 DIAS GRÁTIS',
      href: '#contato',
    },
  },
]

interface StepCardProps {
  step: Step
  isLeft: boolean
}

const StepCard: React.FC<StepCardProps> = ({ step, isLeft }) => {
  return (
    <div className="relative w-full group">
      {/* Connector line to the central node on desktop */}
      <div
        aria-hidden="true"
        className={`hidden md:block absolute top-9 w-8 h-px pointer-events-none ${
          isLeft
            ? 'right-[-32px] bg-gradient-to-r from-transparent via-[#00D3F2]/40 to-[#00D3F2]'
            : 'left-[-32px] bg-gradient-to-l from-transparent via-[#00D3F2]/40 to-[#00D3F2]'
        }`}
      />

      {/* Main Card */}
      <div className="relative w-full bg-white dark:bg-[#0C0D10]/90 backdrop-blur-md border border-neutral-200 dark:border-[#1A1B22] hover:border-cyan-400 dark:hover:border-[#00D3F2]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_35px_rgba(0,211,242,0.12)]">
        {/* Subtle hover background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.04] dark:from-[#00D3F2]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Top bar: Mobile step pill + Category Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="md:hidden inline-flex items-center px-2 py-0.5 rounded font-mono text-[10px] font-semibold text-cyan-700 dark:text-[#53EAFD] bg-cyan-50 dark:bg-[#00D3F2]/10 border border-cyan-200 dark:border-[#00D3F2]/25">
            ETAPA {step.step}
          </span>
          <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold text-cyan-700 dark:text-[#53EAFD] bg-cyan-50 dark:bg-[#00D3F2]/10 border border-cyan-200 dark:border-[#00D3F2]/25">
            {step.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-[-0.02em] mb-3 group-hover:text-cyan-700 dark:group-hover:text-[#CEFAFE] transition-colors">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed mb-6 font-normal">
          {step.desc}
        </p>

        {/* Pills / Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-[#181920]">
          {step.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-[#121318] border border-neutral-200 dark:border-[#1E2028] text-[11px] sm:text-[12px] font-mono text-neutral-700 dark:text-[#8C9098] group-hover:text-neutral-900 dark:group-hover:text-[#B2B6BF] group-hover:border-neutral-300 dark:group-hover:border-[#2A2D36] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        {step.link && (
          <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-[#181920] flex justify-end">
            <a
              href={step.link.href}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-700 dark:text-[#53EAFD] hover:text-cyan-900 dark:hover:text-[#CEFAFE] transition-colors group/link uppercase tracking-wider"
            >
              <span>{step.link.label}</span>
              <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export const LiraHowItWorks: React.FC = () => {
  return (
    <section id="primeiros-passos" className="py-20 md:py-32 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] relative overflow-hidden transition-colors duration-200">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/[0.04] dark:bg-[#00D3F2]/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching Reference Image */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="text-[12px] font-mono tracking-[0.14em] uppercase text-cyan-700 dark:text-[#53EAFD] font-semibold mb-3 flex items-center gap-2">
            <span>02 // COMO FUNCIONA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.1] mb-4">
            Como funciona na prática<span className="text-cyan-600 dark:text-[#00D3F2]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] font-normal max-w-2xl leading-relaxed">
            Enquanto você cuida dos seus clientes, a Lira cuida da sua agenda — do primeiro WhatsApp ao cálculo das comissões.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Central Vertical Line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-4 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/20 via-cyan-500/40 to-cyan-400/20 dark:from-[#14454F]/20 dark:via-[#00D3F2]/40 dark:to-[#14454F]/20"
          />

          {/* Mobile Left Vertical Line */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-5 top-4 bottom-8 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-500/40 to-cyan-400/20 dark:from-[#14454F]/20 dark:via-[#00D3F2]/40 dark:to-[#14454F]/20"
          />

          {/* Steps List */}
          <div className="space-y-12 md:space-y-20">
            {STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={step.step} className="relative">
                  {/* Desktop Center Node + Step label */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center z-20">
                    {/* Ring Node */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white dark:bg-[#070708] border-2 border-cyan-500 dark:border-[#00D3F2] shadow-[0_0_12px_rgba(0,211,242,0.6)] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-cyan-500 dark:bg-[#00D3F2]" />
                    </div>

                    {/* Step label beside the node */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 font-mono text-[11px] font-semibold text-cyan-700 dark:text-[#53EAFD] tracking-wider whitespace-nowrap flex items-center gap-1.5 ${
                        isLeft ? 'left-6 flex-row' : 'right-6 flex-row-reverse'
                      }`}
                    >
                      <span>ETAPA {step.step}</span>
                      <span className="text-[10px] opacity-70">{isLeft ? '→' : '←'}</span>
                    </div>
                  </div>

                  {/* Mobile Node */}
                  <div className="md:hidden absolute left-5 top-7 -translate-x-1/2 z-20">
                    <div className="w-3 h-3 rounded-full bg-white dark:bg-[#070708] border-2 border-cyan-500 dark:border-[#00D3F2] shadow-[0_0_10px_rgba(0,211,242,0.5)] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-cyan-500 dark:bg-[#00D3F2]" />
                    </div>
                  </div>

                  {/* Grid for alternating layout on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Left Column */}
                    <div className={`${isLeft ? 'block' : 'hidden md:block md:invisible'} pl-12 md:pl-0`}>
                      {isLeft && <StepCard step={step} isLeft={true} />}
                    </div>

                    {/* Right Column */}
                    <div className={`${!isLeft ? 'block' : 'hidden md:block md:invisible'} pl-12 md:pl-0`}>
                      {!isLeft && <StepCard step={step} isLeft={false} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
