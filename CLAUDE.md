# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build -> dist/
npm run preview   # Serve the built output locally
npx tsc --noEmit  # Type check (see note below)
```

There is no test framework, linter, or formatter configured in this repo.

**`vite build` does not type check.** `tsc` never runs as part of the build, and there is
no `typecheck` script — so a type error will not fail `npm run build` and will only surface
in the editor or via `npx tsc --noEmit`. Run it explicitly after changing anything typed,
especially the locale dictionaries, where the type system is doing real work.

## Architecture

Single-page React 19 + TypeScript + Tailwind 4 portfolio. No router: navigation is
anchor links (`#about`, `#projects`) pointing at `<section id="...">` elements rendered in
order by [App.tsx](src/App.tsx).

### Provider tree

`LocaleProvider` wraps `ThemeProvider` (order matters only in that both are above the
sections). Both persist to `localStorage` and both write to `document.documentElement`:

| Provider | State | DOM effect | Storage key |
| --- | --- | --- | --- |
| [LocaleContext.tsx](src/i18n/LocaleContext.tsx) | `locale` | `lang`, `document.title` | `portfolio-locale` |
| [ThemeContext.tsx](src/context/ThemeContext.tsx) | `mode` | `dark` class | `portfolio-mode` |

Because the DOM effects run in `useEffect`, the `<title>` in [index.html](index.html) is
only a pre-hydration fallback — it is overwritten on mount. When adding a locale, update
that fallback too if the default would change.

### i18n

[src/i18n/locales/en-US.ts](src/i18n/locales/en-US.ts) is the **source of truth**. `Messages`
is derived from it (`typeof enUS`), and every other locale is annotated `: Messages` — so a
missing or extra key in `pt-BR.ts` is a compile error, not a blank space in the UI. Add copy
to `en-US.ts` first, then mirror it.

`useLocale()` returns `t` as a **typed dictionary object**, not a `t("key.path")` lookup
function. Components read strings directly: `t.about.heading`, `t.nav[link.key]`.

Two helpers exist for content that can't be a plain string:

- [`RichText`](src/i18n/RichText.tsx) renders `**emphasis**` markers in a translated string
  as `<strong>`, so dictionaries stay plain text rather than JSX.
- [`format`](src/i18n/format.ts) fills `{year}`-style placeholders. An unmatched placeholder
  is deliberately left visible rather than silently dropped.

**Convention: language-independent values stay out of the dictionaries.** Numbers, icons,
hrefs, and render order live next to the component that uses them, while only the labels are
translated — e.g. `STAT_VALUES` in [About.tsx](src/components/About.tsx), `CONTACT_INFO` in
[Contact.tsx](src/components/Contact.tsx), `DEGREE_ORDER`/`DEGREE_ICONS` in
[Education.tsx](src/components/Education.tsx). Keys in those maps are typed as
`keyof Messages["<section>"]["<field>"]`, so renaming a dictionary key breaks the component
that indexes it. The one exception is `about.stats.domainValue`, a stat whose value is a word
rather than a figure.

Personal details (email, phone, GitHub/LinkedIn URLs) are hardcoded in
[Hero.tsx](src/components/Hero.tsx) and [Contact.tsx](src/components/Contact.tsx), not
localized. The contact form is a demo — submit only sets local state and sends nothing.

### Theming

There is a single mode axis on `<html>`:

- **`mode`** — `light`/`dark`, applied as the `dark` class. Tailwind's dark variant is
  redefined in [index.css](src/index.css) as `@custom-variant dark (&:where(.dark, .dark *))`
  because dark mode here is class-based, not `prefers-color-scheme`.

The site has one fixed palette with a gold accent. Accent colors are CSS variables
(`--accent`, `--accent-2`, `--accent-soft`, `--accent-rgb`) defined once in `:root` in
[index.css](src/index.css). Use the `text-accent` / `bg-accent` / `border-accent` utility
classes — never hardcode the accent value. `--accent-rgb` exists for alpha shadows like
`shadow-[rgba(var(--accent-rgb),0.35)]`.

Tailwind 4 is configured CSS-first: theme tokens go in the `@theme` block of `index.css`.
There is no `tailwind.config.js`.

### Build output

[vite.config.ts](vite.config.ts) includes `viteSingleFile()`, which inlines the JS and CSS
into one `dist/index.html` (deployable as a single file). Assets in `public/` are **not**
inlined — they are copied to `dist/` as separate files. The avatar is therefore referenced
by root-absolute URL (`/images/avatar.png`) rather than imported; importing an image would
emit a separate hashed asset and defeat the single-file build.

`@/` is aliased to `src/` in both `vite.config.ts` and `tsconfig.json`, but the existing
components use relative imports (`../i18n/LocaleContext`). Match the surrounding style.
