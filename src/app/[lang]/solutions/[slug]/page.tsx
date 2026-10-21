import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetailView from "@/components/solution/SolutionDetailView";
import { solutionDetails } from "@/data/solutions";
import type { Lang } from "@/data/translations";
import { isLang, languageAlternates, localizePath, OG_LOCALE } from "@/lib/i18n";
import { jsonLd, SEO_TEXT, solutionJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(solutionDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/solutions/[slug]">): Promise<Metadata> {
  const { lang: raw, slug } = await params;
  const lang: Lang = isLang(raw) ? raw : "en";
  const detail = solutionDetails[slug];
  if (!detail) return {};

  const copy = detail.translations[lang];
  const description = `${copy.title} — ${copy.description}`.slice(0, 158).replace(/\s+\S*$/, "") + "…";
  const path = `/solutions/${slug}`;
  const image = { url: `/${detail.image}`, alt: copy.title };
  return {
    title: `${copy.title} — ${SEO_TEXT[lang].solutionSuffix}`,
    description,
    keywords: [copy.title, `${copy.title} Azerbaijan`, "ERP Azerbaijan", "ERP Baku", "Apertech", ...detail.heroPanel[lang].industries],
    alternates: { canonical: localizePath(lang, path), languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      url: localizePath(lang, path),
      title: `${copy.title} | Apertech`,
      description,
      locale: OG_LOCALE[lang],
      images: [image],
    },
    twitter: { card: "summary_large_image", title: `${copy.title} | Apertech`, description, images: [image.url] },
  };
}

export default async function SolutionPage({ params }: PageProps<"/[lang]/solutions/[slug]">) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !solutionDetails[slug]) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(solutionJsonLd(slug, lang)) }} />
      <SolutionDetailView slug={slug} />
    </>
  );
}
