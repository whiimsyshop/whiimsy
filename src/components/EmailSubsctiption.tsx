"use client";
import React, { useState, FormEvent } from "react";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() && validateEmail(email)) {
      // Web3Forms API integration
      const accessKey = "9f8d0cb0-d575-4be7-982c-d52773b524af"; // Your public access key from Web3Forms
      const formData = {
        access_key: accessKey,
        name,
        email,
        subject: "New Email Subscriber", // Static subject for email
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setSuccess(true);
          setError(false);
          setEmail("");
          setName("");
        } else {
          setError(true);
          setSuccess(false);
        }
      } catch (err) {
        setError(true);
        setSuccess(false);
      }
    } else {
      alert("Please enter a valid email address!");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.5)] rounded-2xl p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">Subscribe to our Newsletter</h2>
        <p className="text-center text-gray-600 mb-6">Stay updated with the latest news, articles, and promotions!</p>
        {success ? (
          <div className="text-center text-green-600 font-medium">🎉 Thank you for subscribing!</div>
        ) : error ? (
          <div className="text-center text-red-600 font-medium">Oops! Something went wrong. Please try again.</div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <label htmlFor="name" className="text-gray-700 font-medium" style={{ marginLeft: ".5rem" }}>
              Name
            </label>
            <input
              id="name"
              type="text"
              style={{ marginTop: "-1rem" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="email" className="text-gray-700 font-medium" style={{ marginLeft: ".5rem" }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              style={{ marginTop: "-1rem" }}
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
