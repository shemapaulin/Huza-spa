import React from 'react'
import logo1 from '../assets/brand1.png';
import { Link } from 'react-router-dom';
import center from '../assets/center.jpg';
import MobileNav from './mobonav';

const aboutPage = () => {
  return (
    <>
     <section>
     <div className="hidden md:flex w-full h-[10px] md:h-[30%] bg-gray-300 flex-col md:flex-row justify-between items-center p-6 md:py-[7px] md:px-[32px] text-[#415941] font-bold font-lora m-0 animate-fade-down">
          <Link to="/">
            <img src={logo1} alt="logo" className="w-[200px] text-[#415941]" />
          </Link>

          <div className="flex flex-row gap-[50px]">
            <h2> <Link to="/about">ABOUT </Link></h2>
            <div className="relative group">
              <h2 className="cursor-pointer">SERVICES</h2>
              {/* Dropdown menu */}
              <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
                <Link to="/services" className="hover:bg-gray-300 p-2">
                  Massage
                </Link>
                <Link to="/service2" className="hover:bg-gray-300 p-2">
                  Nail Care
                </Link>
                <Link to="/service3" className="hover:bg-gray-300 p-2">
                  Waxing
                </Link>
                <Link to="/service4" className="hover:bg-gray-300 p-2">
                  Facial Service
                </Link>
              </div>
            </div>
            <h2>BLOG</h2>
            <div className="relative group">
            <h2 className="cursor-pointer">TOP LINKS</h2>
            <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
                <a href="https://huzagateway.com/" className="hover:bg-gray-300 p-2">
                  Travelling
                </a>
                </div>

            </div>
          </div>
        </div>
        <MobileNav/>
       </section>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-10 lg:pt-20 md:pt-28 sm:pt-32">
  <div className="aspect-w-16 aspect-h-7 ">
    <img className="w-full object-cover object-center  rounded-xl h-[600px] " src={center} />
  </div>

  <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1">
      <h2 className="font-bold text-2xl md:text-3xl text-[#415941]">
        Our Mission
      </h2>
      <p className="mt-2 md:mt-4 text-gray-500 text-neutral-500">
        Our mission is to help our clients access to the best massage,waxing, facial and nails care services for easily. anywhere anyhow anytime.
      </p>
    </div>

    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
        <div className="flex gap-x-5">
        <svg className="shrink-0 mt-1 size-6  text-[#415941]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12"/>
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
          </svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 ">
            Massage service
            </h3>
            <p className="mt-1  text-neutral-400">
              We choose our teams carefully. Our people are the secret to great work, our aim to make you access massage services for easily.
            </p>
          </div>
        </div>

        <div className="flex gap-x-5">
          <svg className="shrink-0 mt-1 size-6  text-[#415941]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12"/>
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
          </svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 ">
             Waxing services
            </h3>
            <p className="mt-1  text-neutral-400">
              We choose our teams carefully. Our people are the secret to great work, our aim to make you access waxing services for easily.
            </p>
          </div>
        </div>

        <div className="flex gap-x-5">
        <svg className="shrink-0 mt-1 size-6  text-[#415941]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12"/>
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
          </svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 ">
             Nails Service
            </h3>
            <p className="mt-1  text-neutral-400">
              We turn your expectations into your satisfactions on gel polish and many more.
            </p>
          </div>
        </div>

        <div className="flex gap-x-5">
        <svg className="shrink-0 mt-1 size-6  text-[#415941]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12"/>
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
          </svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Facial Services
            </h3>
            <p className="mt-1  text-neutral-400">
              we help you to achieve your full expectations about Renew , Deep Clean and Organic facial service.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">I absolutely love my nails! The attention to detail and the quality of the nail polish is exceptional. The technician was so kind and patient, ensuring my nails looked perfect. The polish lasted for weeks without chipping, and I’ve received so many compliments on how beautiful they look. I’m definitely coming back for more! Fantastic service!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Leroy Jenkins</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">I had the most amazing massage experience! From the moment I stepped in, I was welcomed with warmth and professionalism. The massage was incredibly relaxing and helped relieve the tension in my back and shoulders. The therapist truly knew what they were doing and made sure I was comfortable throughout the session. I left feeling rejuvenated, stress-free, and can’t wait to book my next appointment! Highly recommend!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Shema Paulin</p>
		</div>
	</div>
</section>
    </>
  )
}

export default aboutPage