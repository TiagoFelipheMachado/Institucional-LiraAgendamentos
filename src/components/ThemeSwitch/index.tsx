'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/providers/Theme'

interface ThemeSwitchProps {
  className?: string
  showLabel?: boolean
}

// Crisp inline SVGs so the toggle NEVER depends on external webfont loading
const SunIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

const MoonIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '', showLabel = false }) => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const syncFromDOM = () => {
      if (typeof document === 'undefined') return
      const attr = document.documentElement.getAttribute('data-theme')
      const dark = attr ? attr === 'dark' : document.documentElement.classList.contains('dark')
      setIsDark(dark)
    }

    syncFromDOM()

    const handleCustomChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail
      if (detail === 'dark' || detail === 'light') {
        setIsDark(detail === 'dark')
        setTheme(detail)
      } else {
        syncFromDOM()
      }
    }

    window.addEventListener('lira-theme-change', handleCustomChange)

    let observer: MutationObserver | null = null
    if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
      observer = new MutationObserver(syncFromDOM)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme', 'class'],
      })
    }

    return () => {
      window.removeEventListener('lira-theme-change', handleCustomChange)
      observer?.disconnect()
    }
  }, [setTheme])

  useEffect(() => {
    if (theme === 'dark' || theme === 'light') {
      setIsDark(theme === 'dark')
    }
  }, [theme])

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    // If InitTheme's native document listener already toggled the DOM on this click,
    // simply sync React state with the updated DOM attribute instead of toggling back.
    if ((e.nativeEvent as unknown as { __liraThemeHandled?: boolean })?.__liraThemeHandled) {
      const currentAttr =
        typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') : null
      const syncedTheme = currentAttr === 'dark' ? 'dark' : 'light'
      setIsDark(syncedTheme === 'dark')
      setTheme(syncedTheme)
      return
    }

    const currentAttr =
      typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') : null
    const currentlyDark = currentAttr
      ? currentAttr === 'dark'
      : typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
        ? true
        : isDark
    const nextTheme = currentlyDark ? 'light' : 'dark'

    // 1. Immediately apply to DOM for 0ms lag
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', nextTheme)
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    // 2. Persist in localStorage
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('payload-theme', nextTheme)
      }
    } catch {}

    // 3. Update local and React context state
    setIsDark(nextTheme === 'dark')
    setTheme(nextTheme)
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 select-none">
          <span className="dark:hidden">Modo White</span>
          <span className="hidden dark:inline">Modo Black</span>
        </span>
      )}
      <button
        type="button"
        role="switch"
        data-theme-toggle="true"
        aria-checked={isDark}
        aria-label={isDark ? 'Mudar para modo White' : 'Mudar para modo Black'}
        title={isDark ? 'Mudar para modo White' : 'Mudar para modo Black'}
        onClick={toggleTheme}
        suppressHydrationWarning
        className="relative inline-flex h-8 w-[58px] shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D3F2] focus-visible:ring-offset-2 select-none bg-neutral-200/90 border border-neutral-300 hover:bg-neutral-300/90 dark:bg-[#12131A] dark:border-[#2D303E] dark:hover:bg-[#1A1C24]"
      >
        {/* Track icons (underneath the knob) */}
        <span className="absolute left-1.5 flex items-center justify-center text-amber-500/80 pointer-events-none">
          <SunIcon className="w-3.5 h-3.5" />
        </span>
        <span className="absolute right-1.5 flex items-center justify-center text-[#00D3F2]/80 pointer-events-none">
          <MoonIcon className="w-3 h-3" />
        </span>

        {/* Sliding thumb knob */}
        <span className="pointer-events-none flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out translate-x-0.5 bg-white text-amber-500 border border-neutral-200 dark:translate-x-[26px] dark:bg-[#070708] dark:text-[#00D3F2] dark:border-[#2D303E]">
          <SunIcon className="w-3.5 h-3.5 block dark:hidden" />
          <MoonIcon className="w-3 h-3 hidden dark:block" />
        </span>
      </button>
    </div>
  )
}

