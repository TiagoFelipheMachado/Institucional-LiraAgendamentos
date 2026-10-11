export interface WhiteLabelTokens {
  accent: string
  accentInk: string
  surface: string
  text: string
  radius: string
  font: string
}

export interface ResolvedWhiteLabelTheme extends WhiteLabelTokens {
  fallbackTriggered: boolean
  contrastRatio: number
  focusRing: string
  focusBorder: string
  cardSurface: string
  dataSurface: string
}

export const DEFAULT_LIRA_TOKENS: WhiteLabelTokens = {
  accent: '#00D3F2',
  accentInk: '#04252B',
  surface: '#070708',
  text: '#E5E2E3',
  radius: '12px',
  font: 'Inter, sans-serif',
}

/**
 * Converts a hex color string to sRGB luminance.
 */
function getLuminance(hex: string): number {
  const cleanHex = hex.replace('#', '')
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255

  const transform = (val: number) =>
    val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)

  return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b)
}

/**
 * Calculates WCAG 2.1 contrast ratio between two colors (1:1 to 21:1).
 */
export function calculateContrastRatio(hex1: string, hex2: string): number {
  try {
    const lum1 = getLuminance(hex1)
    const lum2 = getLuminance(hex2)
    const brighter = Math.max(lum1, lum2)
    const darker = Math.min(lum1, lum2)
    return (brighter + 0.05) / (darker + 0.05)
  } catch {
    return 1
  }
}

/**
 * Validates whether accent meets the required 3:1 contrast against the surface.
 * As defined in section 14:
 * "Acento com contraste mínimo de 3:1 contra a superfície abaixo disso o sistema cai no ciano padrão."
 */
export function validateAccentContrast(
  accent: string,
  surface: string
): { meetsRequirement: boolean; ratio: number } {
  const ratio = calculateContrastRatio(accent, surface)
  return {
    meetsRequirement: ratio >= 3.0,
    ratio: Math.round(ratio * 10) / 10,
  }
}

/**
 * Clamps radius string (e.g. "12px") to a safe range [0px, 24px].
 */
function clampRadius(radiusStr?: string): string {
  if (!radiusStr) return DEFAULT_LIRA_TOKENS.radius
  const numeric = parseInt(radiusStr.replace(/\D/g, ''), 10)
  if (isNaN(numeric) || numeric < 0 || radiusStr.includes('-')) return '0px'
  const clamped = Math.min(24, Math.max(0, numeric))
  return `${clamped}px`
}

/**
 * Resolves the 6 white-label tokens and derives system tokens.
 */
export function resolveWhiteLabelTheme(
  custom: Partial<WhiteLabelTokens> = {}
): ResolvedWhiteLabelTheme {
  const surface = custom.surface || DEFAULT_LIRA_TOKENS.surface
  const candidateAccent = custom.accent || DEFAULT_LIRA_TOKENS.accent

  const contrastCheck = validateAccentContrast(candidateAccent, surface)

  let accent = candidateAccent
  let fallbackTriggered = false

  if (!contrastCheck.meetsRequirement) {
    accent = DEFAULT_LIRA_TOKENS.accent
    fallbackTriggered = true
  }

  const radius = clampRadius(custom.radius)

  return {
    accent,
    accentInk: custom.accentInk || DEFAULT_LIRA_TOKENS.accentInk,
    surface,
    text: custom.text || DEFAULT_LIRA_TOKENS.text,
    radius,
    font: custom.font || DEFAULT_LIRA_TOKENS.font,
    fallbackTriggered,
    contrastRatio: contrastCheck.ratio,
    focusRing: '#053345',
    focusBorder: '#00B8DB',
    cardSurface: '#0E1A1E',
    dataSurface: '#0B0F19',
  }
}
