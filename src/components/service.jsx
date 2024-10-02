import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import pic2 from '../assets/pic2.jpg'

const service = () => {
  return (
    <section className="flex justify-center items-center w-screen min-h-screen p-4 md:p-0">
    <div className="bg-[#f6e6d2] w-full md:w-[80%] h-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-x-[100px] p-4">
      <FaChevronLeft className="text-3xl md:text-[60px] text-[#415941] cursor-pointer" />
  
      <div className="relative flex flex-col items-center md:inset-y-[-18%] md:inset-x-[-10%] pl-0 md:pl-[100px]">
        <span className="bg-gray-300 w-[300px] md:w-[400px] h-[200px] md:h-[220px] z-10 absolute p-4 md:p-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold font-lora text-[#415941] text-center">Reflexology</h1>
          <button className="w-[120px] md:w-[161px] h-[40px] bg-[#415941] text-white font-bold font-lora p-3 md:p-8 text-sm md:text-1xl flex items-center justify-center">
            View Services
          </button>
        </span>
      </div>
  
      <img src={pic2} alt="pic2" className="w-full md:w-[670px] h-[250px] md:h-[380px] object-cover" />
      
      <FaChevronRight className="text-3xl md:text-[60px] text-[#415941] cursor-pointer" />
    </div>
  </section>
  
  )
}

export default service