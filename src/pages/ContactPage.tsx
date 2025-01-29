import ContactForm from "../components/ContactForm";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import HeaderBox from "@/components/HeaderBox";

const ContactPage = () => {
  return (
    <section className="about-main laptop:w-full">
      <div className="w-full">
        <HeaderBox title="Contact Us" />
      </div>
      <div className="mt-24 flex flex-col gap-8 laptop:flex laptop:flex-row laptop:justify-center laptop:items-center tablet:px-0 laptop:px-20 px-6 md:px-6">
        <div className="laptop:w-1/2 px-2">
          <ContactForm />
        </div>
        <div className="laptop:w-1/2 px-4">
          <h3 className="font-bold text-xl mb-8">
            Don&apos;t like filling out forms? <br />
            Here are other ways to connect with us:
          </h3>
          <ul className="mb-8">
            <li className="flex text-lg mb-6 gap-3 justify-start items-center">
              <MdOutlinePhone className="text-xl" />
              <span>+91 8981256860</span>
            </li>
            <li className="flex text-lg mb-6 gap-3 justify-start items-center">
              <SlEnvolope className="text-xl" />
              <span>whiimsyteam@gmail.com</span>
            </li>
            <li className="flex text-lg mb-6 gap-3 justify-start items-center">
              <MdOutlineLocationOn className="text-2xl laptop:text-2xl" />
              <span>Kolkata, West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
