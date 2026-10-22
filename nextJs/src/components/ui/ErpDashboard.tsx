"use client";

import type { Lang } from "@/data/translations";
import { useLanguage } from "@/providers/LanguageProvider";

/**
 * Illustrative ERP dashboard built in markup (no screenshot needed).
 * Figures are sample UI data for the mockup, not company statistics.
 * Mockup copy is local to this file as [en, az, ru] triples, so it follows the site language.
 */

export type ModuleId = "procurement" | "production" | "construction";

type Text = readonly [en: string, az: string, ru: string];
type Status = "approved" | "pending" | "review";
type Kpi = { label: Text; value: Text; delta: string; up: boolean };
type Row = { id: string; name: Text; amount: Text; status: Status };

const LANG_INDEX: Record<Lang, 0 | 1 | 2> = { en: 0, az: 1, ru: 2 };

const SIDEBAR: { icon: string; label: Text; module?: ModuleId }[] = [
  { icon: "bi-grid-1x2", label: ["Dashboard", "İdarə paneli", "Панель"] },
  { icon: "bi-bank", label: ["Finance", "Maliyyə", "Финансы"] },
  { icon: "bi-cart-check", label: ["Procurement", "Satınalma", "Закупки"], module: "procurement" },
  { icon: "bi-gear-wide-connected", label: ["Production", "İstehsal", "Производство"], module: "production" },
  { icon: "bi-buildings", label: ["Projects", "Layihələr", "Проекты"], module: "construction" },
  { icon: "bi-people", label: ["HR & Payroll", "HR və əməkhaqqı", "Кадры и зарплата"] },
  { icon: "bi-bar-chart-line", label: ["Reports", "Hesabatlar", "Отчёты"] },
];

const DATA: Record<ModuleId, { heading: Text; kpis: Kpi[]; bars: number[]; rows: Row[] }> = {
  procurement: {
    heading: ["Procurement overview", "Satınalma icmalı", "Обзор закупок"],
    kpis: [
      { label: ["Open requests", "Açıq sorğular", "Открытые заявки"], value: ["128", "128", "128"], delta: "12%", up: true },
      { label: ["Approved this month", "Bu ay təsdiqlənib", "Одобрено за месяц"], value: ["342", "342", "342"], delta: "8%", up: true },
      { label: ["Avg. cycle time", "Orta icra müddəti", "Ср. время цикла"], value: ["2.4 d", "2.4 gün", "2,4 дн."], delta: "18%", up: false },
    ],
    bars: [42, 58, 50, 72, 64, 88, 80],
    rows: [
      { id: "PR-2041", name: ["Steel rebar Ø16", "Polad armatur Ø16", "Арматура стальная Ø16"], amount: ["₼ 48,200", "₼ 48 200", "₼ 48 200"], status: "approved" },
      { id: "PR-2042", name: ["Office equipment", "Ofis avadanlığı", "Офисное оборудование"], amount: ["₼ 3,150", "₼ 3 150", "₼ 3 150"], status: "pending" },
      { id: "PR-2043", name: ["Hydraulic pump", "Hidravlik nasos", "Гидравлический насос"], amount: ["₼ 12,900", "₼ 12 900", "₼ 12 900"], status: "review" },
    ],
  },
  production: {
    heading: ["Production floor", "İstehsal sahəsi", "Производственный цех"],
    kpis: [
      { label: ["Active work orders", "Aktiv iş sifarişləri", "Активные заказ-наряды"], value: ["64", "64", "64"], delta: "6%", up: true },
      { label: ["Units produced", "İstehsal olunub", "Произведено единиц"], value: ["12.4k", "12.4 min", "12,4 тыс."], delta: "11%", up: true },
      { label: ["Equipment efficiency", "Avadanlıq səmərəliliyi", "Эффективность оборудования"], value: ["87%", "87%", "87%"], delta: "3%", up: true },
    ],
    bars: [55, 62, 70, 66, 78, 74, 90],
    rows: [
      { id: "WO-1187", name: ["Assembly line A", "Montaj xətti A", "Сборочная линия A"], amount: ["2,400 u", "2 400 əd.", "2 400 шт."], status: "approved" },
      { id: "WO-1188", name: ["Packaging batch 14", "Qablaşdırma partiyası 14", "Партия упаковки 14"], amount: ["1,120 u", "1 120 əd.", "1 120 шт."], status: "review" },
      { id: "WO-1189", name: ["Quality inspection", "Keyfiyyət yoxlaması", "Контроль качества"], amount: ["860 u", "860 əd.", "860 шт."], status: "pending" },
    ],
  },
  construction: {
    heading: ["Project portfolio", "Layihə portfeli", "Портфель проектов"],
    kpis: [
      { label: ["Active sites", "Aktiv obyektlər", "Активные объекты"], value: ["18", "18", "18"], delta: "2", up: true },
      { label: ["Budget utilised", "Büdcə icrası", "Освоение бюджета"], value: ["64%", "64%", "64%"], delta: "5%", up: true },
      { label: ["On schedule", "Qrafik üzrə", "В графике"], value: ["92%", "92%", "92%"], delta: "4%", up: true },
    ],
    bars: [30, 45, 52, 60, 68, 76, 84],
    rows: [
      { id: "PJ-0315", name: ["Residential block C", "Yaşayış bloku C", "Жилой блок C"], amount: ["₼ 1.2M", "₼ 1.2 mln", "₼ 1,2 млн"], status: "approved" },
      { id: "PJ-0316", name: ["Warehouse extension", "Anbarın genişləndirilməsi", "Расширение склада"], amount: ["₼ 640k", "₼ 640 min", "₼ 640 тыс."], status: "review" },
      { id: "PJ-0317", name: ["Road works, phase 2", "Yol işləri, 2-ci mərhələ", "Дорожные работы, этап 2"], amount: ["₼ 2.8M", "₼ 2.8 mln", "₼ 2,8 млн"], status: "pending" },
    ],
  },
};

const MONTHS: Text[] = [
  ["Jan", "Yan", "Янв"],
  ["Feb", "Fev", "Фев"],
  ["Mar", "Mar", "Мар"],
  ["Apr", "Apr", "Апр"],
  ["May", "May", "Май"],
  ["Jun", "İyn", "Июн"],
  ["Jul", "İyl", "Июл"],
];

const UI = {
  search: ["Search orders, vendors, projects…", "Sifariş, təchizatçı, layihə axtar…", "Поиск заказов, поставщиков, проектов…"],
  period: ["2025 · Q3", "2025 · 3-cü rüb", "2025 · III кв."],
  create: ["+ New", "+ Yeni", "+ Создать"],
  trend: ["Monthly trend", "Aylıq dinamika", "Динамика по месяцам"],
  activity: ["Recent activity", "Son əməliyyatlar", "Последние операции"],
  viewAll: ["View all", "Hamısı", "Все"],
} satisfies Record<string, Text>;

const STATUS: Record<Status, { label: Text; style: string }> = {
  approved: { label: ["Approved", "Təsdiqlənib", "Одобрено"], style: "bg-success/10 text-success" },
  pending: { label: ["Pending", "Gözləmədə", "Ожидает"], style: "bg-warning/10 text-warning" },
  review: { label: ["In review", "Baxılır", "На проверке"], style: "bg-brand-50 text-brand-700" },
};

export default function ErpDashboard({ module }: { module: ModuleId }) {
  const { lang } = useLanguage();
  const tx = (text: Text) => text[LANG_INDEX[lang]];
  const data = DATA[module];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white text-left shadow-hero" aria-hidden>
      {/* Top bar */}
      <div className="flex items-center gap-4 border-b border-line bg-white px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-slate-400">
          <i className="bi bi-search"></i>
          <span className="truncate">{tx(UI.search)}</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <i className="bi bi-bell text-slate-400"></i>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-[11px] font-bold text-white">AT</span>
        </div>
      </div>

      <div className="grid md:grid-cols-[200px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-line bg-surface/60 p-3 md:block">
          <div className="mb-4 flex items-center gap-2 px-2 pt-1">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-navy-900 text-xs font-extrabold text-white">A</span>
            <span className="text-sm font-bold text-ink">
              Aper<span className="text-accent-500">tech</span> ERP
            </span>
          </div>
          <ul className="space-y-0.5 text-[13px]">
            {SIDEBAR.map((item) => {
              const active = item.module === module;
              return (
                <li
                  key={item.icon}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors duration-300 ${
                    active ? "bg-white font-semibold text-brand-700 shadow-soft" : "text-slate-500"
                  }`}
                >
                  <i className={`bi ${item.icon} ${active ? "text-brand-600" : ""}`}></i>
                  {tx(item.label)}
                  {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent-500" />}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main */}
        <div key={module} className="animate-[fadeIn_0.45s_ease] p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{tx(UI.period)}</p>
              <p className="font-display text-lg font-bold text-ink">{tx(data.heading)}</p>
            </div>
            <span className="hidden rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white sm:inline-flex">{tx(UI.create)}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {data.kpis.map((kpi, i) => (
              <div key={i} className="rounded-xl border border-line p-3 sm:p-4">
                <p className="truncate text-[10px] font-medium text-slate-400 sm:text-xs">{tx(kpi.label)}</p>
                <p className="mt-1 font-display text-lg font-extrabold text-ink sm:text-2xl">{tx(kpi.value)}</p>
                <p className={`mt-0.5 text-[10px] font-semibold sm:text-xs ${kpi.up ? "text-success" : "text-brand-600"}`}>
                  <i className={`bi ${kpi.up ? "bi-arrow-up-right" : "bi-arrow-down-right"}`}></i> {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_1fr]">
            {/* Chart */}
            <div className="rounded-xl border border-line p-4">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-ink">{tx(UI.trend)}</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="h-2 w-2 rounded-sm bg-brand-600" /> 2025
                </span>
              </div>
              <div className="flex h-28 gap-2 sm:h-32">
                {data.bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="relative w-full flex-1">
                      <div
                        className={`absolute inset-x-0 bottom-0 origin-bottom animate-[growUp_0.7s_ease-out_both] rounded-t-md ${
                          i === data.bars.length - 1 ? "bg-brand-600" : "bg-brand-200"
                        }`}
                        style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400">{tx(MONTHS[i])}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-line">
              <div className="flex items-center justify-between border-b border-line px-4 py-3 text-xs">
                <span className="font-semibold text-ink">{tx(UI.activity)}</span>
                <span className="text-brand-600">{tx(UI.viewAll)}</span>
              </div>
              <ul className="divide-y divide-line">
                {data.rows.map((row) => (
                  <li key={row.id} className="flex items-center gap-3 px-4 py-2.5 text-xs">
                    <span className="font-mono text-[10px] text-slate-400">{row.id}</span>
                    <span className="min-w-0 flex-1 truncate font-medium text-ink">{tx(row.name)}</span>
                    <span className="hidden text-slate-500 sm:inline">{tx(row.amount)}</span>
                    <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS[row.status].style}`}>
                      {tx(STATUS[row.status].label)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
