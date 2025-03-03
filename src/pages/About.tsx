import React from 'react';
import Image from "next/image";
import Link from "next/link";
import HeaderBox from '@/components/HeaderBox';
import Heart from '@/components/Heart';

const About: React.FC = () => {
    return (
        <main className="about-main laptop:px-0 laptop:w-full flex flex-col justify-center items-center pt-[80px]">
            {/* -------------------------- About Us Start -------------------------- */}
            <div className="w-full">
                <HeaderBox title="About Us" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="h-[160px] tablet:h-[250px] laptop:h-[300px] aspect-video relative mb-8">
                        <Image
                            src="/about/About.webp"
                            alt="About"
                            layout="fill" // Use `layout` instead of `fill` for Next.js Image component
                            className="mt-4 tablet:mt-6 laptop:mt-2 mb-2"
                            priority={true} 
                            loading="eager"
                        />
                </div>
                <div className="flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 lg:px-40 text-gray-700">
                  <p className="text-center text-sm sm:text-base md:text-lg mb-4 font-medium">
                   <strong>Whiimsy candles are more than just décor—they're a little reminder to slow down, breathe, unwind, and escape to your happy place.</strong>
                  </p>
                  <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                  At Whiimsy, we believe a great candle is more than just a source of light—it's an experience, a memory, a mood. Our passion for premium candles drives us to craft luxurious, handcrafted pieces that illuminate spaces and uplift spirits. 
                  </p>
                  <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                  Whiimsy was born from a deep love for the little things—the magic of scents, the cozy glow of candlelight, and the joy of creating something beautiful.
                  </p>
                  <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                  What started as a simple passion, hand-pouring candles with care, soon became something bigger—a way to bring warmth, joy, and a touch of whimsy into every home. Each candle is made with love, inspired by the little moments that make life beautiful—the soft flicker on a quiet night, the familiar scent that brings back a memory, the feeling of comfort in a space that truly feels like yours. 
                  </p>
                  <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                  Today, Whiimsy is more than just a brand; it’s a part of your stories, your moments, your happy places—and that’s what makes it so special.
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
                            src="/about/AboutProduct.webp"
                            alt="About Our Product"
                            layout="fill" // Use `layout` instead of `fill` for Next.js Image component
                            className="mt-4 tablet:mt-6 laptop:mt-2 mb-2"
                            priority={true} 
                            loading="eager"
                        />
                </div>
                <div className="flex flex-col justify-center items-center px-4 sm:px-10 md:px-20 lg:px-40">
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                    At Whiimsy, candles are more than just home decor—they're an experience. Each one is thoughtfully handcrafted to blend artistry with functionality, offering a luxurious burn and captivating scent that elevates your space. Inspired by Pinterest-worthy aesthetics, our candles double as statement pieces, adding warmth, personality, and a touch of whimsy to every corner of your home.
                    </p>
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                    Sustainability is at our heart—we use eco-friendly materials, minimal packaging, and responsibly sourced ingredients to ensure every candle is cruelty-free and kind to the planet. But Whiimsy is about more than just candles; it’s about community. For every 10 products sold, we give back to a cause that aligns with our values, spreading light in more ways than one.
                    </p>
                    <p className="text-left text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
                       Community matters. For every 10 products sold, we donate to a charity that aligns with our values, spreading light beyond our candles.
                    </p>
                    <p className="text-center text-sm sm:text-base md:text-lg mb-4 text-gray-700 font-medium">
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
