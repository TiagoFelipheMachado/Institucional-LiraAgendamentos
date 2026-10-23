import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { LiraNavbar } from '@/components/lira/Navbar'
import { LiraHero } from '@/components/lira/Hero'
import { LiraRoiCalculator } from '@/components/lira/RoiCalculator'
import { LiraWhiteLabelSimulator } from '@/components/lira/WhiteLabelSimulator'
import { LiraContactSection } from '@/components/lira/ContactSection'
import { StatusBadge } from '@/components/lira/StatusBadge'
import { LiraLandingPage } from '@/components/lira/LiraLandingPage'

vi.mock('@/utilities/lira/sendContactEmail', () => ({
  sendContactEmail: vi.fn(async () => ({ ok: true })),
}))

describe('Design System Rules & UI Contracts (TDD)', () => {
  describe('Rule: Branco é o CTA do Site, Ciano é o CTA de Produto', () => {
    it('renders the primary website CTA as white button with dark text', () => {
      const html = renderToString(<LiraHero />)
      expect(html).toContain('Fazer teste grátis 14 dias')
      expect(html).toContain('bg-white')
      expect(html).toContain('text-[#070708]')
    })

    it('renders the navbar CTA as a white button (exact copy: "Cadastre-se")', () => {
      const html = renderToString(<LiraNavbar />)
      expect(html).toContain('Cadastre-se')
      expect(html).toContain('bg-white')
    })
  })

  describe('Rule: Alvo mínimo 44px em mobile e controles', () => {
    it('ensures primary CTAs meet the 44px minimum touch target', () => {
      const html = renderToString(<LiraHero />)
      expect(html).toContain('min-h-[44px]')
    })
  })

  describe('Rule: Estado sempre com forma + cor (ponto sólido + texto)', () => {
    it('renders status badge with both solid indicator dot and textual label', () => {
      const html = renderToString(<StatusBadge status="confirmado" />)
      expect(html).toContain('Confirmado')
      // Must contain solid dot indicator
      expect(html).toContain('data-indicator="dot"')
    })

    it('displays distinct text and states for all primary booking statuses', () => {
      const html = renderToString(
        <div>
          <StatusBadge status="confirmado" />
          <StatusBadge status="aguardando" />
          <StatusBadge status="concluido" />
          <StatusBadge status="noshow" />
        </div>
      )

      expect(html).toContain('Confirmado')
      expect(html).toContain('Aguardando sinal')
      expect(html).toContain('Concluído')
      expect(html).toContain('No show')
    })
  })

  describe('Interactive ROI Calculator Contract', () => {
    it('renders inputs and calculation display with -68% reduction', () => {
      const html = renderToString(<LiraRoiCalculator />)
      expect(html).toContain('Agendamentos por mês')
      expect(html).toContain('-68%')
      expect(html).toContain('TOTAL RECUPERADO POR ANO')
    })
  })

  describe('Interactive White-Label Simulator Contract', () => {
    it('renders 6 tokens and simulator sections', () => {
      const html = renderToString(<LiraWhiteLabelSimulator />)
      expect(html).toContain('Simulador White-Label')
      expect(html).toContain('--lira-accent')
      expect(html).toContain('--lira-radius')
    })

    it('gives the accent color picker and text input an accessible name (a11y)', () => {
      render(<LiraWhiteLabelSimulator />)
      expect(screen.getAllByLabelText(/cor do acento/i).length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Rule: Ciano 500 (#00D3F2) nunca como cor de texto abaixo de 14px', () => {
    it('does not apply the cyan-500 text color to any element sized below 14px, anywhere on the site', () => {
      const html = renderToString(<LiraLandingPage />)
      const classAttrs = html.match(/class="[^"]*"/g) || []
      const violatingNodes = classAttrs.filter((cls) => {
        const hasBelow14 = /text-\[(?:1[0-3]|[1-9])px\]/.test(cls)
        const hasCyan500Text = /text-\[#00D3F2\]/.test(cls)
        return hasBelow14 && hasCyan500Text
      })
      expect(violatingNodes).toEqual([])
    })
  })

  describe('Rule: nunca usar emoji como ícone de feedback (apenas SVG/Material Symbols)', () => {
    it('renders the contact form success state with an SVG check icon, not an emoji glyph', async () => {
      render(<LiraContactSection />)

      fireEvent.change(screen.getByLabelText(/nome completo/i), {
        target: { value: 'Marina Alves' },
      })
      fireEvent.change(screen.getByLabelText(/whatsapp com ddd/i), {
        target: { value: '41987654321' },
      })
      fireEvent.change(screen.getByLabelText(/e-mail profissional/i), {
        target: { value: 'marina@salao.com.br' },
      })

      fireEvent.submit(screen.getByRole('button', { name: /solicitar demonstração/i }).closest('form')!)

      await waitFor(
        () => {
          expect(screen.getByText(/solicitação enviada com sucesso/i)).toBeTruthy()
        },
        { timeout: 2000 }
      )

      expect(screen.getByTestId('icon-success-check')).toBeTruthy()
      expect(screen.queryByText('✓')).toBeNull()
    })
  })
})
