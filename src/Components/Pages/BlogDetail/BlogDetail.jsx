import blogDetailImg from "../../../assets/images/blogdetail/blog-banner-img.png";
import blogDetailSideSmallImg from "../../../assets/images/blogdetail/blog-detail-small-side-laptop-img.png";
import blogDetailCardImg from "../../../assets/images/blogdetail/extra-large-side-img.png";
import blogDetailCommentManImg from "../../../assets/images/blogdetail/comment-man-img.png";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaCommentsSolid } from "react-icons/lia";
import { BiShareAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import { useState } from "react";
import Footer from "../../SharedComponents/Footer/Footer";

// import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetail = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
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
      <section className="bg-[#F0F8FF] py-24 ">
        <div className="container px-5 pt-20 pb-20  mx-auto">
          <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
            <h1 className=" lg:text-5xl lg:text-[40px] md:text-4xl  text-[24px] font-bold title-font mb-2 text-[#2c6777]">
              Welcome to Our Blog
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-800 xl:text-2xl md:text-xl text-lg font-medium mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{" "}
            </p>
          </div>
        </div>
        {/* blog Qualification section start */}

        <div className="container mb-20 mx-auto">
          <div className="px-5 py-0 mx-auto flex flex-wrap  items-start">
            <div className="lg:w-3/5 md:w-1/2 md:pr-12 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900 mt-10 mb-8">
                What Qualification Do I Need to Be a Tutor in Australia
              </h1>
              <img
                className="object-cover object-center h-full w-full"
                src={blogDetailImg}
                alt="large banner img"
              />
              <div className="my-4 mx-2">
                <div className="flex  w-full">
                  <div className=" xl:w-1/2 lg:w-1/2 w-0 xl:block lg:block  hidden">
                    <span className=" flex space-x-2  xl:w-3/5 lg:w-full">
                      <p className="xl:text-sm text-xs">26 september l </p>{" "}
                      <p className="xl:text-sm text-xs">12 pm</p>
                    </span>
                  </div>

                  <span className="xl:w-1/2 lg:1/2 w-full flex flex-wrap xl:justify-end lg:justify-end justify-center ">
                    <div className="flex flex-wrap  ">
                      <AiOutlineHeart className="xl:mt-1 mt-1 mx-1 xl:h-4 xl:w-4 h-3 w-3 " />{" "}
                      <p className="xl:text-sm text-xs">20 Like</p>
                    </div>
                    <div className="flex flex-wrap lg:mx-10 mx-2 ">
                      <LiaCommentsSolid className="xl:mt-1 mt-1 mx-1 xl:h-4 xl:w-4 h-3 w-3" />{" "}
                      <p className="xl:text-sm text-xs">36 Comment</p>
                    </div>

                    <div className="flex flex-wrap ">
                      <BiShareAlt className="xl:mt-1 mt-1 mx-1 xl:h-4 xl:w-4 h-3 w-3 " />{" "}
                      <p className="xl:text-sm text-xs">17 Share</p>
                    </div>
                  </span>
                </div>
              </div>
              <hr className="flex-grow border-gray-300  h-0.5 bg-gray-400" />
              <ul className="list-disc list-inside text-lg text-neutral-950 my-10">
                <li className="mb-4 text-xl ">
                  Technical Upskilling School clubs provide the perfect
                  opportunity for the students to gain new skills and enhance
                  the existing ones. One can gain a plethora of technical and
                  practical abilities here. For instance, a child aspiring to be
                  an engineer can gain invaluable skills from a STEM club.
                  Similarly, fields like photography or cooking require a strong
                  grasp of the intricacies of the craft. This can be achieved at
                  a relevant school club.
                </li>
                <li className="mb-4 text-xl">
                  Enhances Job and University Application As the scope of
                  admission criteria and job requirements widens, it has become
                  crucial to list all aspects of one’s personality in resumes
                  and applications. One can showcase their interests, habits,
                  and hobbies through their time at a school organization.
                  Moreover, they provide a glimpse into students’ aptitude and
                  soft skills. For instance, students can convey their ideas
                  creatively and master grammatical skills through a writing
                  club. It can boost their profile to get those university
                  acceptances rolling.
                </li>
                <li className="mb-4 text-xl">
                  Networking and Friends Clubs also act as an outlet for
                  students to express themselves. They can connect socially,
                  irrespective of their age and social background. It makes
                  students affable and enables them to work in teams. The
                  benefits of networking exceed the school
                </li>
              </ul>
              <div className="border-l-4 border-[#2C6777] ml-10 ">
                <p className="ml-4 text-xl">
                  grounds and can help students academically and professionally.
                  For instance, their peers at clubs can help them in future
                  career prospects. Or their teachers can provide a Letter of
                  Recommendation or help them find a part-time job or a
                  scholarship.
                </p>
              </div>

              <div className=" rounded-lg  lg:flex py-5">
                <img
                  src={blogDetailSideSmallImg}
                  alt="Laptop on Desk"
                  className="md:w-full  xl:mt-8 lg:mt-20  md:rounded-t-none rounded-lg h-full overflow-hidden xl:w-2/3 lg:w-full w-full  my-5  "
                />
                <div className=" lg:pl-10 xl:my-6 lg:my-10   pl-5 ">
                  <p className=" text-xl">
                    grounds and can help students academically and
                    professionally. For instance, their peers at clubs can help
                    them in future career prospects. Or their teachers can
                    provide a Letter of Recommendation or help them find a
                    part-time job or a scholarship.
                  </p>
                </div>
              </div>

              <ul className="list-disc list-inside text-lg text-neutral-950  ">
                <li className="mb-4 text-xl">
                  Soft Skills Development Besides gaining technical skills,
                  specific to a subject or niche, school clubs become a platform
                  to improve their soft skills. Interacting with people of
                  different ages and learning together develops their emotional
                  intelligence. Students learn effective communication
                  strategies, teamwork skills, resolving conflicts and
                  leadership skills.
                </li>
              </ul>

              {/* share the srticle start */}
              <div className="flex items-center mt-10 space-x-2 ">
                <span className=" text-[#2C6777] font-[500] md:text-[18px] text-[15px] ">
                  SHARE THIS ARTICLE
                </span>
                <span className="w-6 h-6 items-center justify-center inline-flex rounded-full  border-2 border-[#2C6777]">
                  <BiLogoFacebook size={15} color="#2C6777" />
                </span>
                <span className="w-6 h-6 items-center justify-center inline-flex rounded-full  border-2 border-[#2C6777]">
                  <BiLogoTwitter size={15} color="#2C6777" />
                </span>
                <span className="w-6 h-6 items-center justify-center inline-flex rounded-full  border-2 border-[#2C6777]">
                  <BiLogoYoutube size={15} color="#2C6777" />
                </span>
                <span className="w-6 h-6 items-center justify-center inline-flex rounded-full  border-2 border-[#2C6777]">
                  <BiLogoLinkedinSquare size={15} color="#2C6777" />
                </span>
                <hr className="flex-grow border-gray-300  h-0.5 bg-gray-400 lg:block md:hidden hidden" />
              </div>
              {/* share the srticle end  */}
              {/* comment section start  */}

              <div className="flex flex-col text-left  w-full mb-6 mt-10">
                <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-[#2C6777]">
                  Comments (5){" "}
                </h1>
                {/* <hr class="h-0.5 bg-gray-300"/> */}
              </div>

              <div className=" rounded-lg my-10">
                <div className="flex flex-col md:flex-col lg:flex-row  xl:flex-row md:pl-12  ">
                  <img
                    src={blogDetailCommentManImg}
                    alt=" Comment man image "
                    className="   border-2 border-[#2C6777] block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0 "
                  />
                  <div className="lg:pl-5 md:pl-0 pl-5 ">
                    <div className=" ">
                      <div className="flex  w-full">
                        <div className=" xl:w-1/2 lg:w-1/2 ">
                          <h2 className="text-[#2C6777] text-lg title-font font-medium mb-2">
                            Jack Shane
                          </h2>
                        </div>
                        <div className="flex justify-end w-1/2  mr-4 items-center">
                          <BsReply className=" h-4 w-4 mx-1 text-[#2C6777] " />{" "}
                          <p className=" text-center xl:text-sm text-xs text-[#2C6777]">
                            Reply
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className=" text-[16]  font-[400] tracking-tight text-black-900  mb-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s, when an unknown
                      printer took{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* comment section start  */}

              {/* leave a comment column img and text start */}

              <div className="flex flex-col text-left  w-full mb-6 mt-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#2C6777]">
                  Leave A Comment
                </h1>
              </div>
              <div className=" md:1/2 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name....."
                        className="w-full bg-[#ffffff] bg-opacity-50 rounded border border-none  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address....."
                        className="w-full bg-[#ffffff] bg-opacity-50 rounded border border-none  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message....."
                        className="w-full bg-[#ffffff] bg-opacity-50 rounded border border-none   focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="inline-flex  rounded-lg  items-center px-12 py-2 text-[18px] font-[600] text-center bg-[#2C6777] text-white no-underline hover:bg-gray-800 ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {/* <!--leave a comment column img and text end--> */}
            </div>
            <div className="lg:w-2/6 md:w-1/2  rounded-lg  md:pr-16 lg:pr-0 pr-0  flex flex-col md:ml-auto w-full md:mt-0 mt-20">
              {/* {{-- search bar section star  --}} */}

              <form className="mt-16">
                <div className="max-w-xl xl:ml-6 ml-0">
                  <div className="flex space-x-4">
                    <div className="flex rounded-md overflow-hidden w-full">
                      <input
                        type="text"
                        className="  w-full rounded-md rounded-r-none  bg-[#ffffff] pl-5"
                        placeholder="Search Blog....... "
                      />
                      <button className="bg-[#ffffff] px-6 text-lg py-4 rounded-r-md">
                        <BiSearch className="" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* {{-- search bar  section end --}} */}
              {/* Category section start */}
              <div className="bg-[#ffffff] mt-8 rounded-lg mb-10  ">
                <div className="bg-[#ffffff] p-4 w-full rounded-t-lg">
                  <span type="" className=" text-gray-700 font-bold text-xl  ">
                    Category
                  </span>
                </div>
                <hr />
                <button
                  type="button"
                  className="border-gray-400 border-b-2 text-gray-700 font-medium flex  text-[18px] justify-between w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-[#2C6777] hover:text-[#ffffff] "
                >
                  Culture
                </button>

                <button
                  type="button"
                  className="border-gray-400 border-b-2 text-gray-700 font-medium text-[18px] flex  justify-between w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-[#2C6777] hover:text-[#ffffff]"
                >
                  Creativity
                </button>
                {/* <hr className=" w-3/4 h-0.5  mx-auto  bg-gray-400 border-0 rounded " /> */}
                <button
                  type="button"
                  className=" border-gray-400 border-b-2 text-gray-700 font-medium  text-[18px] flex  justify-between w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-[#2C6777] hover:text-[#ffffff]"
                >
                  Food
                </button>

                <button
                  type="button"
                  className="border-gray-400 border-b-2  text-gray-700 font-medium  text-[18px] flex  justify-between w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-[#2C6777] hover:text-[#ffffff]"
                >
                  Travel
                </button>

                <button
                  type="button"
                  className="border-gray-400 border-b-2 text-gray-700 font-medium text-[18px] flex  justify-between w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-[#2C6777] hover:text-[#ffffff]"
                >
                  Music
                </button>

                <button
                  type="button"
                  className="border-gray-400 border-b-2 text-gray-700 font-medium   text-[18px] flex  justify-between w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-[#2C6777] hover:text-[#ffffff]"
                >
                  Tution
                </button>
              </div>

              {/* Category section end */}

              {/* horizontal card 1*/}
              <div className=" rounded-lg  md:flex my-3  bg-white  border-8     border-[#ffffff]">
                <div className="flex rounded-lg  md:flex-row flex-col  p-2 justify-center ">
                  <img
                    src={blogDetailCardImg}
                    alt="Laptop on Desk"
                    className="md:w-1/3 rounded-t-lg xl:rounded-l-lg md:rounded-l-lg md:rounded-t-none "
                  />
                  <div className="pl-4 lg:p-2 md:mt-3 mt-5 ">
                    <p className="mb-2 text-[16px]  font-[500] tracking-tight text-black-900 ">
                      What Type clab Should You Join During High School?{" "}
                    </p>
                    <p className="text-sm text-[#2c6777] truncate  pb-2">
                      read more...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blog Qualification section end */}
      </section>
      <section className="">
        <Footer />
      </section>
    </>
  );
};

export default BlogDetail;
