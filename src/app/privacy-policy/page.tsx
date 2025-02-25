import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy - Whiimsy',
  description: 'Your privacy matters to us. Read Whiimsy’s Privacy Policy to understand how we collect, use, and protect your personal data.',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
const privacyPolicy = ()=>{
    return <PrivacyPolicy/> ;
}

export default privacyPolicy;