import React from 'react'
import ShadowTitle from '../ShadowTitle'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter, Instagram, Phone, Mails, MapPin } from 'lucide-react'
import { SocialIcon } from 'react-social-icons'
// import PlacementBanner from './PlacementBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLocationArrow } from 'react-icons/fa6'
import { faEnvelopeOpenText, faLocationArrow, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'




const servicesData = [
  {
    title: 'UI UX Design',
    description:
      'As a user-centric design agency in Bangalore, India, we create functionally beautiful digital experiences that highly engage with your target audience. We tend to create meaningful relationships amidst brands and their consumers through inspiring design...'
  },
  {
    title: 'Website Development',
    description:
      'Making sure that your website is universally compatible and user-friendly, an exclusive expert team of designers and developers are assigned to ensure that not only the plan goes according to a timeline but also that your approval is taken...'
  },
  {
    title: 'Content Marketing',
    description:
      'Simple. We create digital content. It’s the element that helps us to be the company we are and our ever-growing client list is proof of that. Brandstory is one of the leading content marketing communications company in Bangalore, India provides...'
  },
  {
    title: 'Search Engine Optimisation',
    description:
      'Search Engine Optimization (SEO) program increases overall visibility of your business across all search engine platforms. It provides opportunities for brands to create acquisitions (sales, leads, inquiries etc.), and help consumers to ...'
  },
  {
    title: 'Pay Per Click (PPC)',
    description:
      'We increase your digital footprint with Pay Per Click campaigns or Google Adwords and Bing Adwords. A plan is sketched out and implemented accordingly, with this your campaign has begun. The plan includes specific important keywords ...'
  },
  {
    title: 'Social Media Marketing',
    description:
      'We provide expertise in design implementation, providing a full range of social media marketing services (SMM) bounding in popular social media platforms, content generation, creatives ideation, social branding techniques. Holding it all together ...'
  }
]

import Link from 'next/link'

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
  { src: '/images/homePage_brands/brand_15.png' },
  { src: '/images/homePage_brands/brand_16.png' },
  { src: '/images/homePage_brands/brand_17.png' },
  { src: '/images/homePage_brands/brand_16.png' },
  { src: '/images/homePage_brands/brand_17.png' }
]

const links = [
  { path: '/Pages/services/digital-marketing', name: "Digital Marketing" },
  { path: '/Pages/services/web-development', name: "Web Development" },
  { path: '/Pages/services/uiux', name: "UI / UX" },
  { path: '/Pages/services/app-development', name: "App Development" },
  { path: '/Pages/Training/digital-marketing-training', name: "Digital Marketing Training" },

]

const SectionFooter = () => {
  return (

    <div className='bg-[#232121] '>
      <hr className="border-t-2 border-gray-300 w-full " />

      <div className='p-10 sm:pl-[4rem] xl:pl-[8rem]'>
        <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-start gap-[3rem] sm:gap-[3rem] md:gap-[7rem] xl:gap-[10rem]'>
          <div className='w-full  lg:w-1/3'>
            <a href='#' className=' block'>
              <img
                src='/ETE_Final.png'
                alt='ete_logo'
                title='ete_logo'
                className=' w-50 h-24 '
              />
            </a>
            <p className='text-justify font-stock capitalize  text-[#bbb9b9dc]'>
              &quot;ETE Digital provide end-to-end digital marketing solutions, from SEO and paid ads to content creation, designed to boost brand visibility and drive business growth.&quot;
            </p>

            <div className='mt-8 grid grid-cols-1 gap-3  pt-6 md:grid-cols-2 '>

              <div className='flex items-start space-x-4 rounded md:justify-start text-[#bbb9b9dc]'>

                <a href="https://www.facebook.com/etedigitalmarketing" target="_blank" rel="noopener noreferrer">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                <a href="https://www.instagram.com/etedigital/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/ete-digital-9277102a0/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://in.pinterest.com/etedigital1/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* <a href='' aria-label='Instagram'>
              <Instagram className='text-text' />
              </a>
              <a href='https://www.linkedin.com/in/ete-digital-9277102a0/' aria-label='LinkedIn'>
              <Linkedin className='text-text' />
              </a>
              <a className='text-red' href=""><SocialIcon className='text-black' url="https://www.instagram.com/etedigital/" /></a> */}
              </div>
            </div>
          </div>

          <div className='mt-2 flex flex-col gap-4 px-0'>
            <h4 className='mb-2 font-sans font-bold text-[2xl] text-white'>
              <span>Useful Links</span>
            </h4>
            {links.map((link, index) => (
              <p key={index} className='font-sans font-semibold'>
                <Link href={link.path} className='relative inline-block text-[#bbb9b9dc] transition duration-300 ease-out hover:text-[#ba4b29]'>
                  {link.name}
                  <span className='absolute inset-x-0 bottom-0 h-[3px] hover:bg-[#ba4b29] hover:opacity-100 transition-opacity duration-300 ease-out'></span>
                </Link>
              </p>
            ))}
          </div>

          <div className='mt-[0rem] flex flex-col gap-2 text-[white]'>
            <h4 className='mb-2 text-left text-2xl font-sans font-bold'>
              <span>Contact Info</span>
            </h4>

            <div className="text-left mt-4 font-light">
              <span className="flex items-start flex-col gap-1 relative text-[#bbb9b9dc] transition duration-300 ease-out">
                <div className="max-w-xs">
                  <div className="flex text-start items-start px-0">
                    <FontAwesomeIcon icon={faLocationArrow} className="h-5 w-5 text-4xl text-[#ba4b29]" />
                    <div className="text-base">
                      <p className="px-2">112/4, First Floor BMR Landmark</p>
                      <p className="px-2">HSR Layout, 7th Sector, Bommanahalli</p>
                      <p className="px-2">MG Palya Main Rd, Bangalore-560068</p>
                    </div>
                  </div>
                </div>
              </span>
            </div>


            <div className="font-light mt-3">
              <div className="flex items-center">
                <a href="tel:+919655971928" className="text-[#bbb9b9dc] flex items-center">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-[#ba4b29] w-5 h-5 text-2xl pr-2" />
                  <span className="text-xl">+91 96559 71928</span>
                </a>
              </div>
              <div className="flex items-center mt-1 px-7">
                <a href="tel:+919597331928" className="text-[#bbb9b9dc] flex items-center">
                  <span className="text-xl">+91 95973 31928</span>
                </a>
              </div>
            </div>

            <p className="flex font-light items-center mt-3 ">
              <a href="mailto:etedigital1@gmail.com" className="text-[#bbb9b9dc] flex items-center transition duration-300 ease-out ">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-[#ba4b29] w-5 h-5 text-2xl pr-2' /><span className='text-xl'> etedigital1@gmail.com</span>
              </a>
            </p>


          </div>
          {/* <div className='w-full border-t border-gray-600 bg-background py-2'> */}

          {/* </div> */}

          {/* Google Ads Search Certified Section */}
          {/* <div className='mt-5 w-full px-4 text-center md:w-1/6'>
            <img
              src='/images/google-ads-search-certified-brandstory2023.png'
              alt='Google Ads Search Certified'
              title='Google Ads Search Certified'
              className='mx-auto h-auto w-24'
            />
            <p className='pt-2 text-xs'>
              <b>GOOGLE ADS SEARCH CERTIFIED</b>
            </p>
          </div> */}

          {/* Google Partner Agency Section */}
          {/* <div className='mt-5 w-full px-4 text-center md:w-1/6'>
            <a
              href='https://www.google.com/partners/agency?id=1975289574'
              aria-label='brandstory partner badge'
              target='_blank'
            >
              <img
                src='https://www.gstatic.com/partners/badge/images/2023/PartnerBadgeClickable.svg'
                alt='Google Partner Agency'
                className='mx-auto h-auto w-24'
              />
            </a>
            <p className='pt-2 text-xs'>
              <b>GOOGLE PARTNER AGENCY</b>
            </p>
          </div> */}
        </div>

        <p className='text-center text-[1rem] ml-0 mt-10  font-sans font-semibold text-[#bbb9b9dc] sm:mb-3 md:text-left'>
          © Copyrights 2024 By ETE Digital Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default SectionFooter
