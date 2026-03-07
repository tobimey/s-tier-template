# S-Tier Template

> A production-ready Next.js starter. Run `npx create-next-app`, follow the setup, and ship.

**⚠️ In development — use at your own risk.**

## Quick Start

```bash
npx s-tier-app
# Choose pnpm, bun, or npm when prompted
pnpm i && pnpm dev   # or: bun i && bun dev  |  npm i && npm run dev
```

1. Configure env variables (including `DATABASE_SECRET`; for auth, add `BETTER_AUTH_SECRET` via openssl)
2. Complete the checklist: remove `todo-list.tsx` and `actions.ts`

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js | Industry standard. Plain React lacks many features; TanStack Start is still experimental and missing production features. |
| **Package Manager** | pnpm, bun, or npm | Choose during setup. pnpm is recommended; bun is fast; npm works everywhere. |
| **CSS** | Tailwind | Utility-first CSS that lets you build custom designs without leaving your HTML. |
| **Styling System** | Shadcn | Reusable, copy-paste UI components on accessible primitives. You own the code and can customize freely. |
| **Database + ORM** | Neon Postgres + Drizzle, or Convex | PostgreSQL + Drizzle: battle-tested, AI-friendly, TypeScript-first. Convex: optional real-time backend with great DX. Choose during setup. |
| **Validation** | Zod | Type-safe validation with excellent DX. |
| **Authentication** | Better Auth | Preconfigured and ready to use. Great DX, simple setup, excellent guides. Your user data stays in your own database. For heavy production use, consider paid services like Clerk or WorkOS. |
| **Animation** | Motion + View Transitions | Motion has better DX than GSAP. View Transitions enable mobile-like screen transitions in the browser. |
| **Hosting** | Your choice | Vercel is the simplest default for Next.js. Easy to switch to other platforms. |
| **Monorepo** | Turborepo | The go-to solution for monorepos. [Watch this](https://youtu.be/ezb2neX9pIU?si=4OqhbX6g9UxXYyxk) if you're curious. |
| **Linting & Formatting** | Biome + Ultracite | Faster than ESLint + Prettier, single config file. Ultracite preconfigures it for AI-assisted workflows. |

## Opinions

These choices are already implemented and reflect what we consider a solid starting point:

- Alphabetical prop sorting
- Import from React directly (e.g. `useState` instead of `React.useState`)
- Next.js [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components) enabled
- Packages and apps prefixed with `@repo/*` for clear import origins

## Recommendations

**VS Code**

- Enable Quick Suggestions for strings (better Tailwind autocomplete)
- Set JavaScript/TypeScript Import Module Specifier to non-relative (prefer absolute imports)

**Extensions**

- Biome
- Tailwind CSS IntelliSense

## Roadmap

- [] **Auth out of the box** — Better Auth preconfigured and ready to use
- [] **Package manager choice** — pnpm, bun, or npm supported via setup
- [] **Convex support** — Optional Convex integration available
