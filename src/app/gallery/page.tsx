import Gallery from "../../pages/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Whiimsy",
  description: "Explore our vibrant gallery of aesthetic and Pinterest-inspired home décor and candles. Get inspired with Whiimsy's unique collection!",
  keywords: "candles, home decor, aesthetic candles, Pinterest-inspired, scented candles, Whiimsy, handcrafted candles, premium candles",
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const galleryPage = () => {
  return <Gallery />;
};

export default galleryPage;
