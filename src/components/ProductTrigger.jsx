"use client";

import React, { useState, useEffect } from "react";
import { X, InfinityIcon, Mails, MessageCircleCode } from "lucide-react";

export default function ProductTrigger({ open, setOpen }) {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, setOpen]);

    if (!isOpen) return null;

    return (
        <div className="w-full">
            <div
                className="  z-10"
                aria-hidden="true"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            />
            <div className="fixed top-28 left-0 border-t z-10 flex items-center justify-center">
                <div className="bg-white rounded-b-lg shadow-lg w-screen p-6">
                    <div className="relative">
                        <h2 className="text-2xl font-bold">Products</h2>
                        <button
                            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                        >
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <div className="grid gap-6 py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <button
                                className="h-auto p-6 flex flex-col items-start gap-2 border rounded-lg hover:border-blue-500"
                            >

                                <div className="flex gap-2">
                                    <InfinityIcon className="h-6 w-6 text-green-500" />
                                    <h5 className="font-semibold mb-2">ETE CRM</h5>
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-600">
                                        Launching Soon
                                    </p>
                                </div>
                            </button>

                            <button
                                className="h-auto p-6 flex flex-col items-start gap-2 border rounded-lg hover:border-green-500"
                            >
                                <div className="flex">
                                    <MessageCircleCode className="h-6 w-6 text-green-500" />
                                    <h5 className="font-semibold mb-2">ETE Whatsapp</h5>
                                </div>

                                <div className="text-left">
                                    <p className="text-sm text-gray-600">
                                        Launching Soon
                                    </p>
                                </div>
                            </button>

                            <button
                                className="h-auto p-6 flex flex-col items-start gap-2 border rounded-lg hover:border-green-500"
                            ><div className="flex gap-2">
                                    <Mails className="h-6 w-6 text-green-500" />
                                    <h5 className="font-semibold mb-2">ETE Mails</h5>
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-600">
                                        Launching Soon
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
