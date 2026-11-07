import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { LOCALES, LOCALE_BADGE, useLocale } from "../i18n/LocaleContext";
import type { Messages } from "../i18n/locales/en-US";

const NAV_LINKS: { href: string; key: keyof Messages["nav"] }[] = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
];

export default function Header() {
  const { mode, toggleMode } = useThemeContext();
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white shadow-md shadow-black/10">
            {"</>"}
          </span>
          <span>
            Java<span className="text-accent">Dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-accent dark:text-slate-300"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div
            role="group"
            aria-label={t.language.choose}
            className="flex h-10 items-center gap-0.5 rounded-full border border-black/10 bg-white p-0.5 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            {LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                lang={code}
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition ${
                  locale === code
                    ? "bg-accent text-white shadow-sm"
                    : "text-slate-600 hover:text-accent dark:text-slate-300"
                }`}
              >
                {LOCALE_BADGE[code]}
              </button>
            ))}
          </div>

          {/* Dark / light toggle */}
          <button
            type="button"
            onClick={toggleMode}
            aria-label={t.theme.toggleMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-slate-700 shadow-sm transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            {mode === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t.theme.toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-slate-700 shadow-sm md:hidden dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-5 py-3 md:hidden dark:border-white/10 dark:bg-slate-950">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-black/5 hover:text-accent dark:text-slate-300 dark:hover:bg-white/10"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
