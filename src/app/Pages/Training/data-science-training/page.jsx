'use client';
import ShadowTitle from '@/components/common/ShadowTitle'
import AnimatedText from '@/components/ui/animatedText'
import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'
import { PiMouseSimpleBold } from 'react-icons/pi'
import { SiTicktick } from 'react-icons/si'
import { FaSchoolFlag } from 'react-icons/fa6'
import { ArrowDownToLine } from 'lucide-react'
import SectionFooter from '@/components/common/Home/SectionFooter';
import { ChevronLeft, ChevronRight } from "lucide-react";

const coursbenefits = [
    {
        img: '/images/services/digi_training_file/Industry-aligned.png',
        content: (
            <>
                Hands on<strong>  Learning Experience </strong>
            </>
        )
    },
    {
        img: '/images/services/digi_training_file/Projects.png',
        content: (
            <>
                <strong>1:1 Doubt</strong> Solving
            </>
        )
    },
    {
        img: '/images/services/digi_training_file/tools.png',
        content: (
            <>
                Career <strong>Focused</strong> Approach
            </>
        )
    },
    {
        img: '/images/services/digi_training_file/Job-Portal.png',
        content: (
            <>
                <strong>Expert Job </strong> Mentorship
            </>
        )
    }
]

const curriculumData = [
    { title: 'Fundamental of Data Science' },
    { title: 'Advanced Excel' },
    { title: 'My SQL' },
    { title: 'Power BI' },
    { title: 'Data Analysis' },
    { title: 'Python & R-Programming' },
    { title: 'Machine Learning' },
    { title: 'Business Statistics' },
    { title: 'Communication' },
    { title: 'Deep Learning' },
    { title: 'Latest Gen AI Tools' }
]

const whobenefit = [
    {
        title: 'Beginners',
        bgImg:
            '/images/services/digi_training_file/DigitalMarketingEnthusiasts.jpg',
        content:
            "Those starting their journey in data science or looking to switch careers."
    },
    {
        title: 'Working Professionals',
        bgImg:
            '/images/services/digi_training_file/EstablishedCareerIndividuals.jpg',
        content:
            "Individuals seeking to upskill or transition into data-focused roles."
    },
    {
        title: 'Students',
        bgImg:
            '/images/services/digi_training_file/CreativeContentProducers.jpg',
        content: "Learners aiming to build a strong foundation in data science for future opportunities."
    },
    {
        title: 'Entrepreneurs',
        bgImg:
            '/images/services/digi_training_file/Entrepreneurs.jpg',
        content:
            " Business owners wanting to leverage data for strategic decision-making."
    }
]

const projectsData = [
    {
        img: '/images/services/digi_training_file/AdsMarketing.png',
        title: 'Fitbit Fitness Tracker Data',
        heading:
            'Analyze Fitbit fitness tracker data to deliver marketing and business solutions to WeFit and its Subsidiaries.',
        content:
            "By using the data determine some smart device usage trends, how customers can use them, and how they can affect marketing plans so that the Analytic team of WeFit can offer business solutions and add new clients.",
        links: [
            { title: 'Microsoft Excel' },

        ]
    },
    {
        img: '/images/services/digi_training_file/blog.jpg',
        title: 'IPL franchise',
        heading: "Developing auction strategy for new IPL franchise by analyzing past IPL data to create a strong and balanced squad.",
        content:
            "Gather and analyze player data (performance, form, fitness, metrics like strike rate and bowling economy).",
        links: [
            { title: 'SQL and Excel' },

        ]
    },
    {
        img: '/images/services/digi_training_file/email.jpg',
        title: 'Sales Data ',
        heading:
            "Create a visually interactive and informative dashboard of sales data of a bike shop named 'The Bike Haven' in Power BI.",
        content:
            "Total sales (YTD) with year-over-year comparison, The growth percentage and most successful months highlighted, Category Performance, Sales Trends Interactivity: Filters for time, categories, and regions.",
        links: [
            { title: 'SQL' },
            { title: 'Power BI' },
        ]
    },
    {
        img: '/images/services/digi_training_file/email.jpg',
        title: 'Machine Learning Model ',
        heading:
            "Create a visually interactive and informative dashboard of sales data of a bike shop named 'The Bike Haven' in Power BI.",
        content:
            "Create a machine learning model which will help the company in determining the salary of newly hired employees.Task: Creating a machine learning model that will help them determine the salary of newly hired employees.",
        links: [
            { title: 'Python ML' },
        ]
    }
]

function DataScienceTraining() {

    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const downloadPDF = () => {

        const pdfUrl = '/BrochureFile/DataScience.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ETEDatascience.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };



    return (
        <div className='from-2% md:to-8% relative bg-gradient-to-b from-[#DFFFDC] via-[#68BA7F] to-white xl:to-20%'>
            <div className=''>
                <div className='flex min-h-[30vh] w-full flex-col items-center justify-start p-5 sm:p-3'>
                    <div className='relative flex w-full flex-wrap items-center justify-center gap-10 md:gap-3'>
                        <img
                            src={'/images/services/digitalMarketingTraining/digitraining.png'}
                            className='w-[80vw] md:w-[30vw]'
                        />
                        <div className='flex flex-col items-center justify-center gap-5 md:justify-center sm:justify-center'>
                            <div className='font-sans'>

                                <AnimatedText
                                    text='Your First Step to Become a'
                                    className='font-sans text-base-large font-medium'
                                    duration={0.02}
                                />
                                <AnimatedText
                                    text='Data '
                                    className='text-heading-1 '
                                />
                                <AnimatedText
                                    text='Analyst'
                                    className='text-heading-1 '
                                />
                                <AnimatedText
                                    text='Start Here'
                                    duration={0.1}
                                    className='text-heading-1 tracking-wide'
                                />
                            </div>
                            <Button className='rounded-none  bg-[#68BA7F] font-sans font-bold uppercase text-white hover:bg-[#68ba7f]  hover:text-black'>
                                Know More
                            </Button>
                        </div>
                    </div>
                </div>

                {/* course benefits */}
                <div className='mb-0'>
                    <ShadowTitle
                        head={'DATA ANALYST'} title={'Data Analyst with  ML Course'}
                    />
                </div>
                <section className='mb-16 w-full p-0'>
                    <div className='flex flex-col-reverse flex-wrap items-center justify-center px-2 pr-2 gap-3 md:flex-row'>
                        <div className='m-h-full flex flex-1 flex-col items-center justify-center'>
                            <p className='p-5 text-justify font-sans'>
                                {"Are you aspiring to build a career in data science, but feeling unsure if you can crack it? Don’t worry, ETE offers a comprehensive Data Science course, covering everything from data analysis to deploying solutions for customers. You'll learn key tools like Python, R, SQL, Power BI, and gain hands-on experience with machine learning, NLP, and data visualization. By the end of the course, you'll have the practical skills and be fully prepared for a career in data science."}
                            </p>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                                {coursbenefits.map((ben, ind) => (
                                    <div
                                        key={ind}
                                        className='flex flex-col items-center justify-center overflow-hidden rounded-lg bg-[#68BA7F] shadow-md'
                                    >
                                        <img className='block w-[70%] object-cover' src={ben.img} />
                                        <p className='p-5 text-center  font-sans text-white'>
                                            {ben.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='mt-auto flex w-[80%] flex-col items-center justify-center gap-3 rounded-2xl bg-[#68BA7F] p-3 shadow-2xl md:w-[50%] lg:w-[25%] xl:w-[23%]'>
                            <div className='relative flex h-[260px] w-full items-center justify-center'>
                                <img
                                    className='absolute bottom-0 block max-h-[340px] w-auto object-cover'
                                    src='/images/services/digi_training_file/professionals.png'
                                />
                                <div className='from-2% absolute bottom-0 z-20 flex h-full w-full bg-gradient-to-t from-[#68BA7F] to-transparent to-20%'></div>
                            </div>
                            <button className='flex w-full items-center justify-center text-[#68BA7F] rounded-lg bg-white px-5 py-2 font-sans font-bold shadow-md'>
                                The next learning journey starts soon!
                            </button>
                        </div>
                    </div>
                </section>

                {/* course heighlights */}
                <section className='mb-16 w-full py-12 font-sans'>
                    <h2 className='text-center md:mb-16'>
                        <span className='text-[#68BA7F]'>ETE</span> Experiential Learning Opportunities
                    </h2>

                    <div className='mt-5 grid grid-cols-1 px-2 pr-2 gap-3 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='relative overflow-hidden rounded-[30px] border-[1px] border-[#1daabc] bg-[#FAFAFA] p-8 md:rounded-[36px]'>
                            <div className='relative z-10 h-full font-sans'>
                                <div className='flex h-full flex-1 flex-col justify-between space-y-5'>
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex justify-between text-xl font-bold text-gray-900 md:text-2xl'>
                                            <span>Qualify For In-Demand Job Roles</span>
                                        </div>
                                        <div className=''>
                                            <ul className='space-y-2 pt-4'>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Data Scientist</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Data Analyst</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Business Analyst</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Power BI Developer</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span> SQL Developer</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden rounded-[30px] border-[1px] border-[#68BA7F] bg-[#FAFAFA] p-8 md:rounded-[36px]'>
                            <div className='relative z-10 h-full font-sans'>
                                <div className='flex h-full flex-1 flex-col justify-between space-y-5'>
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex justify-between text-xl font-bold text-gray-900 md:text-2xl'>
                                            <span>Placement Highlights</span>
                                        </div>
                                        <div className=''>
                                            <ul className='space-y-2 pt-4'>
                                                <li className='flex items-center space-x-2 font-medium text-[#9D9C9C]'>
                                                    <span>Placement Record</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <span>100 % Placement Assistance </span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-[#9D9C9C]'>
                                                    <span>Salaries upto</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <span> INR 4 - 8 Lakhs for Freshers</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-[#9d9c9c]'>
                                                    <span>Top Recruiters </span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    Resume Hubs <br /> Unisys HR
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden rounded-[30px]  border-[1px] border-[#68BA7F] bg-[#FAFAFA] p-8 md:rounded-[36px]'>
                            <div className='relative z-10 h-full font-sans'>
                                <div className='flex h-full flex-1 flex-col justify-between space-y-5'>
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex justify-between text-xl font-bold text-gray-900 md:text-2xl'>
                                            <span>Skills You Gain</span>
                                        </div>
                                        <div className=''>
                                            <ul className='space-y-2 pt-4'>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Python/R, SQL</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Power BI, ML frameworks</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Statistics, Excel</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Business Acumen, Reporting Tools</span>
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Communication, DAX, ETL Processes</span>{' '}
                                                </li>
                                                <li className='flex items-center space-x-2 font-medium text-black'>
                                                    <SiTicktick className="text-[#68BA7F]" />
                                                    <span>Data Modeling, Optimization Techniques</span>{' '}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* curriculum */}
                <div className='mb-16 w-full  rounded-lg  bg-[#68BA7F] p-10 font-sans'>
                    <div className='flex flex-wrap items-center justify-between'>
                        <h4 className='text-white'>Curriculum</h4>
                        <p className='text-white'>
                            ETE Digital - Acquire Knowledge On End-To-End Marketing
                        </p>
                    </div>
                    <div className='mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3'>
                        {curriculumData?.map((cur, ind) => (
                            <div
                                key={ind}
                                className='flex h-[70px] items-center justify-start gap-2 rounded-lg bg-white px-3'
                            >
                                <FaSchoolFlag className='text-[#68BA7F]' size={28} />
                                <p className='text-[#15410d]'>{cur.title}</p>
                            </div>
                        ))}
                        <div className='items-center flex  justify-center mt-3'>
                            <Button className='w-[15rem] text-1xl font-bold bg-white text-[#68BA7f] hover:bg-white ' onClick={downloadPDF}>
                                <ArrowDownToLine /> Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>

                {/* hands on learning */}
                <section className='mb-16 p-3 font-sans'>
                    <h2 className='text-center md:mb-16'>
                        <span className='text-[#68BA7F]'>Projects</span> for hands-on
                        learning
                    </h2>
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-6 pb-10 hide-scroll-bar py-10 snap-x snap-mandatory"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {projectsData.map((proj, ind) => (
                                <div
                                    key={ind}
                                    className="relative inline-block h-[37rem] w-1/3 flex-shrink-0 flex-col items-center justify-start gap-2 rounded-lg border-2 border-[#68BA7F] p-5 px-8 shadow-md snap-start"
                                >
                                    <div className="mt-2 flex items-center justify-center">
                                        <img alt="image" src={proj?.img || "/placeholder.svg"} className="block h-[80%] w-[65%] object-cover" />
                                    </div>
                                    <h5 className="text-center">{proj.heading}</h5>
                                    <p className="text-center">{proj.content}</p>
                                    <div className="mt-5 grid w-full grid-cols-2 gap-3">
                                        {proj.links?.map((link, linkind) => (
                                            <a key={linkind} className="rounded-lg border-2 border-[#68BA7F] p-1 text-center">
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="absolute left-1/2 top-0 flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
                                        <div className="flex w-auto items-center justify-center rounded-full bg-[#68BA7F] px-4 py-3 text-white">
                                            {proj.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#68BA7F] hover:bg-[#68BA7F] hover:text-white"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#68BA7F] hover:bg-[#68BA7F] hover:text-white"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </section>

                {/* who whould benefit */}
                <section className='w-full p-3 font-sans'>
                    <h2 className='text-center'>
                        Who Will <span className='text-[#68BA7F]'>Find</span> This Course Valuable
                    </h2>
                    <div className='md:grid-flow-col-2 mt-2 grid grid-cols-1 gap-3 md:mb-5 lg:grid-cols-4'>
                        {whobenefit?.map((cur, ind) => (
                            <div
                                key={ind}
                                className='card flex min-h-[270px] w-auto items-center justify-center gap-3 font-sans'
                            >
                                <div className='card__content relative flex h-full w-full items-center justify-center p-0 text-center font-bold transition-transform duration-1000'>
                                    {/* front side */}
                                    <div className='card__front absolute bottom-0 left-0 right-0 top-0 flex h-full min-w-full items-center justify-center'>
                                        <div className='flex h-[150px] w-full items-center justify-center rounded-2xl bg-[#68BA7F] p-16 shadow-xl'>
                                            <h4 className='text-center font-bold text-white'>
                                                {cur.title}
                                            </h4>
                                        </div>
                                    </div>
                                    {/* backside */}
                                    <div className='card__back absolute bottom-0 left-0 right-0 top-0 h-auto min-w-full rounded-2xl bg-white px-4 py-2 shadow-xl'>
                                        <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
                                            <div className='flex w-full items-center justify-center'>
                                                <div className='flex aspect-auto w-[50%] items-center justify-center overflow-hidden rounded-full bg-white'>
                                                    <img
                                                        src={cur.bgImg}
                                                        className='block w-auto object-cover'
                                                    />
                                                </div>
                                            </div>
                                            <p className=''>{cur?.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='absolute right-4 -mr-4 top-[30vh] md:top-[10vh] flex flex-col items-center justify-center gap-1'>
                        <div className='flex h-[100px] w-auto rounded-t-3xl bg-[#68BA7F] p-0.5'></div>
                        <h6 className='mt-4 rotate-90 font-sans text-[0.85rem] uppercase'>
                            scroll
                        </h6>
                        <PiMouseSimpleBold size={30} className='mt-4' />
                    </div>
                </section>
            </div>

            <SectionFooter />
        </div>
    )
}

export default DataScienceTraining
