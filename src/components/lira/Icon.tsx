import React from 'react'

interface IconProps {
  /**
   * Ligature name from the Material Symbols Rounded font — the single icon
   * family allowed by the design system (contorno, peso 300, grade 0).
   * e.g. "check_circle", "menu", "close".
   */
  name: string
  /**
   * Accessible name for an icon used as a standalone control (design rule:
   * "Ícone sozinho como botão exige área de toque de 44px e aria-label").
   * Omit for a purely decorative icon placed next to visible text — it is
   * then hidden from assistive tech via aria-hidden.
   */
  label?: string
  className?: string
  size?: number
}

/**
 * Renders a single icon from Material Symbols Rounded (contorno / outlined,
 * weight 300, grade 0, optical size 24 by default) — the only icon family
 * the design system allows. No raw SVGs, no emoji, no other icon library.
 */
export const Icon: React.FC<IconProps> = ({ name, label, className = '', size = 24 }) => {
  const accessibilityProps = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }

  return (
    <span
      className={`material-symbols-rounded select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
        lineHeight: 1,
      }}
      {...accessibilityProps}
    >
      {name}
    </span>
  )
}
