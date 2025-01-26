import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/providers/toaster-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Barba Tech | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Barba Tech - Desenvolvedor Full Stack com experiência em frameworks como Flutter e Nest. Confira meus projetos e trabalhos.",
  keywords: [
    "desenvolvedor",
    "portfólio",
    "web developer",
    "barba tech",
    "flutter",
    "nest",
    "react",
    "nextjs",
    "dart",
    "typescript",
    "flutter developer",
    "nest developer",
    "react developer",
    "nextjs developer",
    "mobile developer",
    "web developer",
    "full stack developer",
  ],
  openGraph: {
    title: "Barba Tech | Portfólio",
    description:
      "Desenvolvedor focado em transformar ideias em soluções criativas e funcionais. Confira meus projetos e trabalhos.",
    images: ["/logo.svg"],
    url: "https://barbatech.solutions",
    siteName: "Portfólio de Barba Tech",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
