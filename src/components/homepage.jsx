import React from 'react';
import pic from '../assets/pic1.jpg';
import logo1 from '../assets/brand1.png';
import { Link } from 'react-router-dom';
import About from './about';
import Service from './service';
import Testimonial from './testimonial';
import Contact from './contact';

const Homepage = () => {
  const picStyle = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    marginLeft: '160px',
    marginRight: '160px',
  };

  return (
    <>
      <section className="h-screen w-screen">
        <div className="w-full h-[30%] bg-gray-300 flex flex-row justify-between items-center p-[70px] text-[#415941] font-bold font-lora">
          <Link to="/">
            <img src={logo1} alt="logo" className="w-[200px] text-[#415941]" />
          </Link>

          <div className="flex flex-row gap-[50px]">
            <h2>ABOUT</h2>
            <div className="relative group">
              <h2 className="cursor-pointer">SERVICES</h2>
              {/* Dropdown menu */}
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

        <section className="flex justify-center items-center">
          <div
            className="w-[80%] h-full flex flex-col justify-center items-center z-10 absolute inset-y-[20%] gap-10"
            style={picStyle}
          >
            <h1 className="text-white font-bold font-lora text-5xl">Relax, Refresh, Revitalize</h1>
            <h1 className="text-white font-bold font-lora text-2xl">RESTORATIVE MASSAGE THERAPY</h1>
            <button className="w-[161px] h-[40px] bg-[#415941] text-white font-bold font-lora p-8 flex items-center justify-center text-1xl">
              View Services
            </button>
          </div>
        </section>
      </section>

      <About />
      <Service />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Homepage;
