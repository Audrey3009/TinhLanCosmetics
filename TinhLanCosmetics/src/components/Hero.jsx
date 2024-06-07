import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['../public/main_banner1.jpg', '../public/main_banner2.jpg', '../public/main_banner3.jpg']; // Thay thế bằng đường dẫn ảnh của bạn
  const timeoutRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextImage, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentImageIndex]);

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full shrink-0 flex items-center justify-center"
          >
            <img src={image} alt={`Banner ${index + 1}`} className="w-[1200px] h-[520px] object-cover"  />
          </div>
        ))}
      </div>
      <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer z-10">
        <FaChevronLeft />
      </button>
      <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer z-10">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;