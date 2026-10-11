import { describe, it, expect } from 'vitest'
import {
  validateWhatsApp,
  formatWhatsApp,
  validateFullName,
  validateEmail,
  validateContactForm,
} from '@/utilities/lira/validation'

describe('Validation Utilities (TDD)', () => {
  describe('WhatsApp Validation', () => {
    it('accepts valid Brazilian mobile numbers with DDD and 9th digit', () => {
      expect(validateWhatsApp('(41) 98765-4321').valid).toBe(true)
      expect(validateWhatsApp('(11) 99999-9999').valid).toBe(true)
      expect(validateWhatsApp('41987654321').valid).toBe(true)
      expect(validateWhatsApp('+55 41 98765-4321').valid).toBe(true)
    })

    it('rejects numbers without 9th digit or invalid DDD', () => {
      // 8 digits mobile (old format or landline) - invalid as mobile WhatsApp
      const result8 = validateWhatsApp('(41) 3234-5678')
      expect(result8.valid).toBe(false)
      expect(result8.error).toBe('Informe um WhatsApp com DDD e 9 dígitos.')

      // Invalid DDD (less than 11 or greater than 99)
      const resultDDD = validateWhatsApp('(05) 98765-4321')
      expect(resultDDD.valid).toBe(false)

      // Too short
      const resultShort = validateWhatsApp('(41) 9')
      expect(resultShort.valid).toBe(false)
      expect(resultShort.error).toBe('Informe um WhatsApp com DDD e 9 dígitos.')

      // Empty or letters
      expect(validateWhatsApp('').valid).toBe(false)
      expect(validateWhatsApp('invalid-phone').valid).toBe(false)
    })

    it('formats numbers dynamically into (XX) 9XXXX-XXXX format', () => {
      expect(formatWhatsApp('41987654321')).toBe('(41) 98765-4321')
      expect(formatWhatsApp('41')).toBe('(41')
      expect(formatWhatsApp('419')).toBe('(41) 9')
      expect(formatWhatsApp('4198765')).toBe('(41) 9876-5')
    })
  })

  describe('Full Name Validation', () => {
    it('requires at least two words with minimum 3 characters total', () => {
      expect(validateFullName('Marina Alves').valid).toBe(true)
      expect(validateFullName('Diego Ramos').valid).toBe(true)
      expect(validateFullName('João').valid).toBe(false)
      expect(validateFullName('   ').valid).toBe(false)
    })
  })

  describe('Email Validation', () => {
    it('validates proper email formats', () => {
      expect(validateEmail('agencia@exemplo.com.br').valid).toBe(true)
      expect(validateEmail('contato@lira.com').valid).toBe(true)
      expect(validateEmail('invalid-email').valid).toBe(false)
      expect(validateEmail('@domain.com').valid).toBe(false)
    })
  })

  describe('Complete Form Validation', () => {
    it('validates entire contact form payload', () => {
      const validPayload = {
        name: 'Carlos Oliveira',
        whatsapp: '(41) 99876-5432',
        email: 'carlos@agencia.com.br',
        businessType: 'agencia' as const,
        monthlyAppointments: '200_500',
        message: 'Gostaria de conhecer o plano para agências de tráfego.',
      }

      const result = validateContactForm(validPayload)
      expect(result.isValid).toBe(true)
      expect(result.errors).toEqual({})
    })

    it('accepts "clinica" as a valid businessType (matches the contact form select options)', () => {
      const payload = {
        name: 'Fernanda Souza',
        whatsapp: '(41) 99876-5432',
        email: 'fernanda@clinica.com.br',
        businessType: 'clinica' as const,
        monthlyAppointments: '100_300',
        message: '',
      }

      const result = validateContactForm(payload)
      expect(result.isValid).toBe(true)
      expect(result.errors.businessType).toBeUndefined()
    })

    it('returns structured errors when fields are invalid', () => {
      const invalidPayload = {
        name: 'Ana',
        whatsapp: '123',
        email: 'wrong',
        businessType: '' as any,
        monthlyAppointments: '',
        message: '',
      }

      const result = validateContactForm(invalidPayload)
      expect(result.isValid).toBe(false)
      expect(result.errors.name).toBeDefined()
      expect(result.errors.whatsapp).toBe('Informe um WhatsApp com DDD e 9 dígitos.')
      expect(result.errors.email).toBeDefined()
    })
  })
})
