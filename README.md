# Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, and
Framer Motion — backed by Neon Postgres via Prisma, with a working contact form (Resend), an
Engineering Playground of interactive demos, and an MDX blog.

## Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech) account (free tier is enough)
- A [Resend](https://resend.com) account (free tier is enough)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Connect a Neon database. This project already has the Neon CLI wired up — from the project
   root:

   ```bash
   npx neon env pull
   ```

   This writes `DATABASE_URL` (pooled) and `DATABASE_URL_UNPOOLED` (direct) into `.env`. If you're
   starting fresh (no `.neon` project file yet), run `npx neon init` first to create/link a Neon
   project, then `npx neon env pull`.

3. Copy `.env.example` to `.env.local` and fill in:

   - `RESEND_API_KEY` — from the Resend dashboard. The contact form sends from
     `onboarding@resend.dev` by default, which works without verifying a domain — swap in your own
     verified domain later if you want a custom "from" address.
   - `CONTACT_EMAIL_TO` — the inbox that should receive contact form notifications.
   - `NEXT_PUBLIC_SITE_URL` — your production URL (used for the sitemap and metadata).

4. Apply the database schema:

   ```bash
   npx prisma migrate dev
   ```

5. Run the dev server:

   ```bash
   npm run dev
   ```

## Editing content

All placeholder content lives in a small number of files — replace it with your own before
deploying:

- `lib/site-config.ts` — name, title, tagline, about copy, experience, skills, projects, social
  links
- `content/blog/*.mdx` — blog posts
- `content/playground/*.mdx` — Engineering Playground write-ups
- `public/resume.pdf` — your real resume

## Scripts

| Command              | Description                              |
| -------------------- | ----------------------------------------- |
| `npm run dev`         | Start the dev server                      |
| `npm run build`       | Production build                          |
| `npm run start`       | Run the production build                  |
| `npm run lint`        | ESLint                                    |
| `npm run typecheck`   | `tsc --noEmit`                            |
| `npm run format`      | Prettier                                  |
| `npm run db:migrate`  | `prisma migrate dev`                      |
| `npm run db:push`     | `prisma db push` (no migration history)   |
| `npm run db:studio`   | Open Prisma Studio                        |

## Stack

- **Framework**: Next.js App Router, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui (Base UI), Framer Motion
- **Database**: Neon Postgres, Prisma ORM (via `@prisma/adapter-neon`)
- **Email**: Resend
- **Content**: MDX (`next-mdx-remote`) for the blog and playground write-ups — no CMS

## Project structure

- `app/` — routes: home (`/`), `/playground/*`, `/blog/*`, `/api/*`
- `components/` — organized by section/feature, plus `components/ui` (shadcn primitives)
- `lib/` — Prisma client, Resend client, site content, validation schemas, MDX helpers
- `prisma/` — schema and migrations
- `content/` — MDX source files
