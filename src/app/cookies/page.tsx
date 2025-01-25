import CookiesPolicy from "../../pages/Cookies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cookies Policy - Whiimsy',
  description: 'Blah',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
const cookiespolicy = ()=>{
    return <CookiesPolicy/>;
}

export default cookiespolicy;