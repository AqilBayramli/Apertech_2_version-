// Writes public/sitemap.xml: every page in every language, each listing its translations (hreflang) for Google.
// Run after adding a solution: `npm run sitemap`.
import { readFileSync, writeFileSync } from "node:fs";

const SITE_URL = (process.env.VITE_SITE_URL ?? "https://apertech.net").replace(/\/$/, "");
const LANGS = ["en", "az", "ru"];

const source = readFileSync(new URL("../src/data/solutions.ts", import.meta.url), "utf8");
const block = source.slice(source.indexOf("export const solutionDetails"));
const solutions = [...block.matchAll(/^ {2}"([a-z0-9-]+)": \{\n {4}"image": "([^"]+)"/gm)].map(([, slug, image]) => ({ slug, image }));

const localize = (lang, path) => (lang === "en" ? "" : `/${lang}`) + (path === "/" ? "" : path) || "/";
const url = (lang, path) => `${SITE_URL}${localize(lang, path)}`.replace(/\/$/, "");

const pages = [
  { path: "/", priority: 1, images: [] },
  ...solutions.map(({ slug, image }) => ({ path: `/solutions/${slug}`, priority: 0.8, images: [`${SITE_URL}/${image}`] })),
];

const lastmod = new Date().toISOString();
const entries = pages.flatMap(({ path, priority, images }) =>
  LANGS.map((lang) => {
    const alternates = [...LANGS.map((l) => [l, url(l, path)]), ["x-default", url("en", path)]]
      .map(([l, href]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`)
      .join("\n");
    const imageTags = images.map((src) => `<image:image>\n<image:loc>${src}</image:loc>\n</image:image>`).join("\n");
    return [
      "<url>",
      `<loc>${url(lang, path)}</loc>`,
      alternates,
      imageTags,
      `<lastmod>${lastmod}</lastmod>`,
      "<changefreq>monthly</changefreq>",
      `<priority>${lang === "en" ? priority : Math.round((priority - 0.1) * 10) / 10}</priority>`,
      "</url>",
    ]
      .filter(Boolean)
      .join("\n");
  }),
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${entries.length} URLs`);
