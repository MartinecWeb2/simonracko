import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background:
            "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.4), transparent 40%), radial-gradient(circle at 85% 75%, rgba(245,200,76,0.16), transparent 32%), linear-gradient(145deg, #050505 0%, #0d0d0d 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            color: "#a78bfa",
          }}
        >
          SAJMIII
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Tvořím weby, které zaujmou během první sekundy.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: 760,
            }}
          >
            {siteConfig.name} · Web Developer
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
