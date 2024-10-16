import React from 'react';
import pic from '../assets/white1.jpg';
import logo1 from '../assets/brand1.png';
import { Link } from 'react-router-dom';
import About from './about';
import Service from './service';
import Testimonial from './testimonial';
import Contact from './contact';
import MobileNav from './mobonav';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import slide2 from '../assets/white2.jpg'
import slide3 from "../assets/white4.jpg"


const slides = [
  {
    image: pic,
    title: "Huza Bliss Spa",
    description: "We aim to make you feel better with our massage service.",
    link: "/services",
    linkText: "Massage",
    textAlign: "text-center",
  },
  {
    image: slide2,
    title: "Huza Bliss Spa",
    description: "Get satisfied through our waxing service.", 
    link: "/service3",
    linkText: "Waxing",
    textAlign: "text-center",
  },
  {
    image: slide3,
    title: "Huza Bliss Spa",
    description: "Get your nails done with our nail care service.",
    link: "/service2",
    linkText: "Nail Care",
    textAlign: "text-center",
    
  },
];

const Homepage = () => {
  return (
    <>
      <section className="min-h-screen w-screen m-0 p-0">
        <div className="hidden md:flex w-full h-[10px] md:h-[30%] bg-gray-300 flex-col md:flex-row justify-between items-center p-6 md:py-[7px] md:px-[32px] text-[#415941] font-bold font-lora m-0">
          <Link to="/">
            <img src={logo1} alt="logo" className="w-[150px] md:w-[200px] text-[#415941]" />
          </Link>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[50px] mt-4 md:mt-0 items-center">
            <h2>
              <Link to="/about">ABOUT</Link>
            </h2>
            <div className="relative group">
              <h2 className="cursor-pointer">SERVICES</h2>
              <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
                <Link to="/services" className="hover:bg-gray-300 p-2">
                  Massage
                </Link>
                <Link to="/service2" className="hover:bg-gray-300 p-2">
                  Nail Care
                </Link>
                <Link to="/service3" className="hover:bg-gray-300 p-2">
                  Waxing
                </Link>
                <Link to="/service4" className="hover:bg-gray-300 p-2">
                  Facial Service
                </Link>
              </div>
            </div>
            <h2>BLOG</h2>
            <div className="relative group">
              <h2 className="cursor-pointer">TOP LINKS</h2>
              <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
                <a href="https://huzagateway.com/" className="hover:bg-gray-300 p-2">
                  Travelling
                </a>
              </div>
            </div>
          </div>
        </div>

        <MobileNav />

        <div id="hero" className="m-0 p-0">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} className="relative h-96 sm:h-80 md:h-96 min-h-[600px]">
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className=" bg-cover bg-center bg-fit" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full space-y-4 ${slide.textAlign}`}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">{slide.title}</h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-white">{slide.description}</p>
                  <Link
                    to={slide.link}
                    className="group inline-flex items-center gap-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium rounded-lg py-3 px-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    {slide.linkText}
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <About />
        <Service />
        <Testimonial />
        <Contact />
      </section>
    </>
  );
};

export default Homepage;
