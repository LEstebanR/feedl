# packages/db — Shared Prisma Client

## Overview

Shared database package for the LESFeedback dashboard. Exports a typed Prisma client and all Prisma-generated types for use in `apps/web`.

- **Package**: `@lesfeedback/db`
- **Import**: `import { prisma } from '@lesfeedback/db'`

## Stack

- Prisma v7 + `@prisma/adapter-pg` (Neon PostgreSQL)
- TypeScript

## Structure

```
prisma/
  schema.prisma   # Dashboard models: User, Project, Feedback (LES-6)
src/
  index.ts        # Exports prisma client + re-exports @prisma/client types
```

> Note: The `Waitlist` model lives in `apps/landing/prisma/schema.prisma` — it is NOT here.

## Package Manager

**Always use `bun`. Run commands from `packages/db/`.**

```bash
bunx prisma migrate dev --name <name>   # create and apply a new migration
bunx prisma migrate deploy              # apply pending migrations (production)
bunx prisma generate                    # regenerate Prisma client types
bunx prisma studio                      # browse DB in browser
bunx prisma db push                     # push schema without migration (prototyping only)
```

## Adding Models

1. Edit `prisma/schema.prisma`
2. Run `bunx prisma migrate dev --name <descriptive-name>` (kebab-case name)
3. Run `bunx prisma generate`
4. Run `bun run typecheck` from monorepo root to verify no type errors

## Schema Conventions

```prisma
model Example {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  // scalar foreign keys alongside relation fields
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}
```

- IDs: `String @id @default(cuid())`
- All models have `createdAt` and `updatedAt`
- Optional fields use `?`
- Unstructured data: `Json?`
- Foreign keys: keep both scalar (`userId String`) and relation field

## Env Var

Requires `DATABASE_URL` in the app that uses this package (set in `apps/web/.env`).

## Usage in apps/web

```ts
import { prisma } from '@lesfeedback/db'

// Always scope to current user
const projects = await prisma.project.findMany({
  where: { userId: session.user.id },
})
```

Never expose raw Prisma errors to API responses — catch and return generic messages.

## Git

**Never run `git add` or `git commit`** — the user handles all commits.
