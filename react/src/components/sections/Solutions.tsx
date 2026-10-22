
import { Link } from "react-router-dom";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export const PRODUCTS = [
  { key: "genesis", slug: "genesis", image: "genesis2.png", alt: "Genesis Soft", tint: "from-brand-50 to-white" },
  { key: "sola_erp", slug: "sola-erp", image: "sola-logo.png", alt: "Sola ERP", tint: "from-[#eef6ff] to-white" },
  { key: "sola_hr", slug: "sola-hr", image: "solaHr-Photoroom.png", alt: "Sola HR", tint: "from-accent-50 to-white" },
];

export const INFOR = [
  { key: "sunsystems", href: "https://www.infor.com/solutions/erp/sunsystems", icon: "bi-calculator" },
  { key: "syteline", href: "https://www.infor.com/resources/syteline", icon: "bi-gear-wide-connected" },
  { key: "query", href: "https://www.infor.com/resources/constellation-research-analysis-infor-os", icon: "bi-funnel" },
];

export default function Solutions() {
  const { t, href } = useLanguage();

  return (
    <section id="solutions" className="bg-surface py-20 md:py-15">
      <div className="container-x">
        <SectionTitle title="solutions.title" subtitle="solutions.subtitle" description="solutions.description" />

        {/* Apertech products */}
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map(({ key, slug, image, alt, tint }, i) => (
            <Link
              key={key}
              to={href(`/solutions/${slug}`)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
            >
              <div className={`relative grid h-56 place-items-center overflow-hidden bg-gradient-to-br ${tint} p-10`}>
                <div className="bg-dots absolute inset-0 opacity-60" />
                <img
                  src={`/images/solutions/${image}`}
                  alt={alt}
                  className="relative h-36 w-auto max-w-full object-contain transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
                  Apertech
                </span>
              </div>
              <div className="flex flex-1 flex-col border-t border-line p-7">
                <h3 className="text-xl font-bold">{t(`solutions.${key}`)}</h3>
                <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed">{t(`solutions.${key}_desc`)}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600">
                  {t("hero.slide2.button")}
                  <i className="bi bi-arrow-right transition group-hover:translate-x-1"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Infor */}
        <div className="relative mt-6 overflow-hidden rounded-3xl bg-navy-900 p-7 sm:p-10" data-aos="fade-up">
          <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[15rem_1fr] lg:items-center">
            <div>
              <div className="inline-grid h-16 place-items-center rounded-xl bg-white px-5">
                <img src="/images/solutions/infor-syteline - Copy.png" alt="Infor" className="max-h-10 w-auto object-contain" />
              </div>
              <p className="mt-4 font-display text-lg font-bold text-white">
                {t("partners.infor.title")} · {t("partners.description")}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {INFOR.map(({ key, href, icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                      <i className={`bi ${icon}`}></i>
                    </span>
                    <i className="bi bi-box-arrow-up-right text-slate-400 transition group-hover:text-white"></i>
                  </div>
                  <h4 className="mt-4 font-bold !text-white">{t(`solutions.${key}`)}</h4>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{t(`solutions.${key}_desc`)}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
