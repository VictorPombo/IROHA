import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irohalapa.com.br"),
  title: "Iroha Sushi Lapa | Melhor Rodízio Japonês no Alto da Lapa - SP",
  description:
    "Desde 2008, o Iroha Sushi Lapa é referência em culinária japonesa no Alto da Lapa, São Paulo. Rodízio tradicional e especial, à la carte premium. ★ 4.6 no Google com +3.000 avaliações. Reserve agora!",
  keywords: [
    "restaurante japonês Alto da Lapa",
    "rodízio japonês Lapa SP",
    "sushi Lapa São Paulo",
    "melhor sushi Alto da Lapa",
    "rodízio japonês São Paulo zona oeste",
    "Iroha Sushi Lapa",
    "restaurante japonês São Paulo",
    "sashimi Alto da Lapa",
    "temaki Lapa",
    "comida japonesa zona oeste SP",
  ],
  authors: [{ name: "Iroha Sushi Lapa" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://irohalapa.com.br",
    siteName: "Iroha Sushi Lapa",
    title: "Iroha Sushi Lapa | Melhor Rodízio Japonês no Alto da Lapa - SP",
    description:
      "Desde 2008, o Iroha Sushi Lapa é referência em culinária japonesa no Alto da Lapa, São Paulo. Rodízio tradicional e especial, à la carte premium. Reserve agora!",
    images: [
      {
        url: "/images/hero-sushi.png",
        width: 1200,
        height: 630,
        alt: "Iroha Sushi Lapa - Sushi premium no Alto da Lapa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iroha Sushi Lapa | Melhor Rodízio Japonês no Alto da Lapa - SP",
    description:
      "Desde 2008, culinária japonesa premium no Alto da Lapa. ★ 4.6 no Google. Reserve agora!",
    images: ["/images/hero-sushi.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://irohalapa.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Iroha Sushi Lapa",
  image: "https://irohalapa.com.br/images/hero-sushi.png",
  url: "https://irohalapa.com.br",
  telephone: "+551130225825",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Cerro Corá, 448",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "05061-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5405514,
    longitude: -46.7015153,
  },
  servesCuisine: "Japanese",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "3000",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "11:30",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "18:30",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Cardápio Iroha Sushi Lapa",
    url: "https://irohalapa.com.br/#cardapio",
  },
  acceptsReservations: "True",
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
