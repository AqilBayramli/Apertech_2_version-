import { useEffect } from "react";
import { LANGS, type Lang } from "@/data/translations";
import { SITE } from "@/lib/config";
import { languageAlternates, localizePath, OG_LOCALE } from "@/lib/i18n";
import { jsonLd } from "@/lib/seo";

type Seo = {
  lang: Lang;
  /** Full document title. */
  title: string;
  /** og:title / twitter:title, when it differs from the document title. */
  socialTitle?: string;
  description: string;
  /** Language-neutral path of the page ("/", "/solutions/x"). */
  path: string;
  keywords?: string[];
  image?: string;
  structuredData?: object;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Client-side counterpart of Next's `generateMetadata`: title, description, canonical, hreflang, OG and JSON-LD. */
export function useSeo({ lang, title, socialTitle, description, path, keywords, image, structuredData }: Seo) {
  const data = structuredData ? jsonLd(structuredData) : "";
  const keywordList = keywords?.join(", ") ?? "";

  useEffect(() => {
    const url = `${SITE.url}${localizePath(lang, path)}`;
    const shareTitle = socialTitle ?? title;
    document.title = title;
    setMeta("name", "description", description);
    if (keywordList) setMeta("name", "keywords", keywordList);
    setLink("canonical", url);
    for (const [code, href] of Object.entries(languageAlternates(path, SITE.url))) setLink("alternate", href, code);

    setMeta("property", "og:url", url);
    setMeta("property", "og:title", shareTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:locale", OG_LOCALE[lang]);
    setMeta("property", "og:locale:alternate", LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]).join(","));
    setMeta("property", "og:image", `${SITE.url}${image ?? "/images/logoAnar.png"}`);
    setMeta("name", "twitter:title", shareTitle);
    setMeta("name", "twitter:description", description);

    let script = document.getElementById("page-jsonld") as HTMLScriptElement | null;
    if (data) {
      if (!script) {
        script = document.createElement("script");
        script.id = "page-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = data;
    } else script?.remove();
  }, [lang, title, socialTitle, description, path, keywordList, image, data]);
}
