import React from "react";
import relax from "../assets/relax.jpg"
const about = () => {
  return (
    <div className=" flex flex-row justify-start items-center pt-[92px] ml-[160px] mr-[198px]">
     <img src={relax} alt="relax" className="w-[800px] h-[600px] object-cover" />
      <div className="bg-gray-300 p-5 w-[800px] h-[600px] flex flex-col justify-center items-center text-[#415941]">
      <h1 className="text-5xl font-bold font-lora">ABOUT</h1>
      <p className="m-10">
        At Huza Mobile Spa & Nails, we bring the ultimate relaxation and beauty
        experience right to your doorstep. Our professional team offers a wide
        range of services, including personalized massage therapy, nail care,
        and beauty treatments, all in the comfort and privacy of your home or
        preferred location. Whether you’re in need of a therapeutic massage, a
        manicure, pedicure, or a complete spa experience, we tailor our services
        to meet your specific needs and preferences.
      </p>
      <button className=" bg-[#415941] font-bold font-lora p-5 flex items-center justify-center "><p className="text-white ">Read more</p></button>
      </div>
    </div>
  );
};

export default about;
