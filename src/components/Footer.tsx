import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="flex flex-col pt-10 lg:pl-[7rem] lg:pr-[1.5rem] max-w-full border-t border-gray-300 bg-[#165B33] text-white">
      {/* Top Section */}
      <div className="flex flex-col tablet:flex-row px-6 tablet:px-10 4k:mx-[200px] text-center tablet:text-left">
        {/* Left Section */}
        <div className="order-1 mb-8 tablet:mb-0 tablet:w-[50%]">
          <div className="flex justify-center tablet:justify-start items-center gap-2 text-2xl">
            <Image src="/logo.jpg" alt="Whiimsy Logo" height={50} width={50} />
            <p className="font-bold text-inherit">WHIIMSY</p>
          </div>
          <p className="pt-4 text-lg tablet:w-[80%]">
            We pour our hearts into creating candles with the finest ingredients, filling your home with beautiful scents and a cozy glow.
          </p>
        </div>
        
        {/* Middle Section */}
        <div className="order-3 tablet:order-2 tablet:w-[25%] laptop:w-[30%] tablet:mx-10">
          <div className="text-lg font-bold mb-4">Contact</div>
          <Link href="mailto:whiimsyteam@gmail.com" className="text-sm hover:text-gray-300">
            <HiOutlineMail className="inline text-xl" />
            <span className="pl-1">whiimsyteam@gmail.com</span>
          </Link>
          <div className="flex justify-center tablet:justify-start gap-3 mt-5">
            <Link href="www.instagram.com/whiimsy.in" className="bg-black rounded-full p-2" aria-label="Instagram">
              <FaInstagram className="text-white" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61571833596666" className="bg-black rounded-full p-2" aria-label="Facebook">
              <FaFacebookF className="text-white" />
            </Link>
            <Link href="https://wa.me/+918981256860?text=Hey!%20Whiimsy%20Team." className="bg-black rounded-full p-2" aria-label="Whatsapp">
              <FaWhatsapp className="text-white" />
            </Link>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="order-2 tablet:order-3 tablet:w-[25%] laptop:w-[20%]">
          <div className="text-lg font-bold mb-4">About</div>
          <Link href="/about" className="text-sm block mb-2 hover:text-gray-300">About Us</Link>
          <Link href="/free-candle" className="text-sm block mb-2 hover:text-gray-300">Free Candle</Link>
          <Link href="/services" className="text-sm block mb-2 hover:text-gray-300">Services</Link>
          <Link href="/giveaway" className="text-sm block mb-2 hover:text-gray-300">Giveaway</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col tablet:flex-row justify-center items-center text-sm mt-6 py-4 px-6 tablet:px-10 4k:mx-[200px] text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-gray-300">Cookie Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-gray-300">Terms of Use</Link>
          <Link href="/return-and-shipping" className="hover:text-gray-300">Return/Shipping</Link>
        </div>
      </div>
      <div className="text-center py-2">
        <h6>© 2025. Whiimsy. All rights reserved.</h6>
      </div>
    </footer>
  );
};

export default Footer;
