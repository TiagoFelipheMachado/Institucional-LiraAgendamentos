'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from './Icon'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { FEATURES, SEGMENTS } from './siteContent'
import { LIRA_APP_URL } from '@/utilities/lira/pricing'

// Native aspect ratio of public/logo-lira.svg (the official brand asset).
const LOGO_ASPECT_RATIO = 280 / 43

export const LiraLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  const width = Math.round(size * LOGO_ASPECT_RATIO)

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static brand asset, no need for next/image optimization here
    <img src="/logo-lira.svg" alt="Lira Agendamentos" width={width} height={size} className={`shrink-0 h-6 sm:h-8 w-auto ${className}`} />
  )
}

type NavItem = { href: string; label: string; children?: Array<{ href: string; label: string }> }

// Every sub-link is a page of its own; the parent link (when it has an href) is the overview page.
const NAV_ITEMS: NavItem[] = [
  {
    href: '/funcionalidades',
    label: 'Funcionalidades',
    children: FEATURES.map((f) => ({ href: `/funcionalidades/${f.slug}`, label: f.label })),
  },
  {
    href: '/segmentos',
    label: 'Segmentos',
    children: SEGMENTS.map((s) => ({ href: `/segmentos/${s.slug}`, label: s.label })),
  },
  { href: '/planos', label: 'Planos' },
  {
    href: '/sobre',
    label: 'Empresa',
    children: [
      { href: '/sobre', label: 'Sobre' },
      { href: '/blog', label: 'Blog' },
      { href: '/contato', label: 'Contato' },
    ],
  },
]

const TOP_LINK_CLASS =
  "inline-flex items-center gap-0.5 hover:text-neutral-900 dark:hover:text-[#E5E2E3] group-hover:text-neutral-900 dark:group-hover:text-[#E5E2E3] transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[1.5px] hover:after:bg-[#00D3F2]"

export const LiraNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#070708]/90 backdrop-blur-md border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto h-[68px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <LiraLogo size={32} />
        </Link>

        {/* Centered independently of the logo/actions widths on either side. */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] text-neutral-600 dark:text-[#9A9DA3] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              // Opens on hover and on keyboard focus (focus-within), no JS needed.
              <div key={item.label} className="relative group">
                <Link href={item.href} className={TOP_LINK_CLASS} aria-haspopup="true">
                  {item.label}
                  <Icon name="expand_more" size={18} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-150">
                  <ul className="min-w-[240px] p-2 rounded-[14px] bg-white dark:bg-[#0C0D11] border border-neutral-200 dark:border-[#1A1C24] shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex items-center min-h-[40px] px-3 rounded-[8px] text-neutral-700 dark:text-[#B5B8BE] hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-[#1A1B1D] dark:hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className={TOP_LINK_CLASS}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme switch toggle (visible on tablet and desktop, mobile drawer has it) */}
          <div className="hidden sm:flex items-center">
            <ThemeSwitch />
          </div>

          {/*
            Points at the documented product domain (app.liragenda.com.br,
            per the Lira design system's white-label link example) rather
            than a same-page anchor — swap for the real /login route once
            the back-office app confirms it.
          */}
          <a
            href={`${LIRA_APP_URL}/login`}
            className="hidden sm:inline-flex items-center justify-center px-3 py-2 min-h-[44px] text-[14px] font-medium text-neutral-600 dark:text-[#9A9DA3] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Login
          </a>

          {/* Design rule: BRANCO/ALTO CONTRASTE É O CTA DO SITE, CIANO É O CTA DE PRODUTO. Alvo mínimo 44px. Raio 12px per design system section 12. */}
          <Link
            href="/planos"
            className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[44px] rounded-[12px] text-xs sm:text-[14px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_2px_12px_rgba(0,0,0,0.12)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_2px_12px_rgba(255,255,255,0.15)] transition-all active:scale-[0.98]"
          >
            Cadastre-se
          </Link>

          {/* Mobile menu toggle: 44px touch target + aria-label, as required for icon-only controls */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="lira-mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-[10px] border border-neutral-200 dark:border-[#1A1B1D] text-neutral-800 dark:text-[#E5E2E3] hover:border-[#00D3F2]/50 transition-all"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <nav
          id="lira-mobile-menu"
          className="md:hidden max-h-[calc(100vh-68px)] overflow-y-auto border-t border-neutral-200 dark:border-[#1A1B1D] bg-white dark:bg-[#070708] px-4 py-4 flex flex-col gap-2 shadow-lg"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  aria-expanded={openGroup === item.label}
                  onClick={() => setOpenGroup((prev) => (prev === item.label ? null : item.label))}
                  className="w-full min-h-[44px] flex items-center justify-between px-2 rounded-[8px] text-[15px] text-neutral-800 dark:text-[#E5E2E3] hover:bg-neutral-100 dark:hover:bg-[#1A1B1D] transition-colors"
                >
                  {item.label}
                  <Icon name="expand_more" size={20} className={`transition-transform ${openGroup === item.label ? 'rotate-180' : ''}`} />
                </button>
                {openGroup === item.label && (
                  <ul className="pl-4 pb-1">
                    {[{ href: item.href, label: 'Visão geral' }, ...item.children]
                      .filter((child, i, all) => all.findIndex((c) => c.href === child.href) === i)
                      .map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            className="min-h-[44px] flex items-center px-2 rounded-[8px] text-[14px] text-neutral-600 dark:text-[#9A9DA3] hover:bg-neutral-100 dark:hover:bg-[#1A1B1D] transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="min-h-[44px] flex items-center px-2 rounded-[8px] text-[15px] text-neutral-800 dark:text-[#E5E2E3] hover:bg-neutral-100 dark:hover:bg-[#1A1B1D] transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="flex items-center justify-between border-t border-neutral-200 dark:border-[#1A1B1D] pt-3 px-2">
            <span className="text-[14px] text-neutral-600 dark:text-[#9A9DA3]">Tema</span>
            <ThemeSwitch showLabel />
          </div>
          <a
            href={`${LIRA_APP_URL}/login`}
            onClick={closeMenu}
            className="min-h-[44px] flex items-center px-2 rounded-[8px] text-[15px] text-neutral-600 dark:text-[#9A9DA3] border-t border-neutral-200 dark:border-[#1A1B1D] pt-3"
          >
            Login
          </a>
        </nav>
      )}
    </header>
  )
}
