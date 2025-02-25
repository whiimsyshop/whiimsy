import ContactPage from "../../pages/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Whiimsy",
  description: 'Got questions or custom requests? Reach out to Whiimsy! We’d love to hear from you and help you find your perfect candle.',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const contactPage = () => {
  return <ContactPage />;
};

export default contactPage;
