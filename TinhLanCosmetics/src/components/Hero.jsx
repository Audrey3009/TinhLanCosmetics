import React, { useState, useEffect } from 'react';
import "../styles/Hero.css";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['../assets/banner.jpg', '../assets/banner.jpg', '../assets/banner.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Thay đổi hình ảnh mỗi 3 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hình ảnh ${index + 1}`}
          className={index === currentImageIndex ? 'active' : ''}
          
        />
      ))}
    </div>
  );
}

export default Hero