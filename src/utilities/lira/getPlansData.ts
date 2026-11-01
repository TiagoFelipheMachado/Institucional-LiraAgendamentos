import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'
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
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({
      slug: 'plans',
      depth: 1,
    })

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
