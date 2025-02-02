import { MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';
import { SlEnvolope } from 'react-icons/sl';
import dynamic from 'next/dynamic';
import HeaderBox from "@/components/HeaderBox";

// Dynamically import the ContactForm component
const ContactForm = dynamic(() => import("../components/ContactForm"), { ssr: false });

const ContactPage = () => {
  return (
    <section className="about-main laptop:w-full">
      <div className="w-full">
        <HeaderBox title="Contact Us" />
      </div>
      <div className="mt-10 mb-10 flex flex-col gap-8 laptop:flex-row laptop:justify-center laptop:items-center tablet:px-0 laptop:px-20 px-6 md:px-6 ml-10">
        <div className="laptop:w-1/2 px-2 w-full">
          <ContactForm />
        </div>
        <div className="laptop:w-1/2 px-4 flex flex-col items-center justify-center w-full">
          <h3 className="font-bold text-xl mb-8 text-left w-full pl-0 laptop:pl-32">
            Don&apos;t like filling out forms? <br />
            Here are other ways to connect with us:
          </h3>
          <div className="mb-8 text-left w-full pl-0 laptop:pl-32">
            <div className="flex text-lg mb-6 gap-3 justify-start">
              <MdOutlinePhone className="text-xl" />
              <span>+91 8981256860</span>
            </div>
            <div className="flex text-lg mb-6 gap-3 justify-start">
              <SlEnvolope className="text-xl" />
              <span>whiimsyteam@gmail.com</span>
            </div>
            <div className="flex text-lg mb-6 gap-3 justify-start">
              <MdOutlineLocationOn className="text-2xl laptop:text-2xl" />
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
