
import { useEffect, useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { STATS } from "@/lib/config";
import { useLanguage } from "@/providers/LanguageProvider";

type Client = { href: string; name: string; image: string };

export const CLIENTS: Client[] = [
  { href: "https://www.nwconstruction.com/", name: "Northwest Construction", image: "Northwest_Construction.png" },
  { href: "https://www.nwconstruction.com/", name: "Northwest Scaffolding", image: "nwt-scaffolding.png" },
  { href: "https://www.gl.world/", name: "GL World", image: "gl.png" },
  { href: "https://www.taghiyev-operating.com/", name: "Taghiyev Operating Company", image: "toc.png" },
  { href: "https://salyan-oil.com/", name: "Salyan Oil", image: "salyan-1.png" },
  {
    href: "https://www.facebook.com/people/Eventoc-volunteers/100069211856578/",
    name: "Eventoc",
    image: "eventoc.png",
  },
  { href: "https://ady.az/", name: "ADY", image: "ADY.png" },
  { href: "https://www.nwconstruction.com/", name: "Northwest Construction", image: "logo2.png" },
  { href: "https://slavyanka.az/", name: "Slavyanka", image: "slavyanka.png" },
  {
    href: "https://www.rixos.com/en?utm_campaign=booknowru&utm_medium=carousel&utm_source=dekatlon",
    name: "Rixos",
    image: "rixos2.png",
  },
  { href: "https://drinkcarabao.co.uk/", name: "Carabao", image: "carabao2.png" },
  { href: "https://www.socar.az/en/page/about-us", name: "SOCAR STP", image: "socar.png" },
  { href: "https://www.stpcareer.com/shirketimiz-haqqinda/13", name: "STP Heavy Engineering", image: "stp.png" },
  { href: "https://www.harveynichols.com/", name: "Harvey Nichols", image: "harvey.png" },
  {
    href: "https://socar.az/en/page/neftcala",
    name: "Neftcala Operation Company",
    image: "Neftcala-Əməliyyat-cirkəti-400x200.png",
  },
  { href: "https://bahar-energy.business.site/", name: "Bahar Energy", image: "Bahar-Energy.png" },
  { href: "https://www.sdl.az/", name: "Shirvan Drilled", image: "shirvan-drilled.jpg" },
  { href: "http://www.nsa.az/en/", name: "Navante", image: "navante.jpg" },
  {
    href: "https://azertag.az/en/xeber/Baku_2015_European_Games-2057495",
    name: "Baku 2015 European Games",
    image: "baku2015.png",
  },
  {
    href: "https://avantgroup.az/az/",
    name: "Avant Group",
    image: "Screenshot_2023-10-07_225621-removebg-preview-e1696705129487.webp",
  },
];

// Two rows drifting in opposite directions.
const ROWS = [CLIENTS.slice(0, Math.ceil(CLIENTS.length / 2)), CLIENTS.slice(Math.ceil(CLIENTS.length / 2))];

function LogoCard({ client, hidden }: { client: Client; hidden?: boolean }) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noreferrer"
      title={client.name}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      draggable={false}
      className="group/logo relative grid h-20 w-40 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-white px-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card sm:h-28 sm:w-52"
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-accent-50 opacity-0 transition duration-300 group-hover/logo:opacity-100" />
      <img
        src={`/images/clients/${client.image}`}
        alt={hidden ? "" : client.name}
        loading="lazy"
        draggable={false}
        className="relative max-h-14 max-w-full object-contain transition duration-300 group-hover/logo:-translate-y-2 group-hover/logo:scale-105 sm:max-h-20"
      />
      <span className="absolute inset-x-0 bottom-2 translate-y-2 truncate px-3 text-center text-[11px] font-semibold text-brand-700 opacity-0 transition duration-300 group-hover/logo:translate-y-0 group-hover/logo:opacity-100">
        {client.name}
      </span>
    </a>
  );
}

const SPEED = 40; // px per second of auto-scroll
const DRAG_THRESHOLD = 6; // px before a press becomes a drag (and the link click is cancelled)

/**
 * Endless logo row: drifts on its own, pauses while hovered, and can be dragged with the
 * mouse or swiped on touch screens; a flick keeps it gliding for a moment.
 */
function MarqueeRow({ clients, reverse }: { clients: Client[]; reverse?: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const s = useRef({ x: 0, hover: false, down: false, dragging: false, moved: false, startX: 0, startOffset: 0, lastX: 0, lastT: 0, velocity: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const st = s.current;
    let frame = 0;
    let prev = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (!st.dragging) {
        const auto = reduced || st.hover ? 0 : (reverse ? 1 : -1) * SPEED;
        st.x += (auto + st.velocity) * dt;
        st.velocity *= Math.pow(0.04, dt); // a flick fades out in about a second
        if (Math.abs(st.velocity) < 1) st.velocity = 0;
      }
      // The track holds the logos twice, so wrapping by half its width is seamless.
      const half = track.scrollWidth / 2;
      if (half > 0) st.x = ((st.x % half) - half) % half;
      track.style.transform = `translate3d(${st.x}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reverse]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const st = s.current;
    Object.assign(st, { down: true, dragging: false, moved: false, startX: e.clientX, startOffset: st.x, lastX: e.clientX, lastT: e.timeStamp, velocity: 0 });
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const st = s.current;
    if (!st.down) return;
    const dx = e.clientX - st.startX;
    if (!st.dragging) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      // Capture only once it is clearly a drag, so a plain click still opens the logo link.
      st.dragging = st.moved = true;
      rowRef.current?.setPointerCapture(e.pointerId);
    }
    st.x = st.startOffset + dx;
    const dt = (e.timeStamp - st.lastT) / 1000;
    if (dt > 0) st.velocity = st.velocity * 0.6 + ((e.clientX - st.lastX) / dt) * 0.4;
    st.lastX = e.clientX;
    st.lastT = e.timeStamp;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const st = s.current;
    if (st.dragging && rowRef.current?.hasPointerCapture(e.pointerId)) rowRef.current.releasePointerCapture(e.pointerId);
    // No fling if the pointer was held still before release.
    if (!st.dragging || e.timeStamp - st.lastT > 80) st.velocity = 0;
    st.velocity = Math.max(-2500, Math.min(2500, st.velocity));
    st.down = st.dragging = false;
  };

  return (
    <div
      ref={rowRef}
      className="flex cursor-grab touch-pan-y select-none overflow-hidden py-2 active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") s.current.hover = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") s.current.hover = false;
      }}
      onClickCapture={(e) => {
        // Releasing after a drag must not open the logo under the cursor.
        if (s.current.moved) {
          e.preventDefault();
          e.stopPropagation();
          s.current.moved = false;
        }
      }}
    >
      <div ref={trackRef} className="flex w-max gap-5 pr-5 will-change-transform">
        {clients.map((client) => (
          <LogoCard key={client.image} client={client} />
        ))}
        {clients.map((client) => (
          <LogoCard key={`dup-${client.image}`} client={client} hidden />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="relative overflow-hidden bg-white py-20 md:py-15">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-x relative">
        <SectionTitle title="clients.title" subtitle="clients.subtitle" description="clients.description" />

        {/* Trust badge */}
        <div className="-mt-4 mb-10 flex justify-center" data-aos="fade-up">
          <div className="flex items-center gap-3 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-5 shadow-soft">
            <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <i className="bi bi-patch-check-fill"></i>
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-success" />
            </span>
            <span className="text-sm font-semibold text-ink">
              {t("clients.trusted").replace("{n}", String(STATS.clients))}
            </span>
          </div>
        </div>
      </div>

      {/* Marquee rows: full-bleed, edges faded, pause on hover, draggable */}
      <div
        className="relative space-y-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {ROWS.map((row, r) => (
          <MarqueeRow key={r} clients={row} reverse={r % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
