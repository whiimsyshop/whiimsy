import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsappButton";
import BackToTop from "@/components/BackToTop";

import {
  Kaisei_Tokumin,
  Kantumruy_Pro,
  Inknut_Antiqua,
} from "@next/font/google";

import ClientFooter from "../components/ClientFooter";
import Navbar from "@/components/Navbar";

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kantumruyPro",
});
const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kaiseiTokumin",
});
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inknutAntiqua",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Whiimsy",
    default: "Whiimsy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <head>
     {/* <!-- Standard favicon --> */}
    <link rel="shortcut icon" href="/favicon.ico" />
    {/* <!-- Recommended favicon size for general browser display --> */}
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    {/* <!-- Apple Touch Icon (at least 200x200px) --> */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Whiimsy" />
    {/* <!-- The Web App Manifest --> */}
    <link rel="manifest" href="/site.webmanifest" />

    {/* <!-- SEO Meta Tags --> */}
    <meta
          name="description"
          content="Discover premium handcrafted candles for every mood, from soothing aromatherapy to elegant decor. Illuminate your space with eco-friendly, long-lasting fragrances.."
        />
        <meta name="author" content="Mohit Singh" />

        {/* <!-- Meta Robots --> */}
        <meta name="robots" content="index, follow" />

        {/* Microsost Clarity */}

        {/* Google Analytics */}


    </head>

      <body
        className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}
      >
        <div>
          <Navbar />
          {children}
          <ClientFooter />
        </div>
        <WhatsAppButton/>
        <BackToTop/>
      </body>
    </html>
  );
}
