import React from "react";
import armo from "../assets/armo.jpg";
import deep from "../assets/deep1.jpg";

import reflee from "../assets/reflee.jpg";

import { Link } from "react-router-dom";
import logo1 from "../assets/blackLogo1.png";
import pic from "../assets/pic1.jpg";
import sweddish from "../assets/sweddish.jpg";
import sport from "../assets/sport_massage.jpg";
import head from "../assets/head_massage.jpg";
import candle from "../assets/candle_massage.jpg";
import acrylic from "../assets/acrylic.jpg";
import dipping from "../assets/dipping.jpg";
import ombre from "../assets/Ombre.jpg";
import gel_mani from "../assets/gel_mani.jpg";
import reg_mani from "../assets/reg_mani.jpg";
import french from "../assets/french.jpg";
import gel_pedi from "../assets/gel_pedi.jpg";
import reg_pedi from "../assets/reg_pedi.jpg";
import spa_pedi from "../assets/spa_pedi.jpg";
import braz_wax from "../assets/braz-wax.webp";
import bikini from "../assets/bikini.webp";
import helf_leg from "../assets/half_leg.webp";
import under from "../assets/under.jpg";
import eyebrow from "../assets/eyebrow.jpg";
import renew from "../assets/renew.jpg";
import deep_clean from "../assets/deep_clean.jpg";
import organic from "../assets/organic.jpg";
import MobileNav from "./mobonav";

const services = {
  Massage: [
    { img: candle, id: 1, title: "Candle Massage", price: "$ 45" },
    { img: deep, id: 2, title: "Deep Tissue", price: "$ 40" },
    { img: sweddish, id: 3, title: "Swedish", price: "$ 50" },
    { img: armo, id: 4, title: "Aroma Therapy", price: "$ 50" },
    { img: head, id: 5, title: "Head Massage", price: "$ 35" },
    { img: pic, id: 6, title: "Back Massage", price: "$ 40" },
    { img: reflee, id: 7, title: "Reflexology", price: "$ 45" },
    { img: sport, id: 8, title: "Sport Massage", price: "$ 40" },
  ],
  NailCare: [
    { img: acrylic, id: 1, title: "Acrylic Full Size", price: "$ 30" },
    { img: ombre, id: 2, title: "Ombre Polish", price: "$ 35" },
    { img: dipping, id: 3, title: "Dipping Powder", price: "$ 25" },
    { img: reg_pedi, id: 4, title: "Regular Pedicure", price: "$ 14" },
    { img: gel_pedi, id: 5, title: "Gel Pedicure", price: "$ 19" },
    { img: spa_pedi, id: 6, title: "Spa Pedicure", price: "$ 25" },
    { img: reg_mani, id: 7, title: "Regular Manicure", price: "$ 14" },
    { img: gel_mani, id: 8, title: "Gel Manicure", price: "$ 20" },
    { img: french, id: 9, title: "French Manicure", price: "$ 30" },
  ],
  waxing: [
    { img: braz_wax, id: 1, title: "Brazilian Wax", price: "$ 40" },
    { img: bikini, id: 2, title: "Bikini Line Wax", price: "$ 30" },
    { img: helf_leg, id: 3, title: "Half leg Wax", price: "$ 40" },
    { img: under, id: 4, title: "under arm Wax", price: "$ 20" },
    { img: eyebrow, id: 5, title: "eye brow Wax", price: "$ 15" },
  ],
  facial: [
    { img: renew, id: 1, title: "Renew Facial", price: "$ 30" },
    { img: deep_clean, id: 2, title: "Deep Cleaning Facial", price: "$ 46" },
    { img: organic, id: 3, title: "Organic Freshen Facial", price: "$ 35" },
  ],
};
const id =`service.id`;
const MainService = ({ serviceType }) => {
  const selectedServices = services[serviceType];

  return (
    <>
    <section className=" w-full bg-gray-300 p-5 md:p-10">
    <div className="hidden md:flex w-full h-[10px] md:h-[30%] bg-gray-300 flex-col md:flex-row justify-between items-center p-6 md:py-[7px] md:px-[32px] text-[#415941] font-bold font-lora m-0">
      <Link to="/" className="flex justify-center mb-5 md:mb-0">
        <img src={logo1} alt="logo" className="w-[150px] md:w-[180px] text-[#415941] h-[100px] object-cover" />
      </Link>
  
      <div className="flex flex-col md:flex-row gap-4 md:gap-[50px]">
        <Link to="/about" className="hover:text-indigo-600 transition"><h2>ABOUT</h2></Link>
        <div className="relative group">
          <h2 className="cursor-pointer hover:text-indigo-600 transition">SERVICES</h2>
          <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
            <Link to="/services" className="hover:bg-gray-300 p-2">Massage</Link>
            <Link to="/service2" className="hover:bg-gray-300 p-2">Nail Care</Link>
            <Link to="/service3" className="hover:bg-gray-300 p-2">Waxing</Link>
            <Link to="/service4" className="hover:bg-gray-300 p-2">Facial Service</Link>
          </div>
        </div>
        <Link to="/blog" className="hover:text-indigo-600 transition"><h2>BLOG</h2></Link>
        <div className="relative group">
          <h2 className="cursor-pointer hover:text-indigo-600 transition">TOP LINKS</h2>
          <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
            <a href="/services" className="hover:bg-gray-300 p-2">Travelling</a>
          </div>
        </div>
      </div>
    </div>
    <MobileNav/>
    <div className="flex flex-col justify-center items-center gap-5 md:gap-10 p-5 md:p-10 animate-fade-up">
      <h1 className="text-[#415941] font-bold font-lora text-3xl md:text-5xl text-center">Services</h1>
      <p className="text-[#415941] font-bold font-lora text-lg md:text-xl text-center">
        Choose from our range of high-quality services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {selectedServices.map((service) => {
          let { img, id, title, price } = service;
          return (
            <div
              key={service.id}
              className="border-2 border-[#415941] p-5 w-full max-w-[250px] h-[290px] flex flex-col items-center rounded-lg transition-transform transform hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[60%] object-cover rounded-lg"
              />
              <h2 className="text-[#415941] font-bold font-lora text-xl mt-2 text-center">
                {service.title}
              </h2>
              <p className="text-[#415941] font-bold font-lora text-md text-center">
                {service.price}
              </p>
              <Link to={`/booking/${title}`}>
                <button className="mt-4 w-[100px] h-[30px]  bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold font-lora rounded-full hover:bg-indigo-600 transition">
                  Talk To Us
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>  
 
    </>
  );
};

export default MainService;
