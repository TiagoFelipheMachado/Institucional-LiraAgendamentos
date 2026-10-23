'use client'

import React, { useState } from 'react'
import { FAQ_ITEMS, type FaqItem } from './siteContent'

export const LiraFAQ: React.FC<{ items?: FaqItem[] }> = ({ items = FAQ_ITEMS }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] text-neutral-900 dark:text-[#E5E2E3] transition-colors duration-200 overflow-hidden"
    >
      {/* Background ambient glow matching Lira design system */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching Lira site identity */}
        <div className="mb-10 sm:mb-12 text-left">

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.12] mb-3">
            Perguntas{' '}
            <span className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
              frequentes.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] font-normal leading-relaxed">
            Tudo o que você precisa saber para transformar a rotina do seu espaço com o Lira.
          </p>
        </div>

        {/* Accordion List with polished dividing lines matching Lira identity */}
        <div className="border-t border-neutral-200 dark:border-[#1E202B] divide-y divide-neutral-200 dark:divide-[#1E202B]">
          {items.map((item, i) => {
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
                  <span className="text-[15px] sm:text-[17px] font-medium text-neutral-900 dark:text-[#E5E2E3] group-hover:text-cyan-700 dark:group-hover:text-[#CEFAFE] transition-colors pr-2">
                    {item.question}
                  </span>

                  {/* Circular Toggle Button aligned with Lira CTA / Icon standards */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-[#070708] dark:border-white rotate-45 shadow-sm'
                        : 'bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-[#0E1A1E] dark:text-[#9A9DA3] dark:border-[#14454F] group-hover:border-cyan-400 dark:group-hover:border-[#00D3F2]/50 group-hover:text-cyan-600 dark:group-hover:text-[#53EAFD]'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
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
                    className="pb-5 sm:pb-6 pr-8 text-[14px] sm:text-[15px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed animate-in fade-in duration-200 font-normal"
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
