import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraPricing } from '@/components/lira/Pricing'

describe('LiraPricing section (TDD)', () => {
  it('renders the section with id="planos" and all 3 official plan names', () => {
    const html = renderToString(<LiraPricing />)
    expect(html).toContain('id="planos"')
    expect(html).toContain('Lira Start')
    expect(html).toContain('Lira Plus')
    expect(html).toContain('Lira Vega')
  })

  it('highlights Lira Plus as the popular plan', () => {
    render(<LiraPricing />)
    const card = screen.getByText('Lira Plus').closest('[data-plan-id="plus"]')
    expect(card).not.toBeNull()
    expect(card?.getAttribute('data-popular')).toBe('true')
  })

  it('shows annual pricing and savings pills by default', () => {
    render(<LiraPricing />)
    expect(screen.getAllByText(/R\$\s?55,92/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/R\$\s?79,92/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/R\$\s?111,92/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/ECONOMIZE 20%/i).length).toBeGreaterThan(0)
  })

  it('toggling to monthly billing shows monthly prices and condition text', () => {
    render(<LiraPricing />)
    const switchBtn = screen.getByRole('switch', { name: /alternar/i })
    fireEvent.click(switchBtn)

    // Monthly prices
    expect(screen.getByText(/R\$\s?69,90/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?99,90/)).toBeTruthy()
    expect(screen.getByText(/R\$\s?139,90/)).toBeTruthy()

    // Condition text
    expect(screen.getAllByText(/Plano Anual equivalente a R\$\s?55,92/i).length).toBeGreaterThan(0)
    expect(screen.queryByText(/cupom/i)).toBeNull()
    expect(screen.getAllByText(/Plano Anual equivalente a R\$\s?79,92/i).length).toBeGreaterThan(0)
  })

  it('clicking text buttons also switches between monthly and annual', () => {
    render(<LiraPricing />)
    const mensalBtn = screen.getByRole('button', { name: /plano mensal/i })
    fireEvent.click(mensalBtn)

    expect(screen.getByText(/R\$\s?69,90/)).toBeTruthy()

    const anualBtn = screen.getByRole('button', { name: /plano anual/i })
    fireEvent.click(anualBtn)

    expect(screen.getAllByText(/R\$\s?55,92/).length).toBeGreaterThan(0)
  })

  it('displays the official operational features without artificial limits', () => {
    render(<LiraPricing />)
    expect(screen.getByText('Agendamento online automatizado')).toBeTruthy()
    expect(screen.getByText('Central de Atendimento via chat')).toBeTruthy()
    expect(screen.getByText('Integração WordPress white-label')).toBeTruthy()

    // Ensure removed restrictions are NOT rendered
    expect(screen.queryByText(/créditos GAIA/i)).toBeNull()
    expect(screen.queryByText(/mensagens WhatsApp\/mês/i)).toBeNull()
    expect(screen.queryByText(/agendamentos simultâneos/i)).toBeNull()
  })

  it('every plan has accessible CTA buttons and test link', () => {
    render(<LiraPricing />)
    const ctas = screen.getAllByRole('link', { name: /contratar plano/i })
    expect(ctas.map((a) => a.getAttribute('href'))).toEqual([
      'https://app.liragenda.com.br/#/checkout?plan=Lira+Start&period=annual',
      'https://app.liragenda.com.br/#/checkout?plan=Lira+Plus&period=annual',
      'https://app.liragenda.com.br/#/checkout?plan=Lira+Vega&period=annual',
    ])
    const freeTrialLinks = screen.getAllByRole('link', { name: /testar gr[aá]tis por 14 dias/i })
    expect(freeTrialLinks.map((a) => a.getAttribute('href'))).toEqual(
      Array(3).fill('https://app.liragenda.com.br/#/register'),
    )
  })

  it('switching to monthly updates the checkout links', () => {
    render(<LiraPricing />)
    fireEvent.click(screen.getByRole('button', { name: /plano mensal/i }))
    expect(screen.getAllByRole('link', { name: /contratar plano/i })[0].getAttribute('href')).toBe(
      'https://app.liragenda.com.br/#/checkout?plan=Lira+Start&period=monthly',
    )
  })
})
