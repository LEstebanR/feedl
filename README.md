# LESFeedback

Lightweight feedback collection platform. Embed a JS snippet on any website to collect user feedback, then view and manage it in a dashboard.

## Structure

```
apps/landing   — Marketing site + waitlist (Next.js, port 3000)
apps/web       — Dashboard (Next.js, port 3001)
apps/widget    — Embeddable JS widget (Vite + Preact, IIFE)
packages/db    — Shared Prisma client for the dashboard
```

## Getting Started

```bash
bun install
bun run dev      # starts landing + web in parallel
```

Individual apps:

```bash
cd apps/landing && bun run dev   # landing on :3000
cd apps/web && bun run dev       # dashboard on :3001
cd apps/widget && bun run build  # build widget bundle
```

## Stack

- **Monorepo**: Turborepo + bun workspaces
- **Landing / Dashboard**: Next.js 15, Tailwind CSS v4, shadcn/ui
- **Widget**: Vite, Preact
- **Database**: Neon (PostgreSQL) + Prisma
- **Auth**: Auth.js / NextAuth v5 (coming — LES-7)
