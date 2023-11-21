import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Navbars from '../../SharedComponents/Navbar/Navbars';
import Footer from '../../SharedComponents/Footer/Footer';
import { Link } from 'react-router-dom';
const TutionJob = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
      if (window.scrollY >= 70) {
          setNavfix(true);
      } else {
          setNavfix(false);
      }
  }
  window.addEventListener("scroll", setFixed);
  const ButtonData = [
    { id: 1, buttoncontant: "+ English Medium" },
    { id: 2, buttoncontant: "+ Arabic Medium" },
    { id: 3, buttoncontant: "+ Admission Test" },
  ];
  const ButtonData2 = [
    { id: 1, buttoncontant: "Any Gender" },
    { id: 2, buttoncontant: "Male" },
    { id: 3, buttoncontant: "Female" },
  ];
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
      <section className="Contact_Us_Middle ">
        <div className=" bg-[#F0F8FF] lg:p-16">


          <div className="container mx-auto">


            <h3 className="text-2xl text-[#2c6777] md:text-3xl font-bold ml-3 mb-2 mx-3">Get in Touch</h3>
            <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2">

              <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">

                <form action="" >

                  <div className="w-full rounded-xl   text-center bg-white border border-gray-200  shadow">


                    <div className="flex flex-wrap justify-between p-2 text-base font-semibold bg-[#F3F3F3]  rounded-t-xl   border-b-2 w-full  ">
                      <p> Need Male Tutor For Class 6(EM)</p>
                      <p>ID# T_6787</p>
                    </div>

                    <div className="p-2">




                      <div className="flex flex-wrap justify-between font-semibold">
                        <div>
                          <p > <span className="font-bold text-[#2c6777] in">Catagory:</span> English Medium</p>
                        </div>
                        <div>
                          <p > <span className="font-bold text-[#2c6777]">Class</span> :English Medium</p>
                        </div>
                        <div>
                          <p > <span className="font-bold text-[#2c6777]">Gender</span> :English Medium</p>
                        </div>


                      </div>

                      <div className="text-start font-semibold">
                        <div>
                          <p > <span className="font-bold text-[#2c6777] ">Salary Range  :</span> Salary Range  : 10.000$/month --- 4 dayes/week</p>
                        </div>
                        <div>
                          <p > <span className="font-bold text-[#2c6777]">Desired Tutor Gender:</span> Male</p>
                        </div>
                        <div>
                          <p > <span className="font-bold text-[#2c6777]">Subject</span> :Subject :  Math, Physics Medium</p>
                        </div>

                      </div>




                      <div className="flex flex-wrap justify-between">
                        <div className="flex items-center gap-2">


                          <p className=" font-bold text-[#2c6777]">Other Requerment: -</p>
                        </div>
                        <div>
                          <Link to='/tutor_job_details' className="text-sm text-white font-medium bg-[#2c6777] rounded-full px-3  mr-2 py-1">See Details</Link>
                          <p className="text-[12px] font-medium text-gray-800 mt-2"><span >posted on:</span> 10 Aug At 4:40 PM</p>

                        </div>

                      </div>
                    </div>

                  </div>

                </form>



              </div>
              
              <div className="col-span-12 lg:col-span-3 ">

                <div>
                  <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow ">

                    <h5 className="mb-3 p-2 text-base font-semibold  text-[#2c6777] text-start  rounded-t-lg  border-b-2 w-full md:text-xl ">
                      Tution Categary
                    </h5>


                    <div className="p-4 ">

                      <div className="flex flex-wrap  gap-2 mt-3">
                        {ButtonData.map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            className="text-gray-800 bg-white hover:bg-[#089bab] border focus:ring-4 focus:outline-none hover:text-white focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 w-full text-center inline-flex items-center"

                          >
                            {btn.buttoncontant}
                            <RxCross2 className="ml-3 h-3.5 w-3.5" />
                          </button>
                        ))}
                      </div>
                      
                      <select id="countries" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option >Select Class</option>
                        <option value="US">5</option>
                        <option value="CA">10</option>
                        <option value="FR">12</option>
                        <option value="DE">14</option>
                      </select>
                      <select id="countries" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option >Select Range</option>
                        <option value="US">500</option>
                        <option value="CA">200</option>
                        <option value="FR">100</option>
                        <option value="DE">50</option>
                      </select>

                     <div>
                     <h1 className='text-[#2c6777] ml-1 font-semibold mt-2 text-lg'>Tutor Gender</h1>
                      <div className="flex flex-wrap  gap-2 mt-3">
                        {ButtonData2.map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            className="text-gray-800 bg-white hover:bg-[#089bab] border focus:ring-4 focus:outline-none hover:text-white focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"

                          >
                            {btn.buttoncontant}
                            <RxCross2 className="ml-3 h-3.5 w-3.5" />
                          </button>
                        ))}
                      </div>
                     </div>
                     <div>
                     <h1 className='text-[#2c6777] ml-1 font-semibold mt-2 text-lg'>Student Gender</h1>
                      <div className="flex flex-wrap  gap-2 mt-3">
                        {ButtonData2.map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            className="text-gray-800 bg-white hover:bg-[#089bab] border focus:ring-4 focus:outline-none hover:text-white focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"

                          >
                            {btn.buttoncontant}
                            <RxCross2 className="ml-3 h-3.5 w-3.5" />
                          </button>
                        ))}
                      </div>
                     </div>

                     <div>
                      <button className='font-semibold text-[#fdffff] bg-[#2c6777] px-3 py-1 rounded-md w-full mt-5'>Filter Tution</button>
                     </div>

                    </div>

                  </div>



                </div>
              </div>
            </div>
          </div>


        </div>

      </section>
      <section className="">
        <Footer />
      </section>


    </>
  )
}

export default TutionJob