
import { useEffect, useRef } from "react";

/**
 * Calls `onMatch(value)` when the URL hash is `#<prefix>-<value>`, on mount and on every
 * hashchange. Site search uses this to open the matching FAQ item or Experience tab.
 */
export function useHashTarget(prefix: string, onMatch: (value: string) => void) {
  const cb = useRef(onMatch);
  cb.current = onMatch;

  useEffect(() => {
    const check = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash.startsWith(`${prefix}-`)) cb.current(hash.slice(prefix.length + 1));
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [prefix]);
}
