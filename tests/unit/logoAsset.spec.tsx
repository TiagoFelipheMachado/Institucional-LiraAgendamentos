import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraLogo } from '@/components/lira/Navbar'

describe('LiraLogo — new brand asset (TDD)', () => {
  it('the provided logo SVG is saved as a public asset, unmodified', () => {
    const svgPath = path.resolve(process.cwd(), 'public/logo-lira.svg')
    expect(fs.existsSync(svgPath)).toBe(true)

    const contents = fs.readFileSync(svgPath, 'utf-8')
    expect(contents).toContain('viewBox="0 0 280 43"')
    expect(contents).toContain('#22D3EE')
    expect(contents).toContain('#A855F7')
  })

  it('LiraLogo renders the new logo asset instead of the old hand-built icon+wordmark', () => {
    const html = renderToString(<LiraLogo size={32} />)
    expect(html).toContain('/logo-lira.svg')
    expect(html).toMatch(/alt="[^"]*Lira[^"]*"/)
    // Old implementation's inline gradient <defs> / hand-drawn stroke path should be gone.
    expect(html).not.toContain('linearGradient')
  })

  it('scales width proportionally to the asset\'s native 280:43 aspect ratio', () => {
    const html = renderToString(<LiraLogo size={32} />)
    const widthMatch = html.match(/width="(\d+)"/)
    const heightMatch = html.match(/height="(\d+)"/)
    expect(heightMatch?.[1]).toBe('32')
    // 32 * 280/43 ≈ 208
    expect(Number(widthMatch?.[1])).toBeGreaterThanOrEqual(205)
    expect(Number(widthMatch?.[1])).toBeLessThanOrEqual(211)
  })
})
