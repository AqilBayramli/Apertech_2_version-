
import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useRef, useState } from "react";
import { countryList, countryTranslationsAZ, solutionOptions } from "@/data/form-options";
import { EMAILJS } from "@/lib/config";
import { isValidEmail, isValidPhone, sanitizePhone } from "@/lib/validation";
import { useLanguage } from "@/providers/LanguageProvider";

type FieldName = "name" | "email" | "phone" | "country" | "company" | "solutions" | "website" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = { name: "", email: "", phone: "", country: "", company: "", solutions: "", website: "", message: "" };

type FieldProps = {
  name: FieldName;
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  kind?: "input" | "select" | "textarea";
  type?: string;
  required?: boolean;
  half?: boolean;
  icon?: string;
  children?: React.ReactNode;
};

function Field({
  name,
  id,
  label,
  value,
  error,
  onChange,
  kind = "input",
  type = "text",
  required = true,
  half = true,
  icon,
  children,
}: FieldProps) {
  const hasValue = value !== "";
  const pad = icon ? "pl-11" : "pl-4";

  const common = {
    id,
    name,
    value,
    required,
    className: `w-full rounded-xl border bg-surface/60 py-3.5 ${pad} pr-10 text-sm text-ink outline-none transition focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10 ${
      error ? "border-red-400" : "border-line hover:border-slate-300"
    } ${kind === "select" ? "cursor-pointer appearance-none" : ""}`,
  };

  return (
    <div className={half ? "sm:col-span-1" : "sm:col-span-2"}>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <div className="relative">
        {icon && (
          <i
            className={`bi ${icon} pointer-events-none absolute left-4 text-slate-400 ${kind === "textarea" ? "top-3.5" : "top-1/2 -translate-y-1/2"}`}
          ></i>
        )}
        {kind === "select" ? (
          <select {...common} onChange={(e) => onChange(e.target.value)}>
            {children}
          </select>
        ) : kind === "textarea" ? (
          <textarea {...common} rows={5} className={`${common.className} resize-y`} onChange={(e) => onChange(e.target.value)} />
        ) : (
          <input {...common} type={type} onChange={(e) => onChange(e.target.value)} />
        )}
        {kind === "select" && !hasValue && (
          <i className="bi bi-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
        )}
        {hasValue && (
          <button
            type="button"
            aria-label="Clear"
            title="Clear"
            onClick={() => onChange("")}
            className={`absolute right-2.5 grid h-6 w-6 place-items-center rounded-full text-lg leading-none text-slate-400 transition hover:bg-red-50 hover:text-red-500 ${
              kind === "textarea" ? "top-2.5" : "top-1/2 -translate-y-1/2"
            }`}
          >
            &times;
          </button>
        )}
      </div>
      {error && (
        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
          <i className="bi bi-exclamation-circle"></i>
          {error}
        </span>
      )}
    </div>
  );
}

type Option = { value: string; label: string; icon: React.ReactNode };

type RichSelectProps = {
  id: string;
  label: string;
  placeholderIcon: string;
  searchPlaceholder?: string;
  value: string;
  error?: string;
  options: Option[];
  onChange: (value: string) => void;
};

const flag = (code: string) => (
  <span className={`fi fi-${code.toLowerCase()} shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]`}></span>
);

const sectorIcon = (icon: string) => (
  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand-50 text-xs text-brand-600">
    <i className={`bi ${icon}`}></i>
  </span>
);

function RichSelect({ id, label, placeholderIcon, searchPlaceholder, value, error, options, onChange }: RichSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);
  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLocaleLowerCase().includes(q) || o.value.toLowerCase().includes(q));
  }, [options, query]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    (searchRef.current ?? listRef.current)?.focus();
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const toggle = () => {
    if (!open) {
      setQuery("");
      setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    }
    setOpen(!open);
  };

  const choose = (o: Option) => {
    onChange(o.value);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[active]) choose(filtered[active]);
    }
  };

  return (
    <div className="sm:col-span-1">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
        <span className="text-brand-600"> *</span>
      </label>
      <div ref={rootRef} className="relative" onKeyDown={open ? onKeyDown : undefined}>
        <button
          id={id}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={toggle}
          className={`flex w-full items-center gap-3 rounded-xl border bg-surface/60 py-3.5 pl-4 pr-10 text-left text-sm text-ink outline-none transition focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10 ${
            error ? "border-red-400" : open ? "border-brand-600 bg-white ring-4 ring-brand-600/10" : "border-line hover:border-slate-300"
          }`}
        >
          {selected ? selected.icon : <i className={`bi ${placeholderIcon} text-slate-400`}></i>}
          <span className="min-h-5 truncate">{selected?.label}</span>
        </button>
        {value ? (
          <button
            type="button"
            aria-label="Clear"
            title="Clear"
            onClick={() => onChange("")}
            className="absolute right-2.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-lg leading-none text-slate-400 transition hover:bg-red-50 hover:text-red-500"
          >
            &times;
          </button>
        ) : (
          <i
            className={`bi bi-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 transition ${
              open ? "rotate-180" : ""
            }`}
          ></i>
        )}

        {open && (
          <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_45px_-15px_rgba(15,23,42,0.35)]">
            {searchPlaceholder && (
            <div className="relative border-b border-line p-2">
              <i className="bi bi-search pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
              <input
                ref={searchRef}
                type="text"
                value={query}
                placeholder={searchPlaceholder}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                className="w-full rounded-lg bg-surface py-2 pl-9 pr-3 text-sm text-ink outline-none focus:ring-2 focus:ring-brand-600/20"
              />
            </div>
            )}
            <ul ref={listRef} role="listbox" tabIndex={-1} className="max-h-64 overflow-y-auto py-1 outline-none">
              {filtered.map((o, i) => (
                <li
                  key={o.value}
                  role="option"
                  aria-selected={o.value === value}
                  data-index={i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(o)}
                  className={`flex cursor-pointer items-center gap-3 px-4 py-2 text-sm transition ${
                    i === active ? "bg-brand-50 text-brand-700" : "text-ink"
                  } ${o.value === value ? "font-semibold" : ""}`}
                >
                  {o.icon}
                  <span className="truncate">{o.label}</span>
                  {o.value === value && <i className="bi bi-check2 ml-auto text-brand-600"></i>}
                </li>
              ))}
              {filtered.length === 0 && <li className="px-4 py-3 text-center text-sm text-slate-400">—</li>}
            </ul>
          </div>
        )}
      </div>
      {error && (
        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
          <i className="bi bi-exclamation-circle"></i>
          {error}
        </span>
      )}
    </div>
  );
}

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  // Intl.DisplayNames output differs between Node (SSR) and browsers, so localized
  // country names are only computed after hydration to avoid a mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 5000);
    return () => clearTimeout(timer);
  }, [sent]);

  const countries = useMemo(() => {
    let displayNames: Intl.DisplayNames | null = null;
    if (mounted) {
      try {
        displayNames = new Intl.DisplayNames([lang], { type: "region" });
      } catch {
        displayNames = null;
      }
    }
    return countryList.map((country) => ({
      value: country.value,
      icon: flag(country.code),
      label:
        (lang === "az" && countryTranslationsAZ[country.code]) ||
        country.translations?.[lang] ||
        displayNames?.of(country.code) ||
        country.value,
    }));
  }, [lang, mounted]);

  const sectors = useMemo(
    () => solutionOptions.map(({ value, key, icon }) => ({ value, label: t(key, value), icon: sectorIcon(icon) })),
    [t],
  );

  const set = (name: FieldName) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: name === "phone" ? sanitizePhone(value) : value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = (): Errors => {
    const required = t("contact.validation.required");
    const next: Errors = {};

    if (!values.name) next.name = required;
    if (!values.email) next.email = required;
    else if (!isValidEmail(values.email)) next.email = "Please enter a valid email address";
    if (!values.phone) next.phone = required;
    else if (!isValidPhone(values.phone)) next.phone = "Please enter a valid phone number (0-9; min 9 - max 14 digits)";
    if (!values.country) next.country = required;
    if (!values.company) next.company = required;
    if (!values.solutions) next.solutions = required;
    if (!values.message) next.message = required;

    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: values.name,
          email: values.email,
          message: values.message,
          number: values.phone,
          country: values.country,
          companyName: values.company,
          solutions: values.solutions,
          website: values.website,
        },
        { publicKey: EMAILJS.publicKey },
      );
      setValues(EMPTY);
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {sent && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4 text-sm font-medium text-success"
        >
          <i className="bi bi-check-circle-fill mt-0.5 text-lg"></i>
          <span>{t("contact.success")}</span>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            icon="bi-person"
            name="name"
            id="contactName"
            label={t("contact.form.name")}
            value={values.name}
            error={errors.name}
            onChange={set("name")}
          />
          <Field
            icon="bi-envelope"
            name="email"
            id="contactEmail"
            type="email"
            label={t("contact.form.email")}
            value={values.email}
            error={errors.email}
            onChange={set("email")}
          />
          <Field
            icon="bi-telephone"
            name="phone"
            id="phoneNumber"
            type="tel"
            label={t("contact.form.phone")}
            value={values.phone}
            error={errors.phone}
            onChange={set("phone")}
          />
          <RichSelect
            id="contactCountry"
            label={t("contact.form.country")}
            placeholderIcon="bi-globe2"
            searchPlaceholder={t("contact.form.country_search")}
            value={values.country}
            error={errors.country}
            options={countries}
            onChange={set("country")}
          />
          <Field
            icon="bi-building"
            name="company"
            id="companyName"
            label={t("contact.form.company")}
            value={values.company}
            error={errors.company}
            onChange={set("company")}
          />
          <RichSelect
            id="companySolutions"
            label={t("contact.form.sector")}
            placeholderIcon="bi-briefcase"
            searchPlaceholder={t("contact.form.sector_search")}
            value={values.solutions}
            error={errors.solutions}
            options={sectors}
            onChange={set("solutions")}
          />
          <Field
            icon="bi-link-45deg"
            name="website"
            id="companyWeb"
            type="url"
            half={false}
            required={false}
            label={t("contact.form.website")}
            value={values.website}
            onChange={set("website")}
          />
          <Field
            icon="bi-chat-left-text"
            name="message"
            id="msg"
            kind="textarea"
            half={false}
            label={t("contact.form.message")}
            value={values.message}
            error={errors.message}
            onChange={set("message")}
          />

          <div className="sm:col-span-2">
            <button type="submit" className="btn btn-primary w-full !py-4" disabled={sending}>
              {sending ? <i className="bi bi-arrow-repeat animate-spin"></i> : <i className="bi bi-send"></i>}
              {t("contact.form.send")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
