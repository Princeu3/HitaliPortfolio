import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { siteStructuredData } from "./seo-jsonld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hitalikothari.com"),
  title: "Hitali Kothari - Portfolio",
  description:
    "Finance student at Beloit College pursuing Quantitative Economics with minors in Finance and Mathematics. Passionate about global markets and strategic investments.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://hitalikothari.com",
  },
  openGraph: {
    title: "Hitali Kothari - Portfolio",
    description:
      "Finance student at Beloit College pursuing Quantitative Economics with minors in Finance and Mathematics. Passionate about global markets and strategic investments.",
    url: "https://hitalikothari.com",
    siteName: "Hitali Kothari - Portfolio",
    images: [
      {
        url: "/thumbnail.png",
        width: 1080,
        height: 1080,
        alt: "Hitali Kothari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hitali Kothari - Portfolio",
    description:
      "Finance student at Beloit College pursuing Quantitative Economics with minors in Finance and Mathematics. Passionate about global markets and strategic investments.",
    images: ["/thumbnail.png"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
