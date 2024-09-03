import React from "react";

const testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[92px] ml-[160px] mr-[198px] h-[560px] gap-10">
      <h1 className="text-[#415941] font-bold font-lora text-5xl">
      Why choose is 
      </h1>
<div className="flex flex-row justify-center items-center font-questrial pt-20">
      <span className="flex flex-col justify-center items-start gap-5">
        <h2 className="font-bold text-3xl">-Convenience</h2>
        <p className="text-2xl">
        We come to you, eliminating the need for travel and providing spa-level services in your space.
        </p>
      </span>

      <span className="flex flex-col justify-center items-start gap-5">
        <h2 className="font-bold text-3xl">-Comprehensive Care</h2>
        <p className="text-2xl">     
        From soothing massages to stunning nails, we offer a full range of wellness and beauty services.
        </p>
      </span>

      <span className="flex flex-col justify-center items-start gap-5">
        <h2 className="font-bold text-3xl">-Professional Expertise</h2>
        <p className="text-2xl">
        Our certified therapists and nail technicians are skilled in the latest techniques to ensure you receive the best possible care.  
        </p>
      </span>


      
      </div>
    </div>
  );
};

export default testimonial;
