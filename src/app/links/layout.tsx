import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iroha Sushi Lapa | Links",
  description:
    "Todos os links do Iroha Sushi Lapa em um só lugar. Cardápio, reservas, delivery, localização e Instagram.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
