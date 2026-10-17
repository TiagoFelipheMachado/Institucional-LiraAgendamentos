import React from 'react'
import { LiraNavbar } from './Navbar'
import { LiraHero } from './Hero'
import { LiraFeatureHighlights } from './FeatureHighlights'
import { LiraTrustSegments } from './TrustSegments'
import { LiraChallenges } from './Challenges'
import { LiraMetricsPreview } from './MetricsPreview'
import { LiraHowItWorks } from './HowItWorks'
import { LiraPillars } from './Pillars'
import { LiraProducts } from './Products'
import { LiraCalendarView } from './CalendarView'
import { LiraAIFlow } from './AIFlow'
import { LiraSegments } from './Segments'
import { LiraPlanTeaser } from './PlanTeaser'
import { LiraPricing } from './Pricing'
import { LiraFAQ } from './FAQ'
import { LiraContactSection } from './ContactSection'
import { LiraFooter } from './Footer'
import { LiraWhatsAppButton } from './WhatsAppButton'

export const LiraLandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#070708] text-neutral-900 dark:text-[#E5E2E3] selection:bg-[#00D3F2]/30 selection:text-cyan-800 dark:selection:text-[#00D3F2] transition-colors duration-200">
      <LiraNavbar />
      <LiraHero />
      <LiraFeatureHighlights />
      <LiraTrustSegments />
      <LiraChallenges />
      {/* <LiraMetricsPreview /> */}
      <LiraHowItWorks />
      <LiraPillars />
      <LiraProducts />
      <LiraCalendarView />
      <LiraAIFlow />
      <LiraSegments />
      <LiraPlanTeaser />
      <LiraPricing />
      <LiraFAQ />
      <LiraContactSection />
      <LiraFooter />
      <LiraWhatsAppButton />
    </main>
  )
}
