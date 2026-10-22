import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep links to the old static site (already indexed by search engines) working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/solution-detail.html",
        has: [{ type: "query", key: "solution", value: "(?<slug>genesis|sola-erp|sola-hr)" }],
        destination: "/solutions/:slug",
        permanent: true,
      },
      { source: "/solution-detail.html", destination: "/#solutions", permanent: true },
    ];
  },
};

export default nextConfig;
