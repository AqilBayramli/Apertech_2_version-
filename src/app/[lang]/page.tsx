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

export default function HomePage() {
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
