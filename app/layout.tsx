import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://absa.provincebridge.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Absa × SchoolBridge — Partner Microsite",
  description:
    "Win the next generation before they choose their first bank. A first-mover school ecosystem partnership that gives Absa a trusted digital channel to learners, parents, teachers and school communities.",
  keywords: [
    "Absa",
    "SchoolBridge",
    "ProvinceBridge",
    "South Africa",
    "Youth Banking",
    "Financial Inclusion",
    "Financial Literacy",
    "School Partnership",
  ],
  applicationName: "Absa × SchoolBridge",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Absa × SchoolBridge",
    title: "Absa × SchoolBridge — Partner Microsite",
    description:
      "Win the next generation before they choose their first bank. A first-mover school ecosystem partnership giving Absa a trusted digital channel to learners, parents and teachers.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Absa × SchoolBridge — Partner Microsite" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absa × SchoolBridge — Partner Microsite",
    description:
      "Win the next generation before they choose their first bank. A first-mover school ecosystem partnership for Absa.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
