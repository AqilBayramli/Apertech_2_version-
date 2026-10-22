"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/config";
import { LANGS } from "@/data/translations";
import { splitLocale } from "@/lib/i18n";
import { useLanguage } from "@/providers/LanguageProvider";
import Flag from "@/components/ui/Flag";
import SiteSearch from "./SiteSearch";

const LANG_NAMES = { en: "English", az: "Azərbaycan", ru: "Русский" } as const;

function LangMenu({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={
          light
            ? "flex h-11 items-center gap-1.5 rounded-lg border border-line px-3 text-sm font-semibold text-ink transition hover:bg-brand-50"
            : "flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
        }
      >
        <i className="bi bi-globe2"></i>
        {lang.toUpperCase()}
        <i className={`bi bi-chevron-down text-[10px] transition ${open ? "rotate-180" : ""}`}></i>
      </button>
      {open && (
        <ul className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white py-1 text-sm shadow-card">
          {LANGS.map((code) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 text-left transition hover:bg-brand-50 ${
                  lang === code ? "font-bold text-brand-600" : "text-ink"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Flag lang={code} />
                  {LANG_NAMES[code]}
                </span>
                {lang === code && <i className="bi bi-check2"></i>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const { t, href } = useLanguage();
  const isHome = splitLocale(usePathname()).path === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Once the top bar has scrolled out of view, the language menu moves into the sticky header.
  const [pastTopBar, setPastTopBar] = useState(false);
  const [activeId, setActiveId] = useState<string>(isHome ? "hero" : "solutions");

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) setActiveId("solutions");
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setPastTopBar(window.scrollY >= 40);
      if (!isHome) return;
      const position = window.scrollY + 220;
      const current = NAV_ITEMS.find(({ id }) => {
        const section = document.getElementById(id);
        return section && position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight;
      });
      setActiveId(current?.id ?? "");
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const anchor = (id: string) => (isHome ? `#${id}` : href(`/#${id}`));

  return (
    <>
      <div className="relative z-[60] bg-navy-900 text-[13px] text-slate-300">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition hover:text-white">
              <i className="bi bi-envelope text-brand-300"></i>
              <span className="hidden sm:inline">{SITE.email}</span>
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 transition hover:text-white">
              <i className="bi bi-telephone text-brand-300"></i>
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 sm:flex xl:border-r xl:border-white/15 xl:pr-4">
              <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className={`hidden xl:block ${pastTopBar ? "invisible" : ""}`}>
              <LangMenu />
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-shadow ${
          scrolled ? "border-line shadow-soft" : "border-transparent"
        }`}
      >
        <div className="container-x grid h-[76px] grid-cols-[1fr_auto] items-center gap-6 xl:grid-cols-[1fr_auto_1fr]">
          <Link href={href("/")} className="flex shrink-0 items-center justify-self-start" onClick={() => setMenuOpen(false)}>
            <img src="/images/logoAnar.png" alt="Apertech logo" className="h-14 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map(({ id, key }) => {
              const active = activeId === id;
              return (
                <a
                  key={id}
                  href={anchor(id)}
                  className={`relative px-4 py-2 text-[15px] font-semibold transition ${
                    active ? "text-brand-600" : "text-ink hover:text-brand-600"
                  }`}
                >
                  {t(key)}
                  <span
                    className={`absolute inset-x-4 -bottom-[1px] h-0.5 rounded-full bg-accent-500 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <SiteSearch onOpen={() => setMenuOpen(false)} />
            <div className={pastTopBar ? "xl:animate-[fadeIn_0.3s_ease]" : "xl:hidden"}>
              <LangMenu light />
            </div>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-line text-2xl text-ink xl:hidden"
            >
              <i className={`bi ${menuOpen ? "bi-x-lg text-xl" : "bi-list"}`}></i>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-line bg-white xl:hidden">
            <div className="container-x flex flex-col py-3">
              {NAV_ITEMS.map(({ id, key }) => (
                <a
                  key={id}
                  href={anchor(id)}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-3.5 font-semibold ${
                    activeId === id ? "bg-brand-50 text-brand-700" : "text-ink"
                  }`}
                >
                  {t(key)}
                  <i className="bi bi-chevron-right text-xs opacity-50"></i>
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
