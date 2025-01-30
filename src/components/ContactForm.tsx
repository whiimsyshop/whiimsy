"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState<string>(""); // State to store the result message

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Hardcoded API key
    const accessKey = "9f8d0cb0-d575-4be7-982c-d52773b524af"; // Replace with your API key

    // Get the input values
    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const message = (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subjectInput = (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value;

    // Concatenate the static text with the input subject
    const subject = `New Contact Form Submitted + ${subjectInput}`;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject, // Concatenated subject
      }),
    });

    const resultData = await response.json();

    if (resultData.success) {
      setResult("Thank You, Your form has been successfully submitted.");
      form.reset(); // Reset the form after successful submission
    } else {
      setResult("Error submitting form. Please try again.");
    }
  };

  return (
    <section>
      <div className="block">
        <div className="ContactForm">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Your name</label>
              <input
                id="form-name"
                type="text"
                name="name"
                required
                className="contact-Inp p-3"
              />
            </div>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Email</label>
              <input
                id="form-email"
                type="email"
                name="email"
                required
                className="contact-Inp p-3"
              />
            </div>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Subject</label>
              <input
                id="form-subject"
                type="text"
                name="subject"
                required
                className="contact-Inp p-3"
              />
            </div>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Message</label>
              <textarea
                id="form-message"
                name="message"
                required
                className="contact-Inp p-3"
              ></textarea>
            </div>
            <button type="submit" className="contact-btn px-3 py-2">
              Send Message
            </button>
          </form>

          {/* Display the result message */}
          {result && (
            <div className="mt-4 text-lg font-semibold text-green-600">
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
