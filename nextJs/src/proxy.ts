import { NextResponse, type NextRequest } from "next/server";

/**
 * English has no URL prefix: "/about" is served by the internal "/en/about" route.
 * "/en/..." itself redirects to the unprefixed URL so each page has a single address.
 * "/az/..." and "/ru/..." pass straight through to app/[lang].
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/az" || pathname === "/ru" || pathname.startsWith("/az/") || pathname.startsWith("/ru/")) return;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    // Generated metadata images (opengraph-image) are referenced with the internal prefix.
    if (pathname.includes("opengraph-image")) return;
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, metadata files and anything with a file extension (public assets).
  matcher: ["/((?!_next|api|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)"],
};
