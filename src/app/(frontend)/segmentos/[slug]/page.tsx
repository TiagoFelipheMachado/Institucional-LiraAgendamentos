import type { Metadata } from 'next'
import React from 'react'
import { notFound } from 'next/navigation'
import { LiraSegmentPage } from '@/components/lira/SegmentPage'
import { SEGMENTS, findSegment } from '@/components/lira/siteContent'

type Args = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return SEGMENTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const segment = findSegment((await params).slug)
  if (!segment) return {}
  const title = `${segment.label} | Lira Agendamentos`
  return {
    title,
    description: segment.metaDescription,
    openGraph: { title, description: segment.metaDescription, images: [{ url: '/website-template-OG.webp' }] },
  }
}

export default async function SegmentRoute({ params }: Args) {
  const segment = findSegment((await params).slug)
  if (!segment) notFound()
  return <LiraSegmentPage segment={segment} />
}
