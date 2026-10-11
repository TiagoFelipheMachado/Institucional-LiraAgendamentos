import { describe, it, expect } from 'vitest'
import {
  calculateNoShowRoi,
  formatBRL,
  LIRA_NO_SHOW_REDUCTION_RATE,
} from '@/utilities/lira/roi'

describe('ROI Calculator & No-Show Reduction (TDD)', () => {
  it('uses the documented reduction rate of 68% (-68% desde o sinal)', () => {
    expect(LIRA_NO_SHOW_REDUCTION_RATE).toBe(0.68)
  })

  it('calculates recovered revenue and lost revenue accurately for a typical salon', () => {
    // Salon with 200 appointments/month, average ticket R$ 80, 20% no-show rate
    const result = calculateNoShowRoi({
      monthlyAppointments: 200,
      averageTicket: 80,
      currentNoShowRatePercent: 20,
    })

    // 200 * 20% = 40 no-shows without Lira
    expect(result.currentNoShowsMonthly).toBe(40)
    // 40 * R$ 80 = R$ 3.200 lost monthly
    expect(result.monthlyLossWithoutLira).toBe(3200)

    // With Lira: 68% of no-shows are eliminated
    // 40 * 0.68 = 27.2 recovered appointments (rounded to 27)
    expect(result.recoveredAppointmentsMonthly).toBe(27)

    // Recovered monthly revenue: 27 * 80 = 2160
    expect(result.recoveredRevenueMonthly).toBe(2160)

    // Annual recovered revenue: 2160 * 12 = 25920
    expect(result.recoveredRevenueAnnual).toBe(25920)
  })

  it('handles edge cases gracefully (zero or negative values)', () => {
    const zeroCase = calculateNoShowRoi({
      monthlyAppointments: 0,
      averageTicket: 100,
      currentNoShowRatePercent: 25,
    })

    expect(zeroCase.monthlyLossWithoutLira).toBe(0)
    expect(zeroCase.recoveredRevenueMonthly).toBe(0)

    const negativeCase = calculateNoShowRoi({
      monthlyAppointments: -50,
      averageTicket: -80,
      currentNoShowRatePercent: -10,
    })

    expect(negativeCase.monthlyLossWithoutLira).toBe(0)
    expect(negativeCase.recoveredRevenueMonthly).toBe(0)
  })

  it('formats currency values properly in Brazilian Real (BRL)', () => {
    expect(formatBRL(4105)).toMatch(/R\$\s?4\.105/)
    expect(formatBRL(80)).toMatch(/R\$\s?80/)
  })
})
