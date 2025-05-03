import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t border-gray-600 bg-background py-2'>
      <div className='container grid grid-cols-1 gap-3 px-3 pt-6 md:grid-cols-2'>
        <p className='text-center text-[14px] text-text sm:mb-3 md:text-start'>
          © Copyrights 2024 End TO End Digital Marketing All rights reserved.
        </p>
        <div className='flex justify-center space-x-4 rounded md:justify-end'>
          <a href='#' aria-label='Facebook'>
            <Facebook className='text-text' />
          </a>
          <a href='#' aria-label='Twitter'>
            <Twitter className='text-text' />
          </a>
          <a href='#' aria-label='LinkedIn'>
            <Linkedin className='text-text' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
