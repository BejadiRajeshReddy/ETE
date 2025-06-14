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

  // Close dropdowns when navigating to a new page
  useEffect(() => {
    setServiceDropdownOpen(false);
    setTrainingDropdownOpen(false);
  }, [currentPath]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background py-2 transition-all `}
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

              {/* Placement Link - Updated path */}
              <Link
                href="/Placements"
                className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
              >
                <span className={`text-[17px] font-semibold capitalize hover:text-primary ${currentPath === "/Placements" ? "text-primary" : "text-text"
                  }`}>
                  Placement
                </span>
                <div className="absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]"></div>
              </Link>

              {/* Contact Link - Updated path */}
              <Link
                href="/Contact"
                className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
              >
                <span className={`text-[17px] font-semibold capitalize hover:text-primary ${currentPath === "/contact" ? "text-primary" : "text-text"
                  }`}>
                  Contact
                </span>
                <div className="absolute bottom-0 left-0 w-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-out group-hover:w-full group-hover:p-0.5 group-hover:transition-[width]"></div>
              </Link>
            </div>

            {/* Mobile Navigation - Updated paths */}
            <div className="md:hidden">
              <MobileNav
                links={[
                  { path: "/", name: "home" },
                  {
                    path: "",
                    name: "service",
                    isPopup: "service",
                    children: [
                      { path: "/services/digital-marketing", name: "Digital Marketing" },
                      { path: "/services/web-development", name: "Web Development" }
                    ]
                  },
                  {
                    path: "",
                    name: "Training",
                    isPopup: "training",
                    children: [
                      { path: "/training/data-science", name: "Data Science Training" },
                      { path: "/training/digital-marketing", name: "Digital Marketing Training" }
                    ]
                  },
                  { path: "/Placements", name: "Placement" },
                  { path: "/Contact", name: "contact" }
                ]}
              />
            </div>
          </div>
        </div>

      </header>
      {/* WhatsApp Button */}
      <a
        href="http://wa.me/+919655971928"
        className="fixed bottom-8 md:bottom-3 right-4 z-50 flex items-center gap-2 rounded-full bg-green-500 md:pr-3 md:pl-2 md:py-2 text-white shadow-lg transition-all hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp/logo.webp"
          alt="WhatsApp"
          className=" md:size-10 size-14 rounded-full"
        />
        <span className="hidden md:block">Chat with us</span>
      </a>
      <a
        href="tel:+919655971928"
        className="fixed bottom-8 md:bottom-3 left-4 z-50 flex items-center gap-2 rounded-full bg-blue-600 md:pr-3 md:px-4 md:py-2 text-white shadow-lg transition-all hover:bg-blue-700"
      >
        <img
          src="/images/icons/telephone.png"
          alt="Call"
          className="md:size-10 size-14 rounded-full"
        />
        <span className="hidden md:block">Call us</span>
      </a>
    </>
  );
};

export default NavBar;


