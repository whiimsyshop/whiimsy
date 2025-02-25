import dynamic from "next/dynamic";
import { Suspense } from "react";
import EmailSubscription from "../components/EmailSubsctiption";
import Trust from "../components/Trust";
import Heart from '../components/Heart';
import Cateogry from '../components/Cateogry';
import Feature from '../components/Feature';
import WhyChooseUs from "@/components/WhyChooseUs";

const Faq = dynamic(() => import("@/components/Faq"), { ssr: true });

const HomePage = () => {
  return (
    <>
      <header>
      <Cateogry/>
      
      <div className="header-top">
        <div className="banner_main container">
          <div className="image-container">
            <img src="/home/HeroSection.jpg" alt="Candle Image" id="candle-image" />
            <a href="/shop" target="_blank" className="shop-now-button">
              Shop Now
            </a>
         </div>
        </div>
      </div>

      </header>
      
      <Trust />
      <Faq />
      <WhyChooseUs/>
      <EmailSubscription />
          <div className="flex justify-center my-4"> {/* New container for centering */}
                <Heart />
          </div>
      <Feature/>
    </>
  );
};

export default HomePage;
