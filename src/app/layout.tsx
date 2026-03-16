import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GALA — El arte de regalar con estrategia | Regalos Corporativos",
  description:
    "40 años transformando obsequios corporativos en piezas de comunicación estratégica. Regalos empresariales personalizados para empresas en Argentina.",
  keywords: [
    "regalos corporativos",
    "regalos empresariales",
    "merchandising corporativo",
    "kits corporativos",
    "regalos fin de año empresas",
    "regalos personalizados empresas Argentina",
  ],
  openGraph: {
    title: "GALA — El arte de regalar con estrategia",
    description:
      "40 años transformando obsequios corporativos en piezas de comunicación estratégica.",
    type: "website",
    locale: "es_AR",
    siteName: "GALA Regalos Corporativos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-gala-cream text-gala-charcoal overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
