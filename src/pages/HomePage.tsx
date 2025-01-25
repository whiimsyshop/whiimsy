import dynamic from "next/dynamic";
import { Suspense } from "react";
import EmailSubscription from "../components/EmailSubsctiption";

const Faq = dynamic(() => import("@/components/Faq"), { ssr: true });

const HomePage = () => {
  return (
    <main className="flex flex-col main-bg">
      <div>
      We pour our hearts into creating candles with the finest ingredients, 
      hoping to fill your home with beautiful scents and a warm, cozy glow.
      <img src="/demo.png" alt="hometag" />
      This is home page
    </div>
        <Faq/>
    </main>
  );
}

function App() {
  return <EmailSubscription />;
}

export default HomePage;