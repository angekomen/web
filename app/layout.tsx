import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aangekomen.mx"),
  title: {
    default: "Desarrolladora Aangekomen — Construcción, infraestructura y desarrollo",
    template: "%s · Aangekomen",
  },
  description:
    "Desarrolladora Aangekomen, S.A. de C.V. Construcción de obras públicas y privadas, edificación, infraestructura energética, hidráulica, telecomunicaciones y servicios urbanos.",
  keywords: [
    "constructora",
    "desarrolladora",
    "obra civil",
    "infraestructura",
    "edificación",
    "Aangekomen",
    "México",
  ],
  openGraph: {
    title: "Desarrolladora Aangekomen",
    description:
      "Construcción, infraestructura y desarrollo. Capacidad técnica para proyectos públicos y privados a gran escala.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
