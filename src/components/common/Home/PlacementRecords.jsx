import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShadowTitle from "../ShadowTitle"; // Import Shadow Title Component



const placementCandidates = [
    { id: 1, name: "Joyce Philip", image: "/images/placement-records/candidate1.jpg", designation: "Data Analyst" },
    { id: 2, name: "Chandush Yadav", image: "/images/placement-records/candidate2.jpg", designation: "Digital Marketing Executive" },
    { id: 3, name: "Udhay Reddy", image: "/images/placement-records/candidate3.jpg", designation: "Data Analyst" },
    // { id: 3, name: "Udhay Reddy", image: "/images/placement-records/candidate5.png", designation: "Data Analyst" },
];


const PlacementRecords = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1, // Show one candidate at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div className="relative py-8 bg-gray-50">
            {/* Shadow Title */}
            <ShadowTitle head={"Placement Records"} />

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Heading */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                    {/* Left Side - Sliding Placement Candidates */}
                    <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
                        <Slider {...settings} ref={sliderRef}>
                            {placementCandidates.map((candidate) => (
                                <div key={candidate.id} className="p-6">
                                    <div className="border border-blue-300 p-6 rounded-lg shadow-lg text-center bg-white">
                                        {/* Candidate Image */}
                                        <img
                                            src={candidate.image}
                                            alt={candidate.name}
                                            className="w-40 h-40 mx-auto rounded-full object-cover border-2 border-blue-400"
                                        />
                                        {/* Candidate Name */}
                                        <h3 className="text-lg font-semibold mt-4">{candidate.name}</h3>
                                        {/* Company Name */}
                                        <p className="text-sm text-gray-600">{candidate.designation}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* /* Right Side - Placement Candidates Video */}
                    {/* <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex justify-center"> */}
                    {/* <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] flex justify-center"> */}
                    <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[28%] flex justify-center ">
                      
                        <iframe
                            className="w-full max-w-md h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-70 rounded-lg shadow-md"
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
    );
};

export default PlacementRecords;
