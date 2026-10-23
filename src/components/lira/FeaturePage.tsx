import React from 'react'
import { LiraSitePage, LiraPageHero, LiraCardGrid } from './SitePage'
import { LiraFAQ } from './FAQ'
import { LiraCalendarView } from './CalendarView'
import { LiraAIFlow } from './AIFlow'
import { LiraRoiCalculator } from './RoiCalculator'
import { LiraProducts } from './Products'
import { LiraWhiteLabelSimulator } from './WhiteLabelSimulator'
import { FEATURES, type FeatureContent } from './siteContent'

// The home-page showcase that best illustrates each feature.
const VISUALS: Record<string, React.FC | undefined> = {
  agendamento: LiraCalendarView,
  'atendimento-ia': LiraAIFlow,
  'pix-no-show': LiraRoiCalculator,
  comissoes: LiraProducts,
  'white-label': LiraWhiteLabelSimulator,
}

export const LiraFeaturePage: React.FC<{ feature: FeatureContent }> = ({ feature }) => {
  const Visual = VISUALS[feature.slug]
  const others = FEATURES.filter((f) => f.slug !== feature.slug)

  return (
    <LiraSitePage>
      <LiraPageHero
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: feature.label }]}
        eyebrow={feature.label}
        title={feature.title}
        highlight={feature.highlight}
        description={feature.description}
      />

      <LiraCardGrid title="O que muda na sua rotina" cards={feature.benefits} muted />

      {Visual && <Visual />}

      <section className="py-20 md:py-28 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-10">Como funciona</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {feature.steps.map((step, i) => (
              <li
                key={step}
                className="bg-neutral-50 dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] rounded-[20px] p-6"
              >
                <span className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F] text-cyan-700 dark:text-[#53EAFD] font-mono font-bold text-xs flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <p className="text-[15px] text-neutral-700 dark:text-[#B5B8BE] leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LiraFAQ items={feature.faq} />

      <LiraCardGrid
        title="Outras funcionalidades"
        cards={others.map((f) => ({ icon: f.icon, title: f.label, desc: f.metaDescription, href: `/funcionalidades/${f.slug}` }))}
        muted
      />
    </LiraSitePage>
  )
}
