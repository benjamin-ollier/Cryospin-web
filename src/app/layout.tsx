import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cryospin — Le collier connecté qui vous rafraîchit",
  description:
    "Cryospin est un collier de refroidissement intelligent contrôlé par application. Mode automatique par seuils de température ou contrôle manuel — restez au frais en toute situation.",
  keywords: ["cryospin", "collier refroidissant", "ventilateur connecté", "ESP32", "wearable cooling"],
  openGraph: {
    title: "Cryospin — Le collier connecté qui vous rafraîchit",
    description: "Restez au frais grâce au collier de refroidissement intelligent Cryospin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
