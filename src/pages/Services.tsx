'use client';

import HeaderBox from '@/components/HeaderBox';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
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
            <HeaderBox title="Services" />
            <div className="flex flex-wrap justify-center gap-4 mt-8 sticky top-0 mx-2 my-5 lg:mx-32 lg:py-4 rounded-xl bg-[#4abdac43] z-10 mb-8 px-4 py-4">
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-1')}
                >
                    Workshop
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-2')}
                >
                    Recycle
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-3')}
                >
                    Fundraising
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-4')}
                >
                    wholesale
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-5')}
                >
                    Donations
                </button>
            </div>


            {/* Section 1 */}
            <section id="section-1" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Candle Making Workshops</span>
                    <p className='text-justify text-xl'>
                    Looking for a fun time with family, friends, colleagues, and students? We offer candle making workshops. It can be a simple class to take home your own creation or we do offer classes that are targeted toward STEM, team building, and entrepreneurship.
                    </p>
                    <p className='text-justify text-xl mt-6'>
                    Please click on the button below to find out more information.

                    </p>
                </div>

                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src="/demo.jpg" fill alt="Workshop" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 2 (reverse layout) */}
            <section id="section-2" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Recycle Program</span>
                    <p className='text-justify text-xl'>
                    Yes, you heard it right. You no longer have to throw your empty candle jars in the trash. You can bring them to us and we will make sure they are put to good use.
                    </p>
                    <p>A discount will be applied to your next purchase for each jar and lid that you bring that is in good condition. For example, if you bring us a jar and lid then you will get $2.50 off your next purchase. Yes, it can be the same day you bring them in.
                    </p>
                    <p className='text-justify text-xl mt-6'>
                    Schedule a drop off time! See you soon..
                    </p>

                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src="/demo.jpg" fill alt="Recycle Program" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 3 (same layout as Section 1) */}
            <section id="section-3" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Fundraising - Charitable Donation</span>
                    <p className='text-justify text-xl'>
                    Partner with Ladie Lex Scented Candles or host a charitable fundraiser for your group or organization to help raise some serious cash and make a real impact. Plan your fundraiser with us and let’s have some fun! Fill out the form and we will contact you within 24-48 hours to schedule your fundraiser. Make sure to come with your goal in mind.
                    </p>
                    <p className='text-justify text-xl mt-6'>
                    Please click on the button below to submit a request.
                    </p>

                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src="/demo.jpg" fill alt="Fund Raising" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 4 (reverse layout) */}
            <section id="section-4" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Wholesale - Private Label</span>
                    <p className='text-justify text-xl'>
                    Allow us to bring your vision to life with a great collection to any brand or a great gift for your wedding party and/or corporate employee appreciation.
                    </p>
                    <p className='text-justify text-xl mt-6'>
                    Please click on the button below to start your order request.
                    </p>

                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src="/demo.jpg" fill alt="Wholesale" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 5 (same layout as Section 1) */}
            <section id="section-5" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Donations</span>
                    <p className='text-justify text-xl'>
                    One of our most popular items. Perfect for silent auctions, and giveaways.
                    Requirements:.
                    </p>
                    <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                        <li>Provide request within 30 days of deadline.</li>
                        <li>Upon agreement, provide social media blast on organization platform (Facebook, Instagram, LinkedIn)</li>
                        <li>Made a purchase from Ladie Lex within the past 90 days of request</li>
                    </ul>
                    <p className='text-justify text-xl mt-6'>
                    We look forward to working with you.
                    </p>
                </div>

                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src="/demo.jpg" fill alt="Donations" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-between gap-5 rounded-t-xl border border-col5 bg-col5 px-5 py-5 md:px-16 lg:flex-row lg:gap-0 lg:px-32">
                <span className="w-full text-2xl text-black md:text-3xl lg:w-10/12">Take your business to the next level. Let's show you how.</span>
                <Link href="/contact" className="h-fit w-fit rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200">Get in Touch</Link>
            </div>
            
        </div>
    )
}

    export default ServicesPage