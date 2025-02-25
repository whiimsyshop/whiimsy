import TermsAndCondition from "../../pages/TermsAndConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms and Conditions - Whiimsy',
  description: 'Read Whiimsy’s Terms & Conditions for details on shopping, returns, and more. Know your rights while enjoying our products!',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
const termCondition = ()=>{
    return <TermsAndCondition/>;
  
}

export default termCondition;