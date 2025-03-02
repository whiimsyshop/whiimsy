"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const navdata = [
  { mainHeading: "About", link: "/about" },
  { mainHeading: "Gallery", link: "/gallery" },
  { mainHeading: "Free Candle", link: "/free-candle" },
  { mainHeading: "Services", link: "/services" },
  { mainHeading: "Giveaway", link: "/giveaway" },
  { mainHeading: "Contact", link: "/contact-us" },
  { mainHeading: "SHOP NOW", link: "/shop" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#165B33] shadow-md" : "bg-[#165B33]"}`} style={{ height: "60px" }}>
      <header className="flex items-center justify-between px-6 py-3 tablet:px-10 laptop:px-[8rem] h-full">
        {/* Logo */}
        <div className="logo-name flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="logo" height={30} width={30} />
            <p className="font-bold text-white">Whiimsy</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden laptop:flex gap-6 items-center">
          {navdata.map((item, index) => (
            <li key={index} className="text-left">
              <Link
                href={item.link}
                className={`text-white hover:text-gray-300 ${item.mainHeading === "SHOP NOW" ? "bg-[#F7CAC9] px-4 py-2 rounded-full" : ""}`}
              >
                {item.mainHeading}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="laptop:hidden text-white text-3xl focus:outline-none"
        >
          <FiMenu />
        </button>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 bg-[#165B33] w-[60%] max-w-[280px] shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          ref={menuRef}
          className="flex flex-col p-4 bg-[#165B33] shadow-lg"
          style={{ height: "auto", minHeight: "40vh", maxHeight: "80vh" }}
        >
          {/* Close Button */}
          <button
            className="self-end text-white text-2xl mb-2"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3">
            {navdata.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="py-2 text-white text-base hover:text-gray-300 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.mainHeading}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
