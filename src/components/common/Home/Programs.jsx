// 'use client';

// import React, { useState } from 'react'
// import { Dialog } from '@/components/ui/Dialogue'

// const programsData = [
//     {
//         title: "Want to Change Your Career Non-IT to IT?",
//         subtitle: "Here's the Best Way to Become a Software Jobs",
//         eligibility: [
//             { label: "Any Degree", className: "bg-blue-100 text-blue-700" },
//             { label: "Any Working Professionals", className: "bg-cyan-100 text-cyan-700" }
//         ],
//         batchInfo: {
//             starts: "Today",
//             seats: "Limited Seats Available"
//         },
//         image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg",
//         personImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png",
//         cta: "Request Callback",
//         learnMoreLink: "#"
//     },
//     {
//         title: "Finish Your Degree and Become a Software Jobs",
//         subtitle: "A Proven Program to make you a Software Professional",
//         eligibility: [
//             { label: "GRADUATES", className: "bg-green-100 text-green-700" },
//             { label: "FINAL YEAR DEGREE", className: "bg-purple-100 text-purple-700" },
//             // { label: "ANY BRANCH OR DEGREE", className: "bg-amber-100 text-amber-700" }
//         ],
//         batchInfo: {
//             starts: "Today",
//             registrations: "Open Now"
//         },
//         image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive-3-0-logo.svg",
//         personImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png",
//         cta: "Book a Free Demo",
//         learnMoreLink: "#"
//     }
// ]


// const Programs = ({ subject }) => {
//     const [showForm, setShowForm] = useState(false)
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         qualification: '',
//         graduationYear: '',
//         city: '',
//         course: ''
//     })


//     return (
//         <div className="py-16 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-center text-4xl md:text-5xl font-bold text-[#1a365d] mb-16">
//                     Designed to transform you into a highly skilled Software Professional
//                 </h1>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
//                     {programsData.map((program, index) => (
//                         <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//                             <div className="flex justify-center items-center mb-8">
//                                 <img src={program.image} alt={program.title} className="h-8" />
//                                 <div className="relative w-48 h-40">
//                                     <img
//                                         src={program.personImage}
//                                         alt="Student"
//                                         className="absolute top-0 right-0 h-40 w-full object-contain"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {program.eligibility.map((item, i) => (
//                                     <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${item.className}`}>
//                                         {item.label}
//                                     </span>
//                                 ))}
//                             </div>

//                             <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{program.title}</h3>
//                             <p className="text-lg text-gray-700 mb-6">{program.subtitle}</p>

//                             <div className="flex items-center gap-8 text-sm mb-6">
//                                 <div>
//                                     <p className="text-gray-500">BATCH STARTS</p>
//                                     <p className="font-semibold">{program.batchInfo.starts}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-gray-500">🔥</p>
//                                     <p className="font-semibold">{program.batchInfo.seats || program.batchInfo.registrations}</p>
//                                 </div>
//                             </div>

//                             <div className="space-y-4">
//                                 <button
//                                     onClick={() => setShowForm(true)}
//                                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                                 >
//                                     {program.cta}
//                                 </button>
//                                 <button
//                                     onClick={() => setShowForm(true)}
//                                     className="block w-full text-center text-blue-600 font-semibold hover:text-blue-700"
//                                 >
//                                     Know More
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <Dialog open={showForm} onOpenChange={setShowForm}>
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//                     <div className="bg-white rounded-lg p-6 w-full max-w-md">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-bold">Book a Live Demo For Free!</h2>
//                             <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                                 ✕
//                             </button>
//                         </div>

//                         <form action="https://formsubmit.co/rockyrocky9526@gmail.com"
//                             method="POST"
//                             encType="multipart/form-data"
//                             className="space-y-4">
//                             <input type="hidden" name="_captcha" value="false" />
//                             <input type="hidden" name="_subject" value={subject} />
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                                     placeholder="Enter Your Name"
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Mobile Number (WhatsApp Number)
//                                 </label>
//                                 <div className="mt-1 flex rounded-md">
//                                     <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
//                                         +91
//                                     </span>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         className="block w-full rounded-r-md border border-gray-300 px-3 py-2"
//                                         placeholder="Enter Mobile Number"
//                                         value={formData.phone}
//                                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Email Address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                                     placeholder="Enter your Email"
//                                     value={formData.email}
//                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                     required
//                                 />
//                             </div>


//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Course
//                                 </label>
//                                 <select
//                                     name="course"
//                                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                                     value={formData.course}
//                                     onChange={(e) => setFormData({ ...formData, course: e.target.value })}
//                                     required
//                                 >
//                                     <option value="">Select Course</option>
//                                     <option value="Data Science Training">Data Science Training</option>
//                                     <option value="Digital Marketing Training">Digital Marketing Training</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Highest Qualification
//                                 </label>
//                                 <select
//                                     name="qualification"
//                                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                                     value={formData.qualification}
//                                     onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
//                                     required
//                                 >
//                                     <option value="">Select Highest Qualification</option>
//                                     <option value="12th">12th / Intermediate</option>
//                                     <option value="diploma">Diploma</option>
//                                     <option value="graduation-completed">Graduation (Completed)</option>
//                                     <option value="graduation-ongoing">Graduation (Ongoing)</option>
//                                     <option value="post-graduation-completed">Post Graduation (Completed)</option>
//                                     <option value="post-graduation-ongoing">Post Graduation (Ongoing)</option>
//                                 </select>
//                             </div>



//                             {formData.qualification && (
//                                 <>


//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">
//                                             Year of Graduation
//                                         </label>
//                                         <select
//                                             name="graduationYear"
//                                             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                                             value={formData.graduationYear}
//                                             onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
//                                             required
//                                         >
//                                             <option value="">Select Year</option>
//                                             {Array.from({ length: 10 }, (_, i) => {
//                                                 const year = new Date().getFullYear() - 5 + i
//                                                 return (
//                                                     <option key={year} value={year}>
//                                                         {year}
//                                                     </option>
//                                                 )
//                                             })}
//                                         </select>
//                                     </div>
//                                 </>
//                             )}

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     City
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="city"
//                                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                                     placeholder="Enter your City"
//                                     value={formData.city}
//                                     onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                                     required
//                                 />
//                             </div>

//                             <div className="text-sm text-gray-500">
//                                 By proceeding further, I agree to the{' '}
//                                 <a href="#" className="text-blue-600">Terms & Conditions</a>
//                                 {' '}and{' '}
//                                 <a href="#" className="text-blue-600">Privacy Policy</a>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-purple-600 text-white rounded-md py-2 font-semibold hover:bg-purple-700"
//                             >
//                                 Book My Demo
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </Dialog>
//         </div>
//     )
// }

// export default Programs


'use client';

import React, { useState } from 'react'
import { Dialog } from '@/components/ui/Dialogue'

const programsData = [
    {
        title: "Want to Change Your Career Non-IT to IT?",
        subtitle: "Here's the Best Way to Become a Software Jobs",
        eligibility: [
            { label: "Any Degree", className: "bg-blue-100 text-blue-700" },
            { label: "Any Working Professionals", className: "bg-cyan-100 text-cyan-700" }
        ],
        batchInfo: {
            starts: "Today",
            seats: "Limited Seats Available"
        },
        image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg",
        personImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png",
        cta: "Request Callback",
        learnMoreLink: "#"
    },
    {
        title: "Finish Your Degree and Become a Software Jobs",
        subtitle: "A Proven Program to make you a Software Professional",
        eligibility: [
            { label: "GRADUATES", className: "bg-green-100 text-green-700" },
            { label: "FINAL YEAR DEGREE", className: "bg-purple-100 text-purple-700" },
        ],
        batchInfo: {
            starts: "Today",
            registrations: "Open Now"
        },
        image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive-3-0-logo.svg",
        personImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png",
        cta: "Book a Free Demo",
        learnMoreLink: "#"
    }
]

const Programs = ({ subject }) => {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        graduationYear: '',
        city: '',
        course: ''
    })

    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // Add hidden fields
        data.append('_captcha', 'false');
        data.set('_subject', `New Demo Booking from ${formData.name || "User"}`);

        await fetch('https://formsubmit.co/rockyrocky9526@gmail.com', {
            method: 'POST',
            body: data,
        });

        setShowSuccess(true);
        // Optionally reset form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            qualification: '',
            graduationYear: '',
            city: '',
            course: ''
        });
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-[#1a365d] mb-16">
                    Designed to transform you into a highly skilled Software Professional
                </h1>

                <div className="transform scale-90 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {programsData.map((program, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex justify-center items-center mb-8">
                                <img src={program.image} alt={program.title} className="h-8" />
                                <div className="relative w-40 h-40">
                                    <img
                                        src={program.personImage}
                                        alt="Student"
                                        className="absolute top-0 right-0 h-40 w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {program.eligibility.map((item, i) => (
                                    <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${item.className}`}>
                                        {item.label}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{program.title}</h3>
                            <p className="text-lg text-gray-700 mb-6">{program.subtitle}</p>

                            <div className="flex items-center gap-8 text-sm mb-6">
                                <div>
                                    <p className="text-gray-500">BATCH STARTS</p>
                                    <p className="font-semibold">{program.batchInfo.starts}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">🔥</p>
                                    <p className="font-semibold">{program.batchInfo.seats || program.batchInfo.registrations}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    {program.cta}
                                </button>
                                {/* <button
                                    onClick={() => setShowForm(true)}
                                    className="block w-full text-center text-blue-600 font-semibold hover:text-blue-700"
                                >
                                    Know More
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={showForm} onOpenChange={setShowForm}>
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Book a Live Demo For Free!</h2>
                                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                                    ✕
                                </button>
                            </div>

                            {showSuccess ? (
                                <div className="text-center py-10">
                                    <h3 className="text-2xl font-bold text-green-600 mb-4">Thank you!</h3>
                                    <p>Your form was submitted successfully.</p>
                                </div>
                            ) : (

                                <form onSubmit={handleSubmit}
                                    className="space-y-4">
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_subject" value={`New Demo Booking from ${formData.name || "User"}`} />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                            placeholder="Enter Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Mobile Number (WhatsApp Number) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-1 flex rounded-md">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="block w-full rounded-r-md border border-gray-300 px-3 py-2"
                                                placeholder="Enter Mobile Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                            placeholder="Enter your Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Course <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="course"
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                            value={formData.course}
                                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                            required
                                        >
                                            <option value="">Select Course</option>
                                            <option value="Data Science Training">Data Science Training</option>
                                            <option value="Digital Marketing Training">Digital Marketing Training</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Highest Qualification <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="qualification"
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                            value={formData.qualification}
                                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                            required
                                        >
                                            <option value="">Select Highest Qualification</option>
                                            <option value="12th">12th / Intermediate</option>
                                            <option value="diploma">Diploma</option>
                                            <option value="graduation-completed">Graduation (Completed)</option>
                                            <option value="graduation-ongoing">Graduation (Ongoing)</option>
                                            <option value="post-graduation-completed">Post Graduation (Completed)</option>
                                            <option value="post-graduation-ongoing">Post Graduation (Ongoing)</option>
                                        </select>
                                    </div>

                                    {formData.qualification && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Year of Graduation <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="graduationYear"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                                value={formData.graduationYear}
                                                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                                                required
                                            >
                                                <option value="">Select Year</option>
                                                {Array.from({ length: 10 }, (_, i) => {
                                                    const year = new Date().getFullYear() - 5 + i
                                                    return (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                            placeholder="Enter your City"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="text-sm text-gray-500">
                                        By proceeding further, I agree to the{' '}
                                        <a href="#" className="text-blue-600">Terms & Conditions</a>
                                        {' '}and{' '}
                                        <a href="#" className="text-blue-600">Privacy Policy</a>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 text-white rounded-md py-2 font-semibold hover:bg-purple-700 disabled:bg-purple-400"
                                    >Book My Demo

                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Programs