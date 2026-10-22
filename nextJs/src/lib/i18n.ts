import { LANGS, type Lang } from "@/data/translations";

/**
 * URL scheme: English is served without a prefix ("/", "/solutions/x") so existing indexed
 * links keep working; other languages live under "/az" and "/ru". `src/proxy.ts` rewrites
 * unprefixed URLs to the internal "/en/..." route.
 */
export const DEFAULT_LANG: Lang = "en";

export const isLang = (value: string): value is Lang => (LANGS as string[]).includes(value);

export const langPrefix = (lang: Lang) => (lang === DEFAULT_LANG ? "" : `/${lang}`);

/** "/solutions/x" or "/#about" → the same page in `lang` ("/az/solutions/x", "/az#about"). */
export function localizePath(lang: Lang, path: string) {
  const hashAt = path.indexOf("#");
  const pathname = hashAt === -1 ? path : path.slice(0, hashAt);
  const hash = hashAt === -1 ? "" : path.slice(hashAt);
  const localized = `${langPrefix(lang)}${pathname === "/" ? "" : pathname}` || "/";
  return localized + hash;
}

/** Browser pathname → its language and the language-neutral path. */
export function splitLocale(pathname: string): { lang: Lang; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLang(first)) return { lang: first, path: `/${rest.join("/")}` };
  return { lang: DEFAULT_LANG, path: pathname || "/" };
}

/** hreflang map for metadata `alternates.languages` and the sitemap. */
export function languageAlternates(path: string, absolute = "") {
  const entries = LANGS.map((l) => [l, `${absolute}${localizePath(l, path)}`] as const);
  return { ...Object.fromEntries(entries), "x-default": `${absolute}${localizePath(DEFAULT_LANG, path)}` } as Record<string, string>;
}

export const OG_LOCALE: Record<Lang, string> = { en: "en_US", az: "az_AZ", ru: "ru_RU" };
