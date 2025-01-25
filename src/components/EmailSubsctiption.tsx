"use client";
import React, { useState } from "react";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && validateEmail(email)) {
      setSuccess(true);
      setEmail("");
      // Handle email subscription logic here (e.g., API call)
      console.log("Subscribed with email:", email);
    } else {
      alert("Please enter a valid email address!");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Stay updated with the latest news, articles, and promotions!
        </p>
        {success ? (
          <div className="text-center text-green-600 font-medium">
            🎉 Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailSubscription;
