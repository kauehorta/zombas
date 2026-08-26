import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kauehorta.github.io/zombas/"),
  title: {
    default: "Zombas | Manual do sobrevivente",
    template: "%s | Zombas",
  },
  description:
    "Guia prático do Zombas: primeiros dias, progressão, mods, regras e como continuar depois de uma morte ruim.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Zombas",
    title: "Zombas | Manual do sobrevivente",
    description:
      "O básico do Zombas para não morrer por falta de informação. O excesso de confiança fica por sua conta.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zombas, Manual do sobrevivente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zombas | Manual do sobrevivente",
    description:
      "O básico do Zombas para não morrer por falta de informação. O excesso de confiança fica por sua conta.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

