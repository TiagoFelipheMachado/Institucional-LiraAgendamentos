import React from 'react'

interface Feature {
  tag: string
  title: string
  titleHighlight: string
  desc: string
  bullets: string[]
  imagePos: 'left' | 'right'
  imageUrl?: string
  customMockup?: boolean
}

const WhatsAppChatMockup: React.FC = () => {
  return (
    <div className="w-full relative flex items-center justify-center">
      {/* Subtle purple and cyan ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-[#7C3AED]/12 via-[#00D3F2]/6 to-transparent blur-[80px] rounded-full pointer-events-none" />

      {/* Frame / Card matching the WhatsApp AI mockup */}
      <div className="relative z-10 w-full max-w-[420px] bg-white dark:bg-[#0A0B12] border border-neutral-200 dark:border-[#7C3AED]/70 rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(124,58,237,0.15)] overflow-hidden transition-colors">
        {/* Search Bar */}
        <div className="w-full bg-neutral-100 dark:bg-[#12131E] border border-neutral-200 dark:border-[#232536] rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 mb-4">
          <svg
            className="w-4 h-4 text-neutral-400 dark:text-[#686B7C] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[13px] text-neutral-500 dark:text-[#686B7C] font-normal select-none">
            Buscar por cliente...
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-6 text-[12px] select-none no-scrollbar">
          <span className="text-neutral-500 dark:text-[#8B8F9F] px-1 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
            Todas
          </span>
          <span className="text-neutral-500 dark:text-[#8B8F9F] px-1 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
            Aguardando
          </span>
          {/* Active Tab */}
          <span className="font-medium text-cyan-700 dark:text-[#00D3F2] bg-cyan-50 dark:bg-[#0E2228] border border-cyan-300 dark:border-[#00D3F2]/60 px-3.5 py-1 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(0,211,242,0.15)]">
            Em atendimento
          </span>
          <span className="text-neutral-500 dark:text-[#8B8F9F] px-1 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
            Minhas
          </span>
          <span className="text-neutral-500 dark:text-[#8B8F9F] px-1 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
            Fin...
          </span>
        </div>

        {/* Conversation Body */}
        <div className="space-y-4">
          {/* Contact Header */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 dark:border-[#2E3044] shrink-0 bg-neutral-100 dark:bg-[#171824] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Luisa.M"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">Luisa.M</h4>
            </div>
          </div>

          {/* Bot Greeting */}
          <div className="pl-1">
            <p className="text-[13px] sm:text-[14px] text-neutral-700 dark:text-[#E0E2EC] leading-relaxed font-normal">
              Olá, Luisa.M! meu nome é Amanda, serei responsavel pelo seu atendimento. Como posso te ajudar hoje?
            </p>
          </div>

          {/* User Message */}
          <div className="w-full bg-neutral-100 dark:bg-[#151627] border border-neutral-200 dark:border-[#262840]/60 rounded-2xl p-4 my-2">
            <p className="text-[13px] sm:text-[14px] text-neutral-800 dark:text-[#E0E2EC] leading-relaxed text-right sm:text-left">
              Bom dia tudo bem? &nbsp;gostaria de agendar uma limpeza de pele.
            </p>
          </div>

          {/* Bot Response with Time Options */}
          <div className="pl-1 pt-1 space-y-3">
            <p className="text-[13px] sm:text-[14px] text-neutral-700 dark:text-[#E0E2EC] font-normal">
              Temos esses horarios para hoje Luisa.M:
            </p>

            {/* Time Slot Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="py-3 px-4 rounded-xl bg-purple-50 dark:bg-[#0D0F19] border border-purple-300 dark:border-[#7C3AED] hover:border-purple-400 dark:hover:border-[#A855F7] hover:bg-purple-100 dark:hover:bg-[#7C3AED]/15 text-purple-900 dark:text-white font-medium text-[15px] transition-all shadow-sm text-center cursor-pointer select-none">
                13:00
              </div>
              <div className="py-3 px-4 rounded-xl bg-purple-50 dark:bg-[#0D0F19] border border-purple-300 dark:border-[#7C3AED] hover:border-purple-400 dark:hover:border-[#A855F7] hover:bg-purple-100 dark:hover:bg-[#7C3AED]/15 text-purple-900 dark:text-white font-medium text-[15px] transition-all shadow-sm text-center cursor-pointer select-none">
                15:30
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const features: Feature[] = [
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
    imageUrl: '/dashboard-preview-3.png',
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
    imageUrl: '/schedule-preview-3.png',
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
    imagePos: 'right',
    customMockup: true,
  },
]

export const LiraChallenges: React.FC = () => {
  return (
    <section id="funcionalidades" className="bg-neutral-50/70 dark:bg-[#070708] py-20 md:py-32 border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#00D3F2] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.08em] uppercase text-cyan-800 dark:text-[#CEFAFE]">
              FUNCIONALIDADES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.1]">
            Tudo que o seu negócio precisa, em um só{' '}
            <em className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
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
                <span className="text-[11px] font-mono tracking-[0.08em] text-cyan-600 dark:text-[#00D3F2] uppercase mb-4 block">
                  {feature.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.1] mb-6">
                  {feature.title}
                  <em className="italic text-cyan-600 dark:text-[#00D3F2]">{feature.titleHighlight}</em>
                </h3>
                <p className="text-lg text-neutral-600 dark:text-[#9A9DA3] mb-8 leading-relaxed font-normal">
                  {feature.desc}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-cyan-100 border border-cyan-200 dark:bg-[#14454F]/50 dark:border-[#14454F] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-cyan-700 dark:text-[#00D3F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700 dark:text-[#9A9DA3]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="inline-flex items-center text-neutral-900 hover:text-cyan-600 dark:text-[#E5E2E3] dark:hover:text-[#00D3F2] font-medium transition-colors group">
                  ver como funciona 
                  <span className="material-symbols-rounded ml-1 text-cyan-600 dark:text-[#00D3F2] group-hover:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
                </a>
              </div>

              {/* Image or Coded Mockup */}
              <div className="flex-1 w-full">
                {feature.customMockup ? (
                  <WhatsAppChatMockup />
                ) : feature.imageUrl ? (
                  <div className="w-full relative flex items-center justify-center">
                    {/* Subtle glow behind the floating image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00D3F2]/5 blur-[100px] rounded-full pointer-events-none" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.imageUrl} alt={feature.tag} className="w-full h-auto object-contain relative z-10" />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-white dark:bg-[#0C0D0F] rounded-[32px] border border-neutral-200 dark:border-[#1A1B1D] flex flex-col items-center justify-center text-neutral-500 dark:text-[#9A9DA3] p-8 text-center hover:border-cyan-300 dark:hover:border-[#14454F] transition-colors relative overflow-hidden group shadow-sm">
                    {/* Subtle background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00D3F2]/5 blur-[60px] rounded-full group-hover:bg-[#00D3F2]/10 transition-colors pointer-events-none" />
                    
                    <span className="material-symbols-rounded mb-3 text-cyan-600/50 dark:text-[#00D3F2]/40" style={{ fontSize: '48px' }}>image</span>
                    <p className="font-medium text-neutral-900 dark:text-[#E5E2E3] mb-1">Espaço para a imagem: {feature.tag}</p>
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
