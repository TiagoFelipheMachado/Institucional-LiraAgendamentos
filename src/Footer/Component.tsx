import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { FooterClient } from './Component.client'

export async function Footer() {
  try {
    const footerData = await getCachedGlobal('footer', 1)()
    return <FooterClient data={footerData} />
  } catch {
    // Gracefully handle DB connection errors (e.g., during dev without PostgreSQL)
    return <FooterClient data={null} />
  }
}
