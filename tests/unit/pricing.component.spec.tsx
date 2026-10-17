import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraPricing } from '@/components/lira/Pricing'

describe('LiraPricing section (TDD)', () => {
  it('renders the section with id="planos" and all 3 plan names', () => {
    const html = renderToString(<LiraPricing />)
    expect(html).toContain('id="planos"')
    expect(html).toContain('Essencial')
    expect(html).toContain('Avançado')
    expect(html).toContain('Profissional')
  })

  it('highlights Avançado as the popular plan', () => {
    render(<LiraPricing />)
    const card = screen.getByText('Avançado').closest('[data-plan-id="avancado"]')
    expect(card).not.toBeNull()
    expect(card?.getAttribute('data-popular')).toBe('true')
  })

  it('shows annual pricing and savings pills by default', () => {
    render(<LiraPricing />)
    expect(screen.getByText(/R\$\s?60,12/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?107,42/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?187,40/)).toBeTruthy()
    expect(screen.getByText(/ECONOMIZE R\$\s?38,74/)).toBeTruthy()
  })

  it('toggling to monthly billing shows monthly prices and updates limits', () => {
    render(<LiraPricing />)
    const switchBtn = screen.getByRole('switch', { name: /alternar/i })
    fireEvent.click(switchBtn)

    // Monthly prices
    expect(screen.getByText(/R\$\s?99,86/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?178,43/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?311,29/)).toBeTruthy()

    // Monthly WhatsApp limits
    expect(screen.getByText(/50 mensagens WhatsApp/)).toBeTruthy()
    expect(screen.getByText(/100 mensagens WhatsApp/)).toBeTruthy()
  })

  it('clicking text buttons also switches between monthly and annual', () => {
    render(<LiraPricing />)
    const mensalBtn = screen.getByRole('button', { name: /plano mensal/i })
    fireEvent.click(mensalBtn)

    expect(screen.getByText(/R\$\s?99,86/)).toBeTruthy()

    const anualBtn = screen.getByRole('button', { name: /plano anual/i })
    fireEvent.click(anualBtn)

    expect(screen.getByText(/R\$\s?60,12/)).toBeTruthy()
  })

  it('every plan has accessible CTA buttons and test link', () => {
    render(<LiraPricing />)
    const ctas = screen.getAllByRole('link', { name: /contratar plano/i })
    expect(ctas.length).toBe(3)
    const freeTrialLinks = screen.getAllByRole('link', { name: /continuar meu teste gr[aá]tis/i })
    expect(freeTrialLinks.length).toBe(3)
  })

  it('does not render the countdown box', () => {
    const html = renderToString(<LiraPricing />)
    expect(html).not.toContain('O tempo está correndo!')
  })
})
