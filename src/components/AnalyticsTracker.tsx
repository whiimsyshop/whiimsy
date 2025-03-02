"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = "G-JGVYE0JRWB"; // Directly define GA ID

const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", { page_path: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!window.gtag) return;

      const target = event.target as HTMLElement;
      window.gtag("event", "click", {
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
      if (!window.gtag) return;

      const scrollDepth = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
      window.gtag("event", "scroll", {
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
      if (!window.gtag) return;

      window.gtag("event", "visibility_change", {
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
      if (!window.gtag) return;

      window.gtag("event", "device_info", {
        event_category: "User Info",
        event_label: navigator.userAgent,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        language: navigator.language,
      });
    };

    handleDeviceInfo();
  }, []);

  return null; // Component does not render anything
};

export default AnalyticsTracker;
