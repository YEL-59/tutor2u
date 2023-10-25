import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars"
import Footer from "../../SharedComponents/Footer/Footer";
import homebg from '../../../assets/images/homepage/homebg1.png'
import homebg3 from '../../../assets/images/homepage/bgimg3.png'
import Carddata from '../../SharedComponents/Data/HomeSubjectCarddata/homesubjectcarddata.json'
import ExploreTutordata from '../../SharedComponents/Data/ExploreTutordata/ExploreTutordata.json'
import Cards from '../Props/Cards'
import ExploreTutor from "../Props/ExploreTutor";


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
  return (
    <>
      <div className={`z-10 ${navfix ? 'top-0 h-[4%] w-full fixed bg-[white]' : ''}`} >
        <Navbars className='relative' />

      </div>




      <section className="Home_Top_Banner bg-[#2C6777]">
        <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
          <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem]">
                <h1 className="text-white text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  We help you find and manage tutors.
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </p>
                <div>

                  <form className="max-w-xl">
                    <label className=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-1 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                      <button type="submit" className="text-white absolute right-2.5 bottom-1 bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-[#2c6777] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg} />
            </div>
          </div>
        </div>
      </section>




      <section className="Home_Secound_Banner ">
        <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
          <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">

              <div className="xl:w-[45rem]">
                <h1 className="text-black text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Why choice tutor2u?
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4 lg:font-semibold md:font-semibold font-normal">
                  We have an astounding success in teaching with our skilled and passionate educators who does the work with love and exellence. Your path to excellence starts with the right tutor by your side.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="Home_Third_Banner ">
        <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
          <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">

            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">

              <div className="xl:w-[45rem]">
                <h1 className="text-black text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Why choice tutor2u?
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4 lg:font-semibold md:font-semibold font-normal">
                  We have an astounding success in teaching with our skilled and passionate educators who does the work with love and exellence. Your path to excellence starts with the right tutor by your side.
                </p>
              </div>
            </div>
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>


          </div>
        </div>
      </section>






      <section className="div3-Section w-full container mx-auto " >
        <div className=" mt-16 mb-16">

          <div>


            <div className=" p-5  ">

              <h1 className=" text-3xl max-w-3xl mx-auto text-center font-medium mb-10">Time to elevate your learning, Find a tutor in any subject below.</h1>

              <div className="grid grid-cols-1 lg:grid-cols-4 justify-between items-center  gap-5 mb-10 ">

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



      <section className="div3-Section w-full container mx-auto " >
        <div className=" mt-16 mb-16">




          <div className=" p-5  ">

            <h1 className=" text-3xl max-w-3xl mx-auto text-center font-medium mb-10">Every Tutor is Professional and Highly Qualified</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 p-2 lg:p-0">


            {
              ExploreTutordata.map((exploretutordata)=>(

                <ExploreTutor key={exploretutordata.id}   exploretutordata={exploretutordata}></ExploreTutor>

              ))
            }

          </div>



        </div>

      </section>

    
      <section className="">
        <Footer />
      </section>

    </>
  )
}

export default Home