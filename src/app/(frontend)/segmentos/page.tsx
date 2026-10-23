import type { Metadata } from 'next'
import React from 'react'
import { LiraSitePage, LiraPageHero } from '@/components/lira/SitePage'
import { LiraSegments } from '@/components/lira/Segments'
import { LiraNiches } from '@/components/lira/Niches'

const description =
  'Barbearias, salões de beleza, clínicas de estética, podologia, esmalterias e studios de sobrancelhas e cílios: o Lira se adapta à rotina de cada segmento.'

export const metadata: Metadata = {
  title: 'Segmentos | Lira Agendamentos',
  description,
  openGraph: { title: 'Segmentos | Lira Agendamentos', description, images: [{ url: '/website-template-OG.webp' }] },
}

export default function SegmentosPage() {
  return (
    <LiraSitePage>
      <LiraPageHero
        breadcrumb={[{ label: 'Segmentos' }]}
        eyebrow="Segmentos"
        title="Feito para quem"
        highlight="vive de agenda."
        description={description}
      />
      <LiraSegments />
      <LiraNiches />
    </LiraSitePage>
  )
}
