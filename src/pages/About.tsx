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
                <div className="flex flex-col justify-center items-center" style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
                <p className="text-left text-lg mb-4 text-grey font-medium">
                    <strong>Each Whiimsy candle is a labour of love - an extension of our slow-living philosophy 
                    and thoughtfully designed to help you drift off to a happy space..</strong>
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    At Whiimsy, we believe that a great candle is more than just a source of light; it's an experience, a memory, a mood. Founded with a passion for crafting premium scented candles, our journey began with a simple vision: to create luxurious, handcrafted candles that not only illuminate spaces but also uplift spirits.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    Inspired by the enchanting power of scents and the art of candle making, We started Whiimsy to bring a touch of warmth and elegance to every home. What began as a small project in our cozy studio has blossomed into a beloved brand, cherished by candle enthusiasts around the world. Every candle we create is a testament to our commitment to quality, creativity, and sustainability.

Read More
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
                <div className="flex flex-col justify-center items-center" style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    Established in 2014 and proudly still based in Melbourne, Australia, Candle Monster is a boutique studio that makes extra-large soy candles. All of our products are hand-made with care, precision and love, and we're quite proud of that. Everything we create is done with your moment using it in mind.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    We take pride in the artistry of candle making. Our candles are hand-poured with precision and care, ensuring a consistent burn and a rich, lasting aroma. The decorative designs of our candles are inspired by the beauty of nature and the elegance of timeless decor, making them perfect for any setting – whether it's a tranquil home sanctuary or a vibrant celebration.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    At Whiimsy, we are committed to sustainability and ethical practices. We source our materials responsibly and strive to minimize our environmental impact. Our packaging is designed to be eco-friendly, and we continuously seek ways to innovate and improve our processes.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    We believe in the power of community and giving back. For every 10 items sold, we make a donation to a charity close to our hearts. This initiative is our way of sharing the light and spreading joy beyond our candles, making a positive impact on the lives of those in need.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    We invite you to explore our collection and find the perfect candles to brighten your moments. Whether you are a long-time candle lover or new to the world of scented candles, we are here to guide you and share our passion. Follow us on social media for the latest updates, exclusive offers, and a glimpse into our candle-making journey.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                        Our goal is high quality, even higher curation, and to try to offer something more considered than others. We believe in sustainability, small footprints, cruelty free, plant based, doing things properly and the general good in people. Every candle sold has in a Rs.50 charity donation.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                    <strong>Thank you for choosing Whiimsy. Let's light up the world together, one candle at a time.</strong>
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
