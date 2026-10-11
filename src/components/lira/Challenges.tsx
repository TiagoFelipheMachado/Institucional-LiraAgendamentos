import React from 'react'

const features = [
  {
    tag: 'AGENDA INTELIGENTE',
    title: 'Sua agenda não perde mais nenhum ',
    titleHighlight: 'horário.',
    desc: 'Redução drástica do no-show com sinal Pix antecipado. O cliente agenda sozinho pelo link e o horário entra direto no painel do salão.',
    bullets: [
      'Agendamento 24h sem baixar aplicativo',
      'Pagamento de sinal via Pix trava o horário e evita faltas',
      'Visão em grade por profissional para organização visual',
    ],
    imagePos: 'right',
    imageUrl: '/dashboard-preview-3.png'
  },
  {
    tag: 'FINANCEIRO E COMISSÕES',
    title: 'Repasses automáticos sem usar ',
    titleHighlight: 'planilhas.',
    desc: 'Toda comanda finalizada já calcula a comissão exata do profissional e o lucro da barbearia, com transparência e regras flexíveis.',
    bullets: [
      'Regras personalizadas: percentual ou fixo, por serviço e produto',
      'Caixa e previsão de faturamento integrados na mesma tela',
      'Visibilidade financeira total para o dono e para o profissional',
    ],
    imagePos: 'left',
    imageUrl: '/schedule-preview-2.png'
  },
  {
    tag: 'WHATSAPP COM IA',
    title: 'O seu atendimento no ',
    titleHighlight: 'piloto automático.',
    desc: 'Não perca clientes por demora na resposta. A inteligência artificial atende, agenda e envia lembretes para que você foque no serviço.',
    bullets: [
      'IA que responde, confere agenda e marca clientes 24h por dia',
      'Lembretes automáticos de agendamento por WhatsApp',
      'Relatórios de captação e fluxo contínuo para sua barbearia',
    ],
    imagePos: 'right'
  }
]

export const LiraChallenges: React.FC = () => {
  return (
    <section id="funcionalidades" className="bg-[#070708] py-20 md:py-32 border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D3F2] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              FUNCIONALIDADES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#E5E2E3] leading-[1.1]">
            Tudo que o seu negócio precisa, em um só{' '}
            <em className="italic bg-gradient-to-r from-white via-[#CEFAFE] to-[#00D3F2] bg-clip-text text-transparent">
              sistema.
            </em>
          </h2>
        </div>

        {/* Features list */}
        <div className="space-y-24 md:space-y-40">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                feature.imagePos === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              
              {/* Text content */}
              <div className="flex-1 w-full">
                <span className="text-[11px] font-mono tracking-[0.08em] text-[#00D3F2] uppercase mb-4 block">
                  {feature.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] leading-[1.1] mb-6">
                  {feature.title}
                  <em className="italic text-[#00D3F2]">{feature.titleHighlight}</em>
                </h3>
                <p className="text-lg text-[#9A9DA3] mb-8 leading-relaxed font-normal">
                  {feature.desc}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#14454F]/50 flex items-center justify-center shrink-0 border border-[#14454F]">
                        <svg className="w-3 h-3 text-[#00D3F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#9A9DA3]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="inline-flex items-center text-[#E5E2E3] font-medium hover:text-[#00D3F2] transition-colors group">
                  ver como funciona 
                  <span className="material-symbols-rounded ml-1 text-[#00D3F2] group-hover:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
                </a>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1 w-full">
                {feature.imageUrl ? (
                  <div className="w-full relative flex items-center justify-center">
                    {/* Subtle glow behind the floating image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00D3F2]/5 blur-[100px] rounded-full pointer-events-none" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.imageUrl} alt={feature.tag} className="w-full h-auto object-contain relative z-10" />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-[#0C0D0F] rounded-[32px] border border-[#1A1B1D] flex flex-col items-center justify-center text-[#9A9DA3] p-8 text-center hover:border-[#14454F] transition-colors relative overflow-hidden group">
                    {/* Subtle background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00D3F2]/5 blur-[60px] rounded-full group-hover:bg-[#00D3F2]/10 transition-colors pointer-events-none" />
                    
                    <span className="material-symbols-rounded mb-3 text-[#00D3F2]/40" style={{ fontSize: '48px' }}>image</span>
                    <p className="font-medium text-[#E5E2E3] mb-1">Espaço para a imagem: {feature.tag}</p>
                    <p className="text-sm opacity-70">(Envie o arquivo SVG para substituirmos)</p>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
