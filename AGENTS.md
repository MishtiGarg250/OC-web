# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router entry points; `page.tsx` for the homepage, `layout.tsx` for shared shells, `api/` for server routes (email, etc.), and `globals.css` for base styles.
- `components/`: Reusable UI built as PascalCase `.tsx` components; shared animations/styles live alongside in files like `Hyperspeed.css`.
- `data/` and `utils/`: Centralized static content and small helpers; prefer adding new constants/helpers here instead of scattering literals.
- `lib/`: Cross-cutting logic (e.g., config, integrations) that should stay framework-agnostic.
- `public/`: Static assets (images, fonts) served as-is.

## Build, Test, and Development Commands
- `npm run dev`: Start the local dev server at `http://localhost:3000`.
- `npm run build`: Production build; use before release or significant refactors to catch compile errors.
- `npm run start`: Serve the production build locally.
- `npm run lint`: Run ESLint with the shared config in `eslint.config.mjs`; ensure clean output before opening a PR.

## Coding Style & Naming Conventions
- Language: TypeScript + React (RSC-aware). Prefer functional components and hooks over classes.
- Formatting: Follow ESLint defaults (2-space indent). Keep imports ordered and remove unused symbols.
- Naming: Components and files in `components/` use PascalCase; hooks/utilities use camelCase. Keep route segments in `app/` lowercase and hyphenated.
- Styling: Global tweaks in `app/globals.css`; component-level styles colocated. Reuse Chakra/Tailwind utility patterns already present instead of mixing new systems.

## Testing Guidelines
- No automated test suite is configured yet. For new features, add lightweight component/utility tests (e.g., React Testing Library or Vitest) alongside the code or in a `__tests__/` folder.
- Name tests after the unit under test (e.g., `Navbar.test.tsx`) and keep assertions focused on rendered behavior and accessibility.
- Run lint and a production build when tests are absent to catch common regressions.

## Commit & Pull Request Guidelines
- Commit messages in this repo are short and present-tense (e.g., `change in routes for sending email`). Follow that style: imperative subject under 72 chars.
- For each PR, include: what changed, why, and how to verify (commands or URLs). Link related issues and add screenshots/recordings for UI changes.
- Ensure `npm run lint` and, when applicable, new tests pass before requesting review. Note any breaking changes or migration steps in the PR description.

## Security & Configuration Tips
- Keep secrets (API keys, SMTP credentials) in `.env.local`; never commit them. Document required env vars in the PR when introducing new ones.
- Validate all server-side inputs in `app/api/` handlers and avoid logging sensitive payloads.
