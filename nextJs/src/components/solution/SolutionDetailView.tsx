"use client";

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutionDetails, solutionJourneys } from "@/data/solutions";
import { SITE } from "@/lib/config";
import { useLanguage } from "@/providers/LanguageProvider";

export default function SolutionDetailView({ slug }: { slug: string }) {
  const { t, lang, href } = useLanguage();

  const detail = solutionDetails[slug];
  const copy = detail.translations[lang] ?? detail.translations.en;
  const panel = detail.heroPanel[lang] ?? detail.heroPanel.en;
  const journey = solutionJourneys[slug]?.[lang] ?? solutionJourneys[slug]?.en ?? [];
  const image = detail.image.startsWith("/") ? detail.image : `/${detail.image}`;
  const solutions = Object.entries(solutionDetails).map(([s, d]) => ({
    slug: s,
    title: (d.translations[lang] ?? d.translations.en).title,
    image: d.image.startsWith("/") ? d.image : `/${d.image}`,
    desc: t(`solutions.${s.replace("-", "_")}_desc`),
    // genesis2.png has wide transparent margins around the logo
    zoom: s === "genesis" ? "scale-[2.2]" : "",
  }));
  const others = solutions.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-16 pt-10 md:pb-20">
        <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute left-1/4 top-[-16rem] h-[30rem] w-[50rem] rounded-full bg-[radial-gradient(closest-side,rgb(36_80_212/0.14),transparent)]" />

        <div className="container-x relative">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link href={href("/")} className="transition hover:text-brand-600" aria-label="Home">
                <i className="bi bi-house"></i>
              </Link>
              <i className="bi bi-chevron-right text-[10px]"></i>
              <Link href={href("/#solutions")} className="transition hover:text-brand-600">
                {t("nav.solutions")}
              </Link>
              <i className="bi bi-chevron-right text-[10px]"></i>
              <span className="font-semibold text-ink">{copy.title}</span>
            </nav>

            <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-white/80 p-1 shadow-soft backdrop-blur">
              {solutions.map((s) => (
                <Link
                  key={s.slug}
                  href={href(`/solutions/${s.slug}`)}
                  aria-current={s.slug === slug ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                    s.slug === slug ? "bg-brand-600 text-white shadow-sm" : "text-slate-500 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="grid h-28 w-28 shrink-0 place-items-center overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-card sm:h-36 sm:w-36">
                  <img
                    src={image}
                    alt={copy.title}
                    className={`h-full w-full object-contain ${slug === "genesis" ? "scale-[2.6]" : ""}`}
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{copy.heroTitle}</h1>
                  <span className="mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-accent-500" />
                </div>
              </div>

              <p className="mt-8 max-w-2xl border-l-2 border-brand-200 pl-5 text-lg leading-relaxed">{copy.heroSummary}</p>

              <a
                href={`mailto:${SITE.email}`}
                className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-line bg-white py-3 pl-3 pr-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-lg text-white transition group-hover:bg-brand-700">
                  <i className="bi bi-envelope"></i>
                </span>
                <span>
                  <span className="block text-xs font-medium text-slate-500">{t("solution-detail.contact.title")}</span>
                  <span className="block font-semibold text-ink">{SITE.email}</span>
                </span>
                <i className="bi bi-arrow-right ml-2 text-brand-600 transition group-hover:translate-x-1"></i>
              </a>
            </div>

            <aside className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-7 lg:col-span-5">
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-navy-900 px-5 py-4 text-white">
                <span className="text-sm text-slate-300">{t("solution-detail.hero.window")}</span>
                <strong className="font-display text-lg">{panel.implementationWindow}</strong>
              </div>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">{t("solution-detail.hero.industries")}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {panel.industries.map((industry) => (
                      <span key={industry} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        {industry}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">{t("solution-detail.hero.delivery")}</dt>
                  <dd className="text-ink">{panel.deliveryModel}</dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">{t("solution-detail.hero.outcomes")}</dt>
                  <dd className="text-ink">{panel.outcomes}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-surface py-20 md:py-15">
        <div className="container-x grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5" data-aos="fade-up">
            <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand-50 to-white p-10 shadow-soft">
              <div className="bg-dots absolute inset-0 opacity-70" />
              <img src={image} alt={copy.title} className="relative max-h-64 w-auto max-w-full object-contain" />
            </div>
          </div>

          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{copy.contentTitle}</h2>
            {/* Copy is trusted static content from src/data/solutions.ts and contains <br/> tags. */}
            <p className="mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: copy.description }} />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.highlights.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs text-white">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <span className="text-sm text-ink" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white py-20 md:py-15">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center" data-aos="fade-up">
            <span className="chip mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {t("solution-detail.journey.subtitle")}
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{t("solution-detail.journey.title")}</h2>
          </div>

          <ol className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t-2 border-dashed border-brand-200 md:block" />
            {journey.map((step, i) => (
              <li
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative rounded-3xl border border-line bg-white p-7 text-center"
              >
                <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 font-display text-xl font-extrabold text-white shadow-[0_0_0_8px_white]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
              </li>
            ))}
          </ol>

          <div
            className="relative mt-14 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-navy-900 p-8 text-white md:flex-row md:items-center md:p-10"
            data-aos="fade-up"
          >
            <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_right,black,transparent)]" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">{t("solution-detail.status.eyebrow")}</p>
              <ul className="mt-3 space-y-2">
                {["item1", "item2", "item3"].map((item) => (
                  <li key={item} className="flex gap-2.5 text-slate-200">
                    <i className="bi bi-check2-circle text-brand-300"></i>
                    {t(`solution-detail.status.${item}`)}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={href("/#contact")} className="btn btn-white relative shrink-0">
              {t("solution-detail.contact.cta")}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="bg-surface py-20 md:py-15">
        <div className="container-x">
          <SectionTitle subtitle="solution-detail.other.subtitle" description="solution-detail.other.description" />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {others.map((s, i) => (
              <Link
                key={s.slug}
                href={href(`/solutions/${s.slug}`)}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group flex items-center gap-6 rounded-3xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift sm:p-6"
              >
                <div className="relative grid h-28 w-28 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-white p-4 sm:h-32 sm:w-32">
                  <div className="bg-dots absolute inset-0 opacity-60" />
                  <span className={`relative block h-full w-full ${s.zoom}`}>
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed">{s.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    {t("solution-detail.other.more")}
                    <i className="bi bi-arrow-right transition group-hover:translate-x-1"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
