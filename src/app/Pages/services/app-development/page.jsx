'use client'

import ShadowTitle from '@/components/common/ShadowTitle'
import AnimatedText from '@/components/ui/animatedText'
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { PiMouseSimpleBold } from 'react-icons/pi'
import Slider from 'react-slick'
import Image from 'next/image'
import SectionFooter from '@/components/common/Home/SectionFooter'
// import { Carousel, Typography } from '@material-tailwind/react'  
// import { Carousel, IconButton } from "@material-tailwind/react";


const adTypes = [
  {
    img: '/images/services/appdev/DiscoveryandPlanning.jpg',
    heading: ' Discovery & Planning',
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham."
    // content:
    //   "This step helps us understand your app's purpose, target audience, and key objectives. We start by brainstorming and mapping out the scope, features, and timeline. Our team collaborates closely with you to define your vision, creating wireframes and flowcharts that shape the app's structure."
  },
  {
    img: '/images/services/appdev/DesignandPrototyping.jpg',
    heading: ' Design & Prototyping',
    content:
      "Once the groundwork is laid, we turn our attention to crafting the user experience (UX) and interface (UI) design. Be it an iOS, Android, or hybrid app, our design team guarantees your app will be intuitive and visually appealing. We develop high-fidelity mockups and interactive prototypes to give you a tangible sense of how the app will look and work."
  },
  {
    img: '/images/services/appdev/Development.jpg',
    heading: ' Development',
    content:
      "Building the core is where the magic happens. Our development team starts coding the app, making sure it functions smoothly on the chosen platform (iOS, Android, or both). We adopt agile development practices, which let us build, test, and iterate quickly, achieving top performance and reliability."
  },
  {
    img: '/images/services/appdev/TestingandQualityAssurance.jpg',
    heading: 'Testing & Quality Assurance',
    content:
      "Before the app goes live, it undergoes thorough testing. We identify and resolve bugs, performance issues, and compatibility challenges across various devices. From usability to security and performance checks, we verify that your app is robust, secure, and delivers a seamless experience for your users."
  },
  {
    img: '/images/services/appdev/LaunchandPost.jpg',
    heading: 'Launch & Post-Launch Support',
    content:
      "After completing testing, your app is ready for launch. But our work doesn’t end here. We assist with the app release on the App Store or Google Play, followed by ongoing monitoring and updates. We also gather user feedback to make further improvements, keeping your app relevant and high-performing."
  }
]

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}



function AppDevelopment() {
  const slickRef = useRef(null)
  const iosSlikRef = useRef(null)

  return (
    <div className='from-2% relative bg-gradient-to-b from-blue-400 to-transparent to-20%'>
      <div className='mb-5'>
        <div className='flex min-h-[30vh] w-full flex-col items-center justify-start p-5 sm:p-3'>
          <div className='relative flex w-full flex-wrap items-center justify-center gap-10'>
            <img
              src={'/images/services/appdev/appdev.png'}
              className='w-[80vw] md:w-[30vw]'
            />
            <div className='flex flex-col items-center justify-center gap-5 md:justify-center sm:justify-center'>
              <div className='font-sans'>
                <AnimatedText
                  text='how apt are your apps?'
                  className='font-sans text-base-large font-medium'
                  duration={0.02}
                />
                <AnimatedText
                  text='Rediscover'
                  className='text-heading-1 tracking-wide'
                />
                <AnimatedText
                  text='with us'
                  duration={0.1}
                  className='text-heading-1 tracking-wide'
                />
              </div>
              <Button className='rounded-none bg-white bg-gradient-to-r from-blue-400 from-10% to-blue-300 to-50% font-sans font-bold uppercase text-white hover:to-white hover:text-black'>
                Know More
              </Button>
            </div>
          </div>
          <ShadowTitle head={'OUR PROCESS FROM'} title={'CONCEPT TO LAUNCH'} />

        </div>
        <div className='relative mb-10 w-full'>
          <Slider ref={slickRef} {...slickSettings}>
            {adTypes?.map((ad, index) => (
              <div
                key={index}
                className='flex h-full w-full items-center justify-center'
              >
                <div className='flex h-full w-full items-center justify-between text-center font-sans'>
                  <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
                    <h6 className='text[0.7rem] mb-1 rounded-md bg-blue-500 px-2 font-bold text-white'>{`STEP ${index + 1}`}</h6>
                    <h1 className='text-[2.3rem] font-medium'>{ad?.heading}</h1>
                    <p className='p-5 text-justify font-sans font-medium text-[1.2rem]'>
                      {ad?.content}
                    </p>
                  </div>
                  <div className='hidden w-1/2 h-[400px] items-center justify-center md:flex'>
                    <img src={ad.img} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* ios */}
        <div className='relative mb-3 w-full py-16'>
          <div className='flex w-full flex-col md:flex-row items-center justify-between text-left font-sans'>
            <div className='relative w-full md:w-1/2 flex justify-center'>
              <div className='w-full'>
                <div className='flex ml-0 md:ml-6 items-center justify-center'>
                  <div className='flex ml-2 h-[40vh] md:h-[60vh] w-auto items-center justify-center'>
                    <img
                      src={'/images/services/appdev/IOSAPP.jpg'}
                      className='block h-full overflow-hidden rounded-xl'
                      alt="iOS App UI/UX"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ios app */}
            <div className='flex w-full flex-col justify-start font-medium md:w-1/2'>
              <h1 className='text-[2.3rem] font-medium px-5'>IOS App UI/UX</h1>
              <p className='w-full p-5 text-left font-sans'>
                {"We're passionate about creating apps that are both user-friendly and high-performing. Our designs are precise and tailored to shine on any screen size, thanks to tools like Sketch Constraints and Xcode. By adhering to Apple’s Human Interface Guidelines (HIG), we fully leverage iOS’s capabilities to deliver apps that are visually stunning."}
              </p>
              <p className='flex w-full items-start px-5 py-2 text-left font-sans'>
                Our Key Strategies for Interaction and Engagement
              </p>
              <ul className='list-disc px-[4rem] text-left'>
                <li>Focus on the overall user experience.</li>
                <li>Use 1X resolution and vector graphics for clear visuals.</li>
                <li>Provide clear indicators for easy navigation.</li>
                <li>Design touch targets for effortless tapping.</li>
                <li>Center each screen around a single main action.</li>
                <li>Keep custom features intuitive and unobtrusive.</li>
              </ul>
            </div>
          </div>

        </div>
        {/* android */}
        <div className='relative mb-10 w-full py-16'>
          <div className='flex w-full flex-col md:flex-row items-center justify-between text-left font-sans'>
            {/* Image Section - Will be on top on small screens */}
            <div className='relative w-full md:w-1/2 flex justify-center order-1 md:order-2'>
              <div className='w-full'>
                <div className='flex w-full items-center justify-center'>
                  <div className='flex h-[40vh] md:h-[60vh] w-auto items-center justify-center'>
                    <img
                      src={'/images/services/appdev/AndroidIOS.jpg'}
                      className='block h-full overflow-hidden rounded-xl'
                      alt="Android App UI/UX"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className='flex w-full flex-col px-4 justify-start font-medium md:w-1/2 order-2 md:order-1'>
              <h1 className='text-[2.3rem] font-medium px-5'>Android App UI/UX</h1>
              <p className='w-full p-5 text-left font-sans'>
                {"We're passionate about creating Android apps that deliver a stellar experience across all devices. By adopting Adaptive UI, we tailor your app to fit various screen sizes effortlessly. Our focus is on consistency and performance, so users get a great experience every time they use the app."}
              </p>
              <p className='flex w-full items-start px-5 py-2 text-left font-sans'>
                {"Here's How We Do It"}
              </p>
              <ul className='list-disc px-[4rem] text-left'>
                <li>Using Constraint Layout for designs that fit any screen.</li>
                <li>Creating navigation systems that are easy and intuitive.</li>
                <li>Designing notifications that stand out even outside the app.</li>
                <li>Making swiping as natural as tapping.</li>
                <li>The FAB system keeps all necessary actions in one place.</li>
                <li>Helping users find what they need quickly within the app.</li>
                <li>Crafting content that’s easy for Google to discover.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col md:flex-row items-center justify-between text-left font-sans'>
          <div className='relative w-full md:w-1/2 flex justify-center'>
            <div className='w-full'>
              <div className='flex ml-0 md:ml-6 items-center justify-center'>
                <div className='flex ml-2 h-[40vh] md:h-[60vh] w-auto items-center justify-center'>
                  <img
                    src={'/images/services/appdev/HybridApp.jpg'}
                    className='block h-full overflow-hidden rounded-xl'
                    alt="iOS App UI/UX"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* hybrid app */}
          <div className='flex w-full flex-col justify-start font-medium md:w-1/2'>
            <h1 className='text-[2.3rem] font-medium px-5'>Hybrid App UI/UX</h1>
            <p className='w-full p-5 text-left font-sans'>
              {"Hybrid apps blend the best features of both native and web apps, making them perfect for businesses that need flexibility and adaptability. This approach is especially useful for developing MVPs and apps that are frequently updated. Hybrid apps offer a solid middle ground, balancing speed and cost, and are ideal when working within tight timelines and budgets."}
            </p>
            <p className='flex w-full items-start px-5 py-2 text-left font-sans'>
              Popular Hybrid App Frameworks We Use
            </p>
            <ul className='list-disc px-[4rem] text-left'>
              <li>PhoneGap/Apache Cordova: Great for versatile web-based apps.</li>
              <li>Ionic Framework: Offers high performance and flexibility for hybrid solutions.</li>
              <li>Sencha Touch 2: Perfect for rich, touch-enabled interfaces.</li>
            </ul>
          </div>
        </div>
        <div className='absolute right-4 -mr-4 top-[30vh] md:top-[10vh] flex flex-col items-center justify-center gap-1'>
          <div className='flex h-[100px] w-auto rounded-t-3xl bg-indigo-500 p-0.5'></div>
          <h6 className='mt-4 rotate-90 font-sans text-[0.85rem] uppercase'>
            scroll
          </h6>
          <PiMouseSimpleBold size={30} className='mt-4' />
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}

export default AppDevelopment
