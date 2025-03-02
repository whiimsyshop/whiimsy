import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga'; // For Google Analytics or GTM
import Cookies from 'js-cookie'; // For UTM Tracking
import { useLocalStorage } from 'react-use'; // Optional for time spent tracking

// Optional heatmap tracking: you may use a different library if 'react-heatmap' isn't compatible
// import heatmap from 'react-heatmap'; 

const AnalyticsTracker = () => {
  const [startTime, setStartTime] = useState(Date.now());
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    // Initialize Google Analytics or GTM
    ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_ID'); // Replace with your Google Analytics ID
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Get UTM Parameters from the URL or cookies
    const utms = getUTMParameters();
    setUtmParams(utms);

    // Track initial page view
    trackPageView();

    // Set up scroll tracking
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollPosition(scrollPercentage);
      trackScroll(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    // Track time spent
    const timer = setInterval(() => {
      const timeSpent = Date.now() - startTime;
      trackTimeSpent(timeSpent);
    }, 1000); // Track every second

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Capture UTM parameters
  const getUTMParameters = () => {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const params: any = {};
    
    // Capture UTM params from the URL query
    utmParams.forEach((param) => {
      if (router.query[param]) {
        params[param] = router.query[param];
        // Store UTM in cookies to persist across pages
        Cookies.set(param, router.query[param], { expires: 30 }); // Set expiry to 30 days
      } else {
        const cookieValue = Cookies.get(param);
        if (cookieValue) {
          params[param] = cookieValue;
        }
      }
    });

    return params;
  };

  const trackPageView = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log('Pageview tracked:', window.location.pathname);
  };

  const trackScroll = (percentage: number) => {
    // Replace with your own analytics service
    console.log(`Scrolled: ${percentage}%`);
    ReactGA.event({
      category: 'Scroll',
      action: 'Scroll Depth',
      label: `${percentage}%`
    });
  };

  const trackTimeSpent = (time: number) => {
    // Replace with your own analytics service
    console.log(`Time spent: ${Math.floor(time / 1000)} seconds`);
    ReactGA.event({
      category: 'Time',
      action: 'Time Spent',
      label: `${Math.floor(time / 1000)} seconds`
    });
  };

  const trackUTMParameters = () => {
    console.log('UTM Parameters:', utmParams);
    ReactGA.event({
      category: 'UTM',
      action: 'UTM Parameters',
      label: JSON.stringify(utmParams)
    });
  };

  return (
    <div>
      {/* Optionally, insert heatmap visualization */}
      {/* You can customize the heatmap tracking here */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 999 }}>
        <p>Scroll Position: {Math.round(scrollPosition)}%</p>
      </div>
    </div>
  );
};

export default AnalyticsTracker;
