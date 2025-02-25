import ReturnAndShipping from "../../pages/ReturnShippingPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Return and Shipping - Whiimsy',
  description: 'Check out Whiimsy’s return and shipping policy for hassle-free deliveries and easy returns. We’re here to make your shopping experience smooth!',
  keywords: 'Candle',
  authors: [{ name: 'Whiimsy' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
const returnCondition = ()=>{
    return <ReturnAndShipping/>;
  
}

export default returnCondition;