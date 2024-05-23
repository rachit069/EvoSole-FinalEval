import React, { useState, useEffect } from 'react';
import './banner.css'; // Assuming you have a CSS file for styling

const Banner = () => {
  const [position, setPosition] = useState(0);
  const bannerContent = "40% off "; // Content of the banner

  useEffect(() => {
    const contentWidth = document.querySelector('.content').offsetWidth;
    const bannerWidth = document.querySelector('.banner').offsetWidth;

    const interval = setInterval(() => {
      if (position >= contentWidth) {
        setPosition(10);
      } else {
        setPosition(prevPosition => prevPosition + 1);
      }
    }, 100); // Change the duration according to your preference

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="banner">
      <div className="content" style={{ transform: `translateX(-${position}px)` }}>
        <h1>{bannerContent}</h1>
      </div>
    </div>
  );
};

export default Banner;

