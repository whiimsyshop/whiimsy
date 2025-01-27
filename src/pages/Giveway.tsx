import React from 'react';
import Image from "next/image";
import Link from "next/link";
import HeaderBox from '@/components/HeaderBox';
import GivewayEvent from "../components/GivewayEvent";
import Heart from '@/components/Heart';

const Giveway: React.FC = () => {
    return (
        <main className="about-main laptop:px-0 laptop:w-full flex flex-col justify-center items-center">
            <div className="w-full">
                <HeaderBox title="Giveway" />
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
                        
                </div>
                <GivewayEvent />
                <div className="flex justify-center my-4"> {/* New container for centering */}
                <Heart />
                </div>
        </main>
    );
}

export default Giveway;
