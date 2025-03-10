"use client";

import { useState, useEffect } from "react";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesPage: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const header = document.querySelector("header");
      setNavbarHeight(header?.clientHeight || 0);
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("header")?.clientHeight || 0;
      const buttonContainerHeight = document.querySelector(".btn-header")?.clientHeight || 0;
      
      const isMobile = window.innerWidth <= 768;
  
      // Separate extra padding for mobile and desktop
      const extraPadding = isMobile ? 130 : 90;
      const mobileOffset = isMobile ? buttonContainerHeight : 0;
      
      const offsetPosition = section.offsetTop - navbarHeight - mobileOffset - extraPadding;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div className="pt-[80px]">
      <HeaderBox title="Services" />
      <div className="flex flex-wrap justify-center gap-4 mt-8 sticky top-0 mx-2 my-5 lg:mx-32 lg:py-4 rounded-xl bg-[#f5dcdc] z-10 mb-8 px-4 py-4"
       style={{ position: "sticky", top: `${navbarHeight}px` }}
       >
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-1")}
        >
          Workshop
        </button>
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-2")}
        >
          Recycle
        </button>
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-3")}
        >
          Corporates
        </button>
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-4")}
        >
          Collaborations
        </button>
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-5")}
        >
          Fundraising
        </button>
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-6")}
        >
          Wholesale
        </button>
        <button
          className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => handleScroll("section-7")}
        >
          Donations
        </button>
      </div>

      {/* Section 1: Candle Making Workshops */}
      <section
        id="section-1"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold mb-4">Candle Making Workshops</span>
          <p className="text-justify text-xl">
          Ready to get your hands waxy and your creativity flowing? Join our fun, hands-on workshops where you’ll pour, mix, and craft your own dreamy candles—perfect for a chill hangout, a creative escape, or just an excuse to play with pretty scents!
          </p>
          <p className="text-justify text-xl mt-6">Please click on the button below to find out more information.</p>
          <Link
            href=""
            target=""
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200 cursor-not-allowed" 
          >
            Coming Soon
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/workshop.webp" fill alt="Workshop" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      {/* Section 2: Recycle Program */}
      <section
        id="section-2"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold block mb-4">Recycle Program</span>
          <p className="text-justify text-xl">
          Contribute to sustainability by bringing in your empty candle jars. Whiimsy repurposes them, and as a token of appreciation, offers a discount on your next purchase for each jar and lid returned in good condition.
          </p>
          <p className="text-justify text-xl mt-6">Schedule a drop off time! See you soon..</p>
          <Link
            href="https://wa.me/+918981256860?text=Hey!%20Whiimsy%20Team.%20I%20would%20like%20to%20know%20more%20about%20Recycle%20Program."
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/recycle.webp" fill alt="Recycle Program" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      {/* Section 3: Corporates */}
      <section
        id="section-3"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold mb-4">Corporates</span>
          <p className="text-justify text-xl">
          Customize exclusive scented products tailored to your company's design, philosophy, budget, and requirements, perfect for gifting customers and colleagues.
          </p>
          <p className="text-justify text-xl mt-6">Please click on the button below to find out more information.</p>
          <Link
            href=""
            target=""
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200 cursor-not-allowed"
          >
            Coming Soon
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/corporate.webp" fill alt="Corporates" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      {/* Section 4: Collaborations */}
      <section
        id="section-4"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold block mb-4">Collaborations</span>
          <p className="text-justify text-xl">
          Partner with Whiimsy for unique collaborations that align with their design aesthetic, resulting in handcrafted products perfected through creative associations.
          </p>
          <p className="text-justify text-xl mt-6">Schedule a Meeting! See you soon..</p>
          <Link
            href="https://wa.me/+918981256860?text=Hey!%20Whiimsy%20Team.%20I%20would%20like%20to%20know%20more%20about%20Collaboration."
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/collaboration.webp" fill alt="COllaborations" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      {/* Section 5: Fundraising */}
      <section
        id="section-5"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold block mb-4">Fundraising - Charitable Donation</span>
          <p className="text-justify text-xl">
          Host charitable fundraisers in partnership with Whiimsy to raise funds for your group or organization, making a tangible impact while enjoying the process.
          Fill out the form and we will contact you within 24-48 hours to schedule your fundraiser. Make sure to come with your goal in mind.
          </p>
          <p className="text-justify text-xl mt-6">Please click on the button below to submit a request.</p>
          <Link
            href="/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200 cursor-not-allowed"
          >
            Coming Soon
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/fundraising.webp" fill alt="Fund Raising" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      {/* Section 6: Wholesale */}
      <section
        id="section-6"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold block mb-4">Wholesale - Private Label</span>
          <p className="text-justify text-xl">
          Bring your vision to life with custom candle collections suitable for brands, weddings, or corporate employee appreciation gifts.
          </p>
          <p className="text-justify text-xl mt-6">Please click on the button below to start your order request.</p>
          <Link
            href="https://forms.gle/HpyNvwVGreEcgtRS6"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/wholesale.webp" fill alt="Wholesale" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      {/* Section 7: Donations */}
      <section
        id="section-7"
        className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-[#f8eeee] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-3xl font-semibold block mb-4">Donations</span>
          <p className="text-justify text-xl">
            One of our most popular items. Perfect for silent auctions, and giveaways.
          </p>
          <ul className="list-decimal pl-5 text-xl mt-4 leading-8">
            <li>Provide request within 30 days of deadline.</li>
            <li>Upon agreement, provide social media blast on organization platform (Facebook, Instagram, LinkedIn)</li>
            <li>Made a purchase from Whiimsy within the past 90 days of request</li>
          </ul>
          <p className="text-justify text-xl mt-6">We look forward to working with you.</p>
          <Link
            href="https://wa.me/+918981256860?text=Hey!%20Whiimsy%20Team.%20I%20would%20like%20to%20know%20more%20about%20Donation."
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="imageHolder relative aspect-video w-full">
            <Image src="/services/donation.webp" fill alt="Donations" style={{ objectFit: "cover" }} priority={true} loading="eager"/>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-between gap-5 rounded-t-xl border border-col5 bg-col5 px-5 py-5 md:px-16 lg:flex-row lg:gap-0 lg:px-32">
        <span className="w-full text-2xl text-black md:text-2xl lg:w-10/12">
        For any suggestions or inquiries, please feel free to reach out. We value your feedback.
        </span>
        <Link
          href="/contact-us"
          className="h-fit w-fit rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
