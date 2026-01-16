# Gelbe Seiten Redesign

Modern redesign of the German Yellow Pages landing page.

**Stack:** React 18, TypeScript, Vite 7, Tailwind CSS 4, GSAP, Vitest, Clerk,
Zustand, Zod, React Hook Form, shadcn/ui

## Libraries & Packages

| Package                                   | Purpose                                        |
| ----------------------------------------- | ---------------------------------------------- |
| `react` + `react-dom`                     | UI framework                                   |
| `react-router`                            | Client-side routing                            |
| `tailwindcss`                             | Utility-first CSS                              |
| `gsap`                                    | Animations (hero, search bar, scroll triggers) |
| `@clerk/clerk-react`                      | Authentication (Google OAuth, email/password)  |
| `zustand`                                 | Global state management (user store)           |
| `zod`                                     | Schema validation                              |
| `react-hook-form` + `@hookform/resolvers` | Form handling with Zod integration             |
| `@radix-ui/*`                             | Accessible UI primitives (via shadcn/ui)       |
| `lucide-react`                            | Icon library                                   |
| `vitest` + `@testing-library/react`       | Testing framework                              |

## Design/UX Rationale

- **Scandinavian aesthetic:** Warm muted backgrounds (`#faf8f3`), animated
  gradient hero, generous whitespace, custom variable fonts (Renade/Excon)
- **Micro-interactions:** GSAP-powered hero fade-in, click-to-expand search bar,
  staggered card animations, animated counters, wiggle effects
- **Directory-focused UX:** Business profile management, statistics dashboard,
  review system — all accessible from authenticated dashboard
- **Accessibility:** Semantic HTML, ARIA labels on icon buttons,
  keyboard-navigable components

## Technical Excellence

- **Testing:** 40+ tests using Vitest + React Testing Library covering
  components, pages, and integration
- **Modular architecture:** Reusable components (`Navigation`, `Footer`,
  `HomeInfo`), shadcn/ui form components, custom test utilities
- **Type safety:** Full TypeScript with strict mode, Zod schemas for runtime
  validation
- **State management:** Zustand for user state, synced with Clerk authentication
- **Performance:** Variable fonts, optimized bundle, GSAP ScrollTrigger for
  scroll-based animations

## Scrapped: 3D Text Effect

Explored
[Tympanus 3D bulge text](https://tympanus.net/codrops/2024/03/20/creating-an-interactive-3d-bulge-text-effect-with-react-three-fiber/)
using React Three Fiber. Scrapped due to ~200KB bundle increase, mobile
performance issues, and accessibility concerns. Remnants in
`HeroTextShader.tsx`.

## Deployment Challenges

| Issue              | Cause                          | Fix                            |
| ------------------ | ------------------------------ | ------------------------------ |
| Rollup Linux error | Bun lockfile platform-specific | Removed `bun.lockb`, used npm  |
| Fonts not applying | CSS inheritance issues         | Explicit Tailwind font classes |
| dist not found     | Subdirectory structure         | Set Vercel Root Directory      |

## Browser Compatibility

Tested on Chrome, Firefox, Safari (latest). Uses modern CSS (CSS Grid, custom
properties) with Tailwind's automatic prefixing.

## Authentication (Clerk)

Uses [Clerk](https://clerk.com) for authentication. To set up:

1. Create a Clerk app at [clerk.com](https://clerk.com)
2. Copy `.env.example` to `.env` and add your publishable key:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
   ```
3. Add the same key to Vercel environment variables for production

Routes:

- `/login` — Sign in page
- `/registrieren` — Sign up page

## Commands

```bash
npm install && npm run dev
npm run build
npm run test
```
