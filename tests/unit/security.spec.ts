import { describe, it, expect } from 'vitest'
import {
  sanitizeText,
  sanitizePayload,
  detectSpamSubmission,
} from '@/utilities/lira/security'

describe('Security & XSS Prevention (TDD)', () => {
  describe('Input Sanitization', () => {
    it('escapes or strips script tags and html injections', () => {
      const maliciousScript = '<script>alert("xss")</script>Olá mundo'
      const sanitized = sanitizeText(maliciousScript)
      expect(sanitized).not.toContain('<script>')
      expect(sanitized).not.toContain('</script>')
      expect(sanitized).toContain('Olá mundo')
    })

    it('neutralizes event handler attributes like onload, onerror, onclick', () => {
      const maliciousImg = '<img src=x onerror=alert(1)>Carlos'
      const sanitized = sanitizeText(maliciousImg)
      expect(sanitized).not.toContain('onerror=')
      expect(sanitized).not.toContain('<img')
      expect(sanitized).toContain('Carlos')
    })

    it('neutralizes javascript: URLs', () => {
      const maliciousLink = 'javascript:fetch("evil.com")'
      const sanitized = sanitizeText(maliciousLink)
      expect(sanitized).not.toContain('javascript:')
    })

    it('sanitizes nested object payload safely', () => {
      const rawPayload = {
        name: '<b>Pedro</b><script>alert(1)</script>',
        message: 'Normal message with <a href="javascript:steal()">link</a>',
        nested: {
          note: '<iframe src="evil.com"></iframe>teste',
        },
      }

      const sanitized = sanitizePayload(rawPayload)
      expect(sanitized.name).toBe('Pedro')
      expect(sanitized.message).not.toContain('<a')
      expect(sanitized.message).not.toContain('javascript:')
      expect(sanitized.nested.note).toBe('teste')
    })
  })

  describe('Anti-Spam & Bot Protection', () => {
    it('detects honeypot trap submissions', () => {
      const botSubmission = {
        name: 'Bot Tester',
        email: 'bot@spammer.com',
        _hp_field: 'I am a hidden bot value',
        submittedAt: Date.now() - 5000,
      }

      expect(detectSpamSubmission(botSubmission).isSpam).toBe(true)
      expect(detectSpamSubmission(botSubmission).reason).toBe('honeypot_triggered')
    })

    it('detects submissions that occur impossibly fast (< 1.5 seconds)', () => {
      const instantSubmission = {
        name: 'Fast Bot',
        email: 'fast@spammer.com',
        _hp_field: '',
        formLoadedAt: Date.now() - 800, // 800ms ago
        submittedAt: Date.now(),
      }

      expect(detectSpamSubmission(instantSubmission).isSpam).toBe(true)
      expect(detectSpamSubmission(instantSubmission).reason).toBe('submission_too_fast')
    })

    it('allows legitimate human submissions', () => {
      const humanSubmission = {
        name: 'Marina Alves',
        email: 'marina@salao.com.br',
        _hp_field: '',
        formLoadedAt: Date.now() - 8000, // 8 seconds ago
        submittedAt: Date.now(),
      }

      expect(detectSpamSubmission(humanSubmission).isSpam).toBe(false)
    })
  })
})
