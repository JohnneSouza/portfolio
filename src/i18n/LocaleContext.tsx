import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import enUS, { type Messages } from "./locales/en-US";
import ptBR from "./locales/pt-BR";

export type Locale = "en-US" | "pt-BR";

export const LOCALES: readonly Locale[] = ["en-US", "pt-BR"];

/** Short badge shown in the switcher — a locale code reads the same in every language. */
export const LOCALE_BADGE: Record<Locale, string> = {
  "en-US": "EN",
  "pt-BR": "PT",
};

const DICTIONARIES: Record<Locale, Messages> = {
  "en-US": enUS,
  "pt-BR": ptBR,
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** The active dictionary. Every string in the UI comes from here. */
  t: Messages;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const LOCALE_KEY = "portfolio-locale";

function isLocale(value: unknown): value is Locale {
  return value === "en-US" || value === "pt-BR";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en-US";

  // An explicit choice always wins over browser detection.
  try {
    const stored = window.localStorage.getItem(LOCALE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Storage can throw when blocked or in private mode — fall through to detection.
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((lang) => lang?.toLowerCase().startsWith("pt")) ? "pt-BR" : "en-US";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

  useEffect(() => {
    const { meta } = DICTIONARIES[locale];
    document.documentElement.lang = meta.htmlLang;
    document.title = meta.title;

    try {
      window.localStorage.setItem(LOCALE_KEY, locale);
    } catch {
      // Non-fatal: the choice just won't survive a reload.
    }
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: DICTIONARIES[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
