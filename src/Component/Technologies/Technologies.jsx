import React from 'react'
import images from '../../assets/images'

function Technologies() {
  return (
    <div className="max-w-[1240px] mx-auto mt-10 p-6 ">

      <h2 className="text-[32px] md:text-[40px] font-semibold text-center mb-3 text-[#233A41]">
        Our Diverse Technology Competency
      </h2>
      <p className="text-center text-[14px] text-gray-600 mb-8 max-w-[740px] mx-auto leading-[26px] md:leading-[33px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { img: images.backentdev, title: 'Backend Development' },
          { img: images.frontenddev, title: 'Frontend Development' },
          { img: images.mobiledev, title: 'Mobile Development' },
          { img: images.blockchain, title: 'Blockchain Development' },
          { img: images.ecomers, title: 'Ecommerce Development' },
          { img: images.devop, title: 'DevOps Services' },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg bg-[#F4F6FD] flex flex-col items-start space-y-3"
          >
            <img src={item.img} alt={item.title} className="w-[50px] h-[50px]" />
            <h3 className="text-[20px] font-semibold text-center">{item.title}</h3>
            <p className="text-start text-[14px] text-gray-600">
              .NET | C/C++ | DJANGO | Firebase | GOLANG <br />
              SYMFONY | LARAVEL | NODE | PHP | PYTHON <br />
              RUBY ON RAILS | JAVA
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
