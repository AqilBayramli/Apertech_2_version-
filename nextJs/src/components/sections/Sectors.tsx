"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/providers/LanguageProvider";

/** Bento grid: `big` spans 2×2 and `wide` spans 2 columns, so 8 tiles fill a 4×3 grid exactly. */
export const SECTORS = [
  { key: "construction", image: "Building-Construction-Process-From-Start-To-Finish.jpg", icon: "bi-building", big: true },
  { key: "production", image: "production-1496247749665-49cf5b1022e9.jpg", icon: "bi-gear-wide-connected" },
  { key: "government", image: "govbydesign_1536x1152.jpg", icon: "bi-bank" },
  { key: "finance", image: "financial-accounting-1.webp", icon: "bi-calculator" },
  { key: "oil", image: "oil.webp", icon: "bi-fuel-pump" },
  { key: "sport", image: "sport2.jpg", icon: "bi-trophy" },
  { key: "distribution", image: "distribution2.png", icon: "bi-truck" },
  { key: "hospitality", image: "hospitality-1920-x-1200-wallpaper-a9bgefq0vb4uvdua.jpg", icon: "bi-cup-hot", wide: true },
];

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sector" className="bg-white py-20 md:py-15">
      <div className="container-x">
        <SectionTitle subtitle="sector.title" />

        <div className="grid auto-rows-[15rem] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[14rem]">
          {SECTORS.map(({ key, image, icon, big, wide }, i) => (
            <article
              key={key}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 60}
              className={`group relative overflow-hidden rounded-3xl bg-navy-900 ${big ? "sm:col-span-2 lg:row-span-2" : ""} ${wide ? "sm:col-span-2" : ""}`}
            >
              <img
                src={`/images/homePage/${image}`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-lg text-white backdrop-blur-md">
                  <i className={`bi ${icon}`}></i>
                </span>
                <h3 className={`font-bold !text-white ${big ? "text-2xl" : "text-lg"}`}>{t(`sector.${key}`)}</h3>
                {/* Description slides in on hover (always visible on touch-sized screens) */}
                <div className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                  <p
                    className={`overflow-hidden text-sm leading-relaxed text-slate-200 transition duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${
                      big ? "max-w-md" : ""
                    }`}
                  >
                    <span className="line-clamp-3 pt-1.5">{t(`sector.${key}_desc`)}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
