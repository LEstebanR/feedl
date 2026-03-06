# LESFeedback — Monorepo Setup

## Project Overview

**LESFeedback** is a lightweight feedback collection SaaS. It provides an embeddable JavaScript snippet that any website can add to collect user feedback. Responses are stored in PostgreSQL (Neon + Prisma) and visualized in a Next.js dashboard.

## Monorepo Structure (Turborepo + bun workspaces)

```
feedl/  (monorepo root)
├── apps/
│   ├── landing/    # @lesfeedback/landing — Next.js landing + waitlist (port 3000)
│   ├── web/        # @lesfeedback/web     — Next.js dashboard app   (port 3001)
│   └── widget/     # @lesfeedback/widget  — Vite IIFE widget bundle
├── packages/
│   └── db/         # @lesfeedback/db      — Prisma client + schema for dashboard
├── turbo.json
└── package.json    # workspace root
```

## Package Manager

**IMPORTANT: Always use `bun`. Never use npm, yarn, or pnpm.**

```bash
bun install                          # install all workspace deps
bun add <pkg> --cwd apps/web         # add dep to a specific app
bunx shadcn@latest add <component>   # add shadcn component (run inside the app dir)
bunx prisma generate                 # regenerate Prisma client types
```

## Key Commands (run from monorepo root)

| Command              | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `bun run dev`        | Start all apps in dev mode (via Turbo)         |
| `bun run build`      | Build all apps                                 |
| `bun run typecheck`  | Typecheck all packages                         |
| `bun run lint`       | Lint all packages                              |
| `bun run format`     | Format all files with Prettier                 |

## Per-app Commands (from app directory)

| App         | Dev command                               | Port |
| ----------- | ----------------------------------------- | ---- |
| `landing`   | `cd apps/landing && bun run dev`          | 3000 |
| `web`       | `cd apps/web && bun run dev`              | 3001 |
| `widget`    | `cd apps/widget && bun run build`         | —    |

## Database

- **Landing** (`apps/landing`): Has its own Prisma schema for the `Waitlist` model. Config in `apps/landing/prisma/`.
- **Dashboard** (`packages/db`): Shared Prisma package for User, Project, Feedback models (to be implemented in LES-6). Import as `@lesfeedback/db`.
- Regenerate client after schema changes: `bunx prisma generate` (run inside the relevant dir)

## Tech Stack per App

| App      | Framework        | Styling              | Notes                        |
| -------- | ---------------- | -------------------- | ---------------------------- |
| landing  | Next.js 15       | Tailwind v4 + shadcn | waitlist, privacy, terms     |
| web      | Next.js 15       | Tailwind v4          | dashboard — see LES-10       |
| widget   | Vite + Preact    | Injected CSS         | IIFE bundle, <20kb target    |

## Code Conventions

- **File names**: kebab-case (`my-component.tsx`)
- **Imports**: absolute with `@/` alias inside each app
- **Prettier**: configured at root, applies to all apps
- **ESLint**: each app has its own config
- **Commits**: done by the user — never commit automatically

## Before Finishing Changes

- Run `bun run typecheck` from root to verify no type errors
- For Prisma schema changes: edit schema → `bunx prisma migrate dev --name <name>` → `bunx prisma generate`
- Widget changes: check bundle size after `bun run build` in `apps/widget` — target <20kb gzipped
- Do NOT run `git add` or `git commit` — the user handles all commits

## Linear Issues

- LES-5: Monorepo setup (this issue — completed)
- LES-6: Prisma schema (User, Project, Feedback)
- LES-7: Auth.js (NextAuth v5)
- LES-8: Feedback API routes
- LES-9: Widget development
- LES-10: Dashboard UI
- LES-11: Widget hosting + embed snippet
