import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraCalendarView } from '@/components/lira/CalendarView'

describe('LiraCalendarView component', () => {
  it('renders correctly with default month view', () => {
    render(<LiraCalendarView />)

    expect(screen.getAllByText('Dia')[0]).toBeDefined()
    expect(screen.getAllByText('Mês')[0]).toBeDefined()
    expect(screen.getByText('Novo Agendamento')).toBeDefined()
    expect(screen.getAllByText('Bloquear')[0]).toBeDefined()
  })

  it('allows switching to Month view without error', () => {
    render(<LiraCalendarView />)

    const monthBtns = screen.getAllByText('Mês')
    fireEvent.click(monthBtns[0])

    expect(screen.getAllByText('OUT. DE 2026')[0]).toBeDefined()
  })

  it('renders mobile layout with Agendar, Bloquear and 7-column weekday headers matching reference', () => {
    render(<LiraCalendarView />)

    expect(screen.getByText('Agendar')).toBeDefined()
    expect(screen.getAllByText('DOM')[0]).toBeDefined()
    expect(screen.getAllByText('SÁB')[0]).toBeDefined()
    expect(screen.getAllByText('Todos os Status')[0]).toBeDefined()
    expect(screen.getAllByText('Todos os Profissionais')[0]).toBeDefined()
  })
})
