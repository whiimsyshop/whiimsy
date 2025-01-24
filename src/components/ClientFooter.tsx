"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const ClientFooter = () => {
  const pathname = usePathname();

  return <Footer />;
};

export default ClientFooter;
