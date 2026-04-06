import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnVousTrouve.ch | Votre site web professionnel clé en main",
  description:
    "Créez votre site web professionnel en quelques jours. Solutions clé en main pour restaurants, coiffeurs, artisans, avocats et tous les métiers. Dès 29 CHF/mois.",
  keywords: [
    "site web professionnel",
    "création site internet",
    "site clé en main",
    "Suisse",
    "restaurant",
    "coiffeur",
    "artisan",
    "avocat",
  ],
  openGraph: {
    title: "OnVousTrouve.ch | Votre site web professionnel clé en main",
    description:
      "Créez votre site web professionnel en quelques jours. Solutions clé en main pour tous les métiers. Dès 29 CHF/mois.",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: `if(window.location.hash){history.replaceState(null,'',window.location.pathname);window.scrollTo(0,0);}` }} />
        {children}
      </body>
    </html>
  );
}
