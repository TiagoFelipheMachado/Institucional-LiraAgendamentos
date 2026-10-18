import type { Metadata } from 'next'
import React from 'react'
import { LiraContactPage } from '@/components/lira/ContactPage'

export const metadata: Metadata = {
  title: 'Contato | Lira Agendamentos',
  description:
    'Fale com a equipe de especialistas da Lira Agendamentos. Tire dúvidas sobre a plataforma, solicite uma demonstração ao vivo ou fale com nosso suporte comercial.',
  openGraph: {
    title: 'Contato | Lira Agendamentos',
    description:
      'Fale diretamente com nossa equipe e descubra como o Lira elimina no-shows e automatiza o agendamento do seu negócio.',
    images: [{ url: '/website-template-OG.webp' }],
  },
}

export default function ContatoPage() {
  return <LiraContactPage />
}
