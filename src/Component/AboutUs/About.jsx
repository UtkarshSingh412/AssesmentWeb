import React from "react";
import images from "../../assets/images";

function About() {
  const clientImages = [images.p1, images.p2, images.p3, images.p4];

  return (
    <div className="w-full mx-auto px-8 py-8">
      <h2 className="text-4xl font-bold text-center mb-2">
        What Our Clients Have To Say About Us
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Take A Look At Our Simple And Straightforward Process To Hire Software
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {clientImages.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded overflow-hidden shadow-lg flex flex-col items-center"
          >
            {/* Image */}
            <div className="relative w-full h-[300px]">
              <img
                src={item}
                alt={`client-${index}`}
                className="w-full h-full object-cover"
              />
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                  <img src={images.play} alt="play" className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Client Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">Krish Bruynson</h3>
              <p className="text-gray-500 text-sm mb-2">Director, Storloft</p>

              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <img
                    key={i}
                    src={images.starts}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
