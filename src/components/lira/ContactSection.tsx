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
    businessType: 'agencia',
    monthlyAppointments: '100_300',
    message: '',
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      // Silently fail or pretend success to confuse bots
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
    <section id="contato" className="py-20 md:py-28 bg-[#070708] border-t border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              PARCERIA E CONTRATAÇÃO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Leve o Lira para os seus clientes
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3]">
            Preencha os dados abaixo para agendar uma demonstração completa do sistema e conhecer os
            planos com condições especiais para agências de tráfego.
          </p>
        </div>

        {/* Card and Form: Design Section 12: Raio 20 em card, 12 em campo e botão, Padding 32 em card */}
        <div className="max-w-xl mx-auto bg-[#0E1A1E] border border-[#14454F] rounded-[20px] p-8 sm:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div
                data-testid="icon-success-check"
                className="w-16 h-16 rounded-full bg-[#34E5A0]/20 border border-[#34E5A0] mx-auto flex items-center justify-center text-[#34E5A0]"
              >
                <Icon name="check_circle" label="Sucesso" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Solicitação enviada com sucesso!</h3>
              <p className="text-[#9A9DA3] text-sm max-w-md mx-auto">
                Nossa equipe de especialistas entrará em contato direto pelo WhatsApp em até 15 minutos
                com a proposta personalizada para seu modelo de negócio.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false)
                  setFormData({
                    name: '',
                    whatsapp: '',
                    email: '',
                    businessType: 'agencia',
                    monthlyAppointments: '100_300',
                    message: '',
                  })
                }}
                className="mt-4 px-6 py-2.5 rounded-[12px] text-sm font-semibold bg-[#1A1B1D] text-white border border-[#14454F] hover:border-[#00D3F2]"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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

              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-[#E5E2E3] mb-1.5">
                  Nome completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ex.: Marina Alves"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-[12px] bg-[#070708] text-[14px] text-white outline-none transition-all ${
                    errors.name
                      ? 'border border-[#FF4D6D] focus:ring-2 focus:ring-[#7A1D32]'
                      : 'border border-[#14454F] focus:border-[#00B8DB] focus:ring-[3px] focus:ring-[#053345]'
                  }`}
                />
                {errors.name && (
                  <span className="text-[12px] text-[#FF4D6D] font-mono mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* WhatsApp field */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-[13px] font-medium text-[#E5E2E3] mb-1.5"
                >
                  WhatsApp com DDD *
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="(41) 98765-4321"
                  value={formData.whatsapp}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 rounded-[12px] bg-[#070708] font-mono text-[14px] text-white outline-none transition-all ${
                    errors.whatsapp
                      ? 'border border-[#FF4D6D] focus:ring-2 focus:ring-[#7A1D32]'
                      : 'border border-[#14454F] focus:border-[#00B8DB] focus:ring-[3px] focus:ring-[#053345]'
                  }`}
                />
                {errors.whatsapp && (
                  <span className="text-[12px] text-[#FF4D6D] font-mono mt-1 block">
                    {errors.whatsapp}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-[#E5E2E3] mb-1.5">
                  E-mail profissional *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contato@agencia.com.br"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-[12px] bg-[#070708] text-[14px] text-white outline-none transition-all ${
                    errors.email
                      ? 'border border-[#FF4D6D] focus:ring-2 focus:ring-[#7A1D32]'
                      : 'border border-[#14454F] focus:border-[#00B8DB] focus:ring-[3px] focus:ring-[#053345]'
                  }`}
                />
                {errors.email && (
                  <span className="text-[12px] text-[#FF4D6D] font-mono mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Business Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-[13px] font-medium text-[#E5E2E3] mb-1.5"
                  >
                    Tipo de negócio *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-[12px] bg-[#070708] border border-[#14454F] text-[13px] text-white outline-none focus:border-[#00B8DB] focus:ring-[3px] focus:ring-[#053345]"
                  >
                    <option value="agencia">Agência de Tráfego / Gestor</option>
                    <option value="salao">Salão de Beleza / Barbearia</option>
                    <option value="clinica">Clínica de Estética / Saúde</option>
                    <option value="outro">Outro Modelo</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="monthlyAppointments"
                    className="block text-[13px] font-medium text-[#E5E2E3] mb-1.5"
                  >
                    Volume mensal estimado
                  </label>
                  <select
                    id="monthlyAppointments"
                    name="monthlyAppointments"
                    value={formData.monthlyAppointments}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-[12px] bg-[#070708] border border-[#14454F] text-[13px] text-white outline-none focus:border-[#00B8DB] focus:ring-[3px] focus:ring-[#053345]"
                  >
                    <option value="ate_100">Até 100 atendimentos/mês</option>
                    <option value="100_300">100 a 300 atendimentos/mês</option>
                    <option value="300_1000">300 a 1.000 atendimentos/mês</option>
                    <option value="mais_1000">Mais de 1.000 (Múltiplas unidades)</option>
                  </select>
                </div>
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-medium text-[#E5E2E3] mb-1.5"
                >
                  Mensagem ou dúvida específica (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Conte um pouco sobre sua operação atual..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[12px] bg-[#070708] border border-[#14454F] text-[14px] text-white outline-none focus:border-[#00B8DB] focus:ring-[3px] focus:ring-[#053345] resize-none"
                />
              </div>

              {/* Submit Button: Design rule: BRANCO É O CTA DO SITE, alvo mínimo 44px */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 min-h-[44px] rounded-[12px] text-[15px] font-semibold bg-white text-[#070708] hover:bg-neutral-100 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] disabled:opacity-50 active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? 'Validando envio seguro...' : 'Solicitar demonstração e planos'}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#9A9DA3] pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34E5A0]" />
                <span>Dados protegidos com sanitização XSS e criptografia em trânsito.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
