import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images.js';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        {/* Navbar */}
      <div className='fixed z-[999] w-full md:px-28 py-3 h-20 flex justify-between items-center bg-white  text-[#233A41] shadow-md'>
        <div className=' cursor-pointer bg-gradient-to-r from-violet-700 via-lime-300 to-violet-700 bg-clip-text text-transparent'>
          <img src= {images.navImg}></img>
        </div>

        {/* Desktop Nav */}
        <div className="link hidden md:flex gap-10">
          <Link to="/" className="text-md font-Poppins hover:text-lime-600 duration-300 ease-linear">Home</Link>
          <Link to="/services" className="text-md font-Poppins hover:text-lime-600 duration-300 ease-linear">services</Link>
          <Link to="/technologies" className="text-md font-Poppins hover:text-lime-600 duration-300 ease-linear">Technologies</Link>
          <Link to="/resources" className="text-md font-Poppins hover:text-lime-600 duration-300 ease-linear">Resources</Link>
          <Link to="/company" className="text-md font-Poppins hover:text-lime-600 duration-300 ease-linear">Company</Link>
          <Link to="/contact" className="text-sm md:ml-7 border-2 border-[#2DC67D] p-2 px-9 rounded-md w-40  font-Poppins hover:text-lime-600  ease-linear hover:border-red-500  transition-transform duration-300 hover:scale-110">Get in Touch</Link>
        </div>

        {/* Hamburger for Mobile */}
        <div
          className='md:hidden text-3xl cursor-pointer hover:text-lime-600 duration-300 ease-linear'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#8801;
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-32 bg-transparent z-[998] transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-white text-2xl hover:text-lime-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &times;
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start mt-3 gap-6 text-[#233A41]">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">Services</Link>
          <Link to="/technologies" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">Technologies</Link>
          <Link to="/resources" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">Resources</Link>
          <Link to="/company" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">Company</Link>
        </div>
      </div>
    </div>
  )
}

export default Header