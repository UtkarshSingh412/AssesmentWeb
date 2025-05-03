import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import images from '../../assets/images';

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 mt-5">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={images.navImg} className='text-white'></img>
          </div>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white text-green-500 rounded-full"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-white text-green-500 rounded-full"><FaTwitter /></a>
            <a href="#" className="p-2 bg-white text-green-500 rounded-full"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#">Software Team</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#">Dedicated Development</a></li>
            <li><a href="#">Staff Augmentation Services</a></li>
            <li><a href="#">Software Development</a></li>
            <li><a href="#">Development Center</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-2">
              <IoLocationSharp className="text-green-500 mt-1" />
              <span>Envato, Level 13, 2 Elizabeth Victoria 3000 India</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-500" />
              <span>+91 861 944 1176</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-green-500" />
              <span>axyoga@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-10 bg-green-500 text-center text-black py-4 text-sm">
      &copy;logoname. 2023. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
