import React from 'react';
import Image from "next/image";
import Link from "next/link";

// --GivewayPage--
const GivewayEvent = () => {

    const data = [
        {
            title: "Giveaway 1",
            content: [
                "Start Date: 20 Jan 2025",
                "End Date: 25 Jan 2025"
            ],
            imageurl: "/giveaway/giveaway1.png",
            link: "https://www.instagram.com/whiimsy.in/p/DFCvjZCz4TX/"
        },
        {
            title: "Giveaway 2",
            content: [
                "Start Date: 20 Apr 2025",
                "End Date: 12 Apr 2025"
            ],
            imageurl: "/giveaway/giveaway2.png",
            link: "https://www.instagram.com/whiimsy.in/p/DIqZBGSzx7_/"
        },
        {
            title: "Giveaway 3",
            content: [
                "Start Date: 09 Jun 2025",
                "End Date: 14 Jun 2025"
            ],
            imageurl: "/giveaway/giveaway.jpg",
            link: ""
        },
        {
            title: "Giveaway 4",
            content: [
                "Start Date: 04 Aug 2025",
                "End Date: 09 Aug 2025"
            ],
            imageurl: "/giveaway/giveaway.jpg",
            link: ""
        },
        {
            title: "Giveaway 5",
            content: [
                "Start Date: 06 Oct 2025",
                "End Date: 11 Oct 2025"
            ],
            imageurl: "/giveaway/giveaway.jpg",
            link: ""
        },
        {
            title: "Giveaway 6",
            content: [
                "Start Date: 15 Dec 2025",
                "End Date: 20 Dec 2025"
            ],
            imageurl: "/giveaway/giveaway.jpg",
            link: ""
        },
    ];

    return (
        <section className="mx-2 my-8 grid grid-cols-2 gap-6 rounded-xl bg-col3 p-5 sm:p-6 md:mx-10 md:grid-cols-2 lg:mx-20 lg:grid-cols-3 xl:grid-cols-3">
            {data?.map((item, index) => (
                <Card title={item.title} content={item.content} imageurl={item.imageurl} link={item.link} key={index} />
            ))}
        </section>
    );
};

export const Card = ({ title, content, imageurl, link }: { title: string, content: string[], imageurl: string, link: string }) => {
    return (
        <Link href={link} passHref>
            <div className="group flex cursor-pointer flex-col items-center gap-3 rounded-lg bg-white py-5 px-2 border-2 border-gray-300 transition-transform hover:scale-[1.05] hover:shadow-lg" style={{ transitionDuration: "600ms" }}>
                <div className="imageholder relative w-full max-w-[250px] h-auto aspect-square">
                    <Image src={imageurl} alt={`${title} image`} layout="fill" className="object-cover rounded-lg" />
                </div>
                <span className="text-lg sm:text-xl font-semibold transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{title}</span>
                <div className="content text-center text-sm sm:text-base transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>
                    {content.map((line, idx) => <p key={idx}>{line}</p>)}
                </div>
            </div>
        </Link>
    );
};

export default GivewayEvent;
