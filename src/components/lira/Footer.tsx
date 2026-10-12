import React from 'react'
import Link from 'next/link'
import { LiraLogo } from './Navbar'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const LiraFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-[#070708] border-t border-neutral-200 dark:border-[#1A1B1D] py-14 text-[14px] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <LiraLogo size={32} />
            <p className="text-neutral-600 dark:text-[#9A9DA3] text-[13px] leading-relaxed max-w-sm">
              Uma plataforma que centraliza o agendamento de serviços, atendimento ao cliente com IA e
              gestão da agenda, reduzindo processos manuais e tornando a operação do salão mais
              eficiente.
            </p>
            <div className="pt-2 text-[12px] font-mono text-cyan-700 dark:text-[#53EAFD] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-[#00D3F2]" />
              <span>A agenda que se preenche sozinha.</span>
            </div>
          </div>

          {/* Links Column 1: Navegação */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
              SISTEMA
            </span>
            <ul className="space-y-2 text-neutral-600 dark:text-[#9A9DA3] text-[13px]">
              <li>
                <Link href="#desafios" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Desafios do Salão
                </Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Pilares do Manifesto
                </Link>
              </li>
              <li>
                <Link href="#primeiros-passos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Três Produtos
                </Link>
              </li>
              <li>
                <Link href="#nichos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Nichos Atendidos
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  IA & Transbordo
                </Link>
              </li>
              <li>
                <Link href="#planos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="#white-label" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  White-Label (6 Tokens)
                </Link>
              </li>
              <li>
                <Link href="#calculadora" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Calculadora ROI (-68%)
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Tecnologia */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
              ARQUITETURA
            </span>
            <ul className="space-y-2 text-neutral-600 dark:text-[#9A9DA3] text-[13px]">
              <li>Payload CMS 3.90</li>
              <li>Next.js 16 App Router</li>
              <li>PostgreSQL Database</li>
              <li>Evolution API + n8n</li>
              <li>Chatwoot Integrado</li>
            </ul>
          </div>

          {/* Links Column 3: Redes Sociais */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
              CONEXÕES
            </span>
            <p className="text-[13px] text-neutral-600 dark:text-[#9A9DA3]">
              Acompanhe as novidades e casos de sucesso dos salões e agências parceiras.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-cyan-500 dark:hover:border-[#00D3F2] hover:text-neutral-950 dark:hover:text-white transition-all font-mono"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-cyan-500 dark:hover:border-[#00D3F2] hover:text-neutral-950 dark:hover:text-white transition-all font-mono"
              >
                TikTok
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-cyan-500 dark:hover:border-[#00D3F2] hover:text-neutral-950 dark:hover:text-white transition-all font-mono"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Design System specification */}
        <div className="pt-8 border-t border-neutral-200 dark:border-[#1A1B1D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-mono text-neutral-500 dark:text-[#9A9DA3]">
          <div>
            <span>Lira Agendamentos</span> •{' '}
            <span className="text-neutral-900 dark:text-white">
              Todos os direitos reservados © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#34E5A0]" />
              <span>Sistemas 100% Operacionais</span>
            </span>
            <ThemeSwitch showLabel />
          </div>
        </div>
      </div>
    </footer>
  )
}
