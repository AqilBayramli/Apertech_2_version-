import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

// Social preview card (Facebook, LinkedIn, WhatsApp, X…). Also used as the Twitter image via metadata.
export const alt = "Apertech — ERP Solutions & Software Development in Baku, Azerbaijan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/logoAnar.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a1530 0%, #111f45 55%, #1d40ad 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", background: "white", borderRadius: 24, padding: "18px 28px" }}>
            <img src={logoSrc} height={84} alt="" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>ERP Solutions & Software Development</div>
          <div style={{ fontSize: 32, color: "#9cb6fb" }}>Infor SunSystems · Genesis Soft · Sola ERP · Sola HR</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#c3d3ff" }}>
          <span>Baku, Azerbaijan</span>
          <span>{new URL(SITE.url).host}</span>
        </div>
      </div>
    ),
    size,
  );
}
