import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DemoBanner } from "@/components/demo-banner";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "ProperlyTrade - Demo Site by MattyJacks.com",
    template: "%s | ProperlyTrade Demo",
  },
  description:
    "Demo site built by MattyJacks.com. ProperlyTrade is a fictional SaaS product showcase. No warranties provided. Sole proprietorship in New Hampshire, USA.",
  keywords: [
    "ProperlyTrade",
    "MattyJacks",
    "demo site",
    "trading infrastructure",
    "prop firm",
    "SaaS demo",
    "portfolio",
    "Next.js",
  ],
  authors: [{ name: "Matt - MattyJacks.com", url: "https://mattyjacks.com" }],
  creator: "MattyJacks.com",
  openGraph: {
    title: "💸 ProperlyTrade - Demo Site by MattyJacks.com",
    description:
      "Demo site built by MattyJacks.com. A fictional trading infrastructure SaaS showcase. No warranties.",
    type: "website",
    siteName: "ProperlyTrade Demo",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "💸 ProperlyTrade - Demo Site by MattyJacks.com",
    description:
      "Demo site built by MattyJacks.com. Fictional trading SaaS showcase.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
    shortcut: "/favicon.ico",
  },
  other: {
    "theme-color": "#070a13",
  },
};

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://api.openai.com" />
        <link rel="dns-prefetch" href="https://openrouter.ai" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.className} antialiased bg-[hsl(225,25%,4%)] text-white overflow-x-hidden`}
      >
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        {children}
        <DemoBanner />
      </body>
    </html>
  );
}
