import { describe, it, expect } from 'vitest'
import {
  DEFAULT_LIRA_TOKENS,
  resolveWhiteLabelTheme,
  calculateContrastRatio,
  validateAccentContrast,
} from '@/utilities/lira/whiteLabel'

describe('White-Label Tokens & Contrast Rules (TDD)', () => {
  it('defines the 6 immutable white-label tokens from the design specification', () => {
    expect(DEFAULT_LIRA_TOKENS).toEqual({
      accent: '#00D3F2',
      accentInk: '#04252B',
      surface: '#070708',
      text: '#E5E2E3',
      radius: '12px',
      font: 'Inter, sans-serif',
    })
  })

  it('calculates color contrast ratio according to WCAG guidelines', () => {
    // Black (#000000) against White (#ffffff) should be 21:1
    const blackWhite = calculateContrastRatio('#000000', '#ffffff')
    expect(blackWhite).toBeGreaterThan(20)

    // Cyan (#00D3F2) against Dark Base (#070708) has high contrast (> 10:1)
    const cyanDark = calculateContrastRatio('#00D3F2', '#070708')
    expect(cyanDark).toBeGreaterThan(10)
  })

  it('enforces minimum contrast of 3:1 for the accent color against the surface', () => {
    // High contrast: Green (#34E5A0) on #070708 is > 3:1
    expect(validateAccentContrast('#34E5A0', '#070708').meetsRequirement).toBe(true)

    // Very dark blue (#051020) on #070708 has contrast < 3:1
    const lowContrast = validateAccentContrast('#0e1a24', '#070708')
    expect(lowContrast.meetsRequirement).toBe(false)
  })

  it('falls back to default cyan #00D3F2 if custom accent violates the 3:1 contrast rule', () => {
    const customWithBadContrast = {
      accent: '#11151c', // Almost black on black surface
      surface: '#070708',
    }

    const resolved = resolveWhiteLabelTheme(customWithBadContrast)
    expect(resolved.accent).toBe(DEFAULT_LIRA_TOKENS.accent)
    expect(resolved.fallbackTriggered).toBe(true)
  })

  it('clamps border radius between 0px and 24px safely', () => {
    const extremeRadius = resolveWhiteLabelTheme({ radius: '999px' })
    expect(extremeRadius.radius).toBe('24px')

    const negativeRadius = resolveWhiteLabelTheme({ radius: '-10px' })
    expect(negativeRadius.radius).toBe('0px')
  })

  it('generates derived tokens correctly (focus ring, badge tints)', () => {
    const resolved = resolveWhiteLabelTheme({ accent: '#00D3F2' })
    expect(resolved.focusRing).toBe('#053345')
    expect(resolved.focusBorder).toBe('#00B8DB')
  })
})
