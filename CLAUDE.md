# LESFeedback — Monorepo Setup

## Project Overview

**LESFeedback** is a lightweight feedback collection SaaS. It provides an embeddable JavaScript snippet that any website can add to collect user feedback. Responses are stored in PostgreSQL (Neon + Prisma) and visualized in a Next.js dashboard.

## Monorepo Structure (Turborepo + bun workspaces)

```
feedl/  (monorepo root)
├── .github/
│   └── workflows/      # CI: lint.yml, typecheck.yml, test.yml
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
| `bun run test`       | Run all test suites                            |
| `bun run format`     | Format all files with Prettier                 |

## Per-app Commands (from app directory)

| App         | Dev command                               | Port |
| ----------- | ----------------------------------------- | ---- |
| `landing`   | `cd apps/landing && bun run dev`          | 3000 |
| `web`       | `cd apps/web && bun run dev`              | 3001 |
| `widget`    | `cd apps/widget && bun run build`         | —    |

## Database

- **Landing** (`apps/landing`): Has its own Prisma schema for the `Waitlist` model. Config in `apps/landing/prisma/`. Client is generated locally to `apps/landing/generated/prisma` (isolated from the dashboard client).
- **Dashboard** (`packages/db`): Shared Prisma package for User, Project, Feedback models. Import as `@lesfeedback/db`.
- Regenerate client after schema changes: `bunx prisma generate` (run inside the relevant dir)
- **Node.js 22.12+ required** for Prisma v7 CLI (`prisma migrate dev`, `prisma generate`)

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
- **Commits**: allowed on feature branches — never commit directly to `main`

## CI / GitHub

Three required checks run on every PR to `main`:
- **Lint** — `bun run lint`
- **TypeCheck** — `bunx prisma generate` + `bun run typecheck`
- **Test** — `bun run test`

Branch protection on `main` requires all three to pass. Branches are auto-deleted after merge.
GitHub secret `DATABASE_URL` is set for CI (used by the TypeCheck job to run `prisma generate`).

## Before Finishing Changes

- Run `bun run typecheck` from root to verify no type errors
- Run `bun run lint` from root to verify no lint errors
- Run `bun run test` from root to verify tests pass
- For Prisma schema changes: edit schema → `bunx prisma migrate dev --name <name>` → `bunx prisma generate`
- Widget changes: check bundle size after `bun run build` in `apps/widget` — target <20kb gzipped
- **Never commit to `main` directly** — always use a feature branch and open a PR

## Linear Issues

- LES-5: Monorepo setup (completed)
- LES-6: Prisma schema (User, Project, Feedback) (completed)
- LES-7: Auth.js (NextAuth v5)
- LES-8: Feedback API routes
- LES-9: Widget development
- LES-10: Dashboard UI
- LES-11: Widget hosting + embed snippet
