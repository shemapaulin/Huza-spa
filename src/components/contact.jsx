import React from 'react'

const contact = () => {
  return (
    <section className="w-full  p-6  rounded-lg shadow-md w-3/4 bg-[#f6e6d2] ml-[160px] mr-[198px] h-[700px]">
  <form className="h-[90%]">
    
    <div className="flex flex-col md:flex-row md:space-x-4 mb-4 ">
      <div className="w-full">
        <label className="block text-2xl font-medium text-gray-700 mb-1">Firstname</label>
        <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
      </div>
      <div className="w-full">
        <label className="block text-2xl font-medium text-gray-700 mb-1">Lastname</label>
        <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-2xl font-medium text-gray-700 mb-1">Email</label>
      <input type="email" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2"/>
    </div>
    <div className="mb-6">
      <label className="block text-2xl font-medium text-gray-700 mb-1">Message</label>
      <textarea rows="6" placeholder="Type your message here..." className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 resize-none"/>
    </div>
    <div className="text-right">
      <button type="submit" className="px-6 py-2 bg-[#415941] text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </div>
  </form>
</section>

  )
}

export default contact