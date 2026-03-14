import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ProperlyTrade - Demo by MattyJacks.com",
    short_name: "ProperlyTrade",
    description:
      "Demo site built by MattyJacks.com. A fictional trading infrastructure SaaS showcase.",
    start_url: "/",
    display: "standalone",
    background_color: "#070a13",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
