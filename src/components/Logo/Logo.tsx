import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Lira Agendamentos"
      width={160}
      height={32}
      decoding="async"
      className={clsx('h-8 w-auto', className)}
      src="/logo-lira.svg"
    />
  )
}
