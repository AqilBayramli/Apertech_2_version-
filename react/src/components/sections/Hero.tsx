
import { useEffect, useState } from "react";
import ErpDashboard, { type ModuleId } from "@/components/ui/ErpDashboard";
import { useLanguage } from "@/providers/LanguageProvider";

const ROTATE_MS = 6000;

const MODULES: { id: ModuleId; icon: string; title: string; subtitle: string }[] = [
  { id: "procurement", icon: "bi-cart-check", title: "hero.slide2.title", subtitle: "hero.slide2.subtitle" },
  { id: "production", icon: "bi-gear-wide-connected", title: "hero.slide3.title", subtitle: "hero.slide3.subtitle" },
  { id: "construction", icon: "bi-buildings", title: "hero.slide4.title", subtitle: "hero.slide4.subtitle" },
];

/** Colors "Apertech" like the logo (blue "Aper", red "tech"), keeping any suffix (e.g. Azerbaijani case endings). */
function BrandTitle({ text }: { text: string }) {
  const parts = text.split("Apertech");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <>
              <span className="text-brand-600">Aper</span>
              <span className="text-accent-500">tech</span>
            </>
          )}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setActive((i) => (i + 1) % MODULES.length), ROTATE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  const current = MODULES[active];

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-16 sm:pt-24">
      {/* Background */}
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(36_80_212/0.16),transparent)]" />

      <div className="container-x relative">
        {/* Copy */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            <BrandTitle text={t("hero.title")} />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{t("hero.subtitle")}</p>
          <div className="mt-9 flex justify-center">
            <a href="#about" className="btn btn-primary">
              {t("hero.button")}
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Module switcher */}
        <div className="mx-auto mt-14 max-w-6xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div
            role="tablist"
            className="mx-auto flex w-full max-w-sm flex-col gap-1 rounded-2xl border border-line bg-white p-1.5 shadow-soft sm:w-fit sm:max-w-full sm:flex-row sm:rounded-full"
          >
            {MODULES.map(({ id, icon, title }, i) => {
              const selected = i === active;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 sm:rounded-full text-sm font-semibold transition sm:px-5 ${
                    selected ? "bg-navy-900 text-white" : "text-body hover:bg-surface hover:text-ink"
                  }`}
                >
                  <i className={`bi ${icon} ${selected ? "text-brand-300" : "text-brand-600"}`}></i>
                  <span className="whitespace-nowrap">{t(title)}</span>
                  {selected && !paused && (
                    <span
                      key={active}
                      className="absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-accent-500"
                      style={{ animation: `progress ${ROTATE_MS}ms linear forwards` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <p key={current.id} className="mx-auto mt-5 min-h-[3.5rem] max-w-2xl animate-[fadeIn_0.4s_ease] text-center text-[15px]">
            {t(current.subtitle)}
          </p>

          {/* Dashboard */}
          <div className="relative mt-6">
            <ErpDashboard module={current.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
