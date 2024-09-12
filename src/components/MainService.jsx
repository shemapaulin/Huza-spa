import React from 'react';
import armo from '../assets/armo.jpg';
import deep from '../assets/deep1.jpg';
import hotty from '../assets/hotty.jpg';
import reflee from '../assets/reflee.jpg';
import thera from '../assets/thera.jpg';
import meddy from '../assets/nails.jpg';
import { Link } from 'react-router-dom';
import logo1 from '../assets/brand1.png';
const services = {
  Massage: [
      
    { img: armo, title: 'Candle Massage', price: '$100' },
    { img: deep, title: 'Deep Tissue', price: '$100' },
    { img: hotty, title: 'Swedish', price: '$100' },
    { img: reflee, title: 'Aroma Therapy', price: '$100' },
    { img: thera, title: 'Head Massage', price: '$100' },
    { img: meddy, title: 'Back Massage', price: '$100' },
    { img: meddy, title: 'Reflexology', price: '$100' },
    { img: meddy, title: 'Sport Massage', price: '$100' },
  ],
  NailCare: [
    
    { img: meddy, title: 'Acrylic Full Size', price: '$100' },
    { img: meddy, title: 'Ombre Polish', price: '$100' },
    { img: meddy, title: 'Dipping Powder', price: '$100' },
    { img: meddy, title: 'Regular Pedicure', price: '$100' },
    { img: meddy, title: 'Gel Pedicure', price: '$100' },
    { img: meddy, title: 'Spa Pedicure', price: '$100' },
    { img: meddy, title: 'Regular Manicure', price: '$100' },
    { img: meddy, title: 'Gel Manicure', price: '$100' },
    { img: meddy, title: 'French Manicure', price: '$100' },
  ],
  waxing: [
    
   { img: armo, title: 'Brazilian Wax', price: '$100' },
    { img: armo, title: 'Bikini Line Wax', price: '$100' },
    { img: armo, title: 'Half leg Wax', price: '$100' },
    { img: armo, title: 'umber arm Wax', price: '$100' },
    { img: armo, title: 'eye brow Wax', price: '$100' },

  ],
  facial: [
   
    { img: armo, title: 'Renew Facial', price: '$100' },
    { img: armo, title: 'Deep Cleaning Facial', price: '$100' },
    { img: armo, title: 'Organic Freshen Facial', price: '$100' },
  ],
};

const MainService = ({ serviceType }) => {
  const selectedServices = services[serviceType];

  return (

<section>
    <div className="w-full h-[20%] bg-gray-300 flex flex-row justify-between items-center p-[50px] text-[#415941] font-bold font-lora">
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
                <a href="/services" className="hover:bg-gray-300 p-2">
                  Travelling
                </a>
                </div>

            </div>

          </div>
        </div>
    <div className="w-screen flex flex-col justify-center items-center gap-10 p-10">
      <h1 className="text-[#415941] font-bold font-lora text-5xl">Services</h1>
      <p className="text-[#415941] font-bold font-lora text-xl text-center">
        Choose from our range of high-quality services.
      </p>
      <div className="grid grid-cols-3 gap-10">
        {selectedServices.map((service, index) => (
          <div key={index} className="border-2 border-[#415941] p-5 w-[250px] h-[290px] flex flex-col items-center">
            <img src={service.img} alt={service.title} className="w-full h-[60%] object-cover" />
            <h2 className="text-[#415941] font-bold font-lora text-xl mt-2">{service.title}</h2>
            <p className="text-[#415941] font-bold font-lora text-md">{service.price}</p>
            <button className="mt-4 w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default MainService;
