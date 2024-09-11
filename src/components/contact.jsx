import React from 'react'

const contact = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
    <section className="w-[80%] flex flex-col p-6  bg-[#f6e6d2] w-[80%] h-full flex items-center justify-center ">
      <div className='bg-[#d1d5db] p-5 w-[800px] h-[150px] flex flex-col justify-center items-center text-[#415941] z-10  inset-y-[-40%] relative'>
        <h1 className="text-5xl font-bold font-lora">CONTACT</h1>
      </div>
  <form className="h-[70%] w-[65%] bg-yellow-50 p-8 absolute   ">
{/* I want to add phone number and address here  */}
<div className='flex flex-row justify-center items-center gap-4 text-1xl font-lora font-bold text-[#415941] pt-20 pb-10'>
  <h1>+250 787 550 632</h1>
  <h1>|</h1>
  <h1>Kicukiro, Kigali Rwanda</h1>
  <h1>|</h1>
  <h1>huzagateway@gmail.com</h1>
</div>
    <div className="flex flex-col md:flex-row md:space-x-4 mb-4 ">
      <div className="w-full">
        <label className="block text-2xl font-medium text-gray-700 mb-1">Firstname</label>
        <input type="text" className="w-full  bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
      </div>
      <div className="w-full">
        <label className="block text-2xl font-medium text-gray-700 mb-1">Lastname</label>
        <input type="text" className="w-full  bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-2xl font-medium text-gray-700 mb-1">Email</label>
      <input type="email" className="w-full  bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
    </div>
    <div className="mb-6">
      <label className="block text-2xl font-medium text-gray-700 mb-1">Message</label>
      <textarea type="email" className="w-full  bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
    </div>
    <div className="flex justify-center">
      <button type="submit" className="w-[161px] h-[50px] bg-[#415941] text-white  font-semibold  ">
        Submit
      </button>
    </div>
  </form>
</section>

    </section>

  )
}

export default contact