import React from 'react';
import Image from "next/image";

// --HomepageContent--
const gridData = [
    {
        "title": "Handcrafted with Love",
        "icon": "/home/trust/user.png"
    },
    {
        "title": "All Natural Ingredients",
        "icon": "/home/trust/cover.png"
    },
    {
        "title": "Eco-Friendly Packaging",
        "icon": "/home/trust/rti.png"
    },
    {
        "title": "Unique Scents",
        "icon": "/home/trust/target.png"
    },
    {
        "title": "Custom Orders Available",
        "icon": "/home/trust/campaign.png"
    },
    {
        "title": "Sustainable Practices",
        "icon": "/home/trust/multi.png"
    }
];

export const BoxCard = ({ title, icon }: { title: string, icon: string }) => {
    return (
        <div className="flex transform cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 shadow-[0px_0px_5px_0px_#1a202c] transition-transform duration-300 hover:scale-[1.02]">
            <div className="iconHolder relative aspect-square w-3/12">
                <Image src={icon} alt={title} layout="fill" />
            </div>
            <span className="text-xl">{title}</span>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <section className="bg-white px-7 py-12 md:px-16 md:py-16 lg:px-32">
                <div className="flex flex-col items-center gap-5">
                    <span className="text-center text-4xl font-semibold text-col5">
                        Our Home-Grown Candle Collection
                    </span>
                    <p className="w-10/12 text-center text-lg text-gray-500">
                        Discover the warmth and beauty of our handcrafted candles, made with all-natural ingredients and eco-friendly packaging. Each candle is created with unique scents and sustainable practices to bring a touch of comfort to your home. Whether you're looking for a special gift or a custom order, we've got you covered.
                    </p>
                    <span className="text-2xl font-semibold">Why <span className="text-col5">Our Candles?</span></span>
                </div>

                <div className="cardHolder my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {gridData.map((item, idx) => (
                        <BoxCard key={idx} title={item.title} icon={item.icon} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
