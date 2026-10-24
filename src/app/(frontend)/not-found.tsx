import Link from 'next/link'
import React from 'react'
import { LiraSitePage } from '@/components/lira/SitePage'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <LiraSitePage>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 text-center">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">404</h1>
        <p className="text-lg text-neutral-600 dark:text-[#9A9DA3] mb-8">Esta página não foi encontrada.</p>
        <Button asChild variant="default" className="rounded-xl px-6 py-3 font-semibold">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </LiraSitePage>
  )
}
