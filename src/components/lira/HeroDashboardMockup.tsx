'use client'

import React, { useEffect, useState } from 'react'

export const HeroDashboardMockup: React.FC = () => {
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1200px) rotateX(6deg) scale(0.98)',
    transformOrigin: 'center top',
    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setTransformStyle({})
      return
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Level out smoothly from 6deg to 0deg and scale from 0.98 to 1.01 over the first 400px of scroll
          const progress = Math.min(1, Math.max(0, scrollY / 400))
          const rotateX = 6 * (1 - progress)
          const scale = 0.98 + 0.03 * progress
          setTransformStyle({
            transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
            transformOrigin: 'center top',
            transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full max-w-[530px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Ambient backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#9034F3]/12 via-[#00D3F2]/12 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

      {/* Main Window Container with Notion 3D Perspective Scroll Tilt */}
      <div
        style={transformStyle}
        className="w-full rounded-[26px] sm:rounded-[30px] bg-white dark:bg-[#0B0D14] border border-neutral-200/90 dark:border-[#1E2333] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_40px_rgba(0,211,242,0.06)] overflow-hidden transition-all duration-300"
      >
        {/* Top Window Bar */}
        <div className="px-5 sm:px-6 py-4 flex items-center justify-between border-b border-neutral-100 dark:border-[#161A26] select-none bg-neutral-50/40 dark:bg-[#0E1018]/50">
          {/* 3 Window Control Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300/80 dark:bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300/80 dark:bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300/80 dark:bg-neutral-700" />
          </div>

          {/* Date Label */}
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.08em] uppercase text-neutral-400 dark:text-[#7A8299] font-medium">
            QUARTA-FEIRA, 24 DE OUTUBRO
          </span>
        </div>

        {/* Window Body (2 Columns) */}
        <div className="grid grid-cols-12 min-h-[340px]">
          {/* Left Column / Sidebar (Skeleton Layout) */}
          <div className="col-span-4 border-r border-neutral-100 dark:border-[#161A26] p-4 sm:p-5 flex flex-col justify-between select-none bg-neutral-50/20 dark:bg-transparent">
            {/* Top Skeleton Items */}
            <div className="space-y-3">
              {/* Active Item Pill */}
              <div className="h-6 sm:h-7 w-full rounded-[8px] bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100/60 dark:border-indigo-800/30 flex items-center px-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mr-2 shrink-0" />
                <div className="h-1.5 w-12 rounded-full bg-indigo-400/50 dark:bg-indigo-400/40" />
              </div>

              {/* Skeleton Lines */}
              <div className="space-y-2.5 pl-1 pt-1">
                <div className="h-2 w-4/5 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                <div className="h-2 w-3/4 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                <div className="h-2 w-3/5 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                <div className="h-2 w-4/5 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
              </div>
            </div>

            {/* Bottom Skeleton Pill */}
            <div className="pl-1 pt-8 pb-1">
              <div className="h-2.5 w-3/5 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
            </div>
          </div>

          {/* Right Column / Main Dashboard Content */}
          <div className="col-span-8 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Top KPI Metrics Row */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.06em] uppercase text-neutral-400 dark:text-[#7A8299] font-medium block mb-1">
                    SALDO DISPONÍVEL
                  </span>
                  <span className="text-lg sm:text-2xl lg:text-[25px] font-bold tracking-tight text-neutral-900 dark:text-white font-mono block">
                    R$ 14.820,00
                  </span>
                </div>

                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.06em] uppercase text-neutral-400 dark:text-[#7A8299] font-medium block mb-1">
                    AGENDAMENTOS HOJE
                  </span>
                  <span className="text-lg sm:text-2xl lg:text-[25px] font-bold tracking-tight text-neutral-900 dark:text-white font-mono block">
                    12
                  </span>
                </div>
              </div>

              {/* Section Header */}
              <div className="mt-2 mb-3">
                <h4 className="text-[13px] sm:text-[14px] font-bold text-neutral-900 dark:text-white tracking-tight">
                  Próximos Horários
                </h4>
              </div>

              {/* Appointments Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-3">
                {/* Card 1: Ana Clara */}
                <div className="p-3 sm:p-3.5 rounded-[14px] sm:rounded-[16px] bg-white dark:bg-[#121520] border border-neutral-200/90 dark:border-[#222736] shadow-xs hover:border-indigo-400/50 dark:hover:border-indigo-400/50 transition-colors">
                  <span className="text-[11px] sm:text-[12px] font-mono font-bold text-indigo-600 dark:text-indigo-400 block">
                    09:00
                  </span>
                  <span className="text-[12.5px] sm:text-[13.5px] font-bold text-neutral-900 dark:text-white block mt-0.5 truncate">
                    Ana Clara
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-neutral-500 dark:text-[#8E95A9] block truncate">
                    Corte + Coloração
                  </span>
                </div>

                {/* Card 2: Beatriz Silva */}
                <div className="p-3 sm:p-3.5 rounded-[14px] sm:rounded-[16px] bg-white dark:bg-[#121520] border border-neutral-200/90 dark:border-[#222736] shadow-xs hover:border-indigo-400/50 dark:hover:border-indigo-400/50 transition-colors">
                  <span className="text-[11px] sm:text-[12px] font-mono font-bold text-indigo-600 dark:text-indigo-400 block">
                    10:30
                  </span>
                  <span className="text-[12.5px] sm:text-[13.5px] font-bold text-neutral-900 dark:text-white block mt-0.5 truncate">
                    Beatriz Silva
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-neutral-500 dark:text-[#8E95A9] block truncate">
                    Manicure
                  </span>
                </div>

                {/* Card 3: Carla Santos */}
                <div className="p-3 sm:p-3.5 rounded-[14px] sm:rounded-[16px] bg-white dark:bg-[#121520] border border-neutral-200/90 dark:border-[#222736] shadow-xs hover:border-indigo-400/50 dark:hover:border-indigo-400/50 transition-colors">
                  <span className="text-[11px] sm:text-[12px] font-mono font-bold text-indigo-600 dark:text-indigo-400 block">
                    11:15
                  </span>
                  <span className="text-[12.5px] sm:text-[13.5px] font-bold text-neutral-900 dark:text-white block mt-0.5 truncate">
                    Carla Santos
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-neutral-500 dark:text-[#8E95A9] block truncate">
                    Design Sobrancelha
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Peeking Preview Box */}
            <div className="h-6 sm:h-7 w-full rounded-t-[14px] bg-indigo-50/50 dark:bg-indigo-950/20 border-t border-indigo-100/60 dark:border-indigo-800/20 mt-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
