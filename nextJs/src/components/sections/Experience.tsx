"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useHashTarget } from "@/lib/useHashTarget";
import { useLanguage } from "@/providers/LanguageProvider";

export const TABS = [
  { id: "erp", label: "ERP", icon: "erp.png", key: "erp" },
  { id: "sharp", label: "C#", icon: "c-sharp.png", key: "csharp" },
  { id: "react", label: "React JS", icon: "react.png", key: "react" },
  { id: "net", label: ".NET", icon: "website.png", key: "net" },
  { id: "js", label: "JavaScript", icon: "java-script.png", key: "js" },
  { id: "java", label: "Java", icon: "java.png", key: "java" },
  { id: "ts", label: "TypeScript", icon: "typescript.png", key: "ts" },
];

export default function Experience() {
  const { t } = useLanguage();
  const [active, setActive] = useState("erp");
  useHashTarget("experience", (value) => {
    if (TABS.some((tab) => tab.id === value)) setActive(value);
  });
  const current = TABS.find((tab) => tab.id === active) ?? TABS[0];

  return (
    <section id="experience" className="relative overflow-hidden bg-navy-900 py-20 md:py-15">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" />

      <div className="container-x relative">
        <SectionTitle subtitle="experience.subtitle" description="experience.description" dark />

        <div className="mx-auto max-w-5xl" data-aos="fade-up">
          <div role="tablist" className="flex flex-wrap justify-center gap-3">
            {TABS.map(({ id, label, icon }) => {
              const selected = id === active;
              return (
                <button
                  key={id}
                  id={`experience-${id}`}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`flex scroll-mt-40 items-center gap-2.5 rounded-full border py-2 pl-2 pr-5 text-sm font-semibold transition duration-300 ${
                    selected
                      ? "border-white bg-white text-ink shadow-lift"
                      : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white p-1.5">
                    <img src={`/images/about/${icon}`} alt="" className="h-5 w-5 object-contain" />
                  </span>
                  {label}
                </button>
              );
            })}
          </div>

          <div
            key={current.id}
            role="tabpanel"
            className="mt-8 grid animate-[fadeIn_0.45s_ease] items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-10 md:grid-cols-[auto_1fr]"
          >
            <div className="mx-auto grid h-28 w-28 place-items-center rounded-3xl bg-white p-5 shadow-lift sm:h-32 sm:w-32">
              <img src={`/images/about/${current.icon}`} alt={current.label} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold !text-white">{t(`experience.${current.key}`)}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">{t(`experience.${current.key}_desc`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
