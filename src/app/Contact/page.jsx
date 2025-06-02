'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import SectionFooter from '@/components/common/Home/SectionFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faEnvelopeOpenText, faLocationArrow, faLocationDot, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const details = [
    { title: 'Telephone', dec: '+91 9035778342' },
    { title: 'Mail Address', dec: 'contactus@techspira.co.in' },
    { title: 'Location', dec: ' Bengaluru, Karnataka' }
]

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        name_of_the_organization: '',
        service: '',
        message: '',

    })

    const [loading, setLoading] = useState(false);
    
    const sheeturl = process.env.NEXT_PUBLIC_FORM_SHEET_URL;
    console.log(process.env.NEXT_PUBLIC_FORM_SHEET_URL);

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



    // const handleSubmit = async (e) => {
    //     console.log("function calling");

    //     e.preventDefault()
    //     try {

    //         const response = await fetch('http://localhost:8000/sendmail.php', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         })


    //         if (response.ok) {
    //             toast.success('Message sent successfully!')
    //             setFormData({
    //                 name: '',
    //                 email: '',
    //                 phone: '',
    //                 name_of_the_organization: '',
    //                 message: '',
    //                 service: '',

    //             })
    //         } else {
    //             toast.error('Failed to send message.')
    //         }
    //     } catch (error) {
    //         console.log(error, "error in mail sending");

    //     }

    // }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("result", sheeturl);

        try {
            const res = await fetch(sheeturl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                mode: "no-cors",
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setResponse(data);
        } catch (error) {

        } finally {
            toast.success('Message sent successfully!')
            setLoading(false);
        }
    };

    return (
        <div className='w-full h-full bg-[#dceaf7c5]'>
            <h4 className='text-center mt-4 text-4xl font-extrabold'>
                Excited About The Service  ? <br />
                Please Get In Touch.
            </h4>
            <div className='flex h-full gap-10 flex-col lg:flex-row justify-center  p-5 lg:p-10'>

                {/* Contact Form Section */}
                <div className='mt-5  w-full lg:w-1/2 h-full lg:h-[47rem] rounded-3xl bg-white pb-8 ' style={{ boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.25)' }} >
                    <form onSubmit={handleSubmit}>


                        <h3 className='text-start text-3xl pl-10 pt-5'><strong>Contact Us</strong></h3>
                        <div className=' flex gap-3 justify-center h-full'>
                            <div className='flex flex-col lg:flex-row gap-5 w-full p-5'>
                                <div className='mt-3 flex flex-col gap-3 w-full h-full lg:w-1/2'>
                                    <label className='uppercase text-black font-medium' htmlFor="">Name <span className='text-[red]'>*</span></label>
                                    <Input
                                        type='text'
                                        name='name'
                                        placeholder='Name '
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full h-[4rem] rounded-full pl-5 bg-slate-100 placeholder:font-raleway'
                                    />
                                    <label className='uppercase text-black font-medium' htmlFor="">email <span className='text-[red]'>*</span></label>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full h-[4rem] rounded-full pl-5 bg-slate-100 placeholder:font-raleway'
                                    />
                                    <label className='uppercase text-black font-medium' htmlFor="">Phone <span className='text-[red]'>*</span></label>
                                    <Input
                                        type='tel'
                                        name='phone'
                                        placeholder='Phone Number'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full h-[4rem] rounded-full pl-5 bg-slate-100 placeholder:font-raleway'
                                    />
                                    <label className='uppercase text-black font-medium' htmlFor="">Name Of Organization <span className='text-[red]'>*</span></label>

                                    <Input
                                        type='text'
                                        name='name_of_the_organization'
                                        placeholder='Name Of Organization'
                                        value={formData.name_of_the_organization}
                                        onChange={handleChange}
                                        className='w-full h-[4rem] rounded-full pl-5 bg-slate-100 placeholder:font-raleway'
                                        required
                                    />
                                    <label className='uppercase text-black font-medium' htmlFor="" >Select Service <span className='text-[red]'>*</span></label>
                                    <div className='w-full'>
                                        <Select onValueChange={handleServiceChange}>
                                            <SelectTrigger className='w-full h-[4rem] rounded-full pl-5 border bg-slate-100 placeholder:font-raleway'>
                                                <SelectValue placeholder='Select a service' />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectGroup>
                                                    <SelectItem value='web-design'>Web Design</SelectItem>
                                                    <SelectItem value='seo'>SEO</SelectItem>
                                                    <SelectItem value='branding'>Branding</SelectItem>
                                                    <SelectItem value='marketing'>Marketing</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className='mt-3 flex flex-col gap-3 w-full lg:w-1/2'>
                                    <label className='uppercase text-black font-medium' htmlFor="">Message <span className='text-[red]'>*</span></label>
                                    <Textarea
                                        placeholder='Write A Message'
                                        className='w-full h-[22rem] rounded-2xl bg-slate-100 placeholder:font-raleway'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required

                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center text-center -ml-20 mt-3'>
                            {/* <Button
                                size={'md'}
                                type='submit'
                                className='font-manrope px-10 py-4 font-medium uppercase text-white rounded-full bg-violet-600 hover:bg-orange-500 flex items-center space-x-4'
                            >
                                Send Message
                                <span className='flex items-center justify-center w-8 h-8 bg-white text-violet-600 rounded-full font-bold'>
                                    <FontAwesomeIcon icon={faArrowRight} className='text-xl' />
                                </span>
                            </Button> */}

                            <Button
                                size={'md'}
                                disabled={loading}
                                type='submit'
                                // className='font-manrope px-10 py-4 font-bold uppercase text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center space-x-0.5 transition-all duration-300 hover:from-orange-500 hover:to-red-500'
                                className='font-sans px-10 py-4 font-bold uppercase text-white rounded-full bg-blue-600 flex items-center space-x-0.5 transition-all duration-300 hover:bg-orange-500'

                            >
                                {loading ? "Sending Message" : "Send Message"}
                                {/* <span className='flex items-center justify-center ml-2 w-8 h-8 bg-orange-500 text-black rounded-full'> */}
                                {/* <FontAwesomeIcon icon={faArrowRight} className='text-sm' /> */}

                                {/* </span> */}
                            </Button>

                        </div>
                    </form>
                </div>

                {/* lg:w-1/2 */}
                {/* {style = {{boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.25)' }}} */}
                {/* {lg:h-[60rem]} */}
                <div className='w-full sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] mt-5 mb-5 h-fit lg:h-auto rounded-3xl pb-8'>
                    <div className='w-full h-[23rem] sm:h-[18rem] lg:h-[25rem] flex justify-center'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248819.7845257374!2d77.45170637732913!3d12.984056477082149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15adf5555e51%3A0xe845fcd3d12cd925!2sETE%20Digital%20-%20Web%20Development%20%26%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1726549884309!5m2!1sen!2sin"
                            className='w-full h-full rounded-3xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='mt-3 px-5 flex flex-col justify-start'>
                        <div className='flex flex-col gap-4 text-black'>
                            <div className="flex items-start">
                                <img src='/images/icons/location.png' className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2" />
                                <div className="mt-3">
                                    <h3 className='text-2xl'>Address</h3>
                                    <p>112/4, First Floor BMR Landmark, HSR Layout, 7th Sector,</p>
                                    <p>Bommanahalli, MG Palya Main Rd, Bangalore-560068</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img src="/images/icons/telephone.png" alt="telephone" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2" />
                                <div className='mt-3'>
                                    <h3 className='text-2xl'>Phone</h3>
                                    <a href="tel:+919655971928" className="text-lg">+91 96559 71928 /</a>
                                    <a href="tel:+919597331928" className="text-lg ">+91 95973 31928</a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img src='/images/icons/mail.png' alt='mail' className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2" />
                                <div className='mt-3'>
                                    <h4 className='text-2xl'>Email</h4>
                                    <a href="mailto:etedigital1@gmail.com" className="text-lg ">etedigital1@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='items-center px-10 py-10 space-x-4 flex justify-start rounded md:justify-start '>

                        <a href="https://www.facebook.com/etedigitalmarketing" target="_blank" rel="noopener noreferrer">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border-2 border-blue-500 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/etedigital/" target="_blank" rel="noopener noreferrer">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border-2 border-blue-500 p-1">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/ete-digital-9277102a0/" target="_blank" rel="noopener noreferrer">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border-2 border-blue-500 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>


            </div >
            <SectionFooter />
        </div >
    )
}

export default Contact
