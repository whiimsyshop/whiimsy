import GivewayPage from "../../pages/Giveway";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giveway - Whiimsy",
  description: 'Blah',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const givewayPage = () => {
  return <GivewayPage />;
};

export default givewayPage;
