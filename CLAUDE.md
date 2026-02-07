# Claude Setup for Feedl

## Project Overview

**feedl** is a Next.js 15 full-stack application with a PostgreSQL database, built with modern tooling for performance and developer experience.

**Stack:**

- **Frontend**: Next.js 15 (App Router, Turbopack)
- **Backend**: Next.js API routes with Prisma ORM
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **State**: React Query (TanStack Query)
- **UI Libraries**: Radix UI, Lucide Icons, Framer Motion
- **Code Quality**: ESLint (with TypeScript), Prettier

## Project Structure

```
feedl/
├── app/                    # Next.js App Router pages
├── components/             # React components (shadcn/ui + custom)
├── lib/                    # Utilities and shared logic
├── prisma/                 # Database schema
├── eslint.config.js        # ESLint configuration
├── next.config.ts          # Next.js config
└── package.json
```

## Package Manager

**IMPORTANT: This project uses `bun` as the package manager. Always use `bun` instead of `npm`, `yarn`, or `pnpm`.**

- Install packages: `bun add <package>` / `bun add -d <package>`
- Run scripts: `bun run <script>`
- Install all deps: `bun install`
- Add shadcn components: `bunx shadcn@latest add <component>`

## Key Commands

| Command              | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `bun run dev`        | Start development server (Turbopack)                         |
| `bun run build`      | Build for production (includes Prisma generate + migrations) |
| `bun run start`      | Run production server                                        |
| `bun run lint`       | Check code with ESLint                                       |
| `bun run lint:fix`   | Fix ESLint issues automatically                              |
| `bun run format`     | Format code with Prettier                                    |
| `bun run db:migrate` | Run pending Prisma migrations                                |

## Database Setup

- **ORM**: Prisma v7.2.0
- **Adapter**: Prisma Postgres adapter (`@prisma/adapter-pg`)
- **Migrations**: Managed with `prisma migrate`
- **Config**: `.env` must contain `DATABASE_URL`

## Development Tips

1. **Type Safety**: Project uses TypeScript 5. Always maintain type safety.
2. **Component Library**: Use shadcn/ui components from `/components/ui/` when building UI.
3. **Styling**: Use Tailwind CSS classes. Follow the prettier-plugin-tailwindcss class order.
4. **Database Queries**: Use Prisma for all DB interactions. Regenerate types with `bunx prisma generate` after schema changes.
5. **API Routes**: Place in `app/api/` directory. Use Next.js request/response patterns.
6. **Testing**: No test framework configured yet. Consider adding if needed.

## Code Style & Conventions

- **ESLint**: TypeScript + Next.js + Prettier integration
- **Formatter**: Prettier with import sorting via `@trivago/prettier-plugin-sort-imports`
- **Tailwind**: Sorted classes with prettier-plugin-tailwindcss
- **File Names**: Use kebab-case for files (e.g., `my-component.tsx`)

## Before Making Changes

- Always run `bun run lint:fix` before committing
- Ensure `bun run format:check` passes
- If modifying Prisma schema, run `bunx prisma migrate` and commit the migration file
- Keep eslint.config.js stable (currently modified - consider addressing)

## Common Tasks

**Creating a new page**: Add file to `app/` directory using App Router conventions
**Creating a component**: Add to `components/` with TypeScript, use shadcn/ui base components
**Adding a database model**: Update `prisma/schema.prisma`, create migration, run `bunx prisma generate`
**Adding an API endpoint**: Create file in `app/api/` following Next.js conventions

## Current Status

- Git branch: `main`
- Pending: eslint.config.js has uncommitted changes
