"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react'
import Slider from 'react-slick'

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

const highlightWords = (text, wordsToHighlight = []) => {
  const parts = text.split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'));
  return parts.map((part, i) =>
    wordsToHighlight.includes(part) ? (
      <span key={i} className="font-bold text-yellow-400">{part}</span>
    ) : (
      part
    )
  );
}


const demoDate = [
  {
    id: 1,
    title: "Our Training is known for offering top-tier Data Science education with quality instruction, affordable pricing, and proven results.",
    dec: "Develop your skill in Data analysis, machine learning, python and power bi will be taken by industry experts.",
    image: '/images/banner/python.png',
    color: 'bg-custom-gradient-1'
  },
  {
    id: 2,
    title: "Social Media-Catch your Audience's eye and Maintain Their Interest. ",
    dec: "Increase your brand's reach, discover what they care about, and build lasting loyalty.",
    image: '/images/banner/SocialMedia.png',
    color: 'bg-custom-gradient-2'
  },
  {
    id: 3,
    title: "Become a professional Digital Marketing Expert and get better placements.",
    dec: "For everything you need to know about Digital Marketing. Learn Digital Marketing from your comfort of your home.",
    image: '/images/banner/Contentmarketing.png',
    color: 'bg-custom-gradient-3'
  }
]

const Banner = () => {
  const slickRef = useRef(null)

  return (
    <div className='relative w-full overflow-hidden'>
      <Slider ref={slickRef} {...slickSettings}>
        {demoDate.map((item, index) => (
          <div key={item?.id} className='w-full'>
            <div
              className={`relative flex h-[500px] cursor-pointer md:h-[400px] md:items-center md:justify-center ${item?.color}`}
            >
              <div className='container mx-auto grid grid-cols-1 items-center py-20 md:grid-cols-2 md:px-20'>
                <div className='justify-self-center'>
                  {/* <h4 className='mb-1 text-white'>{item?.title}</h4> */}
                  <h4 className='mb-1 text-white'>
                    {item.id === 1 ? highlightWords(item.title, ['Training', 'Data Science']) : item.title}
                  </h4>

                  <p className='text-white'>{item?.dec}</p>
                </div>
                <img
                  width={350}
                  height={350}
                  className='justify-self-center object-cover'
                  alt={`Banner ${index + 1}`}
                  src={item?.image}
                />
              </div>

              <div className='absolute hidden w-full items-center justify-between px-4 sm:flex'>
                <button
                  onClick={() => slickRef?.current?.slickPrev()}
                  className='focus:outline-none'
                  aria-label='Previous slide'
                >
                  <ChevronLeft color='white' size={'50px'} />
                </button>
                <button
                  onClick={() => slickRef?.current?.slickNext()}
                  className='focus:outline-none'
                  aria-label='Next slide'
                >
                  <ChevronRight color='white' size={'50px'} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner
