import { solutionDetails } from "@/data/solutions";
import type { Lang } from "@/data/translations";
import { SITE } from "@/lib/config";
import { localizePath } from "@/lib/i18n";

/** Home-page title and description per language (also the defaults for other pages). */
export const SEO_TEXT: Record<Lang, { title: string; description: string; solutionSuffix: string; home: string; solutions: string }> = {
  en: {
    title: "Apertech ERP Solutions",
    description:
      "Apertech is an ERP and software company in Baku, Azerbaijan. ERP implementation, Infor SunSystems partner, Genesis Soft, Sola ERP and Sola HR, business analytics and custom software.",
    solutionSuffix: "ERP software in Azerbaijan",
    home: "Home",
    solutions: "Solutions",
  },
  az: {
    title: "Apertech ERP Həlləri",
    description:
      "Apertech Bakıda ERP və proqram təminatı şirkətidir. ERP tətbiqi, Infor SunSystems tərəfdaşı, Genesis Soft, Sola ERP və Sola HR, biznes analitikası və fərdi proqram təminatı.",
    solutionSuffix: "Azərbaycanda ERP proqram təminatı",
    home: "Ana səhifə",
    solutions: "Həllər",
  },
  ru: {
    title: "Apertech ERP-решения",
    description:
      "Apertech — ERP и IT-компания в Баку, Азербайджан. Внедрение ERP, партнёр Infor SunSystems, Genesis Soft, Sola ERP и Sola HR, бизнес-аналитика и заказная разработка ПО.",
    solutionSuffix: "ERP-система в Азербайджане",
    home: "Главная",
    solutions: "Решения",
  },
};
export const SEO_TITLE = SEO_TEXT.en.title;
export const SEO_DESCRIPTION = SEO_TEXT.en.description;

export const SEO_KEYWORDS = [
  "Apertech",
  "ERP Azerbaijan",
  "ERP Baku",
  "ERP software Azerbaijan",
  "ERP implementation",
  "ERP consulting",
  "ERP system",
  "Infor SunSystems Azerbaijan",
  "Infor SyteLine",
  "Genesis Soft",
  "Sola ERP",
  "Sola HR",
  "HR and payroll software",
  "procurement automation",
  "construction ERP",
  "production ERP",
  "business analytics",
  "software development Baku",
  "ERP Azərbaycan",
  "ERP sistemi",
  "ERP proqram təminatı",
  "ERP система Азербайджан",
  "ERP Баку",
];

/** Serialises JSON-LD safely for a <script> tag (escapes "<" per the Next.js JSON-LD guide). */
export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

const ORG_ID = `${SITE.url}/#organization`;

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: `${SITE.url}/images/logoAnar.png`,
        email: SITE.email,
        telephone: SITE.phone.replace(/\s/g, ""),
        description: SEO_DESCRIPTION,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressCountry: SITE.address.country,
        },
        areaServed: ["AZ", "Caucasus", "Central Asia", "Middle East"],
        knowsAbout: ["ERP implementation", "Infor SunSystems", "Business analytics", "Software development", "HR and payroll"],
        sameAs: [SITE.facebook, SITE.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE.email,
          telephone: SITE.phone.replace(/\s/g, ""),
          availableLanguage: ["English", "Azerbaijani", "Russian"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: ["en", "az", "ru"],
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function solutionJsonLd(slug: string, lang: Lang) {
  const copy = solutionDetails[slug].translations[lang];
  const url = `${SITE.url}${localizePath(lang, `/solutions/${slug}`)}`;
  const home = `${SITE.url}${localizePath(lang, "/")}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: copy.title,
        url,
        description: copy.description,
        applicationCategory: "BusinessApplication",
        inLanguage: lang,
        operatingSystem: "Web",
        image: `${SITE.url}/${solutionDetails[slug].image}`,
        publisher: { "@id": ORG_ID },
        featureList: copy.highlights,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SEO_TEXT[lang].home, item: home },
          { "@type": "ListItem", position: 2, name: SEO_TEXT[lang].solutions, item: `${SITE.url}${localizePath(lang, "/#solutions")}` },
          { "@type": "ListItem", position: 3, name: copy.title, item: url },
        ],
      },
    ],
  };
}
