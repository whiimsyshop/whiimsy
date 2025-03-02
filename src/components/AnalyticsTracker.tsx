import { useEffect } from "react";
import { useRouter } from "next/router"; // Use useRouter for broader compatibility

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const AnalyticsTracker = () => {
  const router = useRouter();
  const pathname = router.pathname;

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 📌 Track Visibility Change (when user switches tabs)
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

  // 📌 Track Time Spent on Page
  useEffect(() => {
    let startTime = Date.now();
  
    return () => {
      if (typeof window !== "undefined" && window.gtag) { // ✅ Ensure gtag exists before calling
        let timeSpent = Math.round((Date.now() - startTime) / 1000);
        window.gtag("event", "time_on_page", {
          event_category: "User Engagement",
          event_label: pathname || "Unknown", // ✅ Handle potential null value
          value: timeSpent,
        });
      }
    };
  }, [pathname]);

  // 📌 Track Exit Intent (detect when user moves cursor out of viewport)
  useEffect(() => {
    const handleExitIntent = (event: MouseEvent) => {
      if (typeof window !== "undefined" && window.gtag && event.clientY < 10) { // ✅ Ensure gtag exists
        window.gtag("event", "exit_intent", {
          event_category: "User Behavior",
          event_label: pathname || "Unknown", // ✅ Handle potential null value
        });
      }
    };

    document.addEventListener("mouseleave", handleExitIntent);
    return () => document.removeEventListener("mouseleave", handleExitIntent);
  }, [pathname]);

  // 📌 Track Form Submissions (e.g., Newsletter, Contact)
  useEffect(() => {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", () => {
        if (window.gtag) {
          window.gtag("event", "form_submission", {
            event_category: "User Engagement",
            event_label: "Form Submitted",
            page_path: pathname,
          });
        }
      });
    });
  }, [pathname]);

  // 📌 Track UTM Parameters (for marketing campaigns)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    if (utmSource && window.gtag) { // ✅ Ensure gtag exists before calling
      window.gtag("event", "utm_tracking", {
        event_category: "Marketing",
        event_label: `${utmSource} - ${utmCampaign}`,
        medium: utmMedium,
      });
    }
  }, []);

  // 📌 Capture Click Position (Heatmap Simulation)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (window.gtag) { // ✅ Ensure gtag exists before calling
        window.gtag("event", "click_position", {
          event_category: "User Interaction",
          event_label: `X: ${event.clientX}, Y: ${event.clientY}`,
          page_path: pathname,
        });
      }
    };
  
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // 📌 Track 404 Errors (Broken Links)
  useEffect(() => {
    const handle404Error = () => {
      if (document.title.includes("404") && window.gtag) {
        window.gtag("event", "error_404", {
          event_category: "Error",
          event_label: "Page Not Found",
          page_path: pathname,
        });
      }
    };

    window.addEventListener("error", handle404Error);
    return () => window.removeEventListener("error", handle404Error);
  }, [pathname]);

  // 📌 Track Page Load Time
  useEffect(() => {
    const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    if (window.gtag) {
      window.gtag("event", "page_load_time", {
        event_category: "Performance",
        event_label: "Page Load Time",
        value: pageLoadTime, // in milliseconds
      });
    }
  }, []);

  // 📌 Track Search Engine Referrals
  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && referrer.includes("google.com")) {
      window.gtag("event", "search_engine_referral", {
        event_category: "Referral",
        event_label: "Google Search",
        page_path: pathname,
      });
    }
  }, []);

  return null; // No UI rendering
};

export default AnalyticsTracker;
