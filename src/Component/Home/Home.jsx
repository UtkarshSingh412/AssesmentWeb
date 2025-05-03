import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images.homeImg})` }}
    >
      <div className="px-6 md:px-20 py-24 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10">

        {/* Left Content */}
        <div className="max-w-[671px] font-Poppins space-y-4 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <h3 className="text-[36px] md:text-[50px] font-medium text-[#2FC980] uppercase whitespace-nowrap">
              Hire Dedicated
            </h3>
          <div className=" w-36 h-[2px] bg-[#2FC980]"></div>
        </div>


          <h1 className="text-[60px] md:text-[98px] font-bold leading-tight uppercase">
            Developers
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#233A41] capitalize">
            Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
          </p>

          <p className="text-[14px] md:text-[15px] leading-[26px] text-[#233A41] capitalize">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled.
          </p>

          <div className="flex flex-row gap-4 pt-2 justify-center lg:justify-start">
            <button className="text-sm bg-red-400 text-white p-3 px-9 rounded-md w-52 sm:w-40 font-Poppins hover:text-white ease-linear hover:border-red-500 transition-transform duration-300 hover:scale-110">
              View More
            </button>

            <button className="text-sm border-2 border-[#2DC67D] p-3 px-9 rounded-md w-52 sm:w-40 font-Poppins hover:text-lime-600 ease-linear hover:border-red-500 transition-transform duration-300 hover:scale-110">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-[457px] bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-[20px] font-medium">Create Your Team</h2>
            <p className="text-[#233A41] text-[14px]">Lorem Ipsum is simply dummy text of the printing</p>
          </div>

          <form className="space-y-4 font-Poppins">

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DC67D]"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DC67D]"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DC67D]"
              />
              <input
                type="text"
                placeholder="Country"
                className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DC67D]"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded-md h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#2DC67D]"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="text-sm bg-red-400 text-white p-3 px-9 rounded-md w-full font-Poppins hover:text-white ease-linear hover:border-red-500 transition-transform duration-300 hover:scale-105"
            >
              Hire Software Developer
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Home;
