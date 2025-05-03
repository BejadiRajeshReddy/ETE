// import React, { useState } from 'react'
// import { AlignJustify, ChevronDown } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname, useRouter } from 'next/navigation'
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetTrigger
// } from '@/components/ui/sheet'
// import ProductTrigger from '@/components/ProductTrigger'
// import ServiceTrigger from '@/components/ServiceTrigger'
// import TrainingTrigger from '@/components/TrainingTrigger'

// const MenuItem = ({ item, pathname = '', setSheetOpen, openProductTrigger, openServiceTrigger, openTrainingTrigger }) => {
//   const [isExpand, setIsExpand] = useState(false)
//   const router = useRouter()

//   const handleClick = () => {
//     if (item?.isPopup === 'product') {
//       setSheetOpen(false)
//       openProductTrigger(true)
//     } else if (item?.isPopup === 'service') {
//       setSheetOpen(false)
//       openServiceTrigger(true)
//     } else if (item?.isPopup === 'training') {
//       setSheetOpen(false)
//       openTrainingTrigger(true)
//     } else if (Array.isArray(item?.children) && item?.children.length) {
//       setIsExpand(!isExpand)
//     } else {
//       router.push(item.path)
//       setSheetOpen(false)
//     }
//   }

//   return (
//     <div className='group/main relative cursor-pointer'>
//       <div className='group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2'>
//         <div
//           className='flex w-full items-center justify-between gap-2'
//           onClick={handleClick}
//         >
//           <div
//             className={`text-[17px] font-semibold capitalize hover:text-primary ${pathname === item.path ? 'text-primary' : 'text-text'
//               }`}
//           >
//             {item.name}
//           </div>
//           {Array.isArray(item?.children) && item?.children.length && !item?.isPopup && (
//             <ChevronDown
//               className='duration-200 ease-in-out'
//               size={14}
//               style={{
//                 transform: isExpand ? 'rotate(180deg)' : 'rotate(0deg)'
//               }}
//             />
//           )}
//         </div>
//         <div className='absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]'></div>
//       </div>
//       {Array.isArray(item?.children) && item?.children.length && isExpand && (
//         <div
//           className='top-7.5 right-0 z-50 flex w-auto origin-top transform flex-col whitespace-nowrap rounded-md bg-white px-2 py-2 text-gray-800 shadow-xl transition-transform duration-300 ease-out group-hover/main:scale-100'
//           style={{
//             boxShadow:
//               'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
//             transform: 'scale-95'
//           }}
//         >
//           {item?.children?.map((childItem, index) => (
//             <MenuItem
//               item={childItem}
//               pathname={pathname}
//               key={index}
//               setSheetOpen={setSheetOpen}
//               openProductTrigger={openProductTrigger}
//               openServiceTrigger={openServiceTrigger}
//               openTrainingTrigger={openTrainingTrigger}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// const MobileNav = ({ links }) => {
//   const [sheetOpen, setSheetOpen] = useState(false)
//   const [ProductTriggerOpen, setProductTriggerOpen] = useState(false)
//   const [ServiceTriggerOpen, setServiceTriggerOpen] = useState(false)
//   const [TrainingTriggerOpen, setTrainingTriggerOpen] = useState(false)

//   const currentPath = usePathname()

//   return (
//     <>
//       <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
//         <SheetTrigger asChild>
//           <AlignJustify color={'#1e81b0'} className='' />
//         </SheetTrigger>
//         <SheetContent side={'left'}>
//           <SheetHeader>
//             <Link
//               href={'/'}
//               className='text-[16px] font-semibold capitalize text-text'
//             >
//               <img
//                 src='/images/ete-new.png'
//                 alt='TechMax Logo'
//                 width={154}
//                 height={154}
//                 className='object-contain'
//               />
//             </Link>
//           </SheetHeader>
//           <div className='mt-10 flex flex-col gap-5'>
//             {links?.map((item, index) => {
//               return (
//                 <SheetClose key={index} asChild>
//                   <MenuItem
//                     item={item}
//                     pathname={currentPath}
//                     setSheetOpen={setSheetOpen}
//                     openProductTrigger={setProductTriggerOpen}
//                     openServiceTrigger={setServiceTriggerOpen}
//                     openTrainingTrigger={setTrainingTriggerOpen}
//                   />
//                 </SheetClose>
//               )
//             })}
//           </div>
//         </SheetContent>
//       </Sheet>
//       {ProductTriggerOpen && (
//         <ProductTrigger open={ProductTriggerOpen} setOpen={setProductTriggerOpen} />
//       )}
//       {ServiceTriggerOpen && (
//         <ServiceTrigger open={ServiceTriggerOpen} setOpen={setServiceTriggerOpen} />
//       )}
//       {TrainingTriggerOpen && (
//         <TrainingTrigger open={TrainingTriggerOpen} setOpen={setTrainingTriggerOpen} />
//       )}
//     </>
//   )
// }

// export default MobileNav
import React, { useState } from 'react'
import { AlignJustify, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet'

const MenuItem = ({ item, pathname = '', setSheetOpen }) => {
  const [isExpand, setIsExpand] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (Array.isArray(item?.children) && item?.children.length) {
      setIsExpand(!isExpand)
    } else {
      router.push(item.path)
      setSheetOpen(false)
    }
  }

  return (
    <div className='group/main relative cursor-pointer'>
      <div className='group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2'>
        <div
          className='flex w-full items-center justify-between gap-2'
          onClick={handleClick}
        >
          <div
            className={`text-[17px] font-semibold capitalize hover:text-primary ${pathname === item.path ? 'text-primary' : 'text-text'
              }`}
          >
            {item.name}
          </div>
          {Array.isArray(item?.children) && item?.children.length && (
            <ChevronDown
              className='duration-200 ease-in-out'
              size={14}
              style={{
                transform: isExpand ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            />
          )}
        </div>
        <div className='absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]'></div>
      </div>
      {Array.isArray(item?.children) && item?.children.length && isExpand && (
        <div
          className='flex w-full flex-col pl-4 py-2 gap-2'
        >
          {item?.children?.map((childItem, index) => (
            <Link
              href={childItem.path}
              key={index}
              className='text-[15px] capitalize hover:text-primary'
              onClick={() => setSheetOpen(false)}
            >
              {childItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const MobileNav = ({ links }) => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const currentPath = usePathname()

  return (
    <>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <AlignJustify color={'#1e81b0'} className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <Link
              href={'/'}
              className='text-[16px] font-semibold capitalize text-text'
            >
              <img
                src='/images/ete-new.png'
                alt='ETE Logo'
                width={154}
                height={154}
                className='object-contain'
              />
            </Link>
          </SheetHeader>
          <div className='mt-10 flex flex-col gap-5'>
            {links?.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                pathname={currentPath}
                setSheetOpen={setSheetOpen}
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav