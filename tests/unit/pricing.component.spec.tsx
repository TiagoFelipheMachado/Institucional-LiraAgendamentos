import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraPricing } from '@/components/lira/Pricing'

describe('LiraPricing section (TDD)', () => {
  it('renders the section with id="planos" and all 3 plan names', () => {
    const html = renderToString(<LiraPricing />)
    expect(html).toContain('id="planos"')
    expect(html).toContain('Lira Start')
    expect(html).toContain('Lira Plus')
    expect(html).toContain('Lira Vega')
  })

  it('highlights Lira Plus as the popular plan', () => {
    render(<LiraPricing />)
    const plusCard = screen.getByText('Lira Plus').closest('[data-plan-id="plus"]')
    expect(plusCard).not.toBeNull()
    expect(plusCard?.getAttribute('data-popular')).toBe('true')
  })

  it('shows the monthly price and first-month coupon price by default', () => {
    render(<LiraPricing />)
    expect(screen.getByText(/R\$\s?69,90/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?59,42/)).toBeTruthy()
  })

  it('toggling to annual billing shows the annual-equivalent monthly price for Plus and Vega', () => {
    render(<LiraPricing />)
    fireEvent.click(screen.getByRole('switch', { name: /anual/i }))
    expect(screen.getByText(/R\$\s?79,92/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?111,92/)).toBeTruthy()
  })

  it('Lira Start has no annual option and communicates it is monthly-only', () => {
    render(<LiraPricing />)
    const startCard = screen.getByText('Lira Start').closest('[data-plan-id="start"]')
    expect(startCard?.textContent).toMatch(/somente mensal/i)
  })

  it('every plan has an accessible CTA button', () => {
    render(<LiraPricing />)
    const ctas = screen.getAllByRole('link', { name: /assinar|come[cç]ar/i })
    expect(ctas.length).toBeGreaterThanOrEqual(3)
  })

  it('surfaces the launch coupon note in the section footer', () => {
    const html = renderToString(<LiraPricing />)
    expect(html).toMatch(/Bem-vindo 1 a 10/)
  })
})
