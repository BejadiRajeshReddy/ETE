// "use client";

// import React, { useState, useEffect } from "react";
// import { X, InfinityIcon, Mails, MessageCircleCode } from "lucide-react";
// import { FaLinkSlash } from "react-icons/fa6";
// import Link from "next/link";

// export default function TrainingTrigger({ open, setOpen }) {
//     const [isOpen, setIsOpen] = useState(open);

//     useEffect(() => {
//         setIsOpen(open);
//     }, [open]);

//     useEffect(() => {
//         const handleEscape = (event) => {
//             if (event.key === "Escape") {
//                 setOpen(false);
//             }
//         };

//         if (isOpen) {
//             document.addEventListener("keydown", handleEscape);
//         }

//         return () => {
//             document.removeEventListener("keydown", handleEscape);
//         };
//     }, [isOpen, setOpen]);

//     if (!isOpen) return null;

//     const links = [

//         {
//             path: "/Pages/Training/data-science-training",
//             name: "Data Science Training"
//         },
//         {
//             path: "/Pages/Training/digital-marketing-training",
//             name: "Digital Marketing Training",
//         }

//     ]


//     return (
//         <div className="w-full">
//             <div
//                 className="  z-10"
//                 aria-hidden="true"
//                 onMouseEnter={() => setOpen(true)}
//                 onMouseLeave={() => setOpen(false)}
//             />
//             <div className="fixed top-28 left-0 border-t z-10 flex items-center justify-center">
//                 <div className="bg-white rounded-b-lg shadow-lg w-screen p-6">
//                     <div className="relative">
//                         <h2 className="text-2xl font-bold">Training</h2>
//                         <button
//                             className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                             onClick={() => setOpen(false)}
//                         >
//                             <X className="h-6 w-6" />
//                             <span className="sr-only">Close</span>
//                         </button>
//                     </div>
//                     <div className="grid gap-6 py-4">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {links.map((item, index) => (
//                                 <button key={index}
//                                     className="h-auto p-6 flex flex-col items-start gap-2 border rounded-lg hover:border-blue-500"
//                                 >
//                                     <Link href={item.path}>
//                                         <div className="flex gap-2">
//                                             <InfinityIcon className="h-6 w-6 text-green-500" />
//                                             <h5 className="font-semibold mb-2">{item.name}</h5>
//                                         </div>
//                                         <p className="text-sm text-gray-600">{item.name}</p>
//                                     </Link>
//                                 </button>
//                             ))}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, InfinityIcon } from "lucide-react";
import Link from "next/link";

export default function TrainingTrigger({ open, setOpen }) {
    const [isOpen, setIsOpen] = useState(open);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, setOpen]);

    const links = [
        {
            path: "/Pages/Training/data-science-training",
            name: "Data Science Training",
            description: "Learn data analysis, machine learning, and more"
        },
        {
            path: "/Pages/Training/digital-marketing-training",
            name: "Digital Marketing Training",
            description: "Master SEO, social media, and digital strategies"
        }
    ];

    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center gap-2 px-4 py-2 text-text hover:text-primary"
                onClick={toggleDropdown}
            >
                <span className="text-[17px] font-semibold capitalize">Training</span>
                <ChevronDown
                    className="duration-200 ease-in-out"
                    size={14}
                    style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-72 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {links.map((item, index) => (
                            <Link
                                href={item.path}
                                key={index}
                                className="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                <div className="flex items-start gap-3">
                                    {/* <InfinityIcon className="h-5 w-5 text-green-500 mt-1" /> */}
                                    <div>
                                        <h5 className="font-medium text-gray-900">{item.name}</h5>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}