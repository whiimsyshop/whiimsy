"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_TRACKING_ID } from "../pages/config/analytics"; // Import GA ID

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const useAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      window.gtag?.("event", "click", {
        event_category: "User Interaction",
        event_label: target.tagName + " - " + (target.id || target.className || "Unknown"),
      });
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
      window.gtag?.("event", "scroll", {
        event_category: "User Interaction",
        event_label: "Scroll Depth",
        value: Math.round(scrollDepth),
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      window.gtag?.("event", "visibility_change", {
        event_category: "User Engagement",
        event_label: document.visibilityState,
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const handleDeviceInfo = () => {
      window.gtag?.("event", "device_info", {
        event_category: "User Info",
        event_label: navigator.userAgent,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        language: navigator.language,
      });
    };

    handleDeviceInfo();
  }, []);
};

export default useAnalytics;
