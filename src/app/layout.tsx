import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makara Pati | Patili Dostlar İçin Özel Ürünler",
  description:
    "Makara Pati - Evcil hayvanlarınız için modern ve kaliteli pati ürünleri.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Makara Pati",
    description:
      "Evcil hayvanlarınız için modern ve kaliteli pati ürünleri.",
    url: "https://makarapati.com",
    siteName: "Makara Pati",
    images: [
      {
        url: "https://makarapati.com/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Makara Pati",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
