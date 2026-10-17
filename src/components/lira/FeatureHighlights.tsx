import React from 'react'
import { Icon } from './Icon'

interface FeaturePill {
  label: string
  icon: string
}

const FEATURE_PILLS: FeaturePill[] = [
  { label: 'Agenda online inteligente', icon: 'calendar_month' },
  { label: 'Lembretes automáticos', icon: 'notifications' },
  { label: 'WhatsApp com IA', icon: 'chat' },
  { label: 'Financeiro e comissões', icon: 'account_balance_wallet' },
]

export const LiraFeatureHighlights: React.FC = () => {
  return (
    <section className="bg-neutral-50/70 dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] py-5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FEATURE_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-2 shrink-0 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0E1A1E] border border-neutral-200 dark:border-[#14454F] text-[13px] text-neutral-800 dark:text-[#E5E2E3] shadow-xs dark:shadow-none whitespace-nowrap"
            >
              <Icon name={pill.icon} size={16} className="text-cyan-600 dark:text-[#00D3F2]" />
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
