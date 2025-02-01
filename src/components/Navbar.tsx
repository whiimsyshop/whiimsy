import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  { mainHeading: "Giveway", link: "/giveway" },
  { mainHeading: "Contact", link: "/contact-us" },
  { mainHeading: "SHOP NOW", link: "/shop" },
];

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#4ABDAC" }} // Inline background color
      className="sticky top-0 z-50 w-full shadow-md" // Added sticky positioning and z-index for layering
    >
      {/* Navbar Header */}
      <header className="justify-between gap-10 max-w-full flex w-full items-center justify-center h-auto">
        {/* Navbar Brand with Logo and Name */}
        <Link href="/" className="text-inherit">
          <div className="flex items-center gap-2" style={{ paddingLeft: "15rem", paddingTop: ".7rem" }}>
            <Image src="/logo.jpg" alt="logo" height={30} width={30} />
            <p className="font-bold text-inherit">Whiimsy</p>
          </div>
        </Link>

        {/* Navigation Links List */}
        <ul
          className="h-full flex-row flex-nowrap items-center hidden laptop:flex gap-3 w-full"
          style={{ paddingLeft: "25rem", paddingTop: ".7rem" }} // Adds left padding to the nav links
        >
          {navdata.map((item, index) => {
            // Check for SHOP NOW item to apply a different style
            if (item.mainHeading !== "SHOP NOW") {
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-800 hover:text-gray-600"
                    style={{ paddingRight: "1rem" }} // Spacing between the items
                  >
                    {item.mainHeading}
                  </a>
                </li>
              );
            }
            // Special style for SHOP NOW button
            return (
              <li key={index}>
                <a
                  href={item.link}
                  className="shop-now-button"
                  style={{ backgroundColor: "rgb(232, 214, 197)" }} // Shop now button background
                >
                  {item.mainHeading}
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
