import React from 'react'

export type BookingStatus =
  | 'confirmado'
  | 'aguardando'
  | 'concluido'
  | 'noshow'
  | 'bloqueado'
  | 'atendente'

interface StatusBadgeProps {
  status: BookingStatus
  label?: string
  className?: string
}

const statusConfig: Record<
  BookingStatus,
  {
    label: string
    dotColor: string
    bg: string
    border: string
    text: string
  }
> = {
  confirmado: {
    label: 'Confirmado',
    dotColor: 'bg-[#34E5A0]',
    bg: 'bg-[#053345]/50',
    border: 'border-[#14454F]',
    text: 'text-[#53EAFD]',
  },
  aguardando: {
    label: 'Aguardando sinal',
    dotColor: 'bg-[#FFB800]',
    bg: 'bg-[#2A2000]/60',
    border: 'border-[#735200]',
    text: 'text-[#FFE17D]',
  },
  concluido: {
    label: 'Concluído',
    dotColor: 'bg-[#34E5A0]',
    bg: 'bg-[#05281E]/60',
    border: 'border-[#0D593E]',
    text: 'text-[#A3F3D0]',
  },
  noshow: {
    label: 'No show',
    dotColor: 'bg-[#FF4D6D]',
    bg: 'bg-[#3A0D18]/60',
    border: 'border-[#7A1D32]',
    text: 'text-[#FFA1B5]',
  },
  bloqueado: {
    label: 'Bloqueado',
    dotColor: 'bg-[#71717A]',
    bg: 'bg-[#18181B]/70',
    border: 'border-[#27272A]',
    text: 'text-[#A1A1AA]',
  },
  atendente: {
    label: 'Com atendente',
    dotColor: 'bg-[#00D3F2]',
    bg: 'bg-[#053345]/80',
    border: 'border-[#00B8DB]/40',
    text: 'text-[#CEFAFE]',
  },
}

/**
 * Status Badge implementing Design System section 06:
 * BADGE = TINT 900 + BORDER 700 + TEXTO 300
 * O PONTO SÓLIDO GARANTE LEITURA SEM DEPENDER SÓ DE COR (Acessibilidade)
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, className = '' }) => {
  const config = statusConfig[status] || statusConfig.confirmado
  const displayLabel = label || config.label

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-mono font-medium border ${config.bg} ${config.border} ${config.text} ${className}`}
      data-testid={`badge-${status}`}
    >
      <span
        data-indicator="dot"
        className={`w-1.5 h-1.5 rounded-full ${config.dotColor} shrink-0 animate-pulse`}
      />
      <span>{displayLabel}</span>
    </span>
  )
}
