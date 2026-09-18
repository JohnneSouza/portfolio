# Portfolio

Personal portfolio site for **Johnnes Souza**, Senior Backend Engineer — a single-page
React app with a Java/backend bent, built as a static site that compiles down to one HTML
file.

## Features

- **Single-page layout** — Hero, About, Skills, Projects, Experience, Education, Contact,
  with anchor-link navigation and a mobile menu.
- **Two independent theming axes**
  - *Mode*: light / dark, persisted and applied as a `dark` class on `<html>`.
  - *Theme style*: `chess` or `rubik`, which swaps the accent color tokens and the
    decorative background art.
- **Internationalization** — English (`en-US`) and Portuguese (`pt-BR`), switchable at
  runtime. The active locale also sets `<html lang>` and the document title.
- **Typed dictionaries** — every translation key is checked at compile time; a missing or
  extra key in a non-source locale is a type error.
- **Responsive**, keyboard- and screen-reader-friendly (labelled controls, `aria-pressed`
  on the language toggle).

## Tech stack

| | |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript 5.9 (strict) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (CSS-first config, no `tailwind.config.js`) |
| Utilities | `clsx` + `tailwind-merge` (via `cn`) |
| Output | `vite-plugin-singlefile` — one self-contained `dist/index.html` |

## Getting started

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server prints a local URL (default <http://localhost:5173>) with HMR enabled.

## Scripts

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build -> dist/
npm run preview   # Serve the built output locally
npx tsc --noEmit  # Type check
```

> **`npm run build` does not type check.** Vite strips types without verifying them, so a
> type error will build cleanly and only show up in your editor. Run `npx tsc --noEmit`
> after changing anything typed — especially the locale dictionaries.

There is no test framework, linter, or formatter configured in this repo.


## How content is organized

`src/i18n/locales/en-US.ts` is the **source of truth**. The `Messages` type is derived from
it, and every other locale is annotated `: Messages`, so translations can't silently drift.
Add copy to `en-US.ts` first, then mirror it in `pt-BR.ts`.

`useLocale()` returns `t` as a typed dictionary object — components read strings directly
(`t.about.heading`, `t.nav[link.key]`) rather than through a `t("key.path")` lookup.

Language-independent values stay out of the dictionaries: numbers, icons, hrefs, and
render order live next to the component that uses them, while only labels are translated.
Personal details (email, phone, GitHub/LinkedIn URLs) are hardcoded in `Hero.tsx` and
`Contact.tsx`.

**The contact form is a demo** — submitting it only sets local state and sends nothing.

## Theming

Accent colors are CSS variables (`--accent`, `--accent-2`, `--accent-soft`,
`--accent-rgb`) redefined per `data-theme` in `src/index.css`. Use the `text-accent` /
`bg-accent` / `border-accent` utilities rather than hardcoded colors, or the value won't
follow the active theme. Tailwind 4 theme tokens go in the `@theme` block of
`src/index.css`.

## Build output

`vite.config.ts` includes `viteSingleFile()`, which inlines the JS and CSS into a single
`dist/index.html`, deployable as one file to any static host.

Assets in `public/` are **not** inlined — they are copied to `dist/` separately. The avatar
is therefore referenced by root-absolute URL (`/images/avatar.png`); importing it instead
would emit a separate hashed asset and defeat the single-file build. Keep this in mind when
adding images.

`@/` is aliased to `src/`, but existing components use relative imports — match the
surrounding style.

## Contributing

See [CLAUDE.md](CLAUDE.md) for a deeper architecture reference (provider tree, storage
keys, i18n conventions, theming internals) aimed at working in this codebase.
