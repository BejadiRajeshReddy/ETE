// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import MobileNav from "./MobileNav";
// import { usePathname } from "next/navigation";
// import { ChevronDown } from "lucide-react";
// import ProductTrigger from "@/components/ProductTrigger";
// import ServiceTrigger from "@/components/ServiceTrigger";
// import TrainingTrigger from "@/components/TrainingTrigger";

// const link = [
//   { path: "/", name: "home" },
//   {
//     path: "",
//     name: "service",
//     isPopup: "service",
//     children: [
//       {
//         path: "/Pages/services/digital-marketing",
//         name: "Digital Marketing"
//       },
//       {
//         path: "/Pages/services/web-development",
//         name: "Web Development"
//       },
//       // {
//       //   path: "/Pages/services/web-development",
//       //   name: "Web Development"
//       // },
//       // {
//       //   path: "/Pages/services/uiux",
//       //   name: "UI/UX"
//       // },
//       // {
//       //   path: "/Pages/services/app-development",
//       //   name: "App Development"
//       // },
//     ],
//   },
//   {
//     path: "",
//     name: "Training",
//     isPopup: "training",
//     children: [
//       {
//         path: "/Pages/Training/data-science-training",
//         name: "Data Science Training",
//       },
//       {
//         path: "/Pages/Training/digital-marketing-training",
//         name: "Digital Marketing Training",
//       },
//     ],
//   },
//   {
//     path: "/Pages/placement", name: "Placement",
//   },
//   { path: "/Pages/ContactPage", name: "contact" },
// ];

// const MenuItem = ({ item, pathname = "", onOpenPopup }) => {
//   return (
//     <div className="group/main relative cursor-pointer">
//       <div
//         className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
//         onClick={() => onOpenPopup(item.isPopup)}
//       >
//         <div className="flex w-full items-center justify-between gap-2">
//           {!item.isPopup ? (
//             <Link
//               href={item.path}
//               className={`text-[17px] font-semibold capitalize hover:text-primary ${pathname === item.path ? "text-primary" : "text-text"
//                 }`}
//             >
//               {item.name}
//             </Link>
//           ) : (
//             <span
//               className={`text-[17px] font-semibold capitalize cursor-pointer hover:text-primary ${pathname === item.path ? "text-primary" : "text-text"
//                 }`}
//             >
//               {item.name}
//             </span>
//           )}
//           {Array.isArray(item?.children) && item?.children.length && !item.isPopup && (
//             <ChevronDown
//               className="duration-200 ease-in-out group-hover/main:rotate-180"
//               size={14}
//             />
//           )}
//         </div>

//         <div className="absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]"></div>
//       </div>
//       {Array.isArray(item?.children) && item?.children.length && !item.isPopup && (
//         <div
//           className="top-7.5 invisible absolute right-0 z-50 flex w-auto origin-top transform flex-col whitespace-nowrap rounded-md bg-white px-2 py-2 text-gray-800 shadow-xl transition-transform duration-300 ease-out group-hover/main:visible group-hover/main:scale-100"
//           style={{
//             boxShadow:
//               "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
//             transform: "scale-95",
//           }}
//         >
//           {item?.children?.map((childItem, index) => (
//             <MenuItem item={childItem} pathname={pathname} key={index} onOpenPopup={onOpenPopup} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const NavBar = () => {
//   const [header, setHeader] = useState(false);
//   const [activePopup, setActivePopup] = useState(null);
//   const currentPath = usePathname();

//   useEffect(() => {
//     const scrollIPos = window.addEventListener("scroll", () => {
//       window.scrollY > 40 ? setHeader(true) : setHeader(false);
//     });

//     return () => window.removeEventListener("scroll", scrollIPos);
//   }, []);

//   const handleOpenPopup = (popupType) => {
//     setActivePopup((prev) => (prev === popupType ? null : popupType));
//   };

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 bg-background py-5 transition-all ${header ? "animate-hide-temporarily" : ""
//           }`}
//       >
//         <div className="container m-auto">
//           <div className="flex items-center justify-between">
//             <Link href={"/"} className="text-[16px] font-semibold capitalize text-text">
//               <img
//                 src="/ETEFinalLogo.svg"
//                 alt="ETE_Logo"
//                 width={144}
//                 height={144}
//                 className="object-contain"
//               />
//             </Link>
//             <div className="hidden gap-x-8 md:flex">
//               {link.map((item, index) => (
//                 <MenuItem
//                   item={item}
//                   key={index}
//                   pathname={currentPath}
//                   onOpenPopup={handleOpenPopup}
//                 />
//               ))}
//             </div>
//             <div className="md:hidden">
//               <MobileNav links={link} />
//             </div>
//           </div>
//         </div>
//         <div className="w-16 h-16 rounded-full fixed mt-20 top-10 right-10 ml-3 border-[1px] border-black">
//           <a href="http://wa.me/+919597331928">
//             <img src="/images/whatsapp/logo.webp" alt="whatsapp" />
//           </a>
//         </div>
//       </header>

//       {activePopup === "product" && (
//         <ProductTrigger open={true} setOpen={() => setActivePopup(null)} />
//       )}
//       {activePopup === "service" && (
//         <ServiceTrigger open={true} setOpen={() => setActivePopup(null)} />
//       )}
//       {activePopup === "training" && (
//         <TrainingTrigger open={true} setOpen={() => setActivePopup(null)} />
//       )}

//     </>
//   );
// };

// export default NavBar;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import TrainingTrigger from "@/components/TrainingTrigger";
import ServiceTrigger from "@/components/ServiceTrigger";

const NavBar = () => {
  const [header, setHeader] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const scrollIPos = window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollIPos);
  }, []);

  // Define main navigation links
  const links = [
    { path: "/", name: "home" },
    { path: "/Pages/placement", name: "Placement" },
    { path: "/Pages/ContactPage", name: "contact" },
  ];

  // Close dropdowns when navigating to a new page
  useEffect(() => {
    setServiceDropdownOpen(false);
    setTrainingDropdownOpen(false);
  }, [currentPath]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background py-5 transition-all ${header ? "animate-hide-temporarily" : ""
          }`}
      >
        <div className="container m-auto">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="text-[16px] font-semibold capitalize text-text">
              <img
                src="/ETEFinalLogo.svg"
                alt="ETE_Logo"
                width={144}
                height={144}
                className="object-contain"
              />
            </Link>
            <div className="hidden md:flex items-center gap-x-2">
              {/* Home Link */}
              <Link
                href="/"
                className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
              >
                <span className={`text-[17px] font-semibold capitalize hover:text-primary ${currentPath === "/" ? "text-primary" : "text-text"
                  }`}>
                  Home
                </span>
                <div className="absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]"></div>
              </Link>

              {/* Service Dropdown */}
              <ServiceTrigger
                open={serviceDropdownOpen}
                setOpen={setServiceDropdownOpen}
              />

              {/* Training Dropdown */}
              <TrainingTrigger
                open={trainingDropdownOpen}
                setOpen={setTrainingDropdownOpen}
              />

              {/* Placement Link */}
              <Link
                href="/Pages/placement"
                className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
              >
                <span className={`text-[17px] font-semibold capitalize hover:text-primary ${currentPath === "/Pages/placement" ? "text-primary" : "text-text"
                  }`}>
                  Placement
                </span>
                <div className="absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]"></div>
              </Link>

              {/* Contact Link */}
              <Link
                href="/Pages/ContactPage"
                className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
              >
                <span className={`text-[17px] font-semibold capitalize hover:text-primary ${currentPath === "/Pages/ContactPage" ? "text-primary" : "text-text"
                  }`}>
                  Contact
                </span>
                <div className="absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]"></div>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNav
                links={[
                  { path: "/", name: "home" },
                  {
                    path: "",
                    name: "service",
                    isPopup: "service",
                    children: [
                      { path: "/Pages/services/digital-marketing", name: "Digital Marketing" },
                      { path: "/Pages/services/web-development", name: "Web Development" }
                    ]
                  },
                  {
                    path: "",
                    name: "Training",
                    isPopup: "training",
                    children: [
                      { path: "/Pages/Training/data-science-training", name: "Data Science Training" },
                      { path: "/Pages/Training/digital-marketing-training", name: "Digital Marketing Training" }
                    ]
                  },
                  { path: "/Pages/placement", name: "Placement" },
                  { path: "/Pages/ContactPage", name: "contact" }
                ]}
              />
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="w-16 h-16 rounded-full fixed mt-20 top-10 right-10 ml-3 border-[1px] border-black">
          <a href="http://wa.me/+919597331928">
            <img src="/images/whatsapp/logo.webp" alt="whatsapp" />
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;