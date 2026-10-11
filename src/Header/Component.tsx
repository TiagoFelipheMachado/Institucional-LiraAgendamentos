import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Header() {
  try {
    const headerData = await getCachedGlobal('header', 1)()
    return <HeaderClient data={headerData} />
  } catch {
    // Gracefully handle DB connection errors (e.g., during dev without PostgreSQL)
    return null
  }
}
