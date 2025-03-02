import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import AnalyticsTracker from "../components/AnalyticsTracker";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";

import { Kaisei_Tokumin, Kantumruy_Pro, Inknut_Antiqua } from "@next/font/google";

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

const GA_TRACKING_ID = "G-JGVYE0JRWB"; // Define GA ID

export const metadata: Metadata = {
  title: {
    template: "%s | Whiimsy",
    default: "Whiimsy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Standard favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Whiimsy" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Illuminate your space with handcrafted premium candles, featuring soothing aromas and elegant designs for every mood."
        />
        <meta name="author" content="Mohit Singh" />
        <meta name="robots" content="index, follow" />

        {/* Microsoft Clarity */}
        <Script
        id="my-script-1"
        strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y) {
                c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "qhwsb4z81l");
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>

      <body
        className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}
      >
        <Navbar />
        {children}
        <AnalyticsTracker />
        <ClientFooter />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
