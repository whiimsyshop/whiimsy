import dynamic from "next/dynamic";
import { Suspense } from "react";
import Cateogry from '../components/Cateogry';
import HeroSection from '../components/HeroSection';
import Trust from "../components/Trust";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmailSubscription from "../components/EmailSubsctiption";
import Heart from '../components/Heart';
import Feature from '../components/Feature';

const Faq = dynamic(() => import("@/components/Faq"), { ssr: true });

const HomePage = () => {
  return (
    <>
      <header>
      <Cateogry/>
      
      <div className="header-top">
        <div className="banner_main container">
          <div className="image-container">
            <img src="/home/HeroSection1.png" alt="Candle Image" id="candle-image" />
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
