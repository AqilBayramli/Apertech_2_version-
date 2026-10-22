
import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useCallback, useContext, useEffect, useMemo } from "react";
import { translations, type Lang } from "@/data/translations";
import { localizePath, splitLocale } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  /** Switches the current page to another language in place (no reload or remount). */
  setLang: (lang: Lang) => void;
  t: (key: string, fallback?: string) => string;
  /** Prefixes an app path ("/solutions/x", "/#about") with the current language. */
  href: (path: string) => string;
};

const STORAGE_KEY = "selectedLanguage";

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The language comes from the URL prefix ("/az", "/ru", none for English). Switching only
 * pushes the new URL through React Router and the language follows the pathname:
 * no remount, no reload, and Back/Forward switch the language too.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = splitLocale(pathname).lang;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      if (next === lang) return;
      const { path } = splitLocale(window.location.pathname);
      navigate(localizePath(next, path) + window.location.search + window.location.hash);
    },
    [lang, navigate],
  );

  const t = useCallback(
    (key: string, fallback?: string) => translations[lang][key] ?? translations.en[key] ?? fallback ?? key,
    [lang],
  );

  const href = useCallback((path: string) => localizePath(lang, path), [lang]);

  const value = useMemo(() => ({ lang, setLang, t, href }), [lang, setLang, t, href]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
