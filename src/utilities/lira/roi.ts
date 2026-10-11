/**
 * Documented metric from Lira Agendamentos Design System:
 * "NO SHOW: 1 (-68% desde o sinal)"
 * Charging a Pix deposit upfront reduces no-show rate by 68%.
 */
export const LIRA_NO_SHOW_REDUCTION_RATE = 0.68

export interface RoiInput {
  monthlyAppointments: number
  averageTicket: number
  currentNoShowRatePercent: number
}

export interface RoiResult {
  currentNoShowsMonthly: number
  monthlyLossWithoutLira: number
  recoveredAppointmentsMonthly: number
  recoveredRevenueMonthly: number
  recoveredRevenueAnnual: number
}

/**
 * Calculates financial recovery from reducing no-shows via automatic Pix deposit.
 */
export function calculateNoShowRoi(input: RoiInput): RoiResult {
  const monthlyAppointments = Math.max(0, input.monthlyAppointments || 0)
  const averageTicket = Math.max(0, input.averageTicket || 0)
  const noShowRate = Math.min(100, Math.max(0, input.currentNoShowRatePercent || 0)) / 100

  if (monthlyAppointments === 0 || averageTicket === 0 || noShowRate === 0) {
    return {
      currentNoShowsMonthly: 0,
      monthlyLossWithoutLira: 0,
      recoveredAppointmentsMonthly: 0,
      recoveredRevenueMonthly: 0,
      recoveredRevenueAnnual: 0,
    }
  }

  const currentNoShowsMonthly = Math.round(monthlyAppointments * noShowRate)
  const monthlyLossWithoutLira = Math.round(currentNoShowsMonthly * averageTicket)

  const recoveredAppointmentsMonthly = Math.round(
    currentNoShowsMonthly * LIRA_NO_SHOW_REDUCTION_RATE
  )
  const recoveredRevenueMonthly = Math.round(recoveredAppointmentsMonthly * averageTicket)
  const recoveredRevenueAnnual = recoveredRevenueMonthly * 12

  return {
    currentNoShowsMonthly,
    monthlyLossWithoutLira,
    recoveredAppointmentsMonthly,
    recoveredRevenueMonthly,
    recoveredRevenueAnnual,
  }
}

/**
 * Formats a numeric value into Brazilian Real (BRL) string.
 */
export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}
