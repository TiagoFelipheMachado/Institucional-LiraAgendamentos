'use client'

import React, { useState, useEffect } from 'react'
import {
  formatWhatsApp,
  validateContactForm,
  ContactFormPayload,
} from '@/utilities/lira/validation'
import { sanitizePayload, detectSpamSubmission } from '@/utilities/lira/security'
import { Icon } from './Icon'

export const LiraContactSection: React.FC = () => {
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0)
  const [formData, setFormData] = useState<ContactFormPayload>({
    name: '',
    whatsapp: '',
    email: '',
    businessType: 'salao',
  })
  const [honeypot, setHoneypot] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    setFormLoadedAt(Date.now())
  }, [])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value)
    setFormData((prev) => ({ ...prev, whatsapp: formatted }))
    if (errors.whatsapp) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy.whatsapp
        return copy
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[name]
        return copy
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 1. Bot & Spam Protection
    const spamCheck = detectSpamSubmission({
      _hp_field: honeypot,
      formLoadedAt,
      submittedAt: Date.now(),
    })

    if (spamCheck.isSpam) {
      setIsSubmitting(false)
      setIsSuccess(true)
      return
    }

    // 2. Sanitization against XSS
    const sanitized = sanitizePayload(formData)

    // 3. Validation
    const validation = validateContactForm(sanitized)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    // 4. Successful submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 600)
  }

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-white dark:bg-[#070708] border-t border-neutral-200 dark:border-[#1A1B1D] text-neutral-900 dark:text-[#E5E2E3] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Reference Copy + Tilted Visual Photo Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Tag / script phrase */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="text-sm sm:text-base font-serif italic text-cyan-600 dark:text-[#38E1F8] font-medium">
                crescimento com previsibilidade 🚀
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.12] mb-5">
              Evoluir o seu espaço todos os dias não é sorte.{' '}
              <span className="block mt-1 sm:mt-1.5">
                É gestão inteligente com o{' '}
                <span className="inline-block italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent pr-1">
                  Lira.
                </span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              Líderes e profissionais que valorizam seu tempo já eliminaram faltas com sinal via Pix e colocaram a operação no automático. Dê o próximo salto no seu negócio.
            </p>

            {/* Two Tilted Business Photo Cards */}
            <div className="relative mt-2 sm:mt-4 mb-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 select-none">
              {/* Card 1: Barber */}
              <div className="relative w-32 sm:w-44 md:w-48 aspect-[3/4] rounded-[20px] overflow-hidden border-2 border-neutral-200 dark:border-[#222736] shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/segmentos/barbearia.jpg"
                  alt="Barbearia parceira Lira"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[12px] font-semibold text-white drop-shadow-sm block">Barbearias</span>
                  <span className="text-[10px] text-neutral-300 font-mono">Zero no-show</span>
                </div>
              </div>

              {/* Card 2: Salon */}
              <div className="relative w-32 sm:w-44 md:w-48 aspect-[3/4] rounded-[20px] overflow-hidden border-2 border-neutral-200 dark:border-[#222736] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300 -ml-3 sm:-ml-6 mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/segmentos/salao.jpg"
                  alt="Salão de beleza parceiro Lira"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[12px] font-semibold text-white drop-shadow-sm block">Salões &amp; Estética</span>
                  <span className="text-[10px] text-neutral-300 font-mono">Agenda cheia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-white/95 dark:bg-[#0C0D12]/95 backdrop-blur-xl border border-neutral-200 dark:border-[#1E2230] rounded-[24px] p-6 sm:p-9 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative transition-all">
              {/* Top highlight line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div
                    data-testid="icon-success-check"
                    className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-400 dark:border-emerald-500 mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-400"
                  >
                    <Icon name="check_circle" label="Sucesso" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                    Solicitação enviada com sucesso!
                  </h3>
                  <p className="text-neutral-600 dark:text-[#9A9DA3] text-sm max-w-sm mx-auto leading-relaxed">
                    Nossa equipe já recebeu seus dados e vai te chamar no WhatsApp em até 15 minutos com atendimento personalizado.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false)
                      setFormData({
                        name: '',
                        whatsapp: '',
                        email: '',
                        businessType: 'salao',
                      })
                    }}
                    className="mt-4 px-6 py-2.5 rounded-[12px] text-sm font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1A1C24] dark:hover:bg-[#252834] text-neutral-900 dark:text-white border border-neutral-300 dark:border-[#2C3040] transition-colors cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
                  {/* Form Card Header */}
                  <div className="mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                      Fale com um especialista
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#9A9DA3] mt-0.5">
                      Tire dúvidas ou agende sua demonstração gratuita.
                    </p>
                  </div>

                  {/* Invisible Honeypot anti-bot trap */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="_hp_field"
                      tabIndex={-1}
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  {/* Segment Selector Chips (Zero friction, 1-click) */}
                  <div>
                    <label className="block text-[13px] font-medium text-neutral-800 dark:text-[#E5E2E3] mb-2">
                      Seu segmento principal
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'salao', label: 'Barbearia / Salão' },
                        { id: 'clinica', label: 'Estética / Clínica' },
                        { id: 'outro', label: 'Outro modelo' },
                      ].map((item) => {
                        const isSelected = formData.businessType === item.id
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, businessType: item.id as any }))
                            }
                            className={`py-2 px-2 rounded-[10px] text-[12px] font-medium border transition-all text-center cursor-pointer ${
                              isSelected
                                ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-[#070708] dark:border-white shadow-xs font-semibold'
                                : 'bg-neutral-50 dark:bg-[#070708] text-neutral-600 dark:text-[#9A9DA3] border-neutral-200 dark:border-[#1A1C24] hover:border-neutral-300 dark:hover:border-neutral-700'
                            }`}
                          >
                            {item.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-medium text-neutral-800 dark:text-[#E5E2E3] mb-1.5"
                    >
                      Nome completo *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#7A8299] text-[18px] pointer-events-none select-none">
                        person
                      </span>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ex.: Marina Alves"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-[12px] bg-neutral-50/70 dark:bg-[#070708] text-[14px] text-neutral-900 dark:text-white outline-none transition-all ${
                          errors.name
                            ? 'border border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border border-neutral-200 dark:border-[#1E2230] focus:border-cyan-500 dark:focus:border-[#00D3F2]/60 focus:bg-white dark:focus:bg-[#090A0E] focus:ring-[3px] focus:ring-cyan-500/15'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-[12px] text-rose-500 font-mono mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* WhatsApp field */}
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-[13px] font-medium text-neutral-800 dark:text-[#E5E2E3] mb-1.5"
                    >
                      WhatsApp com DDD *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#7A8299] text-[18px] pointer-events-none select-none">
                        chat
                      </span>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="(41) 98765-4321"
                        value={formData.whatsapp}
                        onChange={handlePhoneChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-[12px] bg-neutral-50/70 dark:bg-[#070708] font-mono text-[14px] text-neutral-900 dark:text-white outline-none transition-all ${
                          errors.whatsapp
                            ? 'border border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border border-neutral-200 dark:border-[#1E2230] focus:border-cyan-500 dark:focus:border-[#00D3F2]/60 focus:bg-white dark:focus:bg-[#090A0E] focus:ring-[3px] focus:ring-cyan-500/15'
                        }`}
                      />
                    </div>
                    {errors.whatsapp && (
                      <span className="text-[12px] text-rose-500 font-mono mt-1 block">
                        {errors.whatsapp}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-medium text-neutral-800 dark:text-[#E5E2E3] mb-1.5"
                    >
                      E-mail profissional *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#7A8299] text-[18px] pointer-events-none select-none">
                        mail
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="contato@seunegocio.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-[12px] bg-neutral-50/70 dark:bg-[#070708] text-[14px] text-neutral-900 dark:text-white outline-none transition-all ${
                          errors.email
                            ? 'border border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border border-neutral-200 dark:border-[#1E2230] focus:border-cyan-500 dark:focus:border-[#00D3F2]/60 focus:bg-white dark:focus:bg-[#090A0E] focus:ring-[3px] focus:ring-cyan-500/15'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-[12px] text-rose-500 font-mono mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 min-h-[48px] rounded-[14px] text-[15px] font-semibold bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-[#070708] dark:hover:bg-neutral-100 transition-all shadow-md dark:shadow-[0_4px_24px_rgba(255,255,255,0.18)] disabled:opacity-50 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>{isSubmitting ? 'Validando envio seguro...' : 'Solicitar demonstração gratuita'}</span>
                    {!isSubmitting && (
                      <span
                        className="material-symbols-rounded text-neutral-400 group-hover:text-white dark:text-neutral-500 dark:group-hover:text-[#070708] group-hover:translate-x-1 transition-all"
                        style={{ fontSize: '18px' }}
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    )}
                  </button>

                  {/* Microcopy Trust Row */}
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-[#9A9DA3] select-none text-center">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Resposta em até 15 min
                    </span>
                    <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
                    <span>Sem compromisso</span>
                    <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
                    <span>100% livre de spam</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

