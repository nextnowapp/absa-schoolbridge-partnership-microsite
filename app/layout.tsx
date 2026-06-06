import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Absa × SchoolBridge — Partner Microsite",
  description: "A first-mover school ecosystem partnership that gives Absa a trusted digital channel to learners, parents, teachers and school communities.",
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
