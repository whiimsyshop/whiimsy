import FreeCandle from "../../pages/FreeCandle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Candle - Whiimsy",
  description: 'Blah',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const freeCandle = () => {
  return <FreeCandle />;
};

export default freeCandle;
