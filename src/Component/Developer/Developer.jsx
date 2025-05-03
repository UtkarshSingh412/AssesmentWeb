import React from "react";
import images from "../../assets/images";

function Developer() {
  return (
    <div className="max-w-[1176px] w-full mx-auto px-8 py-8">
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-center">
          User Guide to Hire Dedicated Software Developers
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    
        <div className="w-full">
          <ul className="overflow-hidden ">
            {[
              "Benefits Of Hiring Developers",
              "Key Factors To Consider While Hiring",
              "Defining Your Project Requirements",
              "Choosing The Right Development Model",
              "Typical Challenges For Hiring Developers",
              "Hiring Freelancers Vs. Dedicated Developers",
              "Communication With Remote Developers",
            ].map((item, index) => (
              <li
                key={index}
                className={`px-6 py-4 text-sm border-b last:border-0 ${
                  index === 1
                    ? "bg-green-600 text-white font-semibold"
                    : "text-gray-800"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
            Benefits of Hiring Developers
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>

         
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
            {[
              "Client-Centric Approach",
              "Best-In-Class Project Management",
              "Global Quality Standards",
              "Time-Zone Compatibility",
              "Cutting-Edge Infrastructure",
              "Agile Adaptability",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-green-500 w-5 h-5">
                  <img src={images.company} alt="check" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          
          <img
            src={images.developers}
            className="w-full h-40 mt-5 object-cover"
            alt="developers"
          />
        </div>
      </div>
    </div>
  );
}

export default Developer;
