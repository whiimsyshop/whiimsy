"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const AnalyticsTracker = () => {
  const pathname = usePathname();

  // 📌 Track Page Views
  useEffect(() => {
    if (!window.gtag || !pathname) return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname]);

  // 📌 Track Click Events
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!window.gtag) return;
      const target = event.target as HTMLElement;
      const targetText = target.innerText?.trim();
      const targetId = target.id || target.className || "Unknown";

      // 🖱️ General Click Tracking
      window.gtag("event", "click", {
        event_category: "User Interaction",
        event_label: `${target.tagName} - ${targetId}`,
      });

      // 🛍️ "Shop Now" Button Click
      if (targetText === "Shop Now" || target.classList.contains("shop-now-button")) {
        window.gtag("event", "shop_now_click", {
          event_category: "E-commerce",
          event_label: "Shop Now Button",
          page_path: pathname,
        });
      }

      // 🛒 "Add to Cart" Button Click
      if (target.classList.contains("add-to-cart-button")) {
        window.gtag("event", "add_to_cart", {
          event_category: "E-commerce",
          event_label: "Add to Cart",
          product_name: target.dataset.productName || "Unknown",
        });
      }

      // ❤️ "Wishlist" Button Click
      if (target.classList.contains("wishlist-button")) {
        window.gtag("event", "add_to_wishlist", {
          event_category: "E-commerce",
          event_label: "Wishlist",
          product_name: target.dataset.productName || "Unknown",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // 📌 Track Product Page Views (Fixed)
  useEffect(() => {
    if (!window.gtag || !pathname) return;
    if (pathname.includes("/product/")) {
      window.gtag("event", "view_product", {
        event_category: "E-commerce",
        event_label: pathname,
      });
    }
  }, [pathname]);

  return null; // No UI rendering
};

export default AnalyticsTracker;
