import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kauehorta.github.io/zombas/"),
  title: {
    default: "Zombas | Portal do sobrevivente",
    template: "%s | Zombas",
  },
  description:
    "Portal do Zombas: guia do novato, guia do veterano, regras e a lista atual de mods.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Zombas",
    title: "Zombas | Portal do sobrevivente",
    description:
      "O básico do Zombas para não morrer por falta de informação. O excesso de confiança fica por sua conta.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zombas, Portal do sobrevivente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zombas | Portal do sobrevivente",
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
