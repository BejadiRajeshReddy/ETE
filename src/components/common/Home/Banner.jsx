// "use client"

// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import Image from 'next/image'
// import React, { useRef } from 'react'
// import Slider from 'react-slick'

// const slickSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false
// }

// const highlightWords = (text, wordsToHighlight = []) => {
//   const parts = text.split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'));
//   return parts.map((part, i) =>
//     wordsToHighlight.includes(part) ? (
//       <span key={i} className="font-bold text-yellow-400">{part}</span>
//     ) : (
//       part
//     )
//   );
// }


// const demoDate = [
//   {
//     id: 1,
//     title: "Our Training is known for offering top-tier Data Science education with quality instruction, affordable pricing, and proven results.",
//     dec: "Develop your skill in Data analysis, machine learning, python and power bi will be taken by industry experts.",
//     image: '/images/banner/python.png',
//     color: 'bg-sky-300'
//   },
//   {
//     id: 2,
//     title: "Social Media-Catch your Audience's eye and Maintain Their Interest. ",
//     dec: "Increase your brand's reach, discover what they care about, and build lasting loyalty.",
//     image: '/images/banner/SocialMedia.png',
//     color: 'bg-custom-gradient-2'
//   },
//   {
//     id: 3,
//     title: "Become a professional Digital Marketing Expert and get better placements.",
//     dec: "For everything you need to know about Digital Marketing. Learn Digital Marketing from your comfort of your home.",
//     image: '/images/banner/Contentmarketing.png',
//     color: 'bg-custom-gradient-3'
//   }
// ]

// const Banner = () => {
//   const slickRef = useRef(null)

//   return (
//     <div className='relative w-full overflow-hidden'>
//       <Slider ref={slickRef} {...slickSettings}>
//         {demoDate.map((item, index) => (
//           <div key={item?.id} className='w-full'>
//             <div
//               className={`relative flex h-[500px] cursor-pointer md:h-[400px] md:items-center md:justify-center ${item?.color}`}
//             >
//               <div className='container mx-auto grid grid-cols-1 items-center py-20 md:grid-cols-2 md:px-20'>
//                 <div className='justify-self-center'>
//                   {/* <h4 className='mb-1 text-white'>{item?.title}</h4> */}
//                   <h4 className='mb-1 text-white'>
//                     {item.id === 1 ? highlightWords(item.title, ['Training', 'Data Science']) : item.title}
//                   </h4>

//                   <p className='text-white'>{item?.dec}</p>
//                 </div>
//                 <img
//                   width={350}
//                   height={350}
//                   className='justify-self-center object-cover'
//                   alt={`Banner ${index + 1}`}
//                   src={item?.image}
//                 />
//               </div>

//               <div className='absolute hidden w-full items-center justify-between px-4 sm:flex'>
//                 <button
//                   onClick={() => slickRef?.current?.slickPrev()}
//                   className='focus:outline-none'
//                   aria-label='Previous slide'
//                 >
//                   <ChevronLeft color='white' size={'50px'} />
//                 </button>
//                 <button
//                   onClick={() => slickRef?.current?.slickNext()}
//                   className='focus:outline-none'
//                   aria-label='Next slide'
//                 >
//                   <ChevronRight color='white' size={'50px'} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default Banner

"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'
import Slider from 'react-slick'

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000
}

const demoData = [
  {
    id: 1,
    title: "Master Data Science & Analytics",
    desc: "Develop your expertise in data analysis, machine learning, Python and Power BI with industry experts.",
    image: '/images/banner/python.png',
    gradient: 'banner-gradient-1'
  },
  {
    id: 2,
    title: "Strategic Social Media Marketing",
    desc: "Enhance your brand's reach and engagement through data-driven social media strategies.",
    image: '/images/banner/SocialMedia.png',
    gradient: 'banner-gradient-2'
  },
  {
    id: 3,
    title: "Professional Digital Marketing",
    desc: "Learn comprehensive digital marketing from industry experts and advance your career.",
    image: '/images/banner/Contentmarketing.png',
    gradient: 'banner-gradient-3'
  }
]

const Banner = () => {
  const slickRef = useRef(null)

  return (
    <div className='relative w-full overflow-hidden'>
      <Slider ref={slickRef} {...slickSettings}>
        {demoData.map((item) => (
          <div key={item.id} className='w-full'>
            <div className={`relative h-[400px] md:h-[450px] md:px-16 ${item.gradient}`}>
              <div className='banner-overlay absolute inset-0'></div>
              <div className='container mx-auto h-full py-6 md:py-10 px-4 md:px-20'>
                {/* Mobile Layout (Image on top, content below) */}
                <div className='flex flex-col h-full md:hidden'>
                  <div className='flex justify-center mb-4 pt-2'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-48 object-contain'
                    />
                  </div>
                  <div className='banner-content text-center px-4'>
                    <h2 className='mb-2 text-2xl font-bold leading-tight'>
                      {item.title}
                    </h2>
                    <p className='text-sm text-gray-100'>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout (Side by side) */}
                <div className='hidden md:grid h-full grid-cols-2 items-center gap-12'>
                  <div className='banner-content text-left'>
                    <h2 className='mb-3 text-3xl font-bold leading-tight md:text-4xl'>
                      {item.title}
                    </h2>
                    <p className='text-base md:text-lg text-gray-100 max-w-lg'>
                      {item.desc}
                    </p>
                  </div>
                  <div className='flex justify-center'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='max-w-sm w-full h-auto object-contain'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className='absolute hidden w-full items-center justify-between px-4 top-1/2 transform -translate-y-1/2 sm:flex'>
        <button
          onClick={() => slickRef?.current?.slickPrev()}
          className='rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition'
          aria-label='Previous slide'
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={() => slickRef?.current?.slickNext()}
          className='rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition'
          aria-label='Next slide'
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  )
}

export default Banner