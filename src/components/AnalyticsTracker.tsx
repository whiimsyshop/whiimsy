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

// Track User Demographics (Custom Dimensions)
useEffect(() => {
  if (window.gtag) {
    // Example: Sending user demographic data
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
    if (window.gtag) {
      window.gtag('event', 'session_duration', {
        event_category: 'User Engagement',
        event_label: pathname,
        value: duration,
      });
    }
  };
}, [pathname]);


// Track Exit Pages
useEffect(() => {
  const handleExit = () => {
    if (window.gtag) {
      window.gtag('event', 'exit_page', {
        event_category: 'User Behavior',
        event_label: pathname,
      });
    }
  };

  window.addEventListener('beforeunload', handleExit);
  return () => window.removeEventListener('beforeunload', handleExit);
}, [pathname]);


// Track Visibility Change
useEffect(() => {
  const handleVisibilityChange = () => {
    if (window.gtag) {
      window.gtag('event', 'visibility_change', {
        event_category: 'User Engagement',
        event_label: document.visibilityState,
      });
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, []);

// Track Errors (404s, broken links)
useEffect(() => {
  const handleError = (event) => {
    if (event.target instanceof HTMLImageElement && !event.target.complete) {
      // Track broken image errors
      window.gtag('event', 'error', {
        event_category: 'Error Tracking',
        event_label: `Broken image on ${pathname}`,
      });
    } else if (event.target instanceof HTMLLinkElement && event.target.href === null) {
      // Track broken link errors
      window.gtag('event', 'error', {
        event_category: 'Error Tracking',
        event_label: `Broken link on ${pathname}`,
      });
    }
  };

  window.addEventListener('error', handleError);
  return () => window.removeEventListener('error', handleError);
}, [pathname]);

// Track Custom User Actions
const handleCustomAction = (action) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'User Interaction',
      event_label: pathname,
    });
  }
};

// Example of calling the function when a custom action occurs
handleCustomAction('add_to_comparison');


// Track Form Fields Interactions
useEffect(() => {
  const formFields = document.querySelectorAll("input, textarea, select");

  formFields.forEach((field) => {
    field.addEventListener('focus', () => {
      if (window.gtag) {
        window.gtag('event', 'form_field_focus', {
          event_category: 'User Interaction',
          event_label: field.name,
        });
      }
    });

    field.addEventListener('input', () => {
      if (window.gtag) {
        window.gtag('event', 'form_field_input', {
          event_category: 'User Interaction',
          event_label: field.name,
        });
      }
    });
  });

  return () => {
    formFields.forEach((field) => {
      field.removeEventListener('focus', () => {});
      field.removeEventListener('input', () => {});
    });
  };
}, []);


// Track Page Load Time
useEffect(() => {
  const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
  if (window.gtag) {
    window.gtag('event', 'page_load_time', {
      event_category: 'Performance',
      event_label: pathname,
      value: loadTime,
    });
  }
}, [pathname]);


// Track User Interactions with Navigation
useEffect(() => {
  const handleNavClick = (event) => {
    if (event.target.closest('nav, .sidebar')) {
      const target = event.target;
      if (window.gtag) {
        window.gtag('event', 'navigation_click', {
          event_category: 'User Interaction',
          event_label: target.tagName + ' - ' + target.textContent,
        });
      }
    }
  };

  document.addEventListener('click', handleNavClick);
  return () => document.removeEventListener('click', handleNavClick);
}, []);

// Track Multi-Device Usage
useEffect(() => {
  if (window.gtag) {
    window.gtag('set', { 'user_id': 'USER_ID' }); // Ensure 'USER_ID' is unique per user
  }
}, []);


// Track Internal Site Search
useEffect(() => {
  const searchInput = document.querySelector('[name="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value;
      if (window.gtag) {
        window.gtag('event', 'search_query', {
          event_category: 'User Engagement',
          event_label: searchQuery,
        });
      }
    });
  }
}, []);


// Track Search Engine Referrals
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmCampaign = urlParams.get("utm_campaign");

  if (utmSource && window.gtag) {
    window.gtag('event', 'utm_tracking', {
      event_category: 'Marketing',
      event_label: `${utmSource} - ${utmCampaign}`,
      medium: utmMedium,
    });
  }
}, []);


// Track Social Media Interactions
useEffect(() => {
  const socialButtons = document.querySelectorAll('.social-share-button');
  socialButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const platform = button.dataset.platform; // e.g., "Facebook", "Twitter"
      if (window.gtag) {
        window.gtag('event', 'social_share', {
          event_category: 'Social Media',
          event_label: platform,
        });
      }
    });
  });
}, []);


//Track Notification Clicks (e.g., Push Notifications)
useEffect(() => {
  const notificationButtons = document.querySelectorAll('.push-notification');
  notificationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (window.gtag) {
        window.gtag('event', 'push_notification_click', {
          event_category: 'User Engagement',
          event_label: 'Notification Clicked',
        });
      }
    });
  });
}, []);




  return null; // No UI rendering
};

export default AnalyticsTracker;
