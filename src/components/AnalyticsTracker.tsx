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
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", { page_path: pathname });
    }
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

      // 📸 Promo Banner Click
      if (target.tagName === "IMG" && target.classList.contains("promo-banner")) {
        const imgTarget = target as HTMLImageElement;
        window.gtag("event", "banner_click", {
          event_category: "Promotion",
          event_label: imgTarget.alt || "Promo Banner",
        });
      }

      // ▶️ Video Play (YouTube)
      if (target.tagName === "IFRAME") {
        const iframeTarget = target as HTMLIFrameElement;
        if (iframeTarget.src.includes("youtube.com")) {
          window.gtag("event", "video_play", {
            event_category: "Media Engagement",
            event_label: iframeTarget.src,
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // 📌 Track Scroll Depth
  useEffect(() => {
    const handleScroll = () => {
      if (!window.gtag) return;
      const scrollDepth = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
      window.gtag("event", "scroll", {
        event_category: "User Interaction",
        event_label: "Scroll Depth",
        value: Math.round(scrollDepth),
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📌 Track Time Spent on Page
  useEffect(() => {
    const startTime = Date.now();
    return () => {
      if (!window.gtag) return;
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      window.gtag("event", "time_on_page", {
        event_category: "User Engagement",
        event_label: pathname,
        value: timeSpent,
      });
    };
  }, [pathname]);

  // 📌 Track Exit Intent
  useEffect(() => {
    const handleExitIntent = (event: MouseEvent) => {
      if (!window.gtag) return;
      if (event.clientY < 10) {
        window.gtag("event", "exit_intent", {
          event_category: "User Behavior",
          event_label: pathname,
        });
      }
    };

    document.addEventListener("mouseleave", handleExitIntent);
    return () => document.removeEventListener("mouseleave", handleExitIntent);
  }, []);

  // 📌 Track Form Submissions
  useEffect(() => {
    const handleSubmit = (event: Event) => {
      if (!window.gtag) return;
      window.gtag("event", "form_submission", {
        event_category: "User Engagement",
        event_label: "Form Submitted",
        page_path: pathname,
      });
    };

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => form.addEventListener("submit", handleSubmit));

    return () => forms.forEach((form) => form.removeEventListener("submit", handleSubmit));
  }, [pathname]);

  // 📌 Track Product Page Views
  useEffect(() => {
    if (!window.gtag) return;
    if (pathname.includes("/product/")) {
      window.gtag("event", "view_product", {
        event_category: "E-commerce",
        event_label: pathname,
      });
    }
  }, [pathname]);

  // 📌 Track UTM Parameters (Marketing Campaigns)
  useEffect(() => {
    if (!window.gtag) return;
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    if (utmSource) {
      window.gtag("event", "utm_tracking", {
        event_category: "Marketing",
        event_label: `${utmSource} - ${utmCampaign}`,
        medium: utmMedium,
      });
    }
  }, []);

  // 📌 Track Click Position (Heatmap Simulation)
  useEffect(() => {
    const handleClickPosition = (event: MouseEvent) => {
      if (!window.gtag) return;
      window.gtag("event", "click_position", {
        event_category: "User Interaction",
        event_label: `X: ${event.clientX}, Y: ${event.clientY}`,
        page_path: pathname,
      });
    };

    document.addEventListener("click", handleClickPosition);
    return () => document.removeEventListener("click", handleClickPosition);
  }, [pathname]);

  return null; // No UI rendering
};

export default AnalyticsTracker;
