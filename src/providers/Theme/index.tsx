'use client'

import React, { createContext, useCallback, use, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'
import { defaultTheme, themeLocalStorageKey } from './shared'
import { themeIsValid } from './types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: defaultTheme,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined>(
    canUseDOM ? ((document.documentElement.getAttribute('data-theme') as Theme) || defaultTheme) : defaultTheme,
  )

  const setTheme = useCallback((themeToSet: Theme | null) => {
    const nextTheme: Theme = themeToSet && themeIsValid(themeToSet) ? themeToSet : defaultTheme

    if (themeToSet === null) {
      try {
        window.localStorage.removeItem(themeLocalStorageKey)
      } catch {}
    } else {
      try {
        window.localStorage.setItem(themeLocalStorageKey, nextTheme)
      } catch {}
    }

    if (canUseDOM) {
      document.documentElement.setAttribute('data-theme', nextTheme)
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    setThemeState(nextTheme)
  }, [])

  useEffect(() => {
    let themeToSet: Theme = defaultTheme
    try {
      const preference = window.localStorage.getItem(themeLocalStorageKey)
      if (themeIsValid(preference)) {
        themeToSet = preference
      }
    } catch {}

    document.documentElement.setAttribute('data-theme', themeToSet)
    if (themeToSet === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setThemeState(themeToSet)

    const handleStorage = (e: StorageEvent) => {
      if (e.key === themeLocalStorageKey && e.newValue && themeIsValid(e.newValue)) {
        document.documentElement.setAttribute('data-theme', e.newValue)
        if (e.newValue === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        setThemeState(e.newValue as Theme)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
