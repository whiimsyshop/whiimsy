"use client";
import React, { useEffect, useState } from "react";
// import NextUiNavbar from "./NextUInav";
import dynamic from "next/dynamic";
const NextUiNavbar = dynamic(() => import("./NextUInav"), {
  ssr: false,
});

interface SubnavItem {
  // Define properties based on your actual structure
  name: string;
  link: string;
}

interface NavItem {
  mainHeading: string;
  subnav: SubnavItem[];
}

const fetchNames = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    cache: "no-store" as RequestCache,
  };
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=slug&fields[2]=ratting`,
    reqOptions
  );
  const response = await request.json();
  const sortedBlogs = response.data.sort(
    (a: any, b: any) => b.attributes.ratting - a.attributes.ratting
  );
  return sortedBlogs;
};

// Build subnav from API data
const buildSubnavFromApi = async () => {
  const apiData = await fetchNames();
  // Convert API data into subnav items
  const subnavFromApi = apiData
    .map((item: { attributes: { vpn_name: string; slug: string } }) => ({
      name: item.attributes.vpn_name,
      link: `/reviews/${item.attributes.slug}`, // Customize the link format as needed
    }))
    .slice(0, 5);
  return subnavFromApi;
};

const NavbarComp = () => {
  const [rev, setRev] = useState<{ name: string; link: string }[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const subnav = await buildSubnavFromApi();
      setRev(subnav);
      // const rev = await fetchNames();
    };

    fetchAndSetData();
  }, []);

  interface SubnavItem {
    // Define properties based on your actual structure
    name: string;
    link: string;
  }

  interface NavItem {
    mainHeading: string;
    subnav?: SubnavItem[];
    link?: string;
  }

  const navdata: NavItem[] = [
    {
      mainHeading: "BEST VPN",
      subnav: [
        {
          name: "Popular",
          link: "",
        },
        {
          name: "Best VPN of 2024",
          link: "/best-vpn",
        },
        {
          name: "Best VPN in India",
          link: "/best-vpn-for-india",
        },
        {
          name: "Best free VPN",
          link: "/best-free-vpn",
        },
      ],
    },
    {
      mainHeading: "VPN REVIEWS",
      subnav: [
        ...rev,
        {
          name: "Click more ->",
          link: "/reviews",
        },
      ],
    },
    {
      mainHeading: "WHAT IS A VPN",
      subnav: [
        {
          name: "What Is a VPN Service?",
          link: "/vpn-explained/what-is-a-vpn-service",
        },
        {
          name: "How Does a VPN Work?",
          link: "/vpn-explained/how-does-a-vpn-work",
        },
        {
          name: "What Is a VPN Used For?",
          link: "/vpn-explained/what-is-vpn-used-for",
        },
        {
          name: "Are VPNs Really Worth It?",
          link: "/vpn-explained/are-vpn-really-worth-it",
        },
        {
          name: "VPN Logging Policies",
          link: "/vpn-explained/vpn-logging-policies",
        },
        {
          name: "Click More",
          link: "/vpn-explained",
        },
      ],
    },
    {
      mainHeading: "GUIDES",
      subnav: [
        {
          name: "How To Hide Your IP Address",
          link: "/guides/hide-your-ip-address",
        },
        {
          name: "How To Check Your IP Address",
          link: "/guides/check-ip-address",
        },
        {
          name: "What can someone do with your ip address",
          link: "/guides/what-can-people-do-with-your-ip-address",
        },
        {
          name: "How to check if your vpn is working?",
          link: "/guides/is-my-vpn-working",
        },
        {
          name: "Click more ->",
          link: "/guides",
        },
      ],
    },
    {
      mainHeading: "ABOUT",
      subnav: [
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "How we test and review",
          link: "/about/how-we-review-vpn",
        },
        {
          name: "How we make money",
          link: "/about/how-we-make-money",
        },
      ],
    },
    {
      mainHeading: "CONTACT",
      link: "/contact-us",
    },
  ];

  return <NextUiNavbar navdata={navdata} />;
};

export default NavbarComp;
