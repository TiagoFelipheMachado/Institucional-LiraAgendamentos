import type { Metadata } from 'next'
import React from 'react'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

export const metadata: Metadata = {
  title: 'Lira Agendamentos | Gestão Inteligente & Atendimento com IA',
  description:
    'Uma plataforma centraliza o agendamento de serviços, atendimento com IA e gestão da agenda — reduzindo até 68% do no-show com cobrança automática de sinal via Pix e transbordo humano instantâneo.',
  openGraph: {
    title: 'Lira Agendamentos | Gestão Inteligente & Atendimento com IA',
    description:
      'Plataforma SaaS White-Label de agendamento de serviços, atendimento ao cliente com IA e gestão de agenda para agências e salões.',
    images: [{ url: '/website-template-OG.webp' }],
  },
}

export default function HomePage() {
  return <LiraLandingPage />
}
