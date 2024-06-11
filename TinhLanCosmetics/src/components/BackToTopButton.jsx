import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-20 right-4 z-30 p-3 rounded-full bg-[#61C0BF] text-white cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'hidden'}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <FaArrowCircleUp className="text-lg" />
        </button>
    );
};

export default BackToTopButton;