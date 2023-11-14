import { useState } from "react"
import Navbars from "../../SharedComponents/Navbar/Navbars"
import aboutsideimg from "../../../assets/AboutUs/about-us-side-banner.png";
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from 'react-icons/hi';
import homebg3 from '../../../assets/images/homepage/bgimg3.png'
import { useForm } from 'react-hook-form';
import ImageUpload from '../../SharedComponents/Helper/ImageUpload/ImageUpload'
import Footer from "../../SharedComponents/Footer/Footer";
const BecomeaTutor = () => {
  const [navfix, setNavfix] = useState()
  const { register, handleSubmit } = useForm();

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true)
    } else {
      setNavfix(false)
    }
  }
  window.addEventListener('scroll', setFixed)



  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <>
     <div className={`z-10  ${navfix ? ' top-0 h-[10%] w-full fixed bg-white transition-all duration-300 ease-in-out ' : ''}`} >
        <Navbars className='relative ' />

      </div>


  
      <section className="ContactUs_Top_Banner bg-[#2C6777]">
        <div className="container mx-auto py-20 ">
          <div className=" mx-auto flex flex-wrap  md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem]">
                <h1 className="text-white text-center md:text-start text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                Be an Educator
                </h1>

                <p className="leading-relaxed text-center md:text-start xl:text-[20px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                Join us in shaping the future of our students, and embark on a rewarding journey as an integral member of our tutoring program. Your passion for teaching will find a meaningful home here.
                </p>
              </div>
            </div>

            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center flex justify-center md:justify-end">
              <img alt="Top-Banner-Side-Image" className=" " src={aboutsideimg} />
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeaTutor_Secound_Banner ">
        <div className="container px-5 py-10 lg:py-14 md:py-10  mx-auto ">
          <div className=" mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto  h-auto object-cover object-center">
              <img alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2  w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">

              <div className="xl:w-[45rem]">
                <h1 className="text-gray-800 text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                Benefits of tutoring with us
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-black mb-4 lg:font-semibold md:font-semibold font-normal">
                The benefits of tutoring with us extend beyond the classroom, as we invite educators like you to join our dynamic tutoring program. As part of our team, you'll have the opportunity to make a lasting impact on the lives of eager learners, helping them unlock their full academic potential.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">


          <div className="container mx-auto">


            <h3 className="text-3xl text-gray-800 font-bold mb-2 py-2 ml-3">Get in Touch</h3>
            <div className="grid grid-cols-12 gap-5  p-2">

              <div className="col-span-12 ">

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="">
                    <div className="form_Contant bg-white rounded-xl p-4">
                      <div className="grid grid-rows-2 gap-2 grid-flow-col">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 caret-green-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your first name" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Last_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Tagline:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Last_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Hourly Fee:</label>
                          <input type="number" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Last_Name')}
                          />
                        </div>
                        <div className="row-start-1 row-end-3 ">
                        <ImageUpload/>
                        </div>



                       

                      
                      </div>
                     
                      {/* <div className="grid md:grid-cols-2 mt-10 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number:</label>
                          <input type="number" id="Phone_Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone number" required

                            {...register("Phone_Number")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address:</label>
                          <input type="text" id="Email_Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required

                            {...register("Email_Address")}

                          />
                        </div>

                      </div> */}
                       <div className="grid md:grid-cols-3 mt-10 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number:</label>
                          <input type="number" id="Phone_Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your phone number" required

                            {...register("Phone_Number")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Email Address:</label>
                          <input type="text" id="Email_Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your email address" required

                            {...register("Email_Address")}

                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Email Address:</label>
                          <input type="text" id="Email_Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your email address" required

                            {...register("Email_Address")}

                          />
                        </div>

                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Subject:</label>
                        <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required

                          {...register("Subject")}
                        />
                      </div>

                      <div className="mb-2">

                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Comment</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>

                      </div>
                      <div>
                        <button type="submit" className="text-white bg-[#2c6777] hover:bg-[#2c6777] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button></div>

                    </div>






                    

                  </div>


                </form>



              </div>
              <div className="col-span-12  ">

                <div>
                  <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow">

                    <h5 className="mb-3 p-2 text-base font-semibold bg-[#2c6777] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                      Do You Have Any Questions?
                    </h5>


                    <div className="p-4">
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your first name" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Last_Name')}
                          />
                        </div>

                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your first name" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Last_Name')}
                          />
                        </div>

                      </div>

                      <div className="text-end">
                        <p className="inline text-sm font-medium mr-5">Save & Update your details information</p>

                        <button className="bg-[#2c6777]  text-sm text-white font-normal px-3 py-2 rounded">save&upload</button>
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

export default BecomeaTutor