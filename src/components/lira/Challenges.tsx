import React from 'react'

interface Feature {
  tag: string
  title: string
  titleHighlight: string
  desc: string
  bullets: string[]
  imagePos: 'left' | 'right'
  mockup: 'charts' | 'schedule' | 'whatsapp'
}

/* ========================================================================= */
/* MOCKUP 1: Receita por Profissional & Volume de Atendimentos (Charts)       */
/* ========================================================================= */
const RevenueChartsMockup: React.FC = () => {
  return (
    <div className="w-full relative flex items-center justify-center py-4">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#9034F3]/14 via-[#00D3F2]/10 to-transparent blur-[90px] rounded-full pointer-events-none" />

      {/* Outer Composition Wrapper */}
      <div className="relative z-10 w-full max-w-[500px] select-none">
        
        {/* Main Card: Receita por Profissional */}
        <div className="w-full bg-white dark:bg-[#0A0C14] border border-neutral-200 dark:border-[#38265E]/70 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(124,58,237,0.12)] transition-colors">
          
          {/* Card Header */}
          <div className="mb-5 sm:mb-6">
            <h4 className="text-[15px] sm:text-base font-semibold text-neutral-900 dark:text-white tracking-tight">
              Receita por Profissional
            </h4>
            <p className="text-[11px] text-neutral-500 dark:text-[#7E849E] mt-0.5">
              Performance no mês julho de 2026
            </p>
          </div>

          {/* Chart Canvas */}
          <div className="relative h-[200px] sm:h-[220px] flex">
            
            {/* Y-Axis Labels */}
            <div className="flex flex-col justify-between h-[175px] pr-3 text-[10px] font-mono text-neutral-400 dark:text-[#575E77] shrink-0 text-right w-11 select-none">
              <span>$3000</span>
              <span>$2250</span>
              <span>$1500</span>
              <span>R$750</span>
              <span>R$0</span>
            </div>

            {/* Grid Lines + Bars Container */}
            <div className="relative flex-1 h-[175px]">
              {/* Dashed Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-dashed border-neutral-200 dark:border-[#1C1F32]" />
                <div className="border-b border-dashed border-neutral-200 dark:border-[#1C1F32]" />
                <div className="border-b border-dashed border-neutral-200 dark:border-[#1C1F32]" />
                <div className="border-b border-dashed border-neutral-200 dark:border-[#1C1F32]" />
                <div className="border-b border-solid border-neutral-300 dark:border-[#22263C]" />
              </div>

              {/* Bar Columns Container */}
              <div className="absolute inset-0 grid grid-cols-5 items-end justify-items-center px-1">
                
                {/* Col 1: Vitoria */}
                <div className="flex flex-col items-center h-full justify-end w-full">
                  <div
                    className="w-7 sm:w-8 bg-[#00D3F2] rounded-t-lg shadow-[0_0_16px_rgba(0,211,242,0.35)] transition-all hover:brightness-110"
                    style={{ height: '91%' }}
                  />
                </div>

                {/* Col 2: Vanessa */}
                <div className="flex flex-col items-center h-full justify-end w-full">
                  <div
                    className="w-7 sm:w-8 bg-[#A855F7] rounded-t-lg shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all hover:brightness-110"
                    style={{ height: '33%' }}
                  />
                </div>

                {/* Col 3: Cabelereiro */}
                <div className="flex flex-col items-center h-full justify-end w-full">
                  <div
                    className="w-7 sm:w-8 bg-[#EC4899] rounded-t-md transition-all hover:brightness-110"
                    style={{ height: '5%' }}
                  />
                </div>

                {/* Col 4: Erika */}
                <div className="flex flex-col items-center h-full justify-end w-full">
                  <div
                    className="w-7 sm:w-8 bg-[#3B82F6] rounded-t-md transition-all hover:brightness-110"
                    style={{ height: '4%' }}
                  />
                </div>

                {/* Col 5: Marcelo */}
                <div className="flex flex-col items-center h-full justify-end w-full">
                  <div
                    className="w-7 sm:w-8 bg-[#10B981] rounded-t-md transition-all hover:brightness-110"
                    style={{ height: '3.5%' }}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* X-Axis Labels (Aligned beneath the columns) */}
          <div className="grid grid-cols-5 pl-11 text-center mt-1">
            <span className="text-[11px] font-medium text-neutral-800 dark:text-[#C8CDDE] truncate">Vitoria</span>
            <span className="text-[11px] font-medium text-neutral-500 dark:text-[#7E849E] truncate">Vanessa</span>
            <span className="text-[10px] font-medium text-neutral-500 dark:text-[#7E849E] truncate">Cabelereiro</span>
            <span className="text-[11px] font-medium text-neutral-500 dark:text-[#7E849E] truncate">Erika</span>
            <span className="text-[11px] font-medium text-neutral-500 dark:text-[#7E849E] truncate">Marcelo</span>
          </div>

        </div>

        {/* Floating Card: Volume de Atendimentos (overlapping on the right) */}
        <div className="absolute -top-3 sm:-top-5 -right-2 sm:-right-6 z-20 w-[64%] sm:w-[58%] max-w-[270px] bg-white/95 dark:bg-[#0D0F1B] border border-neutral-200 dark:border-[#3D256D] rounded-[22px] p-3.5 sm:p-4 shadow-[0_16px_45px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.7),0_0_25px_rgba(124,58,237,0.18)] backdrop-blur-md transition-colors">
          
          <h5 className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white tracking-tight">
            Volume de Atendimentos
          </h5>
          <p className="text-[9px] sm:text-[10px] text-neutral-500 dark:text-[#7E849E] mt-0.5 truncate">
            Distribuição no período selecionado
          </p>

          {/* Donut Chart SVG */}
          <div className="flex justify-center items-center my-2.5">
            <svg className="w-24 h-24 sm:w-28 sm:h-28 -rotate-90" viewBox="0 0 100 100">
              {/* Background circle outline */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                className="stroke-neutral-200 dark:stroke-[#171A2E]"
                strokeWidth="11"
              />
              {/* Segment 1: Purple (approx 22%) */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="#A855F7"
                strokeWidth="11"
                strokeDasharray="48 226"
                strokeDashoffset="0"
                className="transition-all hover:stroke-width-[13]"
              />
              {/* Segment 2: Cyan (approx 15%) */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="#00D3F2"
                strokeWidth="11"
                strokeDasharray="32 226"
                strokeDashoffset="-51"
                className="transition-all hover:stroke-width-[13]"
              />
              {/* Segment 3: Emerald/Teal (approx 34%) */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="#10B981"
                strokeWidth="11"
                strokeDasharray="73 226"
                strokeDashoffset="-86"
                className="transition-all hover:stroke-width-[13]"
              />
              {/* Segment 4: Sky Blue (approx 11%) */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="11"
                strokeDasharray="23 226"
                strokeDashoffset="-162"
                className="transition-all hover:stroke-width-[13]"
              />
              {/* Segment 5: Pink (approx 15%) */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="#EC4899"
                strokeWidth="11"
                strokeDasharray="32 226"
                strokeDashoffset="-188"
                className="transition-all hover:stroke-width-[13]"
              />
            </svg>
          </div>

          {/* Donut Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[9px] text-neutral-600 dark:text-[#7E849E] font-medium">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#00D3F2]" />
              <span>Cabelereiro</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#A855F7]" />
              <span>Erika</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#EC4899]" />
              <span>Marcelo</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#3B82F6]" />
              <span>Vanessa</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#10B981]" />
              <span>Vitoria</span>
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}

/* ========================================================================= */
/* MOCKUP 2: Grid da Agenda com Marcações (Schedule Timeline - Image 2)       */
/* ========================================================================= */
const ScheduleTimelineMockup: React.FC = () => {
  const hours = ['08:00', '09:00', '10:00', '11:00', '12:00']
  const quarters = [':15', ':30', ':45']

  return (
    <div className="w-full relative flex items-center justify-center py-2">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#7C3AED]/15 via-[#00D3F2]/10 to-transparent blur-[70px] rounded-full pointer-events-none" />

      {/* Outer Tablet Frame (Matches requested 475px width & Image 2 bezel) */}
      <div className="relative z-10 w-full max-w-[475px] bg-white dark:bg-[#0D101B] border-2 border-purple-300/80 dark:border-[#4B2A88]/80 rounded-[24px] p-3 sm:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(124,58,237,0.18)] select-none overflow-hidden transition-colors">
        {/* Inner Calendar Grid Table */}
        <div className="w-full bg-neutral-50/60 dark:bg-[#07090F] border border-neutral-200/90 dark:border-[#1C202E] rounded-[12px] overflow-hidden">
          {/* Top Header Row (3 columns: empty time col | Rosiane header | partial next col) */}
          <div className="flex h-[62px] bg-neutral-100/70 dark:bg-[#0B0E17] border-b border-neutral-200 dark:border-[#1E2333]">
            {/* Left Time Header Cell */}
            <div className="w-[62px] shrink-0 border-r border-neutral-200 dark:border-[#1E2333]" />

            {/* Middle Professional Header Cell: Rosiane */}
            <div className="flex-1 flex items-center justify-center gap-2.5 px-3 border-r border-neutral-200 dark:border-[#1E2333]">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/40 shrink-0 bg-neutral-200 dark:bg-[#161B29]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80"
                  alt="Rosiane"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left leading-tight">
                <h4 className="text-[13px] font-bold text-neutral-900 dark:text-white tracking-tight">
                  Rosiane
                </h4>
                <span className="text-[11px] text-neutral-500 dark:text-[#8E95A9] block">
                  Manicure
                </span>
              </div>
            </div>

            {/* Right Partial Column Header Cell */}
            <div className="w-[46px] shrink-0" />
          </div>

          {/* Schedule Body with 15-min Grid Lines & Overlays */}
          <div className="relative">
            {hours.map((hour, hIdx) => (
              <div key={hour}>
                {/* Full Hour Row (:00) - Solid top border (except first row which touches header border) */}
                <div
                  className={`flex h-[21px] ${
                    hIdx > 0 ? 'border-t border-neutral-200 dark:border-[#1E2333]' : ''
                  }`}
                >
                  <div className="w-[62px] shrink-0 pr-2.5 flex items-center justify-end border-r border-neutral-200 dark:border-[#1E2333]">
                    <span className="text-[11px] font-bold text-neutral-900 dark:text-white tracking-tight">
                      {hour}
                    </span>
                  </div>
                  <div className="flex-1 border-r border-neutral-200 dark:border-[#1E2333]" />
                  <div className="w-[46px] shrink-0" />
                </div>

                {/* Quarter-Hour Sub-rows (:15, :30, :45) - Dashed top border across all 3 columns */}
                {quarters.map((q) => (
                  <div
                    key={`${hour}-${q}`}
                    className="flex h-[21px] border-t border-dashed border-neutral-200/80 dark:border-[#151926]"
                  >
                    <div className="w-[62px] shrink-0 pr-2.5 flex items-center justify-end border-r border-neutral-200 dark:border-[#1E2333]">
                      <span className="text-[9.5px] font-mono text-neutral-400 dark:text-[#555D75]">
                        {q}
                      </span>
                    </div>
                    <div className="flex-1 border-r border-neutral-200 dark:border-[#1E2333]" />
                    <div className="w-[46px] shrink-0" />
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom Peek Row (13:00 clipped at bottom edge like Image 2) */}
            <div className="flex h-[11px] border-t border-neutral-200 dark:border-[#1E2333] overflow-hidden">
              <div className="w-[62px] shrink-0 pr-2.5 flex items-start justify-end border-r border-neutral-200 dark:border-[#1E2333]">
                <span className="text-[11px] font-bold text-neutral-900 dark:text-white tracking-tight leading-none mt-0.5">
                  13:00
                </span>
              </div>
              <div className="flex-1 border-r border-neutral-200 dark:border-[#1E2333]" />
              <div className="w-[46px] shrink-0" />
            </div>

            {/* ================================================================= */}
            {/* OVERLAY APPOINTMENT 1: CONFIRMADO (09:15 -> 10:45)                */}
            {/* Stretched across to the right edge (left-[70px] right-2.5)        */}
            {/* ================================================================= */}
            <div className="absolute top-[90px] left-[70px] right-2.5 h-[136px] z-10 bg-cyan-50/95 dark:bg-[#051821] border border-cyan-300/90 dark:border-[#0B3B4B] border-l-[4px] border-l-[#00D3F2] rounded-[14px] p-2.5 flex flex-col justify-between shadow-[0_10px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.65)] transition-colors">
              <div className="space-y-1.5">
                {/* Top row: CONFIRMADO pill + dots + time */}
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-[#052E3E] border border-cyan-300 dark:border-[#00D3F2]/30 text-[9px] font-mono font-bold text-cyan-800 dark:text-[#38E1F8] tracking-wider uppercase">
                      CONFIRMADO
                    </span>
                    <span className="text-neutral-400 dark:text-[#8E95A9] text-[11px] font-bold leading-none">
                      ...
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-cyan-950 dark:text-[#D5E6EC] whitespace-nowrap">
                    09:15 → 10:45
                  </span>
                </div>

                {/* Service Title */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <svg
                    className="w-3 h-3 text-cyan-700 dark:text-[#86A2B0] shrink-0"
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
                  <span className="text-[11.5px] font-medium text-neutral-900 dark:text-[#D5E6EC] tracking-tight truncate">
                    Brow lamination
                  </span>
                </div>

                {/* Professional row (Rosiane) */}
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="w-5 h-5 rounded-full border border-cyan-400/50 dark:border-[#1E3F4D] bg-cyan-100/60 dark:bg-[#07202B] overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Rosiane"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <span className="text-[10.5px] text-neutral-600 dark:text-[#98B0B9]">
                    Rosiane
                  </span>
                </div>
              </div>

              {/* Bottom-Right Action Buttons */}
              <div className="flex items-center justify-end gap-1.5">
                <button
                  type="button"
                  aria-label="Confirmar"
                  className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-[#051318] border border-emerald-300 dark:border-[#0B2A32] text-emerald-700 dark:text-[#10B981] flex items-center justify-center hover:bg-emerald-200 dark:hover:bg-[#09222A] transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Recusar"
                  className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-[#051318] border border-rose-300 dark:border-[#0B2A32] text-rose-700 dark:text-[#F43F5E] flex items-center justify-center hover:bg-rose-200 dark:hover:bg-[#1F0B12] transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ================================================================= */}
            {/* OVERLAY APPOINTMENT 2: Beatriz Ferr... 11:30                      */}
            {/* Stretched across to the right edge at 11:15-11:55                 */}
            {/* ================================================================= */}
            <div className="absolute top-[274px] left-[70px] right-2.5 h-[52px] z-10 bg-amber-50/95 dark:bg-[#221409] border border-amber-300/90 dark:border-[#422810] border-l-[4px] border-l-[#F59E0B] rounded-[13px] px-2.5 flex items-center justify-between shadow-[0_8px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.6)] transition-colors">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[11.5px] font-bold text-neutral-900 dark:text-white tracking-tight truncate">
                  Beatriz Ferr...
                </span>
                <span className="text-[10px] font-mono text-neutral-500 dark:text-[#B5A99B] shrink-0">
                  11:30
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  aria-label="Confirmar"
                  className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-[#140C06] border border-emerald-300 dark:border-[#2C1C0E] text-emerald-700 dark:text-[#10B981] flex items-center justify-center hover:bg-emerald-200 dark:hover:bg-[#1E140B] transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Recusar"
                  className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-[#140C06] border border-rose-300 dark:border-[#2C1C0E] text-rose-700 dark:text-[#F43F5E] flex items-center justify-center hover:bg-rose-200 dark:hover:bg-[#281014] transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========================================================================= */
/* MOCKUP 3: WhatsApp Chat com IA                                            */
/* ========================================================================= */
const WhatsAppChatMockup: React.FC = () => {
  return (
    <div className="w-full relative flex items-center justify-center py-2">
      {/* Subtle purple and cyan ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-[#7C3AED]/12 via-[#00D3F2]/6 to-transparent blur-[80px] rounded-full pointer-events-none" />

      {/* Frame / Card matching the exact 475x527 size of ScheduleTimelineMockup */}
      <div className="relative z-10 w-full max-w-[475px] min-h-[523px] sm:min-h-[527px] bg-white dark:bg-[#0A0B12] border border-neutral-200 dark:border-[#7C3AED]/70 rounded-[32px] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(124,58,237,0.15)] flex flex-col justify-between overflow-hidden transition-colors">
        <div>
          {/* Search Bar */}
          <div className="w-full bg-neutral-100 dark:bg-[#12131E] border border-neutral-200 dark:border-[#232536] rounded-2xl px-4 py-3 flex items-center gap-3 mb-5">
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
            <span className="text-[14px] text-neutral-500 dark:text-[#686B7C] font-normal select-none">
              Buscar por cliente...
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 mb-6 text-[13px] select-none no-scrollbar">
            <span className="text-neutral-500 dark:text-[#8B8F9F] px-1.5 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
              Todas
            </span>
            <span className="text-neutral-500 dark:text-[#8B8F9F] px-1.5 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
              Aguardando
            </span>
            {/* Active Tab */}
            <span className="font-medium text-cyan-700 dark:text-[#00D3F2] bg-cyan-50 dark:bg-[#0E2228] border border-cyan-300 dark:border-[#00D3F2]/60 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(0,211,242,0.15)]">
              Em atendimento
            </span>
            <span className="text-neutral-500 dark:text-[#8B8F9F] px-1.5 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
              Minhas
            </span>
            <span className="text-neutral-500 dark:text-[#8B8F9F] px-1.5 py-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
              Fin...
            </span>
          </div>
        </div>

        {/* Conversation Body */}
        <div className="space-y-5 flex-1 flex flex-col justify-between">
          {/* Contact Header */}
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-200 dark:border-[#2E3044] shrink-0 bg-neutral-100 dark:bg-[#171824] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Luisa.M"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-neutral-900 dark:text-white tracking-tight">Luisa.M</h4>
            </div>
          </div>

          {/* Bot Greeting */}
          <div className="pl-1">
            <p className="text-[14px] sm:text-[15px] text-neutral-700 dark:text-[#E0E2EC] leading-relaxed font-normal">
              Olá, Luisa.M! meu nome é Amanda, serei responsavel pelo seu atendimento. Como posso te ajudar hoje?
            </p>
          </div>

          {/* User Message */}
          <div className="w-full bg-neutral-100 dark:bg-[#151627] border border-neutral-200 dark:border-[#262840]/60 rounded-2xl p-4 sm:p-5 my-1">
            <p className="text-[14px] sm:text-[15px] text-neutral-800 dark:text-[#E0E2EC] leading-relaxed text-right sm:text-left">
              Bom dia tudo bem? &nbsp;gostaria de agendar uma limpeza de pele.
            </p>
          </div>

          {/* Bot Response with Time Options */}
          <div className="pl-1 pt-1 space-y-3.5">
            <p className="text-[14px] sm:text-[15px] text-neutral-700 dark:text-[#E0E2EC] font-normal">
              Temos esses horarios para hoje Luisa.M:
            </p>

            {/* Time Slot Buttons */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              <div className="py-3.5 px-4 rounded-2xl bg-purple-50 dark:bg-[#0D0F19] border border-purple-300 dark:border-[#7C3AED] hover:border-purple-400 dark:hover:border-[#A855F7] hover:bg-purple-100 dark:hover:bg-[#7C3AED]/15 text-purple-900 dark:text-white font-medium text-[15px] sm:text-[16px] transition-all shadow-sm text-center cursor-pointer select-none">
                13:00
              </div>
              <div className="py-3.5 px-4 rounded-2xl bg-purple-50 dark:bg-[#0D0F19] border border-purple-300 dark:border-[#7C3AED] hover:border-purple-400 dark:hover:border-[#A855F7] hover:bg-purple-100 dark:hover:bg-[#7C3AED]/15 text-purple-900 dark:text-white font-medium text-[15px] sm:text-[16px] transition-all shadow-sm text-center cursor-pointer select-none">
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
    tag: 'AGENDA INTELIGENTE & NO-SHOW ZERO',
    title: 'Fim das faltas e cadeiras vazias com ',
    titleHighlight: 'reserva confirmada.',
    desc: 'Combata o no-show na raiz com sinal Pix antecipado. O cliente escolhe o profissional e o horário pelo link em segundos, sem sobrecarregar sua equipe.',
    bullets: [
      'Agendamento rápido 24h sem precisar baixar nenhum aplicativo',
      'Confirmação com sinal via Pix que trava o horário e zera o No-show',
      'Visualização panorâmica em grade por profissional para organização visual',
    ],
    imagePos: 'right',
    mockup: 'charts',
  },
  {
    tag: 'FINANCEIRO & COMISSÕES',
    title: 'Repasses exatos e controle de caixa sem ',
    titleHighlight: 'planilhas.',
    desc: 'Esqueça cálculos manuais e desentendimentos. A cada atendimento finalizado, o Lira divide as comissões instantaneamente e atualiza o fluxo financeiro.',
    bullets: [
      'Regras flexíveis de comissão: percentual ou fixo, por serviço e produto',
      'Previsão de receitas e controle de caixa integrados na mesma tela',
      'Transparência total para o gestor e extrato claro para os parceiros',
    ],
    imagePos: 'left',
    mockup: 'schedule',
  },
  {
    tag: 'WHATSAPP & ATENDIMENTO VIRTUAL',
    title: 'Sua recepção sempre ativa no ',
    titleHighlight: 'WhatsApp.',
    desc: 'Não perca clientes por demora na resposta. A inteligência artificial acolhe, consulta a grade e confirma horários 24 horas por dia no WhatsApp.',
    bullets: [
      'Atendimento imediato no WhatsApp com linguagem humanizada e natural',
      'Lembretes preventivos de agendamento que evitam esquecimentos',
      'Transição suave para atendimento humano sempre que você preferir',
    ],
    imagePos: 'right',
    mockup: 'whatsapp',
  },
]

export const LiraChallenges: React.FC = () => {
  return (
    <section id="funcionalidades" className="relative bg-neutral-50/70 dark:bg-[#070708] py-20 md:py-32 border-b border-neutral-200 dark:border-[#1A1B1D] transition-colors duration-200">
      {/* Anchor for legacy #desafios links */}
      <span id="desafios" className="absolute -top-24 left-0 pointer-events-none opacity-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.1]">
            Toda a gestão do seu espaço em uma só{' '}
            <em className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
              plataforma.
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
                <span className="text-[11px] font-mono tracking-[0.08em] text-cyan-600 dark:text-[#53EAFD] uppercase mb-4 block">
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

                <a href="#contato" className="inline-flex items-center text-neutral-900 hover:text-cyan-600 dark:text-[#E5E2E3] dark:hover:text-[#00D3F2] font-medium transition-colors group">
                  ver como funciona 
                  <span className="material-symbols-rounded ml-1 text-cyan-600 dark:text-[#00D3F2] group-hover:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
                </a>
              </div>

              {/* Coded Mockup */}
              <div className="flex-1 w-full">
                {feature.mockup === 'charts' && <RevenueChartsMockup />}
                {feature.mockup === 'schedule' && <ScheduleTimelineMockup />}
                {feature.mockup === 'whatsapp' && <WhatsAppChatMockup />}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
