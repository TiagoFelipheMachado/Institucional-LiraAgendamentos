import type { Metadata } from 'next'
import React from 'react'
import { LiraSitePage, LiraPageHero, LiraCardGrid } from '@/components/lira/SitePage'
import { LiraPillars } from '@/components/lira/Pillars'
import { LiraProducts } from '@/components/lira/Products'
import { LiraCalendarView } from '@/components/lira/CalendarView'
import { LiraAIFlow } from '@/components/lira/AIFlow'
import { FEATURES } from '@/components/lira/siteContent'

const description =
  'Agendamento online, atendimento com IA no WhatsApp, sinal via Pix, comissões automáticas, fechamento de caixa e white-label em uma única plataforma.'

export const metadata: Metadata = {
  title: 'Funcionalidades | Lira Agendamentos',
  description,
  openGraph: { title: 'Funcionalidades | Lira Agendamentos', description, images: [{ url: '/website-template-OG.webp' }] },
}

export default function FuncionalidadesPage() {
  return (
    <LiraSitePage>
      <LiraPageHero
        breadcrumb={[{ label: 'Funcionalidades' }]}
        eyebrow="Funcionalidades"
        title="Tudo o que o seu negócio precisa,"
        highlight="em um só lugar."
        description={description}
      />
      <LiraCardGrid
        title="Conheça cada recurso"
        cards={FEATURES.map((f) => ({ icon: f.icon, title: f.label, desc: f.metaDescription, href: `/funcionalidades/${f.slug}` }))}
        muted
      />
      <LiraPillars />
      <LiraProducts />
      <LiraCalendarView />
      <LiraAIFlow />
    </LiraSitePage>
  )
}
