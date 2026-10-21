"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export const PARTNERS = [
  { key: "infor", href: "https://www.infor.com", image: "solutions/infor-syteline - Copy.png", alt: "Infor" },
  // Frontstep image is a large square with lots of transparent padding, so zoom it to match the others
  { key: "frontstep", href: "https://www.frontstep.com", image: "clients/frontstep-logo-png-transparent.png", alt: "Frontstep", zoom: 2.3 },
  { key: "mpi", href: "https://www.mpicloud.com", image: "partners/mpi.png", alt: "MPI Cloud" },
  // Patco logo is white, so it needs a dark tile
  { key: "patco", href: "https://www.patco.az/", image: "partners/patco.webp", alt: "Patco", dark: true },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-surface py-20 md:py-15">
      <div className="container-x">
        <SectionTitle subtitle="partners.subtitle" description="partners.description" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map(({ key, href, image, alt, dark, zoom }, i) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group flex flex-col rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
            >
              <div className={`flex h-28 items-center justify-center overflow-hidden rounded-2xl p-4 ${dark ? "bg-navy-900" : "bg-surface"}`}>
                <img
                  src={`/images/${image}`}
                  alt={alt}
                  className="h-20 w-auto max-w-full object-contain"
                  style={zoom ? { transform: `scale(${zoom})` } : undefined}
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">{t(`partners.${key}.title`)}</h3>
                <i className="bi bi-arrow-up-right text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"></i>
              </div>
              <p className="mt-2 line-clamp-4 text-sm leading-relaxed">{t(`partners.${key}.desc`)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
