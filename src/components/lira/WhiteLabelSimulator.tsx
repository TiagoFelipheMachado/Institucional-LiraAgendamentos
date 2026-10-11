'use client'

import React, { useState } from 'react'
import {
  DEFAULT_LIRA_TOKENS,
  resolveWhiteLabelTheme,
  WhiteLabelTokens,
} from '@/utilities/lira/whiteLabel'

const presets: Array<{ name: string; tokens: Partial<WhiteLabelTokens> }> = [
  {
    name: 'Padrão Lira (Ciano)',
    tokens: {
      accent: '#00D3F2',
      accentInk: '#04252B',
      surface: '#070708',
      text: '#E5E2E3',
      radius: '12px',
    },
  },
  {
    name: 'Barbearia Vintage (Âmbar/Gold)',
    tokens: {
      accent: '#E5A93C',
      accentInk: '#261802',
      surface: '#0C0A09',
      text: '#F5F5F4',
      radius: '8px',
    },
  },
  {
    name: 'Studio Glow (Violeta)',
    tokens: {
      accent: '#B04DF6',
      accentInk: '#220338',
      surface: '#0B0910',
      text: '#F2EDFA',
      radius: '16px',
    },
  },
  {
    name: 'Clínica Estética (Esmeralda)',
    tokens: {
      accent: '#34E5A0',
      accentInk: '#032B1B',
      surface: '#060F0B',
      text: '#E8F7F0',
      radius: '20px',
    },
  },
]

export const LiraWhiteLabelSimulator: React.FC = () => {
  const [tokens, setTokens] = useState<WhiteLabelTokens>(DEFAULT_LIRA_TOKENS)
  const resolved = resolveWhiteLabelTheme(tokens)

  return (
    <section id="white-label" className="py-20 md:py-28 bg-[#070708] border-t border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9034F3]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              WHITE-LABEL PARA AGÊNCIAS DE TRÁFEGO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Simulador White-Label: Venda com a sua marca
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3]">
            A agência só precisa configurar 6 tokens. Todo o restante é derivado matematicamente pelo
            sistema para garantir contraste mínimo de 3:1 e legibilidade perfeita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Controls */}
          <div className="lg:col-span-5 bg-[#0E1A1E] border border-[#14454F] rounded-[20px] p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[12px] font-mono text-[#9A9DA3] uppercase tracking-[0.08em] block mb-3">
                PRESETS DE CLIENTES
              </span>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() =>
                      setTokens((prev) => ({
                        ...prev,
                        ...preset.tokens,
                      }))
                    }
                    className={`px-3 py-2 text-left rounded-[10px] text-[13px] border transition-all ${
                      tokens.accent === preset.tokens.accent
                        ? 'border-[#00D3F2] bg-[#00D3F2]/10 text-white font-medium'
                        : 'border-[#14454F] bg-[#070708]/60 text-[#9A9DA3] hover:text-[#E5E2E3]'
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#14454F]/60">
              <span className="text-[12px] font-mono text-[#9A9DA3] uppercase tracking-[0.08em] block">
                OS 6 TOKENS ESSENCIAIS
              </span>

              {/* Token 1: Accent */}
              <div>
                <div className="flex justify-between text-[13px] font-mono mb-1.5">
                  <span className="text-[#CEFAFE]">--lira-accent</span>
                  <span className="text-[#9A9DA3]">{tokens.accent}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    aria-label="Cor do acento (--lira-accent)"
                    value={tokens.accent}
                    onChange={(e) => setTokens({ ...tokens, accent: e.target.value })}
                    className="w-10 h-10 rounded-[8px] bg-transparent border border-[#14454F] cursor-pointer"
                  />
                  <input
                    type="text"
                    aria-label="Cor do acento em hexadecimal (--lira-accent)"
                    value={tokens.accent}
                    onChange={(e) => setTokens({ ...tokens, accent: e.target.value })}
                    className="w-full px-3 py-2 rounded-[8px] bg-[#070708] border border-[#14454F] font-mono text-[13px] text-[#E5E2E3] focus:border-[#00B8DB] outline-none"
                  />
                </div>
              </div>

              {/* Token 2: Radius */}
              <div>
                <div className="flex justify-between text-[13px] font-mono mb-1.5">
                  <span className="text-[#CEFAFE]">--lira-radius</span>
                  <span className="text-[#9A9DA3]">{tokens.radius}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="2"
                  value={parseInt(tokens.radius, 10) || 12}
                  onChange={(e) => setTokens({ ...tokens, radius: `${e.target.value}px` })}
                  className="w-full h-2 bg-[#1A1B1D] rounded-lg appearance-none cursor-pointer accent-[#00D3F2]"
                />
              </div>

              {/* Token 3: Font */}
              <div>
                <div className="flex justify-between text-[13px] font-mono mb-1.5">
                  <span className="text-[#CEFAFE]">--lira-font</span>
                </div>
                <select
                  value={tokens.font}
                  onChange={(e) => setTokens({ ...tokens, font: e.target.value })}
                  className="w-full px-3 py-2 rounded-[8px] bg-[#070708] border border-[#14454F] text-[13px] text-[#E5E2E3] outline-none"
                >
                  <option value="Inter, sans-serif">Inter (Geométrica Neutra)</option>
                  <option value="Geist, sans-serif">Geist Sans</option>
                  <option value="Poppins, sans-serif">Poppins</option>
                </select>
              </div>

              {/* Contrast feedback */}
              <div
                className={`p-3.5 rounded-[10px] border text-[12px] flex items-center justify-between ${
                  resolved.fallbackTriggered
                    ? 'bg-[#3A0D18]/60 border-[#7A1D32] text-[#FFA1B5]'
                    : 'bg-[#05281E]/60 border-[#0D593E] text-[#A3F3D0]'
                }`}
              >
                <span>
                  {resolved.fallbackTriggered
                    ? 'Contraste abaixo de 3:1! Fallback automático para ciano padrão.'
                    : `Contraste verificado: ${resolved.contrastRatio}:1 (≥ 3:1 OK)`}
                </span>
                <span className="font-mono font-bold">WCAG</span>
              </div>
            </div>
          </div>

          {/* Live Preview of Salon Widget / Card */}
          <div className="lg:col-span-7 bg-[#0B0F19] border border-[#14454F] rounded-[24px] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1B1D] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: resolved.accent }} />
                <span className="text-[13px] font-mono text-[#E5E2E3] uppercase tracking-wide">
                  Widget Emulado do Salão (White-Label)
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9A9DA3]">Modo Dark Balcão</span>
            </div>

            {/* Simulated Booking Widget inside salon site */}
            <div
              style={{
                borderRadius: resolved.radius,
                backgroundColor: resolved.surface,
                color: resolved.text,
                fontFamily: resolved.font,
              }}
              className="p-6 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] space-y-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-[18px] font-semibold text-white">Studio Beleza & Estilo</h4>
                  <p className="text-[13px] text-[#9A9DA3]">Agende online em segundos</p>
                </div>
                <span
                  style={{
                    backgroundColor: `${resolved.accent}20`,
                    color: resolved.accent,
                    borderColor: `${resolved.accent}40`,
                    borderRadius: resolved.radius,
                  }}
                  className="px-2.5 py-1 text-[11px] font-mono border"
                >
                  White-label Ativo
                </span>
              </div>

              {/* Service item */}
              <div className="p-3.5 rounded-[10px] bg-[#1A1B1D]/50 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-medium text-white">Corte degradê + Barba</div>
                  <div className="text-[12px] text-[#9A9DA3]">45 minutos • Prof. Rafael</div>
                </div>
                <div className="text-right">
                  <div className="text-[15px] font-semibold text-[#34E5A0]">R$ 90,00</div>
                  <div className="text-[11px] text-[#9A9DA3]">Sinal: R$ 30,00</div>
                </div>
              </div>

              {/* Available slots */}
              <div>
                <div className="text-[12px] font-mono text-[#9A9DA3] mb-2 uppercase">
                  Horários disponíveis hoje:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['14:00', '15:30', '17:00'].map((slot, i) => (
                    <button
                      key={slot}
                      type="button"
                      style={{
                        borderRadius: resolved.radius,
                        borderColor: i === 0 ? resolved.accent : 'rgba(255,255,255,0.1)',
                        backgroundColor: i === 0 ? `${resolved.accent}25` : 'transparent',
                        color: i === 0 ? resolved.accent : '#9A9DA3',
                      }}
                      className="py-2 text-[13px] font-mono border transition-all"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                style={{
                  backgroundColor: resolved.accent,
                  color: resolved.accentInk,
                  borderRadius: resolved.radius,
                }}
                className="w-full py-3 min-h-[44px] text-[14px] font-semibold transition-all shadow-[0_2px_12px_rgba(0,0,0,0.3)] active:scale-[0.99]"
              >
                Pagar sinal de R$ 30 e Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
