# apps/web — LESFeedback Dashboard

## Overview

The main dashboard where authenticated users manage their projects and view collected feedback.

- **URL (prod)**: `app.lesfeedback.com`
- **URL (dev)**: `http://localhost:3001`
- **Package**: `@lesfeedback/web`

## Stack

- Next.js 15 (App Router, Turbopack)
- Tailwind CSS v4 + shadcn/ui
- Better Auth with Google OAuth (see LES-7)
- `@lesfeedback/db` — shared Prisma client (imported from `packages/db`)

## Structure

```
app/
  layout.tsx
  page.tsx                         # redirect → /dashboard
  login/page.tsx                   # sign-in page (LES-7)
  dashboard/
    layout.tsx                     # auth guard (server component)
    page.tsx                       # projects list
    sign-out-button.tsx            # client component
    [projectId]/
      page.tsx                     # feedback list + stats
      settings/page.tsx            # project settings
  api/
    auth/[...all]/route.ts         # Better Auth handler (LES-7)
    feedback/route.ts              # POST — receive widget feedback (LES-8)
components/
  ui/                              # shadcn/ui primitives
  dashboard/                       # dashboard-specific components
lib/
  auth.ts                          # Better Auth config (server)
  auth-client.ts                   # Better Auth client (browser)
middleware.ts                      # protects /dashboard/** routes
```

## Package Manager

**Always use `bun`.**

```bash
bun run dev          # dev server on :3001
bun run build        # production build
bun run typecheck    # tsc --noEmit
bun run lint
bun add <pkg>        # add dep to THIS app only
bunx shadcn@latest add <component>
```

## Database

Import Prisma client from `@lesfeedback/db`, never install Prisma directly here:

```ts
import { prisma } from '@lesfeedback/db'
```

After schema changes in `packages/db`, run `bunx prisma generate` from `packages/db/`.

## Auth Rules (LES-7)

- All `/dashboard/**` routes are protected — middleware redirects unauthenticated users to `/login`
- Use `auth.api.getSession({ headers: await headers() })` in Server Components that need the session
- Use `authClient` from `@/lib/auth-client` in Client Components
- Always scope DB queries to `session.user.id` — never return another user's data

## API Route Rules (LES-8)

- `/api/feedback` is PUBLIC (no auth) — uses `apiKey` for project lookup
- Must include CORS headers (`Access-Control-Allow-Origin: *`) — widget calls from any domain
- Always validate request body with Zod before using it
- Return consistent error shape: `{ error: string }`

## Git

**Never run `git add` or `git commit`** — the user handles all commits.

## Key Env Vars

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Better Auth secret |
| `BETTER_AUTH_URL` | Base URL of this app (dev: http://localhost:3001) |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_WIDGET_URL` | URL of the deployed widget.js |
