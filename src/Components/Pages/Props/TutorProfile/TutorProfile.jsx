import aboutsideimg from "../../../../assets/AboutUs/about-us-side-banner.png";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from 'react-icons/ci'
import { GoCodeReview } from "react-icons/go";
import { BsCalendar2Date } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";

const TutorProfile = ({ TutorProfileProps }) => {
  const { id, name, rating, balance, title } = TutorProfileProps;
  return (
    <>
      <div
        key={id}
        className="w-full  p-4  text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8"
      >
        <div>
          {/* <div>
            <div className="flex flex-wrap  justify-between ">
            <img className="w-28 h-28 rounded" src={aboutsideimg} alt="" />
              <div className="flex space-x-2 justify-center items-start">
               

                <div className="flex flex-col ">
                  <p className="text-start font-bold">{name}</p>
                  <div className="flex flex-wrap space-x-1">
                    <svg
                      className="w-4 h-4  text-yellow-300 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2  text-sm font-medium text-gray-900 ">
                      4{rating}
                    </p>
                    <BiIdCard className="h-5" />
                    <a
                      href="#"
                      className="text-sm font-medium truncate text-gray-900 underline hover:no-underline "
                    >
                      #{id}
                    </a>
                  </div>
                  <p className="text-md truncate text-start font-bold">{title}</p>
                </div>
              </div>
              <div>
                <p className="text-xs truncate">starting from</p>
                <p className="font-bold">{balance}/hr</p>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row  gap-2">
            <div className="flex justify-center ">
              <img className="h-28 rounded" src={aboutsideimg} alt="" />
            </div>
            <div className=" flex flex-col w-full justify-between">
              <div className="flex justify-between items-center">
                <p className="text-xl text-[#2c6777] font-bold">{name}</p>
                <div className="text-xs">
                  <p className="truncate">starting from</p>
                  <p className="text-sm font-bold">{balance}/hr</p>
                </div>
              </div>
              <p className="text-md font-semibold text-start truncate">{title}</p>
              <div className="flex gap-10 items-center">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ml-2 text-xs font-medium text-gray-900">
                    {rating}5.0(1000)
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ml-2 text-xs font-medium text-gray-900">
                    4 95% job Complete
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold text-start">Language I know</p>
              <div className="flex flex-wrap font-semibold space-x-1">
                <p className="text-xs font-semibold text-gray-900">English</p>
                <p className="ml-2 text-xs font-semibold text-gray-900">Hindi</p>
                <p className="ml-2 text-xs font-medium text-gray-900">Urdu</p>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-2">
          {/* <h5 className="mb-2 text-3xl text-start font-bold text-gray-900 ">Work fast from anywhere</h5> */}
          <p className="mb-2 text-start text-gray-500 text-sm line-clamp-3">
            { }
          </p>
        </div>

        <div className="flex flex-wrap justify-between md:p-2">
          <div className="flex justify-center items-center gap-2 mb-1">
            <AiOutlineHeart />
            <p className="text-xs font-medium text-blue-700">www.tutor2u.com/dany/alves/jhdujhd </p>
            <AiOutlineHeart />
          </div>
          <div>
            <button className="text-sm text-white font-medium bg-[#2c6777] rounded-full px-3  mr-2 py-1">
              Chat Now
            </button>
            <Link
              to={`/tutor_details/${id}`}
              className="text-sm text-white font-medium bg-[#2c6777] rounded-full py-1 px-3 "
            >
              Book Tutor
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full  p-4 mt-5 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex flex-wrap border-b-2  ">
          <div className="flex items-center gap-2 border-[#373A3F] border-r-2 mb-2 "><AiOutlineHome /> <p className="mr-2 font-semibold text-[#2c6777]">Introduction</p></div>
          <div className="flex items-center gap-2  ml-2 mb-2"><GoCodeReview /> <Link to={'/tutor_reviews'} className="mr-2 font-semibold text-[#2c6777]">Review</Link></div>

        </div>
        <div className="font-normal text-sm text-start border-b-2">
          <h1 className="text-start text-[#373A3F] font-bold text-2xl mt-1 mb-1">A Short Brief</h1>
          <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, printer took a galley of type  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem </p>
        </div>



        <div>
          <h1 className="text-start text-[#373A3F] font-bold text-2xl mt-1 mb-1">Education</h1>

          <Accordion collapseAll className="border-0">
            <Accordion.Panel>
              <Accordion.Title className="p-0">
                <h1 className="text-start text-[#373A3F] font-bold md:text-2xl truncate  mt-1 mb-1">MBBS, MD, DM rheumatology</h1>
                <div className="max-w-md flex justify-between text-sm truncate">
                  <div className="flex items-center gap-2  mb-2 "><AiOutlineHome /> <p className="mr-2">Univarsity of Florida</p></div>
                  <div className="flex items-center gap-2 mb-2 "><CiLocationOn /> <p className="mr-2">Florida FA</p></div>
                  {/* <div className="flex items-center gap-2 mb-2 "><BsCalendar2Date /> <p className="mr-2">25 jun 2023</p></div> */}

                </div>
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
              <Accordion.Title className="p-0">
                <h1 className="text-start text-[#373A3F] font-bold md:text-2xl truncate mt-1 mb-1">MBBS, MS, Mch neurosergery</h1>

                <div className=" flex justify-between max-w-xs text-sm truncate">
                  <div className="flex items-center gap-2  mb-2 "><AiOutlineHome /> <p className="mr-2">Univarsity of Florida</p></div>
                  <div className="flex items-center gap-2 mb-2 "><CiLocationOn /> <p className="mr-2">Florida FA</p></div>


                </div>
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
              <Accordion.Title className="p-0">
                <h1 className="text-start text-[#373A3F] font-bold md:text-2xl mt-1 mb-1">MBBS, MS, Mch neurosergery</h1>

                <div className=" flex justify-between max-w-xs text-sm">
                  <div className="flex items-center gap-2  mb-2 truncate "><AiOutlineHome /> <p className="mr-2">Univarsity of Florida</p></div>
                  <div className="flex items-center gap-2 mb-2 truncate "><CiLocationOn /> <p className="mr-2">Florida FA</p></div>


                </div>
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
    </>
  );
};

export default TutorProfile;