import React from 'react';
import Image from "next/image";
import Link from "next/link";

const GivewayEvent = () => {

    const data = [
        {
            title: "Giveaway 1",
            content: [
                "Start Date: 20 Jan 2024",
                "End Date: 25 Jan 2024",
                "Winner:"
            ],
            imageurl: "/giveway/giveway1.png",
            link: "https://www.instagram.com/"
        },
        {
            title: "Giveaway 2",
            content: [
                "Start Date: 20 Jan 2024",
                "End Date: 25 Jan 2024",
                "Winner:"
            ],
            imageurl: "/home/user.png",
            link: "/"
        },
        {
            title: "Giveaway 3",
            content: [
                "Start Date: 20 Jan 2024",
                "End Date: 25 Jan 2024",
                "Winner:"
            ],
            imageurl: "/home/user.png",
            link: "/"
        },
        {
            title: "Giveaway 4",
            content: [
                "Start Date: 20 Jan 2024",
                "End Date: 25 Jan 2024",
                "Winner:"
            ],
            imageurl: "/home/user.png",
            link: "/"
        },
        {
            title: "Giveaway 5",
            content: [
                "Start Date: 20 Jan 2024",
                "End Date: 25 Jan 2024",
                "Winner:"
            ],
            imageurl: "/home/user.png",
            link: "/"
        },
        {
            title: "Giveaway 6",
            content: [
                "Start Date: 20 Jan 2024",
                "End Date: 25 Jan 2024",
                "Winner:"
            ],
            imageurl: "/home/user.png",
            link: "/"
        },
    ];

    return (
        <section className="mx-2 my-8 grid grid-cols-1 gap-5 rounded-xl bg-col3 p-5 md:mx-16 md:grid-cols-2 md:p-10 lg:mx-32 lg:grid-cols-3">
            {data?.map((item, index) => (
                <Card title={item.title} content={item.content} imageurl={item.imageurl} link={item.link} key={index} />
            ))}
        </section>
    );
};

export const Card = ({ title, content, imageurl, link }: { title: string, content: string[], imageurl: string, link: string }) => {
    return (
        <Link href={link} passHref>
            <div className="translate group flex cursor-pointer flex-col items-center gap-3 rounded-lg bg-white py-5 px-2 border-2 border-gray-300 transition-transform hover:scale-[1.05]" style={{ transitionDuration: "600ms" }}>
                <div className="imageholder relative w-[300px] h-[300px]" >
                    <Image src={imageurl} alt="icon" layout="fill" style={{ transitionDuration: "400ms", objectFit: 'cover', borderRadius: '10%' }} />
                </div>
                <span className="translate text-2xl font-semibold transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{title}</span>
                <div className="content translate transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>
                    {content.map((line, idx) => <p key={idx}>{line}</p>)}
                </div>
            </div>
        </Link>
    );
};

export default GivewayEvent;
