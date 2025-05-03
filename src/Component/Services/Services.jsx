import React from 'react';
import images from '../../assets/images';

function Services() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images.serbg})` }}
    >
      {/* Top Heading */}
      <div className="flex flex-col items-center text-center pt-10 px-4">
        <h1 className="w-full max-w-5xl font-Poppins font-semibold text-[28px] md:text-[50px] leading-tight text-center capitalize">
          Why Hire Developers From Our Name
        </h1>

        <p className="w-full max-w-2xl mt-4 font-Poppins font-light text-[14px] md:text-[16px] leading-[26px] text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 mt-14 px-4">
      
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={images.serlogo2}
            alt="Developer Illustration"
            className="w-[250px] md:w-[400px]"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-[24px] md:text-[40px] font-semibold text-[#233A41]">
            High Quality/Cost Ratio
          </h2>

          
          <div className="flex items-start gap-3">
            <img
              src={images.icon}
              className="w-[20px] h-[20px] bg-green-600 rounded-full mt-1"
              alt="icon"
            />
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#233A41]">
                Hire Silicon Valley Caliber At Half The Cost
              </h3>
              <p className="text-[14px] text-gray-600">
                Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
              </p>
            </div>
          </div>

          
          <div className="flex items-start gap-3">
            <img
              src={images.icon}
              className="w-[20px] h-[20px] bg-red-400 rounded-full mt-1"
              alt="icon"
            />
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#233A41]">
                100+ Skills Available
              </h3>
              <p className="text-[14px] text-gray-600">
                Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-center gap-8 mt-14 px-4">
        
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-[24px] md:text-[40px] font-semibold text-[#233A41]">
            Fast, Scalable Hiring
          </h2>

     
          <div className="flex items-start gap-3">
            <img
              src={images.icon}
              className="w-[20px] h-[20px] bg-green-600 rounded-full mt-1"
              alt="icon"
            />
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#233A41]">
                Onboard In Days, Not Months
              </h3>
              <p className="text-[14px] text-gray-600">
                Quickly hire developers and scale your team with pre-vetted talent ready to start immediately.
              </p>
            </div>
          </div>

          
          <div className="flex items-start gap-3">
            <img
              src={images.icon}
              className="w-[20px] h-[20px] bg-red-400 rounded-full mt-1"
              alt="icon"
            />
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#233A41]">
                Flexible Engagement Models
              </h3>
              <p className="text-[14px] text-gray-600">
                Choose from full-time, part-time, or hourly contracts based on your project needs and budget.
              </p>
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={images.serlogo}
            alt="Developer Illustration"
            className="w-[250px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
