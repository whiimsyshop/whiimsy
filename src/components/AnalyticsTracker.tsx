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

  // Helper function to reduce repetition of gtag calls
  const sendGtagEvent = (
    eventCategory: string,
    eventAction: string,
    eventLabel?: string,
    value?: number
  ) => {
    if (window.gtag) {
      window.gtag("event", eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value,
      });
    }
  };

  // 📌 Track Page Views
  useEffect(() => {
    if (!window.gtag || !pathname) return;
    sendGtagEvent("page_view", "page_view", pathname);
  }, [pathname]);

  // 📌 Track Click Events
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const targetText = target.innerText?.trim();
      const targetId = target.id || target.className || "Unknown";

      // 🖱️ General Click Tracking
      sendGtagEvent("User Interaction", "click", `${target.tagName} - ${targetId}`);

      // 🛍️ "Shop Now" Button Click
      if (targetText === "Shop Now" || target.classList.contains("shop-now-button")) {
        sendGtagEvent("E-commerce", "shop_now_click", "Shop Now Button", undefined);
      }

      // 🛒 "Add to Cart" Button Click
      if (target.classList.contains("add-to-cart-button")) {
        sendGtagEvent("E-commerce", "add_to_cart", "Add to Cart", undefined);
      }

      // ❤️ "Wishlist" Button Click
      if (target.classList.contains("wishlist-button")) {
        sendGtagEvent("E-commerce", "add_to_wishlist", "Wishlist", undefined);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // 📌 Track Product Page Views (Fixed)
  useEffect(() => {
    if (!window.gtag || !pathname) return;
    if (pathname.includes("/product/")) {
      sendGtagEvent("E-commerce", "view_product", pathname);
    }
  }, [pathname]);

  // 📌 Track Scroll Depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
      sendGtagEvent("User Interaction", "scroll", "Scroll Depth", Math.round(scrollDepth));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 📌 Track Visibility Change (when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      sendGtagEvent("User Engagement", "visibility_change", document.visibilityState);
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
      if (typeof window !== "undefined" && window.gtag && pathname) {
        let timeSpent = Math.round((Date.now() - startTime) / 1000);
        sendGtagEvent("User Engagement", "time_on_page", pathname, timeSpent);
      }
    };
  }, [pathname]);

  // 📌 Track Exit Intent (detect when user moves cursor out of viewport)
  useEffect(() => {
    const handleExitIntent = (event: MouseEvent) => {
      if (typeof window !== "undefined" && window.gtag && event.clientY < 10 && pathname) {
        sendGtagEvent("User Behavior", "exit_intent", pathname);
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
        sendGtagEvent("User Engagement", "form_submission", "Form Submitted", undefined);
      });
    });
  }, [pathname]);

  // 📌 Track UTM Parameters (for marketing campaigns)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    if (utmSource) {
      sendGtagEvent("Marketing", "utm_tracking", `${utmSource} - ${utmCampaign}`, undefined);
    }
  }, []);

  // 📌 Capture Click Position (Heatmap Simulation)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      sendGtagEvent("User Interaction", "click_position", `X: ${event.clientX}, Y: ${event.clientY}`);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Track User Demographics (Custom Dimensions)
  useEffect(() => {
    if (window.gtag) {
      window.gtag('set', {
        'user_id': 'USER_ID', // Example: Replace with actual user ID
        'user_age': '25-34', // Example: Use actual age data
        'user_gender': 'female', // Example: Use actual gender data
      });
    }
  }, []);

  // Track Session Duration
  useEffect(() => {
    const startTime = Date.now();
    return () => {
      const duration = Math.round((Date.now() - startTime) / 1000); // time in seconds
      if (pathname) {
        sendGtagEvent('User Engagement', 'session_duration', pathname, duration);
      }
    };
  }, [pathname]);

  // Track Exit Pages
  useEffect(() => {
    const handleExit = () => {
      if (pathname) {
        sendGtagEvent('User Behavior', 'exit_page', pathname);
      }
    };

    window.addEventListener('beforeunload', handleExit);
    return () => window.removeEventListener('beforeunload', handleExit);
  }, [pathname]);

  // Track Errors (404s, broken links)
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.target instanceof HTMLImageElement && !event.target.complete) {
        sendGtagEvent('Error Tracking', 'error', `Broken image on ${pathname}`);
      } else if (event.target instanceof HTMLLinkElement && event.target.href === null) {
        sendGtagEvent('Error Tracking', 'error', `Broken link on ${pathname}`);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [pathname]);

  // Track Custom User Actions
  const handleCustomAction = (action: string) => {
    if (pathname) {
      sendGtagEvent('User Interaction', action, pathname);
    }
  };

  // Example of calling the function when a custom action occurs
  handleCustomAction('add_to_comparison');

  // Track Form Fields Interactions
  useEffect(() => {
    const formFields = document.querySelectorAll("input, textarea, select");

    formFields.forEach((field) => {
      field.addEventListener('focus', (event) => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        if (target.name && pathname) {
          sendGtagEvent('User Interaction', 'form_field_focus', target.name);
        }
      });

      field.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        if (target.name && pathname) {
          sendGtagEvent('User Interaction', 'form_field_input', target.name);
        }
      });
    });

    return () => {
      formFields.forEach((field) => {
        field.removeEventListener('focus', () => {});
        field.removeEventListener('input', () => {});
      });
    };
  }, [pathname]);

  // Track Page Load Time
  useEffect(() => {
    if (pathname) {
      const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      sendGtagEvent('Performance', 'page_load_time', pathname, loadTime);
    }
  }, [pathname]);

  // Track User Interactions with Navigation
  useEffect(() => {
    const handleNavClick = (event: MouseEvent) => {
      if (event.target.closest('nav, .sidebar') && pathname) {
        const target = event.target as HTMLElement;
        sendGtagEvent('User Interaction', 'navigation_click', `${target.tagName} - ${target.textContent}`);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, [pathname]);

  // Track Multi-Device Usage
  useEffect(() => {
    if (window.gtag && pathname) {
      window.gtag('set', { 'user_id': 'USER_ID' }); // Ensure 'USER_ID' is unique per user
    }
  }, [pathname]);

  // Track Internal Site Search
  useEffect(() => {
    const searchInput = document.querySelector('[name="search"]');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const searchQuery = (searchInput as HTMLInputElement).value;
        if (pathname) {
          sendGtagEvent('User Engagement', 'search_query', searchQuery);
        }
      });
    }
  }, []);

  // Track Social Media Interactions
  useEffect(() => {
    const socialButtons = document.querySelectorAll('.social-share-button');
    socialButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const platform = button.getAttribute('data-platform');
        if (platform && pathname) {
          sendGtagEvent('Social Media', 'share', platform);
        }
      });
    });
  }, []);

  return null;
};

export default AnalyticsTracker;
