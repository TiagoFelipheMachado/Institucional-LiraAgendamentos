import type { Metadata } from 'next'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { LiraBlogArchive } from '@/components/lira/BlogArchive'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Blog | Lira Agendamentos — Gestão, Automação & Atendimento com IA',
  description:
    'Artigos, guias práticos e estratégias de gestão para salões de beleza, barbearias e clínicas de estética aumentarem faturamento e reduzirem faltas.',
  openGraph: {
    title: 'Blog Lira Agendamentos',
    description:
      'Artigos e estratégias de gestão de agenda, atendimento inteligente e crescimento para espaços de beleza e saúde.',
    images: [{ url: '/website-template-OG.webp' }],
  },
}

export default async function BlogPage() {
  let postsDocs: any[] = []
  let categoriesDocs: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    const [postsResult, categoriesResult] = await Promise.all([
      payload.find({
        collection: 'posts',
        depth: 2,
        limit: 12,
        overrideAccess: false,
      }),
      payload.find({
        collection: 'categories',
        limit: 100,
        overrideAccess: false,
      }),
    ])

    postsDocs = postsResult.docs || []
    categoriesDocs = categoriesResult.docs || []
  } catch (err) {
    // Graceful fallback during static build / initial setup without seeded DB
    console.warn('Could not fetch posts from database:', err)
  }

  return <LiraBlogArchive posts={postsDocs} categories={categoriesDocs} />
}
