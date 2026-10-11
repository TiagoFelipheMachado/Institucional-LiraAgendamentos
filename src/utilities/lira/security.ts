/**
 * Sanitizes input string to prevent XSS (Cross-Site Scripting) and malicious injection.
 */
export function sanitizeText(text: string): string {
  if (typeof text !== 'string') return ''

  return (
    text
      // Remove dangerous script tags and content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      // Remove iframe tags
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      // Remove javascript: pseudo-protocol
      .replace(/javascript:[^"']*/gi, '')
      // Remove HTML tags
      .replace(/<[^>]+>/g, '')
      // Remove dangerous DOM event attributes
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
      .replace(/on\w+\s*=\s*[^>\s]+/gi, '')
      .trim()
  )
}

/**
 * Recursively sanitizes all string properties in a payload object.
 */
export function sanitizePayload<T>(obj: T): T {
  if (typeof obj === 'string') {
    return sanitizeText(obj) as unknown as T
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizePayload(item)) as unknown as T
  }

  if (obj !== null && typeof obj === 'object') {
    const sanitizedObj: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(obj)) {
      sanitizedObj[key] = sanitizePayload(value)
    }
    return sanitizedObj as T
  }

  return obj
}

export interface SpamCheckData {
  _hp_field?: string
  formLoadedAt?: number
  submittedAt?: number
  [key: string]: unknown
}

export interface SpamCheckResult {
  isSpam: boolean
  reason?: 'honeypot_triggered' | 'submission_too_fast' | 'invalid_timestamp'
}

/**
 * Protects form submissions against automated bots:
 * 1. Invisible Honeypot trap: Humans leave this empty, bots fill it.
 * 2. Minimum human interaction threshold (1.5 seconds).
 */
export function detectSpamSubmission(data: SpamCheckData): SpamCheckResult {
  // Check honeypot field
  if (data._hp_field && data._hp_field.trim().length > 0) {
    return {
      isSpam: true,
      reason: 'honeypot_triggered',
    }
  }

  // Check submission velocity
  if (data.formLoadedAt && data.submittedAt) {
    const elapsedMs = data.submittedAt - data.formLoadedAt
    if (elapsedMs < 1500) {
      return {
        isSpam: true,
        reason: 'submission_too_fast',
      }
    }
  }

  return {
    isSpam: false,
  }
}
