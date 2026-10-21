"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 500);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-xl text-white shadow-lift transition-all duration-300 hover:bg-brand-700 ${
        active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
