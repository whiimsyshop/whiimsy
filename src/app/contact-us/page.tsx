import ContactPage from "../../pages/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - VPNs Guide",
  description:
    "Get in touch with us for any inquiries, support, or feedback. We are here to help you with any questions you may have.Here are other ways to connect with us: Call: +91 6291925441; Mail: mhvpnguide@gmail.com; Location: Kolkata, West Bengal, India.",
  keywords:
    "VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Contact Us",
  authors: [{ name: "VPNsGuide" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
const contactPage = () => {
  return <ContactPage />;
};

export default contactPage;
