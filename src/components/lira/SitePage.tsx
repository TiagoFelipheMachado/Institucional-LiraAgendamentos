import React from 'react'
import Link from 'next/link'
import { NotionScrollController } from './NotionScrollController'
import { LiraNavbar } from './Navbar'
import { LiraContactSection } from './ContactSection'
import { LiraFooter } from './Footer'
import { LiraWhatsAppButton } from './WhatsAppButton'
import { Icon } from './Icon'
import type { ContentCard } from './siteContent'

/**
 * Shared shell of every institutional page. Sections must be direct children
 * of <main> so NotionScrollController's reveal selectors pick them up, and the
 * contact section always closes the page so every "#contato" CTA resolves.
 */
export const LiraSitePage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-[#070708] text-neutral-900 dark:text-[#E5E2E3] selection:bg-[#00D3F2]/30 selection:text-cyan-800 dark:selection:text-[#00D3F2] transition-colors duration-200">
    <NotionScrollController />
    <LiraNavbar />
    {children}
    <LiraContactSection />
    <LiraFooter />
    <LiraWhatsAppButton />
  </main>
)

interface PageHeroProps {
  breadcrumb: Array<{ label: string; href?: string }>
  eyebrow: string
  title: string
  highlight: string
  description: string
  image?: string
}

export const LiraPageHero: React.FC<PageHeroProps> = ({ breadcrumb, eyebrow, title, highlight, description, image }) => (
  <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${image ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : ''}`}>
      <div className={image ? '' : 'max-w-3xl'}>
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-[#8E92A0]">
            <li>
              <Link href="/" className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                Início
              </Link>
            </li>
            {breadcrumb.map((item) => (
              <React.Fragment key={item.label}>
                <li aria-hidden="true">/</li>
                <li>
                  {item.href ? (
                    <Link href={item.href} className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-neutral-900 dark:text-white font-semibold">{item.label}</span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        <p className="text-xs sm:text-[13px] font-bold font-mono tracking-[0.1em] uppercase text-cyan-600 dark:text-[#53EAFD] mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.12] mb-5">
          {title}{' '}
          <span className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent pr-1">
            {highlight}
          </span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed mb-8 max-w-2xl">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.15)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_4px_24px_rgba(255,255,255,0.18)] transition-all active:scale-[0.98]"
          >
            Fazer teste grátis 14 dias
          </Link>
          <Link
            href="/planos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 dark:bg-[#1A1B1D]/80 dark:text-[#E5E2E3] dark:border-[#14454F] dark:hover:bg-[#1A1B1D] dark:hover:border-[#00D3F2]/60 transition-all active:scale-[0.98]"
          >
            Ver planos
          </Link>
        </div>
      </div>

      {image && (
        // eslint-disable-next-line @next/next/no-img-element -- static segment photo
        <img
          src={image}
          alt=""
          className="w-full h-[280px] sm:h-[420px] object-cover rounded-[24px] border border-neutral-200 dark:border-white/10 shadow-xl"
        />
      )}
    </div>
  </section>
)

interface CardGridProps {
  title: string
  subtitle?: string
  cards: Array<ContentCard & { href?: string }>
  muted?: boolean
}

export const LiraCardGrid: React.FC<CardGridProps> = ({ title, subtitle, cards, muted }) => (
  <section
    className={`py-20 md:py-28 border-b border-neutral-200 dark:border-[#1A1B1D] dark:bg-[#070708] transition-colors duration-200 ${muted ? 'bg-[#F6F8FA]' : 'bg-white'}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-3">{title}</h2>
        {subtitle && <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">{subtitle}</p>}
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 ${cards.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
        {cards.map((card) => {
          const body = (
            <>
              <span className="w-11 h-11 rounded-[12px] bg-cyan-50 dark:bg-[#053345] border border-cyan-200 dark:border-[#14454F] flex items-center justify-center text-cyan-700 dark:text-[#53EAFD] mb-4">
                <Icon name={card.icon} size={22} />
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white tracking-[-0.01em] mb-2">{card.title}</h3>
              <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">{card.desc}</p>
              {card.href && (
                <span className="mt-4 inline-flex text-sm font-semibold text-cyan-700 dark:text-[#53EAFD] group-hover:underline">Saiba mais →</span>
              )}
            </>
          )
          const className =
            'group bg-white dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] hover:border-cyan-500/50 dark:hover:border-[#00D3F2]/40 rounded-[20px] p-6 sm:p-7 flex flex-col transition-all duration-300 shadow-xs hover:shadow-md'
          return card.href ? (
            <Link key={card.title} href={card.href} className={className}>
              {body}
            </Link>
          ) : (
            <div key={card.title} className={className}>
              {body}
            </div>
          )
        })}
      </div>
    </div>
  </section>
)
