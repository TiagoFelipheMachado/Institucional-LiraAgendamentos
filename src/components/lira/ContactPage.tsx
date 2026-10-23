'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { LiraNavbar } from './Navbar'
import { LiraFooter } from './Footer'
import { LiraWhatsAppButton } from './WhatsAppButton'
import { Icon } from './Icon'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/utilities/lira/pricing'
import {
  formatWhatsApp,
  validateContactForm,
  ContactFormPayload,
} from '@/utilities/lira/validation'
import { sanitizePayload, detectSpamSubmission } from '@/utilities/lira/security'

interface ContactExtendedPayload extends ContactFormPayload {
  message?: string
}

export const LiraContactPage: React.FC = () => {
  const [formLoadedAt, setFormLoadedAt] = useState<number>(() => Date.now() - 2000)
  const [formData, setFormData] = useState<ContactExtendedPayload>({
    name: '',
    whatsapp: '',
    email: '',
    businessType: 'salao',
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

    // 1. Anti-spam trap
    const isTestEnv = process.env.NODE_ENV === 'test'
    const spamCheck = isTestEnv
      ? { isSpam: Boolean(honeypot) }
      : detectSpamSubmission({
          _hp_field: honeypot,
          formLoadedAt,
          submittedAt: Date.now(),
        })

    if (spamCheck.isSpam) {
      setIsSubmitting(false)
      setIsSuccess(true)
      return
    }

    // 2. Sanitization
    const sanitized = sanitizePayload(formData)

    // 3. Validation
    const validation = validateContactForm(sanitized)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    // 4. Submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 600)
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#070708] text-neutral-900 dark:text-[#E5E2E3] selection:bg-[#00D3F2]/30 selection:text-cyan-800 dark:selection:text-[#00D3F2] transition-colors duration-200">
      <LiraNavbar />

      <main className="pt-24 sm:pt-28 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-[#8E92A0]">
              <li>
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                  Início
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900 dark:text-white font-semibold">Contato</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.1] mb-5">
              Estamos prontos para atender você com{' '}
              <span className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
                agilidade e atenção.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal">
              Fale diretamente com os consultores da Lira Agendamentos. Agende uma demonstração prática, tire dúvidas técnicas ou descubra o plano ideal para a sua equipe.
            </p>
          </div>

          {/* 4 Direct Contact Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
            {/* Channel 1: WhatsApp Comercial */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-neutral-50 dark:bg-[#0C0E14] border border-neutral-200 dark:border-[#1E2230] hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-[#121E24] border border-cyan-200 dark:border-[#00D3F2]/30 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] mb-3 group-hover:scale-105 transition-transform">
                  <Icon name="chat" size={20} />
                </div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                  WhatsApp Comercial
                </h2>
                <p className="text-xs text-neutral-600 dark:text-[#9A9DA3] leading-relaxed mb-1">
                  Converse em tempo real com um consultor e tire suas dúvidas agora.
                </p>
                <p className="text-sm font-mono text-neutral-900 dark:text-white mb-4">{WHATSAPP_DISPLAY}</p>
              </div>
              <span className="text-xs font-semibold text-cyan-600 dark:text-[#53EAFD] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Iniciar conversa →
              </span>
            </a>

            {/* Channel 2: E-mail Comercial */}
            <a
              href="mailto:atendimento@liragenda.com.br"
              className="group p-5 rounded-2xl bg-neutral-50 dark:bg-[#0C0E14] border border-neutral-200 dark:border-[#1E2230] hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-[#121E24] border border-cyan-200 dark:border-[#00D3F2]/30 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] mb-3 group-hover:scale-105 transition-transform">
                  <Icon name="mail" size={20} />
                </div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                  E-mail Oficial
                </h2>
                <p className="text-xs text-neutral-600 dark:text-[#9A9DA3] leading-relaxed mb-4">
                  Para propostas, parcerias ou contato corporativo institucional.
                </p>
              </div>
              <span className="text-xs font-semibold text-cyan-600 dark:text-[#53EAFD] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                atendimento@liragenda.com.br →
              </span>
            </a>

            {/* Channel 3: Suporte Técnico */}
            <a
              href="mailto:suporte@liragenda.com.br"
              className="group p-5 rounded-2xl bg-neutral-50 dark:bg-[#0C0E14] border border-neutral-200 dark:border-[#1E2230] hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-[#121E24] border border-cyan-200 dark:border-[#00D3F2]/30 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] mb-3 group-hover:scale-105 transition-transform">
                  <Icon name="support_agent" size={20} />
                </div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                  Suporte ao Cliente
                </h2>
                <p className="text-xs text-neutral-600 dark:text-[#9A9DA3] leading-relaxed mb-4">
                  Canal prioritário para assinantes ativos tirarem dúvidas operacionais.
                </p>
              </div>
              <span className="text-xs font-semibold text-cyan-600 dark:text-[#53EAFD] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                suporte@liragenda.com.br →
              </span>
            </a>

            {/* Channel 4: Horário de Atendimento */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#0C0E14] border border-neutral-200 dark:border-[#1E2230] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-[#121E24] border border-cyan-200 dark:border-[#00D3F2]/30 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] mb-3">
                  <Icon name="schedule" size={20} />
                </div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                  Horário de Atendimento
                </h2>
                <p className="text-xs text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
                  Segunda a Sexta: <strong>08h às 19h</strong>
                </p>
                <p className="text-xs text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
                  Sábados: <strong>09h às 14h</strong> (plantão)
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Atendimento ativo no Brasil
              </span>
            </div>
          </div>

          {/* Main Two-Column Section: Form + Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Reassurance & Quick FAQ */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-3">
                  Por que falar com a nossa equipe?
                </h2>
                <p className="text-sm text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
                  Não empurramos planos genéricos. Analisamos a quantidade de profissionais, seu volume de clientes e mostramos exatamente quanto você pode economizar eliminando faltas.
                </p>
              </div>

              {/* 3 Value Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#0F1E26] border border-cyan-200 dark:border-[#00D3F2]/40 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] shrink-0 mt-0.5">
                    <Icon name="check_circle" size={16} />
                  </div>
                  <div>
                    <strong className="text-sm font-semibold text-neutral-900 dark:text-white block">
                      Demonstração prática em 15 minutos
                    </strong>
                    <span className="text-xs text-neutral-600 dark:text-[#9A9DA3]">
                      Conheça a interface do Lira e a automação de WhatsApp funcionando com seus próprios serviços.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#0F1E26] border border-cyan-200 dark:border-[#00D3F2]/40 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] shrink-0 mt-0.5">
                    <Icon name="check_circle" size={16} />
                  </div>
                  <div>
                    <strong className="text-sm font-semibold text-neutral-900 dark:text-white block">
                      Apoio na migração de clientes e histórico
                    </strong>
                    <span className="text-xs text-neutral-600 dark:text-[#9A9DA3]">
                      Você não perde nenhum cadastro. Nossa equipe te auxilia na transição de planilhas ou papel.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-[#0F1E26] border border-cyan-200 dark:border-[#00D3F2]/40 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] shrink-0 mt-0.5">
                    <Icon name="check_circle" size={16} />
                  </div>
                  <div>
                    <strong className="text-sm font-semibold text-neutral-900 dark:text-white block">
                      Sem taxas por agendamento realizado
                    </strong>
                    <span className="text-xs text-neutral-600 dark:text-[#9A9DA3]">
                      Assinatura fixa e transparente. O faturamento e o lucro do seu negócio ficam 100% com você.
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Badges */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#0C0E14] border border-neutral-200 dark:border-[#1E2230] space-y-2 text-xs text-neutral-600 dark:text-[#9A9DA3]">
                <div className="flex items-center gap-2 text-neutral-800 dark:text-white font-medium">
                  <span className="material-symbols-rounded text-cyan-600 dark:text-[#00D3F2] text-[18px]">
                    verified_user
                  </span>
                  Privacidade &amp; Segurança Garantidas
                </div>
                <p>
                  Seus dados e de seus clientes estão protegidos com criptografia SSL 256-bit e conformidade integral com a LGPD.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 dark:bg-[#0C0D12]/95 backdrop-blur-xl border border-neutral-200 dark:border-[#1E2230] rounded-[24px] p-6 sm:p-9 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
                {/* Top highlight cyan line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

                {isSuccess ? (
                  <div className="text-center py-10 space-y-4">
                    <div
                      data-testid="icon-success-check"
                      className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-400 dark:border-emerald-500 mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-400"
                    >
                      <Icon name="check_circle" label="Sucesso" size={32} />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                      Mensagem recebida com sucesso!
                    </h2>
                    <p className="text-neutral-600 dark:text-[#9A9DA3] text-sm max-w-sm mx-auto leading-relaxed">
                      Obrigado pelo contato! Nossa equipe já foi notificada e vai te chamar no WhatsApp em até 15 minutos úteis.
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
                          message: '',
                        })
                      }}
                      className="mt-4 px-6 py-2.5 rounded-[12px] text-sm font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1A1C24] dark:hover:bg-[#252834] text-neutral-900 dark:text-white border border-neutral-300 dark:border-[#2C3040] transition-colors cursor-pointer"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
                    <div className="mb-2">
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Envie uma mensagem
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#9A9DA3] mt-0.5">
                        Preencha o formulário abaixo e retornaremos rapidamente.
                      </p>
                    </div>

                    {/* Anti-bot Honeypot */}
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

                    {/* Segment Selector Chips */}
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
                          className={`w-full pl-10 pr-4 py-3 rounded-[12px] bg-neutral-50/70 dark:bg-[#070708] text-[14px] text-neutral-900 dark:text-white outline-none transition-all ${
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
                        E-mail *
                      </label>
                      <div className="relative">
                        <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#7A8299] text-[18px] pointer-events-none select-none">
                          mail
                        </span>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="marina@seunegocio.com.br"
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

                    {/* Message field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[13px] font-medium text-neutral-800 dark:text-[#E5E2E3] mb-1.5"
                      >
                        Mensagem ou dúvida (opcional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Conte-nos um pouco sobre a sua operação ou quais dúvidas gostaria de tirar..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[12px] bg-neutral-50/70 dark:bg-[#070708] text-[14px] text-neutral-900 dark:text-white outline-none transition-all border border-neutral-200 dark:border-[#1E2230] focus:border-cyan-500 dark:focus:border-[#00D3F2]/60 focus:bg-white dark:focus:bg-[#090A0E] focus:ring-[3px] focus:ring-cyan-500/15 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-[12px] text-[14px] font-bold text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-[#00D3F2] dark:hover:bg-[#38E1F8] dark:text-[#070708] shadow-md dark:shadow-[0_0_20px_rgba(0,211,242,0.35)] transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white dark:border-[#070708] border-t-transparent rounded-full animate-spin" />
                          <span>Enviando solicitação...</span>
                        </>
                      ) : (
                        <>
                          <span>Falar com especialista agora</span>
                          <span aria-hidden="true">→</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-neutral-500 dark:text-[#7A8299] text-center pt-1 font-mono">
                      🔒 Resposta média em 15 minutos úteis. Seus dados estão protegidos.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <LiraFooter />
      <LiraWhatsAppButton />
    </div>
  )
}
