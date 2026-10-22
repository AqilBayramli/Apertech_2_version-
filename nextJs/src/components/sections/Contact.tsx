"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { SITE } from "@/lib/config";
import { useLanguage } from "@/providers/LanguageProvider";
import ContactForm from "./ContactForm";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.4257931898019!2d49.85750726965327!3d40.41542599821496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087fe892e8ebb%3A0x431eed4f290e9480!2zWi5Cw7xueWFkb3YgcHIuLcaPLlLJmWPJmWJsaSBrw7zDp8mZc2luaW4ga8mZc2nFn23JmXNp!5e0!3m2!1sru!2saz!4v1707138496584!5m2!1sru!2saz";

export default function Contact() {
  const { t } = useLanguage();

  const items = [
    { icon: "bi-geo-alt", title: t("contact.address"), body: <>{t("contact.address_value")}</> },
    {
      icon: "bi-telephone",
      title: t("contact.phone"),
      body: (
        <a href={`tel:${SITE.phone}`} className="transition hover:text-brand-600">
          {SITE.phone}
        </a>
      ),
    },
    {
      icon: "bi-envelope",
      title: t("contact.email"),
      body: (
        <a href={`mailto:${SITE.email}`} className="transition hover:text-brand-600">
          {SITE.email}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-white py-20 md:py-15">
      <div className="container-x">
        <SectionTitle title="nav.contact" subtitle="contact.subtitle" description="contact.description" />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <div className="flex flex-col gap-4 lg:col-span-2" data-aos="fade-up">
            {items.map(({ icon, title, body }) => (
              <div key={icon} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-lg text-white shadow-[0_8px_18px_-8px_rgb(36_80_212/0.8)]">
                  <i className={`bi ${icon}`}></i>
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>
                  <p className="mt-1 font-semibold text-ink">{body}</p>
                </div>
              </div>
            ))}

            <iframe
              src={MAP_SRC}
              title="Apertech office location"
              className="min-h-56 w-full flex-1 rounded-2xl border border-line"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-9 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
