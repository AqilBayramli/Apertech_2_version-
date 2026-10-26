import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [active, setActive] = useState(false);
  // How far the footer's copyright bar has come into view; the button is lifted by that much.
  const [lift, setLift] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 500);
      const bar = document.getElementById("footer-bottom");
      setLift(bar ? Math.max(0, window.innerHeight - bar.getBoundingClientRect().top) : 0);
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ bottom: 24 + lift }}
      className={`fixed right-6 z-40 grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-xl text-white shadow-lift transition-[opacity,transform,background-color] duration-300 hover:bg-brand-700 ${
        active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
