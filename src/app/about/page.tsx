import About from "../../pages/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Whiimsy",
  description: 'Blah',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const aboutPage = () => {
  return <About />;
};

export default aboutPage;
