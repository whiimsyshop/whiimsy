import Link from "../../pages/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link - Whiimsy",
  description: 'Learn more about Whiimsy—where creativity meets coziness.',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const linkPage = () => {
  return <Link />;
};

export default linkPage;
