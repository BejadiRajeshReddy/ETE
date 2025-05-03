"use client";

import SectionFooter from "@/components/common/Home/SectionFooter";
import Image from "next/image";
import { useState, useEffect } from "react";

const Placement = () => {
    const allImages = [
        "/images/2.png",
        "/images/3.png",
        "/images/4.png",
        "/images/5.png",
        "/images/6.png",
        "/images/7.png",
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(6); // Default fallback

    // Update cards per page based on screen size (only on client)
    useEffect(() => {
        const getCardsPerPage = () => {
            if (window.innerWidth < 640) return 3; // Mobile
            if (window.innerWidth < 1024) return 4; // Tablet
            return 6; // Desktop
        };

        const handleResize = () => {
            setCardsPerPage(getCardsPerPage());
        };

        // Set initially
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(allImages.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allImages.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="text-gray-800 font-sans">
            {/* Banner section... */}
            {/* Your video and title section (unchanged)... */}
            <div className="relative bg-center bg-cover bg-[url('https://www.jnncollege.edu.in/wp-content/uploads/2019/03/placementcell.png')] px-4 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Title Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              PLACEMENTS
            </h1> */}
                    </div>

                    {/* Video Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="w-full max-w-md">
                            <iframe
                                className="w-full h-48 md:h-56 lg:h-64 rounded-lg shadow-lg mt-20"
                                src="https://www.youtube.com/embed/tHCiX9jHHWY"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 border-b-4 border-orange-500 pb-2 max-w-3xl mx-auto">
                    Recent Placement List of ETE Digital Trainee
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl max-h-3xl mx-auto">
                    {currentCards.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Placement ${indexOfFirstCard + index + 1}`}
                                className="h-full w-full object-cover"
                                width={400}
                                height={300}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination (same as before) */}
                <div className="flex justify-center mt-8 md:mt-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${currentPage === 1
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-orange-500 text-white hover:bg-orange-600"
                                }`}
                        >
                            Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (number) => {
                                const isMobile =
                                    typeof window !== "undefined" && window.innerWidth < 640;
                                if (
                                    isMobile &&
                                    number !== 1 &&
                                    number !== totalPages &&
                                    Math.abs(number - currentPage) > 1
                                ) {
                                    return null;
                                }

                                return (
                                    <button
                                        key={number}
                                        onClick={() => handlePageChange(number)}
                                        className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${currentPage === number
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                            }`}
                                    >
                                        {number}
                                    </button>
                                );
                            }
                        )}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${currentPage === totalPages
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-orange-500 text-white hover:bg-orange-600"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <SectionFooter />
        </div>
        
    );
};

export default Placement;
