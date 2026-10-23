import type { Metadata } from 'next'
import React from 'react'
import { LiraSitePage, LiraPageHero, LiraCardGrid } from '@/components/lira/SitePage'

const description =
  'A Lira Agendamentos nasceu em agosto de 2026 para ser a plataforma all-in-one de clínicas e barbearias premium: agenda, atendimento com IA, pagamentos e gestão em um só lugar.'

export const metadata: Metadata = {
  title: 'Sobre | Lira Agendamentos',
  description,
  openGraph: { title: 'Sobre | Lira Agendamentos', description, images: [{ url: '/website-template-OG.webp' }] },
}

const VALUES = [
  { icon: 'diamond', title: 'Experiência premium', desc: 'Cada detalhe pensado para negócios que entregam um atendimento de alto padrão.' },
  { icon: 'all_inclusive', title: 'Tudo em um só lugar', desc: 'Agenda, WhatsApp, pagamentos, comissões e caixa sem precisar de cinco sistemas diferentes.' },
  { icon: 'bolt', title: 'Simplicidade', desc: 'Tecnologia que qualquer pessoa da equipe usa no primeiro dia.' },
  { icon: 'shield_person', title: 'Confiança', desc: 'Transparência nos números e cuidado com os dados de clientes e equipe.' },
]

export default function SobrePage() {
  return (
    <LiraSitePage>
      <LiraPageHero
        breadcrumb={[{ label: 'Sobre' }]}
        eyebrow="Sobre a Lira"
        title="Devolver tempo para quem"
        highlight="vive de agenda."
        description={description}
      />

      <section className="py-20 md:py-28 bg-[#F6F8FA] dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-6">Nossa história</h2>
          <div className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
            <p>
              Clínicas e barbearias premium costumam operar com uma colcha de retalhos: um app para agenda, o WhatsApp
              no celular da recepção, planilhas para comissão e o caixa conferido na mão no fim do dia.
            </p>
            <p>
              A Lira foi fundada em agosto de 2026 para acabar com isso. Reunimos agendamento online, atendimento com
              inteligência artificial, cobrança via Pix, comissões e fechamento de caixa em uma única plataforma, para
              que a equipe dedique o seu tempo ao que realmente importa: o cliente na cadeira.
            </p>
          </div>
        </div>
      </section>

      <LiraCardGrid title="No que acreditamos" cards={VALUES} />
    </LiraSitePage>
  )
}
