import SolutionDetailView from "@/components/solution/SolutionDetailView";
import { solutionDetails } from "@/data/solutions";
import { SEO_TEXT, solutionJsonLd } from "@/lib/seo";
import { useSeo } from "@/lib/useSeo";
import { useLanguage } from "@/providers/LanguageProvider";

export default function SolutionPage({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const detail = solutionDetails[slug];
  const copy = detail.translations[lang];
  const description = `${copy.title} — ${copy.description}`.slice(0, 158).replace(/\s+\S*$/, "") + "…";

  useSeo({
    lang,
    title: `${copy.title} — ${SEO_TEXT[lang].solutionSuffix} | Apertech ERP Solutions`,
    socialTitle: `${copy.title} | Apertech`,
    description,
    path: `/solutions/${slug}`,
    keywords: [copy.title, `${copy.title} Azerbaijan`, "ERP Azerbaijan", "ERP Baku", "Apertech", ...detail.heroPanel[lang].industries],
    image: `/${detail.image.replace(/^\//, "")}`,
    structuredData: solutionJsonLd(slug, lang),
  });

  return <SolutionDetailView slug={slug} />;
}
