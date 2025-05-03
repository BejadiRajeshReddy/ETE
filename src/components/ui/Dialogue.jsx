"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { X } from "lucide-react";

const DialogContext = createContext(null);

export const Dialog = ({ children, open, onOpenChange }) => {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onOpenChange(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onOpenChange]);

    if (!isOpen) return null;

    return (
        <DialogContext.Provider value={{ open: isOpen, setOpen: onOpenChange }}>
            <div
                className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm"
                aria-hidden="true"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="bg-background rounded-lg shadow-lg"
                    role="dialog"
                    aria-modal="true"
                >
                    {children}
                </div>
            </div>
        </DialogContext.Provider>
    );
};

export const DialogContent = ({ children, className = "" }) => {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error("DialogContent must be used within a Dialog");
    }

    return (
        <div className={`relative ${className}`}>
            {children}
            <button
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                onClick={() => context.setOpen(false)}
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </button>
        </div>
    );
};

export const DialogHeader = ({ children, className = "" }) => (
    <div className={`px-6 py-4 ${className}`}>{children}</div>
);

export const DialogTitle = ({ children, className = "" }) => (
    <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
        {children}
    </h2>
);
