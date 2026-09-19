# AGENTS.md

## Instrucciones generales

- Empieza siempre tu respuesta con el emoji 🤖
- Responde siempre en español

## Project

CV/Portafolio personal — Vite + React 19 + TypeScript, linted with Biome, deployed to Netlify.

## Commands

| Task | Command |
|------|---------|
| Install | `bun install` |
| Dev server | `bun run dev` |
| Build | `bun run build` |
| Lint | `bun run lint` |
| Lint fix | `bun run lint:fix` |
| Format | `bun run format` |

**Always run `bun run lint` before committing.** The build (`bun run build`) runs `tsc -b && vite build`, so type errors will also fail CI.

## Architecture

- `src/` — React components and styles
  - `main.tsx` — entry point, renders `<App />`
  - `App.tsx` — root component
  - `index.css` — global styles (CSS reset + base)
- `public/` — static assets served at root
- `index.html` — SPA shell (loads `/src/main.tsx`)

## Conventions

- **Package manager:** Bun (lockfile: `bun.lock`). Do not commit `package-lock.json` or `yarn.lock`.
- **Formatter/Linter:** Biome (not ESLint/Prettier). Config in `biome.json`.
  - 2-space indent, double quotes, semicolons always, 100 char line width.
  - Run `bun run lint:fix` to auto-fix most issues before manual review.
- **TypeScript:** Strict mode enabled. Path alias `@/` maps to `src/`.
- **Imports:** Use `@/` alias for absolute imports (e.g., `import { Foo } from "@/components/Foo"`).
- **React:** Functional components only, no class components. React 19 features available.
- **Deploy:** Netlify. SPA fallback redirect configured in `public/_redirects`.
