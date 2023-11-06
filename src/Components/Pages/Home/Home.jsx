import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars"
import Footer from "../../SharedComponents/Footer/Footer";
import homebg from '../../../assets/images/homepage/HomeImage.png'
import homebg3 from '../../../assets/images/homepage/bgimg3.png'
import Carddata from '../../SharedComponents/Data/HomeSubjectCarddata/homesubjectcarddata.json'
import ExploreTutordata from '../../SharedComponents/Data/ExploreTutordata/ExploreTutordata.json'
import Cards from '../Props/Cards'
import ExploreTutor from "../Props/ExploreTutor";
import Slider from "../../SharedComponents/Slider/Slider";

const Home = () => {

  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener('scroll', setFixed);

  const [loadmore, setLoadMore] = useState(3)
  function handleLoadMore() {
    setLoadMore(prevNum => prevNum + 3);
  }
  return (
    <>
      <div className={`z-10  ${navfix ? ' top-0 h-[8%] w-full fixed bg-white transition-all duration-300 ease-in-out ' : ''}`} >
        <Navbars className='relative ' />

      </div>




      <section className="Home_Top_Banner bg-[#2C6777]">
        <div className="container mx-auto pb-0 md:pb-0 lg:pb-0 px-2 md:px-0 lg:px-0  py-10 lg:py-14 md:py-10 xl:pt-10  ">
          <div className="mx-auto flex flex-wrap  md:flex-row flex-col items-center">
            <div className="xl:w-3/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem]">
                <h1 className="text-white text-center md:text-start lg:text-start text-[24px] xl:text-[50px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  We help you find <br /> and manage tutors.
                </h1>

                <p className="leading-relaxed text-center md:text-start lg:text-start  xl:text-[24px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                  Skilled and Emotionally Intelligent Educators that will make learning exciting and engaging.
                </p>
                <div>

                  <form className="max-w-xl mt-10 p-2 md:p-0 lg:p-0">
                    <label className=" text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-1 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                      <button type="submit" className="text-white absolute right-2 bottom-[5px] bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 ">Search</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

            <div className="  xl:w-3/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center flex justify-center md:justify-end">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg} />
            </div>
          </div>
        </div>
      </section>




      <section className="Home_Secound_Banner ">
        <div className="container  mx-auto  py-10 lg:py-28 md:py-20  ">
          <div className=" mx-auto flex flex-wrap   md:flex-row flex-col items-center">
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full  lg:h-auto h-auto object-cover object-center flex justify-center md:justify-start">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full md:pl-10 lg:pl-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">

              <div className="xl:w-[45rem]">
                <h1 className="text-gray-800 text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Why choice tutor2u?
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg  text-black mb-4 lg:font-semibold md:font-semibold font-normal">
                  We have an astounding success in teaching with our skilled and passionate educators who does the work with love and exellence. Your path to excellence starts with the right tutor by your side.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="Home_Third_Banner bg-[#dcecfa]">
        <div className="container  py-10 lg:py-28 md:py-14  mx-auto ">
          <div className=" mx-auto flex flex-wrap  md:flex-row flex-col items-center">

            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">

              <div className="xl:w-[45rem]">
                <h1 className="text-gray-800 text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Talented and Qualified Tutors to Serve You for Help
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4 lg:font-semibold md:font-semibold font-normal">
                  Our beloved experts worked so hard to earn their success in their expertise, the love to teach and make every lesson intelligible are what makes them valuable.
                </p>
              </div>
            </div>
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center  flex justify-center md:justify-end">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>


          </div>
        </div>
      </section>






      <section className="div3-Section w-full container mx-auto " >
        <div className=" mt-16 mb-16">

          <div>


            <div className=" p-5 md:p-0  ">

              <h1 className=" text-[24px] max-w-3xl text-gray-800 xl:text-[40px] lg:text-[36px] md:text-[27px] mx-auto text-center  font-[650] mb-10">Time to elevate your learning, Find a tutor in any subject below.</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center items-center   gap-5 mb-10 ">

                {
                  Carddata.map((carditem) => (

                    <Cards key={carditem.id} carditem={carditem}></Cards>

                  ))

                }


              </div>




            </div>
          </div>


        </div>

      </section>



      <section className="div3-Section w-full bg-[#dcecfa] " >
        <div className=" mt-25 mb-20  container mx-auto">




          <div className=" p-5 md:p-0 ">

            <h1 className="text-[24px] text-gray-700 xl:text-[40px] lg:text-[36px] md:text-[27px] text-center py-16  font-[650] max-w-xl mx-auto ">Every Tutor is Professional and Highly Qualified</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center  gap-5 p-2   ">


            {
              ExploreTutordata.slice(0, loadmore).map((exploretutordata) => (

                <ExploreTutor key={exploretutordata.id} exploretutordata={exploretutordata}></ExploreTutor>

              ))
            }

          </div>
          <div className="text-center lg:mt-2 ">

            {ExploreTutordata.length > loadmore && (
              <button
                onClick={handleLoadMore}
                className="bg-[#2c6777] hover:bg-[#2c6777]  mb-10  text-white font-bold py-2 px-9 rounded "
              >
                Show More
              </button>
            )}

          </div>




        </div>



      </section>
      <section className="p-2  mb-20">

        <div className="  ">

          <h1 className="text-[24px] text-gray-700 xl:text-[40px] lg:text-[36px] md:text-[27px] text-center mb-10   font-[650] max-w-xl mx-auto ">Let students speak for us</h1>
        </div>
        <Slider></Slider>
      </section>


      <section className="">
        <Footer />
      </section>

    </>
  )
}

export default Home