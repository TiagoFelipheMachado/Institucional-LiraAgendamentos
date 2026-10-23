import React from 'react'
import { LiraSitePage, LiraPageHero, LiraCardGrid } from './SitePage'
import { findFeature, SEGMENTS, type SegmentContent } from './siteContent'

export const LiraSegmentPage: React.FC<{ segment: SegmentContent }> = ({ segment }) => {
  const solutions = segment.solutions.flatMap(({ feature, why }) => {
    const f = findFeature(feature)
    return f ? [{ icon: f.icon, title: f.label, desc: why, href: `/funcionalidades/${f.slug}` }] : []
  })
  const others = SEGMENTS.filter((s) => s.slug !== segment.slug)

  return (
    <LiraSitePage>
      <LiraPageHero
        breadcrumb={[{ label: 'Segmentos', href: '/segmentos' }, { label: segment.label }]}
        eyebrow={segment.label}
        title={segment.title}
        highlight={segment.highlight}
        description={segment.description}
        image={segment.image}
      />

      <LiraCardGrid title="Desafios do dia a dia" subtitle="O que costuma travar a operação." cards={segment.pains} muted />

      <LiraCardGrid title="Como o Lira resolve" subtitle="Tudo em uma única plataforma, do agendamento ao caixa." cards={solutions} />

      <LiraCardGrid
        title="Outros segmentos"
        cards={others.map((s) => ({ icon: s.icon, title: s.label, desc: s.metaDescription, href: `/segmentos/${s.slug}` }))}
        muted
      />
    </LiraSitePage>
  )
}
