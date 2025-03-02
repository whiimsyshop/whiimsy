import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga'; // For Google Analytics

const AnalyticsTracker = () => {
  const [startTime, setStartTime] = useState(Date.now());
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-JGVYE0JRWB'); // Replace with your Google Analytics ID
    ReactGA.pageview(window.location.pathname + window.location.search);

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

  return (
    <div>
      {/* Display scroll position as a percentage */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 999 }}>
        <p>Scroll Position: {Math.round(scrollPosition)}%</p>
      </div>
    </div>
  );
};

export default AnalyticsTracker;
