"use client";

import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/config";
import { useLanguage } from "@/providers/LanguageProvider";

const ITEMS = [
  { icon: "bi-emoji-smile", end: STATS.clients, duration: 2.5, key: "stats.happy_clients" },
  { icon: "bi-kanban", end: STATS.projects, duration: 2.5, key: "stats.projects" },
  { icon: "bi-calendar-check", end: STATS.years, duration: 2, key: "stats.years" },
  { icon: "bi-people", end: STATS.workers, duration: 2.5, key: "stats.workers" },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section id="stats" className="bg-white pb-6 pt-16 md:py-15">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-900 shadow-[0_30px_60px_-30px_rgba(10,21,48,0.6)]"
          data-aos="fade-up"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {ITEMS.map(({ icon, end, duration, key }, i) => (
              <div
                key={key}
                className={`group flex flex-col items-center px-4 py-10 text-center sm:py-12 ${
                  i % 2 === 1 ? "border-l border-white/10" : ""
                } ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-2xl text-white shadow-[0_10px_25px_-8px_rgba(64,105,227,0.8)] ring-1 ring-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                  <i className={`bi ${icon}`}></i>
                </span>
                <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <Counter end={end} duration={duration} />
                  <span className="text-accent-500">+</span>
                </div>
                <span className="mt-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-400 to-accent-500 transition-all duration-300 group-hover:w-14" />
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-300">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
