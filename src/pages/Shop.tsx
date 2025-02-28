"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ShopRedirect = () => {
  useEffect(() => {
    window.location.replace("https://whiimsy.mini.site");
  }, []);

  return null; // Prevents any UI from rendering
};

export default ShopRedirect;
