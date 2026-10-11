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
    <section className="bg-[#070708] border-b border-[#1A1B1D] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FEATURE_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-2 shrink-0 px-3.5 py-1.5 rounded-full bg-[#0E1A1E] border border-[#14454F] text-[13px] text-[#E5E2E3] whitespace-nowrap"
            >
              <Icon name={pill.icon} size={16} className="text-[#00D3F2]" />
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
