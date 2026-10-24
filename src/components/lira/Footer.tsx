import React from 'react'
import Link from 'next/link'
import { LiraLogo } from './Navbar'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { FEATURES, SEGMENTS } from './siteContent'
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/utilities/lira/pricing'

const FooterColumn: React.FC<{ title: string; links: Array<{ href: string; label: string }> }> = ({ title, links }) => (
  <div className="md:col-span-2 space-y-3">
    <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
      {title}
    </span>
    <ul className="space-y-2.5 text-neutral-600 dark:text-[#9A9DA3] text-[13px]">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-purple-600 dark:hover:text-white transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const LiraFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-[#070708] border-t border-neutral-200 dark:border-[#1A1B1D] py-14 sm:py-16 text-[14px] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 mb-12">
          {/* Brand & Value Prop */}
          <div className="sm:col-span-2 md:col-span-3 space-y-4">
            <LiraLogo size={32} />
            <p className="text-neutral-600 dark:text-[#9A9DA3] text-[13px] leading-relaxed max-w-sm">
              Plataforma completa de agendamento inteligente, atendimento automatizado no WhatsApp e gestão financeira para negócios que vivem de agenda.
            </p>
          </div>

          <FooterColumn
            title="FUNCIONALIDADES"
            links={[
              ...FEATURES.map((f) => ({ href: `/funcionalidades/${f.slug}`, label: f.label })),
              { href: '/planos', label: 'Planos e Preços' },
            ]}
          />
          <FooterColumn
            title="SEGMENTOS"
            links={SEGMENTS.map((s) => ({ href: `/segmentos/${s.slug}`, label: s.label }))}
          />
          <FooterColumn
            title="EMPRESA"
            links={[
              { href: '/sobre', label: 'Sobre' },
              { href: '/blog', label: 'Blog & Artigos' },
              { href: '/contato', label: 'Contato' },
            ]}
          />

          {/* Links Column 3: Contato & Suporte */}
          <div className="sm:col-span-2 md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
              ATENDIMENTO
            </span>
            <p className="text-[13px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
              Pronto para modernizar o atendimento do seu negócio? Fale com nossa equipe comercial.
            </p>
            <div className="pt-2">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[13px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
              >
                Falar com consultor
              </Link>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={INSTAGRAM_URL}
                aria-label="Instagram do Lira Agendamentos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-white transition-all font-mono"
              >
                Instagram
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-white transition-all font-mono"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-[#1A1B1D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-mono text-neutral-500 dark:text-[#9A9DA3]">
          <div>
            <span>Lira Agendamentos</span> •{' '}
            <span className="text-neutral-900 dark:text-white">
              Todos os direitos reservados © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <ThemeSwitch showLabel />
          </div>
        </div>
      </div>
    </footer>
  )
}
