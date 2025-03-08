"use client"

import React, { useState, useEffect } from 'react';
import test1 from '../../../../../images/carrocel/1.png';
import test2 from '../../../../../images/carrocel/2.png';
import test3 from '../../../../../images/carrocel/3.png';

export default function Carrocel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        test1.src,
        test2.src,
        test3.src
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative overflow-hidden ">
            <button onClick={prevImage} className="absolute left-0">Anterior</button>
            <div className="flex transition-transform duration-500 ease-in-out m-0" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="w-full flex-shrink-0" key={index}>
                        <img src={image} alt="Carrossel" className="w-full h-[400px] object-cover" />
                    </div>
                ))}
            </div>
            <button onClick={nextImage} className="absolute right-0">Próximo</button>
        </div>
    );
}