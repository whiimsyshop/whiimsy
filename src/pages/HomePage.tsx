import dynamic from "next/dynamic";
import { Suspense } from "react";
import EmailSubscription from "../components/EmailSubsctiption";
import Trust from "../components/trust";

const Faq = dynamic(() => import("@/components/Faq"), { ssr: true });

const HomePage = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="banner_main container">
            <div className="image-container">
              <img
                src="./home/HeroSection.webp"
                alt="Candle Image"
                id="candle-image"
              />
              <a href="https://whiimsy.mini.site" target="_blank">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </header>
      <Trust />
      <Faq />
      <EmailSubscription />
    </>
  );
};

export default HomePage;
