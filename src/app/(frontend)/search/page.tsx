import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { CardPostData } from '@/components/Card'
import { LiraSitePage } from '@/components/lira/SitePage'

type Args = {
  searchParams: Promise<{
    q: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return (
    <LiraSitePage>
      <div className="pt-32 pb-24">
        <PageClient />
        <div className="container mb-16">
          <div className="prose dark:prose-invert max-w-none text-center">
            <h1 className="mb-8 lg:mb-16">Buscar</h1>

            <div className="max-w-[50rem] mx-auto">
              <Search />
            </div>
          </div>
        </div>

        {posts.totalDocs > 0 ? (
          <CollectionArchive posts={posts.docs as CardPostData[]} />
        ) : (
          <div className="container text-center text-neutral-600 dark:text-[#9A9DA3]">Nenhum resultado encontrado.</div>
        )}
      </div>
    </LiraSitePage>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Buscar | Lira Agendamentos`,
  }
}
