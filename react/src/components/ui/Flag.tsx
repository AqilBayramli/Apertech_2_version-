import { useId } from "react";
import type { Lang } from "@/data/translations";

// Eight-pointed star of the Azerbaijani flag, centred at (680, 300).
const AZ_STAR = Array.from({ length: 16 }, (_, i) => {
  const r = i % 2 ? 26 : 50;
  const a = (i * Math.PI) / 8;
  return `${Math.round((680 + r * Math.cos(a)) * 10) / 10},${Math.round((300 + r * Math.sin(a)) * 10) / 10}`;
}).join(" ");

function UkFlag() {
  const id = useId();
  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <clipPath id={id}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function AzFlag() {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="1200" height="200" fill="#00B5E2" />
      <rect y="200" width="1200" height="200" fill="#EF3340" />
      <rect y="400" width="1200" height="200" fill="#509E2F" />
      <circle cx="570" cy="300" r="90" fill="#fff" />
      <circle cx="592" cy="300" r="75" fill="#EF3340" />
      <polygon points={AZ_STAR} fill="#fff" />
    </svg>
  );
}

function RuFlag() {
  return (
    <svg viewBox="0 0 9 6" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="9" height="2" fill="#fff" />
      <rect y="2" width="9" height="2" fill="#0039A6" />
      <rect y="4" width="9" height="2" fill="#D52B1E" />
    </svg>
  );
}

const FLAGS = { en: UkFlag, az: AzFlag, ru: RuFlag } as const;

export default function Flag({ lang, className = "" }: { lang: Lang; className?: string }) {
  const Svg = FLAGS[lang];
  return (
    <span aria-hidden className={`inline-block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10 ${className}`}>
      <Svg />
    </span>
  );
}
