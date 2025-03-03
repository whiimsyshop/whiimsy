"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin, FaSnapchatGhost, FaLink, FaTimes, FaInstagram, FaShareAlt } from "react-icons/fa";

export default function ProfilePage() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const pageUrl = "https://whiimsy.in";
  const shareText = "Check out WHIIMSY! ✨";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#b1d877] text-black">
      <div className="mt-20">
        <Image src="/logo.jpg" alt="Profile" width={100} height={100} className="rounded-full border-4 border-white" />
      </div>
      <h1 className="text-xl font-bold mt-4">@whiimsy.in</h1>
      <h2 className="text-lg mt-1">WHIIMSY</h2>

      {/* Navigation Links */}
      <div className="mt-6 w-4/5 md:w-1/2 space-y-4">
        <Link href="/about">
          <button className="w-full bg-[#f16a70] hover:bg-red-500 py-3 rounded-full text-lg font-semibold">About</button>
        </Link>

        <h3 className="text-center font-semibold">SHOP</h3>
        <Link href="/shop">
          <button className="w-full bg-[#f16a70] hover:bg-red-500 py-3 rounded-full text-lg font-semibold">Shop Now</button>
        </Link>

        <h4 className="text-center font-semibold">Participate</h4>
        <Link href="/free-candle">
          <button className="w-full bg-[#f16a70] hover:bg-red-500 py-3 rounded-full text-lg font-semibold mb-4">Free Candle</button>
        </Link>
        <Link href="/giveaway">
          <button className="w-full bg-[#f16a70] hover:bg-red-500 py-3 rounded-full text-lg font-semibold">GiveAway</button>
        </Link>

        <h5 className="text-center font-semibold">Contact</h5>
        <Link href="mailto:whiimsyteam@gmail.com">
          <button className="w-full bg-[#f16a70] hover:bg-red-500 py-3 rounded-full text-lg font-semibold mb-4">Mail</button>
        </Link>
        <Link href="/contact-us">
          <button className="w-full bg-[#f16a70] hover:bg-red-500 py-3 rounded-full text-lg font-semibold">Contact Form</button>
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 mb-4 flex space-x-6 text-2xl">
        <Link href="https://instagram.com/whiimsy.in" target="_blank">
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
        </Link>
        <Link href="https://facebook.com/whiimsy.in" target="_blank">
          <FaFacebook className="hover:text-gray-300 cursor-pointer" />
        </Link>
        <Link href="https://wa.me/+918981256860" target="_blank">
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
        </Link>
      </div>

      {/* Share Button */}
      <button className="mt-6 bg-[#f16a70] hover:bg-red-500 py-3 px-6 rounded-full text-lg font-semibold mb-3" onClick={() => setIsShareOpen(true)}>
      <FaShareAlt size={18} />
      </button>

      {/* SHARE MODAL */}
      {isShareOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center shadow-lg relative">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={() => setIsShareOpen(false)}>
              <FaTimes size={18} />
            </button>

            <h3 className="text-lg font-bold mb-2">Share WHIIMSY</h3>
            <div className="flex justify-center">
             <Image src="/logo.jpg" alt="Profile" width={80} height={80} className="w-20 h-20 object-contain" />
            </div>
            <p className="mt-2 font-semibold">@whiimsy.in</p>

            {/* Social Media Share Buttons */}
            <div className="mt-4 flex justify-center space-x-3">
              <button onClick={() => navigator.clipboard.writeText(pageUrl)} className="bg-gray-200 p-2 rounded-full">
                <FaLink className="text-black" size={22} />
              </button>
              <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" className="bg-black p-2 rounded-full">
                <FaTwitter className="text-white" size={22} />
              </Link>
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" className="bg-blue-600 p-2 rounded-full">
                <FaFacebook className="text-white" size={22} />
              </Link>
              <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + pageUrl)}`} target="_blank" className="bg-green-500 p-2 rounded-full">
                <FaWhatsapp className="text-white" size={22} />
              </Link>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" className="bg-blue-700 p-2 rounded-full">
                <FaLinkedin className="text-white" size={22} />
              </Link>
              <Link href="https://www.snapchat.com" target="_blank" className="bg-yellow-400 p-2 rounded-full">
                <FaSnapchatGhost className="text-white" size={22} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
