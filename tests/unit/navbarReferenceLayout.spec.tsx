import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraNavbar } from '@/components/lira/Navbar'

describe('LiraNavbar — reference layout (TDD)', () => {
  it('renders a sticky, glassmorphism header (fixed + backdrop-blur, dark translucent bg)', () => {
    const html = renderToString(<LiraNavbar />)
    expect(html).toMatch(/class="[^"]*\bfixed\b[^"]*"/)
    expect(html).toMatch(/backdrop-blur/)
  })

  it('right side: discreet "Login" link and a rounded-rect white "Cadastre-se" CTA (exact copy from reference)', () => {
    render(<LiraNavbar />)

    const login = screen.getAllByRole('link', { name: /^login$/i })[0]
    expect(login).toBeTruthy()

    const ctaLinks = screen.getAllByRole('link', { name: /cadastre-se/i })
    expect(ctaLinks.length).toBeGreaterThan(0)
    // Reference button is a moderately rounded rectangle, not a full pill.
    expect(ctaLinks[0].className).not.toMatch(/rounded-full/)
    expect(ctaLinks[0].className).toMatch(/rounded-\[12px\]/)
    expect(ctaLinks[0].className).toMatch(/bg-white/)
  })

  it('"Login" does not point to a fabricated in-page anchor — it targets the real app/login destination', () => {
    render(<LiraNavbar />)
    const login = screen.getAllByRole('link', { name: /^login$/i })[0]
    expect(login.getAttribute('href')).not.toBe('#')
    expect(login.getAttribute('href')).not.toMatch(/^#contato$/)
  })

  it('center nav has Funcionalidades, Segmentos, Planos and Empresa, with sub-pages as separate routes', () => {
    const html = renderToString(<LiraNavbar />)
    ;['Funcionalidades', 'Segmentos', 'Planos', 'Empresa'].forEach((label) => expect(html).toContain(label))
    ;['/funcionalidades/atendimento-ia', '/segmentos/barbearia', '/sobre', '/blog', '/contato'].forEach((href) =>
      expect(html).toContain(`href="${href}"`),
    )
    expect(html).not.toMatch(/href="\/?#/)
  })

  it('"Cadastre-se" points to the plans page', () => {
    render(<LiraNavbar />)
    expect(screen.getAllByRole('link', { name: /cadastre-se/i })[0].getAttribute('href')).toBe('/planos')
  })

  it('mobile drawer also exposes the "Login" link', () => {
    render(<LiraNavbar />)
    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    const drawer = document.getElementById('lira-mobile-menu')
    expect(drawer).not.toBeNull()
    expect(drawer!.textContent).toMatch(/login/i)
  })
})
