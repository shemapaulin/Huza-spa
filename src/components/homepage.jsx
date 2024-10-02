import React from 'react';
import pic from '../assets/pic1.jpg';
import logo1 from '../assets/brand1.png';
import { Link } from 'react-router-dom';
import About from './about';
import Service from './service';
import Testimonial from './testimonial';
import Contact from './contact';
import MobileNav from './mobonav';

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
     <section className="min-h-screen w-screen">
  <div className="hidden md:flex w-full h-auto md:h-[30%] bg-gray-300 flex flex-col md:flex-row justify-between items-center p-6 md:p-[70px] text-[#415941] font-bold font-lora">
    <Link to="/">
      <img src={logo1} alt="logo" className="w-[150px] md:w-[200px] text-[#415941]" />
    </Link>

    <div className="flex flex-col md:flex-row gap-4 md:gap-[50px] mt-4 md:mt-0 items-center">
      <h2>
        <Link to="/about">ABOUT</Link>
      </h2>
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
<MobileNav/>
  <section className="flex justify-center items-center min-h-[70%] md:min-h-[60%]">
    <div
      className="w-[90%] md:w-[80%] h-full flex flex-col justify-center items-center z-10 absolute inset-y-[30%] md:inset-y-[20%] gap-6 md:gap-10"
      style={picStyle}
    >
      <h1 className="text-white font-bold font-lora text-3xl md:text-5xl text-center">
        Relax, Refresh, Revitalize
      </h1>
      <h1 className="text-white font-bold font-lora text-xl md:text-2xl text-center">
        RESTORATIVE MASSAGE THERAPY
      </h1>
      <button className="w-[140px] md:w-[161px] h-[40px] bg-[#415941] text-white font-bold font-lora p-4 md:p-8 flex items-center justify-center text-lg md:text-1xl">
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
