import React from 'react'

const ShadowTitle = ({ head, title }) => {
  return (
    <div className='relative mb-3 mt-1 flex h-32 w-full items-center justify-center text-center'>
      <h1 className='absolute inset-0 z-0 flex select-none items-center justify-center whitespace-nowrap font-sans text-heading-2 font-bold uppercase tracking-wider text-[#15948c] opacity-10 md:text-heading-number'>
        {head}
      </h1>
      <div className='mx-auto mb-12 w-[30px] border-b-4 border-[#DA1F26]'></div>
      <h5 className='absolute inset-0 z-10 flex items-center justify-center font-sans text-heading-6 font-semibold uppercase text-text md:text-heading-3'>
        {title ? title : head}
      </h5>
    </div>
  )
}

export default ShadowTitle
