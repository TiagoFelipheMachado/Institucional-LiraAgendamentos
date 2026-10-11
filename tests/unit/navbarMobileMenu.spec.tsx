import { describe, it, expect } from 'vitest'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraNavbar } from '@/components/lira/Navbar'

describe('Navbar responsive mobile menu (TDD)', () => {
  it('renders a mobile menu toggle button with an accessible name and closed state', () => {
    render(<LiraNavbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })
    expect(toggle).toBeTruthy()
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('meets the 44px minimum touch target for the mobile menu toggle', () => {
    render(<LiraNavbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })
    expect(toggle.className).toContain('min-h-[44px]')
    expect(toggle.className).toContain('min-w-[44px]')
  })

  it('reveals the navigation links when the toggle is activated', () => {
    render(<LiraNavbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })

    fireEvent.click(toggle)

    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(screen.getAllByText('Pilares').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contato').length).toBeGreaterThan(0)
  })

  it('closes the menu again when toggled a second time', () => {
    render(<LiraNavbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })

    fireEvent.click(toggle)
    fireEvent.click(toggle)

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })
})
