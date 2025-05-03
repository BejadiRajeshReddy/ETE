'use client'

import ShadowTitle from '@/components/common/ShadowTitle'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col'>
      <ShadowTitle head={'About Us'} />
      {/* Main Content */}
      <main className='flex-grow container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center sm:items-center  p-4'>
        {/* Left Side - Image */}
        <div className='flex-grow md:w-1/2 md:ml-6 text-center '>
          <h5 className='text-2xl mb-4'>Did you know? 70% of marketers say their biggest challenge is generating traffic and leads. It’s a crowded digital world out there.
          </h5>
          <br />
          <p className='px-7 text-lg text-justify items-center flex justify-center sm:justify-center md:justify-center pr-8 font-sans' style={{ textIndent: 50 }}>
            The room and the world that surrounds us are filled with digital noise. One person is listening to a podcast, another is watching an OTT show, someone else is vlogging their day, and another is scrolling. And standing out has never been so important than it is now. At ETE Digital Marketing, we understand the struggles brands face in cutting through the clutter. Our mission is to help your brand stand out online with clear, effective digital strategies.
          </p>
          <br />
          <p className='px-7 text-lg text-justify items-center pr-8 flex justify-center sm:justify-center md:justify-center font-sans' style={{ textIndent: 50 }}>
            The digital age has transformed marketing in ways we could only dream of three decades ago. From the advent of personal computers to the rise of smartphones, technology has reshaped how brands connect with their audiences. We aim to transform these technological advancements into effective solutions for your brand.
          </p>
        </div>

        {/* Right Side - Heading and Description */}

        <div className='flex-shrink-0 mt-4 md:mt-0 md:w-1/2'>
          <div className='relative w-full h-64 md:h-auto'>
            <img
              src='/images/aboutImage.avif'
              alt='Description'
              // width={500}
              // height={500}
              className='rounded-lg px-5 shadow-lg object-cover w-full'
            />
          </div>
        </div>
      </main>
      <section className="mt-12 text-center bg-gray-100 py-10 px-4 md:px-16">
        <h2 className="text-4xl font-bold mb-4">Who we are</h2>
        <p className="text-lg mb-8  mx-auto">
          At ETE Digital Marketing, we are committed to providing extensive digital marketing
          solutions that address your toughest challenges. Whether you need to attract
          new visitors, generate quality leads, or build lasting relationships with your
          audience, we’ve got you covered. Our team uses data-driven strategies, creative
          content, and targeted campaigns to ensure that your brand stands out and achieves
          measurable results.
        </p>

        {/* Values Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-6">
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Our Vision in Action
            </h3>
            <p>
              We’re here to spark growth. Through versatile digital marketing solutions, we flex businesses across all sectors to rise above the competition, crafting tailored strategies that turn challenges into opportunities for improvement.
            </p>

          </div>

          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Industry Excellence
            </h3>
            <p>
              We don’t just partner with businesses. We travel with them & understand them. By getting to the heart of each brand’s vision, we deliver creative digital marketing strategies that go beyond expectations and push boundaries.
            </p>

          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Values We Live By
            </h3>
            <p>
              Honesty, integrity, and transparency are at our core. Every relationship with clients, employees, or communities is built on trust and mutual respect, making sure that everything we do feels genuine and impactful.
            </p>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Building Future Careers
            </h3>
            <p>
              Our hands-on training is all about getting learners real-world ready. We’re committed to building the next wave of job-ready professionals, arming them with the practical skills and confidence needed to skyrocket their careers.</p>
          </div>
        </div>
      </section>


    </div>

  )
}

export default About
