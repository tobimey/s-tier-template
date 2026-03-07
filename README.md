# S-Tier-Template 

THIS IS STILL IN DEVELOPMENT, USE IT ON YOUR OWN RISK.

Welcome, this is the S-Tier-Template, a fully working starter for your next app. Run ``npx create-next-app`` and see magic happen. Visit localhost:3000/ and follow the instructions. Setup only takes a few minutes.

## Setup Guide 

1. run npx s-tier 
2. run pnpm i & pnpm dev to get started 
3. setup your needed env variables
  - This includes a DATABASE_SECRET
  - If you use auth you need to generate a BETTER_AUTH_SECRET via openssl
4. complete the checklist by deleting the todo-list.tsx and the actions.ts files

## Opinions of this repo 

You are allowed to have different opinions but these opinion are what I think a good starting point. They are already implemented and just for you to know. 

- Alphabetical props sorting
- import from React instead of writing React.* (like useState instead of React.useState)
- Next.js [cacheComponents](https://nextjs.org/docs/app/getting-started/cache-components) is activated
- packages and apps are prefexied with @repo/* so that when you import them anywhere its clear where they come from 

## Recommendations 

*Vscode settings:*
- for optimal tailwind experience toggle Quick Suggestions to on for strings
- prefer absolute imports by setting Javascript/Typescript Import Module Specifier to non-relative

*Extensions*
- Biome 
- TailwindCss Intellisense

## S-Tier-Stack: 

### package manager / pnpm

npm is slow, yarn is weird and bun is still to new and not supported everywhere. pnpm is fast, simple & save.

### Monorepo / Turborepo

A monorepo is a nobrainer nowadays, turborepo is the only viable solution, watch (this)[https://youtu.be/ezb2neX9pIU?si=4OqhbX6g9UxXYyxk] video if you'r curious.

### Styling System / Shadcn 

This is a style system that makes things easy & simple. 

### Style Language / TailwindCSS

Once you use it you will never go back. You gain so much speed. 

### Framework / Next.js

Plain React misses many features. Next.js is the most used Meta Framework, it has the biggest community and AI is well trained with it. Tanstack Start is to new and still in Beta, it misses many things, that Next.js has already solved.

### Database / Postgres + Drizzle 

Best experience currently. Convex is also a good choice but might not be suitable for all projects and needs new learning. For Database I suggest using neon db. Drizzle is a no-brainer it's faster and more convenient to use then Prisma. 

### Authentication / Better Auth

No Auth hosting anywhere, no free plan banners, you got all the control. Setup is damn simple.

### Hosting? 

You decide. Vercel is by far simplest. 

### Linting & Formatting / Biome + Ultracite

Eslint + Prettier is also fine but Biome is newer, faster and only needs one file. In combination with ultracite it is preconfigured and works well when working with AI.  