import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Sectors from "@/components/sections/Sectors";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import Stats from "@/components/sections/Stats";
import { SEO_KEYWORDS, SEO_TEXT, siteJsonLd } from "@/lib/seo";
import { useSeo } from "@/lib/useSeo";
import { useLanguage } from "@/providers/LanguageProvider";

export default function HomePage() {
  const { lang } = useLanguage();
  const { title, description } = SEO_TEXT[lang];
  useSeo({ lang, title, description, path: "/", keywords: SEO_KEYWORDS, structuredData: siteJsonLd() });

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Solutions />
      <Sectors />
      <Experience />
      <Clients />
      <Partners />
      <Contact />
      <Faq />
    </>
  );
}
