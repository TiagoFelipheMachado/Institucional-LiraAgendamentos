'use client'

import React, { useEffect, useState } from 'react'

/**
 * NotionScrollController
 * Orchestrates the Notion-style scroll animations:
 * 1. Top subtle progress indicator line (Cyan Lira signature).
 * 2. Viewport-triggered scroll reveal with spring deceleration curve (cubic-bezier(0.16, 1, 0.3, 1)).
 * 3. Staggered cascade for cards and grid items.
 */
export const NotionScrollController: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // 1. Reading / Page Scroll Progress Bar
    let progressTicking = false
    const handleScroll = () => {
      if (!progressTicking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          if (docHeight > 0) {
            const current = (window.scrollY / docHeight) * 100
            setScrollProgress(Math.min(100, Math.max(0, current)))
          }
          progressTicking = false
        })
        progressTicking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // 2. Notion-style Viewport Scroll Reveal with IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    // Query elements across sections below Hero
    const targets = new Set<HTMLElement>()

    // Section title / header containers
    document.querySelectorAll<HTMLElement>('main > section:not(:first-of-type) h2').forEach((h2) => {
      const headerBox = h2.closest('div')
      if (headerBox && headerBox.parentElement && headerBox.parentElement.tagName !== 'MAIN') {
        targets.add(headerBox)
      } else {
        targets.add(h2)
      }
    })

    // Grid cards and items
    document.querySelectorAll<HTMLElement>(
      'main > section:not(:first-of-type) .grid > div, main > section:not(:first-of-type) .grid > a'
    ).forEach((el) => {
      targets.add(el)
    })

    // Explicit manual reveal markers
    document.querySelectorAll<HTMLElement>('.notion-reveal').forEach((el) => {
      targets.add(el)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('notion-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    targets.forEach((el) => {
      el.classList.add('notion-scroll-reveal')

      // Apply cascade stagger index if element is inside a grid
      const parent = el.parentElement
      if (parent && parent.classList.contains('grid')) {
        const index = Array.from(parent.children).indexOf(el)
        if (index >= 0 && index < 8) {
          el.classList.add(`notion-stagger-${Math.min(6, index + 1)}`)
        }
      }

      observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Notion-style Top Progress Indicator */}
      <div
        data-testid="notion-scroll-progress"
        className="fixed top-0 left-0 h-[2px] sm:h-[2.5px] bg-gradient-to-r from-cyan-600 via-[#00D3F2] to-[#53EAFD] z-[70] transition-[width] duration-100 ease-out pointer-events-none shadow-[0_0_8px_rgba(0,211,242,0.6)]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </>
  )
}
