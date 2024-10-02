import React from 'react'

const contact = () => {
  return (
    <section className="flex justify-center items-center w-screen min-h-screen p-4">
    <section className="w-full md:w-[80%] flex flex-col p-6 bg-[#f6e6d2] items-center justify-center gap-10">
      <div className="bg-[#d1d5db] p-5 w-full md:w-[800px] h-[150px] flex flex-col justify-center items-center text-[#415941] relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold font-lora text-center">CONTACT</h1>
      </div>
      <form className="w-full md:w-[65%] bg-yellow-50 p-8 relative flex flex-col gap-8">
        {/* Added phone number and address here */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg md:text-1xl font-lora font-bold text-[#415941] pt-10 pb-10 text-center">
          <h1>+250 787 550 632</h1>
          <h1>|</h1>
          <h1>Kicukiro, Kigali Rwanda</h1>
          <h1>|</h1>
          <h1>huzagateway@gmail.com</h1>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4 gap-4">
          <div className="w-full">
            <label className="block text-xl md:text-2xl font-medium text-gray-700 mb-1">Firstname</label>
            <input type="text" className="w-full bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2" />
          </div>
          <div className="w-full">
            <label className="block text-xl md:text-2xl font-medium text-gray-700 mb-1">Lastname</label>
            <input type="text" className="w-full bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-xl md:text-2xl font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2" />
        </div>
        <div className="mb-6">
          <label className="block text-xl md:text-2xl font-medium text-gray-700 mb-1">Message</label>
          <textarea className="w-full bg-yellow-50 border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-[130px] md:w-[161px] h-[40px] md:h-[50px] bg-[#415941] text-white font-semibold">
            Submit
          </button>
        </div>
      </form>
    </section>
  </section>
  
  )
}

export default contact