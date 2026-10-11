# Project Rules & Guidelines - site-lira (Payload CMS 3 + Next.js)

## 1. Project Overview & Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **CMS**: [Payload CMS 3.90.2](https://payloadcms.com/)
- **Database**: PostgreSQL via `@payloadcms/db-postgres`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager**: `pnpm` (use exclusively, node >= 20.9.0)
- **Rich Text**: Lexical Editor (`@payloadcms/richtext-lexical`)

---

## 2. Essential Commands
Always use `pnpm` for running scripts:
- `pnpm dev`: Start development server (Next.js + Payload Admin on `http://localhost:3000`)
- `pnpm build`: Build Next.js app & Payload admin
- `pnpm generate:types`: Regenerate TypeScript types in `src/payload-types.ts` (**required** after modifying any collection, field, or global)
- `pnpm generate:importmap`: Regenerate Payload admin component import map (required when adding custom UI components to admin)
- `pnpm lint` / `pnpm lint:fix`: Run ESLint
- `pnpm test:int`: Run Vitest integration tests
- `pnpm test:e2e`: Run Playwright E2E tests

---

## 3. Directory Structure & Conventions
```text
src/
├── access/         # Reusable access control predicates (authenticated, anyone, adminOnly)
├── app/
│   ├── (frontend)/ # Next.js frontend pages & layouts
│   └── (payload)/  # Payload Admin UI routes
├── blocks/         # Layout builder blocks (ArchiveBlock, Banner, CallToAction, Content, Form, MediaBlock)
├── collections/    # Payload Collections (Pages, Posts, Media, Categories, Users, etc.)
├── components/     # Shared React UI components
├── endpoints/      # Custom API endpoints
├── fields/         # Reusable field configurations & helpers (e.g. slug, defaultLexical)
├── globals/        # Payload Globals (Header, Footer)
├── heros/          # Hero component variants (HighImpact, MediumImpact, LowImpact, PostHero)
├── hooks/          # Shared collection & field hooks
├── plugins/        # Configured Payload plugins (SEO, Search, Redirects, FormBuilder, NestedDocs)
├── providers/      # React context providers (Theme, HeaderTheme, etc.)
├── search/         # Search plugin configuration and sync hooks
├── utilities/      # Shared utilities (getURL, formatDateTime, generateMeta, etc.)
├── payload-types.ts# Generated TypeScript types (DO NOT edit manually)
└── payload.config.ts # Central Payload configuration
```

---

## 4. Critical Payload 3.x Rules & Security Best Practices

### A. Local API Access Control (CRITICAL)
Local API calls bypass access control by default! When performing operations on behalf of an authenticated user, explicitly pass `overrideAccess: false`:
```ts
// Enforce user permissions
const result = await payload.find({
  collection: 'posts',
  user: currentUser,
  overrideAccess: false, // MANDATORY for user-scoped access control
})
```

### B. Transaction Atomicity in Hooks
Always pass `req` to nested `req.payload.*` operations within hooks to maintain transaction atomicity and prevent data corruption:
```ts
hooks: {
  afterChange: [
    async ({ doc, req }) => {
      await req.payload.create({
        collection: 'audit-log',
        data: { docId: doc.id },
        req, // MANDATORY: threads transaction
      })
    },
  ],
}
```

### C. Prevent Infinite Hook Loops
Operations in hooks that trigger changes on the same collection must use context flags:
```ts
hooks: {
  afterChange: [
    async ({ doc, req, context }) => {
      if (context.skipHooks) return
      await req.payload.update({
        collection: 'posts',
        id: doc.id,
        data: { views: doc.views + 1 },
        context: { skipHooks: true },
        req,
      })
    },
  ],
}
```

### D. Always Run Type Generation After Schema Changes
Whenever modifying fields or collections in `src/collections/`, `src/globals/`, or `src/payload.config.ts`, run:
```bash
pnpm generate:types
```
Import types strictly from `@/payload-types`.

---

## 5. Antigravity Skill & Documentation
- The comprehensive Payload CMS skill is available at `.agents/skills/payload/SKILL.md`.
- Deep reference manuals are located in `.agents/skills/payload/references/` (covering Collections, Fields, Hooks, Access Control, Queries, Endpoints, Adapters, and Plugins).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
