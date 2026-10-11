import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Icon } from '@/components/lira/Icon'

describe('Icon component — single icon family (Material Symbols Rounded) (TDD)', () => {
  it('renders the icon ligature name inside the Material Symbols font class', () => {
    const html = renderToString(<Icon name="check_circle" />)
    expect(html).toContain('material-symbols-rounded')
    expect(html).toContain('check_circle')
  })

  it('is hidden from assistive tech by default (decorative, paired with visible text)', () => {
    const html = renderToString(<Icon name="menu" />)
    expect(html).toContain('aria-hidden="true"')
  })

  it('accepts an explicit aria-label for icon-only controls, per the design system rule', () => {
    const html = renderToString(<Icon name="close" label="Fechar menu" />)
    expect(html).toContain('aria-label="Fechar menu"')
    expect(html).not.toContain('aria-hidden="true"')
  })

  it('never renders more than one icon family (no raw SVG paths, no emoji)', () => {
    const html = renderToString(<Icon name="check_circle" />)
    expect(html).not.toContain('<svg')
    const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u
    expect(emojiRegex.test(html)).toBe(false)
  })
})
