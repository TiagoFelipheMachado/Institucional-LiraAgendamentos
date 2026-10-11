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
import { LiraNiches } from './Niches'
import { LiraAIFlow } from './AIFlow'
import { LiraTestimonials } from './Testimonials'
import { LiraRoiCalculator } from './RoiCalculator'
import { LiraPricing } from './Pricing'
import { LiraWhiteLabelSimulator } from './WhiteLabelSimulator'
import { LiraFAQ } from './FAQ'
import { LiraContactSection } from './ContactSection'
import { LiraFooter } from './Footer'
import { LiraWhatsAppButton } from './WhatsAppButton'

export const LiraLandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#070708] text-[#E5E2E3] selection:bg-[#00D3F2]/30 selection:text-[#00D3F2]">
      <LiraNavbar />
      <LiraHero />
      <LiraFeatureHighlights />
      <LiraTrustSegments />
      <LiraChallenges />
      {/* <LiraMetricsPreview /> */}
      <LiraHowItWorks />
      <LiraPillars />
      <LiraProducts />
      <LiraNiches />
      <LiraAIFlow />
      <LiraTestimonials />
      <LiraRoiCalculator />
      <LiraPricing />
      <LiraWhiteLabelSimulator />
      <LiraFAQ />
      <LiraContactSection />
      <LiraFooter />
      <LiraWhatsAppButton />
    </main>
  )
}
