"use client";

import { usePathname } from "next/navigation";
import { splitLocale } from "@/lib/i18n";
import { NAV_ITEMS, SITE } from "@/lib/config";
import { useLanguage } from "@/providers/LanguageProvider";

const FOOTER_SERVICES = [
  "services.web_dev",
  "services.erp",
  "services.software",
  "services.analytics",
  "services.support",
  "services.consultancy",
];

const link = "inline-flex items-center gap-2 py-1.5 text-slate-400 transition hover:text-white";

export default function Footer() {
  const { t, href } = useLanguage();
  const isHome = splitLocale(usePathname()).path === "/";
  const anchor = (id: string) => (isHome ? `#${id}` : href(`/#${id}`));

  return (
    <footer className="relative bg-navy-900 text-sm text-slate-400">
      <div className="container-x grid gap-12 pb-14 pt-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <div className="group relative inline-block">
            <span className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-300/70 via-white/10 to-brand-600/70 opacity-80 blur-[1px] transition group-hover:opacity-100" />
            <span className="relative block rounded-2xl bg-white px-6 py-4 shadow-[0_12px_40px_-12px_rgba(59,130,246,0.55)] transition duration-300 group-hover:-translate-y-0.5">
              <img src="/images/logoAnar.png" alt="Apertech" className="h-20 w-auto" />
            </span>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed">{t("footer.follow_desc")}</p>
          <div className="mt-5 flex gap-2">
            {[
              { href: SITE.facebook, icon: "bi-facebook", label: "Facebook" },
              { href: SITE.linkedin, icon: "bi-linkedin", label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:border-brand-600 hover:bg-brand-600"
              >
                <i className={`bi ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider !text-white">{t("footer.links")}</h4>
          <ul>
            {NAV_ITEMS.map(({ id, key }) => (
              <li key={id}>
                <a href={anchor(id)} className={link}>
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider !text-white">{t("footer.services")}</h4>
          <ul>
            {FOOTER_SERVICES.map((key) => (
              <li key={key}>
                <a href={anchor("services")} className={link}>
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider !text-white">{t("nav.contact")}</h4>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <i className="bi bi-geo-alt-fill mt-0.5 text-brand-300"></i>
              <span>
                {t("footer.address")}
                <br />
                {t("footer.city")}
              </span>
            </li>
            <li className="flex gap-3">
              <i className="bi bi-telephone-fill text-brand-300"></i>
              <a href={`tel:${SITE.phone}`} className="transition hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <i className="bi bi-envelope-fill text-brand-300"></i>
              <a href={`mailto:${SITE.email}`} className="transition hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-x py-6 text-center text-[13px]">
          {t("footer.copyright")} ©<strong className="px-1 text-white">2026 Apertech.</strong> {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
