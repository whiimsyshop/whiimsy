'use client';

import HeaderBox from '@/components/HeaderBox';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/Banner';
import Heart from '@/components/Heart';

const FreeCandle: React.FC = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.querySelector('header')?.clientHeight || 0;
            const buttonContainerHeight = document.querySelector('.btn-header')?.clientHeight || 0;
            const mobileOffset = window.innerWidth <= 768 ? buttonContainerHeight : 0;
            const offsetPosition = section.offsetTop - navbarHeight - mobileOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <Banner />
            <HeaderBox title="Free Candle" />
            {/* Section 1 (layout) */}
            <section id="section-1" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2 flex flex-col'>
                    <span className='text-3xl font-semibold mb-4'>Everyone deserves a gift!</span>
                    <p className='text-justify text-xl'>
                        Be the LUCKY WINNER of the monthly candle giveaway. The aroma delivered right to your doorstep.
                    </p>
                    <p className='text-justify text-xl mt-6'>
                        The winner is announced every first day of the month via Instagram. Make sure to follow us <a href="https://www.instagram.com/whiimsy.in">@whiimsy.in</a>.
                    </p>
                    <Link href="https://forms.gle/vC9U1vqsBacgopae9" className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200">Register Today</Link>
                </div>

                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src="/demo.jpg" fill alt="Workshop" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
            <div className="flex justify-center my-4">
                <Heart />
            </div>
        </div>
    );
};

export default FreeCandle;
