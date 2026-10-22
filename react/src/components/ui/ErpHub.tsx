
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

/**
 * "Integration hub" illustration: the Apertech platform in the centre with the
 * business areas it connects around it. Labels reuse existing translation keys.
 * One module at a time is highlighted as "syncing"; hovering a module takes over.
 */
const NODES = [
  { label: "contact.solutions.financials", icon: "bi-bank", angle: -60 },
  { label: "hub.erp", icon: "bi-diagram-3", angle: 0 },
  { label: "hub.support", icon: "bi-headset", angle: 60 },
  { label: "stats.projects", icon: "bi-kanban", angle: 120 },
  { label: "HR", icon: "bi-people", angle: 180, literal: true },
  { label: "services.analytics", icon: "bi-bar-chart-line", angle: 240 },
];

const RADIUS = 31; // % of the square
const CYCLE_MS = 2200;

// Rounded so server and client render identical attribute strings.
const round = (n: number) => Math.round(n * 1000) / 1000;

const polar = (angle: number, r: number) => {
  const rad = (angle * Math.PI) / 180;
  return { x: round(50 + r * Math.cos(rad)), y: round(50 + r * Math.sin(rad)) };
};

/** Gently curved spoke from the centre to a node, so the hub reads as a swirl. */
const spoke = (angle: number) => {
  const end = polar(angle, RADIUS);
  const ctrl = polar(angle - 28, RADIUS * 0.55);
  return { end, d: `M50 50 Q${ctrl.x} ${ctrl.y} ${end.x} ${end.y}` };
};

const SPOKES = NODES.map(({ angle }) => spoke(angle));
const VIEW_BOX_ORIGIN = { transformBox: "view-box", transformOrigin: "50% 50%" } as const;

export default function ErpHub() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!motion || !inView || hovered !== null) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % NODES.length), CYCLE_MS);
    return () => clearInterval(timer);
  }, [motion, inView, hovered]);

  const current = hovered ?? active;
  // Before hydration, or with reduced motion, everything is shown statically.
  const revealed = !motion || inView;

  return (
    <div ref={rootRef} className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {/* Backdrop */}
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-br from-brand-50 via-white to-white shadow-card">
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(circle,black,transparent_75%)]" />
        <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(36_80_212/0.12),transparent)]" />
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-brand-600/10 blur-3xl" />
      </div>

      {/* Orbits + connections */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <defs>
          <filter id="hub-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
          {SPOKES.map(({ end }, i) => (
            <linearGradient key={i} id={`hub-line-${i}`} gradientUnits="userSpaceOnUse" x1="50" y1="50" x2={end.x} y2={end.y}>
              <stop offset="0" stopColor="#2450d4" stopOpacity="0.7" />
              <stop offset="1" stopColor={i % 2 ? "#e0384c" : "#2450d4"} stopOpacity="0.9" />
            </linearGradient>
          ))}
        </defs>

        {/* Outer orbit with satellites, slowly turning */}
        <g style={VIEW_BOX_ORIGIN} className="animate-[spin_60s_linear_infinite] motion-reduce:animate-none">
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgb(36 80 212 / 0.10)" strokeWidth="0.25" strokeDasharray="0.6 1.4" />
          <circle cx="94" cy="50" r="0.9" fill="#2450d4" opacity="0.5" />
          <circle cx="6" cy="50" r="0.7" fill="#e0384c" opacity="0.5" />
          <circle cx="50" cy="94" r="0.6" fill="#2450d4" opacity="0.35" />
        </g>
        <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgb(36 80 212 / 0.14)" strokeWidth="0.3" strokeDasharray="0.8 1.2" />
        {/* Inner orbit, counter-rotating */}
        <g style={VIEW_BOX_ORIGIN} className="animate-[spin_24s_linear_infinite_reverse] motion-reduce:animate-none">
          <circle cx="50" cy="50" r="19" fill="none" stroke="rgb(36 80 212 / 0.16)" strokeWidth="0.3" strokeDasharray="4 3" />
          <circle cx="69" cy="50" r="0.8" fill="#e0384c" />
        </g>

        {SPOKES.map(({ d }, i) => {
          const on = i === current;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="rgb(36 80 212 / 0.18)" strokeWidth="0.35" strokeDasharray="1 1" />
              <path
                d={d}
                fill="none"
                stroke={`url(#hub-line-${i})`}
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="1 1"
                style={{
                  strokeWidth: on ? 0.6 : 0.4,
                  strokeDashoffset: on ? 0 : 1,
                  opacity: on ? 1 : 0,
                  transition: "stroke-dashoffset 0.7s ease, opacity 0.4s ease, stroke-width 0.4s ease",
                }}
              />
              {motion && (
                <>
                  <circle r={on ? 2 : 1.4} fill={i % 2 ? "#e0384c" : "#2450d4"} opacity="0.45" filter="url(#hub-glow)">
                    <animateMotion dur={`${2.4 + (i % 3) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.35}s`} path={d} />
                  </circle>
                  <circle r={on ? 0.9 : 0.7} fill="#fff" stroke={i % 2 ? "#e0384c" : "#2450d4"} strokeWidth="0.35">
                    <animateMotion dur={`${2.4 + (i % 3) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.35}s`} path={d} />
                  </circle>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Centre: Apertech */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute -inset-8 rounded-full bg-brand-400/25 blur-2xl animate-[breathe_4s_ease-in-out_infinite] motion-reduce:animate-none" />
        <span className="absolute -inset-[5px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#2450d4_110deg,#e0384c_210deg,transparent_290deg)] animate-[spin_5s_linear_infinite] motion-reduce:animate-none" />
        <div className="relative grid h-28 w-28 place-items-center rounded-full border-4 border-white bg-white p-4 shadow-lift sm:h-36 sm:w-36 sm:p-5">
          <img src="/images/logoAnar.png" alt="Apertech" className="h-auto w-full object-contain" />
        </div>
      </div>

      {/* Module nodes */}
      {NODES.map(({ label, icon, literal }, i) => {
        const { x, y } = SPOKES[i].end;
        const on = i === current;
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={revealed ? "animate-[popIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]" : "opacity-0"}
              style={{ animationDelay: `${150 + i * 90}ms` }}
            >
              <div
                className="animate-[float_5s_ease-in-out_infinite] motion-reduce:animate-none"
                style={{ animationDelay: `${-i * 0.8}s`, animationDuration: `${4.6 + (i % 3) * 0.6}s` }}
              >
                <div
                  className={`relative flex cursor-default items-center gap-2 rounded-2xl border bg-white p-1.5 transition duration-300 sm:w-36 sm:pr-2.5 ${
                    on ? "scale-105 border-brand-200 shadow-lift ring-4 ring-brand-600/10" : "border-line shadow-card"
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-base transition duration-300 sm:h-10 sm:w-10 ${
                      on ? "bg-gradient-to-br from-brand-600 to-accent-500 text-white" : i % 2 ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                    }`}
                  >
                    <i className={`bi ${icon}`}></i>
                  </span>
                  <span className="hidden min-w-0 flex-1 text-xs font-bold leading-tight text-ink sm:block">{literal ? label : t(label)}</span>
                  {on && (
                    <span className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-success/60 motion-reduce:animate-none" />
                      <span className="relative h-2.5 w-2.5 rounded-full border-2 border-white bg-success" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
