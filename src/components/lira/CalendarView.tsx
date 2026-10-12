'use client'

import React, { useState } from 'react'

interface CalendarDay {
  day: number
  isMuted?: boolean
  isActiveToday?: boolean
  events?: string[]
  moreCount?: number
}

const calendarDays: CalendarDay[] = [
  // Semana 1
  { day: 28, isMuted: true },
  { day: 29, isMuted: true },
  { day: 30, isMuted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },

  // Semana 2
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },

  // Semana 3
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },

  // Semana 4
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25 },

  // Semana 5
  {
    day: 26,
    isActiveToday: true,
    events: ['09:00 Maria', '09:00 Leonardo', '09:00 Leonardo'],
    moreCount: 4,
  },
  {
    day: 27,
    events: ['10:00 Amanda', '17:00 Ana'],
  },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 31 },
  { day: 1, isMuted: true },
]

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
}

const HOUR_HEIGHT = 88 // pixels per hour
const START_HOUR = 8 // 08:00
const END_HOUR = 17 // 17:00

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

export const LiraCalendarView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'month' | 'day'>('month')

  return (
    <section id="visao-geral-agenda" className="py-24 md:py-36 bg-[#070708] border-b border-[#1A1B1D] text-[#E5E2E3] relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#00D3F2]/[0.03] via-[#7C3AED]/[0.02] to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-[54px] font-semibold tracking-[-0.03em] text-[#E5E2E3] leading-[1.08] mb-6">
            Conduza cada decisão <br className="hidden sm:block" />
            adiante<span className="text-[#00D3F2]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3] max-w-xl mx-auto leading-relaxed font-normal">
            Mapeie decisões estratégicas na linha do tempo da sua operação. Mantenha a execução sem gargalos, com clareza e controle total.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: MÊS (Month View - Image 1)                                        */}
        {/* ========================================================================= */}
        {viewMode === 'month' && (
          <div className="max-w-6xl mx-auto bg-[#0A0B0E] border border-[#1A1C24] rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative transition-opacity duration-300 animate-fadeIn">
            
            {/* Calendar Top Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#161720]">
              
              {/* Left Controls: Date Switcher + Mode Toggle */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Date Selector */}
                <div className="flex items-center gap-2 bg-[#12131A] border border-[#1F212C] rounded-xl px-3 py-1.5 text-xs font-mono text-white select-none">
                  <button type="button" aria-label="Mês anterior" className="text-[#6B7280] hover:text-white transition-colors px-0.5 cursor-pointer">‹</button>
                  <span className="font-semibold tracking-wider px-1">JUL. DE 2026</span>
                  <button type="button" aria-label="Próximo mês" className="text-[#6B7280] hover:text-white transition-colors px-0.5 cursor-pointer">›</button>
                </div>

                {/* View Switcher (Dia | Mês) */}
                <div className="flex items-center bg-[#12131A] border border-[#1F212C] rounded-xl p-1 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setViewMode('day')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[#6B7280] hover:text-white transition-colors cursor-pointer"
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
                    onClick={() => setViewMode('month')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E2026] text-[#00D3F2] border border-[#00D3F2]/40 font-semibold shadow-sm cursor-pointer"
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
              </div>

              {/* Center Filter: Professional Dropdown */}
              <div className="flex items-center">
                <div className="flex items-center justify-between gap-3 bg-[#12131A] border border-[#1F212C] hover:border-[#2C2F3E] rounded-xl px-4 py-1.5 text-xs font-mono text-[#D8DAE2] transition-colors cursor-pointer w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    <span>Todos os Profissionais</span>
                  </div>
                  <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>

              {/* Right Action Buttons: Bloquear & Novo Agendamento */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#12131A] border border-[#1F212C] hover:border-[#2C2F3E] text-xs font-mono text-[#D8DAE2] hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                  <span>Bloquear</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#00D3F2] hover:bg-[#38E1F8] text-[#070708] text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,211,242,0.3)] active:scale-[0.98] cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#070708]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                <div className="grid grid-cols-7 border-b border-[#161720] text-center">
                  {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((day) => (
                    <div key={day} className="py-3 text-[11px] font-mono tracking-wider font-semibold text-[#6B7280]">
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
                        if (item.isActiveToday) {
                          setViewMode('day')
                        }
                      }}
                      className={`min-h-[82px] sm:min-h-[96px] p-2 sm:p-2.5 border-b border-r border-[#14151E] ${
                        (idx + 1) % 7 === 0 ? 'border-r-0' : ''
                      } ${
                        item.isMuted ? 'bg-[#090A0D]/50 text-[#303340]' : 'bg-[#0A0B0E] text-[#6B7280]'
                      } ${
                        item.isActiveToday ? 'cursor-pointer hover:bg-[#111620]' : 'hover:bg-[#111218]/50'
                      } flex flex-col justify-start transition-colors group relative`}
                    >
                      {/* Day Number Header */}
                      <div className="flex items-center justify-between w-full">
                        {item.isActiveToday ? (
                          <span className="w-5 h-5 rounded-md bg-[#00D3F2] text-[#070708] font-bold text-[10px] flex items-center justify-center shadow-[0_0_8px_rgba(0,211,242,0.4)]">
                            {item.day}
                          </span>
                        ) : (
                          <span className={`text-[11px] font-mono ${item.isMuted ? 'text-[#333544]' : 'text-[#6B7280]'}`}>
                            {item.day}
                          </span>
                        )}
                      </div>

                      {/* Events List inside Day */}
                      {item.events && (
                        <div className="space-y-1 mt-1.5 w-full">
                          {item.events.map((ev, eIdx) => (
                            <div
                              key={eIdx}
                              className="px-1.5 py-0.5 rounded bg-[#0A1A20] border border-[#00D3F2]/50 text-[#CEFAFE] text-[10px] font-mono truncate"
                            >
                              {ev}
                            </div>
                          ))}
                          {item.moreCount && (
                            <span className="text-[9px] font-mono text-[#6B7280] block pl-0.5">
                              + {item.moreCount} mais
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
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: DIA (Day View - Image 2)                                          */}
        {/* ========================================================================= */}
        {viewMode === 'day' && (
          <div className="max-w-6xl mx-auto space-y-4 transition-opacity duration-300 animate-fadeIn">
            
            {/* Top Toolbar Card matching Image 2 */}
            <div className="bg-[#0A0B0E] border border-[#1A1C24] rounded-2xl p-3 sm:px-5 sm:py-3.5 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-3 flex-wrap">
              
              {/* Left Controls: Date Switcher + View Mode */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Date Switcher: "< 12 de out. >" */}
                <div className="flex items-center gap-2 bg-[#12131A] border border-[#1F212C] rounded-xl px-3 py-1.5 text-xs font-mono text-white select-none">
                  <button type="button" aria-label="Dia anterior" className="text-[#6B7280] hover:text-white transition-colors px-1 cursor-pointer">‹</button>
                  <span className="font-semibold tracking-wider px-1">12 de out.</span>
                  <button type="button" aria-label="Próximo dia" className="text-[#6B7280] hover:text-white transition-colors px-1 cursor-pointer">›</button>
                </div>

                {/* View Switcher (Dia [active] | Mês) */}
                <div className="flex items-center bg-[#12131A] border border-[#1F212C] rounded-xl p-1 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setViewMode('day')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E2026] text-[#00D3F2] border border-[#00D3F2]/40 font-semibold shadow-sm cursor-pointer"
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
                    onClick={() => setViewMode('month')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[#6B7280] hover:text-white transition-colors cursor-pointer"
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
              </div>

              {/* Middle Filters: "Todos os Profissionais" + "Todos os Status" */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Todos os Profissionais Dropdown */}
                <div className="flex items-center justify-between gap-3 bg-[#12131A] border border-[#1F212C] hover:border-[#2C2F3E] rounded-xl px-3.5 py-1.5 text-xs font-mono text-[#D8DAE2] transition-colors cursor-pointer select-none">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    <span>Todos os Profissionais</span>
                  </div>
                  <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                {/* Todos os Status Dropdown (Image 2) */}
                <div className="flex items-center gap-2 bg-[#12131A] border border-[#1F212C] hover:border-[#2C2F3E] rounded-xl px-3.5 py-1.5 text-xs font-mono text-[#D8DAE2] transition-colors cursor-pointer select-none">
                  <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="14" y2="12" />
                    <line x1="4" y1="18" x2="18" y2="18" />
                  </svg>
                  <span>Todos os Status</span>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#12131A] border border-[#1F212C] hover:border-[#2C2F3E] text-xs font-mono text-[#D8DAE2] hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                  <span>Bloquear</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#00D3F2] hover:bg-[#38E1F8] text-[#070708] text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,211,242,0.3)] active:scale-[0.98] cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#070708]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Novo Agendamento</span>
                </button>
              </div>

            </div>

            {/* Main Day Schedule Card */}
            <div className="bg-[#0A0B0E] border border-[#1A1C24] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                  
                  {/* Table Column Headers (Empty corner + 3 Professionals) */}
                  <div className="grid grid-cols-[76px_repeat(3,1fr)] border-b border-[#161720]">
                    {/* Time Column header placeholder */}
                    <div className="border-r border-[#161720] h-[72px]" />

                    {/* Professionals Headers */}
                    {professionals.map((prof, idx) => (
                      <div
                        key={prof.id}
                        className={`h-[72px] px-4 flex items-center justify-center gap-3 ${
                          idx < professionals.length - 1 ? 'border-r border-[#161720]' : ''
                        }`}
                      >
                        {/* Avatar Circle */}
                        <div className="w-8 h-8 rounded-full bg-[#141620] border border-[#232738] flex items-center justify-center text-xs text-[#9CA3AF] shrink-0 font-medium">
                          {prof.name.charAt(0)}
                        </div>

                        {/* Name & Role */}
                        <div className="flex flex-col text-left">
                          <span className="text-xs sm:text-[13px] font-semibold text-[#E5E2E3] tracking-tight">
                            {prof.name}
                          </span>
                          <span className="text-[11px] text-[#6B7280]">
                            {prof.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Schedule Body: Left Time Column + 3 Columns with Appointments */}
                  <div className="grid grid-cols-[76px_repeat(3,1fr)] relative">
                    
                    {/* Left Column: Hour Labels and :15, :30, :45 subdivisions */}
                    <div className="border-r border-[#161720] select-none">
                      {timeSlots.map((time) => (
                        <div
                          key={time}
                          style={{ height: `${HOUR_HEIGHT}px` }}
                          className="border-b border-[#1A1C24] relative text-right pr-2.5 pt-1 flex flex-col justify-between pb-1"
                        >
                          <span className="text-xs font-mono font-bold text-[#E5E2E3] tracking-tight">
                            {time}
                          </span>
                          <span className="text-[10px] font-mono text-[#4B5563]">:15</span>
                          <span className="text-[10px] font-mono text-[#4B5563]">:30</span>
                          <span className="text-[10px] font-mono text-[#4B5563]">:45</span>
                        </div>
                      ))}
                    </div>

                    {/* 3 Professional Columns with Appointments */}
                    {professionals.map((prof, pIdx) => {
                      const profAppointments = dayAppointments.filter(
                        (a) => a.professionalId === prof.id,
                      )

                      return (
                        <div
                          key={prof.id}
                          className={`relative ${
                            pIdx < professionals.length - 1 ? 'border-r border-[#161720]' : ''
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
                              className="absolute inset-x-0 border-b border-[#1A1C24] pointer-events-none"
                            >
                              {/* 15m divider */}
                              <div
                                style={{ top: `${HOUR_HEIGHT * 0.25}px` }}
                                className="absolute inset-x-0 border-t border-[#141620]/80 border-dashed"
                              />
                              {/* 30m divider */}
                              <div
                                style={{ top: `${HOUR_HEIGHT * 0.5}px` }}
                                className="absolute inset-x-0 border-t border-[#171A24]"
                              />
                              {/* 45m divider */}
                              <div
                                style={{ top: `${HOUR_HEIGHT * 0.75}px` }}
                                className="absolute inset-x-0 border-t border-[#141620]/80 border-dashed"
                              />
                            </div>
                          ))}

                          {/* Appointment Cards */}
                          {profAppointments.map((appt) => {
                            const topPx = (appt.startMinutes / 60) * HOUR_HEIGHT
                            const heightPx = (appt.durationMinutes / 60) * HOUR_HEIGHT

                            return (
                              <div
                                key={appt.id}
                                style={{
                                  top: `${topPx}px`,
                                  height: `${heightPx}px`,
                                }}
                                className="absolute left-2 right-2 z-10 rounded-xl bg-gradient-to-r from-[#061C18]/95 via-[#061A16]/95 to-[#051310]/95 border border-[#0D3B31] border-l-[3.5px] border-l-[#00D3F2] p-2.5 sm:p-3 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:brightness-110 transition-all cursor-pointer group"
                              >
                                {/* Card Header: Status Badge + Client Name + Time */}
                                <div className="flex items-start justify-between gap-1.5">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {appt.status && (
                                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#10B981] uppercase">
                                        {appt.status}
                                      </span>
                                    )}
                                    <span className="text-xs sm:text-[13px] font-semibold text-white tracking-tight truncate">
                                      {appt.clientName}
                                    </span>
                                  </div>

                                  <span className="text-[10px] sm:text-[11px] font-mono text-[#8E95A5] shrink-0 font-medium">
                                    {appt.timeRange}
                                  </span>
                                </div>

                                {/* Service Row */}
                                {appt.service && (
                                  <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF] my-auto">
                                    {/* Service Scissors / Tool Icon */}
                                    <svg
                                      className="w-3 h-3 text-[#6B7280] shrink-0"
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
                                  <div className="flex items-center gap-1.5 text-[10px] text-[#6B7280] font-mono mt-auto pt-1 border-t border-[#0F352E]/50">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#142B25] border border-[#234A40]" />
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

          </div>
        )}

      </div>
    </section>
  )
}
