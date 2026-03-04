import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fondspara.se – Jämför fonder och spara smartare",
    template: "%s | Fondspara.se",
  },
  description:
    "Jämför fonder, hitta bästa fondkontot och lär dig fondspara smart. Oberoende guider om ISK, kapitalförsäkring och månadssparande.",
  metadataBase: new URL("https://fondspara.se"),
  openGraph: {
    siteName: "Fondspara.se",
    locale: "sv_SE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
