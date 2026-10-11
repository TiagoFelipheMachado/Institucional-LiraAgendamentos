export interface ValidationResult {
  valid: boolean
  error?: string
}

export interface ContactFormPayload {
  name: string
  whatsapp: string
  email: string
  businessType: 'agencia' | 'salao' | 'clinica' | 'outro' | ''
  monthlyAppointments?: string
  message?: string
}

export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

/**
 * Validates a Brazilian WhatsApp mobile number.
 * Requires valid DDD (11-99) and 9 digits starting with 9.
 * Standard format: (XX) 9XXXX-XXXX
 */
export function validateWhatsApp(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, error: 'Informe um WhatsApp com DDD e 9 dígitos.' }
  }

  // Remove country code if provided (+55)
  let clean = phone.replace(/^\+55\s*/, '').replace(/\D/g, '')

  if (clean.length !== 11) {
    return { valid: false, error: 'Informe um WhatsApp com DDD e 9 dígitos.' }
  }

  const ddd = parseInt(clean.substring(0, 2), 10)
  if (ddd < 11 || ddd > 99) {
    return { valid: false, error: 'DDD inválido.' }
  }

  const ninthDigit = clean.charAt(2)
  if (ninthDigit !== '9') {
    return { valid: false, error: 'Informe um WhatsApp com DDD e 9 dígitos.' }
  }

  return { valid: true }
}

/**
 * Dynamically formats input into Brazilian phone format:
 * Examples:
 * 41 -> (41
 * 419 -> (41) 9
 * 4198765 -> (41) 9876-5
 * 41987654321 -> (41) 98765-4321
 */
export function formatWhatsApp(value: string): string {
  if (!value) return ''

  const digits = value.replace(/\D/g, '').substring(0, 11)
  const len = digits.length

  if (len === 0) return ''
  if (len <= 2) return `(${digits}`
  if (len <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (len <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

/**
 * Validates full name with at least two words.
 */
export function validateFullName(name: string): ValidationResult {
  if (!name || typeof name !== 'string') {
    return { valid: false, error: 'Informe seu nome completo.' }
  }

  const trimmed = name.trim()
  const parts = trimmed.split(/\s+/).filter(Boolean)

  if (trimmed.length < 3 || parts.length < 2) {
    return { valid: false, error: 'Informe seu nome completo (nome e sobrenome).' }
  }

  return { valid: true }
}

/**
 * Validates standard email address.
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Informe um e-mail válido.' }
  }

  const trimmed = email.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Informe um e-mail válido.' }
  }

  return { valid: true }
}

/**
 * Validates entire contact form payload.
 */
export function validateContactForm(payload: ContactFormPayload): FormValidationResult {
  const errors: Record<string, string> = {}

  const nameVal = validateFullName(payload.name)
  if (!nameVal.valid && nameVal.error) {
    errors.name = nameVal.error
  }

  const phoneVal = validateWhatsApp(payload.whatsapp)
  if (!phoneVal.valid && phoneVal.error) {
    errors.whatsapp = phoneVal.error
  }

  const emailVal = validateEmail(payload.email)
  if (!emailVal.valid && emailVal.error) {
    errors.email = emailVal.error
  }

  if (!payload.businessType) {
    errors.businessType = 'Selecione o tipo do seu negócio.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
