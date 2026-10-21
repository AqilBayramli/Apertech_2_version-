import type { MetadataRoute } from "next";
import { SEO_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Apertech ERP Solutions",
    short_name: "Apertech",
    description: SEO_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2450d4",
    icons: [{ src: "/images/logoAnar.png", sizes: "any", type: "image/png" }],
  };
}
