import React from 'react'
import { twMerge } from 'tailwind-merge'

function AnimatedCard({ icon = "", heading = "", content = "", className = "", primary = "#615EFC", secondary = "#FCF8F3", duration = "300", scale = 10 }) {
    return (
        <div className={twMerge("relative flex flex-col w-full h-screen justify-center overflow-hidden p-2", className)}>
            <div
                className={`group relative cursor-pointer overflow-hidden w-full h-[500px] max-h-max bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all shadow-md duration-700 hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
                <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-[#615EFC] transition-all duration-700 group-hover:scale-[20]`}></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className={`grid h-20 w-20 place-items-center rounded-full bg-[#615EFC] transition-all duration-700 group-hover:bg-[#615EFC] group-hover:border-2 border-[#FCF8F3]`}>
                        {icon}
                    </span>
                    <h6 className={`font-sans font-bold pt-5 text-[1rem] group-hover:text-[#FCF8F3]`}>{heading}</h6>
                    <div
                        className={`pt-1 font-normal text-[1rem] text-gray-600 transition-all duration-700 group-hover:text-[#FCF8F3] text-center font-sans`}>
                        <p>{content}</p>
                    </div>
                    {/* <div className="pt-5 text-base font-semibold leading-7">
          <p>
              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                  &rarr;
              </a>
          </p>
      </div> */}
                </div>
            </div>
        </div>

    )
}

export default AnimatedCard


// import React from 'react'
// import { twMerge } from 'tailwind-merge'

// function AnimatedCard({ icon = "", heading = "", content = "", className = "", primary = "#615EFC", secondary = "#FCF8F3", duration = "300", scale = 10 }) {
//     return (
//         <div className={twMerge("relative flex flex-col w-full justify-center overflow-hidden p-2", className)}>
//             <div
//                 className={`group relative cursor-pointer overflow-hidden w-full h-full bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all shadow-md duration-${duration} hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
//                 <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-[${primary}] transition-all duration-${duration} group-hover:scale-[${scale}]`}></span>
//                 <div className="relative z-10 mx-auto max-w-md">
//                     <span className={`grid h-20 w-20 place-items-center rounded-full bg-[${primary}] transition-all duration-${duration} group-hover:bg-[${primary}] group-hover:border-2 border-[${secondary}]`}>
//                         {icon}
//                     </span>
//                     <h6 className={`font-sans font-bold pt-5 text-[1rem] group-hover:text-[${secondary}]`}>{heading}</h6>
//                     <div
//                         className={`pt-1 font-normal text-[1rem] text-gray-600 transition-all duration-${duration} group-hover:text-[${secondary}] text-center font-sans`}>
//                         <p>{content}</p>
//                     </div>
//                     {/* <div className="pt-5 text-base font-semibold leading-7">
//                         <p>
//                             <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
//                                 &rarr;
//                             </a>
//                         </p>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AnimatedCard