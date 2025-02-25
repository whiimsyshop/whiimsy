// components/WhatsAppButton.tsx
"use client";
// added to all pages by import on app/layout.tsx page

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "918981256860"; // Replace with your WhatsApp number

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-all"
    >
      <FaWhatsapp size={24} />
      <span>Chat with us</span>
    </Link>
  );
};

export default WhatsAppButton;
