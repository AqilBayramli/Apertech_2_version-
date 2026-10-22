"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { splitLocale } from "@/lib/i18n";
import { buildIndex, highlight, search, type SearchEntry, type SearchGroup, type SearchHit } from "@/lib/search";
import { useLanguage } from "@/providers/LanguageProvider";

function Highlighted({ text, query }: { text: string; query: string }) {
  return (
    <>
      {highlight(text, query).map((part, i) =>
        part.match ? (
          <mark key={i} className="rounded-sm bg-accent-500/20 text-inherit">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}

/** Groups hits in order of each group's best hit, keeping the ranking inside every group. */
function groupHits(hits: SearchHit[]) {
  const groups = new Map<SearchGroup, SearchHit[]>();
  for (const hit of hits) groups.set(hit.group, [...(groups.get(hit.group) ?? []), hit]);
  return [...groups.entries()];
}

export default function SiteSearch({ onOpen }: { onOpen?: () => void }) {
  const { t, lang, href } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const index = useMemo(() => buildIndex(lang), [lang]);
  const hits = useMemo<SearchHit[]>(() => {
    if (query.trim()) return search(index, query);
    // Empty query: show the site sections as quick links.
    return index.filter((e) => e.group === "pages").map((e) => ({ ...e, score: 0, snippet: "" }));
  }, [index, query]);
  const grouped = useMemo(() => groupHits(hits), [hits]);
  // Flat order matching what is rendered, for keyboard navigation.
  const flat = useMemo(() => grouped.flatMap(([, items]) => items), [grouped]);

  const show = () => {
    onOpen?.();
    setQuery("");
    setActive(0);
    setOpen(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (open) setOpen(false);
        else show();
      } else if (e.key === "/" && !typing && !open) {
        e.preventDefault();
        show();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (entry: SearchEntry) => {
    setOpen(false);
    const hash = entry.href.startsWith("/#") ? entry.href.slice(2) : null;
    if (hash && splitLocale(pathname).path === "/") {
      // Same page: update the hash ourselves so a repeated pick still scrolls and opens its item.
      history.replaceState(null, "", `#${hash}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href(entry.href));
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flat[active]) {
      e.preventDefault();
      go(flat[active]);
    }
  };

  let row = -1;

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-label={t("search.open")}
        className="grid h-11 w-11 place-items-center rounded-lg border border-line text-lg text-ink transition hover:bg-brand-50 xl:flex xl:w-auto xl:gap-2.5 xl:rounded-full xl:bg-surface xl:pl-4 xl:pr-2 xl:text-sm xl:text-slate-500 xl:hover:border-brand-200 xl:hover:text-ink"
      >
        <i className="bi bi-search"></i>
        <span className="hidden xl:inline">{t("search.open")}</span>
        <kbd className="hidden whitespace-nowrap rounded-md border border-line bg-white px-1.5 py-0.5 font-sans text-[11px] font-semibold text-slate-400 xl:inline">
          Ctrl K
        </kbd>
      </button>

      {/* Portal: the sticky header is its own stacking context, so the top bar would sit above the overlay. */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-start justify-center bg-navy-900/50 px-4 pt-[8vh] backdrop-blur-sm sm:pt-[12vh]"
            onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={t("search.open")}
              onKeyDown={onKeyDown}
              className="flex max-h-[80vh] w-full max-w-2xl animate-[fadeIn_0.2s_ease] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-20px_rgba(15,23,42,0.45)]"
            >
              <div className="flex items-center gap-3 border-b border-line px-5">
                <i className="bi bi-search text-lg text-brand-600"></i>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  aria-controls="site-search-results"
                  aria-activedescendant={flat[active] ? `search-${flat[active].id}` : undefined}
                  className="h-16 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-slate-400 [&::-webkit-search-cancel-button]:hidden"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-line px-2 py-1 text-[11px] font-semibold text-slate-400 transition hover:text-ink"
                >
                  Esc
                </button>
              </div>

              <div ref={listRef} id="site-search-results" role="listbox" className="flex-1 overflow-y-auto p-2">
                {flat.length === 0 ? (
                  <div className="px-4 py-12 text-center">
                    <i className="bi bi-search text-3xl text-slate-300"></i>
                    <p className="mt-3 text-sm text-slate-500">
                      {t("search.empty")} <span className="font-semibold text-ink">“{query.trim()}”</span>
                    </p>
                  </div>
                ) : (
                  grouped.map(([group, items]) => (
                    <div key={group} className="mb-1">
                      <p className="px-3 pb-1.5 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t(`search.group.${group}`)}
                      </p>
                      {items.map((hit) => {
                        row += 1;
                        const i = row;
                        const selected = i === active;
                        return (
                          <div
                            key={hit.id}
                            id={`search-${hit.id}`}
                            role="option"
                            aria-selected={selected}
                            data-index={i}
                            onMouseMove={() => setActive(i)}
                            onClick={() => go(hit)}
                            className={`flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 transition ${
                              selected ? "bg-brand-50" : ""
                            }`}
                          >
                            <span
                              className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                                selected ? "bg-brand-600 text-white" : "bg-surface text-brand-600"
                              }`}
                            >
                              <i className={`bi ${hit.icon}`}></i>
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={`block truncate text-[15px] font-semibold ${selected ? "text-brand-700" : "text-ink"}`}>
                                <Highlighted text={hit.title} query={query} />
                              </span>
                              {hit.snippet && (
                                <span className="mt-0.5 line-clamp-2 block text-[13px] leading-relaxed text-slate-500">
                                  <Highlighted text={hit.snippet} query={query} />
                                </span>
                              )}
                            </span>
                            <i
                              className={`bi bi-arrow-return-left mt-2.5 text-xs text-brand-600 transition ${
                                selected ? "opacity-100" : "opacity-0"
                              }`}
                            ></i>
                          </div>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              <div className="hidden items-center gap-5 border-t border-line bg-surface/60 px-5 py-3 text-xs text-slate-500 sm:flex">
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-line bg-white px-1.5 py-0.5 font-sans">↑</kbd>
                  <kbd className="rounded border border-line bg-white px-1.5 py-0.5 font-sans">↓</kbd>
                  {t("search.hint_nav")}
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-line bg-white px-1.5 py-0.5 font-sans">Enter</kbd>
                  {t("search.hint_open")}
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-line bg-white px-1.5 py-0.5 font-sans">Esc</kbd>
                  {t("search.hint_close")}
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
