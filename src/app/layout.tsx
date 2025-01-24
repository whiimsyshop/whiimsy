/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
// import "./globals.css";
import Script from "next/script";
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
    template: "%s | VPNs Guide",
    default: "VPNs Guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}
      >
        <div>
          <Navbar />
          {children}
          <ClientFooter />
        </div>
      </body>
    </html>
  );
}
