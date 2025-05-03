import ShadowTitle from '@/components/common/ShadowTitle'
import AnimatedText from '@/components/ui/animatedText'
import { Button } from '@/components/ui/button'
import React from 'react'
import { PiMouseSimpleBold } from 'react-icons/pi'
import { MdDynamicFeed } from 'react-icons/md'
import AnimatedCard from '@/components/ui/animatedCard'
import { CgWebsite } from 'react-icons/cg'
import { GrPerformance } from 'react-icons/gr'
import { RiCollageFill } from 'react-icons/ri'
import Image from 'next/image'
import SectionFooter from '@/components/common/Home/SectionFooter'

const webdevCardData = [
  {
    icon: <MdDynamicFeed size={30} className='text-white' />,
    heading: 'Keeping It Simple and Intuitive',
    content:
      "New design trends can be exciting, but they shouldn't overwhelm users. Complex designs can create confusion and make navigation difficult. We prioritize simplicity to help users interact with the interface smoothly and clearly."
  },
  {
    icon: <CgWebsite size={30} className='text-white' />,
    heading: 'Universal Functionality',
    content:
      "Enterprise tools need to work flawlessly across the globe. Whether your user is in any part of the world, functionality should always come first. Our goal is to guarantee that no matter where a user is, the app performs consistently and efficiently."
  },
  {
    icon: <GrPerformance size={30} className='text-white' />,
    heading: 'Simplify Learning',
    content:
      "A clear design and well-organized information help users get up to speed quickly and reduce adaptation times. We aim to minimize the learning curve with straightforward documentation and easy navigation through the system."
  },
  {
    icon: <RiCollageFill size={30} className='text-white' />,
    heading: 'Facilitate Smooth Collaboration',
    content:
      "In enterprise software, effective collaboration is essential for starting and completing workflows. We focus on fluid interaction, transparent hierarchies, and effortless in-app communication to enhance the user experience productive teamwork."
  }
]

const processData = [
  {
    heading: 'Understanding Your Users Comes First',
    content:
      "Before we step into design, we focus on gaining a deep understanding of your users. We analyze everything from market size to demographics, preferences, and behaviors. This research forms the foundation of every decision we make, making sure your product isn't just visually appealing. It's crafted to solve real problems for real people."
  },
  {
    heading: 'Crafting the Workflow',
    content:
      "Now, with our research in hand, it's time to map out how things will work. At this stage, we create multiple workflow variations that align with user behavior and business goals. Each flow is a carefully thought-out path, designed to lead users seamlessly from point A to point B with minimal friction. We combine and refine these variations until we land on the perfect balance."
  },
  {
    heading: 'Building the Wireframes',
    content:
      "Next comes the wireframing phase, which serves as the architectural blueprint for your product. Here, we sketch out how each screen will function, where elements will be placed, and how users will navigate. We're not focused on colors or fonts yet; this is about ensuring every feature and button has a logical home, creating a smooth user experience from the ground up."
  },
  {
    heading: 'Bringing Designs to Life with GUI & Prototyping',
    content:
      "Now, let’s bring those wireframes to life. We introduce style guides—ensuring every design element speaks your brand's language. With a full makeover of the user interface, we create clickable prototypes for you to experience the product firsthand. This is where we refine the user journey and test interactions, preparing for the final and crucial step: User Acceptance Testing (UAT)."
  },
  {
    heading: 'Building for All Devices (Responsive Front-End Development)',
    content:
      "Once the prototype passes UAT with great success, our developers get to work. We craft clean, reliable code that ensures your product is fast, responsive, and adaptable across devices. From smartphones to tablets to desktops, your website or app will perform beautifully on every platform. Plus, we don’t just stop at functionality; we make sure it looks great everywhere."
  }
]

function UIUX() {
  return (
    // <div className='from-2% relative bg-gradient-to-b from-indigo-400 to-transparent to-20%'>
    //   <div className='container'>
    //     <div className='flex h-[30vh] w-full flex-col items-center justify-start p-5 sm:p-3 '>
    //       <div className='relative flex w-full flex-wrap items-center justify-center sm:justify-center gap-10 md:gap-3 md:mb-5'>
    //         <img
    //           src={'/images/services/uiux/uiux_service.png'}
    //           className='w-[80vw] md:w-[30vw]'
    //         />
    <div className='from-2% md:to-8% relative bg-gradient-to-b from-indigo-400 to-transparent to-10% xl:to-20%'>
      <div className=''>
        <div className='flex min-h-[30vh] w-full flex-col items-center justify-start p-5 sm:p-3'>
          <div className='relative flex w-full flex-wrap items-center justify-center gap-10 md:gap-3'>
            <img
              src={'/images/services/uiux/uiux_service.png'}
              className='w-[80vw] md:w-[30vw]'
            />
            <div className='flex flex-col items-center justify-center gap-5 md:justify-center sm:justify-center'>
              <div className='font-sans'>
                <AnimatedText
                  text='Wise websites'
                  className='font-sans text-base-large font-medium  '
                  duration={0.02}
                />
                <AnimatedText
                  text='Are worth'
                  className='text-heading-1 tracking-wide'
                />
                <AnimatedText
                  text='the hype'
                  duration={0.1}
                  className='text-heading-1 tracking-wide'
                />
              </div>
              <Button className='rounded-none bg-white bg-gradient-to-r from-indigo-400 from-10% to-indigo-300 to-50% font-sans font-bold uppercase text-white hover:to-white hover:text-black'>
                Know More
              </Button>
            </div>
          </div>
          <div className='mb-0'>

            <ShadowTitle head={'Our Step-to-Step'} title={'Methodology'} />
          </div>
          <div className='flex w-full flex-col items-center justify-center'>
            {processData?.map((process, index) => (
              <div
                key={index}
                className='flex flex-col flex-wrap items-center justify-center font-sans'
              >
                <h6 className='text[0.3rem] mb-1 px-3 rounded-md w-20 bg-indigo-500  font-bold text-white'>{`STEP ${index + 1}`}</h6>
                <h4 className='font-medium text-center'>{process?.heading}</h4>
                <p className='p-5 text-center font-sans'>{process?.content}</p>
              </div>
            ))}
          </div>
        </div>

        <ShadowTitle head={'OUR DESIGN'} title={'PHILOSOPHY'} />
        <p className='mt-1 p-5 text-center font-sans'>
          {"More than just designs, creating great experiences is our expertise. Our goal is to go beyond mere visual appeal by deeply understanding user needs, making sure every interaction with our interface is both engaging and smooth."}
        </p>
        <div className="mt-3 w-full  flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-2 2xl:gap-6 ">
          {webdevCardData?.map((card, index) => (
            <div key={index} className="relative w-[26rem]  flex flex-col-3 flex-wrap  justify-center overflow-hidden p-2 mb-6">
              <div
                className={`group relative cursor-pointer overflow-hidden w-full h-[24rem]  bg-white px-6 lg:px-4 xl:px-6 lg:h-[32rem] xl:h-[25rem]  pt-10 pb-8 ring-1 ring-gray-900/5 transition-all shadow-md duration-700 hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
                <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-indigo-400 transition-all duration-700 group-hover:scale-[20]`}></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className={`grid h-20 w-20 place-items-center rounded-full bg-indigo-400 transition-all duration-700 group-hover:bg-indigo-400 group-hover:border-2 border-[#FCF8F3]`}>
                    {card?.icon}
                  </span>
                  <h6 className={`font-sans font-bold pt-5 text-[1rem] group-hover:text-[#FCF8F3]`}>
                    {card?.heading}
                  </h6>
                  <div
                    className={`pt-1 text-[1rem] text-gray-600 font-semibold transition-all duration-700 group-hover:text-[#FCF8F3] text-justify lg:w-44 lg:-pl-1 xl:w-auto xl:pl-0 font-sans`}>
                    <p>{card?.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default UIUX
