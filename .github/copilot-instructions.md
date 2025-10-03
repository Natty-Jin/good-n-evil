# Copilot Instructions for kor_good_evil

## Project Overview
- This is a React + TypeScript project using Vite and Tailwind CSS for frontend development.
- The `src/` directory contains all source code, organized by feature and component type.
- Major features are implemented as sections under `src/components/feature/` (e.g., `HeroSection.tsx`, `WarMapSection.tsx`).
- Routing is handled via files in `src/router/` and `src/pages/`.
- Internationalization (i18n) is set up in `src/i18n/`.

## Key Patterns & Conventions
- **Component Structure:**
  - Use functional React components with TypeScript.
  - Shared/base UI elements go in `src/components/base/`.
  - Feature-specific UI goes in `src/components/feature/`.
- **Styling:**
  - Tailwind CSS is used for all styling. Avoid custom CSS unless necessary; use utility classes.
  - Global styles are in `src/index.css`.
- **Routing:**
  - Page-level routes are defined in `src/pages/` and configured in `src/router/`.
- **i18n:**
  - Use the i18n setup in `src/i18n/` for all user-facing text. Do not hardcode strings.

## Developer Workflows
- **Development:**
  - Start the dev server: `npm run dev`
- **Build:**
  - Production build: `npm run build`
- **Linting/Formatting:**
  - (If configured) Use `npm run lint` and `npm run format`.
- **Testing:**
  - No test setup detected; add tests in `src/` if needed.

## Integration & External Dependencies
- Uses Vite for fast builds and HMR.
- Tailwind CSS for styling (see `tailwind.config.ts`).
- No backend or API integration detected in this codebase.

## Examples
- To add a new feature section, create a new file in `src/components/feature/` and a corresponding page in `src/pages/` if needed.
- For navigation, update `src/components/feature/Navigation.tsx` and the router config in `src/router/`.

## References
- `src/components/feature/` — Main feature components
- `src/pages/` — Page-level route components
- `src/router/` — Routing configuration
- `src/i18n/` — Internationalization setup
- `tailwind.config.ts` — Tailwind CSS configuration

---

For questions or unclear patterns, review the above directories or ask for clarification.
