import type { MetadataRoute } from "next";
import { solutionDetails } from "@/data/solutions";
import { LANGS } from "@/data/translations";
import { SITE } from "@/lib/config";
import { languageAlternates, localizePath } from "@/lib/i18n";

/** Every page in every language, each listing its translations (hreflang) for Google. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = [
    { path: "/", priority: 1, images: [] as string[] },
    ...Object.keys(solutionDetails).map((slug) => ({
      path: `/solutions/${slug}`,
      priority: 0.8,
      images: [`${SITE.url}/${solutionDetails[slug].image}`],
    })),
  ];

  return pages.flatMap(({ path, priority, images }) =>
    LANGS.map((lang) => ({
      url: `${SITE.url}${localizePath(lang, path)}`.replace(/\/$/, ""),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "en" ? priority : priority - 0.1,
      alternates: { languages: languageAlternates(path, SITE.url) },
      ...(images.length ? { images } : {}),
    })),
  );
}
