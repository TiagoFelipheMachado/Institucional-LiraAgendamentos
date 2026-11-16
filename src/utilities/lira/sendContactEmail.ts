'use server'

import configPromise from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

import { allowRequest, clientIp, sanitizePayload } from './security'
import { validateContactForm, type ContactFormPayload } from './validation'

// Server-side counterpart of the contact forms: client checks can be bypassed, so validate again here.
export async function sendContactEmail(
  data: ContactFormPayload,
): Promise<{ ok: true } | { ok: false; errors: Record<string, string> }> {
  // Server actions are public endpoints: cap sends per IP so bots can't flood the inbox or burn the Resend quota.
  if (!allowRequest(`contact:${clientIp(await headers())}`, 5, 60 * 60 * 1000)) {
    return {
      ok: false,
      errors: { form: 'Muitas tentativas. Tente novamente mais tarde ou fale pelo WhatsApp.' },
    }
  }

  const sanitized = sanitizePayload(data)
  const validation = validateContactForm(sanitized)
  if (!validation.isValid) return { ok: false, errors: validation.errors }

  const { name, email, whatsapp, businessType, monthlyAppointments, message } = sanitized

  try {
    const payload = await getPayload({ config: configPromise })
    await payload.sendEmail({
      to: process.env.CONTACT_TO_EMAIL || 'atendimento@liragenda.com.br',
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `WhatsApp: ${whatsapp}`,
        `Segmento: ${businessType || '-'}`,
        monthlyAppointments && `Agendamentos/mês: ${monthlyAppointments}`,
        message && `\nMensagem:\n${message}`,
      ]
        .filter(Boolean)
        .join('\n'),
    })
    return { ok: true }
  } catch (err) {
    console.error('Failed to send contact email', err)
    return {
      ok: false,
      errors: { form: 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.' },
    }
  }
}
