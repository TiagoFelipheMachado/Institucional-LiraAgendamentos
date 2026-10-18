import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraContactPage } from '@/components/lira/ContactPage'

describe('LiraContactPage component', () => {
  it('renders breadcrumb and main contact headings', () => {
    render(<LiraContactPage />)

    expect(screen.getByText('Início')).toBeDefined()
    expect(screen.getAllByText('Contato')[0]).toBeDefined()
    expect(screen.getByText(/Estamos prontos para atender você/i)).toBeDefined()
  })

  it('renders all 4 direct contact channels', () => {
    render(<LiraContactPage />)

    expect(screen.getByText('WhatsApp Comercial')).toBeDefined()
    expect(screen.getByText('E-mail Oficial')).toBeDefined()
    expect(screen.getByText('Suporte ao Cliente')).toBeDefined()
    expect(screen.getByText('Horário de Atendimento')).toBeDefined()
  })

  it('renders form with segment selectors, inputs and submit CTA', () => {
    render(<LiraContactPage />)

    expect(screen.getByText('Barbearia / Salão')).toBeDefined()
    expect(screen.getByText('Estética / Clínica')).toBeDefined()
    expect(screen.getByPlaceholderText(/Marina Alves/i)).toBeDefined()
    expect(screen.getByPlaceholderText(/\(41\) 98765-4321/i)).toBeDefined()
    expect(screen.getByPlaceholderText(/marina@seunegocio.com.br/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /Falar com especialista agora/i })).toBeDefined()
  })

  it('validates required fields on empty submit', () => {
    render(<LiraContactPage />)

    const submitBtn = screen.getByRole('button', { name: /Falar com especialista agora/i })
    fireEvent.submit(submitBtn.closest('form')!)

    expect(screen.getByText(/Informe seu nome completo/i)).toBeDefined()
  })
})
