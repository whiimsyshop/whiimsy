// components/BackToTop.tsx
"use client";
// added to all pages by import on app/layout.tsx page

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-6 p-3 rounded-full bg-green-600 text-white shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
