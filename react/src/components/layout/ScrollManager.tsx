import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { splitLocale } from "@/lib/i18n";

/**
 * After client-side navigation: scroll to the "#hash" target if there is one, otherwise to the top.
 * Language switches only change the URL prefix, so they keep the scroll position.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const path = splitLocale(pathname).path;

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Wait a frame so the new page has rendered its sections.
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
