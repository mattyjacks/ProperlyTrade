import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 6,
            width: 20,
            height: 20,
            borderRadius: 999,
            background: "rgba(255,255,255,0.28)",
            filter: "blur(2px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 6,
            bottom: 8,
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "rgba(255,255,255,0.22)",
            filter: "blur(2px)",
          }}
        />
        <span style={{ fontSize: 40, lineHeight: 1 }}>💸</span>
      </div>
    ),
    size
  );
}
