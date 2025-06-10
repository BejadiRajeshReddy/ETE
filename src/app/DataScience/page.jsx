'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import toast from 'react-hot-toast';

const FormPage = () => {
    const initialFormState = {
        name: '',
        photo: null,
        email: '',
        presentAddress: '',
        permanentAddress: '',
        mobileNumber: '',
        parentsMobileNumber: '',
        schoolDetails: '',
        pucDetails: '',
        graduationDetails: '',
        postGraduationDetails: '',
        workExperience: '',
        resume: null,
        date: '',
    };

    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const resetForm = () => {
        setFormData(initialFormState);
        // Reset file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.value = '';
        });
    };

    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const submitToGoogleSheets = async (formDataToSubmit) => {
        try {
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKmTp99eBNAbCuTN6P1LHabOeoANey10H9WTDwXEZ1xLtRC7-nn0ab4EH8YUb_e_ox7w/exec';
            
            // Convert files to base64 if they exist
            let photoData = null;
            let resumeData = null;

            if (formData.photo) {
                photoData = {
                    name: formData.photo.name,
                    type: formData.photo.type,
                    data: await convertFileToBase64(formData.photo)
                };
            }

            if (formData.resume) {
                resumeData = {
                    name: formData.resume.name,
                    type: formData.resume.type,
                    data: await convertFileToBase64(formData.resume)
                };
            }

            // Prepare the complete data object
            const completeData = {
                ...formDataToSubmit,
                photoFile: photoData,
                resumeFile: resumeData
            };

            // Use fetch with no-cors mode to prevent new tab
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(completeData)
            });

            return { success: true };
        } catch (error) {
            console.error('Error submitting to Google Sheets:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare form data for submission
            const submissionData = {
                formType: 'Data Science Training Application',
                timestamp: new Date().toISOString(),
                name: formData.name,
                email: formData.email,
                presentAddress: formData.presentAddress,
                permanentAddress: formData.permanentAddress,
                mobileNumber: formData.mobileNumber,
                parentsMobileNumber: formData.parentsMobileNumber,
                schoolDetails: formData.schoolDetails,
                pucDetails: formData.pucDetails,
                graduationDetails: formData.graduationDetails,
                postGraduationDetails: formData.postGraduationDetails,
                workExperience: formData.workExperience,
                date: formData.date,
                photoFileName: formData.photo ? formData.photo.name : 'No file uploaded',
                resumeFileName: formData.resume ? formData.resume.name : 'No file uploaded'
            };

            // Submit to Google Sheets with files
            await submitToGoogleSheets(submissionData);
            
            // Add a slight delay before showing success message
            setTimeout(() => {
                toast.success('Application submitted successfully! Files uploaded to Google Drive.');
                resetForm();
            }, 1000);
        } catch (error) {
            toast.error('Failed to submit application. Please try again.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F0EBF8] to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-900 text-white py-6 px-8 rounded-t-xl">
                    <div className="flex items-center justify-center mb-4">
                        <img src="/ETE_Final.png" alt="" className='h-20' />
                    </div>
                    <h1 className="text-3xl text-center font-bold">Application form for Data Science Training</h1>
                    <p className="text-sm mt-2 text-center opacity-90">Complete all required fields marked with an asterisk (*)</p>
                </div>

                <div className="p-8">
                    <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">ETE DIGITAL PVT LTD</h2>
                        <div className="space-y-1 text-center text-gray-600">
                            <p>112/4, 1st Floor, BMR Landmark, HSR Layout, Mangammanapalya Main Rd, 7th Sector,</p>
                            <p>Bommanahalli, Bangalore, Karnataka 560068</p>
                            <p>Mail: <a href="mailto:admin@etedigital.com" className="text-[#673AB7] hover:underline">admin@etedigital.com</a>  |    Website: <a href="http://www.etedigital.com" target="_blank" className="text-[#673AB7] hover:underline">www.etedigital.com</a></p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border-gray-300 focus:border-[#673AB7] focus:ring-[#673AB7]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Applicant Photo <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#673AB7] file:text-white hover:file:bg-[#563098]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Present Address <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    required
                                    name="presentAddress"
                                    value={formData.presentAddress}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Permanent Address <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    required
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                    rows={4}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Parents Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <Input
                                required
                                type="tel"
                                name="parentsMobileNumber"
                                value={formData.parentsMobileNumber}
                                onChange={handleChange}
                                className="w-full rounded-lg"
                            />
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Educational Details</h3>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    School Name | Year of Passing | Percentage <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="text"
                                    name="schoolDetails"
                                    value={formData.schoolDetails}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    +2/HSC/PUC Details <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="text"
                                    name="pucDetails"
                                    value={formData.pucDetails}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                    placeholder="College Name | Year of Passing | Percentage | Specialization"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Graduation Details <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="text"
                                    name="graduationDetails"
                                    value={formData.graduationDetails}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                    placeholder="College Name | Year of Passing | Percentage | Specialization"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Post Graduation Details
                                </label>
                                <Input
                                    type="text"
                                    name="postGraduationDetails"
                                    value={formData.postGraduationDetails}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                    placeholder="College Name | Year of Passing | Percentage | Specialization"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Work Experience
                            </label>
                            <Textarea
                                name="workExperience"
                                value={formData.workExperience}
                                onChange={handleChange}
                                className="w-full rounded-lg"
                                rows={4}
                                placeholder="Please provide details of your work experience (if any)"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Resume
                                </label>
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#673AB7] file:text-white hover:file:bg-[#563098]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Date <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Terms and Conditions of Coaching</h3>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">I have read, understood and agreed to the below terms and conditions:</p>
                                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                                    <li>ETE DIGITAL Pvt Ltd is herein after referred to as END TO END DIGITAL PVT LTD.</li>
                                    <li>Fees paid to ETE DIGITAL towards the course training are non-refundable.</li>
                                    <li>ETE DIGITAL does not offer job or placement guarantee, express or implied.</li>
                                    <li>Fees paid is not refundable.</li>
                                    <li>Duration of Coaching: 40days, +7-5 days (2 hours per day, 5 days a week)</li>
                                    <li>ETE DIGITAL authority has the right to modify the above terms and conditions.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-gradient-to-r from-[#673AB7] to-[#9C27B0] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </Button>
                            <Button
                                type="button"
                                onClick={resetForm}
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-transparent text-[#673AB7] border border-[#673AB7] rounded-lg hover:bg-gray-50 disabled:opacity-50"
                            >
                                Clear Form
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPage;