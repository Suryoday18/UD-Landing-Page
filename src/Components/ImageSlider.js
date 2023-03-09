import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


const Slideshow = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex, images.length]);

    const handlePreviousClick = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className="slideshow">
            <button className="slideshow-button" onClick={handlePreviousClick}><FiChevronLeft /></button>
            <img src={images[currentImageIndex]} alt="Slideshow" />
            <button className="slideshow-button" onClick={handleNextClick}><FiChevronRight /></button>
        </div>
    );
};

export default Slideshow;