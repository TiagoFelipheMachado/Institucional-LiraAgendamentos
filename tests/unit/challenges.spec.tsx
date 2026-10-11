import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraChallenges } from '@/components/lira/Challenges'

describe('Challenges ("Desafios") section (TDD)', () => {
  it('renders with the id used by navbar/footer anchor links', () => {
    const html = renderToString(<LiraChallenges />)
    expect(html).toContain('id="desafios"')
  })

  it('communicates the core pain points the product solves', () => {
    const html = renderToString(<LiraChallenges />)
    expect(html).toContain('No-show')
    expect(html).toContain('WhatsApp')
  })

  it('does not rely on emoji glyphs as icons for the pain-point cards', () => {
    const html = renderToString(<LiraChallenges />)
    const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u
    expect(emojiRegex.test(html)).toBe(false)
  })
})
