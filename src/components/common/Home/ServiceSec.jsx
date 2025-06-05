'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import ShadowTitle from '../ShadowTitle'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const trainingData = [
  {
    imageSrc: '/images/serviceImage/Data.jpg',
    title: "Data Science Training",
    description:
      'Master Data Science with Python & Power BI. Learn data analysis, machine learning, and dashboarding through real- time projects.Build in -demand skills and a job - ready portfolio in just weeks..'
    // <iframe
    //   className="w-full max-w-md h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-70 rounded-lg shadow-md"
    //   src="https://www.youtube.com/embed/tHCiX9jHHWY"

    //   title="YouTube video player"
    //   frameBorder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowFullScreen
    // ></iframe>
  },
  {
    imageSrc: '/images/serviceImage/smmm.png',
    title: 'Digital Marketing Training',
    description:
      'Our Digital Marketing Training focuses on real-time projects to help you master SEO, PPC, Social Media, Content Marketing, and Analytics. Gain practical skills by building a portfolio that sets you apart in the job market. Perfect for beginners and professionals, this course includes expert guidance and career support to help you succeed.'
  },
]

const servicesData = [
  {
    imageSrc: '/images/serviceImage/web__dev.png',
    title: 'Web Development',
    description:
      'Looking for a standout website or web portal? We create high-performance sites using top-notch, secure technologies. Whether you need a Static, Dynamic, or eCommerce site, we’ve got you covered for everything from corporate pages to blogs and online stores.'
  },
  {
    imageSrc: '/images/serviceImage/dmark.png',
    title: 'Digital Marketing',
    description:
      "Digital is the past, present, and future, and there's no denying it.By living digital, our brand gains three unbeatable advantages greater visibility, marketing opportunities smart budgets & genuine customer connections.Ready to boost your digital presence ? Let s start today."
  },
  {
    imageSrc: '/images/serviceImage/SEO.png',
    title: 'SEO',
    description:
      'People trust search engines just like they trust their doctors. With solid SEO, your brand will stand out and attract visitors naturally. Get more customers and boost your leads without spending a dime on ads. Ready to improve your rankings? Reach out to us today'
  },
  {
    imageSrc: '/images/serviceImage/mobile.png',
    title: 'IOS & Android App Development',
    description:
      'Our iOS Training Program teaches Swift and Xcode through real-time projects.Learn to build apps with Core Data, APIs, and UI/UX design, while working on live projects like ECommerce and social apps. Gain practical skills to showcase your expertise, with expert guidance and career support to help you succeed in iOS development.'
  }
]

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceChange = value => {
    setFormData({
      ...formData,
      service: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      toast.success('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } else {
      toast.error('Failed to send message.')
    }
  }

  return (
    <div className='mx-auto w-full border border-red-200 p-6'>
      <h2 className='mb-4 text-xl font-semibold'>Get In Touch With Us For More Information</h2>
      <form>
        <div className='mb-4'>
          <Input
            type='text'
            name='name'
            placeholder='Enter Name'
            // className='border-transparent] border'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <Input
            type='email'
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4 flex'>
          <Input
            type='tel'
            name='phone'
            placeholder='Your Number'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            type='text'
            name='organization'
            placeholder='Organization Name'
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <Select onValueChange={handleServiceChange}>
            <SelectTrigger>
              <SelectValue placeholder='Select a service' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='web-design'>Digital Marketing</SelectItem>
                <SelectItem value='seo'>Web Development</SelectItem>
                <SelectItem value='branding'>UI UX</SelectItem>
                <SelectItem value='marketing'>App Development</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='mb-4'>
          <Textarea
            placeholder='Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type='submit'
          className='w-full rounded bg-red-500 px-3 py-2 text-white transition hover:bg-red-600'
        >
          Submit
        </button>
      </form>
      <p className='mt-6 text-sm text-gray-700'>
        We are a Design and Digital Marketing Agency in India providing design,
        development and digital solutions for over 400+ clients across the
        globe.
      </p>
    </div>
  )
}

const ServiceSec = () => {

  return (
    // <div className='container'>
    //   <ShadowTitle head={'SERVICES'} />

    //   <h4 className='mb-10 mt-5 text-center text-heading-4 font-semibold'>
    //     A Leading ETE Digital Marketing Agency in Bangalore, Delivering Proven
    //     Results
    //   </h4>
    //   <div className='mb-28 mt-10 flex flex-col justify-between gap-4 md:flex-row'>
    //     <div className='grid gap-4 md:grid-cols-3'>
    //       {servicesData?.map((item, index) => (
    //         <div
    //           key={index}
    //           class='card flex w-auto items-center justify-center gap-2'
    //         >
    //           <div class='card__content relative flex h-96 w-full items-center justify-center p-0 text-center font-bold transition-transform duration-1000'>
    //             {/* front side */}
    //             <Card
    //               key={index}
    //               className='max-w-[850px] bg-background px-4 py-8 transition-shadow'
    //             >
    //               <div className='aspect-auto w-full h-[180px] md-h-auto overflow-hidden rounded-full bg-white'>
    //                 <img
    //                   src={item.imageSrc}
    //                   className='block  object-cover w-auto md:h-auto'
    //                 />
    //               </div>
    //               <h5 className='mb-4 mt-6 text-center text-base font-semibold text-text'>
    //                 {item.title}
    //               </h5>
    //               {/* <p className='text-justify text-text'>{item.description}</p> */}
    //             </Card>

    //             {/* backside */}

    //             <div class='card__back absolute bottom-0 left-0 right-0 top-0 h-auto min-w-full rounded-2xl bg-white px-4 py-2 shadow-xl'>
    //               <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
    //                 <p className='text-center text-base font-semibold text-text'>
    //                   {item.description}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <GetQuoteForm />
    //   </div>
    <>

      <div className='container'>
        <ShadowTitle head={'Training'} />

        <h4 className='mb-10 mt-5 text-center text-heading-4 font-semibold'>
          &quot;ETE Digital in Bangalore offers hands-on training with real-time projects.&quot;
        </h4>
        <div className='mb-5 mt-10 flex flex-col justify-between gap-4 md:flex-row'>
          <div className='grid gap-10 md:grid-cols-2  justify-items-center mx-auto'>
            {trainingData?.map((item, index) => (
              <div
                key={index}
                class='card flex w-auto items-center justify-center gap-2'
              >
                <div class='card__content relative flex h-full w-full items-center justify-center p-0 text-center font-bold transition-transform duration-1000'>
                  {/* front side */}
                  <Card
                    key={index}
                    className='max-w-96 bg-background px-4 py-8 transition-shadow'
                  >
                    <div className='aspect-auto h-[180px] w-full overflow-hidden rounded-full bg-white'>
                      <img
                        src={item.imageSrc}
                        className='block w-full object-cover'
                      />
                    </div>
                    <h5 className='mb-4 mt-6 text-center text-base font-semibold text-text'>
                      {item.title}
                    </h5>
                    {/* <p className='text-justify text-text'>{item.description}</p> */}
                  </Card>

                  {/* backside */}

                  <div class='card__back absolute bottom-0 left-0 right-0 top-0 h-auto min-w-full rounded-2xl bg-white px-4 py-2 shadow-xl'>
                    <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
                      <p className='text-center text-base font-semibold text-text'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <GetQuoteForm /> */}
        </div>

      </div>
      <div className='container'>
        <ShadowTitle head={'SERVICES'} />

        <h4 className='mb-10 mt-5 text-center text-heading-4 font-semibold'>
          &quot;ETE Digital is Specialist in Growing Business in the Digital Era.&quot;
        </h4>
        <div className='mb-5 mt-10 flex flex-col justify-between gap-4 md:flex-row'>
          <div className='grid gap-10 md:grid-cols-2 justify-items-center mx-auto'>
            {servicesData?.map((item, index) => (
              <div
                key={index}
                class='card flex w-auto items-center justify-center gap-2'
              >
                <div class='card__content relative flex h-full w-full items-center justify-center p-0 text-center font-bold transition-transform duration-1000'>
                  {/* front side */}
                  <Card
                    key={index}
                    className='max-w-96 bg-background px-4 py-8 transition-shadow'
                  >
                    <div className='aspect-auto h-[180px] w-full overflow-hidden rounded-full bg-white'>
                      <img
                        src={item.imageSrc}
                        className='block w-full object-cover'
                      />
                    </div>
                    <h5 className='mb-4 mt-6 text-center text-base font-semibold text-text'>
                      {item.title}
                    </h5>
                    {/* <p className='text-justify text-text'>{item.description}</p> */}
                  </Card>

                  {/* backside */}

                  <div class='card__back absolute bottom-0 left-0 right-0 top-0 h-auto min-w-full rounded-2xl bg-white px-4 py-2 shadow-xl'>
                    <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
                      <p className='text-center text-base font-semibold text-text'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <GetQuoteForm /> */}
        </div>
      </div>



    </>


  )
}

export default ServiceSec


