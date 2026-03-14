import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 18,
            width: 54,
            height: 54,
            borderRadius: 999,
            background: "rgba(255,255,255,0.30)",
            filter: "blur(4px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 16,
            bottom: 22,
            width: 44,
            height: 44,
            borderRadius: 999,
            background: "rgba(255,255,255,0.22)",
            filter: "blur(4px)",
          }}
        />
        <span style={{ fontSize: 112, lineHeight: 1 }}>💸</span>
      </div>
    ),
    size
  );
}
