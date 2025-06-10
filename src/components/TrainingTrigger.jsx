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