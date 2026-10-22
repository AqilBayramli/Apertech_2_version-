import { CLIENTS } from "@/components/sections/Clients";
import { TABS } from "@/components/sections/Experience";
import { FAQ_COUNT } from "@/components/sections/Faq";
import { PARTNERS } from "@/components/sections/Partners";
import { SECTORS } from "@/components/sections/Sectors";
import { SERVICES } from "@/components/sections/Services";
import { INFOR, PRODUCTS } from "@/components/sections/Solutions";
import { solutionDetails } from "@/data/solutions";
import { LANGS, translations, type Lang } from "@/data/translations";
import { SITE } from "@/lib/config";

export type SearchGroup = "pages" | "solutions" | "services" | "industries" | "technologies" | "partners" | "faq";

export type SearchEntry = {
  id: string;
  group: SearchGroup;
  icon: string;
  title: string;
  /** Text shown under the title and searched with a lower weight. */
  text: string;
  /** Extra searchable phrases; a matching one is shown when the text itself doesn't match. */
  keywords?: string[];
  /** "/solutions/x" for pages, "/#id" for home-page anchors. */
  href: string;
};

export type SearchHit = SearchEntry & { score: number; snippet: string };

/**
 * Home-page sections. Every translation whose key starts with one of `prefixes` is searchable
 * under that section, so any word shown on the site (e.g. "Address") leads somewhere.
 */
const SECTIONS: { id: string; icon: string; title: string; prefixes: string[] }[] = [
  { id: "hero", icon: "bi-house", title: "nav.home", prefixes: ["hero."] },
  { id: "about", icon: "bi-info-circle", title: "nav.about", prefixes: ["about.", "stats."] },
  { id: "services", icon: "bi-grid", title: "nav.services", prefixes: ["services."] },
  { id: "solutions", icon: "bi-boxes", title: "nav.solutions", prefixes: ["solutions.", "solution-detail."] },
  { id: "sector", icon: "bi-buildings", title: "search.group.industries", prefixes: ["sector."] },
  { id: "experience", icon: "bi-code-square", title: "experience.description", prefixes: ["experience."] },
  { id: "clients", icon: "bi-people", title: "nav.clients", prefixes: ["clients.", "partners."] },
  { id: "contact", icon: "bi-envelope", title: "nav.contact", prefixes: ["contact.", "footer."] },
  { id: "faq", icon: "bi-question-circle", title: "search.group.faq", prefixes: ["faq."] },
];

function entriesFor(lang: Lang): SearchEntry[] {
  const dict = translations[lang];
  const t = (key: string) => dict[key] ?? translations.en[key] ?? key;
  const entries: SearchEntry[] = [];

  for (const { id, icon, title, prefixes } of SECTIONS) {
    const keywords = Object.keys(translations.en)
      .filter((key) => prefixes.some((p) => key.startsWith(p)))
      .map(t);
    if (id === "contact") keywords.push(SITE.phone, SITE.email);
    if (id === "faq") keywords.push("FAQ");
    if (id === "clients") keywords.push(...CLIENTS.map((c) => c.name));
    entries.push({ id: `page-${id}`, group: "pages", icon, title: t(title), text: "", keywords, href: `/#${id}` });
  }

  for (const { key, slug } of PRODUCTS) {
    const copy = solutionDetails[slug]?.translations[lang];
    const panel = solutionDetails[slug]?.heroPanel[lang];
    entries.push({
      id: `solution-${slug}`,
      group: "solutions",
      icon: "bi-box-seam",
      title: t(`solutions.${key}`),
      text: t(`solutions.${key}_desc`),
      keywords: [
        copy?.heroSummary,
        copy?.description,
        copy?.contentTitle,
        copy?.secondaryTitle,
        copy?.secondaryDescription,
        ...(copy?.highlights ?? []),
        ...(panel ? [panel.deliveryModel, panel.outcomes, ...panel.industries] : []),
      ].filter((s): s is string => !!s),
      href: `/solutions/${slug}`,
    });
  }
  for (const { key, icon } of INFOR) {
    entries.push({
      id: `solution-${key}`,
      group: "solutions",
      icon,
      title: t(`solutions.${key}`),
      text: t(`solutions.${key}_desc`),
      href: "/#solutions",
    });
  }

  for (const { key, icon } of SERVICES) {
    entries.push({
      id: `service-${key}`,
      group: "services",
      icon,
      title: t(`services.${key}`),
      text: t(`services.${key}_desc`),
      href: "/#services",
    });
  }

  for (const { key, icon } of SECTORS) {
    entries.push({
      id: `sector-${key}`,
      group: "industries",
      icon,
      title: t(`sector.${key}`),
      text: t(`sector.${key}_desc`),
      href: "/#sector",
    });
  }

  for (const { id, key, label } of TABS) {
    entries.push({
      id: `tech-${id}`,
      group: "technologies",
      icon: "bi-code-square",
      title: t(`experience.${key}`),
      text: t(`experience.${key}_desc`),
      keywords: [label],
      href: `/#experience-${id}`,
    });
  }

  for (const { key, href } of PARTNERS) {
    entries.push({
      id: `partner-${key}`,
      group: "partners",
      icon: "bi-patch-check",
      title: t(`partners.${key}.title`),
      text: t(`partners.${key}.desc`),
      keywords: [href],
      href: "/#partners",
    });
  }

  for (let n = 1; n <= FAQ_COUNT; n++) {
    entries.push({
      id: `faq-${n}`,
      group: "faq",
      icon: "bi-question-circle",
      title: t(`faq.q${n}`),
      text: t(`faq.a${n}`),
      href: `/#faq-${n}`,
    });
  }

  return entries;
}

/**
 * Entries are displayed in `lang`, but the other languages' wording is added as keywords,
 * so typing "address" still finds the contact section while the site is in Azerbaijani.
 */
export function buildIndex(lang: Lang): SearchEntry[] {
  const others = LANGS.filter((l) => l !== lang).map((l) => new Map(entriesFor(l).map((e) => [e.id, e])));
  return entriesFor(lang).map((entry) => {
    const extra = others.flatMap((m) => {
      const e = m.get(entry.id);
      return e ? [e.title, e.text, ...(e.keywords ?? [])] : [];
    });
    return { ...entry, keywords: [...(entry.keywords ?? []), ...extra].filter(Boolean) };
  });
}

// Lets "isci" match "işçi", "е" match "ё", and ignores case and accents.
const FOLD: Record<string, string> = { ə: "e", ı: "i", ş: "s", ç: "c", ğ: "g", ö: "o", ü: "u", ё: "е" };

function foldChar(c: string) {
  const lower = c.toLocaleLowerCase();
  return (FOLD[lower] ?? lower).normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function fold(s: string) {
  return Array.from(s, foldChar).join("");
}

/** Folded text plus, for every folded char, the index of the original char it came from. */
function foldWithMap(s: string) {
  let out = "";
  const map: number[] = [];
  Array.from(s).forEach((c, i) => {
    for (const f of foldChar(c)) {
      out += f;
      map.push(i);
    }
  });
  return { out, map, chars: Array.from(s) };
}

export type Part = { text: string; match: boolean };

/** Splits `s` into matched / unmatched parts for highlighting. */
export function highlight(s: string, query: string): Part[] {
  const tokens = fold(query).split(/\s+/).filter(Boolean);
  if (!tokens.length) return [{ text: s, match: false }];
  const { out, map, chars } = foldWithMap(s);
  const marked = new Array<boolean>(chars.length).fill(false);
  for (const token of tokens) {
    for (let at = out.indexOf(token); at !== -1; at = out.indexOf(token, at + token.length)) {
      for (let k = at; k < at + token.length; k++) marked[map[k]] = true;
    }
  }
  const parts: Part[] = [];
  chars.forEach((c, i) => {
    const last = parts[parts.length - 1];
    if (last && last.match === marked[i]) last.text += c;
    else parts.push({ text: c, match: marked[i] });
  });
  return parts;
}

/** ~140 chars of `text` around the first matching token. */
function makeSnippet(text: string, tokens: string[]) {
  const max = 140;
  if (text.length <= max) return text;
  const { out, map } = foldWithMap(text);
  const hits = tokens.map((tok) => out.indexOf(tok)).filter((i) => i !== -1);
  const at = hits.length ? map[Math.min(...hits)] : 0;
  const start = Math.max(0, Math.min(at - 40, text.length - max));
  const slice = text.slice(start, start + max).trim();
  return `${start > 0 ? "…" : ""}${slice}${start + max < text.length ? "…" : ""}`;
}

type Folded = { title: string; words: string[]; text: string; keywords: string[] };
const foldCache = new WeakMap<SearchEntry, Folded>();

function folded(entry: SearchEntry): Folded {
  let f = foldCache.get(entry);
  if (!f) {
    const title = fold(entry.title);
    f = { title, words: title.split(/[^\p{L}\p{N}#+.]+/u), text: fold(entry.text), keywords: (entry.keywords ?? []).map(fold) };
    foldCache.set(entry, f);
  }
  return f;
}

export function search(entries: SearchEntry[], query: string, limit = 20): SearchHit[] {
  const q = fold(query).trim();
  const tokens = q.split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  const hits: SearchHit[] = [];
  for (const entry of entries) {
    const f = folded(entry);

    let score = 0;
    let matchedAll = true;
    for (const token of tokens) {
      if (f.words.includes(token)) score += 40;
      else if (f.words.some((w) => w.startsWith(token))) score += 30;
      else if (f.title.includes(token)) score += 20;
      else if (f.text.includes(token)) score += 6;
      else if (f.keywords.some((k) => k.includes(token))) score += 3;
      else {
        matchedAll = false;
        break;
      }
    }
    if (!matchedAll) continue;
    if (f.title === q) score += 100;
    else if (f.title.startsWith(q)) score += 50;
    else if (f.title.includes(q)) score += 25;
    // A label or heading that starts with the query ("Address", "Experience. Execution…").
    else if (f.keywords.some((k) => k.startsWith(q))) score += 8;
    // Prefer dedicated pages over generic sections when scores tie.
    if (entry.group === "solutions") score += 2;

    // Show the description if it matches, otherwise the keyword phrase that matched best.
    let source = entry.text;
    if (!tokens.some((tok) => f.text.includes(tok))) {
      let best = 0;
      f.keywords.forEach((k, i) => {
        const n = tokens.filter((tok) => k.includes(tok)).length;
        if (n > best) [best, source] = [n, entry.keywords![i]];
      });
    }

    hits.push({ ...entry, score, snippet: makeSnippet(source, tokens) });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}
