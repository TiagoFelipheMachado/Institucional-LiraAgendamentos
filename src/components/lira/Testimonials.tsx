import React from 'react'
import { Icon } from './Icon'

interface ExampleTestimonial {
  quote: string
  name: string
  role: string
  surface: '#D1EBEB' | '#C4FF44'
}

// Placeholder quotes only — Lira has no published customer testimonials yet.
// Swap every entry below for a real customer quote before this section ships.
const EXAMPLE_TESTIMONIALS: ExampleTestimonial[] = [
  {
    quote:
      '“Reduzimos as faltas quase pela metade só de cobrar o sinal automaticamente no WhatsApp.”',
    name: 'Exemplo ilustrativo',
    role: 'Proprietária de salão · depoimento de exemplo',
    surface: '#D1EBEB',
  },
  {
    quote: '“O painel do balcão ficou simples o suficiente pra qualquer atendente usar no primeiro dia.”',
    name: 'Exemplo ilustrativo',
    role: 'Gerente de barbearia · depoimento de exemplo',
    surface: '#C4FF44',
  },
  {
    quote: '“Como agência, White-Label com 6 tokens foi o que nos fez fechar com a Lira.”',
    name: 'Exemplo ilustrativo',
    role: 'Gestor de tráfego · depoimento de exemplo',
    surface: '#D1EBEB',
  },
]

export const LiraTestimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#070708] border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4FF44]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              PROVA SOCIAL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Histórias de quem vive de agenda
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 text-[12px] font-mono text-[#FFE17D]">
          <Icon name="info" size={16} />
          <span>Conteúdo ilustrativo — ainda não são depoimentos reais de clientes.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXAMPLE_TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              data-testid="testimonial-card"
              style={{ backgroundColor: t.surface, color: '#070708' }}
              className="rounded-[20px] p-7 flex flex-col justify-between"
            >
              <p className="text-[15px] leading-relaxed font-medium mb-6">{t.quote}</p>
              <div>
                <div className="text-[14px] font-semibold">{t.name}</div>
                <div className="text-[12px] opacity-70">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
