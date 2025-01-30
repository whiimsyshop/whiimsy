import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-track">
        <p className="banner-text">
          🎁 Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> 🎁
        </p>
        <p className="banner-text">
          🎁 Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> 🎁
        </p>
        <p className="banner-text">
          🎁 Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> | Monthly Giveaway | <span className="highlight">FREE CANDLE</span> 🎁
        </p>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

        .banner {
          background: linear-gradient(90deg, #FCE7F3, #C5E1E6); /* Soft pastel pink & blue */
          color: #5D4157; /* Muted purple for readability */
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: fixed;
          top: 0;
          width: 100%;
          overflow: hidden;
          padding: 12px 0;
          z-index: 1000;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .banner-track {
          display: flex;
          width: max-content;
          animation: scroll 12s linear infinite;
        }

        .banner-text {
          display: inline-block;
          padding-right: 40px;
          white-space: nowrap;
        }

        .highlight {
          color: #FF6B6B; /* Soft coral for emphasis */
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 107, 107, 0.6);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
