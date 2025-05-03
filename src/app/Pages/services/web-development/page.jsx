import ShadowTitle from '@/components/common/ShadowTitle'
import AnimatedText from '@/components/ui/animatedText'
import { Button } from '@/components/ui/button'
import React from 'react'
import { PiMouseSimpleBold } from 'react-icons/pi'
import { MdDynamicFeed } from 'react-icons/md'
import AnimatedCard from '@/components/ui/animatedCard'
import { CgWebsite } from 'react-icons/cg'
import { GrPerformance } from 'react-icons/gr'
import Image from 'next/image'
import SectionFooter from '@/components/common/Home/SectionFooter'

const toolsIcons = [
  '/images/services/webdev/bootstrap-icon.webp',
  '/images/services/webdev/HTML-icon.webp',
  '/images/services/webdev/php-logo-icon.webp',
  '/images/services/webdev/react-icon.webp',
  '/images/services/webdev/wordpress-icon.webp'
]

const webdevCardData = [
  {
    icon: <MdDynamicFeed size={30} className='text-white' />,
    heading: 'Mobile Ready Website',
    content:
      "With most visitors landing on your site from a mobile device, why settle for anything less than a high-performing and mobile-first framework? We make your website not only look stunning but also deliver a wonderful experience on any screen."
  },
  {
    icon: <CgWebsite size={30} className='text-white' />,
    heading: 'Smooth Navigation',
    content:
      "Navigating a website should feel effortless, right? We design intuitive homepages with smart navigation features so users can easily find the core pages they need, keeping them engaged and reducing bounce rates."
  },
  {
    icon: <GrPerformance size={30} className='text-white' />,
    heading: 'Turbocharged Performance',
    content:
      "Once your website goes live, our job doesn’t end there. We equip it with strategic forms and tools like Analytics and Heatmaps to track user behavior and make impactful improvements. And yes, speed is always in the spotlight!"
  },
  {
    icon: <MdDynamicFeed size={30} className='text-white' />,
    heading: 'Cracking the Analytics Code',
    content:
      "Our Clickstream + In-page analytics help you track how well your site is performing over time. These insights allow us to fine-tune the experience, making sure your website evolves and works harder for you as time goes on."
  },
  {
    icon: <CgWebsite size={30} className='text-white' />,
    heading: 'Cross-Browser Compatibility',
    content:
      "Whether your visitors use Chrome, Safari, or any other browser, we've got you covered. We ensure your website delivers a consistent and visually stunning experience across all browsers and devices—be it mobile or desktop."
  },
  {
    icon: <GrPerformance size={30} className='text-white' />,
    heading: 'Sitemap & Architecture',
    content:
      "Imagine your sitemap as a GPS for search engines and users alike. We create a clear, accessible file that lets both effortlessly explore your website. With unique, engaging content, your site won’t just be found. It will captivate your audience and keep search engines happy."
  }
]

function WebDevelopment() {
  return (
    <div className='from-2% relative bg-gradient-to-b from-[#FF204E] to-transparent to-20%'>
      <div className='container sm:p-3 md:p-20'>
        <div className='flex min-h-[80vh] w-full flex-col items-center justify-start p-5'>
          <div className='relative flex w-full flex-wrap items-center justify-center gap-5'>
            <img
              src={'/images/services/webdev/webdev.png'}
              className='w-[80vw] md:w-[30vw]'
              alt='img'
            />
            <div className='flex flex-col items-center justify-center gap-5'>
              <div className='font-sans'>
                <AnimatedText
                  text='NextGen Web Development'
                  className='font-sans text-[1.5rem] font-medium'
                  duration={0.02}
                />
                <AnimatedText
                  text='For Your'
                  className='text-heading-1 tracking-wide'
                />
                <AnimatedText
                  text='Business'
                  className='text-heading-1 tracking-wide'
                />
                <AnimatedText
                  text='by nature'
                  duration={0.1}
                  className='text-heading-1 tracking-wide'
                />
              </div>
              <Button className='rounded-none bg-white bg-gradient-to-r from-[#FF204E] from-10% to-[#FF8A8A] to-50% font-sans font-bold uppercase text-white hover:to-white hover:text-black'>
                Know More
              </Button>
            </div>
          </div>

          <ShadowTitle head={'TECH STACKS'} title={'OUR TOOLS'} />
          <div className='mb-3 flex w-[80%] flex-wrap items-center justify-around gap-2'>
            {toolsIcons?.map((icon, index) => (
              <img key={index} src={icon} className='' />
            ))}
          </div>
          <ShadowTitle head={'DESIGN THINKING'} title={'OUR PROCESS'} />
          <p className='p-5 text-center font-sans'>
            {" Is creating a decent website really enough to grow your business? We believe there's more to it. At ETE Digital Marketing, we bring your vision to life in the most interesting way possible. From ensuring every screen is pixel-perfect to delivering a smooth user experience, we cover it all. When you choose us, you're teaming up with a talented crew of designers and developers who not only follow the plan but also keep you fully involved at every step. We'll deliver a website that surpasses your expectations. But that's just the beginning. We'll make sure it's optimized for search engines from day one."}

          </p>
          <p className='text-center font-sans'>
            Our process is an exciting journey of  collaboration, approvals, feedback, and turning your ideas into something extraordinary.

          </p>
          <div className="w-full  flex flex-wrap justify-center items-center gap-6">
            {webdevCardData?.map((card, index) => (
              <div key={index} className="relative w-[26rem]  flex flex-col-3 flex-wrap  justify-center overflow-hidden p-2 mb-6">
                <div
                  className={`group relative cursor-pointer overflow-hidden w-full h-[25rem]  bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all shadow-md duration-700 hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
                  <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-[#FF204E] transition-all duration-700 group-hover:scale-[20]`}></span>
                  <div className="relative z-10 mx-auto max-w-md">
                    <span className={`grid h-20 w-20 place-items-center rounded-full bg-[#FF204E] transition-all duration-700 group-hover:bg-[#FF204E] group-hover:border-2 border-[#FCF8F3]`}>
                      {card?.icon}
                    </span>
                    <h6 className={`font-sans font-bold pt-5 text-[1rem] group-hover:text-[#FCF8F3]`}>
                      {card?.heading}
                    </h6>
                    <div
                      className={`pt-1 text-[1rem] text-gray-600 font-semibold transition-all duration-700 group-hover:text-[#FCF8F3] text-justify font-sans`}>
                      <p>{card?.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute right-4 -mr-4 top-[30vh] md:top-[10vh] flex flex-col items-center justify-center gap-1'>
        <div className='flex h-[100px] w-auto rounded-t-3xl bg-[#FF204E] p-0.5'></div>
        <h6 className='mt-4 rotate-90 font-sans text-[0.85rem] uppercase'>
          scroll
        </h6>
        <PiMouseSimpleBold size={30} className='mt-4' />
      </div>
      <SectionFooter />

    </div>
  )
}

export default WebDevelopment
