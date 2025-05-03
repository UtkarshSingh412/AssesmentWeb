import React from 'react'
import images from '../../assets/images'

function Company() {
  return (
    <div className="max-w-[1176px] w-full mx-auto grid grid-cols-1 md:grid-cols-2  items-center px-8 py-8 gap-8">
      
      <div className="w-1/2 sm:w-full">
        <img
          src={images.companyImg}
          alt="Developer"
          className=" object-cover"
        />
      </div>

      <div className="w-1/2 sm:w-full">
        <h2 className="text-3xl md:text-2xl font-bold mb-4 leading-snug">
          Top Companies Trust ValueCoders <br /> For Hiring Software Developers
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          {[
            'Client-Centric Approach',
            'Best-In-Class Project Management',
            'Global Quality Standards',
            'Time-Zone Compatibility',
            'Cutting-Edge Infrastructure',
            'Agile Adaptability',
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-green-500 w-5 h-5">
                <img src={images.company} alt="check" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Company
