import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import reflee from "../assets/reflee.jpg";
import deep_clean from "../assets/deep_clean.jpg";
import braz_wax from "../assets/braz-wax.webp";
import gel_pedi from "../assets/gel_pedi.jpg";
import { Link } from 'react-router-dom';

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images for the carousel
  const slides = [
    {
      title: 'Reflexology',
      img: reflee,
      link: '/services',
      description: 'Experience healing through Reflexology.',
    },
    {
      title: 'Facial Cleaning',
      img: deep_clean,
      link: '/service4',
      description: 'Get your skin back to its natural state.',
    },
    {
      title: 'Waxing',
      img: braz_wax,
      link: '/service3',
      description: 'Get smooth and flawless skin with our waxing services.',
    },
    {
      title: 'Gel Pedicure',
      img: gel_pedi,
      link: '/service2',
      description: 'Get your nails done by us.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-[#f3f4f6] p-4 md:p-8">
      <div className="relative w-full max-w-[900px] p-6 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
        {/* Arrows beside image for larger screens */}
        <div className="hidden md:flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
          <FaChevronLeft
            onClick={handlePrev}
            className="text-4xl text-gray-500 hover:text-[#415941] cursor-pointer transition-colors duration-300"
          />
          <FaChevronRight
            onClick={handleNext}
            className="text-4xl text-gray-500 hover:text-[#415941] cursor-pointer transition-colors duration-300"
          />
        </div>

        {/* Slide Content */}
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="w-[300px] sm:w-[400px] md:w-[500px] max-w-full">
            <img
              src={slides[currentIndex].img}
              alt="Slide Image"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#415941] mb-2 mt-4 sm:mt-6">
            {slides[currentIndex].title}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            {slides[currentIndex].description}
          </p>
          <Link to={slides[currentIndex].link}>
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold text-sm sm:text-lg transition-transform transform hover:scale-105"
            >
              View Services
            </button>
          </Link>
        </div>

        {/* Arrows under the image for small screens */}
        <div className="flex md:hidden justify-between w-full mt-6">
          <FaChevronLeft
            onClick={handlePrev}
            className="text-3xl text-gray-500 hover:text-[#415941] cursor-pointer transition-colors duration-300"
          />
          <FaChevronRight
            onClick={handleNext}
            className="text-3xl text-gray-500 hover:text-[#415941] cursor-pointer transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
