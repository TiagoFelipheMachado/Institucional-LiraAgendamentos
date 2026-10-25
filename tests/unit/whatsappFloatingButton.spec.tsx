import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraWhatsAppButton } from '@/components/lira/WhatsAppButton'
import { WHATSAPP_URL } from '@/utilities/lira/pricing'

describe('LiraWhatsAppButton (TDD)', () => {
  it('renders a fixed-position link with a 44px minimum touch target', () => {
    const html = renderToString(<LiraWhatsAppButton />)
    expect(html).toContain('fixed')
    expect(html).toMatch(/min-h-\[44px\]/)
    expect(html).toMatch(/min-w-\[44px\]/)
  })

  it('has an accessible name and points to official WhatsApp link', () => {
    const html = renderToString(<LiraWhatsAppButton />)
    expect(html).toContain(WHATSAPP_URL)
    expect(html).toMatch(/aria-label="[^"]+"/)
  })
})
