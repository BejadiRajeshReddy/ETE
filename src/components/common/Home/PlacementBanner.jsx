import React from "react"
import ShadowTitle from "../ShadowTitle"



const additionalImages = [
  { src: '/images/placement/1.png' },
  { src: '/images/placement/2.png' },
]

const PlacementBanner = () => {
  return (
    <div>
      <section className='relative py-8'>
        {/* Shadow title */}
        <ShadowTitle head={'Placement Partners'} />

        {/* <div className='container relative z-10 mx-auto px-4'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className='rounded-md bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'
              >
                <h3 className='mb-4 text-xl font-bold'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className='mx-auto grid w-3/4 max-w-full grid-cols-2 items-center justify-center gap-x-2 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {brandImages.map((img, index) => (
            <img
              width={250}
              height={100}
              key={index}
              className='justify-self-center object-cover'
              alt={`Brand ${index + 1}`}
              src={img.src}
            />
          ))}
        </div> */}
        <div className="mt-4 flex justify-center flex-wrap ">
          <div className="flex   md:flex-row sm:flex-col flex-wrap gap-3  justify-center">
            {additionalImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-1/3">
                <img
                  width={450} // Default width
                  height={200} // Default height
                  className="object-cover border-spacing-2 border-[1px] border-[#7cd5eb]"
                  alt={`Additional Brand ${index + 1}`}
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default PlacementBanner 
