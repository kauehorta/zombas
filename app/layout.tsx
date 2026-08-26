import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zombas | Manual do sobrevivente",
    template: "%s | Zombas",
  },
  description:
    "Guia público do Zombas para sobreviver aos primeiros dias, reencontrar o grupo e continuar depois de uma morte ruim.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
