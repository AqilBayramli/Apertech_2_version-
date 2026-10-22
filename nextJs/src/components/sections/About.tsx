"use client";

import ErpHub from "@/components/ui/ErpHub";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  const features = [
    { icon: "bi-award", title: t("about.experience"), desc: t("about.experience_desc") },
    { icon: "bi-headset", title: t("about.support"), desc: t("about.support_desc") },
  ];

  return (
    <section id="about" className="bg-surface py-20 md:py-15">
      <div className="container-x">
        <SectionTitle title="about.title" subtitle="about.subtitle" description="about.description" />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Visual */}
          <div data-aos="fade-up">
            <ErpHub />
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg font-medium leading-relaxed text-ink">{t("about.content1")}</p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
              <p>{t("about.content2")}</p>
              <p>{t("about.content3")}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-lg text-white">
                    <i className={`bi ${icon}`}></i>
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold">{title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
