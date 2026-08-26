import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zombas-manual.khorta.chatgpt.site"),
  title: {
    default: "Zombas | Manual do sobrevivente",
    template: "%s | Zombas",
  },
  description:
    "Guia público do Zombas para sobreviver aos primeiros dias, reencontrar o grupo e continuar depois de uma morte ruim.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Zombas",
    title: "Zombas | Manual do sobrevivente",
    description:
      "Skills, sobrevivência, veículos, cozinha, regras e tudo que você queria saber antes da próxima morte ruim.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zombas, Manual do sobrevivente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zombas | Manual do sobrevivente",
    description:
      "Skills, sobrevivência, veículos, cozinha, regras e tudo que você queria saber antes da próxima morte ruim.",
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

