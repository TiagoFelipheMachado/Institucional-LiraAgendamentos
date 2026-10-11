import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { LiraTestimonials } from '@/components/lira/Testimonials'

describe('LiraTestimonials section (TDD)', () => {
  it('renders the section with id="depoimentos"', () => {
    const html = renderToString(<LiraTestimonials />)
    expect(html).toContain('id="depoimentos"')
  })

  it('visibly discloses the quotes are illustrative, not real customer claims', () => {
    const html = renderToString(<LiraTestimonials />)
    expect(html).toMatch(/ilustrativ/i)
  })

  it('renders at least 3 example testimonial cards', () => {
    const html = renderToString(<LiraTestimonials />)
    const matches = html.match(/data-testid="testimonial-card"/g) || []
    expect(matches.length).toBeGreaterThanOrEqual(3)
  })

  it('follows the design-system rule: dark text (#070708) on aqua/lime surfaces', () => {
    const html = renderToString(<LiraTestimonials />)
    // Every card must pair a light surface (aqua/lime) with dark text, never light-on-light.
    expect(html).toContain('#070708')
    expect(html).toMatch(/#D1EBEB|#C4FF44/)
  })
})
