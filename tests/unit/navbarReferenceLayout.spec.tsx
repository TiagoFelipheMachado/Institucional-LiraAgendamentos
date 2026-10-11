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

  it('center nav matches the reference exactly: only Desafios, Pilares, Como Funciona, Contato', () => {
    render(<LiraNavbar />)
    const nav = screen.getAllByRole('link', { name: /^(Desafios|Pilares|Como Funciona|Contato)$/ })
    const labels = nav.map((n) => n.textContent).filter((v, i, arr) => arr.indexOf(v) === i)
    expect(labels.sort()).toEqual(['Como Funciona', 'Contato', 'Desafios', 'Pilares'].sort())
  })

  it('mobile drawer also exposes the "Login" link', () => {
    render(<LiraNavbar />)
    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    const drawer = document.getElementById('lira-mobile-menu')
    expect(drawer).not.toBeNull()
    expect(drawer!.textContent).toMatch(/login/i)
  })
})
