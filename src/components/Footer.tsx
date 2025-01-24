import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-col pt-16 max-w-full border-t border-gray-300 ">
        {/* top part of footer */}
        <div className="flex px-3 tablet:px-10 4k:mx-[200px] flex-col tablet:flex-row">
          {/* left */}
          <div className="order-1 mb-14 tablet:w-[40%] laptop:w-[50%]">
            <div className="flex justify-start items-center gap-2 text-2xl">
              <Image src="/logo.png" alt="logo" height={50} width={50} />
              <p className="font-bold text-inherit">VPNs GUIDE</p>
            </div>
            <p className="pt-5 text-lg laptopl:w-[80%]">
              We have spent hours researching, testing and reviewing VPN
              services. See our recommendations and protect your online privacy.
            </p>
          </div>
          {/* middle */}
          <div className="order-3 tablet:order-2 tablet:w-[35%] laptop:w-[30%] tablet:mx-10">
            <div className="text-lg tablet:text-base font-bold mb-6">
              Contact
            </div>
            <Link
              href="mailto:mhvpnguide@gmail.com"
              className="text-sm hover:text-blue-700"
            >
              <HiOutlineMail className="inline text-xl" />
              <span className="pl-1 ">mhvpnguide@gmail.com</span>
            </Link>
            <div className="flex flex-row gap-3 tablet:gap-4 mt-5 mb-6 laptop:mb-0">
              <Link
                href="/contact-us"
                className="bg-black rounded-full p-2"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-white" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-black rounded-full p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-black rounded-full p-2"
                aria-label="Youtube"
              >
                <FaYoutube className="text-white" />
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col order-2 tablet:order-3 tablet:w-[25%] laptop:w-[20%]">
            <div className="text-lg tablet:text-base font-bold mb-6">About</div>
            <Link
              href="/about"
              className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700"
            >
              About Us
            </Link>
            <Link
              href="/about/how-we-review-vpn"
              className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700"
            >
              Our Review Process
            </Link>
            <Link
              href="/about/how-we-make-money"
              className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700"
            >
              How We Make Money
            </Link>
          </div>
        </div>

        {/* bottom part of footer */}
        <div className="flex px-3 tablet:px-10 4k:mx-[200px] flex-col ">
          <div className="flex flex-wrap pb-4 gap-2">
            <Link
              href="/privacy-policy"
              className="border-r h-fit border-black text-sm hover:text-blue-700 pr-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="border-r h-fit border-black text-sm hover:text-blue-700 pr-2"
            >
              Cookie Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-sm hover:text-blue-700 pr-2"
            >
              Terms of Use
            </Link>
          </div>
          <p className="text-sm mb-4">
            vpns.guide is operated by{" "}
            <Link
              href="https://velocityclick.in/"
              className="italic hover:text-blue-700"
            >
              Velocity Click{" "}
            </Link>
            .
          </p>
          <p className="text-sm mb-4">
            vpns.guide is made by{" "}
            <Link
              href="https://nbtservices.framer.website/"
              className="italic hover:text-blue-700"
            >
              Next Big Thing{" "}
            </Link>
          </p>
        </div>
        <h6 className="text-center">
          © 2016-2024. Vpn Guide. All rights reserved
        </h6>
      </footer>
    </>
  );
};

export default Footer;
