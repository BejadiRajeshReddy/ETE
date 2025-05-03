'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import toast from 'react-hot-toast'

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
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    <div>
      {/* Page Banner Section */}

      {/* Contact Form Section */}
      <form onSubmit={handleSubmit}>
        <div className='mx-auto max-w-3xl px-4 py-16'>
          <h2 className='text-center text-[28px] font-medium leading-[48px] text-text'>
            Get Support from our Team
          </h2>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
            <Input
              type='text'
              name='name'
              placeholder='Your Name'
              className='border border-transparent bg-[#f6f7f9]'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type='email'
              name='email'
              placeholder='Your Email'
              className='border border-transparent bg-[#f6f7f9]'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type='tel'
              name='phone'
              placeholder='Your Number'
              className='border border-transparent bg-[#f6f7f9]'
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              type='text'
              name='subject'
              placeholder='Your Subject'
              className='border border-transparent bg-[#f6f7f9]'
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <div className='md:col-span-2'>
              <Textarea
                placeholder='Write A Message'
                className='border border-transparent bg-[#f6f7f9]'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className='text-center md:col-span-2'>
              <Button
                size={'md'}
                type='submit'
                className='font-manrope px-5 py-3 font-medium text-white'
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
