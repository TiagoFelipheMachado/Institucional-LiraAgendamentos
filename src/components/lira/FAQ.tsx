'use client'

import React, { useState } from 'react'
import { Icon } from './Icon'

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Preciso instalar algum sistema?',
    answer:
      'Não. O Lira é 100% web: o back-office roda no navegador e o widget de agendamento é embedado no seu site atual com uma linha de código — nada para instalar ou manter.',
  },
  {
    question: 'Como funciona o teste grátis?',
    answer:
      'Você ativa o plano Lira Start ou Lira Plus normalmente e usa o 1º mês com o desconto do cupom de lançamento, sem compromisso de permanência.',
  },
  {
    question: 'Consigo migrar meus dados de outro sistema?',
    answer:
      'Sim. Nossa equipe importa sua base de clientes, histórico de agendamentos e catálogo de serviços durante o setup personalizado, sem custo adicional.',
  },
  {
    question: 'O sinal via Pix é obrigatório para todos os agendamentos?',
    answer:
      'Não. A cobrança automática do sinal é configurável por serviço e por profissional — você decide onde faz sentido travar o horário mediante pagamento.',
  },
  {
    question: 'Como funciona o White-Label para agências?',
    answer:
      'A agência configura os 6 tokens de marca (acento, superfície, texto, raio, fonte e contraste) e o sistema deriva automaticamente o restante da interface, garantindo contraste mínimo de 3:1 em qualquer combinação.',
  },
]

export const LiraFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0092B8] dark:bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-cyan-800 dark:text-[#CEFAFE]">
              DÚVIDAS FREQUENTES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            const answerId = `faq-answer-${i}`

            return (
              <div
                key={item.question}
                className="bg-neutral-50 dark:bg-[#0E1A1E]/60 border border-neutral-200 dark:border-[#14454F] rounded-[16px] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  data-testid="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 min-h-[44px] text-left text-[15px] font-medium text-neutral-900 dark:text-white hover:text-cyan-700 dark:hover:text-[#53EAFD] transition-colors"
                >
                  <span>{item.question}</span>
                  <Icon
                    name={isOpen ? 'remove' : 'add'}
                    label={isOpen ? 'Recolher resposta' : 'Expandir resposta'}
                    size={20}
                    className="shrink-0 text-neutral-500 dark:text-[#9A9DA3]"
                  />
                </button>
                {isOpen && (
                  <div id={answerId} className="px-5 pb-4 text-[14px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
