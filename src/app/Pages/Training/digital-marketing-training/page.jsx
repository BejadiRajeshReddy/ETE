'use client';
import ShadowTitle from '@/components/common/ShadowTitle'
import AnimatedText from '@/components/ui/animatedText'
import { Button } from '@/components/ui/button'
import React from 'react'
import { PiMouseSimpleBold } from 'react-icons/pi'
import { SiTicktick } from 'react-icons/si'
import { FaSchoolFlag } from 'react-icons/fa6'
import { ArrowDownToLine } from 'lucide-react'
import SectionFooter from '@/components/common/Home/SectionFooter';

const coursbenefits = [
  {
    img: '/images/services/digi_training_file/Industry-aligned.png',
    content: (
      <>
        <strong>Industry-centric</strong> curriculum

      </>
    )
  },
  {
    img: '/images/services/digi_training_file/Projects.png',
    content: (
      <>
        Hands-on <strong>Projects</strong>
      </>
    )
  },
  {
    img: '/images/services/digi_training_file/tools.png',
    content: (
      <>
        Digital Marketing <strong>AI</strong> tools
      </>
    )
  },
  {
    img: '/images/services/digi_training_file/Job-Portal.png',
    content: (
      <>
        <strong>Exclusive </strong> job platform
      </>
    )
  }
]

const curriculumData = [
  { title: 'Digital marketing Fundamentals' },
  { title: 'WordPress Designing' },
  { title: 'Search Engine Optimisation (SEO)' },
  { title: 'Social Media Marketing (SMM)' },
  { title: 'Search Engine Marketing (SEM)' },
  { title: 'Email Marketing' },
  { title: 'Meta Ads' },
  { title: 'Google Tag Manager' }
]

const whobenefit = [
  {
    title: 'Digital Marketing Enthusiasts',
    bgImg:
      '/images/services/digi_training_file/DigitalMarketingEnthusiasts.jpg',
    content:
      "Digital marketing enthusiasts who are eager to make a difference in the digital world."
  },
  {
    title: 'Established Career Individuals',
    bgImg:
      '/images/services/digi_training_file/EstablishedCareerIndividuals.jpg',
    content:
      "Current professionals who are aiming to advance their careers or switch to digital marketing."
  },
  {
    title: 'Creative Content Producers',
    bgImg:
      '/images/services/digi_training_file/CreativeContentProducers.jpg',
    content: "Creative professionals who are keen to sharpen their digital skills"
  },
  {
    title: 'Entrepreneurs',
    bgImg:
      '/images/services/digi_training_file/Entrepreneurs.jpg',
    content:
      "Business leaders aiming to master performance marketing to drive impressive growth for their clients."
  }
]

const projectsData = [
  {
    img: '/images/services/digi_training_file/AdsMarketing.png',
    title: 'Facebook & Google Ads Campaings',
    heading:
      'Create and manage powerful advertising campaigns on Facebook and Google.',
    content:
      "You'll track the numbers and provide regular reports on performance, focusing on key metrics that matter.",
    links: [
      { title: 'Facebook Ads' },
      { title: 'Google Ads' },
      { title: 'Analytical Skills' },
      { title: 'Targeting' }
    ]
  },
  {
    img: '/images/services/digi_training_file/blog.jpg',
    title: 'Blog Creation',
    heading: "Build a blog that captures attention and keeps readers coming back.",
    content:
      "You'll promote a community, encouraging discussions and responding to comments to keep engagement high.",
    links: [
      { title: 'Word Press' },
      { title: 'Yoast SEO' },
      { title: 'Web Design' },
      { title: 'Content Strategy' }
    ]
  },
  {
    img: '/images/services/digi_training_file/email.jpg',
    title: 'Email Lead Generation',
    heading:
      "Design and launch a killer email marketing strategy using GetResponse.",
    content:
      "Keep a close eye on campaign performance, fine-tuning strategies to maximize results.",
    links: [
      { title: 'Email marketing' },
      { title: 'Automation' },
      { title: 'Copywriting' },
      { title: 'GetResponse' },
    ]
  }
]

function DigitalMarketingTraining() {

  const downloadPDF = () => {

    const pdfUrl = '/BrochureFile/DigitalMarketing.pdf'; // Correct path for public directory
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ETEDigitalMarketing.pdf'; // Name of the downloaded file /optional
    document.body.appendChild(link);
    link.click(); //  download client device
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className='from-2% md:to-8% relative bg-gradient-to-b from-[#1daabc] to-transparent to-10% xl:to-20%'>
      <div className=''>
        <div className='flex min-h-[30vh] w-full flex-col items-center justify-start p-5 sm:p-3'>
          <div className='relative flex w-full flex-wrap items-center justify-center gap-10 md:gap-3'>
            <img
              src={'/images/services/digitalMarketingTraining/digitraining.png'}
              className='w-[80vw] md:w-[30vw]'
            />
            <div className='flex flex-col items-center justify-center gap-5 md:justify-center sm:justify-center'>
              <div className='font-sans'>

                <AnimatedText
                  text='Learn to -Start Your'
                  className='font-sans text-base-large font-medium'
                  duration={0.02}
                />
                <AnimatedText
                  text='Journey '
                  className='text-heading-1 '
                />
                <AnimatedText
                  text='With Digital'
                  className='text-heading-1 '
                />
                <AnimatedText
                  text='marketing'
                  duration={0.1}
                  className='text-heading-1 tracking-wide'
                />
              </div>
              <Button className='rounded-none  bg-white bg-gradient-to-r from-[#1daabc] from-10% to-[#1daabc] to-50% font-sans font-bold uppercase text-white hover:to-white hover:text-black'>
                Know More
              </Button>
            </div>
          </div>
        </div>

        {/* course benefits */}
        <div className='mb-0'>
          <ShadowTitle
            head={'DIGITAL MARKETING'} title={'DIGITAL MARKETING COURSE'}
          />
        </div>
        <section className='mb-16 w-full p-0'>


          <div className='flex flex-col-reverse flex-wrap items-center justify-center px-2 pr-2 gap-3 md:flex-row'>
            <div className='m-h-full flex flex-1 flex-col items-center justify-center'>
              <p className='p-5 text-justify font-sans'>
                {"The Ultimate Digital Marketing Masterclass Who could resist mastering a trendy digital marketing skill that opens doors to amazing career opportunities and impressive compensation? With the digital world evolving fast, having the right expertise makes you highly sought after. Our course at ETE Digital Marketing is designed to keep you ahead of industry trends. So why settle for less? Get set for a career that promises growth, excitement, and rewards. Enroll now"}.
              </p>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                {coursbenefits.map((ben, ind) => (
                  <div
                    key={ind}
                    className='flex flex-col items-center justify-center overflow-hidden rounded-lg bg-[#1daabc] shadow-md'
                  >
                    <img className='block w-[70%] object-cover' src={ben.img} />
                    <p className='p-5 text-center  font-sans text-white'>
                      {ben.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-auto flex w-[80%] flex-col items-center justify-center gap-3 rounded-2xl bg-[#1daabc] p-3 shadow-2xl md:w-[50%] lg:w-[25%] xl:w-[23%]'>
              <div className='relative flex h-[260px] w-full items-center justify-center'>
                <img
                  className='absolute bottom-0 block max-h-[340px] w-auto object-cover'
                  src='/images/services/digi_training_file/professionals.png'
                />
                <div className='from-2% absolute bottom-0 z-20 flex h-full w-full bg-gradient-to-t from-[#1daabc] to-transparent to-20%'></div>
              </div>
              <button className='flex w-full items-center justify-center rounded-lg bg-white px-5 py-2 font-sans font-bold shadow-md'>
                The next learning journey starts soon!
              </button>
            </div>
          </div>
        </section>

        {/* course heighlights */}
        <section className='mb-16 w-full py-12 font-sans'>
          <h2 className='text-center md:mb-16'>
            <span className='text-[#1daabc]'>ETE</span> Experiential Learning Opportunities
          </h2>

          <div className='mt-5 grid grid-cols-1 px-2 pr-2 gap-3 md:grid-cols-2 lg:grid-cols-3'>
            <div className='relative overflow-hidden rounded-[30px] border-[1px] border-[#1daabc] bg-[#FAFAFA] p-8 md:rounded-[36px]'>
              <div className='relative z-10 h-full font-sans'>
                <div className='flex h-full flex-1 flex-col justify-between space-y-5'>
                  <div className='flex flex-col justify-between'>
                    <div className='flex justify-between text-xl font-bold text-gray-900 md:text-2xl'>
                      <span>Qualify For In-Demand Job Roles</span>
                    </div>
                    <div className=''>
                      <ul className='space-y-2 pt-4'>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Digital Marketing Executive</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Social Media Executive/Coordinator</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>SEO Executive/Analyst</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Search Engine Marketing (SEM) Executivet</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span> Content Marketing Executive</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span> Email Marketing Executive</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className='pt-2'>
                    <a
                      href='/billing'
                      type='button'
                      target='_blank'
                      className='group inline-flex cursor-pointer appearance-none items-center space-x-1 rounded-xl bg-[#1daabc] px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                    >
                      <span className='w-full text-base font-semibold'>
                        Built In Placement Assistance
                      </span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-[30px] border-[1px] border-[#1daabc] bg-[#FAFAFA] p-8 md:rounded-[36px]'>
              <div className='relative z-10 h-full font-sans'>
                <div className='flex h-full flex-1 flex-col justify-between space-y-5'>
                  <div className='flex flex-col justify-between'>
                    <div className='flex justify-between text-xl font-bold text-gray-900 md:text-2xl'>
                      <span>Placement Highlights</span>
                    </div>
                    <div className=''>
                      <ul className='space-y-2 pt-4'>
                        <li className='flex items-center space-x-2 font-medium text-[#9D9C9C]'>
                          <span>Placement Record</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <span>100 % Placement Assistance </span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-[#9D9C9C]'>
                          <span>Salaries upto</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <span> INR 4 Lakhs for Freshers</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-[#9d9c9c]'>
                          <span>Top Recruiters </span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          Resume Hubs <br /> Unisys HR
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className='pt-2'>
                    <a
                      href='/billing'
                      type='button'
                      target='_blank'
                      className='group inline-flex cursor-pointer appearance-none items-center space-x-1 rounded-xl bg-black px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                    >
                      <span className='w-full text-base font-semibold'>
                        DOWNLOAD CAREER HANDBOOK
                      </span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-[30px]  border-[1px] border-[#1daabc] bg-[#FAFAFA] p-8 md:rounded-[36px]'>
              <div className='relative z-10 h-full font-sans'>
                <div className='flex h-full flex-1 flex-col justify-between space-y-5'>
                  <div className='flex flex-col justify-between'>
                    <div className='flex justify-between text-xl font-bold text-gray-900 md:text-2xl'>
                      <span>Skills You Gain</span>
                    </div>
                    <div className=''>
                      <ul className='space-y-2 pt-4'>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Search Engine Optimization</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>ROI Optimization</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Website Building</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Social Media Marketing</span>
                        </li>
                        <li className='flex items-center space-x-2 font-medium text-black'>
                          <SiTicktick color="#1daabc" />
                          <span>Email Marketing</span>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='pt-2'>
                    {/* <a
                      href='/billing'
                      type='button'
                      target='_blank'
                      className='group inline-flex cursor-pointer appearance-none items-center space-x-1 rounded-xl bg-[#1daabc] px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                    >
                      <span className='w-full text-base font-semibold'>
                        APPLY NOW
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* curriculum */}
        <div className='mb-16 w-full  rounded-lg  bg-[#1daabc] p-10 font-sans'>
          <div className='flex flex-wrap items-center justify-between'>
            <h4 className='text-white'>Curriculum</h4>
            <p className='text-yellow-300'>
              ETE Digital - Acquire Knowledge On End-To-End Marketing
            </p>
          </div>
          <div className='mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3'>
            {curriculumData?.map((cur, ind) => (
              <div
                key={ind}
                className='flex h-[70px] items-center justify-start gap-2 rounded-lg bg-[#38cbc4] px-3'
              >
                <FaSchoolFlag className='text-yellow-300' size={28} />
                <p className='text-white'>{cur.title}</p>
              </div>
            ))}
            <div className='items-center flex  justify-center mt-3'>
              <Button className='w-[15rem] text-1xl font-bold bg-white text-[#2b70b0] hover:bg-white hover:text-[#2b70b0]' onClick={downloadPDF}>
                <ArrowDownToLine /> Download Brochure
              </Button>
            </div>
          </div>

        </div>

        {/* hands on learning */}
        <section className='mb-16 w-full p-3 font-sans'>
          <h2 className='text-center md:mb-16'>
            <span className='text-[#1daabc]'>Projects</span> for hands-on
            learning
          </h2>
          <div className='md: grid-flow-col-2 mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3'>
            {projectsData?.map((proj, ind) => (
              <div
                key={ind}
                className='relative flex w-full flex-col items-center justify-start gap-2 rounded-lg border-2 border-[#1daabc] p-5 px-8 shadow-md'
              >
                <div className='mt-2 flex items-center justify-center'>
                  <img
                    alt='image'
                    src={proj?.img}
                    className='block h-[80%] w-[65%]'
                  />
                </div>
                <h5 className='text-center'>{proj.heading}</h5>
                <p className='text-center'>{proj.content}</p>
                <div className='mt-5 grid w-full grid-cols-2 gap-3'>
                  {proj.links?.map((link, linkind) => (
                    <a
                      key={linkind}
                      className='rounded-lg border-2 border-[#1daabc] p-1 text-center'
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
                <div className='absolute left-1/2 top-0 flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center'>
                  <div className='flex w-auto items-center justify-center rounded-full bg-[#1daabc] px-4 py-3 text-white'>
                    {proj.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* who whould benefit */}
        <section className='w-full p-3 font-sans'>
          <h2 className='text-center'>
            Who Will <span className='text-[#1daabc]'>Find</span> This Course Valuable
          </h2>
          <div className='md:grid-flow-col-2 mt-2 grid grid-cols-1 gap-3 md:mb-5 lg:grid-cols-4'>
            {whobenefit?.map((cur, ind) => (
              <div
                key={ind}
                className='card flex min-h-[270px] w-auto items-center justify-center gap-3 font-sans'
              >
                <div className='card__content relative flex h-full w-full items-center justify-center p-0 text-center font-bold transition-transform duration-1000'>
                  {/* front side */}
                  <div className='card__front absolute bottom-0 left-0 right-0 top-0 flex h-full min-w-full items-center justify-center'>
                    <div className='flex h-[150px] w-full items-center justify-center rounded-2xl bg-[#1daabc] p-16 shadow-xl'>
                      <h4 className='text-center font-bold text-white'>
                        {cur.title}
                      </h4>
                    </div>
                  </div>
                  {/* backside */}
                  <div className='card__back absolute bottom-0 left-0 right-0 top-0 h-auto min-w-full rounded-2xl bg-white px-4 py-2 shadow-xl'>
                    <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
                      <div className='flex w-full items-center justify-center'>
                        <div className='flex aspect-auto w-[50%] items-center justify-center overflow-hidden rounded-full bg-white'>
                          <img
                            src={cur.bgImg}
                            className='block w-auto object-cover'
                          />
                        </div>
                      </div>
                      <p className=''>{cur?.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='absolute right-4 -mr-4 top-[30vh] md:top-[10vh] flex flex-col items-center justify-center gap-1'>
            <div className='flex h-[100px] w-auto rounded-t-3xl bg-[#1daabc] p-0.5'></div>
            <h6 className='mt-4 rotate-90 font-sans text-[0.85rem] uppercase'>
              scroll
            </h6>
            <PiMouseSimpleBold size={30} className='mt-4' />
          </div>
        </section>
      </div>

      <SectionFooter />
    </div>
  )
}

export default DigitalMarketingTraining
