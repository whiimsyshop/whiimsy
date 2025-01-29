"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ShopRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Redirect to the desired URL
      router.replace("https://whiimsy.mini.site");
    }
  }, [router]);

  // You can return a loading state or null while the redirection happens
  return <p>Redirecting...</p>;
};

export default ShopRedirect;
