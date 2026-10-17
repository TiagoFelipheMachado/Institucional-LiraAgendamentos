'use client'

import React, { useState } from 'react'

type FilterTab = 'todas' | 'aguardando' | 'em_atendimento' | 'minhas' | 'finalizadas'

interface ConversationScenario {
  id: FilterTab
  tabLabel: string
  clientName: string
  clientRole: string
  clientAvatar: string
  statusBadge: string
  statusType: 'ia' | 'human' | 'done'
  greeting: string
  clientMessage: string
  slotsPrompt: string
  slots: string[]
  selectedSlotDefault: string
  confirmationNote: string
  handoffLabel: string
}

const SCHEDULING_SCENARIOS: ConversationScenario[] = [
  {
    id: 'em_atendimento',
    tabLabel: 'Em atendimento',
    clientName: 'Camila.R',
    clientRole: 'WhatsApp • Atendimento via IA',
    clientAvatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'IA ATIVA',
    statusType: 'ia',
    greeting:
      'Olá, Camila.R! Meu nome é Lia, serei responsável pelo seu atendimento hoje. Como posso ajudar você?',
    clientMessage:
      'Boa tarde, tudo bem? Gostaria de agendar um design com brow lamination para hoje à tarde.',
    slotsPrompt: 'Temos esses horários disponíveis para hoje com a Sophia, Camila.R:',
    slots: ['14:00', '16:30', '18:00'],
    selectedSlotDefault: '16:30',
    confirmationNote: 'Horário pré-reservado com sinal via Pix enviado automaticamente na conversa.',
    handoffLabel: 'Contexto 100% preservado caso um atendente assuma a conversa',
  },
  {
    id: 'aguardando',
    tabLabel: 'Aguardando',
    clientName: 'Beatriz.F',
    clientRole: 'WhatsApp • Aguardando atendente',
    clientAvatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'TRANSBORDO HUMANO',
    statusType: 'human',
    greeting:
      'Olá, Beatriz.F! Sou a Lia, assistente virtual do estúdio. Qual procedimento você gostaria de agendar?',
    clientMessage:
      'Oi! Quero fazer alongamento em gel, mas tenho uma dúvida sobre manutenção de outro espaço.',
    slotsPrompt: 'Separei estes horários livres com a Valentina enquanto transfiro para a recepção:',
    slots: ['10:30', '15:00'],
    selectedSlotDefault: '15:00',
    confirmationNote: 'A IA silencia automaticamente e notifica sua recepção para responder a dúvida.',
    handoffLabel: 'Atendente humano acionado • Histórico visível na mesma tela',
  },
  {
    id: 'minhas',
    tabLabel: 'Minhas',
    clientName: 'Rafael.C',
    clientRole: 'WhatsApp • Assumida por Amanda',
    clientAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'ATENDENTE NO CONTROLE',
    statusType: 'human',
    greeting:
      'Olá, Rafael.C! Aqui é a Amanda da recepção. Vi que a IA já adiantou seu pedido de corte + barba.',
    clientMessage:
      'Isso mesmo! Queria confirmar se consigo encaixar também uma hidratação rápida no mesmo horário.',
    slotsPrompt: 'Conferi na grade e temos estes horários com tempo extra disponível hoje, Rafael.C:',
    slots: ['15:30', '17:15'],
    selectedSlotDefault: '15:30',
    confirmationNote: 'Equipe e IA trabalham juntas na mesma fila sem perder nenhuma informação.',
    handoffLabel: 'Atendimento híbrido • Transição suave entre IA e recepção',
  },
  {
    id: 'finalizadas',
    tabLabel: 'Finalizadas',
    clientName: 'Mariana.O',
    clientRole: 'WhatsApp • Reserva confirmada',
    clientAvatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'AGENDADO VIA PIX',
    statusType: 'done',
    greeting:
      'Olá, Mariana.O! Meu nome é Lia, responsável pelo seu atendimento. Qual horário fica melhor para você?',
    clientMessage:
      'Bom dia! Quero confirmar minha microblading fio a fio para hoje no primeiro horário da tarde.',
    slotsPrompt: 'Horário confirmado na agenda após pagamento do sinal via Pix, Mariana.O:',
    slots: ['12:15', '16:00'],
    selectedSlotDefault: '12:15',
    confirmationNote: 'Sinal Pix compensado e horário travado automaticamente na agenda da profissional.',
    handoffLabel: 'Agendamento concluído sem intervenção manual • Zero no-show',
  },
]

const PAYMENT_SCENARIOS: ConversationScenario[] = [
  {
    id: 'em_atendimento',
    tabLabel: 'Em atendimento',
    clientName: 'Juliana.S',
    clientRole: 'WhatsApp • Pagamento via IA',
    clientAvatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'IA ATIVA',
    statusType: 'ia',
    greeting:
      'Perfeito, Juliana.S! Pré-reservei seu horário hoje às 16:30. Para confirmar a reserva, escolha como prefere realizar o pagamento:',
    clientMessage:
      'Combinado! Quero garantir meu horário das 16:30. Vou fazer o pagamento via Pix agora mesmo.',
    slotsPrompt: 'Reserva para hoje às 16:30. Escolha como prefere pagar, Juliana.S:',
    slots: ['Pix', 'Pagar no local'],
    selectedSlotDefault: 'Pix',
    confirmationNote: 'Chave Pix Copia e Cola enviada e vaga confirmada assim que o pagamento compensar.',
    handoffLabel: 'Baixa automática no financeiro • Zero faltas (no-show) na agenda',
  },
  {
    id: 'aguardando',
    tabLabel: 'Aguardando',
    clientName: 'Fernanda.P',
    clientRole: 'WhatsApp • Dúvida no pagamento',
    clientAvatar:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'TRANSBORDO HUMANO',
    statusType: 'human',
    greeting:
      'Olá, Fernanda.P! Para confirmar seu procedimento às 15:00, escolha a forma de pagamento da sua reserva.',
    clientMessage:
      'Oi! Posso pagar via Pix agora ou escolher pagar no local quando chegar no estúdio?',
    slotsPrompt: 'Opções de pagamento disponíveis enquanto transfiro para a recepção:',
    slots: ['Pix', 'Pagar no local'],
    selectedSlotDefault: 'Pix',
    confirmationNote: 'Recepção acionada para auxiliar na confirmação mantendo a pré-reserva ativa.',
    handoffLabel: 'Reserva mantida por 30 min • Recepção assume com contexto',
  },
  {
    id: 'minhas',
    tabLabel: 'Minhas',
    clientName: 'Gabriel.T',
    clientRole: 'WhatsApp • Assumida por Amanda',
    clientAvatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'ATENDENTE NO CONTROLE',
    statusType: 'human',
    greeting:
      'Olá, Gabriel.T! Aqui é a Amanda. Atualizei o valor incluindo a hidratação que você pediu.',
    clientMessage:
      'Perfeito, Amanda! Pode confirmar minha escolha de pagamento para garantir o horário.',
    slotsPrompt: 'Escolha a forma de pagamento para confirmar seu horário das 15:30, Gabriel.T:',
    slots: ['Pix', 'Pagar no local'],
    selectedSlotDefault: 'Pix',
    confirmationNote: 'Opção registrada na conversa e conciliada direto no fechamento do profissional.',
    handoffLabel: 'Cobrança híbrida • Controle total de reservas e comissões',
  },
  {
    id: 'finalizadas',
    tabLabel: 'Finalizadas',
    clientName: 'Carolina.B',
    clientRole: 'WhatsApp • Pagamento confirmado',
    clientAvatar:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=160&h=160&q=80',
    statusBadge: 'PAGO VIA PIX',
    statusType: 'done',
    greeting:
      'Olá, Carolina.B! Recebemos a confirmação do seu pagamento via Pix para o atendimento de hoje às 14:00.',
    clientMessage:
      'Acabei de transferir o Pix! Muito prático não precisar enviar comprovante manualmente.',
    slotsPrompt: 'Forma de pagamento confirmada para a sua reserva, Carolina.B:',
    slots: ['Pix', 'Pagar no local'],
    selectedSlotDefault: 'Pix',
    confirmationNote: 'Pagamento compensado na hora e horário travado definitivamente na agenda.',
    handoffLabel: '100% automatizado • Conciliação imediata sem conferir comprovante',
  },
]

const FILTER_TABS: Array<{ id: FilterTab; label: string }> = [
  { id: 'todas', label: 'Todas' },
  { id: 'aguardando', label: 'Aguardando' },
  { id: 'em_atendimento', label: 'Em atendimento' },
  { id: 'minhas', label: 'Minhas' },
  { id: 'finalizadas', label: 'Finalizadas' },
]

interface ConversationCardProps {
  scenarios: ConversationScenario[]
  initialSelectedSlots: Record<string, string>
  selectionPrefix: string
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  scenarios,
  initialSelectedSlots,
  selectionPrefix,
}) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('em_atendimento')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSlots, setSelectedSlots] =
    useState<Record<string, string>>(initialSelectedSlots)

  const currentScenario =
    scenarios.find((s) => {
      if (searchQuery.trim()) {
        return (
          s.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.clientMessage.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      if (activeTab === 'todas') return s.id === 'em_atendimento'
      return s.id === activeTab
    }) ?? scenarios[0]

  const activeSlot =
    selectedSlots[currentScenario.id] ?? currentScenario.selectedSlotDefault

  const handleSelectSlot = (slot: string) => {
    setSelectedSlots((prev) => ({
      ...prev,
      [currentScenario.id]: slot,
    }))
  }

  return (
    <div className="w-full max-w-[540px] lg:max-w-none mx-auto relative">
      {/* Outer subtle violet/cyan glow behind the card */}
      <div className="absolute -inset-1 bg-gradient-to-b from-[#7C3AED]/20 via-[#00D3F2]/10 to-[#7C3AED]/20 rounded-[36px] blur-xl opacity-70 pointer-events-none" />

      <div className="relative bg-white dark:bg-[#0A0B12] border-2 border-purple-300/80 dark:border-[#4C2889]/80 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(124,58,237,0.16)] transition-colors">
        {/* Top Container: Search Bar + Filter Tabs */}
        <div className="p-5 sm:p-6 pb-4">
          {/* Search Bar */}
          <div className="w-full bg-neutral-100 dark:bg-[#11131F] border border-neutral-200 dark:border-[#23263A] focus-within:border-cyan-500 dark:focus-within:border-[#00D3F2]/60 rounded-2xl px-4 py-3 flex items-center gap-3 mb-5 transition-colors">
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
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por cliente..."
              aria-label="Buscar por cliente"
              className="w-full bg-transparent text-[14px] text-neutral-800 dark:text-[#E0E2EC] placeholder:text-neutral-400 dark:placeholder:text-[#686B7C] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-mono text-neutral-400 hover:text-neutral-700 dark:hover:text-white cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Status Filter Tabs (Todas | Aguardando | Em atendimento | Minhas | Finalizadas) */}
          <div className="flex items-center justify-between gap-1.5 overflow-x-auto pb-1 text-[13px] select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id)
                    setSearchQuery('')
                  }}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'font-medium text-cyan-800 dark:text-[#00D3F2] bg-cyan-50 dark:bg-[#09222C] border border-cyan-400 dark:border-[#00D3F2]/60 shadow-[0_0_14px_rgba(0,211,242,0.18)]'
                      : 'text-neutral-500 dark:text-[#8B8F9F] hover:text-neutral-900 dark:hover:text-white border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Client Profile Header */}
        <div className="px-5 sm:px-6 pt-2 pb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-200 dark:border-[#2E3044] shrink-0 bg-neutral-100 dark:bg-[#171824]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentScenario.clientAvatar}
                alt={currentScenario.clientName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-neutral-900 dark:text-white tracking-tight">
                {currentScenario.clientName}
              </h4>
              <span className="text-[11px] text-neutral-500 dark:text-[#8B8F9F] block">
                {currentScenario.clientRole}
              </span>
            </div>
          </div>

          {/* Status Pill */}
          <span
            className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
              currentScenario.statusType === 'ia'
                ? 'text-cyan-800 dark:text-[#00D3F2] bg-cyan-50 dark:bg-[#09222C] border-cyan-300 dark:border-[#00D3F2]/40'
                : currentScenario.statusType === 'human'
                  ? 'text-purple-800 dark:text-[#C4B5FD] bg-purple-50 dark:bg-[#1E1436] border-purple-300 dark:border-[#7C3AED]/50'
                  : 'text-emerald-800 dark:text-[#34D399] bg-emerald-50 dark:bg-[#06281E] border-emerald-300 dark:border-[#10B981]/40'
            }`}
          >
            {currentScenario.statusBadge}
          </span>
        </div>

        {/* Assistant Greeting Message */}
        <div className="px-5 sm:px-7 py-3">
          <p className="text-[14px] sm:text-[15px] text-neutral-700 dark:text-[#E0E2EC] leading-relaxed font-normal">
            {currentScenario.greeting}
          </p>
        </div>

        {/* Highlighted Client Message Band (Full-width band matching Image 2 style) */}
        <div className="w-full bg-purple-50/90 dark:bg-[#16122B] border-y border-purple-200/70 dark:border-[#28204A] px-6 sm:px-10 py-5 my-2">
          <p className="text-[14px] sm:text-[15px] text-neutral-800 dark:text-[#E5E7F0] leading-relaxed font-normal">
            {currentScenario.clientMessage}
          </p>
        </div>

        {/* Assistant Response + Interactive Buttons */}
        <div className="px-5 sm:px-7 pt-4 pb-6 space-y-4">
          <p className="text-[14px] sm:text-[15px] text-neutral-700 dark:text-[#E0E2EC] font-normal">
            {currentScenario.slotsPrompt}
          </p>

          {/* Interactive Buttons Grid */}
          <div
            className={`grid gap-3 pt-1 ${
              currentScenario.slots.length === 3 ? 'grid-cols-3' : 'grid-cols-2'
            }`}
          >
            {currentScenario.slots.map((slot) => {
              const isSelected = activeSlot === slot
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleSelectSlot(slot)}
                  className={`py-3.5 px-3 sm:px-4 rounded-2xl font-medium text-[14px] sm:text-[16px] transition-all text-center cursor-pointer select-none border ${
                    isSelected
                      ? 'bg-purple-100 dark:bg-[#171230] border-purple-500 dark:border-[#8B5CF6] text-purple-950 dark:text-white shadow-[0_0_20px_rgba(124,58,237,0.28)]'
                      : 'bg-purple-50/50 dark:bg-[#0D0F19] border-purple-300 dark:border-[#6D28D9]/80 hover:border-purple-400 dark:hover:border-[#A855F7] text-purple-900 dark:text-[#E0E2EC]'
                  }`}
                >
                  {slot}
                </button>
              )
            })}
          </div>

          {/* Dynamic Confirmation & Handoff Footer inside the card */}
          <div className="pt-3 border-t border-neutral-200/80 dark:border-[#1B1D2E] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px]">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-[#9A9DA3]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#34D399] shrink-0" />
              <span>
                {selectionPrefix}{' '}
                <strong className="text-neutral-900 dark:text-white font-mono">
                  {activeSlot}
                </strong>{' '}
                — {currentScenario.confirmationNote}
              </span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-[#09222C] border border-cyan-200 dark:border-[#14454F] text-[11px] font-mono text-cyan-800 dark:text-[#53EAFD] text-center">
              {currentScenario.handoffLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LiraAIFlow: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Recepção Imediata',
      desc: 'O cliente chama no WhatsApp e é recebido na hora pela assistente virtual, com a conversa organizada por fila de status.',
    },
    {
      num: '2',
      title: 'Compreensão Natural',
      desc: 'A IA entende o procedimento desejado, consulta a agenda real dos profissionais e filtra os horários disponíveis.',
    },
    {
      num: '3',
      title: 'Escolha de Horário e Pix',
      desc: 'Os horários livres aparecem como opções diretas na conversa. Ao escolher, o sistema trava a vaga e envia o sinal via Pix.',
    },
    {
      num: '4',
      title: 'Transbordo Humano',
      desc: 'Sua equipe acompanha tudo pelas abas da central e pode assumir o atendimento a qualquer momento com contexto completo.',
    },
  ]

  return (
    <section
      id="como-funciona"
      className="py-20 md:py-28 bg-neutral-50/70 dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] relative overflow-hidden transition-colors duration-200"
    >
      {/* Anchor alias used by Pillars link */}
      <div id="fluxo-ia" className="scroll-mt-24" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[420px] bg-gradient-to-tr from-[#7C3AED]/[0.06] via-[#00D3F2]/[0.05] to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0E1A1E] border border-cyan-200 dark:border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-cyan-800 dark:text-[#CEFAFE]">
              AUTOMAÇÃO INTELIGENTE & WHATSAPP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] mb-4 leading-[1.12]">
            Conversa com a IA e transbordo humano
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
            O cliente agenda naturalmente pelo WhatsApp. A IA apresenta os horários livres, garante a
            reserva e o seu atendente entra apenas nos momentos estratégicos.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 sm:mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white dark:bg-[#0C0D14]/90 border border-neutral-200 dark:border-[#1E2030] rounded-[18px] p-6 relative group hover:border-cyan-400 dark:hover:border-[#00D3F2]/50 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 dark:bg-[#00D3F2]/15 dark:border-[#00D3F2]/50 dark:text-[#53EAFD] font-mono font-semibold text-xs flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                  {step.title}
                </h4>
              </div>
              <p className="text-[13px] text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Central de Atendimento & Conversa com IA: Agendamento + Exemplo de Pagamento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full items-start">
          <ConversationCard
            scenarios={SCHEDULING_SCENARIOS}
            initialSelectedSlots={{
              em_atendimento: '16:30',
              aguardando: '15:00',
              minhas: '15:30',
              finalizadas: '12:15',
            }}
            selectionPrefix="Horário selecionado:"
          />

          <ConversationCard
            scenarios={PAYMENT_SCENARIOS}
            initialSelectedSlots={{
              em_atendimento: 'Pix',
              aguardando: 'Pix',
              minhas: 'Pix',
              finalizadas: 'Pix',
            }}
            selectionPrefix="Pagamento selecionado:"
          />
        </div>
      </div>
    </section>
  )
}


