"use client";

import React, { useState } from 'react';
import HeaderBox from "@/components/HeaderBox";

const CandleGiveaway: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        // Reset form fields
        setName('');
        setEmail('');
    };

    return (
        
        <div style={containerStyle}>
            <h1>Free Candle Giveaway</h1>
            <p>Join our monthly giveaway to win a beautifully handcrafted candle from Ladie Lex Candles! Simply fill out the form below to enter:</p>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Enter Giveaway</button>
            </form>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
};

const formStyle: React.CSSProperties = {
    marginTop: '20px',
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #cccccc',
    boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    cursor: 'pointer',
};

export default CandleGiveaway;
