"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

// Interface for navigation item structure
interface NavItem {
  mainHeading: string;
  link: string;
}

// Navigation data with items
const navdata: NavItem[] = [
  { mainHeading: "About", link: "/about" },
  { mainHeading: "Free Candle", link: "/free-candle" },
  { mainHeading: "Services", link: "/services" },
  { mainHeading: "Giveaway", link: "/giveway" },
  { mainHeading: "Contact", link: "/contact-us" },
  { mainHeading: "SHOP NOW", link: "/shop" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#4ABDAC] shadow-md">
      <header className="flex justify-between items-center px-6 py-4 tablet:px-10">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="logo" height={30} width={30} />
            <p className="font-bold text-white">Whiimsy</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden laptop:flex gap-6">
          {navdata.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className={`text-white hover:text-gray-300 ${item.mainHeading === "SHOP NOW" ? "bg-[#E8D6C5] px-4 py-2 rounded-full" : ""}`}>
                {item.mainHeading}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="laptop:hidden text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col items-center laptop:hidden bg-[#4ABDAC] pb-4">
          {navdata.map((item, index) => (
            <Link key={index} href={item.link} className="py-2 text-white text-lg hover:text-gray-300">
              {item.mainHeading}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;