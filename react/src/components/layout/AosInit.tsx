import { useLocation } from "react-router-dom";

import AOS from "aos";
import { useEffect } from "react";
import { splitLocale } from "@/lib/i18n";

export default function AosInit() {
  // Language switches only change the URL prefix; don't re-scan (and re-animate) for those.
  const path = splitLocale(useLocation().pathname).path;

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
  }, []);

  // Re-scan the DOM after client-side navigation.
  useEffect(() => {
    AOS.refreshHard();
  }, [path]);

  return null;
}
