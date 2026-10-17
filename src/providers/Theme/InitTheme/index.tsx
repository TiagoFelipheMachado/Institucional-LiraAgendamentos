import React from 'react'

import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    try {
      function themeIsValid(theme) {
        return theme === 'light' || theme === 'dark'
      }

      function applyTheme(themeToSet) {
        document.documentElement.setAttribute('data-theme', themeToSet)
        if (themeToSet === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        var isDark = themeToSet === 'dark'
        var buttons = document.querySelectorAll('[data-theme-toggle]')
        for (var i = 0; i < buttons.length; i++) {
          var btn = buttons[i]
          btn.setAttribute('aria-checked', isDark ? 'true' : 'false')
          btn.setAttribute('aria-label', isDark ? 'Mudar para modo White' : 'Mudar para modo Black')
          btn.setAttribute('title', isDark ? 'Mudar para modo White' : 'Mudar para modo Black')
        }
      }

      var themeToSet = '${defaultTheme}'
      try {
        var preference = window.localStorage.getItem('${themeLocalStorageKey}')
        if (themeIsValid(preference)) {
          themeToSet = preference
        }
      } catch (e) {}

      applyTheme(themeToSet)

      if (!window.__liraThemeToggleBound) {
        window.__liraThemeToggleBound = true
        document.addEventListener('click', function (e) {
          if (e.defaultPrevented || e.__liraThemeHandled) return
          var target = e.target && e.target.closest ? e.target.closest('[data-theme-toggle]') : null
          if (!target) return
          e.__liraThemeHandled = true
          var current =
            document.documentElement.getAttribute('data-theme') === 'dark' ||
            document.documentElement.classList.contains('dark')
          var next = current ? 'light' : 'dark'
          applyTheme(next)
          try {
            window.localStorage.setItem('${themeLocalStorageKey}', next)
          } catch (err) {}
          try {
            window.dispatchEvent(new CustomEvent('lira-theme-change', { detail: next }))
          } catch (err) {}
        })
      }
    } catch (e) {}
  })();
  `,
      }}
      id="theme-script"
    />
  )
}

