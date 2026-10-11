import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraWhatsAppButton } from '@/components/lira/WhatsAppButton'

describe('LiraWhatsAppButton (TDD)', () => {
  it('renders a fixed-position link with a 44px minimum touch target', () => {
    const html = renderToString(<LiraWhatsAppButton />)
    expect(html).toContain('fixed')
    expect(html).toMatch(/min-h-\[44px\]/)
    expect(html).toMatch(/min-w-\[44px\]/)
  })

  it('has an accessible name and does not falsely claim a live WhatsApp number', () => {
    const html = renderToString(<LiraWhatsAppButton />)
    // No fabricated wa.me phone number — routes to the real contact form instead.
    expect(html).not.toMatch(/wa\.me\/\d/)
    expect(html).toContain('href="#contato"')
    expect(html).toMatch(/aria-label="[^"]+"/)
  })
})
