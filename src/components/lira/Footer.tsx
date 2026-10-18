import React from 'react'
import Link from 'next/link'
import { LiraLogo } from './Navbar'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const LiraFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-[#070708] border-t border-neutral-200 dark:border-[#1A1B1D] py-14 sm:py-16 text-[14px] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 mb-12">
          {/* Brand & Value Prop */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <LiraLogo size={32} />
            <p className="text-neutral-600 dark:text-[#9A9DA3] text-[13px] leading-relaxed max-w-sm">
              Plataforma completa de agendamento inteligente, atendimento automatizado no WhatsApp e gestão financeira para negócios que vivem de agenda.
            </p>
          </div>

          {/* Links Column 1: Navegação do Sistema */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
              SISTEMA
            </span>
            <ul className="space-y-2.5 text-neutral-600 dark:text-[#9A9DA3] text-[13px]">
              <li>
                <Link href="#desafios" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Desafios da Agenda
                </Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Pilares do Lira
                </Link>
              </li>
              <li>
                <Link href="#primeiros-passos" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Produtos & Recursos
                </Link>
              </li>
              <li>
                <Link href="#planos" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Blog &amp; Artigos
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Segmentos Atendidos */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-900 dark:text-white font-semibold block">
              SEGMENTOS
            </span>
            <ul className="space-y-2.5 text-neutral-600 dark:text-[#9A9DA3] text-[13px]">
              <li>
                <Link href="#segmentos" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Barbearias
                </Link>
              </li>
              <li>
                <Link href="#segmentos" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Salões de Beleza
                </Link>
              </li>
              <li>
                <Link href="#segmentos" className="hover:text-purple-600 dark:hover:text-white transition-colors">
                  Clínicas de Estética
                </Link>
              </li>
            </ul>
          </div>

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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-white transition-all font-mono"
              >
                Instagram
              </a>
              <Link
                href="#contato"
                className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#1A1B1D] border border-neutral-300 dark:border-[#14454F] text-[12px] text-neutral-800 dark:text-[#E5E2E3] hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-white transition-all font-mono"
              >
                WhatsApp
              </Link>
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
            <ThemeSwitch showLabel />
          </div>
        </div>
      </div>
    </footer>
  )
}
