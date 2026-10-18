'use client'

import React, { useState, useEffect } from 'react'

interface Professional {
  id: string
  name: string
  role: string
}

const professionals: Professional[] = [
  { id: 'rosiane', name: 'Rosiane', role: 'Manicure' },
  { id: 'sophia', name: 'Sophia', role: 'Lash lifting' },
  { id: 'valentina', name: 'Valentina', role: 'Alongamento de unha' },
]

interface DayAppointment {
  id: string
  professionalId: string
  clientName: string
  timeRange: string
  startMinutes: number // minutes from 08:00
  durationMinutes: number
  service?: string
  status?: string
  showProfessionalTag?: boolean
  isDarkSubtle?: boolean
}

const HOUR_HEIGHT = 58 // pixels per hour (matches Month View grid height)

const timeSlots = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
]

// Day 12 de Outubro appointments - exact match to Image 2 reference
const dayAppointments: DayAppointment[] = [
  // Rosiane
  {
    id: 'ros-1',
    professionalId: 'rosiane',
    clientName: 'Beatriz Ferreira',
    timeRange: '09:15 — 10:45',
    startMinutes: 75, // 09:15 = 1h15m from 08:00
    durationMinutes: 90,
    service: 'Brow lamination',
    status: 'CONCLUÍDO',
    showProfessionalTag: true,
  },
  {
    id: 'ros-2',
    professionalId: 'rosiane',
    clientName: 'Beatriz Ferreira',
    timeRange: '11:30',
    startMinutes: 210, // 11:30 = 3h30m from 08:00
    durationMinutes: 48,
    isDarkSubtle: true,
  },
  {
    id: 'ros-3',
    professionalId: 'rosiane',
    clientName: 'Tiago.F',
    timeRange: '13:15 — 14:05',
    startMinutes: 315, // 13:15 = 5h15m from 08:00
    durationMinutes: 50,
    service: 'Cílios',
    status: 'CONCLUÍDO',
  },

  // Sophia
  {
    id: 'sop-1',
    professionalId: 'sophia',
    clientName: 'Camila Santos',
    timeRange: '09:45 — 11:15',
    startMinutes: 105, // 09:45 = 1h45m from 08:00
    durationMinutes: 90,
    service: 'Brow lamination',
    status: 'CONCLUÍDO',
    showProfessionalTag: true,
  },
  {
    id: 'sop-2',
    professionalId: 'sophia',
    clientName: 'Mariana Oliveira',
    timeRange: '12:15 — 13:45',
    startMinutes: 255, // 12:15 = 4h15m from 08:00
    durationMinutes: 90,
    service: 'Microblading fio a fio',
    status: 'CONCLUÍDO',
    showProfessionalTag: true,
  },

  // Valentina
  {
    id: 'val-1',
    professionalId: 'valentina',
    clientName: 'Lucas Mendes',
    timeRange: '10:00 — 10:50',
    startMinutes: 120, // 10:00 = 2h from 08:00
    durationMinutes: 50,
    service: 'Cílios',
    status: 'CONCLUÍDO',
  },
  {
    id: 'val-2',
    professionalId: 'valentina',
    clientName: 'Rafael Costa',
    timeRange: '11:30 — 12:20',
    startMinutes: 210, // 11:30 = 3h30m from 08:00
    durationMinutes: 50,
    service: 'Cílios',
    status: 'CONCLUÍDO',
  },
  {
    id: 'val-3',
    professionalId: 'valentina',
    clientName: 'Tiago.F',
    timeRange: '13:15 — 14:45',
    startMinutes: 315, // 13:15 = 5h15m from 08:00
    durationMinutes: 90,
    service: 'Limpeza de pele',
    status: 'CONCLUÍDO',
    showProfessionalTag: true,
  },
]

interface CalendarDay {
  day: number
  isMuted?: boolean
  isActiveToday?: boolean
  badgeCount?: number
  isHighlighted?: boolean
  isSpecialDay17?: boolean
  events?: string[]
  moreCount?: number
}

// Outubro 2026 calendar days - 42 células fiéis à Imagem 2
const calendarDays: CalendarDay[] = [
  // Semana 1 (Setembro/Outubro)
  { day: 27, isMuted: true },
  { day: 28, isMuted: true },
  { day: 29, isMuted: true },
  { day: 30, isMuted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },

  // Semana 2
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },

  // Semana 3 - Contém o dia 12 de Outubro
  { day: 11 },
  {
    day: 12,
    isActiveToday: true,
    events: ['09:15 Beatriz Ferreira', '09:45 Camila Santos', '10:00 Lucas Mendes'],
    moreCount: 5,
  },
  {
    day: 13,
    badgeCount: 1,
    events: ['10:00 Amanda', '17:00 Ana'],
  },
  { day: 14 },
  {
    day: 15,
    badgeCount: 1,
    isHighlighted: true,
  },
  {
    day: 16,
    badgeCount: 3,
  },
  {
    day: 17,
    isSpecialDay17: true,
  },

  // Semana 4
  { day: 18 },
  {
    day: 19,
    badgeCount: 2,
  },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },

  // Semana 5
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 31 },

  // Semana 6 (Novembro) - Fiel à imagem 2
  { day: 1, isMuted: true },
  { day: 2, isMuted: true },
  { day: 3, isMuted: true },
  { day: 4, isMuted: true },
  { day: 5, isMuted: true },
  { day: 6, isMuted: true },
  { day: 7, isMuted: true },
]

export const LiraCalendarView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'month' | 'day'>('month')
  const [selectedProfessional, setSelectedProfessional] = useState<string>('all')
  const [isProfDropdownOpen, setIsProfDropdownOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false)

  // Sync with URL hash or query params safely
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.toLowerCase()
        const search = window.location.search.toLowerCase()
        if (hash === '#dia' || search.includes('view=dia')) {
          setViewMode('day')
        } else if (hash === '#mes' || search.includes('view=mes')) {
          setViewMode('month')
        }
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const switchView = (mode: 'month' | 'day') => {
    setViewMode(mode)
    try {
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', mode === 'day' ? '#dia' : '#mes')
      }
    } catch {
      // Safely ignore if iframe prevents history replaceState
    }
  }

  // Filter appointments by selected professional and status
  const filteredAppointments = dayAppointments.filter((appt) => {
    if (selectedProfessional !== 'all' && appt.professionalId !== selectedProfessional) {
      return false
    }
    if (selectedStatus !== 'all' && appt.status !== selectedStatus) {
      return false
    }
    return true
  })

  // Visible professionals in day view
  const visibleProfessionals =
    selectedProfessional === 'all'
      ? professionals
      : professionals.filter((p) => p.id === selectedProfessional)

  return (
    <section
      id="visao-geral-agenda"
      className="py-24 md:py-36 bg-white dark:bg-[#070708] border-b border-neutral-200 dark:border-[#1A1B1D] text-neutral-900 dark:text-[#E5E2E3] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#00D3F2]/[0.03] via-[#7C3AED]/[0.02] to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-[54px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.08] mb-6">
            Sua agenda completa em <br className="hidden sm:block" />
            uma só visão<span className="text-cyan-600 dark:text-[#53EAFD]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] max-w-xl mx-auto leading-relaxed font-normal">
            Acompanhe a escala da sua equipe no dia ou no mês. Encaixe novos clientes sem conflito de horários e tenha controle visual de cada cadeira em tempo real.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: MÊS (Month View)                                                  */}
        {/* ========================================================================= */}
        {viewMode === 'month' && (
          <>
            {/* ========================================================================= */}
            {/* VERSÃO CELULAR (md:hidden) - Fiel 1:1 à Imagem 2 de referência              */}
            {/* ========================================================================= */}
            <div className="md:hidden max-w-md mx-auto space-y-3">
              {/* Card 1: Painel de Controles / Toolbar */}
              <div className="bg-white dark:bg-[#0B0D13] border border-neutral-200 dark:border-[#1B1E28] rounded-2xl p-3.5 space-y-2.5 shadow-xl">
                {/* 1. Barra de Navegação de Data */}
                <div className="flex items-center justify-between bg-neutral-100 dark:bg-[#080A10] border border-neutral-300 dark:border-[#1A1D28] rounded-xl px-4 py-2.5 text-neutral-900 dark:text-white">
                  <button
                    type="button"
                    aria-label="Mês anterior"
                    className="text-neutral-500 dark:text-[#8E92A0] hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer p-1"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span className="font-bold text-xs tracking-wider uppercase font-mono">
                    OUT. DE 2026
                  </span>
                  <button
                    type="button"
                    aria-label="Próximo mês"
                    className="text-neutral-500 dark:text-[#8E92A0] hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer p-1"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                {/* 2. Seletor de Visão (Dia | Mês) */}
                <div className="grid grid-cols-2 gap-1.5 bg-neutral-100 dark:bg-[#080A10] border border-neutral-300 dark:border-[#1A1D28] rounded-xl p-1 text-xs">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      switchView('day')
                    }}
                    className="flex items-center justify-center gap-2 py-2 rounded-lg text-neutral-600 dark:text-[#8E92A0] hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer font-medium"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>Dia</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      switchView('month')
                    }}
                    className="flex items-center justify-center gap-2 py-2 rounded-lg bg-white dark:bg-[#131F2A] text-cyan-700 dark:text-[#00D3F2] font-semibold border border-neutral-200 dark:border-[#00D3F2]/40 shadow-xs dark:shadow-[0_0_12px_rgba(0,211,242,0.15)] cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span>Mês</span>
                  </button>
                </div>

                {/* 3. Filtro: Todos os Profissionais */}
                <div className="relative">
                  <div
                    onClick={() => setIsProfDropdownOpen(!isProfDropdownOpen)}
                    className="w-full flex items-center justify-between bg-neutral-100 dark:bg-[#080A10] border border-neutral-300 dark:border-[#1A1D28] rounded-xl px-4 py-2.5 text-xs text-neutral-900 dark:text-white cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-3.5 h-3.5 text-neutral-500 dark:text-[#8E92A0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                      <span className="font-semibold">
                        {selectedProfessional === 'all'
                          ? 'Todos os Profissionais'
                          : professionals.find((p) => p.id === selectedProfessional)?.name}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-neutral-500 dark:text-[#8E92A0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>

                  {isProfDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-[#0E1017] border border-neutral-200 dark:border-[#1F212C] rounded-xl shadow-2xl p-1 z-30">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProfessional('all')
                          setIsProfDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-900 dark:text-[#E5E2E3]"
                      >
                        Todos os Profissionais
                      </button>
                      {professionals.map((prof) => (
                        <button
                          key={prof.id}
                          type="button"
                          onClick={() => {
                            setSelectedProfessional(prof.id)
                            setIsProfDropdownOpen(false)
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-900 dark:text-[#E5E2E3] flex justify-between"
                        >
                          <span>{prof.name}</span>
                          <span className="text-neutral-500 dark:text-[#6B7280]">{prof.role}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Filtro: Todos os Status */}
                <div className="relative">
                  <div
                    onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                    className="w-full flex items-center gap-2.5 bg-neutral-100 dark:bg-[#080A10] border border-neutral-300 dark:border-[#1A1D28] rounded-xl px-4 py-2.5 text-xs text-neutral-900 dark:text-white cursor-pointer select-none"
                  >
                    <svg className="w-3.5 h-3.5 text-neutral-500 dark:text-[#8E92A0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="6" x2="20" y2="6" />
                      <line x1="4" y1="12" x2="14" y2="12" />
                      <line x1="4" y1="18" x2="18" y2="18" />
                    </svg>
                    <span className="font-semibold">
                      {selectedStatus === 'all' ? 'Todos os Status' : selectedStatus}
                    </span>
                  </div>

                  {isStatusDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-[#0E1017] border border-neutral-200 dark:border-[#1F212C] rounded-xl shadow-2xl p-1 z-30">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedStatus('all')
                          setIsStatusDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-900 dark:text-[#E5E2E3]"
                      >
                        Todos os Status
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedStatus('CONCLUÍDO')
                          setIsStatusDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-emerald-600 dark:text-[#10B981] font-semibold"
                      >
                        CONCLUÍDO
                      </button>
                    </div>
                  )}
                </div>

                {/* 5. Botões de Ação: Bloquear e Agendar */}
                <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-neutral-100 dark:bg-[#12141D] border border-neutral-300 dark:border-[#232736] text-neutral-800 dark:text-white hover:text-neutral-950 dark:hover:text-white/80 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-neutral-500 dark:text-[#8E92A0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                    <span>Bloquear</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-[#00D3F2] dark:hover:bg-[#38E1F8] dark:text-[#050B14] text-xs font-bold shadow-md dark:shadow-[0_0_20px_rgba(0,211,242,0.35)] cursor-pointer transition-all active:scale-[0.98]"
                  >
                    <svg className="w-3.5 h-3.5 text-white dark:text-[#050B14]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Agendar</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Grade Compacta do Calendário (7 colunas exatas 100% de largura) */}
              <div className="bg-white dark:bg-[#0B0D13] border border-neutral-200 dark:border-[#1B1E28] rounded-2xl p-2.5 shadow-xl">
                {/* Dias da Semana */}
                <div className="grid grid-cols-7 text-center pb-2 border-b border-neutral-200 dark:border-[#181B26]">
                  {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((d) => (
                    <div key={d} className="text-[10px] font-bold text-neutral-500 dark:text-[#8E92A0] tracking-wider">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Células 6 semanas x 7 dias */}
                <div className="grid grid-cols-7 border-l border-t border-neutral-200 dark:border-[#181B26]">
                  {calendarDays.map((item, idx) => {
                    const isWeekend = idx % 7 === 0 || idx % 7 === 6
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (item.day === 12 || item.isActiveToday || item.badgeCount) {
                            switchView('day')
                          }
                        }}
                        className={`aspect-square min-h-[46px] p-1 flex flex-col justify-between border-r border-b border-neutral-200 dark:border-[#181B26] relative transition-colors ${
                          isWeekend
                            ? 'bg-rose-50/60 dark:bg-[#180C10]/70'
                            : item.isHighlighted
                            ? 'bg-cyan-50/80 dark:bg-[#202738]'
                            : item.isMuted
                            ? 'bg-neutral-100/50 dark:bg-[#08090D]/50'
                            : 'bg-white dark:bg-[#0E1017]'
                        } ${(item.day === 12 || item.badgeCount) ? 'cursor-pointer hover:brightness-105 dark:hover:brightness-125' : ''}`}
                      >
                        {/* Topo da Célula: Número do Dia + Ícone de Bloqueado no Fim de Semana */}
                        <div className="flex items-center justify-between w-full leading-none">
                          {item.isSpecialDay17 ? (
                            <span className="w-4 h-4 rounded bg-cyan-600 dark:bg-[#00D3F2] text-white dark:text-[#070708] font-bold text-[9px] flex items-center justify-center shadow-xs">
                              17
                            </span>
                          ) : (
                            <span
                              className={`text-[11px] font-bold ${
                                item.isMuted
                                  ? 'text-neutral-400 dark:text-[#3E4354]'
                                  : 'text-neutral-800 dark:text-[#D5D8E4]'
                              }`}
                            >
                              {item.day}
                            </span>
                          )}

                          {isWeekend && (
                            <svg
                              className="w-2.5 h-2.5 text-rose-500/80 dark:text-rose-500/80 shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                          )}
                        </div>

                        {/* Rodapé da Célula: Indicador de Agendamentos */}
                        {item.badgeCount ? (
                          <div className="w-full flex justify-center pb-0.5">
                            <span className="w-3.5 h-3.5 rounded-full bg-cyan-600 dark:bg-[#00D3F2] text-white dark:text-[#070708] font-bold text-[9px] flex items-center justify-center shadow-[0_0_8px_rgba(0,211,242,0.4)]">
                              {item.badgeCount}
                            </span>
                          </div>
                        ) : (
                          <div className="h-3.5" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* VERSÃO DESKTOP / TABLET (hidden md:block) - Tabela Expandida Completa     */}
            {/* ========================================================================= */}
            <div className="hidden md:block max-w-6xl mx-auto bg-neutral-50 dark:bg-[#0A0B0E] border border-neutral-200 dark:border-[#1A1C24] rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative transition-opacity duration-300">
            {/* Calendar Top Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-neutral-200 dark:border-[#161720]">
              {/* Left Controls: Date Switcher + Mode Toggle */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Date Selector */}
                <div className="flex items-center gap-2 bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] rounded-xl px-3 py-1.5 text-xs font-mono text-neutral-900 dark:text-white select-none">
                  <button
                    type="button"
                    aria-label="Mês anterior"
                    className="text-neutral-400 dark:text-[#6B7280] hover:text-neutral-900 dark:hover:text-white transition-colors px-0.5 cursor-pointer"
                  >
                    ‹
                  </button>
                  <span className="font-semibold tracking-wider px-1">OUT. DE 2026</span>
                  <button
                    type="button"
                    aria-label="Próximo mês"
                    className="text-neutral-400 dark:text-[#6B7280] hover:text-neutral-900 dark:hover:text-white transition-colors px-0.5 cursor-pointer"
                  >
                    ›
                  </button>
                </div>

                {/* View Switcher (Dia | Mês) */}
                <div className="inline-flex items-center bg-neutral-200/80 dark:bg-[#0F1015] border border-neutral-300 dark:border-[#1E202B] rounded-full p-1 text-xs font-mono z-20">
                  {/* Botão Dia (Inativo - clica para ir ao Dia) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      switchView('day')
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-neutral-600 dark:text-[#9CA3AF] hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer select-none"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>Dia</span>
                  </button>
                  {/* Botão Mês (Ativo) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      switchView('month')
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0E2026] text-cyan-700 dark:text-[#00D3F2] border border-cyan-400 dark:border-[#00D3F2] font-semibold shadow-sm dark:shadow-[0_0_12px_rgba(0,211,242,0.25)] cursor-pointer select-none"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span>Mês</span>
                  </button>
                </div>
              </div>

              {/* Center Filter: Professional Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsProfDropdownOpen(!isProfDropdownOpen)}
                  className="flex items-center justify-between gap-3 bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] hover:border-neutral-400 dark:hover:border-[#2C2F3E] rounded-xl px-4 py-1.5 text-xs font-mono text-neutral-800 dark:text-[#D8DAE2] transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    <span>
                      {selectedProfessional === 'all'
                        ? 'Todos os Profissionais'
                        : professionals.find((p) => p.id === selectedProfessional)?.name}
                    </span>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                {isProfDropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 w-56 bg-white dark:bg-[#12131A] border border-neutral-200 dark:border-[#1F212C] rounded-xl shadow-2xl p-1 z-30">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProfessional('all')
                        setIsProfDropdownOpen(false)
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-800 dark:text-[#E5E2E3]"
                    >
                      Todos os Profissionais
                    </button>
                    {professionals.map((prof) => (
                      <button
                        key={prof.id}
                        type="button"
                        onClick={() => {
                          setSelectedProfessional(prof.id)
                          setIsProfDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-800 dark:text-[#E5E2E3] flex justify-between"
                      >
                        <span>{prof.name}</span>
                        <span className="text-neutral-400 dark:text-[#6B7280]">{prof.role}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] hover:border-neutral-400 dark:hover:border-[#2C2F3E] text-xs font-mono text-neutral-700 hover:text-neutral-950 dark:text-[#D8DAE2] dark:hover:text-white transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                  <span>Bloquear</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-[#00D3F2] dark:hover:bg-[#38E1F8] dark:text-[#070708] text-xs font-bold transition-all shadow-sm dark:shadow-[0_0_15px_rgba(0,211,242,0.3)] active:scale-[0.98] cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 text-white dark:text-[#070708]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Novo Agendamento</span>
                </button>
              </div>
            </div>

            {/* Calendar Table Grid */}
            <div className="overflow-x-auto">
              <div className="min-w-[680px]">
                {/* Days Header */}
                <div className="grid grid-cols-7 border-b border-neutral-200 dark:border-[#161720] text-center">
                  {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((day) => (
                    <div
                      key={day}
                      className="py-3 text-[11px] font-mono tracking-wider font-semibold text-neutral-500 dark:text-[#6B7280]"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* 5 Weeks Calendar Cells */}
                <div className="grid grid-cols-7">
                  {calendarDays.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        // Clicar no dia 12 direciona diretamente para o design diário
                        if (item.day === 12 || item.isActiveToday) {
                          switchView('day')
                        }
                      }}
                      className={`min-h-[82px] sm:min-h-[96px] p-2 sm:p-2.5 border-b border-r border-neutral-200 dark:border-[#14151E] ${
                        (idx + 1) % 7 === 0 ? 'border-r-0' : ''
                      } ${
                        item.isMuted
                          ? 'bg-neutral-100/60 dark:bg-[#090A0D]/50 text-neutral-400 dark:text-[#303340]'
                          : 'bg-white dark:bg-[#0A0B0E] text-neutral-600 dark:text-[#6B7280]'
                      } ${
                        item.isActiveToday
                          ? 'cursor-pointer hover:bg-cyan-50/60 dark:hover:bg-[#111822]'
                          : 'hover:bg-neutral-100/50 dark:hover:bg-[#111218]/50'
                      } flex flex-col justify-start transition-colors group relative`}
                    >
                      {/* Day Number Header */}
                      <div className="flex items-center justify-between w-full">
                        {item.isActiveToday ? (
                          <span className="w-5 h-5 rounded-md bg-cyan-600 dark:bg-[#00D3F2] text-white dark:text-[#070708] font-bold text-[10px] flex items-center justify-center shadow-sm dark:shadow-[0_0_10px_rgba(0,211,242,0.5)]">
                            {item.day}
                          </span>
                        ) : (
                          <span
                            className={`text-[11px] font-mono ${
                              item.isMuted
                                ? 'text-neutral-400 dark:text-[#333544]'
                                : 'text-neutral-700 dark:text-[#6B7280]'
                            }`}
                          >
                            {item.day}
                          </span>
                        )}
                        {item.isActiveToday && (
                          <span className="text-[9px] font-mono text-cyan-700 dark:text-[#53EAFD] font-semibold tracking-wider">
                            HOJE
                          </span>
                        )}
                      </div>

                      {/* Events List inside Day */}
                      {item.events && (
                        <div className="space-y-1 mt-1.5 w-full">
                          {item.events.map((ev, eIdx) => (
                            <div
                              key={eIdx}
                              className="px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-[#0A1A20] border border-cyan-200 dark:border-[#00D3F2]/50 text-cyan-800 dark:text-[#CEFAFE] text-[10px] font-mono truncate"
                            >
                              {ev}
                            </div>
                          ))}
                          {item.moreCount && (
                            <span className="text-[9px] font-mono text-neutral-500 dark:text-[#6B7280] block pl-0.5 group-hover:text-cyan-700 dark:group-hover:text-[#53EAFD] transition-colors">
                              + {item.moreCount} mais (ver no Dia →)
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: DIA (Day View - White/Light Mode & Exact Same Size as Month View) */}
        {/* ========================================================================= */}
        {viewMode === 'day' && (
          <div className="max-w-6xl mx-auto bg-neutral-50 dark:bg-[#0A0B0E] border border-neutral-200 dark:border-[#1A1C24] rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative transition-opacity duration-300">
            {/* Top Toolbar (matches Month View toolbar layout and White Mode styling) */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-neutral-200 dark:border-[#161720]">
              {/* Left Controls: Date Switcher + View Mode */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Date Switcher: "< 12 de out. >" */}
                <div className="flex items-center gap-2 bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] rounded-xl px-3 py-1.5 text-xs font-mono text-neutral-900 dark:text-white select-none">
                  <button
                    type="button"
                    aria-label="Dia anterior"
                    className="text-neutral-400 dark:text-[#6B7280] hover:text-neutral-900 dark:hover:text-white transition-colors px-0.5 cursor-pointer"
                  >
                    ‹
                  </button>
                  <span className="font-semibold tracking-wider px-1">12 de out.</span>
                  <button
                    type="button"
                    aria-label="Próximo dia"
                    className="text-neutral-400 dark:text-[#6B7280] hover:text-neutral-900 dark:hover:text-white transition-colors px-0.5 cursor-pointer"
                  >
                    ›
                  </button>
                </div>

                {/* View Switcher (Dia [active] | Mês) */}
                <div className="inline-flex items-center bg-neutral-200/80 dark:bg-[#0F1015] border border-neutral-300 dark:border-[#1E202B] rounded-full p-1 text-xs font-mono z-20">
                  {/* Botão Dia (Ativo) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      switchView('day')
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0E2026] text-cyan-700 dark:text-[#00D3F2] border border-cyan-400 dark:border-[#00D3F2] font-semibold shadow-sm dark:shadow-[0_0_12px_rgba(0,211,242,0.25)] cursor-pointer select-none"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>Dia</span>
                  </button>
                  {/* Botão Mês (Inativo - clica para ir ao Mês) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      switchView('month')
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-neutral-600 dark:text-[#9CA3AF] hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer select-none"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span>Mês</span>
                  </button>
                </div>
              </div>

              {/* Middle Filters: "Todos os Profissionais" + "Todos os Status" */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Todos os Profissionais Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => setIsProfDropdownOpen(!isProfDropdownOpen)}
                    className="flex items-center justify-between gap-3 bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] hover:border-neutral-400 dark:hover:border-[#2C2F3E] rounded-xl px-4 py-1.5 text-xs font-mono text-neutral-800 dark:text-[#D8DAE2] transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                      <span>
                        {selectedProfessional === 'all'
                          ? 'Todos os Profissionais'
                          : professionals.find((p) => p.id === selectedProfessional)?.name}
                      </span>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>

                  {isProfDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 w-56 bg-white dark:bg-[#12131A] border border-neutral-200 dark:border-[#1F212C] rounded-xl shadow-2xl p-1 z-30">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProfessional('all')
                          setIsProfDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-800 dark:text-[#E5E2E3]"
                      >
                        Todos os Profissionais
                      </button>
                      {professionals.map((prof) => (
                        <button
                          key={prof.id}
                          type="button"
                          onClick={() => {
                            setSelectedProfessional(prof.id)
                            setIsProfDropdownOpen(false)
                          }}
                          className="w-full text-left px-3 py-1.5 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-800 dark:text-[#E5E2E3] flex justify-between"
                        >
                          <span>{prof.name}</span>
                          <span className="text-neutral-400 dark:text-[#6B7280]">{prof.role}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Todos os Status Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                    className="flex items-center gap-2 bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] hover:border-neutral-400 dark:hover:border-[#2C2F3E] rounded-xl px-3.5 py-1.5 text-xs font-mono text-neutral-800 dark:text-[#D8DAE2] transition-colors cursor-pointer select-none"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="6" x2="20" y2="6" />
                      <line x1="4" y1="12" x2="14" y2="12" />
                      <line x1="4" y1="18" x2="18" y2="18" />
                    </svg>
                    <span>{selectedStatus === 'all' ? 'Todos os Status' : selectedStatus}</span>
                  </div>

                  {isStatusDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 w-44 bg-white dark:bg-[#12131A] border border-neutral-200 dark:border-[#1F212C] rounded-xl shadow-2xl p-1 z-30">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedStatus('all')
                          setIsStatusDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-neutral-800 dark:text-[#E5E2E3]"
                      >
                        Todos os Status
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedStatus('CONCLUÍDO')
                          setIsStatusDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs font-mono rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1A1C26] text-emerald-600 dark:text-[#10B981] font-semibold"
                      >
                        CONCLUÍDO
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#12131A] border border-neutral-300 dark:border-[#1F212C] hover:border-neutral-400 dark:hover:border-[#2C2F3E] text-xs font-mono text-neutral-700 hover:text-neutral-950 dark:text-[#D8DAE2] dark:hover:text-white transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-400 dark:text-[#6B7280]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                  <span>Bloquear</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-[#00D3F2] dark:hover:bg-[#38E1F8] dark:text-[#070708] text-xs font-bold transition-all shadow-sm dark:shadow-[0_0_15px_rgba(0,211,242,0.3)] active:scale-[0.98] cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 text-white dark:text-[#070708]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Novo Agendamento</span>
                </button>
              </div>
            </div>

            {/* Day Schedule Table Grid (White Mode + Dark Mode, exact height of Month View) */}
            <div className="overflow-x-auto">
              <div className="min-w-[760px]">
                {/* Table Column Headers (Empty corner + Professionals) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `76px repeat(${visibleProfessionals.length}, minmax(0, 1fr))`,
                  }}
                  className="border-b border-neutral-200 dark:border-[#161B26] bg-neutral-100/50 dark:bg-transparent"
                >
                  {/* Time Column header placeholder */}
                  <div className="border-r border-neutral-200 dark:border-[#161B26] h-[44px]" />

                  {/* Professionals Headers */}
                  {visibleProfessionals.map((prof, idx) => (
                    <div
                      key={prof.id}
                      className={`h-[44px] px-4 flex items-center justify-center gap-2.5 ${
                        idx < visibleProfessionals.length - 1
                          ? 'border-r border-neutral-200 dark:border-[#161B26]'
                          : ''
                      }`}
                    >
                      {/* Avatar Circle */}
                      <div className="w-7 h-7 rounded-full bg-cyan-50 dark:bg-[#121622] border border-cyan-200 dark:border-[#23293D] flex items-center justify-center text-xs text-cyan-700 dark:text-[#9CA3AF] shrink-0 font-semibold">
                        {prof.name.charAt(0)}
                      </div>

                      {/* Name & Role */}
                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight">
                          {prof.name}
                        </span>
                        <span className="text-[11px] text-neutral-500 dark:text-[#6B7280] leading-tight">
                          {prof.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Schedule Body: Left Time Column + Columns with Appointments */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `76px repeat(${visibleProfessionals.length}, minmax(0, 1fr))`,
                  }}
                  className="relative bg-white dark:bg-[#0A0B0E]"
                >
                  {/* Left Column: Hour Labels and :15, :30, :45 subdivisions */}
                  <div className="border-r border-neutral-200 dark:border-[#161B26] select-none bg-neutral-100/60 dark:bg-[#090C12]/50">
                    {timeSlots.map((time) => (
                      <div
                        key={time}
                        style={{ height: `${HOUR_HEIGHT}px` }}
                        className="border-b border-neutral-200 dark:border-[#161B26] relative text-right pr-2.5 py-0.5 flex flex-col justify-between"
                      >
                        <span className="text-[11px] font-mono font-bold text-neutral-800 dark:text-white tracking-tight leading-none">
                          {time}
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 dark:text-[#4B5563] leading-none">
                          :15
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 dark:text-[#4B5563] leading-none">
                          :30
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 dark:text-[#4B5563] leading-none">
                          :45
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Professional Columns with Appointments */}
                  {visibleProfessionals.map((prof, pIdx) => {
                    const profAppointments = filteredAppointments.filter(
                      (a) => a.professionalId === prof.id,
                    )

                    return (
                      <div
                        key={prof.id}
                        className={`relative ${
                          pIdx < visibleProfessionals.length - 1
                            ? 'border-r border-neutral-200 dark:border-[#161B26]'
                            : ''
                        }`}
                        style={{ height: `${timeSlots.length * HOUR_HEIGHT}px` }}
                      >
                        {/* Background Grid Horizontal Hour & Quarter Lines */}
                        {timeSlots.map((_, hIdx) => (
                          <div
                            key={hIdx}
                            style={{
                              top: `${hIdx * HOUR_HEIGHT}px`,
                              height: `${HOUR_HEIGHT}px`,
                            }}
                            className="absolute inset-x-0 border-b border-neutral-200 dark:border-[#161B26] pointer-events-none"
                          >
                            {/* 15m divider */}
                            <div
                              style={{ top: `${HOUR_HEIGHT * 0.25}px` }}
                              className="absolute inset-x-0 border-t border-neutral-200/70 dark:border-[#131722] border-dashed"
                            />
                            {/* 30m divider */}
                            <div
                              style={{ top: `${HOUR_HEIGHT * 0.5}px` }}
                              className="absolute inset-x-0 border-t border-neutral-200/90 dark:border-[#161B26]"
                            />
                            {/* 45m divider */}
                            <div
                              style={{ top: `${HOUR_HEIGHT * 0.75}px` }}
                              className="absolute inset-x-0 border-t border-neutral-200/70 dark:border-[#131722] border-dashed"
                            />
                          </div>
                        ))}

                        {/* Appointment Cards */}
                        {profAppointments.map((appt) => {
                          const topPx = (appt.startMinutes / 60) * HOUR_HEIGHT
                          const heightPx = (appt.durationMinutes / 60) * HOUR_HEIGHT

                          // Subtle card variant (ex: 11:30 Beatriz Ferreira)
                          if (appt.isDarkSubtle) {
                            return (
                              <div
                                key={appt.id}
                                style={{
                                  top: `${topPx}px`,
                                  height: `${heightPx}px`,
                                }}
                                className="absolute left-2 right-2 z-10 rounded-xl bg-cyan-50/90 dark:bg-[#0B1416] border border-cyan-200 dark:border-[#142629] border-l-[3.5px] border-l-cyan-500 dark:border-l-[#10B981] px-3 py-1 flex items-center justify-between shadow-xs dark:shadow-md hover:brightness-[0.98] dark:hover:brightness-110 transition-all cursor-pointer overflow-hidden"
                              >
                                <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-tight truncate">
                                  {appt.clientName}
                                </span>
                                <span className="text-[10px] font-mono text-neutral-500 dark:text-[#8E95A5] shrink-0 font-medium">
                                  {appt.timeRange}
                                </span>
                              </div>
                            )
                          }

                          // Standard appointment card (White Mode + Dark Mode)
                          return (
                            <div
                              key={appt.id}
                              style={{
                                top: `${topPx}px`,
                                height: `${heightPx}px`,
                              }}
                              className="absolute left-2 right-2 z-10 rounded-xl bg-emerald-50/95 dark:bg-[#051C17] border border-emerald-200 dark:border-[#0D3B31] border-l-[3.5px] border-l-emerald-500 dark:border-l-[#10B981] px-2.5 py-1.5 flex flex-col justify-between shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:brightness-[0.98] dark:hover:brightness-110 transition-all cursor-pointer group overflow-hidden"
                            >
                              {/* Card Header: Status Badge + Client Name + Time */}
                              <div className="flex items-center justify-between gap-1.5 leading-tight">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  {appt.status && (
                                    <span className="text-[9.5px] font-mono font-bold tracking-wider text-emerald-700 dark:text-[#10B981] uppercase shrink-0">
                                      {appt.status}
                                    </span>
                                  )}
                                  <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-tight truncate">
                                    {appt.clientName}
                                  </span>
                                </div>

                                <span className="text-[10px] font-mono text-neutral-500 dark:text-[#8E95A5] shrink-0 font-medium">
                                  {appt.timeRange}
                                </span>
                              </div>

                              {/* Service Row */}
                              {appt.service && (
                                <div className="flex items-center gap-1.5 text-[10.5px] text-neutral-600 dark:text-[#9CA3AF] leading-tight my-auto">
                                  {/* Service Scissors / Tool Icon */}
                                  <svg
                                    className="w-3 h-3 text-emerald-600/80 dark:text-[#6B7280] shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle cx="6" cy="6" r="3" />
                                    <circle cx="6" cy="18" r="3" />
                                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                                  </svg>
                                  <span className="truncate">{appt.service}</span>
                                </div>
                              )}

                              {/* Bottom Professional Tag if indicated */}
                              {appt.showProfessionalTag && (
                                <div className="flex items-center gap-1.5 text-[9.5px] text-neutral-500 dark:text-[#6B7280] font-mono mt-auto pt-1 border-t border-emerald-200/70 dark:border-[#0F352E]/60 leading-none">
                                  <div className="w-3 h-3 rounded-full bg-emerald-100 dark:bg-[#142B25] border border-emerald-300 dark:border-[#234A40]" />
                                  <span>{prof.name}</span>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
