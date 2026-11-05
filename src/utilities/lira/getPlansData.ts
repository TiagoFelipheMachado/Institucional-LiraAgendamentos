import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'
import { defaultPlansData } from '@/globals/Plans/config'
import {
  buildPricingPlan,
  LIRA_PRICING_PLANS,
  type PricingPlan,
  type RawPayloadPlan,
} from './pricing'

export interface PlansData {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
  annualDiscountPercent?: number
}

async function fetchPlansFromPayload(): Promise<PlansData> {
  const dbUri = process.env.DATABASE_URI || process.env.DATABASE_URL
  if (!dbUri) {
    return {
      plans: LIRA_PRICING_PLANS,
      annualDiscountPercent: 20,
    }
  }

  try {
    const fetchPromise = async () => {
      const payload = await getPayload({ config: configPromise })
      const data = await payload.findGlobal({
        slug: 'plans',
        depth: 1,
      })

      if (data?.plans && Array.isArray(data.plans) && data.plans.length > 0) {
        const startPlan = data.plans.find(
          (p: any) =>
            p.id === 'start' || p.id === 'essencial' || p.name?.toLowerCase().includes('start'),
        )
        const startFeatures = (startPlan?.features || []).map((f: any) =>
          (typeof f === 'string' ? f : f?.feature || '').toLowerCase(),
        )

        const isObsolete =
          !startFeatures.some((f: string) => f.includes('comiss')) ||
          startFeatures.some((f: string) => f.includes('whatsapp'))

        if (isObsolete) {
          try {
            await payload.updateGlobal({
              slug: 'plans',
              data: {
                plans: defaultPlansData,
              },
              context: {
                disableRevalidate: true,
              },
            })
            data.plans = defaultPlansData as any
          } catch {
            data.plans = defaultPlansData as any
          }
        }
      }

      return data
    }

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error('Payload connection timeout')), 2500),
    )

    const data = (await Promise.race([fetchPromise(), timeoutPromise])) as any

    if (data?.plans && Array.isArray(data.plans) && data.plans.length > 0) {
      const discount = data.annualDiscountPercent ?? 20
      const formatted = data.plans.map((p: RawPayloadPlan) => buildPricingPlan(p, discount))
      return {
        plans: formatted,
        title: data.sectionTitle || undefined,
        subtitle: data.sectionSubtitle || undefined,
        annualDiscountPercent: discount,
      }
    }
  } catch {
    // Database connection may not be available at build/test time without DB
  }

  return {
    plans: LIRA_PRICING_PLANS,
    annualDiscountPercent: 20,
  }
}

/**
 * Returns dynamic plans from Payload CMS Global (slug: 'plans')
 * with cached revalidation tagged as 'global_plans'.
 */
export const getPlansData = unstable_cache(
  async () => fetchPlansFromPayload(),
  ['global_plans_data'],
  {
    tags: ['global_plans'],
  },
)
