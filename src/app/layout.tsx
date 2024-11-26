import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Descubre los 7 Pasos hacia tu Propio Negocio | Taller de Emprendimiento Estratégico",
  description:
    "Aprende a lanzar y hacer crecer tu negocio con nuestro taller de emprendimiento estratégico. Descubre cómo desarrollar un Producto Mínimo Viable (MVP), diseñar modelos de negocio innovadores y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="/mailer.js" strategy="afterInteractive" />
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-9Z7WB076ZK" />
    </html>
  );
}
