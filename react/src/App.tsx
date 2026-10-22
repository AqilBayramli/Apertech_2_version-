import { Navigate, useLocation } from "react-router-dom";
import AosInit from "@/components/layout/AosInit";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import ScrollManager from "@/components/layout/ScrollManager";
import ScrollTop from "@/components/layout/ScrollTop";
import { solutionDetails } from "@/data/solutions";
import { localizePath, splitLocale } from "@/lib/i18n";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import SolutionPage from "@/pages/SolutionPage";
import { LanguageProvider } from "@/providers/LanguageProvider";

const OLD_SOLUTION_SLUGS = ["genesis", "sola-erp", "sola-hr"];

/**
 * URL scheme: English has no prefix ("/", "/solutions/x"), other languages live under "/az" and "/ru".
 * The page is picked from the language-neutral path, so switching language never remounts it.
 */
function Page() {
  const { pathname, search, hash } = useLocation();

  // "/en/..." redirects to the unprefixed URL so each page has a single address.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return <Navigate to={(pathname.slice(3) || "/") + search + hash} replace />;
  }

  const { lang, path } = splitLocale(pathname);

  // Keep links to the old static site (already indexed by search engines) working.
  if (path === "/index.html") return <Navigate to={localizePath(lang, "/")} replace />;
  if (path === "/solution-detail.html") {
    const slug = new URLSearchParams(search).get("solution");
    return <Navigate to={slug && OLD_SOLUTION_SLUGS.includes(slug) ? `/solutions/${slug}` : "/#solutions"} replace />;
  }

  if (path === "/") return <HomePage />;

  const match = /^\/solutions\/([^/]+)\/?$/.exec(path);
  if (match && solutionDetails[match[1]]) return <SolutionPage slug={match[1]} />;

  return <NotFound />;
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollManager />
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
      <AosInit />
    </LanguageProvider>
  );
}
