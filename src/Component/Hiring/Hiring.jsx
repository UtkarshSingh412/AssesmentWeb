import React from 'react'
import images from '../../assets/images'

function Hiring() {
    const steps = [
        {title: 'INQUIRY', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: `${images.gImg3}`},
        {title: 'SELECT DEVELOPERS', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: `${images.gImg2}` },
        {title: 'TEAM INTEGRATION', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: `${images.gImg1}` },
        {title: 'TEAM SCALING', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img:`${images.gImg }` },
      ]
    
      return (
        <div className="w-full  py-12 px-8 text-center bg-cover bg-center " style={{ backgroundImage: `url(${images.bg})` }}>
          <h2 className="text-4xl font-bold mb-4">Our Hiring Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Take a look at our simple and straightforward process to hire software developers from ValueCoders.
          </p>
    
          <div className="grid grid-cols md:flex px-10 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="">
                    <img src={step.img} alt={`Step ${step.number}`} className="w-28 h-28 object-contain" />
                  </div>
                </div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                
              </div>
            ))}
          </div>
        </div>
      )
}

export default Hiring