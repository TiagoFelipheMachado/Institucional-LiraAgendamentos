'use client'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ name?: string; monthlyPrice?: number }>()

  const name = data?.data?.name
  const price = data?.data?.monthlyPrice !== undefined ? ` (R$ ${data.data.monthlyPrice})` : ''

  const label = name
    ? `Plano: ${name}${price}`
    : `Plano ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}
