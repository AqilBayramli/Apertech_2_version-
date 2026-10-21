import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import Script from "next/script";

import "bootstrap-icons/font/bootstrap-icons.min.css";
import "flag-icons/css/flag-icons.min.css";
import "aos/dist/aos.css";
import "../globals.css";

import AosInit from "@/components/layout/AosInit";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import ScrollTop from "@/components/layout/ScrollTop";
import { notFound } from "next/navigation";
import { LANGS, type Lang } from "@/data/translations";
import { SITE } from "@/lib/config";
import { isLang, languageAlternates, localizePath, OG_LOCALE } from "@/lib/i18n";
import { jsonLd, SEO_KEYWORDS, SEO_TEXT, siteJsonLd } from "@/lib/seo";
import { LanguageProvider } from "@/providers/LanguageProvider";

const inter = Inter({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-jetbrains", display: "swap" });

// Only /en (served at "/"), /az and /ru exist; any other first segment is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "en";
  const { title, description } = SEO_TEXT[lang];
  return {
    metadataBase: new URL(SITE.url),
    title: { default: title, template: "%s | Apertech ERP Solutions" },
    description,
    keywords: SEO_KEYWORDS,
    applicationName: SITE.name,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    category: "technology",
    alternates: { canonical: localizePath(lang, "/"), languages: languageAlternates("/") },
    openGraph: {
      type: "website",
      url: localizePath(lang, "/"),
      siteName: "Apertech ERP Solutions",
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
    },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    formatDetection: { telephone: false },
    verification: { google: SITE.googleSiteVerification },
    icons: { icon: "/images/logoAnar.png", shortcut: "/images/logoAnar.png", apple: "/images/logoAnar.png" },
  };
}

export const viewport: Viewport = {
  themeColor: "#2450d4",
  width: "device-width",
  initialScale: 1,
};

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtmId}');`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(siteJsonLd()) }} />
        <Script id="gtm" strategy="afterInteractive">
          {GTM_SNIPPET}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LanguageProvider lang={lang}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollTop />
          <Preloader />
          <AosInit />
        </LanguageProvider>
      </body>
    </html>
  );
}
