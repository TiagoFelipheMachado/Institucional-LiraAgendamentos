import React from 'react'
import { LiraSitePage, LiraCardGrid } from './SitePage'
import { LiraHero } from './Hero'
import { LiraFeatureHighlights } from './FeatureHighlights'
import { LiraTrustSegments } from './TrustSegments'
import { LiraChallenges } from './Challenges'
import { LiraHowItWorks } from './HowItWorks'
import { LiraPlanTeaser } from './PlanTeaser'
import { LiraFAQ } from './FAQ'
import { FAQ_ITEMS } from './siteContent'

// Entry points to the detailed pages that used to be sections of this one-pager.
const EXPLORE = [
  { icon: 'widgets', title: 'Funcionalidades', desc: 'Agenda online, IA no WhatsApp, sinal via Pix, comissões, caixa e white-label.', href: '/funcionalidades' },
  { icon: 'storefront', title: 'Segmentos', desc: 'Barbearias, salões, clínicas de estética, podologia, esmalterias e studios.', href: '/segmentos' },
  { icon: 'sell', title: 'Planos', desc: 'A partir de R$ 69,90/mês no plano anual, com 14 dias de teste grátis.', href: '/planos' },
  { icon: 'diamond', title: 'Sobre a Lira', desc: 'A plataforma all-in-one para clínicas e barbearias premium.', href: '/sobre' },
]

export const LiraLandingPage: React.FC = () => {
  return (
    <LiraSitePage>
      <LiraHero />
      <LiraFeatureHighlights />
      <LiraTrustSegments />
      <LiraChallenges />
      <LiraHowItWorks />
      <LiraCardGrid title="Conheça o Lira" subtitle="Explore cada parte da plataforma em detalhes." cards={EXPLORE} muted />
      <LiraPlanTeaser />
      <LiraFAQ items={FAQ_ITEMS.slice(0, 4)} />
    </LiraSitePage>
  )
}
