import React from 'react';
import Image from "next/image";
import Link from "next/link";
import HeaderBox from '@/components/HeaderBox';

const About: React.FC = () => {
    return (
        <main className="about-main laptop:px-0 laptop:w-full flex flex-col justify-center items-center">
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
                <div className="flex flex-col justify-center items-center">
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                        Established in 2014 and proudly still based in Melbourne, Australia, Candle Monster is a boutique studio that makes extra-large soy candles, perfumes, home fragrances and body products. All of our products are hand-made with care, precision and love. From digital design to pouring candles, no aspect of our business has ever been done by outsiders, and we're quite proud of that. Everything we create is done with your moment using it in mind.
                    </p>
                    <p className="text-left text-lg mb-4 text-grey font-medium">
                        Our goal is high quality, even higher curation, and to try to offer something more considered than others. We believe in sustainability, small footprints, cruelty free, plant based, doing things properly and the general good in people. Every candle sold has in a $3-5 charity donation.
                    </p>
                    
                </div>
            </div>
        </main>
    );
}

export default About;
