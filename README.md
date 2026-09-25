# 💼 Andrés Giraldo — Portafolio

Portafolio personal de **Andrés Giraldo**, Ingeniero de Software en transición hacia Data Analytics / Data Engineering. Construido con React 19, TypeScript y Vite 6, con arquitectura de componentes modulares y contenido externalizado en JSON para facilitar su mantenimiento.

🔗 **Sitio en vivo:** [portafolio-andres-giraldo-indol.vercel.app](https://portafolio-andres-giraldo-indol.vercel.app)

## 🧩 Secciones del sitio

El portafolio está compuesto por 9 componentes modulares, cada uno responsable de una sección:

| Componente | Contenido |
|---|---|
| `Navbar` | Navegación principal |
| `Hero` | Presentación inicial (headline, tagline, foco) |
| `About` | Bio y presentación personal |
| `Stack` | Tecnologías y herramientas de trabajo |
| `Projects` | Proyectos destacados del portafolio |
| `Certifications` | Certificaciones obtenidas |
| `Contributions` | Contribuciones de GitHub, vía integración con la API |
| `Experience` | Experiencia profesional |
| `Footer` | Enlaces de contacto (LinkedIn, GitHub, CV) |

## 🗂️ Datos del sitio

Todo el contenido editable vive separado de la lógica de presentación, en `src/data/`, como archivos JSON independientes:

- `profile.json` — roles, tagline, bio, headline, foco, stats
- `projects.json` — proyectos del portafolio
- `skills.json` — stack técnico
- `certifications.json` — certificaciones
- `experience.json` — experiencia profesional
- `github.json` — configuración de la integración con GitHub

Esto permite actualizar el contenido del sitio (nuevo proyecto, certificación, rol) sin tocar código de componentes.

## 🛠️ Stack técnico

- **Runtime:** Bun
- **Framework:** React 19
- **Lenguaje:** TypeScript (`noUncheckedIndexedAccess` activado)
- **Build:** Vite 6
- **Lint/Format:** Biome
- **Estilos:** CSS modular (`src/styles/`)
- **Deploy:** Vercel, con `vercel.json` (SPA fallback + cache headers)

## 🔌 Integraciones

- **GitHub API** — custom hook `useGitHubContributions`, que trae las contribuciones reales del autor para mostrarlas en la sección `Contributions`.

## 🚀 Inicio rápido

```bash
bun install
bun run dev
```

## 📜 Comandos

| Comando | Descripción |
|---|---|
| `bun run dev` | Servidor de desarrollo |
| `bun run build` | Build de producción |
| `bun run preview` | Preview del build |
| `bun run lint` | Verificar lint con Biome |
| `bun run lint:fix` | Corregir lint automáticamente |
| `bun run format` | Formatear con Biome |

## 🗺️ Estructura del proyecto

```
portafolio-Andres-Giraldo/
├── .agents/skills/       # Configuración de skills para agentes de codificación
├── public/                # Assets estáticos (foto, CV, favicon)
├── src/
│   ├── components/         # 9 componentes modulares (Navbar, Hero, About, Stack, ...)
│   ├── data/               # Contenido del sitio en JSON (profile, projects, skills, ...)
│   ├── hooks/               # Custom hooks (useGitHubContributions)
│   ├── styles/              # Sistema de estilos CSS (10 archivos)
│   └── App.tsx              # Orquestador principal de la app
├── AGENTS.md               # Guía operativa para agentes de codificación
├── skills-lock.json        # Registro de skills habilitadas
├── vercel.json              # Configuración de despliegue (SPA fallback, cache headers)
├── biome.json
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🤖 Desarrollo asistido por agentes

Este proyecto se desarrolla con apoyo de agentes de codificación, siguiendo las convenciones documentadas en [`AGENTS.md`](./AGENTS.md) y las skills registradas en `skills-lock.json`.

## 👤 Autor

**Andrés Giraldo Ramírez**
Ingeniero de Software en transición hacia Data Analytics / Data Engineering
GitHub: [@giralrez](https://github.com/giralrez)
