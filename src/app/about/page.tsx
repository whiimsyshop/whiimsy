import About from "../../pages/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Whiimsy",
  description: 'Learn more about Whiimsy—where creativity meets coziness. Our handcrafted candles are made with love to bring warmth and whimsy into your home.',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const aboutPage = () => {
  return <About />;
};

export default aboutPage;
