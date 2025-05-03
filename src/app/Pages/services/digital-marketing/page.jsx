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
import { twMerge } from 'tailwind-merge'
import SectionFooter from '@/components/common/Home/SectionFooter'


const webdevCardData = [
  {
    icon: <MdDynamicFeed size={30} className='text-white' />,
    heading: 'Track Your Ad Performance with AdWords  ',
    content:
      "Want to know how your ads are performing? AdWords provides insights into how many people are seeing your ads, visiting  your   site,  or  contacting you.  And if your business serves a unique  audience,  you can  precisely  target those specific groups to maximize your impact."
  },
  {
    icon: <CgWebsite size={30} className='text-white' />,
    heading: 'Optimize Your Ads Through Testing',
    content:
      "Take advantage of AdWords to fine-tune your strategy. Experiment, adjust, and test various approaches to find what works best. Refine your ads, make changes, and monitor the impact to continuously improve results. AdWords gives you the tools to achieve optimal performance."
  }, {
    icon: <GrPerformance size={30} className='text-white' />,
    heading: 'Take Full Control of Your Budget',
    content:
      "You're in control of your advertising budget, with the flexibility to manage campaigns and stop them anytime; no contracts or fees. This allows you to optimize spending, making your efforts as efficient and effective as possible."
  }]

const brandImages = [
  { src: '/images/homePage_brands/1111.jpg' },
  { src: '/images/homePage_brands/brand_1.png' },
  { src: '/images/homePage_brands/2222.jpg' },
  { src: '/images/homePage_brands/3333.jpg' },
  { src: '/images/homePage_brands/4444.jpg' },
  { src: '/images/homePage_brands/5555.jpg' },
  { src: '/images/homePage_brands/brand_2.png' },
  { src: '/images/homePage_brands/brand_3.png' },
  { src: '/images/homePage_brands/brand_4.png' },
  { src: '/images/homePage_brands/brand_5.png' },
  { src: '/images/homePage_brands/brand_6.png' },
  { src: '/images/homePage_brands/brand_7.png' },
  { src: '/images/homePage_brands/brand_8.png' },
  { src: '/images/homePage_brands/brand_9.png' },
  { src: '/images/homePage_brands/brand_10.png' },
  { src: '/images/homePage_brands/brand_11.png' },
  { src: '/images/homePage_brands/brand_12.png' },
  { src: '/images/homePage_brands/brand_13.png' },
  { src: '/images/homePage_brands/brand_14.png' },
  { src: '/images/homePage_brands/brand_15.png' },
  { src: '/images/homePage_brands/brand_16.png' },
  { src: '/images/homePage_brands/brand_17.png' },
  { src: '/images/homePage_brands/brand_2.png' },
  { src: '/images/homePage_brands/brand_3.png' },
  { src: '/images/homePage_brands/brand_4.png' },
  { src: '/images/homePage_brands/brand_5.png' },
  { src: '/images/homePage_brands/brand_6.png' },
  { src: '/images/homePage_brands/brand_7.png' },
  { src: '/images/homePage_brands/brand_8.png' },
  { src: '/images/homePage_brands/brand_9.png' },
  { src: '/images/homePage_brands/brand_10.png' },
  { src: '/images/homePage_brands/brand_11.png' },
  { src: '/images/homePage_brands/brand_12.png' },
  { src: '/images/homePage_brands/brand_13.png' },
  { src: '/images/homePage_brands/brand_14.png' },
  { src: '/images/homePage_brands/brand_15.png' }
]

const adTypes = [
  {
    img: '/images/services/digitalmarketing/display-ad.jpeg',
    heading: 'Display Ads',
    content: "Promoting your business is an obvious choice, but don't you think that you would like to make your brand stand out? That's why presenting your brand with a creative image is important to capture your customer's attention. Display your brand that is engaging & memorable. Familiarize people with your brand, and, above all, ensure it stays relevant. A strong visual appeal can attract a wider audience and provide long-term benefits for your business."
  },
  {
    img: '/images/services/digitalmarketing/video-ad.jpeg',
    heading: 'Video Ads',
    content: "Videos are everywhere, whether you're gaming, browsing search engines, or streaming on OTT platforms. They’re incredibly engaging and far more effective at telling your story. Here is the great part. Sharing them is just a click away, instantly connecting you with your audience. One great video can reach a massive crowd, powerfully delivering your message. As digital content expands, videos are the key to keeping your brand in tune with your audience."
  },
  {
    img: '/images/services/digitalmarketing/search-ad.jpeg',
    heading: 'Search Ads',
    content: "Search ads, often tied to PPC (Pay-per-click) are all about hitting the bullseye and relevance, making it a highly cost-effective marketing strategy with great ROI. Users are searching for specific products, services, and information exactly when they need it. With PPC, you can serve up perfectly targeted ads right at that moment. Experiment with these ads to connect with the right customers by matching their search intent with their behaviour on your site."
  },
  {
    img: '/images/services/digitalmarketing/app-ad.jpeg',
    heading: 'App Ads',
    content: "Ever leave your smartphone behind, even for a moment? We’re all so attached to our devices that they’ve become integral to our lives. Savvy businesses are tapping into this reality with app advertising. Mobile ads are uniquely positioned to reach users exactly when they’re looking for products or services, delivering messages at just the right moment. This precise targeting makes app ads one of the most impactful ways to engage with potential customers."
  }
]

function DigitalMarketing() {
  return (
    // <div className='from-2% md:to-16% relative bg-gradient-to-b from-[#DC5F00] to-transparent to-5% xl:to-20%'>
    //   <div className='  '>
    //     <div className='flex min-h-[40vh] w-full flex-col items-center justify-start p-5 sm:p-3 '>
    //       <div className='relative flex w-full flex-wrap items-center justify-center gap-10 md:gap-3'>
    //         <img
    //           src={'/images/services/digitalmarketing/digimarkservice.png'}
    //           className='w-[80vw] md:w-[30vw]'
    //         />
    <div className='from-2% md:to-8% relative bg-gradient-to-b from-[#DC5F00] to-transparent to-10% xl:to-20%'>
      <div className=''>
        <div className='flex min-h-[30vh] w-full flex-col items-center justify-start p-5 sm:p-3'>
          <div className='relative flex w-full flex-wrap items-center justify-center gap-10 md:gap-3 md:mb-5'>
            <img
              src={'/images/services/digitalmarketing/digimarkservice.png'}
              className='w-[80vw] md:w-[30vw]'
            />
            <div className='flex flex-col items-center justify-center gap-5 md:justify-center sm:justify-center'>
              <div className='font-sans'>
                <AnimatedText
                  text='Enrich Your Online Presence'
                  className='font-sans text-[1.5rem] font-medium'
                  duration={0.02}
                />
                <AnimatedText
                  text='With'
                  className='text-heading-1 tracking-wide'
                />
                <AnimatedText
                  text='Smart'
                  className='text-heading-1 tracking-wide'
                />

                <AnimatedText
                  text='Marketing'
                  duration={0.1}
                  className='text-heading-1 tracking-wide'
                />
              </div>
              <Button className='rounded-none bg-white bg-gradient-to-r from-[#DC5F00] from-10% to-[#FF8F00] to-50% font-sans font-bold uppercase text-white hover:to-white hover:text-black'>
                Know More
              </Button>
            </div>
          </div>
        </div>
        <ShadowTitle head={'ACROSS THE WEB'} title={'BE VISIBLE'} />
        <div className="flex md:py-[5rem]  md:mb-2 flex-wrap justify-center w-full ">
          {adTypes?.map((ad, index) => (
            <div
              key={index}

              className="
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    gap-2 
                    p-2 
                    shadow-lg
                    
                  
                    w-full 
                    sm:w-[48%]  /* Two cards per row on small screens */
                    md:w-[48%]  /* Two cards per row on medium screens */
                    lg:w-[23%]  /* Four cards per row on large screens */
                    h-[34rem]
                    " /* Height for each card */
            >
              <img src={ad.img} alt={`ad-${index}`} />
              <h4 className="font-sans">{ad.heading}</h4>
              <p className="p-5 text-center font-sans font-medium">{ad.content}</p>
            </div>
          ))}
        </div>

        <ShadowTitle head={'VISIBILITY'} title={'What are You Aiming For?'} />
        <p className='p-5 text-center font-sans'>
          Do you want to zero in on your local market and connect with customers nearby, or are you excited to step out of your comfort zone and reach people all around the world? With AdWords, you can do both with ease! No need to stress about thinking outside the box—just let ETE Digital Marketing fine-tune AdWords to match your exact needs.
        </p>
        <ShadowTitle head={'PERFOMANCE'} title={'Metrics'} />
        <p className="p-5 text-center font-sans">
          &quot;Curious about your performance? Wondering if there&#39;s room for improvement? It&#39;s time to stop second-guessing and see your web performance for yourself.&quot;
        </p>
        <div className="w-full  flex flex-wrap justify-center items-center gap-6">
          {webdevCardData?.map((card, index) => (
            <div key={index} className="relative w-[26rem]  flex flex-col-3 flex-wrap  justify-center overflow-hidden p-2 mb-6">
              <div
                className={`group relative cursor-pointer overflow-hidden w-full h-[26rem]  bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all shadow-md duration-700 hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
                <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-[#DC5F00] transition-all duration-700 group-hover:scale-[20]`}></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className={`grid h-20 w-20 place-items-center rounded-full bg-[#DC5F00] transition-all duration-700 group-hover:bg-[#DC5F00] group-hover:border-2 border-[#FCF8F3]`}>
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
        {/* <ShadowTitle head={'THE GREATEST'} title={'CLIENTS'} />
        <div className='mx-auto grid w-3/4 max-w-full grid-cols-2 items-center justify-center gap-x-2 gap-y-2 py-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
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
        <div className='absolute  right-4 top-[30vh] md:top-[10vh] flex flex-col items-center justify-center gap-1'>
          <div className='flex h-[100px] w-auto rounded-t-3xl bg-[#DC5F00] p-0.5'></div>
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

export default DigitalMarketing
