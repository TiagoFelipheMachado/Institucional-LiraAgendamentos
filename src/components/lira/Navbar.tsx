'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from './Icon'
import { ThemeSwitch } from '@/components/ThemeSwitch'

// Native aspect ratio of public/logo-lira.svg (the official brand asset).
const LOGO_ASPECT_RATIO = 280 / 43

export const LiraLogo: React.FC<{ size?: number }> = ({ size = 32 }) => {
  const width = Math.round(size * LOGO_ASPECT_RATIO)

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static brand asset, no need for next/image optimization here
    <img src="/logo-lira.svg" alt="Lira Agendamentos" width={width} height={size} className="shrink-0" />
  )
}

// Exact set from the reference layout (Frame.svg) — only these 4. The other
// built sections (Nichos, Planos, Calculadora ROI, White-Label, FAQ...)
// stay reachable via scroll and the footer's "Sistema" links instead of
// being added here, per explicit instruction to match the reference 1:1.
const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: '#desafios', label: 'Desafios' },
  { href: '#pilares', label: 'Pilares' },
  { href: '#primeiros-passos', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
]

export const LiraNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#070708]/90 backdrop-blur-md border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto h-[68px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <LiraLogo size={32} />
        </Link>

        {/* Centered independently of the logo/actions widths on either side. */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] text-neutral-600 dark:text-[#9A9DA3] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900 dark:hover:text-[#E5E2E3] transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[1.5px] hover:after:bg-[#00D3F2]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme switch toggle */}
          <ThemeSwitch />

          {/*
            Points at the documented product domain (app.liragenda.com.br,
            per the Lira design system's white-label link example) rather
            than a same-page anchor — swap for the real /login route once
            the back-office app confirms it.
          */}
          <a
            href="https://app.liragenda.com.br/login"
            className="hidden sm:inline-flex items-center justify-center px-3 py-2 min-h-[44px] text-[14px] font-medium text-neutral-600 dark:text-[#9A9DA3] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Login
          </a>

          {/* Design rule: BRANCO/ALTO CONTRASTE É O CTA DO SITE, CIANO É O CTA DE PRODUTO. Alvo mínimo 44px. Raio 12px per design system section 12. */}
          <Link
            href="#planos"
            className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-[12px] text-[14px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_2px_12px_rgba(0,0,0,0.12)] dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 dark:shadow-[0_2px_12px_rgba(255,255,255,0.15)] transition-all active:scale-[0.98]"
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
          className="md:hidden border-t border-neutral-200 dark:border-[#1A1B1D] bg-white dark:bg-[#070708] px-4 py-4 flex flex-col gap-2 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-2 rounded-[8px] text-[15px] text-neutral-800 dark:text-[#E5E2E3] hover:bg-neutral-100 dark:hover:bg-[#1A1B1D] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between border-t border-neutral-200 dark:border-[#1A1B1D] pt-3 px-2">
            <span className="text-[14px] text-neutral-600 dark:text-[#9A9DA3]">Tema</span>
            <ThemeSwitch showLabel />
          </div>
          <a
            href="https://app.liragenda.com.br/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-2 rounded-[8px] text-[15px] text-neutral-600 dark:text-[#9A9DA3] border-t border-neutral-200 dark:border-[#1A1B1D] pt-3"
          >
            Login
          </a>
        </nav>
      )}
    </header>
  )
}
