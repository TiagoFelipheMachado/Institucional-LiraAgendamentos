import React from 'react'

export const LiraProducts: React.FC = () => {
  const products = [
    {
      num: '01',
      title: 'Site Institucional & Conversão',
      badge: 'PARA AGÊNCIAS DE TRÁFEGO',
      desc: 'Escala tipográfica grande, CTA branco único por tela e prova social transparente. Projetado para transformar tráfego pago em clientes recorrentes para o salão.',
      specs: [
        'CTA de alta conversão sem atrito',
        'Demonstração interativa de resultados',
        'Captação com validação rigorosa de WhatsApp',
      ],
      iconBg: 'bg-[#9034F3]/15 text-[#CEFAFE]',
    },
    {
      num: '02',
      title: 'Back-office Operacional do Salão',
      badge: 'PARA O BALCÃO DO SALÃO',
      desc: 'Operado no dia a dia. Densidade média, superfície azulada para leitura rápida de dados e status sempre comunicados com forma sólida além da cor.',
      specs: [
        'Visão por profissional e calendário em grade',
        'Gestão de comissões e repasses automáticos',
        'Redução de 68% do no-show com sinal Pix travado',
      ],
      iconBg: 'bg-[#00D3F2]/15 text-[#00D3F2]',
    },
    {
      num: '03',
      title: 'Plugin WordPress & Widget White-Label',
      badge: 'PARA O SITE DO CLIENTE',
      desc: 'Roda perfeitamente embedado no site do salão. A agência controla os 6 tokens editáveis para respeitar a identidade visual de cada cliente da sua base.',
      specs: [
        '6 tokens CSS editáveis pela agência',
        'Alvo de toque mínimo de 44px em mobile',
        'Modo White e Dark automáticos com contraste 3:1',
      ],
      iconBg: 'bg-[#34E5A0]/15 text-[#34E5A0]',
    },
  ]

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#070708] border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              ECOSSISTEMA INTEGRADO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Três produtos, uma só linguagem
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3]">
            Uma arquitetura coesa onde a agência escala e o salão tem previsibilidade total de faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.num}
              className="bg-[#0B0F19] border border-[#14454F] rounded-[24px] p-7 flex flex-col justify-between hover:border-[#00D3F2]/40 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-semibold font-mono text-[#00D3F2]">{p.num}</span>
                  <span className="text-[10px] font-mono tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-[#070708] border border-[#14454F] text-[#CEFAFE]">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#9A9DA3] mb-6 leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-6 border-t border-[#14454F]/50">
                <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#9A9DA3] block mb-3">
                  CARACTERÍSTICAS TÉCNICAS:
                </span>
                <ul className="space-y-2">
                  {p.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-[#E5E2E3] flex items-center gap-2 font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D3F2]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
