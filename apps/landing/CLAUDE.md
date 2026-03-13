# apps/landing — LESFeedback Landing Page

## Overview

Marketing site for LESFeedback. Includes the landing page, waitlist signup, pricing, privacy policy, and terms of service.

- **URL (prod)**: `lesfeedback.com`
- **URL (dev)**: `http://localhost:3000`
- **Package**: `@lesfeedback/landing`

## Stack

- Next.js 15 (App Router, Turbopack)
- Tailwind CSS v4 + shadcn/ui
- Prisma v7 + `@prisma/adapter-pg` (Waitlist model only)
- Framer Motion, Radix UI, Lucide Icons
- React Query (TanStack)

## Structure

```
app/
  page.tsx              # Home / landing
  privacy/page.tsx      # Privacy policy
  terms/page.tsx        # Terms of service
  api/
    waitlist/route.ts   # POST — add email to waitlist
components/
  views/home/           # Landing sections (hero, pricing, problem, demo, waitlist)
  ui/                   # shadcn/ui components
  header.tsx
  footer.tsx
lib/
  prisma.ts             # Prisma client singleton
  utils.ts
prisma/
  schema.prisma         # Waitlist model
```

## Package Manager

**Always use `bun`.**

```bash
bun run dev          # dev server on :3000
bun run build        # production build
bun run typecheck    # tsc --noEmit
bun run lint         # eslint
bun add <pkg>        # add dependency
bunx shadcn@latest add <component>
```

## Database (Waitlist)

The landing has its own **isolated** Prisma schema (`prisma/schema.prisma`) with a single `Waitlist` model. It does NOT use `@lesfeedback/db` — that package is for the dashboard.

The Prisma client is generated to a **local path** (`generated/prisma`) to avoid conflicts with the dashboard client:
- Schema output: `generator client { output = "../generated/prisma" }`
- Import in code: `import { PrismaClient } from '@/generated/prisma'`
- The `generated/prisma/` directory is gitignored — regenerate after cloning.

```bash
# From apps/landing/  — requires Node.js 22.12+
bunx prisma migrate dev --name <name>   # create migration
bunx prisma generate                    # regenerate client (run after cloning)
bunx prisma studio                      # browse data
```

`DATABASE_URL` is read from the monorepo root `.env`.

## Key Rules

- All CTA buttons must link to `http://localhost:3001/login` in dev and `https://app.lesfeedback.com/login` in prod (use `NEXT_PUBLIC_APP_URL` env var — see LES-15)
- No auth on this app — it's fully public
- New sections go in `components/views/home/`
- Use shadcn/ui components from `components/ui/` for all UI primitives
- File names: kebab-case
- **Never commit directly to `main`** — always use a feature branch and open a PR
