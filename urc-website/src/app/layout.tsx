import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://urc.unc.edu"),
  title: {
    default: "URC@UNC - Undergraduate Research Conference",
    template: "%s | URC@UNC",
  },
  description:
    "The inaugural Undergraduate Research Conference at UNC Chapel Hill brings together 200 student researchers for presentations, professional development, and recognition. October 2-3, 2026.",
  keywords: [
    "undergraduate research",
    "UNC Chapel Hill",
    "research conference",
    "student research",
    "academic conference",
    "North Carolina",
  ],
  authors: [{ name: "URC@UNC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urc.unc.edu",
    siteName: "URC@UNC",
    title: "URC@UNC - Undergraduate Research Conference",
    description: "The inaugural Undergraduate Research Conference at UNC Chapel Hill. October 2-3, 2026.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#13294B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <SmoothScroll>
          <PageTransition />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
