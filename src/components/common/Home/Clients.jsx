import React, { useRef } from 'react'
import ShadowTitle from '../ShadowTitle'

const brandImages = [
  { src: '/images/brand/1.png' },
  { src: '/images/brand/2.png' },
  { src: '/images/brand/3.png' },
  { src: '/images/brand/4.png' },
  { src: '/images/brand/5.png' },
  { src: '/images/brand/6.png' },
  { src: '/images/brand/7.png' },
  { src: '/images/brand/8.png' },
  { src: '/images/brand/9.png' },



]
const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

const Clients = () => {
  const slickRef = useRef(null)


  return (
    <div className='container mx-auto px-4 py-2'>
      <section className='relative'>
        <ShadowTitle head={'THE GREATEST'} title={'CLIENT'} />
        <div className='flex h-[80px] space-x-16 overflow-hidden'>
          <div className='animate-loop-scroll flex space-x-16'>
            <img
              src='/images/brand/1.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/2.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/3.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/4.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/5.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/6.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/7.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/8.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/9.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
          </div>
          <div
            className='animate-loop-scroll flex space-x-16'
            aria-hidden='true'
          >
            <img
              src='/images/brand/1.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/2.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/3.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/4.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/5.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/6.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/7.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/8.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
            <img
              src='/images/brand/9.png'
              loading='lazy'
              className='max-w-none'
              alt='image1'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients
