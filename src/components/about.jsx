import React from "react";
import relax from "../assets/relax.jpg"
const about = () => {
  return (
    <section className="flex justify-center items-center w-screen min-h-screen animate-fade-in p-4 md:p-0">
    <div className="flex flex-col md:flex-row justify-start items-center w-full md:w-[79%] h-full gap-6 md:gap-0">
      <img src={relax} alt="relax" className="w-full md:w-[50%] h-[300px] md:h-[600px] object-cover" />
      <div className="bg-gray-300 p-5 w-full md:w-[50%] h-auto md:h-[600px] flex flex-col justify-center items-center text-[#415941]">
        <h1 className="text-4xl md:text-5xl font-bold font-lora text-center md:text-left">ABOUT</h1>
        <p className="mt-6 md:m-10 text-center md:text-left">
          At Huza Bliss Spa & Beauty, we bring the ultimate relaxation and beauty experience right to your stay or doorstep. Our professional team offers a wide range of services, including personalized massage therapy, nail care, and beauty treatments, all in the comfort and privacy of your home, stay, or preferred location. Whether you’re in need of a therapeutic massage, a manicure, pedicure, or a complete spa experience, we tailor our services to meet your specific needs and preferences.
        </p>
        <button className="bg-[#415941] font-bold font-lora p-3 md:p-5 flex items-center justify-center mt-4 md:mt-10">
          <p className="text-white">Read more</p>
        </button>
      </div>
    </div>
  </section>
  
  );
};

export default about;
