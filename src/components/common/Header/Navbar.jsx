// 

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
        className={`sticky top-0 z-50 bg-background py-3 transition-all ${header ? "animate-hide-temporarily" : ""
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
                href="/placement"
                className="group relative flex cursor-pointer flex-col items-center justify-start px-4 py-2"
              >
                <span className={`text-[17px] font-semibold capitalize hover:text-primary ${currentPath === "/placement" ? "text-primary" : "text-text"
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
      </header>

      {/* WhatsApp Button */}
      <a
        href="http://wa.me/+919597331928"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 md:px-4 md:py-2 text-white shadow-lg transition-all hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp/logo.webp"
          alt="WhatsApp"
          className="h-10 w-10 rounded-full"
        />
        <span className="hidden md:block">Chat with us</span>
      </a>
    </>
  );
};

export default NavBar;