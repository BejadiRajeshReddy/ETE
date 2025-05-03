import SectionFooter from '@/components/common/Home/SectionFooter'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
//     <div className="w-screen h-screen p-8 box-border relative">
//     <div className="w-full h-full relative p-8">
//       <img
//         src="/images/whatsapp.jpg"
//         alt="WhatsApp"
//         layout="fill"
//         objectFit="contain" // Changed to 'contain' to fit the image inside with padding
//         className="rounded-lg" // Optional: Adds rounded corners
//       />
//     </div>
//   </div>div
<div>

<div className="w-screen h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex items-center justify-center">
<div className="text-center text-white">
  <h2 className="text-4xl">Launching soon...</h2>
</div>

</div>
<SectionFooter/>
</div>
  )
}
