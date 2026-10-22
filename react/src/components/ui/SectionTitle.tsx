
import { useLanguage } from "@/providers/LanguageProvider";

type Props = {
  title?: string; // translation key, shown as a small label chip
  subtitle: string; // translation key
  description?: string; // translation key (brand-colored part)
  lead?: string; // optional translation key for a short intro paragraph
  dark?: boolean;
  className?: string;
};

export default function SectionTitle({ title, subtitle, description, lead, dark = false, className = "" }: Props) {
  const { t } = useLanguage();

  return (
    <div className={`mx-auto mb-12 max-w-3xl text-center md:mb-14 ${className}`} data-aos="fade-up">
      {title && (
        <span className={`chip mb-5 ${dark ? "!border-white/15 !bg-white/10 !text-brand-200" : ""}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand-300" : "bg-accent-500"}`} />
          {t(title)}
        </span>
      )}
      <h2 className={`text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${dark ? "!text-white" : ""}`}>
        {t(subtitle).replace(/ |&nbsp;/g, " ")}
        {description && (
          <>
            {" "}
            <span className={dark ? "text-brand-300" : "text-brand-600"}>{t(description)}</span>
          </>
        )}
      </h2>
      {lead && <p className={`mx-auto mt-5 max-w-2xl text-lg ${dark ? "text-slate-300" : ""}`}>{t(lead)}</p>}
    </div>
  );
}
