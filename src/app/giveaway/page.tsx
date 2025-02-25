import GiveawayPage from "../../pages/Giveway";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giveaway - Whiimsy",
  description: 'Win free Whiimsy candles! Join our latest giveaway for a chance to add some aesthetic, mood-boosting scents to your collection.',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const giveawayPage = () => {
  return <GiveawayPage />;
};

export default giveawayPage;
