import TermsAndCondition from "../../pages/TermsAndConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms and Conditions - Whiimsy',
  description: 'Blah',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
const termCondition = ()=>{
    return <TermsAndCondition/>;
  
}

export default termCondition;