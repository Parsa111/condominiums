import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "YCC 76 | Crescent Town Condominium Corporation",
  description: "Official portal for York Condominium Corporation No. 76 (Crescent Town) - One of the largest condominiums in Canada with 1,420 units in 6 buildings.",
  keywords: ["condominium corporation", "YCC 76", "Crescent Town", "Toronto condos", "condo by-laws", "resident notices", "property management"],
  authors: [{ name: "YCC 76 Board of Directors" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className={plusJakarta.className}>
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1, minHeight: "calc(100vh - 200px)" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
