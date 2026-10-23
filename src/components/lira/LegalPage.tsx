import React from 'react'
import Link from 'next/link'
import { LiraNavbar } from './Navbar'
import { LiraFooter } from './Footer'

export interface LegalSection {
  id: string
  title: string
  content: React.ReactNode
}

interface LegalPageProps {
  title: string
  updatedAt: string
  intro: React.ReactNode
  sections: LegalSection[]
}

export const LiraLegalPage: React.FC<LegalPageProps> = ({ title, updatedAt, intro, sections }) => (
  <div className="min-h-screen w-full bg-white dark:bg-[#070708] text-neutral-900 dark:text-[#E5E2E3] transition-colors duration-200">
    <LiraNavbar />

    <main className="pt-24 sm:pt-28 pb-20 sm:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-[#8E92A0]">
            <li>
              <Link href="/" className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                Início
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 dark:text-white font-semibold">{title}</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-3">{title}</h1>
        <p className="text-xs font-mono text-neutral-500 dark:text-[#8E92A0] mb-8">
          Última atualização: {updatedAt}
        </p>

        <div className="text-base text-neutral-700 dark:text-[#B5B8BE] leading-relaxed space-y-4 mb-10">
          {intro}
        </div>

        <nav aria-label="Índice" className="mb-12 p-5 rounded-xl border border-neutral-200 dark:border-[#1A1B1D]">
          <p className="text-sm font-semibold mb-3">Índice</p>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                {i + 1}. {s.title}
              </h2>
              <div className="text-[15px] text-neutral-700 dark:text-[#B5B8BE] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-cyan-700 dark:[&_a]:text-[#00D3F2] [&_a]:underline [&_strong]:text-neutral-900 dark:[&_strong]:text-white">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>

    <LiraFooter />
  </div>
)
