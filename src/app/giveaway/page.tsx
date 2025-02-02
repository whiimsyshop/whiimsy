import GiveawayPage from "../../pages/Giveway";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giveaway - Whiimsy",
  description: 'Blah',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const giveawayPage = () => {
  return <GiveawayPage />;
};

export default giveawayPage;
