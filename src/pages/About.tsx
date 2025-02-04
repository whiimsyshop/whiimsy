import React from 'react';
import Image from "next/image";
import Link from "next/link";
import HeaderBox from '@/components/HeaderBox';
import Heart from '@/components/Heart';

const About: React.FC = () => {
    return (
        <main className="about-main laptop:px-0 laptop:w-full flex flex-col justify-center items-center">
            {/* -------------------------- About Us Start -------------------------- */}
            <div className="w-full">
                <HeaderBox title="About Us" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="h-[160px] tablet:h-[250px] laptop:h-[300px] aspect-video relative mb-8">
                        <Image
                            src="/demo.jpg"
                            alt="About"
                            layout="fill" // Use `layout` instead of `fill` for Next.js Image component
                            className="mt-4 tablet:mt-6 laptop:mt-8"
                        />
                </div>
                <div className="flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 lg:px-40 text-gray-700">
                  <p className="text-left text-base sm:text-lg md:text-xl mb-4 font-medium">
                   <strong>Each Whiimsy candle is a labor of love—an extension of our slow-living philosophy, thoughtfully designed to help you drift off to a happy space.</strong>
                  </p>
                  <p className="text-left text-base sm:text-lg md:text-xl mb-4 font-medium">
                   At Whiimsy, we believe a great candle is more than just a source of light—it's an experience, a memory, a mood. Our passion for premium scented candles drives us to craft luxurious, handcrafted pieces that illuminate spaces and uplift spirits.
                  </p>
                  <p className="text-left text-base sm:text-lg md:text-xl mb-4 font-medium">
                  Inspired by the enchanting power of scents and the art of candle-making, Whiimsy was born to bring warmth and elegance into every home. What began as a small project has grown into a beloved brand, cherished by candle enthusiasts worldwide.
                  </p>
                </div>
            </div>
            {/* -------------------------- About Us End -------------------------- */}

            {/* -------------------------- About Our Product Start -------------------------- */}
            <div className="w-full">
                <HeaderBox title="About our Product" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="h-[160px] tablet:h-[250px] laptop:h-[300px] aspect-video relative mb-8">
                        <Image
                            src="/demo.jpg"
                            alt="About"
                            layout="fill" // Use `layout` instead of `fill` for Next.js Image component
                            className="mt-4 tablet:mt-6 laptop:mt-8"
                        />
                </div>
                <div className="flex flex-col justify-center items-center px-4 sm:px-10 md:px-20 lg:px-40">
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                       Founded with a passion for aesthetic home décor, Whiimsy creates handcrafted candles that blend artistry with functionality. Each piece is made with care, ensuring a luxurious burn and captivating fragrance to elevate your space.
                    </p>
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                       Inspired by Pinterest-worthy designs, our candles are more than just home fragrances—they’re statement pieces, adding warmth and personality to every corner of your home.
                    </p>
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                       Sustainability is at our core. We source eco-friendly materials, use minimal packaging, and continuously innovate to reduce our footprint. Every candle is cruelty-free and made with responsibly sourced ingredients.
                    </p>
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                       Community matters. For every 10 products sold, we donate to a charity that aligns with our values, spreading light beyond our candles.
                    </p>
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                      <strong>Explore our collection and let Whiimsy brighten your world—one candle at a time.</strong>
                    </p>
                </div>
            </div>
            {/* -------------------------- About Our Product End -------------------------- */}
                <div className="flex justify-center my-4"> {/* New container for centering */}
                <Heart />
                </div>
        </main>
 
    );
}

export default About;
