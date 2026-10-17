import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraCalendarView } from '@/components/lira/CalendarView'

describe('LiraCalendarView component', () => {
  it('renders correctly with default day view', () => {
    render(<LiraCalendarView />)

    expect(screen.getByText('Dia')).toBeDefined()
    expect(screen.getByText('Mês')).toBeDefined()
    expect(screen.getByText('Novo Agendamento')).toBeDefined()
    expect(screen.getByText('Bloquear')).toBeDefined()
  })

  it('allows switching to Month view without error', () => {
    render(<LiraCalendarView />)

    const monthBtn = screen.getByText('Mês')
    fireEvent.click(monthBtn)

    expect(screen.getByText('OUT. DE 2026')).toBeDefined()
  })
})
