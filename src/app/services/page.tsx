import Services from "../../pages/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Whiimsy",
  description: 'Explore Whiimsy’s services, from custom candle orders to bulk gifting and collaborations. Let’s create something magical together!',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const servicesPage = () => {
  return <Services />;
};

export default servicesPage;
