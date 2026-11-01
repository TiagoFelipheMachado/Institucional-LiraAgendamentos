import type { GlobalAfterChangeHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidatePlans: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger.info(`Revalidating plans global`)

    try {
      revalidateTag('global_plans', 'max')
      revalidatePath('/planos')
      revalidatePath('/')
    } catch {
      // In standalone script / migrations, next/cache may not be bound
    }
  }

  return doc
}
