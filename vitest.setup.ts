// Any setup scripts you might need go here

// Load .env files
import 'dotenv/config'

// Ensure React Testing Library unmounts components between tests, so DOM
// nodes (and duplicate accessible-name matches) don't leak across `it()`
// blocks within the same spec file.
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})
