import React from 'react'
import logo1 from '../assets/brand1.png'
import armo from '../assets/armo.jpg'
import { Link } from 'react-router-dom'
import deep from '../assets/deep1.jpg'
import hotty from '../assets/hotty.jpg'
import reflee from '../assets/reflee.jpg'
import thera from '../assets/thera.jpg'
import meddy from '../assets/nails.jpg'

const MainService = () => {
    const Massage_serv=[
        {
            img: armo,  
            title: "Candle massage ",
            price: "$100",
        },
        {
            img: deep,  
            title: "Deep Tissue",
            price: "$100",
        },
        {
            img: hotty,  
            title: "Swedish",
            price: "$100",
        },
        {
            img: reflee,  
            title: "aroma Therapy",
            price: "$100",
        },
        {
            img: thera,  
            title: "Head Massage",
            price: "$100",
        },
        {
            img: meddy,  
            title: "Back Massage",
            price: "$100",
        },
        {
            img: meddy,
            title: "Reflexology",
            price: "$100",
        
        },
        {
            img: meddy,
            title: "Sport Massage",
            price: "$100",
        },
        {
            img: meddy,
            title: "Paradise Harmony",
            price: "$100",
        },
        {
            img: meddy,
            title: "Paradise foot Massage",
            price: "$100",
        },
        {
            img: meddy,
            title: "Body Scrub Massage",
            price: "$100",
        }
       
    ]
    const polish_serv=[
        {
            img: meddy,
            title: "Acrylic full size",
            price: "$100",
        },
        {
            img: meddy,
            title: "Ombre Polish",
            price: "$100",
        },
        {
            img: meddy,
            title: "Dipping Powder",
            price: "$100",
        }
    ]
    const Manicure=[
        {
            img: meddy,
            title: "Regular Manicure",
            price: "$100",
        },
        {
            img: meddy,
            title: "Gel Manicure",
            price: "$100",
        },
        {
            img: meddy,
            title: "French Manicure",
            price: "$100",
        }

    ]
    const Pedicure=[
        {
            img: meddy,
            title: "Regular Pedicure",
            price: "$100",
        },
        {
            img: meddy,
            title: "Gel Pedicure",
            price: "$100",
        },
        {
            img: meddy,
            title: "Spa Pedicure",
            price: "$100",
        }

    ]
  return (
    <>
 <div className='h-screen w-screen pb-[1129px]'>
 <div className="w-full h-[30%] bg-gray-300 flex flex-row justify-between items-center p-[70px] text-[#415941] font-bold font-lora">
  <Link to="/">
    <img src={logo1} alt="logo" className="w-[200px] text-[#415941]" />
  </Link>

  <div className="flex flex-row gap-[50px]">
    <h2>ABOUT</h2>
    
    {/* Make Services a dropdown */}
    <div className="relative group">
      <h2 className="cursor-pointer">SERVICES</h2>
      {/* Dropdown menu */}
      <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20 ">
        <Link to="/services" className="hover:bg-gray-300 p-2">Massage</Link>
        <Link to="/service2" className="hover:bg-gray-300 p-2">Nail Care</Link>
        <Link to="/service3" className="hover:bg-gray-300 p-2">Waxxing</Link>
        <Link to="/service4" className="hover:bg-gray-300 p-2">xxxxxxxxxxx</Link>
      </div>
    </div>

    <h2>BLOG</h2>
    <h2>TOP LINKS</h2>
  </div>
</div>
    <section className='flex justify-center items-center '>
    <div className="w-[80%] h-[1000px]  flex  justify-center items-center z-10 absolute inset-y-[20%]  bg-[#fef2f2]">
        {/**I want to make 6 boxes here each whith image which covers 1/2 of the screen */}
        <div className='flex flex-row h-[80%]  justify-center items-center flex-wrap gap-10'>
            <span className='flex flex-col items-center justify-center gap-10'>
                <h1 className='text-[#415941] font-bold font-lora text-5xl'>Services</h1>
                <p className='text-[#415941] font-bold font-lora text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium esse ipsum nihil consectetur eaque,
                     voluptatem, omnis quod distinctio dolor nemo, tempora debitis aspernatur? Voluptate animi, magni commodi itaque 
                     reiciendis nulla doloribus.</p>
                </span>
                <span className='flex flex-col  border-2 border-[#415941] w-[250px] h-[290px]'>
            <img src={armo} alt="logo" className='w-full text-[#415941] object-top'/>
            <div className='text-[#415941] font-bold font-lora text-1xl flex flex-col justify-center items-center  gap-2'>
                <h1 className="">Aromatherapy Massage</h1>
                <p>1hour</p>
                <p></p>
                <button className="w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora  flex items-center justify-center text-xl ">Book Now</button>
                </div>
            </span>

            <span className='flex flex-col  border-2 border-[#415941] w-[250px] h-[280px]'>
            <img src={thera} alt="logo" className='w-full text-[#415941] object-top'/>
            <div className='text-[#415941] font-bold font-lora text-1xl flex flex-col justify-center items-center  gap-2'>
                <h1 className="">Therapeutic Massage</h1>
                <p>1hour</p>
                <p></p>
                <button className="w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora  flex items-center justify-center text-xl ">Book Now</button>
                </div>
            </span>

            <span className='flex flex-col  border-2 border-[#415941] w-[250px] h-[280px]'>
            <img src={hotty} alt="logo" className='w-full text-[#415941] object-center object-cover h-[60%]'/>
            <div className='text-[#415941] font-bold font-lora text-1xl flex flex-col justify-center items-center  gap-2'>
                <h1 className="">Beauty Treatment </h1>
                <p>1hour</p>
                <p></p>
                <button className="w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora  flex items-center justify-center text-xl ">Book Now</button>
                </div>
            </span>
            <span className='flex flex-col  border-2 border-[#415941] w-[250px] h-[280px]'>
            <img src={deep} alt="logo" className='w-full text-[#415941] object-cover object-bottom h-[60%]'/>
            <div className='text-[#415941] font-bold font-lora text-1xl flex flex-col justify-center items-center  gap-2'>
                <h1 className="">Deep Tissue Massage</h1>
                <p>1hour</p>
                <p></p>
                <button className="w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora  flex items-center justify-center text-xl ">Book Now</button>
                </div>
            </span>
            <span className='flex flex-col  border-2 border-[#415941] w-[250px] h-[280px]'>
            <img src={meddy} alt="logo" className='w-full text-[#415941] object-center object-bottom object-cover h-[60%]'/>
            <div className='text-[#415941] font-bold font-lora text-1xl flex flex-col justify-center items-center  gap-2'>
                <h1 className="">Nail Care</h1>
                <p>1hour</p>
                <p></p>
                <button className="w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora  flex items-center justify-center text-xl ">Book Now</button>
                </div>
            </span>
            <span className='flex flex-col  border-2 border-[#415941] w-[250px] h-[280px]'>
            <img src={reflee} alt="logo" className='w-full text-[#415941] object-cover object-top h-[60%]'/>
            <div className='text-[#415941] font-bold font-lora text-1xl flex flex-col justify-center items-center  gap-2'>
                <h1 className="">Reflexology Massage</h1>
                <p>1hour</p>
                <p></p>
                <button className="w-[100px] h-[30px] bg-[#415941] text-white font-bold font-lora  flex items-center justify-center text-xl ">Book Now</button>
                </div>
            </span>
        </div>
     
     
    </div>
    </section>
    </div>
    {/* I wanna make many buttons for services by mapping */}
 <div className='flex flex-col justify-center items-center pb-[100px]'>
 <div className='w-[80%] flex flex-row justify-center items-center gap-10 flex-wrap pb-10'>
    {Massage_serv.map((b)=>(

    <button className="w-auto h-[30px] bg-[#415941] hover:bg-[#f6e6d2] hover:text-[#415941] hover:border-2 hover:border-[#415941] text-white font-bold font-lora  flex items-center justify-center text-sm py-6 px-auto m-2 rounded-3xl">{b.title}</button>
    ))}
    
</div> 
</div>
<div className='flex flex-row justify-center items-center gap-5'>
<div className='flex flex-col justify-center items-center  '>
<h2 className="text-[#415941] font-bold font-lora text-5xl">Polish Nails</h2>
<div className='w-[80%] flex flex-row justify-center items-center gap-10 flex-wrap pb-10 pt-5'>
    {polish_serv.map((b)=>(

    <button className="w-auto h-[30px] bg-[#415941] hover:bg-[#f6e6d2] hover:text-[#415941] hover:border-2 hover:border-[#415941] text-white font-bold font-lora  flex items-center justify-center text-sm py-6 px-auto m-2 rounded-3xl">{b.title}</button>
    ))}
    
</div>
</div>
<div className='flex flex-col justify-center items-center  '>
<h2 className="text-[#415941] font-bold font-lora text-5xl">Manicure</h2>
<div className='w-[80%] flex flex-row justify-center items-center gap-10 flex-wrap pb-10 pt-5'>
    {Manicure.map((b)=>(

    <button className="w-auto h-[30px] bg-[#415941] hover:bg-[#f6e6d2] hover:text-[#415941] hover:border-2 hover:border-[#415941] text-white font-bold font-lora  flex items-center justify-center text-sm py-6 px-auto m-2 rounded-3xl">{b.title}</button>
    ))}
    
</div>
</div>
<div className='flex flex-col justify-center items-center   '>
<h2 className="text-[#415941] font-bold font-lora text-5xl">Pedicure</h2>
<div className='w-[80%] flex flex-row justify-center items-center gap-5 flex-wrap pb-10 pt-5'>
    {Pedicure.map((b)=>(

    <button className="w-auto h-[30px] bg-[#415941] hover:bg-[#f6e6d2] hover:text-[#415941] hover:border-2 hover:border-[#415941] text-white font-bold font-lora  flex items-center justify-center text-sm py-6 px-auto m-2 rounded-3xl">{b.title}</button>
    ))}
    
</div>
</div>
</div>

  </>
   
  )
}

export default MainService