import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Makara Pati | Patili Dostlar İçin Özel Ürünler',
  description: 'Makara Pati - Evcil hayvanlarınız için en sevimli, eğlenceli ve kaliteli ürünlerin adresi. Kedi, köpek ve kuş ürünleri için WhatsApp üzerinden hızlı sipariş verin.',
  keywords: 'pet shop, evcil hayvan ürünleri, kedi malzemeleri, köpek malzemeleri, makara pati, konya petshop',
  openGraph: {
    title: 'Makara Pati',
    description: 'Patili dostlarınız için modern ve kaliteli pet ürünleri.',
    url: 'https://makarapati.com',
    siteName: 'Makara Pati',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}