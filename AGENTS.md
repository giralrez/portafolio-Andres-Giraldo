# AGENTS.md

## Instrucciones generales

- Empieza siempre tu respuesta con el emoji 🤖
- Responde siempre en español

## Project

CV/Portafolio personal — Vite + React 19 + TypeScript, linted with Biome, deployed to Vercel.

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

- `src/` — React components, hooks, and data
  - `main.tsx` — entry point, renders `<App />`
  - `App.tsx` — root component (orchestrator)
  - `components/` — modular UI components (Navbar, Hero, About, Stack, Projects, Certifications, Contributions, Experience, Footer)
  - `data/` — JSON data files (profile, projects, skills, certifications, experience, github)
  - `hooks/` — custom hooks (useGitHubContributions)
  - `styles/` — CSS modules for each component
- `public/` — static assets served at root
- `index.html` — SPA shell (loads `/src/main.tsx`)

## Design System

- **Theme:** Dark Mode OLED (`#0f172a` background)
- **Accent:** `#22c55e` (green)
- **Typography:** IBM Plex Sans (body) + JetBrains Mono (headings/code)
- **Accessibility:** focus-visible, prefers-reduced-motion, 4.5:1 contrast

## Editing Content

Para editar el contenido del portafolio, modifica los archivos JSON en `src/data/`:
- `profile.json` — nombre, bio, stats, email, redes sociales
- `projects.json` — proyectos con tech stack y links
- `skills.json` — tecnologías del stack
- `certifications.json` — credenciales
- `experience.json` — experiencia laboral
- `github.json` — configuración de languages

## Conventions

- **Package manager:** Bun (lockfile: `bun.lock`). Do not commit `package-lock.json` or `yarn.lock`.
- **Formatter/Linter:** Biome (not ESLint/Prettier). Config in `biome.json`.
  - 2-space indent, double quotes, semicolons always, 100 char line width.
  - Run `bun run lint:fix` to auto-fix most issues before manual review.
- **TypeScript:** Strict mode enabled. Path alias `@/` maps to `src/`.
- **Imports:** Use `@/` alias for absolute imports (e.g., `import { Foo } from "@/components/Foo"`).
- **React:** Functional components only, no class components. React 19 features available.
- **Deploy:** Vercel. SPA fallback configured in `vercel.json`.
