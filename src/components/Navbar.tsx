"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const NextUiNavbar = dynamic(() => import("./NextUInav"), {
  ssr: false,
});

interface SubnavItem {
  name: string;
  link: string;
}

interface NavItem {
  mainHeading: string;
  subnav?: SubnavItem[];
  link?: string;
}

const fetchNames = async () => {
  try {
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
    if (!response.data) throw new Error("No data found");
    const sortedBlogs = response.data.sort((a: any, b: any) => b.attributes.ratting - a.attributes.ratting);
    return sortedBlogs;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

const buildSubnavFromApi = async () => {
  const apiData = await fetchNames();
  const subnavFromApi = apiData
    .map((item: { attributes: { vpn_name: string; slug: string } }) => ({
      name: item.attributes.vpn_name,
      link: `/reviews/${item.attributes.slug}`,
    }))
    .slice(0, 5);
  return subnavFromApi;
};

const NavbarComp = () => {
  const [rev, setRev] = useState<SubnavItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const subnav = await buildSubnavFromApi();
        setRev(subnav);
      } catch (error) {
        console.error("Failed to fetch subnav data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetData();
  }, []);

  const navdata: NavItem[] = [
    {
      mainHeading: "About",
          link: "/about",
    },
    {
      mainHeading: "Free Candle",
          link: "/free-candle",
    },
    {
      mainHeading: "Services",
          link: "/services",
        },
    {
      mainHeading: "Giveway",
      link: "/giveway",
        },
    {
      mainHeading: "Contact",
      link: "/contact-us",
        },
    {
      mainHeading: "SHOP NOW",
      link: "/shop",
        },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return <NextUiNavbar navdata={navdata} />;
};

export default NavbarComp;
