import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import problemresolvedsideimg from "../../../assets/AboutUs/problem-resolved-side-img.png";
import solutionsideimg from "../../../assets/AboutUs/solution-side-img.png";
import howitworkimg from "../../../assets/AboutUs/how-it work-img.png";
import { Accordion } from 'flowbite-react';
const AboutUs = () => {
    const [navfix, setNavfix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 70) {
            setNavfix(true);
        } else {
            setNavfix(false);
        }
    }
    window.addEventListener("scroll", setFixed);
    return (
        <>
            <div>
                <div className={`z-10 ${navfix ? "top-0 h-[10%] w-full fixed bg-[#523970]" : ""}`}>
                    <Navbars />
                </div>
            </div>
            {/* About top banner start */}

            <section className="AboutUs_Top_Banner bg-[#2C6777]">
                <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto mb-12">
                    <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
                            <div className="xl:w-[45rem]">
                                <h1 className="text-white text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                                    Animated Night Hill Illustrations
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has
                                </p>
                            </div>
                        </div>

                        <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
                            <img alt="Top-Banner-Side-Image" className=" " src={aboutsideimg} />
                        </div>
                    </div>
                </div>
            </section>

            {/* About top banner start */}

            {/* The Problem Revealed section start */}

            <section className="Problem-revealed ">
                <div className="container px-5  lg:py-14 md:py-12   mx-auto mb-10 ">
                    <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center space-xr-4">
                        <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center ">
                            <img alt="Top-Banner-Side-Image" className=" " src={problemresolvedsideimg} />
                        </div>
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5 ">
                            <div className="xl:w-[48rem] xl:ml-10  md:ml-5">
                                <h1 className="text-black text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                                    The Problem Revealed
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4  font-normal">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* The Problem Revealed section end */}

            {/* Our Solution section start */}
            <section className="AboutUs_Top_Banner bg-[#DCECFA]">
                <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto mb-12">
                    <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
                            <div className="xl:w-[45rem]">
                                <h1 className="text-black text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                                    Our Solution
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4  font-normal">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has
                                </p>
                            </div>
                        </div>

                        <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
                            <img alt="Top-Banner-Side-Image" className=" " src={solutionsideimg} />
                        </div>
                    </div>
                </div>
            </section>
            {/*Our Solution section end */}

            {/* How It’s Work section start */}
            <section className="How-It’s-work ">
                <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto mb-12 ">
                    <div className=" mx-auto flex px-5 items-center justify-center flex-col mb-6">
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font text-black text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4">
                                How It’s Work
                            </h1>
                            <p className=" xl:w-2/5 lg:w-3/4 mx-auto text-gray-500s font-medium mb-10 ">
                                One-to-one online tuition that raises grades Lessons to fit your schedule, from the
                                comfort of home
                            </p>
                        </div>
                        <img
                            alt="hero"
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            src={howitworkimg}
                        />
                    </div>

                    {/* 3 card section start */}
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#2C6777] mb-5 flex-shrink-0">
                                <p className="text-3xl font-medium text-white">1</p>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Talk face-to-face</h2>
                                <p className="leading-relaxed text-base">
                                    Students and tutors see each other via live video – great for building rapport
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#2C6777] mb-5 flex-shrink-0">
                                <p className="text-3xl font-medium text-white">2</p>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Share and collaborate</h2>
                                <p className="leading-relaxed text-base">
                                    Upload essays or past papers, and work through examples together on the whiteboard
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#2C6777] mb-5 flex-shrink-0">
                                <p className="text-3xl font-medium text-white">3</p>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Rewatch lessons</h2>
                                <p className="leading-relaxed text-base ">
                                    Lessons are recorded, so students can watch them later for revision
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 3 card section end */}
                </div>
            </section>
            {/* How It’s Work section end */}

            {/* Our Mission section start */}
            <section className="AboutUs_Top_Banner bg-[#DCECFA]">
                <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto mb-12">
                    <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
                            <div className="xl:w-[45rem]">
                                <h1 className="text-black text-[24px] xl:text-[30px] lg:text-[30px] md:text-[26px] title-font font-bold mb-4 ">
                                    Our Mission
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4  font-normal">
                                    At Tutor2u, our mission is to provide learners with intelligible, smart, and
                                    cohesive learning experiences, aiming to lessen the hardship of learning complex
                                    knowledge in the education industry.
                                </p>
                            </div>
                            <div className="xl:w-[45rem]">
                                <h1 className="text-black text-[24px] xl:text-[30px] lg:text-[30px] md:text-[26px] title-font font-bold mb-4 ">
                                    Our Goal
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4  font-normal">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry standard dummy text ever since the
                                </p>
                            </div>
                        </div>

                        <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
                            <img alt="Top-Banner-Side-Image" className=" " src={solutionsideimg} />
                        </div>
                    </div>
                </div>
            </section>
            {/*Our Mission section end */}

            {/* Faq section start */}
            <section className="FAQ-section ">
                <div className="bg-[#F0F8FF] lg:p-16">


                    <div className="container mx-auto">


                        <h1 className="title-font text-black text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 text-center">
                            Frequently Asked Questions
                        </h1>
                        <div className="grid grid-cols-12 gap-4  p-2">
                            {/* large div */}
                            <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">
                                {/* TODO */}

                                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                <div>


                                    <Accordion collapseAll>
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                What is Flowbite?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                    <p>
                                                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                                        dropdowns, modals, navbars, and more.
                                                    </p>
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    <p>
                                                        Check out this guide to learn how to
                                                    </p>
                                                    <a
                                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                        href="#"
                                                    >
                                                        <p>
                                                            get started
                                                        </p>
                                                    </a>
                                                    <p>
                                                        and start developing websites even faster with components on top of Tailwind CSS.
                                                    </p>
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                Is there a Figma file available?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                    <p>
                                                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                                        has a design equivalent in our Figma file.
                                                    </p>
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    <p>
                                                        Check out the
                                                    </p>
                                                    <a
                                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                        href="#"
                                                    >
                                                        <p>
                                                            Figma design system
                                                        </p>
                                                    </a>
                                                    <p>
                                                        based on the utility classes from Tailwind CSS and components from Flowbite.
                                                    </p>
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                What are the differences between Flowbite and Tailwind UI?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                    <p>
                                                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                                        components, whereas Tailwind UI offers sections of pages.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                    <p>
                                                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                                        technical reason stopping you from using the best of two worlds.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                    Learn more about these technologies:
                                                </p>
                                                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                            href="#"
                                                        >
                                                            <p>
                                                                Flowbite Pro
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                            href="#"
                                                            rel="nofollow"
                                                        >
                                                            <p>
                                                                Tailwind UI
                                                            </p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>



                                </div>


                            </div>
                            {/* right side small dev */}
                            <div className="col-span-12 lg:col-span-3 ">
                                <div className=" w-auto  bg-[#363233] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-4  py-16">
                                        <div className="text-center  w-full">
                                            <h1 className="title-font text-white text-[24px]  title-font font-me  mb-4">
                                                Any Question
                                            </h1>
                                            <p className="  mx-auto  font-normal   mb-10 text-white ">
                                                Do you have questions? We have answers. Check the most frequently asked questions regarding Kick-Ass Seniors
                                            </p>
                                        </div>

                                        <div className="flex justify-center pb-9">
                                            <a href="#"
                                                className=" bg-[#1570FA] text-white no-underline hover:bg-[#4e84d4] mt-4  px-9 py-2 rounded-3xl    text-[16px] font-[500]"
                                            >Ask Question</a>

                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            {/* FAQ section end */}
        </>
    );
};

export default AboutUs;
