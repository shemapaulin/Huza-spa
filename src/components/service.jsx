import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import pic2 from '../assets/pic2.jpg'

const service = () => {
  return (
   <section className='flex justify-center items-center w-screen h-screen '>
      <div className='bg-[#f6e6d2]  w-[80%] h-full flex  flex-row justify-center items-center  gap-x-[100px]'>
  <FaChevronLeft className='size-[60px] text-[#415941]'/>
  
  <div className='relative inset-y-[-18%] inset-x-[-10%] pl-[100px] '>
  <span className='bg-gray-300 w-[400px] h-[220px] z-10  absolute'>
    <h1 className='flex justify-center items-center pt-[50px]'><p className='text-5xl font-bold font-lora text-[#415941]'>Reflexology</p></h1>
    <button className="absolute inset-y-[90%] inset-x-[30%] w-[161px] h-[40px] bg-[#415941] text-white font-bold font-lora p-8 flex items-center justify-center text-1xl a">View Services</button>
  </span>
  </div>
  <img src={pic2} alt="pic2" className="w-[670px] h-[380px] object-cover "/>
  <FaChevronRight className='size-[60px] text-[#415941]'/>
       
       </div>
   </section>
  )
}

export default service