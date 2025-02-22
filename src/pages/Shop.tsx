"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Show loader for 3 seconds
  }, []);

  return loading ? <Loader /> : <div>Your main content here</div>;
}

export default App;


const ShopRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Redirect to the desired URL
      router.replace("https://whiimsy.mini.site");
    }
  }, [router]);

  // You can return a loading state or null while the redirection happens
  return <p>Redirecting...</p>;
};

export default ShopRedirect;
