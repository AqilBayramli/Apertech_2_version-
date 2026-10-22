
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/providers/LanguageProvider";

type Visual = "modules" | "code" | "install" | "chart" | "chat" | "flow";

/** Bento layout on lg: wide tiles take two of the three columns. */
export const SERVICES: { icon: string; key: string; visual: Visual; wide?: boolean; featured?: boolean }[] = [
  { icon: "bi-laptop", key: "erp", visual: "modules", wide: true, featured: true },
  { icon: "bi-code-slash", key: "web_dev", visual: "code" },
  { icon: "bi-cpu", key: "software", visual: "install" },
  { icon: "bi-graph-up-arrow", key: "analytics", visual: "chart", wide: true },
  { icon: "bi-headset", key: "support", visual: "chat" },
  { icon: "bi-person-workspace", key: "consultancy", visual: "flow", wide: true },
];

const MODULE_ICONS = ["bi-bank", "bi-cart-check", "bi-box-seam", "bi-people", "bi-buildings", "bi-bar-chart-line"];
const FLOW_ICONS = ["bi-search", "bi-diagram-3", "bi-gear", "bi-rocket-takeoff"];
const BARS = [35, 52, 44, 66, 58, 80, 72, 92];
const CODE_LINES = [
  { w: "w-16", c: "bg-brand-400", indent: 0 },
  { w: "w-24", c: "bg-accent-500/70", indent: 1 },
  { w: "w-20", c: "bg-brand-200", indent: 1 },
  { w: "w-10", c: "bg-brand-400", indent: 0 },
];

const anim = "motion-reduce:animate-none";

/** Six modules; a highlight walks through them like data syncing across the ERP. */
function Modules() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {MODULE_ICONS.map((icon, i) => (
        <span
          key={icon}
          className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-xl text-brand-200 transition duration-500 group-hover:-translate-y-1"
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <span
            className={`absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 opacity-0 shadow-[0_0_24px_rgb(64_105_227/0.6)] animate-[cycle6_4.8s_ease-in-out_infinite] ${anim}`}
            style={{ animationDelay: `${i * 0.8}s` }}
          />
          <i className={`bi ${icon} relative`}></i>
        </span>
      ))}
    </div>
  );
}

/** Mini editor whose lines type themselves out. */
function Code() {
  return (
    <div className="w-36 overflow-hidden rounded-xl border border-line bg-white shadow-soft">
      <div className="flex gap-1 border-b border-line px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-warning/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-success/70" />
      </div>
      <div className="space-y-1.5 px-2.5 py-2.5">
        {CODE_LINES.map(({ w, c, indent }, i) => (
          <div key={i} className="flex items-center" style={{ paddingLeft: indent * 10 }}>
            <span
              className={`block h-1.5 origin-left rounded-full ${w} ${c} animate-[typeLine_3.6s_ease-in-out_infinite] ${anim}`}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            {i === CODE_LINES.length - 1 && <span className={`ml-1 h-2.5 w-px bg-ink animate-pulse ${anim}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Installer: spinning gear and a progress bar that keeps filling. */
function Install() {
  return (
    <div className="flex w-36 items-center gap-3 rounded-xl border border-line bg-white p-2.5 shadow-soft">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-lg text-brand-600">
        <i className={`bi bi-gear-fill inline-block animate-[spin_4s_linear_infinite] ${anim}`}></i>
      </span>
      <div className="min-w-0 flex-1 space-y-1.5">
        <span className="block h-1.5 w-12 rounded-full bg-slate-200" />
        <span className="block h-1.5 overflow-hidden rounded-full bg-brand-50">
          <span className={`block h-full origin-left rounded-full bg-gradient-to-r from-brand-500 to-accent-500 animate-[fillLoop_2.8s_ease-in-out_infinite] ${anim}`} />
        </span>
      </div>
    </div>
  );
}

/** Breathing bars with a trend line that draws itself over them. */
function Chart() {
  const points = BARS.map((h, i) => `${(i + 0.5) * 30},${100 - h}`).join(" ");
  return (
    <div className="relative h-28 w-60">
      <div className="absolute inset-0 flex gap-2">
        {BARS.map((h, i) => (
          <div key={i} className="relative flex-1">
            <div
              className={`absolute inset-x-0 bottom-0 origin-bottom rounded-t-md animate-[barWave_3s_ease-in-out_infinite] ${anim} ${
                i === BARS.length - 1 ? "bg-gradient-to-t from-brand-600 to-brand-400" : "bg-brand-200/80"
              }`}
              style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
            />
          </div>
        ))}
      </div>
      <svg viewBox="0 0 240 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <polyline
          points={points}
          fill="none"
          stroke="#e0384c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          strokeDasharray="1"
          className={`animate-[drawLine_4s_ease-in-out_infinite] ${anim}`}
        />
      </svg>
      <span className="absolute -top-7 right-0 rounded-full bg-success px-2 py-0.5 text-[10px] font-bold text-white shadow-soft">+24%</span>
    </div>
  );
}

/** Support chat: question, "typing…", resolved answer. */
function Chat() {
  return (
    <div className="w-36 space-y-1.5">
      <div
        className={`w-24 rounded-xl rounded-bl-sm border border-line bg-white px-2.5 py-2 shadow-soft animate-[bubble_4.5s_ease-in-out_infinite] ${anim}`}
      >
        <span className="block h-1.5 w-16 rounded-full bg-slate-200" />
        <span className="mt-1 block h-1.5 w-10 rounded-full bg-slate-200" />
      </div>
      <div
        className={`ml-auto flex w-fit items-center gap-1.5 rounded-xl rounded-br-sm bg-brand-600 px-2.5 py-2 text-white shadow-soft animate-[bubble_4.5s_ease-in-out_infinite] ${anim}`}
        style={{ animationDelay: "0.6s" }}
      >
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`h-1.5 w-1.5 rounded-full bg-white animate-[typingDot_1.2s_ease-in-out_infinite] ${anim}`}
            style={{ animationDelay: `${d * 0.15}s` }}
          />
        ))}
        <i className="bi bi-check2-all text-xs"></i>
      </div>
    </div>
  );
}

/** Consulting roadmap: a progress line runs through the steps as they light up. */
function Flow() {
  return (
    <div className="relative flex items-center gap-5">
      <span className="absolute inset-x-6 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-brand-100" />
      <span
        className={`absolute inset-x-6 top-1/2 h-0.5 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 animate-[fillLoop_3.6s_linear_infinite] ${anim}`}
      />
      {FLOW_ICONS.map((icon, i) => (
        <span
          key={icon}
          className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-line bg-white text-lg text-brand-600 shadow-soft"
        >
          <i className={`bi ${icon}`}></i>
          {/* Lit state: same icon in white on a filled circle, faded in and out */}
          <span
            className={`absolute inset-0 grid place-items-center rounded-full text-white opacity-0 animate-[cycle4_3.6s_linear_infinite] ${anim} ${
              i === FLOW_ICONS.length - 1 ? "bg-accent-500" : "bg-brand-600"
            }`}
            style={{ animationDelay: `${i * 0.9}s` }}
          >
            <i className={`bi ${icon}`}></i>
          </span>
        </span>
      ))}
    </div>
  );
}

const VISUALS: Record<Visual, () => React.ReactNode> = {
  modules: Modules,
  code: Code,
  install: Install,
  chart: Chart,
  chat: Chat,
  flow: Flow,
};

/** Moves the hover spotlight with the cursor (CSS vars, no re-render). */
const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-20 md:py-15">
      <div className="container-x">
        <SectionTitle title="services.title" subtitle="services.subtitle" description="services.description" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon, key, wide, featured, visual }, i) => {
            const Visual = VISUALS[visual];
            return (
              <div key={key} data-aos="fade-up" data-aos-delay={(i % 3) * 100} className={wide ? "lg:col-span-2" : ""}>
                <article
                  onMouseMove={trackPointer}
                  className={`group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition duration-500 hover:-translate-y-1.5 sm:p-8 ${
                    wide ? "lg:flex-row lg:items-center lg:gap-10" : ""
                  } ${
                    featured
                      ? "border-navy-800 bg-navy-900 text-slate-300 hover:shadow-lift"
                      : "border-line bg-surface hover:border-brand-200 hover:bg-white hover:shadow-card"
                  }`}
                >
                  {/* Cursor spotlight */}
                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100 ${
                      featured
                        ? "bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgb(64_105_227/0.28),transparent_60%)]"
                        : "bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),rgb(36_80_212/0.09),transparent_60%)]"
                    }`}
                  />
                  {/* Accent line that sweeps in along the top edge */}
                  <span className="absolute inset-x-8 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-accent-500 transition-transform duration-700 group-hover:scale-x-100" />
                  {featured && (
                    <div
                      className={`pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl animate-[breathe_6s_ease-in-out_infinite] ${anim}`}
                    />
                  )}

                  <div className="relative flex-1">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl transition duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                          featured
                            ? "bg-brand-600 text-white"
                            : "bg-white text-brand-600 shadow-soft group-hover:bg-brand-600 group-hover:text-white"
                        }`}
                      >
                        <i className={`bi ${icon}`}></i>
                      </span>
                      {!wide && (
                        <div className="transition duration-500 group-hover:-translate-y-0.5">
                          <Visual />
                        </div>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold ${featured ? "!text-white" : "transition group-hover:text-brand-700"}`}>
                      {t(`services.${key}`)}
                    </h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${featured ? "text-slate-300" : ""}`}>{t(`services.${key}_desc`)}</p>
                  </div>

                  {wide && (
                    <div className="relative mt-8 flex shrink-0 justify-center lg:mt-0">
                      <Visual />
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
