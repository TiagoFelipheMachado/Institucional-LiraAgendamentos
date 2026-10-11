import React from 'react'
import { Icon } from './Icon'

interface Step {
  num: string
  title: string
  desc: string
  icon: string
}

const STEPS: Step[] = [
  {
    num: '1',
    title: 'Setup Personalizado',
    desc: 'Nossa equipe configura sua IA, regras de negócio, agenda de profissionais e integra o widget ao seu site atual — tudo com a identidade visual da sua marca.',
    icon: 'settings',
  },
  {
    num: '2',
    title: 'Ativação',
    desc: 'O Lira assume as respostas do WhatsApp e os agendamentos online. Sua recepção passa a usar nosso painel de controle intuitivo para gerenciar o fluxo presencial.',
    icon: 'bolt',
  },
  {
    num: '3',
    title: 'Agendamento Autônomo',
    desc: 'Pacientes e clientes marcam, remarcam e recebem lembretes sem intervenção humana. A IA resolve dúvidas comuns e encaminha apenas os casos complexos para a equipe.',
    icon: 'check_circle',
  },
  {
    num: '4',
    title: 'Fechamento Simplificado',
    desc: 'No fim do mês, acesse relatórios precisos de ocupação, no-shows evitados e comissões calculadas. A gestão financeira da operação resolvida em poucos cliques.',
    icon: 'task_alt',
  },
]

export const LiraHowItWorks: React.FC = () => {
  return (
    <section id="primeiros-passos" className="py-20 md:py-28 bg-[#070708] border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              DO ZERO AO OPERACIONAL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Como funciona na prática
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3]">
            Uma transição suave e rápida para o Lira — sem paralisar a operação.
          </p>
        </div>

        <ol className="relative max-w-2xl mx-auto pl-10 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-[#14454F]"
          />
          {STEPS.map((step) => (
            <li key={step.num} className="relative pb-10 last:pb-0">
              <span className="absolute -left-10 sm:-left-12 top-0 w-8 h-8 rounded-full bg-[#0E1A1E] border border-[#00D3F2]/50 text-[#53EAFD] font-mono font-semibold text-[13px] flex items-center justify-center">
                {step.num}
              </span>
              <div className="flex items-center gap-2 mb-2">
                <Icon name={step.icon} size={18} className="text-[#00D3F2]" />
                <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">{step.title}</h3>
              </div>
              <p className="text-[14px] text-[#9A9DA3] leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
