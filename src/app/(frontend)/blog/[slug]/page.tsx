import type { Metadata } from 'next'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { LiraBlogPostView } from '@/components/lira/BlogPostView'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import type { Post } from '@/payload-types'

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
      collection: 'posts',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    })

    return posts.docs.map(({ slug }) => ({ slug }))
  } catch {
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'posts',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return (result.docs?.[0] as Post) || null
  } catch {
    return null
  }
})

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) {
    return {
      title: 'Artigo não encontrado | Lira Agendamentos',
    }
  }

  return generateMeta({ doc: post })
}

export default async function BlogPostPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) {
    notFound()
  }

  // Query related posts
  let relatedPosts: Post[] = []
  try {
    if (post.relatedPosts && post.relatedPosts.length > 0) {
      relatedPosts = post.relatedPosts.filter((p): p is Post => typeof p === 'object' && p !== null)
    } else {
      const payload = await getPayload({ config: configPromise })
      const latest = await payload.find({
        collection: 'posts',
        limit: 3,
        overrideAccess: false,
        where: {
          slug: {
            not_equals: decodedSlug,
          },
        },
      })
      relatedPosts = (latest.docs as Post[]) || []
    }
  } catch {
    relatedPosts = []
  }

  return (
    <>
      {draft && <LivePreviewListener />}
      <LiraBlogPostView post={post} relatedPosts={relatedPosts} />
    </>
  )
}
