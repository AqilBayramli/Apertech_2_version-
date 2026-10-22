
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SITE } from "@/lib/config";
import { useHashTarget } from "@/lib/useHashTarget";
import { useLanguage } from "@/providers/LanguageProvider";

export const FAQ_COUNT = 5;

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<Set<number>>(new Set([1]));

  const toggle = (n: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(n)) next.add(n);
      return next;
    });

  useHashTarget("faq", (value) => {
    const n = Number(value);
    if (n >= 1 && n <= FAQ_COUNT) setOpen((prev) => new Set(prev).add(n));
  });

  return (
    <section id="faq" className="bg-surface py-20 md:py-15">
      <div className="container-x">
        <SectionTitle title="faq.title" subtitle="faq.subtitle" description="faq.description" />

        <div className="mx-auto max-w-3xl space-y-3" data-aos="fade-up">
          {Array.from({ length: FAQ_COUNT }, (_, i) => i + 1).map((n) => {
            const isOpen = open.has(n);
            return (
              <div
                key={n}
                id={`faq-${n}`}
                className={`scroll-mt-28 overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                  isOpen ? "border-brand-200 shadow-card" : "border-line hover:border-brand-100"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(n)}
                  className="flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="flex-1 font-display font-bold text-ink sm:text-lg">{t(`faq.q${n}`)}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                      isOpen ? "rotate-45 bg-brand-600 text-white" : "bg-surface text-brand-600"
                    }`}
                  >
                    <i className="bi bi-plus-lg"></i>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pr-14 leading-relaxed sm:px-6 sm:pr-16">{t(`faq.a${n}`)}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <p className="pt-6 text-center text-sm">
            {t("contact.subtitle")}{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-600 underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
