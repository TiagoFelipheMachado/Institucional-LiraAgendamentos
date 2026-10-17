import React from 'react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { ThemeProvider } from '@/providers/Theme'

describe('ThemeSwitch component', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('dark')
  })

  it('renders switch button without returning empty skeleton', () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>,
    )

    const switchBtn = screen.getByRole('switch')
    expect(switchBtn).toBeDefined()
    expect(switchBtn.getAttribute('aria-label')).toBe('Mudar para modo Black')
    // Ensure it contains SVG icons
    expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(2)
  })

  it('toggles theme on click and updates localStorage and documentElement', () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>,
    )

    const switchBtn = screen.getByRole('switch')

    // Initial click -> switches to dark mode
    fireEvent.click(switchBtn)

    expect(localStorage.getItem('payload-theme')).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    // Second click -> switches back to light mode
    fireEvent.click(switchBtn)

    expect(localStorage.getItem('payload-theme')).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
