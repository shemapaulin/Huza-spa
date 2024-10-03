import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import logo1 from "../assets/brand1.png";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
    <nav className="xl:hidden md:hidden text-primary fixed top-0 left-0 right-0 z-30 ">
      <div className="bg-gray-300 mr-1 rounded-full p-1 text-2xl cursor-pointer absolute top-4 right-4 shadow-md " onClick={toggleMenu}>
        <CgMenuRight color="black" />
      </div>
      <motion.div variants={menuVariants} initial="hidden" animate={openMenu ? "show" : "hidden"} className="bg-white shadow-2xl w-full fixed top-0 right-0 max-w-xs h-screen z-20">
        <div className="bg-white rounded-full p-2 text-4xl absolute z-30 left-4 top-4 text-black cursor-pointer shadow-md" onClick={closeMenu}>
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center text-black gap-y-8 text-primary font-bold text-3xl cursor-pointer">
        <img src={logo1} alt="logo" className="w-[150px] md:w-[200px]" />
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about">About</Link>
          </li>
          <div className="relative group">
              <h2 className="cursor-pointer">Services</h2>
              {/* Dropdown menu */}
              <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-3 rounded-md top-full w-40 shadow-lg z-20">
                <Link to="/services" className="hover:bg-gray-300 p-1" onClick={closeMenu}>
                  Massage
                </Link>
                <Link to="/service2" className="hover:bg-gray-300 p-1" onClick={closeMenu}>
                  Nail Care
                </Link>
                <Link to="/service3" className="hover:bg-gray-300 p-1" onClick={closeMenu}>
                  Waxing
                </Link>
                <Link to="/service4" className="hover:bg-gray-300 p-1" onClick={closeMenu}>
                  Facial Service
                </Link>
              </div>
            </div>
          <li onClick={closeMenu}>
            <Link to="/contact">Blog</Link>
          </li>
          <div className="relative group">
            <h2 className="cursor-pointer" onClick={closeMenu}>Top Links</h2>
            <div className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-200 p-2 rounded-md top-full w-40 shadow-lg z-20">
                <a href="https://huzagateway.com/" className="hover:bg-gray-300 p-1">
                  Travelling
                </a>
                </div>

            </div>
        </ul>
      </motion.div>
    </nav>
    
    </>

  );
};

export default MobileNav;