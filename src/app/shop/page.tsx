import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Shop Now - Whiimsy",
  description: "Discover Whiimsy’s handcrafted candles, designed to add warmth and charm to your space. Shop now for aesthetic, Pinterest-worthy pieces!",
  keywords: "Candle",
  authors: [{ name: "Whiimsy" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function ShopPage() {
  redirect("https://whiimsy.mini.site");
  return null; // Ensures nothing renders
}