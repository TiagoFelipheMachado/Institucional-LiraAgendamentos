'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/providers/Theme'
import { Icon } from '@/components/lira/Icon'

interface ThemeSwitchProps {
  className?: string
  showLabel?: boolean
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '', showLabel = false }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  // Prevent hydration mismatch during initial SSR render
  if (!mounted) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
        <div className="h-8 w-15 rounded-full bg-neutral-200 dark:bg-neutral-800 opacity-60" />
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 select-none">
          {isDark ? 'Modo Black' : 'Modo White'}
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? 'Mudar para modo white' : 'Mudar para modo black'}
        title={isDark ? 'Mudar para modo white' : 'Mudar para modo black'}
        onClick={toggleTheme}
        className={`relative inline-flex h-8 w-15 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D3F2] focus-visible:ring-offset-2 ${
          isDark
            ? 'bg-[#14151C] border border-[#2D303E]'
            : 'bg-neutral-200/90 border border-neutral-300 hover:bg-neutral-300/80'
        }`}
      >
        {/* Track icons */}
        <span className="absolute left-1.5 flex items-center justify-center text-amber-500 pointer-events-none">
          <Icon name="light_mode" size={15} />
        </span>
        <span className="absolute right-1.5 flex items-center justify-center text-[#00D3F2] pointer-events-none">
          <Icon name="dark_mode" size={15} />
        </span>

        {/* Sliding thumb knob */}
        <span
          className={`pointer-events-none flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out ${
            isDark
              ? 'translate-x-7 bg-[#070708] text-[#00D3F2] border border-[#2D303E]'
              : 'translate-x-0 bg-white text-amber-500 border border-neutral-200 shadow-sm'
          }`}
        >
          <Icon name={isDark ? 'dark_mode' : 'light_mode'} size={14} />
        </span>
      </button>
    </div>
  )
}
