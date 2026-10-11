import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraFAQ } from '@/components/lira/FAQ'

describe('LiraFAQ section (TDD)', () => {
  it('renders the section with id="faq" and at least 4 questions', () => {
    const html = renderToString(<LiraFAQ />)
    expect(html).toContain('id="faq"')
    const matches = html.match(/data-testid="faq-question"/g) || []
    expect(matches.length).toBeGreaterThanOrEqual(4)
  })

  it('each question is a button with aria-expanded, collapsed by default', () => {
    render(<LiraFAQ />)
    const buttons = screen.getAllByTestId('faq-question')
    buttons.forEach((btn) => expect(btn.getAttribute('aria-expanded')).toBe('false'))
  })

  it('clicking a question expands its answer and toggling again collapses it', () => {
    render(<LiraFAQ />)
    const firstQuestion = screen.getAllByTestId('faq-question')[0]

    fireEvent.click(firstQuestion)
    expect(firstQuestion.getAttribute('aria-expanded')).toBe('true')

    fireEvent.click(firstQuestion)
    expect(firstQuestion.getAttribute('aria-expanded')).toBe('false')
  })
})
