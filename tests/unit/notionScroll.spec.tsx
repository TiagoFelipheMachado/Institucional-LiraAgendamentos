import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import fs from 'node:fs'
import path from 'node:path'
import { NotionScrollController } from '@/components/lira/NotionScrollController'
import { HeroDashboardMockup } from '@/components/lira/HeroDashboardMockup'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

describe('Notion Scroll Animation System', () => {
  beforeEach(() => {
    // Setup window matchMedia and mock IntersectionObserver
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    // Mock IntersectionObserver as a class constructor
    class MockIntersectionObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders Notion top progress indicator in NotionScrollController', () => {
    render(<NotionScrollController />)
    const progressBar = screen.getByTestId('notion-scroll-progress')
    expect(progressBar).toBeDefined()
    expect(progressBar.className).toContain('fixed top-0 left-0')
    expect(progressBar.className).toContain('bg-gradient-to-r')
  })

  it('renders HeroDashboardMockup with 3D perspective transform style', () => {
    const { container } = render(<HeroDashboardMockup />)
    const windowContainer = container.querySelector('[style*="perspective"]')
    expect(windowContainer).toBeDefined()
    expect(windowContainer?.getAttribute('style')).toContain('perspective(1200px)')
    expect(windowContainer?.getAttribute('style')).toContain('rotateX')
  })

  it('integrates NotionScrollController cleanly into LiraLandingPage SSR', () => {
    const html = renderToString(<LiraLandingPage />)
    expect(html).toContain('data-testid="notion-scroll-progress"')
    expect(html).toContain('Cadeiras ocupadas')
  })

  it('verifies globals.css includes notion scroll reveal and cascade stagger rules', () => {
    const cssPath = path.resolve(process.cwd(), 'src/app/(frontend)/globals.css')
    const cssContent = fs.readFileSync(cssPath, 'utf-8')

    expect(cssContent).toContain('.notion-scroll-reveal')
    expect(cssContent).toContain('.notion-revealed')
    expect(cssContent).toContain('.notion-stagger-1')
    expect(cssContent).toContain('.notion-stagger-6')
    expect(cssContent).toContain('cubic-bezier(0.16, 1, 0.3, 1)')
    expect(cssContent).toContain('scroll-behavior: smooth')
  })
})
