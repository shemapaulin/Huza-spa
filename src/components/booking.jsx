import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useParams, useLocation, Link } from "react-router-dom";
import MobileNav from "./mobonav";
import armo from "../assets/armo.jpg";
import deep from "../assets/deep1.jpg";
import reflee from "../assets/reflee.jpg";
import logo1 from "../assets/blackLogo1.png";
import pic from "../assets/pic1.jpg";
import sweddish from "../assets/sweddish.jpg";
import sport from "../assets/sport_massage.jpg";
import head from "../assets/head_massage.jpg";
import candle from "../assets/candle_massage.jpg";
import acrylic from "../assets/acrylic.jpg";
import dipping from "../assets/dipping.jpg";
import ombre from "../assets/Ombre.jpg";
import gel_mani from "../assets/gel_mani.jpg";
import reg_mani from "../assets/reg_mani.jpg";
import french from "../assets/french.jpg";
import gel_pedi from "../assets/gel_pedi.jpg";
import reg_pedi from "../assets/reg_pedi.jpg";
import spa_pedi from "../assets/spa_pedi.jpg";
import braz_wax from "../assets/braz-wax.webp";
import bikini from "../assets/bikini.webp";
import helf_leg from "../assets/half_leg.webp";
import under from "../assets/under.jpg";
import eyebrow from "../assets/eyebrow.jpg";
import renew from "../assets/renew.jpg";
import deep_clean from "../assets/deep_clean.jpg";
import organic from "../assets/organic.jpg";




const services = {
  Massage: [
    { img: candle, id: 1, title: "Candle Massage", price: "$ 45" },
    { img: deep, id: 2, title: "Deep Tissue", price: "$ 40" },
    { img: sweddish, id: 3, title: "Swedish", price: "$ 50" },
    { img: armo, id: 4, title: "Aroma Therapy", price: "$ 50" },
    { img: head, id: 5, title: "Head Massage", price: "$ 35" },
    { img: pic, id: 6, title: "Back Massage", price: "$ 40" },
    { img: reflee, id: 7, title: "Reflexology", price: "$ 45" },
    { img: sport, id: 8, title: "Sport Massage", price: "$ 40" },
  ],
  NailCare: [
    { img: acrylic, id: 1, title: "Acrylic Full Size", price: "$ 30" },
    { img: ombre, id: 2, title: "Ombre Polish", price: "$ 35" },
    { img: dipping, id: 3, title: "Dipping Powder", price: "$ 25" },
    { img: reg_pedi, id: 4, title: "Regular Pedicure", price: "$ 14" },
    { img: gel_pedi, id: 5, title: "Gel Pedicure", price: "$ 19" },
    { img: spa_pedi, id: 6, title: "Spa Pedicure", price: "$ 25" },
    { img: reg_mani, id: 7, title: "Regular Manicure", price: "$ 14" },
    { img: gel_mani, id: 8, title: "Gel Manicure", price: "$ 20" },
    { img: french, id: 9, title: "French Manicure", price: "$ 30" },
  ],
  waxing: [
    { img: braz_wax, id: 1, title: "Brazilian Wax", price: "$ 40" },
    { img: bikini, id: 2, title: "Bikini Line Wax", price: "$ 30" },
    { img: helf_leg, id: 3, title: "Half leg Wax", price: "$ 40" },
    { img: under, id: 4, title: "under arm Wax", price: "$ 20" },
    { img: eyebrow, id: 5, title: "eye brow Wax", price: "$ 15" },
  ],
  facial: [
    { img: renew, id: 1, title: "Renew Facial", price: "$ 30" },
    { img: deep_clean, id: 2, title: "Deep Cleaning Facial", price: "$ 46" },
    { img: organic, id: 3, title: "Organic Freshen Facial", price: "$ 35" },
  ],
};

const BookingRequest = () => {
  const { title } = useParams();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("English");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const decodedTitle = decodeURIComponent(title);
  const service =
    location.state?.service ||
    Object.values(services)
      .flat()
      .find((service) => service.title === decodedTitle);

  if (!service) {
    return <div className="text-center mt-10">Service not found.</div>;
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsConfirmed(!isConfirmed);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedDate && selectedTime && isConfirmed && phoneNumber && email) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
  
      const bookingDetails = {
        name,
        phoneNumber,
        service: service.title,
        date: formattedDate,
        time: selectedTime,
        language,
        email,
        subject: `Booking Confirmation for ${service.title}`,
        bookingDetails: `Name: ${name}\nPhone Number: ${phoneNumber}\nService: ${service.title}\nDate: ${formattedDate}\nTime: ${selectedTime}\nLanguage: ${language}`,
      };
  
      try {
        const response = await fetch(`https://huza-spa-1.onrender.com/sendBooking/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingDetails),
        });
  
        if (response.ok) {
          alert("Booking confirmed! A confirmation email has been sent.");
          
          // Reset form fields
          setSelectedDate(null);
          setSelectedTime("");
          setIsConfirmed(false);
          setPhoneNumber("");
          setLanguage("English");
          setName("");
          setEmail("");
        } else {
          alert("Failed to send booking confirmation.");
        }
      } catch (error) {
        console.error("Error sending booking:", error);
        alert("An error occurred while sending the booking." + error);
      }
    } else {
      alert("Please fill out all fields and confirm your booking.");
    }
  };
  

  return (
    <>
     <div className="hidden md:flex w-full h-[10px] md:h-[30%] bg-gray-300 flex-col md:flex-row justify-between items-center p-6 md:py-[7px] md:px-[32px] text-[#415941] font-bold font-lora m-0">
          <Link to="/">
            <img src={logo1} alt="logo" className="w-[150px] md:w-[180px] text-[#415941] h-[100px] object-cover" />
          </Link>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[50px] mt-4 md:mt-0 items-center">
            <h2>
              <Link to="/about">ABOUT</Link>
            </h2>
            <div className="relative group">
              <h2 className="cursor-pointer">SERVICES</h2>
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

        <MobileNav />

      <div className="container mx-auto p-5">
        <h2 className="text-2xl font-bold my-4">Book Your {service.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Your Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Select Time:</label>
            <select
              value={selectedTime}
              onChange={handleTimeChange}
              required
              className="border rounded p-2 w-full"
            >
              <option value="">--Select Time--</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="10:00 AM">12:00 AM</option>
              <option value="11:00 AM">01:00 PM</option>
              <option value="10:00 AM">02:00 PM</option>
              <option value="11:00 AM">03:00 PM</option>
              <option value="10:00 AM">04:00 PM</option>
              <option value="11:00 AM">05:00 PM</option>
              <option value="10:00 AM">06:00 PM</option>
              <option value="11:00 AM">07:00 PM</option>
              <option value="10:00 AM">08:00 PM</option>
              <option value="11:00 AM">09:00 PM</option>
             
            </select>
          </div>
          <div>
            <label className="block mb-1">Language:</label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border rounded p-2 w-full"
            >
              <option value="English">English</option>
              <option value="Kinyarwanda">Kinyarwanda</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={handleCheckboxChange}
              required
            />
            <label className="ml-2">
              I confirm that I want to book this service
            </label>
          </div>
          <button
            type="submit"
            className=" bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded py-2 px-4"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingRequest;
