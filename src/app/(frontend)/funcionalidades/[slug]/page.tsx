import type { Metadata } from 'next'
import React from 'react'
import { notFound } from 'next/navigation'
import { LiraFeaturePage } from '@/components/lira/FeaturePage'
import { FEATURES, findFeature } from '@/components/lira/siteContent'

type Args = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return FEATURES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const feature = findFeature((await params).slug)
  if (!feature) return {}
  const title = `${feature.label} | Lira Agendamentos`
  return {
    title,
    description: feature.metaDescription,
    openGraph: { title, description: feature.metaDescription, images: [{ url: '/website-template-OG.webp' }] },
  }
}

export default async function FeatureRoute({ params }: Args) {
  const feature = findFeature((await params).slug)
  if (!feature) notFound()
  return <LiraFeaturePage feature={feature} />
}
