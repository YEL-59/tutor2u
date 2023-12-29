import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import problemresolvedsideimg from "../../../assets/AboutUs/problem-resolved-side-img.png";
import solutionsideimg from "../../../assets/AboutUs/solution-side-img.png";
import howitworkimg from "../../../assets/AboutUs/how-it work-img.png";
import ancordianimg from "../../../assets/AboutUs/Group33745.png"
import { Accordion } from 'flowbite-react';
import Footer from "../../SharedComponents/Footer/Footer";
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
             <div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbars className="relative " />
      </div>
            {/* About top banner start */}

            <section className="AboutUs_Top_Banner bg-[#2C6777]">
                <div className="container py-10 lg:py-14 md:py-10  mx-auto mb-12">
                    <div className=" mx-auto flex flex-wrap md:flex-row flex-col items-center p-2 xl:p-2">
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
                            <div className="xl:w-[45rem] text-center md:text-start">
                                <h1 className="text-white text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                                    About Us
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                                    Established on (Date where tutor2u started) Welcome to our world of excellence in education! At Tutor2U, we believe that every learners deserves the best educators who can inspire, guide, and transform their academic journey.Our tutor sessions are carefully designed to provide a personalized and enriching learning experience. With diverse backgrounds and expertise; Tutor2U educators are equipped with exceptional qualifications and a commitment to excellence.

                                </p>
                            </div>
                        </div>

                        <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover flex justify-center md:justify-end">
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
                            <div className="xl:w-[48rem] xl:ml-10  md:ml-5 text-center md:text-start">
                                <h1 className="text-[#2c6777]  text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                                    The Problem Revealed
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                                    Students and parents seek personal tutors because tutoring provides personalized support for their educational and personal development needs. We are one with educators with a mission to reduce learning difficulties and develop the Emotional Intelligence required to tailor lessons to each student's learning style.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* The Problem Revealed section end */}

            {/* Our Solution section start */}
            <section className="AboutUs_Top_Banner bg-[#DCECFA]">
                <div className="container  py-10 lg:py-20 md:py-10  mx-auto mb-12">
                    <div className=" mx-auto flex flex-wrap md:flex-row flex-col items-center p-2 md:-p-0">
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
                            <div className="xl:w-[45rem] text-center md:text-start">
                                <h1 className="text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                                    Our Solution
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                                    Our tutors are not just educators; they are mentors, guides, and friends who bring emotional intelligence to the forefront of the learning experience. We care about the fact that every student is unique and that's why we have the best tutors who are equipped with the ability to connect on a personal level. This can contribute in building trust and rapport to ensure that students feel comfortable during the sessions
                                </p>
                            </div>
                        </div>

                        <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center flex justify-center md:justify-end">
                            <img alt="Top-Banner-Side-Image" className="mt-5 " src={solutionsideimg} />
                        </div>
                    </div>
                </div>
            </section>
            {/*Our Solution section end */}

            {/* How It’s Work section start */}
            <section className="How-It’s-work ">
                <div className="container  py-5 lg:py-5 md:py-10  mx-auto mb-12 ">
                    <div className=" mx-auto flex px-5 items-center justify-center flex-col mb-6">
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4">
                                How It’s Work
                            </h1>
                            <p className=" xl:w-3/5 lg:w-3/4 text-lg mx-auto text-gray-800 font-medium mb-10 ">
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
                            <div className="h-10 w-10 md:w-20 md:h-20 inline-flex items-center justify-center rounded-full bg-[#2C6777] mb-5 flex-shrink-0">
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
                            <div className="h-10 w-10 md:w-20 md:h-20  inline-flex items-center justify-center rounded-full bg-[#2C6777] mb-5 flex-shrink-0">
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
                            <div className="h-10 w-10 md:w-20 md:h-20  inline-flex items-center justify-center rounded-full bg-[#2C6777] mb-5 flex-shrink-0">
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
                <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
                    <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
                        <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
                            <div className="xl:w-[45rem] text-center md:text-start">
                                <h1 className="text-[#2c6777] text-[24px] xl:text-[30px] lg:text-[30px] md:text-[26px] title-font font-bold mb-2 ">
                                    Our Mission
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                                    At Tutor2u, our mission is to provide learners with intelligible, smart, and
                                    cohesive learning experiences, aiming to lessen the hardship of learning complex
                                    knowledge in the education industry.
                                </p>
                            </div>
                            <div className="xl:w-[45rem] text-center md:text-start">
                                <h1 className="text-[#2c6777] text-[24px] xl:text-[30px] lg:text-[30px] md:text-[26px] title-font font-bold mt-10 mb-2 ">
                                    Our Goal
                                </h1>

                                <p className="leading-relaxed xl:text-[20px] text-lg text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                                    To be the leading online tutoring platform that empowers students to achieve academic excellence and gain confidence and unlock their full potential.
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


                <div className=" lg:p-5">

                    <h1 className="title-font text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-12 mb-12 text-center">
                        Frequently Asked Questions
                    </h1>
                    <div className="container mx-auto">



                        <div className="grid grid-cols-12 gap-4  p-2">
                            {/* large div */}
                            <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">
                                {/* TODO */}

                                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                <div>


                                    <Accordion collapseAll>
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                1.What makes a good tutor?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                                        dropdowns, modals, navbars, and more.
                                                    </p>
                                                </p>
                                                <p className="text-gray-500 ">
                                                    <p>
                                                        Check out this guide to learn how to
                                                    </p>
                                                    <a
                                                        className="text-cyan-600 hover:underline "
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
                                                2. Which tutor is right for you?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        Before you look for a tutor, it's helpful to have a really clear idea of exactly where your child needs help - whether with a specific English Literature text, one area of Maths or their exam technique - and filter your choices accordingly. If you're not sure where they need to focus, having a chat with them or their teacher can help you work out the best place to start. In a free meeting, you can then ask the tutor any questions you like and see how well they get on with your child before deciding to book.
                                                    </p>
                                                </p>
                                                <p className="text-gray-500 ">
                                                    <p>
                                                        Check out the
                                                    </p>
                                                    <a
                                                        className="text-cyan-600 hover:underline "
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
                                                3. Why is online tutoring important?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                                        components, whereas Tailwind UI offers sections of pages.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                                        technical reason stopping you from using the best of two worlds.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 ">
                                                    Learn more about these technologies:
                                                </p>
                                                <ul className="list-disc pl-5 text-gray-500 ">
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline "
                                                            href="#"
                                                        >
                                                            <p>
                                                                Flowbite Pro
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline "
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
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                4. What are the benefits of online tutoring?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                                        components, whereas Tailwind UI offers sections of pages.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                                        technical reason stopping you from using the best of two worlds.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 ">
                                                    Learn more about these technologies:
                                                </p>
                                                <ul className="list-disc pl-5 text-gray-500 ">
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline "
                                                            href="#"
                                                        >
                                                            <p>
                                                                Flowbite Pro
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline "
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
                                        <Accordion.Panel>
                                            <Accordion.Title>
                                                5. How to find a tutor?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                                        components, whereas Tailwind UI offers sections of pages.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 ">
                                                    <p>
                                                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                                        technical reason stopping you from using the best of two worlds.
                                                    </p>
                                                </p>
                                                <p className="mb-2 text-gray-500 ">
                                                    Learn more about these technologies:
                                                </p>
                                                <ul className="list-disc pl-5 text-gray-500 ">
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline "
                                                            href="#"
                                                        >
                                                            <p>
                                                                Flowbite Pro
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-cyan-600 hover:underline "
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
                            <div className="col-span-12 lg:col-span-3" >
                                <div className=" w-auto  border border-gray-200 rounded-lg bg-cover bg-center bg-hero-pattern shadow  ">
                                    <div className="p-3  py-16">
                                        <div className="text-center  w-full">
                                            <h1 className="title-font text-white text-[28px]  title-font font-me  mb-4">
                                                Any Question
                                            </h1>
                                            <p className="  mx-auto  font-normal   mb-4 text-white ">
                                                Do you have questions? We have answers. Check the most frequently asked questions regarding Kick-Ass Seniors
                                            </p>
                                        </div>

                                        <div className="flex justify-center ">
                                            <a href="#"
                                                className=" bg-[#2c6777] text-white no-underline hover:bg-[#4e84d4] mt-2  px-9 py-2 rounded-md    text-[16px] font-[500]"
                                            >Ask Question</a>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            {/* FAQ section end    */}

            <section className="">
                <Footer />
            </section>

        </>
    );
};

export default AboutUs;