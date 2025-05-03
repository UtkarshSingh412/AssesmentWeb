import React from 'react';
import images from '../../assets/images';

function Resources() {
  return (
    <div className="w-full bg-[#00003C] text-white flex flex-wrap md:flex-nowrap items-center px-6 md:px-12 py-12 gap-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-[28px] md:text-[42px] font-bold leading-snug">
          Why Hire Software Developers <br /> In India?
        </h2>
        <img
          src={images.resourImg}
          alt="Office"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <ul className="space-y-6">
          {[
            'English Speaking Programmers',
            'Flexible Work Hours',
            'Rapid Onboarding Process',
            'Expertise In Top Technologies',
            'Reliable Partner Credentials',
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-700 pb-4"
            >
              <span className="text-[16px] md:text-[18px]">{item}</span>
              <span className="text-xl">↗</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resources;
