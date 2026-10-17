'use client'

import React, { useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Preciso instalar alguma coisa?',
    answer:
      'Não. O Lira é 100% online e funciona direto no navegador, tanto no computador quanto no celular. Seus clientes agendam pelo link ou WhatsApp sem precisar baixar nenhum aplicativo.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'Temos planos a partir de R$ 97/mês no plano Start e R$ 197/mês no plano Plus, além do plano White-Label sob medida para agências e franquias. Você pode conferir os recursos completos na seção de planos acima.',
  },
  {
    question: 'Como funciona o teste grátis?',
    answer:
      'Você pode experimentar o Lira sem taxa de adesão ou fidelidade. Teste todos os recursos de agenda inteligente, lembretes automáticos e gestão de equipe na prática.',
  },
  {
    question: 'Consigo migrar meus dados de outro sistema?',
    answer:
      'Sim! Nossa equipe auxilia na importação da sua base de clientes, histórico de agendamentos e catálogo de serviços durante o setup inicial, sem custo adicional.',
  },
  {
    question: 'O sinal via Pix é obrigatório para todos os agendamentos?',
    answer:
      'Não. A cobrança do sinal antecipado é configurável por serviço e por profissional: você decide quais procedimentos exigem o adiantamento para confirmar o horário e zerar as faltas.',
  },
  {
    question: 'O Clube de Assinaturas está em qual plano?',
    answer:
      'A funcionalidade de planos recorrentes e clube de assinaturas está disponível a partir do plano Plus, permitindo criar mensalidades automáticas de corte, barba, procedimentos ou estética.',
  },
  {
    question: 'Como funciona o White-Label para agências?',
    answer:
      'A agência configura os 6 tokens de marca (acento, superfície, texto, raio, fonte e contraste) e o sistema deriva automaticamente o restante da interface, mantendo a identidade visual do cliente ou rede.',
  },
]

export const LiraFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title — Left-aligned matching reference image */}
        <div className="mb-8 sm:mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-neutral-900 dark:text-white">
            Perguntas{' '}
            <span className="font-serif italic font-normal text-purple-600 dark:text-purple-400">
              frequentes
            </span>
          </h2>
        </div>

        {/* Accordion List with subtle dividing lines */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            const answerId = `faq-answer-${i}`

            return (
              <div key={item.question} className="transition-colors">
                <button
                  type="button"
                  data-testid="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
                >
                  <span className="text-[15px] sm:text-[17px] font-semibold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors pr-2">
                    {item.question}
                  </span>

                  {/* Circular Purple Plus Button */}
                  <span
                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-purple-600 text-white dark:bg-purple-500 dark:text-neutral-950 rotate-45 shadow-sm'
                        : 'bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:hover:bg-purple-900/80'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="pb-5 sm:pb-6 pr-8 text-[14px] sm:text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed animate-in fade-in duration-200 font-normal"
                  >
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
